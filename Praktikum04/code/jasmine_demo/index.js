const Player = require("./lib/jasmine_examples/Player")
const Song = require("./lib/jasmine_examples/Song")

const myPlayer = new Player()
const mySong = new Song("Let it be")

myPlayer.play(mySong)

if (myPlayer.isPlaying == true) {
    console.log(myPlayer.currentlyPlayingSong.title)
}



