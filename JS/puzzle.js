//Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
  console.log("Sidebar toggled.");
}

//Puzzle Game Info
const puzzleInfo = {
  puzzleGame1: "Vasbreaker",
  puzzleGame2: "To the Left",
  puzzleGame3: "Third Vase",
  puzzleGame4: "Chain Reaction",
  puzzleGame5: "M is for Metal",
  puzzleGame6: "Scary Potter",
  puzzleGame7: "Hokey Pokey",
  puzzleGame8: "Another Chain Reaction",
  puuzleGame9: "Ace of Vase",
  puzzleGame10: "Vasebreaker Endless",
  puzzleGame11: "I. Zombies",
  puzzleGame12: "I. Zombie Too",
  puzzleGame13: "Can You Dig It?",
  puzzleGame14: "Totally Hurts",
  puzzleGame15: "Dead Zeppelin",
  puzzleGame16: "Me Smash!",
  puzzleGame17: "ZomBoogie",
  puzzleGame18: "Three Hit Wonder",
  puzzleGame19: "All your brainz r belong to us",
  puzzleGame20: "I. Zombie Endless"
};

//Tooltip Styling
const tooltip = document.createElement("div");
tooltip.className = "floating-tooltip";
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.border = "2px solid #888";
tooltip.style.backgroundColor = "#9dc183";
tooltip.style.color = "#222222";
tooltip.style.padding = "8px 12px";
tooltip.style.borderRadius = "8px";
tooltip.style.fontSize = "0.9rem";
tooltip.style.maxWidth = "200px";
tooltip.style.whiteSpace = "pre-line";
tooltip.style.pointerEvents = "none";
document.body.appendChild(tooltip);

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".puzzle-game");

  boxes.forEach((box, index) => {
    if (!box.id) box.id = `puzzleGame${index + 1}`;
    const info = puzzleInfo[box.id] || "No info available.";
    box.dataset.note = info;

    box.addEventListener("mouseenter", () => {
      tooltip.innerText = info;
      tooltip.style.display = "block";

      const rect = box.getBoundingClientRect();
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;
      let top = window.scrollY + rect.top - tooltipHeight - 10;
      let left = window.scrollX + rect.left + rect.width / 2 - tooltipWidth / 2;

      if (left < 10) left = 10;
      if (left + tooltipWidth > window.innerWidth - 10)
        left = window.innerWidth - tooltipWidth - 10;

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    });

    box.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const speakerImg = document.getElementById('speaker-img');

let isPlaying = false;

window.addEventListener('DOMContentLoaded', () => {
  music.play().then(() => {
    isPlaying = true;
    speakerImg.src = '../images/on.png';
  }).catch(() => {
    isPlaying = false;
    speakerImg.src = '../images/off.png';
  });
});

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    speakerImg.src = '../images/off.png';
  } else {
    music.play();
    speakerImg.src = '../images/on.png';
  }
  isPlaying = !isPlaying;
});