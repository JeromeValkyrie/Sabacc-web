import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Table from './components/Table.jsx';

const socket = io('http://localhost:3001');

export default function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => setConnected(true));
    socket.on('disconnect', () => setConnected(false));
  }, []);

  return (
    <div>
      <h1>Corellian Spike Sabacc</h1>
      <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>
      <Table />
    </div>
  );
}
