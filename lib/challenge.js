'use strict'

const boggle = function boggle (tray, coordinates) {
  let newTray = []
  newTray[0] = tray.slice(0, 4)
  newTray[1] = tray.slice(4, 8)
  newTray[2] = tray.slice(8, 12)
  newTray[3] = tray.slice(12, 16)
  let word = ''
  for (let i = 0; i < coordinates.length; i++) {
    word = word + newTray[coordinates[i][0]][coordinates[i][1]]
  }
  return word
}

const bigBoggle = function bigBoggle (tray, coordinates) {
  let newTray = []
  newTray[0] = tray.slice(0, 5)
  newTray[1] = tray.slice(5, 10)
  newTray[2] = tray.slice(10, 15)
  newTray[3] = tray.slice(15, 20)
  newTray[4] = tray.slice(20, 25)
  let word = ''
  for (let i = 0; i < coordinates.length; i++) {
    word = word + newTray[coordinates[i][0]][coordinates[i][1]]
  }
  return word
}

const superBigBoggle = function superBigBoggle (tray, coordinates) {
  let newTray = []
  newTray[0] = tray.slice(0, 6)
  newTray[1] = tray.slice(6, 12)
  newTray[2] = tray.slice(12, 18)
  newTray[3] = tray.slice(18, 24)
  newTray[4] = tray.slice(24, 30)
  newTray[5] = tray.slice(30, 36)
  let word = ''
  for (let i = 0; i < coordinates.length; i++) {
    word = word + newTray[coordinates[i][0]][coordinates[i][1]]
  }
  return word
}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
