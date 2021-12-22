// node server which handle socket io connection

const io = require('socket.io')(4000)

const users = {};
console.log('shahzaib')
io.on('connection', socket=>{
    socket.on('new-user-joined', name=>{
        console.log('new user',name)
        users[socket.id] = name;
        console.log("new user",name);

        socket.broadcast.emit('user-joined',name); 

    });
    
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message, name:users[socket.id]})
    });
})