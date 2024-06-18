const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
//const fs = require('fs');


const Cobot_api = require('./src/routes/cobot-api');
const Object_api = require('./src/routes/object-api');
const User_api = require('./src/routes/user-api');
const Programming_api = require('./src/routes/programming-api');


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Database connected to MongoDB successfully!');
})
.catch((err) => {
  console.log('Database connection error: ', err);
});


const app = express();
const server = http.creatServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 3030;
// const privateKey = fs.readFileSync('./src/certs/private.key');
// const certificate = fs.readFileSync('./src/certs/public.crt');
// const credentials = {key: privateKey, cert: certificate};

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.use('/public', express.static(path.join(__dirname, '/src/views')));
app.use('/test', express.static('/src/views/test.html'));


app.use('/cobot_api', Cobot_api);
app.use('/user_api', User_api);
app.use('/object_api', Object_api);
app.use('/programming_api', Programming_api);


io.on('connection', (socket) => {
  console.log('New client connected')

  socket.on('messageFromClient', (data) => {
    console.log('Received message from client: ', data.message);
    const response = { message: 'Hello from the server!', timestamp: Date.now() };
    socket.emit('messageFromServer', response);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});