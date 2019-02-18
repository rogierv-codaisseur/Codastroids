import * as React from 'react'
import PlayersList from './list'
import { connect } from 'react-redux'

class PlayersListContainer extends React.Component {

  render() {    
    return <PlayersList players={this.props.players} />
  }

}

const mapStateToProps = (state) => {
  console.log(state, 'from container');
  
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(PlayersListContainer)
