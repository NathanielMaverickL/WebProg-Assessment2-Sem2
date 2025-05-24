const music = document.getElementById('bg-music');  // Get the audio element
const musicBtn = document.getElementById('music-btn');  // Get the music toggle button
const speakerImg = document.getElementById('speaker-img');  // Get the speaker image element

let isPlaying = false;  // Track whether the music is playing or not

// Try to autoplay music when the page loads
window.addEventListener('DOMContentLoaded', () => {
  music.play().then(() => {
    isPlaying = true;  // Music started playing successfully
    speakerImg.src = '../images/on.png';  // Show speaker ON icon
  }).catch(() => {
    isPlaying = false;  // Autoplay was blocked or failed
    speakerImg.src = '../images/off.png';  // Show speaker OFF icon
  });
});

// Toggle play/pause music on button click
musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();  // Pause the music
    speakerImg.src = '../images/off.png';  // Change icon to OFF
  } else {
    music.play();  // Play the music
    speakerImg.src = '../images/on.png';  // Change icon to ON
  }
  isPlaying = !isPlaying;  
});