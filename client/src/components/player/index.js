import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import walkSprite from './player_walk.png';
import handleMovement from './movement';
import LootMessage from '../messages/LootMessage';

const Player = props => {
  const { position, spriteLocation, result } = props;

  if (result === 'Won') {
    return <LootMessage player={1} />;
  }

  return (
    <div
      className="player"
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  );
};

Player.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  spriteLocation: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
