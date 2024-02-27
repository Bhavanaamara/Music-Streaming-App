// script.js

// Variables to store data
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const playlist = document.getElementById('playlist').getElementsByTagName('li');
let currentSongIndex = 0;

// Function to play a song
function playSong(songSrc) {
    audio.src = songSrc;
    audio.play();
    updateSongInfo(songSrc);
}

// Function to update song information
function updateSongInfo(songSrc) {
    const fileName = songSrc.split('/').pop();
    const [artistName, songTitle] = fileName.split(' - ');
    artist.textContent = artistName;
    songTitle.textContent = songTitle.replace('.mp3', '');
}

// Function to toggle between play and pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        document.querySelector('.play-btn').textContent = 'Pause';
    } else {
        audio.pause();
        document.querySelector('.play-btn').textContent = 'Play';
    }
}

// Function to play the previous song in the playlist
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(playlist[currentSongIndex].getAttribute('onclick').split("'")[1]);
}

// Function to play the next song in the playlist
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(playlist[currentSongIndex].getAttribute('onclick').split("'")[1]);
}
