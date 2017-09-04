var express= require("express");
var app= express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", "./views");
var server= require("http").Server(app);
var io= require("socket.io")(server);
server.listen(3000);

var mangUsernameOnline=[];
var mangEmailOnline=[];
connection=[];

function validateEmail(data) {
     var pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return pattern.test(data+".vn");
};

function isContain( array, item){
  if(array.indexOf(item)>=0){
    return true;
  }
  else return false;
};

function pushInArray(item, array){
  array.push(item);
};

// listen connection
io.on("connection", function(socket){
  connection.push(socket);

  console.log('Connection: %s sockets connected', connection.length)

  console.log("Co nguoi vua ket noi, socket id là:"+ socket.id);
  //
  socket.on("LOGIN_EVENT", function(user){
    if(validateEmail(user.email)){
      // Check if username or email exist
      if(isContain(mangUsernameOnline,user.username)|| isContain(mangEmailOnline,user.email)){
        if(isContain(mangUsernameOnline,user.username)){
        socket.emit("REGISTER_FAIL_EVENT",user.username);
        }
        if(isContain(mangEmailOnline,user.email)){
          socket.emit("REGISTER_FAIL_EVENT", user.email);
        }
      }
      else{
        console.log("co nguoi dang ki username la:" +user.username+":"+user.email);
        pushInArray(user.username, mangUsernameOnline);
        pushInArray(user.email, mangEmailOnline);
        socket.Username= user.username;
        socket.Email=user.email;
        socket.emit("REGISTER_SUCCESS_EVENT", {username:user.username, id: socket.id, mangUsernameOnline:mangUsernameOnline});
        io.sockets.emit('get users', {username:user.username, id: socket.id, mangUsernameOnline:mangUsernameOnline});
      }
    }
    else{
      socket.emit("REGISTER_FAIL_EVENT", user.username);
    }
  });
    socket.on('disconnect', function(data){
        // if(!socket.username) return;
        mangUsernameOnline.splice(mangUsernameOnline.indexOf(socket.Username),1);
        mangEmailOnline.splice(mangEmailOnline.indexOf(socket.Email),1);

        io.sockets.emit('get users', {username:socket.Username, id: socket.id, mangUsernameOnline:mangUsernameOnline});
        connection.splice(connection.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected', connection.length);
    })
  socket.on("CLIENT_MESSAGE_EVENT", function(message){
    io.sockets.emit("SERVER_MESSAGE_EVENT", {username: socket.Username,message:message, idclient:socket.id});
  });
});
app.get("/", function(req,res){
  res.render("trangchu");
});
