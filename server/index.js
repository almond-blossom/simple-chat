const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const pokemons = require('./pokemons');
const cntPokemons = pokemons.length;

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '..', 'client')));

io.on('connection', (socket) => {
  socket.on('send', (uid, message) => {
    const pokemonIndex = (uid % cntPokemons)
    const username = pokemons[pokemonIndex];
    io.emit('chat', `${username}: ${message}`);
  });
});

server.listen(3131, () => {
  console.log('server is running:', 'http://localhost:3131');
});
