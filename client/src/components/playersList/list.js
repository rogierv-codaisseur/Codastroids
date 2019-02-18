
import * as React from 'react'

export default function PlayersList(props) {
  console.log(props, 'from players list');
  
  return (
  <div className='heroesList'>
    <h1>Heroes</h1>
    <ul>
      {
        !props.players && 'Loading...' 
      }
      { 
        props.players && 
        props.players.map(player =>
        <li key={player.name} >
          { player.name }
        </li>) 
      }
    </ul>
  </div>
  )
};
