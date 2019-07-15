import {auth, logout, switchMenu} from './menu'
import {setTracks} from './track'
import {playTrack} from './track'
import {nextTrack} from './track'
import {prevTrack} from './track'
import {fetchMyTracks, fetchLibrary} from './library'
import {callRequest, receiveResponse} from './api'
import {onErrorOccurred, expiredToken, onCloseModalError} from './error'

export {
  auth,
  logout,
  switchMenu,
  setTracks,
  playTrack,
  nextTrack,
  prevTrack,
  fetchMyTracks,
  fetchLibrary,
  callRequest,
  receiveResponse,
  expiredToken,
  onErrorOccurred,
  onCloseModalError
}