import React from 'react';
import './App.css';
import PLayerList from './players/playerList';
import PLayerSingle from './players/playerSingle';
import PlayerForm from './players/playerForm';


function App() {
  return (
    <div className="container-fluid">
      <div className = "row">
        <div className = "col s12">Menu</div>
      </div>
      <div className = "row">
        <div className = "col s3"><PLayerList/></div>
        <div className = "col s9"><PLayerSingle/></div>
      </div>
      <div className = "row">
        <div className = "col s12"><PlayerForm/></div>
      </div>
    </div>
  );
}

export default App;
