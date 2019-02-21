import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Map from '../map';
import Player from '../player/index';
import Enemy from '../enemy/index';
import Enemy2 from '../enemy2/index';
import Player2 from '../player2/index';
import PlayersList from '../playersList/listContainer';
import Loot from '../loot/index';
import level1 from '../../data/maps/1';
import level2 from '../../data/maps/2';
import StageMusic from '../sounds/stage'
import Walk from '../sounds/walk'
import store from '../../store';
import { ADD_TILES } from '../../constants/actionTypes';


const World = ({ match }) => {
  const level = match.params.id;
  switch (level) {
    case '1':
      store.dispatch({
        type: ADD_TILES,
        payload: {
          tiles: level1
        }
      });
      break;
    case '2':
      store.dispatch({
        type: ADD_TILES,
        payload: {
          tiles: level2
        }
      });
      break;
    default:
      break;
  }

  return (
    <div>
      <header className="gameHeader">
        <h2>The Kingdom of Tripolis</h2>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </header>

      <div className="playScreen">
        <div>
          <PlayersList />
        </div>
        <div
          style={{
            position: 'relative'
          }}
        >
          <Map />
          <Loot />
          <Enemy />
          <Enemy2 />
          <Player />
          <Player2 />
        </div>
      </div>
      <StageMusic />
      <Walk />
    </div>
  );
};

World.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired
  }).isRequired
};

export default World;
