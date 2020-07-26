var mysql = require('mysql');

// 创建一个数据库连接池
var connection = mysql.createConnection({
  host:'localhost',
  port: '3306',
  user:'root',
  password:'Runcar99',
  database:'platform'
});
connection.connect(err => {
  if (err) {
    console.log('链接失败===========', err);
    throw err;
  } else {
    console.log('链接成功');
  }
});//连接

// var TEST_TABLE = 't_o_project';
//
// var sql = "select * from" + TEST_TABLE;
// connection.query(sql,function(err,rows,fields){
//   if(err)
//     console.log('connection-err================', err);
//   else{
//     console.log('connection-succ===============', rows);
//   }
// //记得关闭连接
//   connection.end();
// });
