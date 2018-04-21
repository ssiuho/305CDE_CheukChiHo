var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";


(function() {
  var fs, http, qs, server, url;

  http = require('http');

  url = require('url');

  qs = require('querystring');

  fs = require('fs');

  server = http.createServer(function(req, res) {
    var action, form, formData, msg, publicPath, urlData, stringMsg;
    urlData = url.parse(req.url, true);
    action = urlData.pathname;
    publicPath = __dirname + "\\public\\";
   console.log(req.url);
		if(req.url === "/index"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "index.html", "text/html");
	}
	
else if(req.url === "/About"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "about.html", "text/html");
	}
		else if(req.url === "/Video"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "video.html", "text/html");
	}
	
	else if(req.url === "/Login"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "login.html", "text/html");
	}
		else if(req.url === "/Signup"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "signup.html", "text/html");
	}
		else if(req.url === "/Favorite"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "favourite.html", "text/html");
	} 
		else if(req.url === "/Golden"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "Golden.html", "text/html");
	} 
		else if(req.url === "/Husky"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "Husky.html", "text/html");
	}
		else if(req.url === "/Pomeranian"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "Pomeranian.html", "text/html");
	}
		else if(req.url === "/Shiba"){
		//sendFileContent(response, "callajax.html", "text/html");
		sendFileContent(res, "Shiba.html", "text/html");
	}
	
	else if(req.url === "/"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + req.url);
	} else if(/^\/[a-zA-Z0-9\/]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}
	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}
	else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/image/jpg");
	}
  else if (action === "/signup") {
       console.log("signup");
			console.log(req.method);
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					dbo.collection("customers").insertOne(myobj, function(err, res) {
    				if (err) throw err;
    				console.log("1 document inserted");
    				db.close();
  					});
					});
						
            return res.end("You can login now!!");
          });
        });
				
      } else {
        
				sendFileContent(res, "signup.html", "text/html");
      }
    } else if (action === "/login") {
       console.log("login");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
						console.log(user);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
// 							dbo.collection("customers").count({"login" : "Husky", "PW" : "123456"}), function (error, count) {
								dbo.collection("customers").find({"login" : "Husky", "PW" : "246810"}).toArray(function(err,result) {
// 									console.log(error, count);
									console.log(result);
									var  userid, userpw, resid, respw;
									userid = result[0].login;
									userpw = result[0].PW;
									console.log("userid="+ userid);
									console.log("userpw="+ userpw);
									resid = user.login;
									respw = user.PW;
									console.log("resid="+ resid);
									console.log("respw="+ respw);
								if (userid === resid) {
									if(userpw === respw){
									console.log("Welcome!!!");
									return res.end("Welcome!!");
									}
								} else {
									console.log("Your login ID or password are not find.");
									return res.end("Your login ID or password are not find.");
								}
								db.close();
								});
								
							
							
							
// 							dbo.collection("customers").find({"login" : "Husky", "PW" : "111111"}).toArray(function(err, result) {
// 								if(user === "login" || user === "PW")
// 									{
// 										console.log("Welcome" );
										
// 									} else {
// 										console.log("Your login ID or password are not correct.Please login again!!");
// 									}
//     if (err) throw err;
//     console.log(result);
//     db.close();
// 	});
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
// 								console.log("final count="+finalcount);
						
					});
						
//             return res.end("Welcome!!");
          });
        });
				
      } else {
        //form = publicPath + "ajaxSignupForm.html";
        form = "login.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
      }
    } else if (action === "/shiba") {
       console.log("shiba");
      if (req.method === "POST") {
        console.log("action = post");
        formData = '';
        msg = '';
        return req.on('data', function(data) {
          formData += data;
          
          console.log("form data="+ formData);
          return req.on('end', function() {
            var user;
            user = qs.parse(formData);
						console.log(user);
            user.id = "123456";
            msg = JSON.stringify(user);
						stringMsg = JSON.parse(msg);
						console.log("mess="+msg);
            console.log("mess="+formData);
           // res.writeHead(200, {
            //  "Content-Type": "application/json",
             // "Content-Length": msg.length
            //});
						MongoClient.connect(dbUrl, function(err, db) {
  					if (err) throw err;
  					var dbo = db.db("mydb");
  					var myobj = stringMsg;
  					
						//dbo.collection("customers").insertOne(myobj, function(err, res) {
    				//if (err) throw err;
    				//console.log("1 document inserted");
    				//db.close();
  					//});
						
							
							//dbo.collection("customers").find({}).toArray(function(err, result) {
   // if (err) throw err;
    //console.log(result);
    //db.close();
  //});
							
							
			//				var myquery = { Name: 'apple' };
		//					dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
  //});
							
							
							// count=dbo.collection("customers").find({"Name" : "ALEX"}).count();
							//console.log("total count="+dbo.collection("customers").find({"Name" : "ALEX"}).count());
							
// 							dbo.collection("customers").count({"login" : "Husky", "PW" : "123456"}), function (error, count) {
								dbo.collection("customers").insertOne(myobj, function(err, res) {
    						if (err) throw err;
    						console.log("1 document inserted");
								db.close();
								});
								
							
							
							
// 							dbo.collection("customers").find({"login" : "Husky", "PW" : "111111"}).toArray(function(err, result) {
// 								if(user === "login" || user === "PW")
// 									{
// 										console.log("Welcome" );
										
// 									} else {
// 										console.log("Your login ID or password are not correct.Please login again!!");
// 									}
//     if (err) throw err;
//     console.log(result);
//     db.close();
// 	});
							
			//				dbo.collection("customers").find({"Name": "ALEX"}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
	//}); 
							
// 								console.log("final count="+finalcount);
						
					});
						
            return res.end("Collect Success!!");
          });
        });
			}
			} else if( action==="/newpage"){
       res.writeHead(200, {
        "Content-Type": "text/html"
      });
      return res.end("Welcome!!");
    }
    
    else {
      
      console.log("callhtml");
		sendFileContent(res, "index.html", "text/html");

     
      //res.writeHead(200, {
      //  "Content-Type": "text/html"
     // });
      //return res.end("<h1>歡迎光臨Node.js菜鳥筆記</h1><p><a href=\"/Signup\">註冊</a></p>");
    }
  });

  server.listen(9001);

  console.log("Server is running，time is" + new Date());

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}
}).call(this);


