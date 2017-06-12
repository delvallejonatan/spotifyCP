import React from 'react'
import PropTypes from 'prop-types'
import { CreateView } from '../components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CreateActions from '../actions/create'

class Create extends React.Component {

  static propTypes = {
    changeInputValue: PropTypes.func.isRequired,
    clearInputValue: PropTypes.func.isRequired,
    changePlaylistName: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    inputValue: PropTypes.string.isRequired,
    playlistName: PropTypes.string.isRequired,
    fetchingTracks: PropTypes.bool.isRequired,
    tracks: PropTypes.array.isRequired,
    generatingPlaylist: PropTypes.bool.isRequired,
    errorFetchingDescription: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.renderTask()
    this.props.fetchUser()
  }

  componentWillUpdate() {
    this.renderTask()
  }

  renderTask = () => {
    if (!this.props.loggedIn ) this.props.history.push('/')
  }

  onInputChange = (e) => {
    let value = e.target.value
    this.props.changeInputValue(value)
    if (!/[^a-z ]/i.test(value)) this.props.changePlaylistName(value)
  }

  clearInputValue = () => {
    this.props.clearInputValue()
  }

  render() {
    return (
      <CreateView
        inputValue={this.props.inputValue}
        onInputChange={this.onInputChange}
        clearInputValue={this.clearInputValue}
        playlistName={this.props.playlistName}
        fetchingTracks={this.props.fetchingTracks}
        tracks={this.props.tracks}
        generatingPlaylist={this.props.generatingPlaylist}
        errorFetchingDescription={this.props.errorFetchingDescription}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.login.loggedIn,
    inputValue: state.create.inputValue,
    playlistName: state.create.playlistName,
    fetchingTracks: state.create.fetchingTracks,
    tracks: state.create.tracks,
    generatingPlaylist: state.create.generatingPlaylist,
    errorFetchingDescription: state.create.errorFetchingDescription,
  }
}

function mapDispatchToProps (dispatch) {
  let actions = bindActionCreators(CreateActions, dispatch)
  return {
    changeInputValue: actions.changeInputValue,
    clearInputValue: actions.clearInputValue,
    changePlaylistName: actions.changePlaylistName,
    fetchUser: actions.fetchUser,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create)
