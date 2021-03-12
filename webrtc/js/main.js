'use strict';

var localStream;
// {
//   socketId: {
//     pc: new RTCPeerConnection,
//     isInitiator: true,
//     isStarted: true,
//     isChannelReady: true,
//   }
// }
var peers = {};
var remoteStream;
var turnReady;
var pcConfig = {
  'iceServers': [{
    'urls': 'stun:stun.l.google.com:19302'
  }]
};

// Set up audio and video regardless of what devices are present.
var sdpConstraints = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true
};

/////////////////////////////////////////////

var room = 'foo';
// Could prompt for room name:
// room = prompt('Enter room name:');

var socket = io.connect();

if (room !== '') {
  socket.emit('create or join', room);
  console.log('Attempted to create or  join room', room);
}

socket.on('created', function(room) {
  console.log('Created room ' + room);
  // isInitiator = true;
});

socket.on('full', function(room) {
  console.log('Room ' + room + ' is full');
});

socket.on('join', function (room, socketId){
  console.log('Another peer made a request to join room ' + room);
  console.log('This peer is the initiator of room ' + room + '!');
  peers[socketId] = { pc: undefined, isStarted: false, isChannelReady: true, isInitiator: true }
  // isChannelReady = true;
});

socket.on('joined', function(room) {
  console.log('joined: ' + room);
  // isChannelReady = true;
});

socket.on('log', function(array) {
  console.log.apply(console, array);
});

////////////////////////////////////////////////

function sendMessage(message) {
  console.log('Client sending message: ', message);
  socket.emit('message', message);
}

function sendMessageTo(socketId, message) {
  console.log('Client sending message: ', socketId, message);
  socket.emit('messageTo', socketId, message);
}

// This client receives a message
socket.on('message', function(socketId, message) {

  if (!peers[socketId]) {
    peers[socketId] = { pc: undefined, isStarted: false, isChannelReady: true, isInitiator: false }
  }

  console.log('Client received message:', socketId, message);
  if (message === 'got user media') {
    maybeStart(socketId);
  } else if (message.type === 'offer' && !peers[socketId].isInitiator) {
    if (!peers[socketId].isStarted) {
      maybeStart(socketId);
    }
    peers[socketId].pc.setRemoteDescription(new RTCSessionDescription(message));
    doAnswer(socketId);
  } else if (message.type === 'answer' && peers[socketId].isStarted) {
    peers[socketId].pc.setRemoteDescription(new RTCSessionDescription(message));
  } else if (message.type === 'candidate' && peers[socketId].isStarted) {
    var candidate = new RTCIceCandidate({
      sdpMLineIndex: message.label,
      candidate: message.candidate
    });
    peers[socketId].pc.addIceCandidate(candidate);
  } else if (message === 'bye' && peers[socketId].isStarted) {
    handleRemoteHangup();
  }
});

////////////////////////////////////////////////////

var localVideo = document.querySelector('#localVideo');
// var remoteVideo = document.querySelector('#remoteVideo');

navigator.mediaDevices.getUserMedia({
  audio: false,
  video: true
})
.then(gotStream)
.catch(function(e) {
  alert('getUserMedia() error: ' + e.name);
});

function gotStream(stream) {
  console.log('Adding local stream.');
  localStream = stream;
  localVideo.srcObject = stream;
  sendMessage('got user media');
  // if (isInitiator) {
  //   maybeStart();
  // }
}

var constraints = {
  video: true
};

console.log('Getting user media with constraints', constraints);

if (location.hostname !== 'localhost') {
  requestTurn(
    'https://computeengineondemand.appspot.com/turn?username=41784574&key=4080218913'
  );
}

function maybeStart(socketId) {
  console.log('>>>>>>> maybeStart() ', peers[socketId].isStarted, localStream, peers[socketId].isChannelReady);
  if (!peers[socketId].isStarted && typeof localStream !== 'undefined' && peers[socketId].isChannelReady) {
    console.log('>>>>>> creating peer connection');
    var pc = createPeerConnection(socketId);
    pc.addStream(localStream);
    peers[socketId].isStarted = true;
    console.log('isInitiator', peers[socketId].isInitiator);
    if (peers[socketId].isInitiator) {
      doCall(socketId);
    }
  }
}

window.onbeforeunload = function() {
  // sendMessage('bye');
};

/////////////////////////////////////////////////////////

function createPeerConnection(socketId) {
  try {
    var pc = new RTCPeerConnection(null);
    // pc.onicecandidate = handleIceCandidate;
    pc.onicecandidate = (event) => handleIceCandidate(event, socketId)
    pc.onaddstream = handleRemoteStreamAdded;
    pc.onremovestream = handleRemoteStreamRemoved;
    console.log('Created RTCPeerConnnection');
    peers[socketId].pc = pc;
    return pc;
  } catch (e) {
    console.log('Failed to create PeerConnection, exception: ' + e.message);
    alert('Cannot create RTCPeerConnection object.');
    return;
  }
}

function handleIceCandidate(event, socketId) {
  console.log('icecandidate event: ', event);
  if (event.candidate) {
    sendMessageTo(socketId, {
      type: 'candidate',
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate
    });
  } else {
    peers[socketId].isInitiator = true;
    console.log('End of candidates.', peers[socketId].isInitiator);
  }
}

function handleCreateOfferError(event) {
  console.log('createOffer() error: ', event);
}

function doCall(socketId) {
  console.log('Sending offer to peer');
  peers[socketId].pc.createOffer().then((offer) => {
    setLocalAndSendMessage(offer, socketId)
  }).catch((error) => handleCreateOfferError(error));
}

function doAnswer(socketId) {
  console.log('Sending answer to peer.');
  peers[socketId].pc.createAnswer().then((answer) => {
    setLocalAndSendMessage(answer, socketId)
  }).catch((error) => onCreateSessionDescriptionError(error));
}

function setLocalAndSendMessage(sessionDescription, socketId) {
  peers[socketId].pc.setLocalDescription(sessionDescription);
  console.log('setLocalAndSendMessage sending message', sessionDescription);
  sendMessageTo(socketId, sessionDescription);
}

function onCreateSessionDescriptionError(error) {
  trace('Failed to create session description: ' + error.toString());
}

function requestTurn(turnURL) {
  var turnExists = false;
  for (var i in pcConfig.iceServers) {
    if (pcConfig.iceServers[i].urls.substr(0, 5) === 'turn:') {
      turnExists = true;
      turnReady = true;
      break;
    }
  }
  if (!turnExists) {
    console.log('Getting TURN server from ', turnURL);
    // No TURN server. Get one from computeengineondemand.appspot.com:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var turnServer = JSON.parse(xhr.responseText);
        console.log('Got TURN server: ', turnServer);
        pcConfig.iceServers.push({
          'urls': 'turn:' + turnServer.username + '@' + turnServer.turn,
          'credential': turnServer.password
        });
        turnReady = true;
      }
    };
    xhr.open('GET', turnURL, true);
    xhr.send();
  }
}

function handleRemoteStreamAdded(event) {
  console.log('Remote stream added.');
  var element = document.getElementById('remote');
  var time = new Date().getTime()
  element.insertAdjacentHTML('beforeend', `<video id='remoteVideo-${time}' autoplay playsinline></video>`);;
  var remoteVideo = document.querySelector(`#remoteVideo-${time}`);
  // remoteStream = event.stream;
  remoteVideo.srcObject = event.stream;
}

function handleRemoteStreamRemoved(event) {
  console.log('Remote stream removed. Event: ', event);
}

function hangup() {
  console.log('Hanging up.');
  stop();
  sendMessage('bye');
}

function handleRemoteHangup() {
  console.log('Session terminated.');
  stop();
  // isInitiator = false;
}

function stop() {
  // isStarted = false;
  // peers.forEach((pc) => {
  //   pc.close();
  //   pc = null;
  // })
}
