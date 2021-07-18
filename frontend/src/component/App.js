import React from 'react';
import './App.css';
import axios from 'axios';
import PLayerList from './players/playerList';
import PLayerSingle from './players/playerSingle';
import PlayerForm from './players/playerForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = 'https://localhost:4000/players';
    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,

    })
  }

  render () {
  return (
    <div className="container-fluid">
      <div className = "row">
        <div className = "col s12">Menu</div>
      </div>
      <div className = "row">
        <div className = "col s3"><PLayerList playeers = {this.state.players}
          updateCurrentPlayer = {this.updateCurrentPlayer}/>
        </div>
        <div className = "col s9"><PLayerSingle/></div>
      </div>
      <div className = "row">
        <div className = "col s12"><PlayerForm/></div>
      </div>
    </div>
  );}
}

export default App;
