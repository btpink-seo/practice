# for seojuhee

$ npm install
$ npm start -- --원하는키명=값

# example

현재 레포지토리의 gulpfile에서 정의된 것은

키명 : start

값 : basic, service

ex)
$ npm start -- --start=basic
-> 'src/main/webapp/basic/chat/'

$ npm start -- --start=service
-> 'src/main/webapp/service/chat/'
