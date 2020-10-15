import React from 'react';
import ChessBoard from './components/ChessBoard'

function App() {
  return (
    <div className="block">
      <ChessBoard rows={8} columns={8} />
    </div>
  ); 
}
export default App;
