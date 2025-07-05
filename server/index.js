import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.get('/', (_req, res) => res.send('Sabacc Server Running'));

io.on('connection', socket => {
  console.log('Player connected:', socket.id);
  socket.on('disconnect', () => console.log('Disconnected:', socket.id));
});

server.listen(3001, () => console.log('Server running on port 3001'));
