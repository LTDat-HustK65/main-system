const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const queue = require('block-queue');

dotenv.config();

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
const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: '*',
//   }
// });
const io = socketIo(server);

const PORT = process.env.PORT || 3030;
// const privateKey = fs.readFileSync('./src/certs/private.key');
// const certificate = fs.readFileSync('./src/certs/public.crt');
// const credentials = {key: privateKey, cert: certificate};



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Middleware để thêm io vào req để có thể sử dụng trong router
app.use((req, res, next) => {
  req.io = io;
  next();
});


app.use(express.static(path.join(__dirname, 'src/views/demo')));

app.use('/cobot_api', Cobot_api);
app.use('/user_api', User_api);
app.use('/object_api', Object_api);
app.use('/programming_api', Programming_api);

let cobotClientSocket = null;

io.on('connection', (socket) => {
  console.log('New User client connected')

  socket.on('registerClientB', () => {
    cobotClientSocket = socket;
    console.log('Cobot client registered');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    if (socket === cobotClientSocket) {
      cobotClientSocket = null;
    }
  });
  // // Gửi tin nhắn tới client
  // socket.emit('message', 'Hello from server!');
  // socket.on('disconnect', () => {
  //   console.log('Client disconnected');
  // });
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`http://localhost:${PORT}/demo-cobot-client.html`);  
  console.log(`http://localhost:${PORT}/demo-programmer-client.html`);
  //console.log(`http://localhost:${PORT}/demo-user-client.html`);
});