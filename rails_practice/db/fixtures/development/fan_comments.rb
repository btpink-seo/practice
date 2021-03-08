FanComment.seed_once(:id,
  { id: 1, author_no: 1, name: '鈴木太郎', body: '丁寧に解説してくれるので、好んで読んでいます。', deleted: true },
  { id: 2, author_no: 1, name: '山田恵子', body: 'きちんと順序だてて、基本をしっかり説明してくれるところが良いです。', deleted: false },
  { id: 3, author_no: 2, name: '佐藤一郎', body: '語りかけるような言い回しが気に入っています。これからも応援します。', deleted: false }
)