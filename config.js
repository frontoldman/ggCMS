/**
 * Created by 52913 on 2016/4/18.
 */

var config = {
	//入口文件
    entry: 'static/index.html',
    //监听端口
    port: 8081,
    //数据库地址
    db:{
    	url:'mongodb://127.0.0.1:27017/gg'
    }
}

module.exports = config