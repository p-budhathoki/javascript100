// select play, previous and next buttons
const previous = document.querySelector(".prev");
const play = document.querySelector(".play");
const next = document.querySelector(".next");

// select track image, title and artist
const trackImage = document.querySelector(".track-image");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");

// select input duration slider, current time -span and duration time - span
const trackCurrentTime = document.querySelector(".current-time");
const trackDuration = document.querySelector(".duration-time");
const slider = document.querySelector(".duration-slider");

// select show volume - paragraph, volume - input and volume icon - icon
const showVolume = document.querySelector("#show-volume");
const volumeIcon = document.querySelector("#volume-icon");
const currentVolume = document.querySelector("#volume");

// select autoplay button
const autoPlayBtn = document.querySelector(".play-all");

// select hamburger icon and close button
const hamBurger = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");

// select music playlist and playlist divs
const musicPlaylist = document.querySelector(".music-playlist");
const playList = document.querySelector(".playlist");
const playListDiv = document.querySelector(".playlist-div");

//
let timer;
let autoplay = 0;
let indexTrack = 0; // current track
let songIsPlaying = false;
let track = document.createElement("audio");

// All event listeners
play.addEventListener("click", justPlay);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
hamBurger.addEventListener("click", showPlayList);
closeIcon.addEventListener("click", hidePlayList);

// Load Tracks
function loadTrack(indexTrack) {
  clearInterval(timer);

  resetSlider();
  track.src = trackList[indexTrack].path;
  trackImage.src = trackList[indexTrack].img;
  title.innerHTML = trackList[indexTrack].name;
  artist.innerHTML = trackList[indexTrack].singer;
  track.load();

  timer = setInterval(updateSlider, 1000);
}

loadTrack(indexTrack);

// play song or pause song
function justPlay() {
  if (songIsPlaying == false) {
    playSong();
  } else {
    pauseSong();
  }
}

// Play Song
function playSong() {
  track.play();
  songIsPlaying = true;
  play.innerHTML = '<i class="fas fa-pause"></i>';
}
// Pause Song
function pauseSong() {
  track.pause();
  songIsPlaying = false;
  play.innerHTML = '<i class="fas fa-play"></i>';
}

// Next Song
function nextSong() {
  if (indexTrack < trackList.length - 1) {
    indexTrack++;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = 0;
    loadTrack(indexTrack);
    playSong();
  }
}
// Previous Song
function prevSong() {
  if (indexTrack > 0) {
    indexTrack--;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = trackList.length - 1;
    loadTrack(indexTrack);
    playSong();
  }
}

// Mute Sound
function muteSound() {
  track.volume = 0;
  showVolume.innerHTML = 0;
  currentVolume.value = 0;
}

// Change Volume
function changeVolume() {
  showVolume.value = currentVolume.value;
  track.volume = currentVolume.value / 100;
  showVolume.innerHTML = currentVolume.value;
}

// Change Duration
function changeDuration() {
  let sliderPosition = track.duration * (slider.value / 100);
  track.currentTime = sliderPosition;
}

// autoplay function
function autoPlayToggle() {
  if (autoplay == 0) {
    autoplay = 1;
    autoPlayBtn.style.background = "olivedrab";
  } else {
    autoplay = 0;
    autoPlayBtn.style.background = "green";
  }
}

// reset slider
function resetSlider() {
  slider.value = 0;
}
// update slider
function updateSlider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = '<i class="fas fa-play"></i>';

    if (autoplay == 1 && indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else if (autoplay == 1 && indexTrack == trackList.length - 1) {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
}

// Update current song time
function songTimeUpdate() {
  if (track.duration) {
    let currentMin = Math.floor(track.currentTime / 60);
    let currentSec = Math.floor(track.currentTime - currentMin * 60);

    let durationMin = Math.floor(track.duration / 60);
    let durationSec = Math.floor(track.duration - durationMin * 60);

    if (durationSec < 10) {
      durationSec = "0" + durationSec;
    }
    if (durationMin < 10) {
      durationMin = "0" + durationMin;
    }
    if (currentMin < 10) {
      currentMin = "0" + currentMin;
    }
    if (currentSec < 10) {
      currentSec = "0" + currentSec;
    }
    trackCurrentTime.innerHTML = currentMin + " : " + currentSec;
    trackDuration.innerHTML = durationMin + " : " + durationSec;
  } else {
    trackCurrentTime.innerHTML = "00" + " : " + "00";
    trackDuration.innerHTML = "00" + " : " + "00";
  }
}

// show playlist
function showPlayList() {
  musicPlaylist.style.transform = "translateX(0)";
}
// hide playlist
function hidePlayList() {
  musicPlaylist.style.transform = "translateX(-100%)";
}

// Display tracks in playlist
let counter = 1;
function displayTracks() {
  for (let i = 0; i < trackList.length; i++) {
    //   console.log(trackList[i].name);
    let div = document.createElement("div");
    div.classList.add("playlist");
    div.innerHTML = `
        <span class="song-index">${counter++}</span>
        <p class="single-song">${trackList[i].name}</p>
      `;
    playListDiv.appendChild(div);
  }
  playFromPlayList();
}
displayTracks();

// play song from playlist
function playFromPlayList() {
  playListDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("single-song")) {
      const indexNum = trackList.findIndex((item, index) => {
        if (item.name === e.target.innerHTML) {
          return true;
        }
      });
      loadTrack(indexNum);
      playSong();
      hidePlayList();
    }
  });
}
