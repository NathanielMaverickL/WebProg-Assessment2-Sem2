/// Toggle sidebar 
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Confirm with user before navigating back to home page
function confirmExit() {
  const confirmation = confirm("Are you sure you want to go back?");
  if (confirmation) {
    window.location.href = "home.html"; // Redirect to home.html if confirmed
  }
}

const music = document.getElementById('bg-music');  // Get audio element
const musicBtn = document.getElementById('music-btn');  // Get music toggle button
const speakerImg = document.getElementById('speaker-img');  // Get speaker icon image

let isPlaying = false;  // Track music playing state

window.addEventListener('DOMContentLoaded', () => {
  music.play().then(() => {
    isPlaying = true;  // Music started playing
    speakerImg.src = '../images/on.png';  // Show speaker ON icon
  }).catch(() => {
    isPlaying = false;  
    speakerImg.src = '../images/off.png';  // Show speaker OFF icon
  });
});

// Toggle music 
musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();  // Pause music
    speakerImg.src = '../images/off.png';  // Change icon to OFF
  } else {
    music.play();  // Play music
    speakerImg.src = '../images/on.png';  // Change icon to ON
  }
  isPlaying = !isPlaying;  
});
