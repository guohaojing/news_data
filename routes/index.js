var express=require("express");
var mysql=require("mysql");
var router=express.Router();
module.exports=pool;
var pool=mysql.createPool({
	host:"127.0.0.1",//localhost
	user:"root",//用户名
	password:"",//密码
	database:"tianfang",//数据库
	port:"3306"
});

router.post("/",function(req,res){
	res.header("Access-Control-Allow-Origin", "*");

	
		pool.query('SELECT * from ',function(err,rows,fields){
		if(err) throw err;
		res.send(rows);
	});

});
module.exports=router;