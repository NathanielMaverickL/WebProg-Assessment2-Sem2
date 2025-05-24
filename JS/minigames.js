//Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Info for each mini-game box
const miniGameInfo = {
  miniGame1: "Zombotany - Zombies have plant heads with powers like Peashooters and Wall-nuts.",
  miniGame2: "Wall-nut Bowling – Roll Wall-nuts to knock down waves of zombies like bowling pins.",
  miniGame3: "Slot Machine – Use a slot machine to randomly get plants and sun to survive waves.",
  miniGame4: "It's Raining Seeds – Random seeds fall from the sky; you must use whatever you get to defend.",
  miniGame5: "Beghouled – A match-3 puzzle game where you swap plants to earn sun and points.",
  miniGame6: "Invisi-ghoul – Zombies are invisible, rely on clues and strategy to stop them.",
  miniGame7: "Seeing Stars – Plant Starfruit on designated spots in a star pattern to win.",
  miniGame8: "Zombiquarium – Keep pet zombies fed with brains and buy more with sun.",
  miniGame9: "Beghouled Twist – A spin-off of Beghouled, but you rotate plant tiles instead of swapping.",
  miniGame10: "Big Trouble Little Zombie – Face a huge horde of tiny zombies.",
  miniGame11: "Portal Combat – Zombies and peas travel through portals that shift positions.",
  miniGame12: "Column Like You See 'Em – You get plants in vertical columns and must plan accordingly.",
  miniGame13: "Bobsled Bonanza – Fight a team of Zombonis and Bobsled zombies with limited plants.",
  miniGame14: "Zombie Nimble Zombie Quick – Everything moves and recharges much faster.",
  miniGame15: "Whack a Zombie – Use a shovel to whack zombies popping out of graves, like whack-a-mole.",
  miniGame16: "Last Stand – Use a set amount of sun to set up your defenses, then survive multiple waves.",
  miniGame17: "Zombotany 2 – A harder version of Zombotany with tougher plant-zombie hybrids.",
  miniGame18: "Wall-nut Bowling 2 – An advanced version of the original with exploding red Wall-nuts.",
  miniGame19: "Pogo Party – Battle a massive party of pogo stick zombies.",
  miniGame20: "Dr. Zomboss’s Revenge – A harder rematch with the final boss, Dr. Zomboss."
};

// To create and style tooltip element
const tooltip = document.createElement("div");
tooltip.className = "floating-tooltip";
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.border = "2px solid #888";
tooltip.style.backgroundColor = "#9dc183"; // Green background
tooltip.style.color = "#222222";           // Dark gray text
tooltip.style.padding = "8px 12px";
tooltip.style.borderRadius = "8px";
tooltip.style.fontSize = "0.9rem";
tooltip.style.maxWidth = "200px";
tooltip.style.whiteSpace = "pre-line";  // Allows line breaks if you add \n
tooltip.style.pointerEvents = "none";  //  So that tooltip doesn't block mouse
document.body.appendChild(tooltip);

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".mini-game");

  boxes.forEach((box, index) => {
    if (!box.id) box.id = `miniGame${index + 1}`;

    // To get info from miniGameInfo 
    const info = miniGameInfo[box.id] || "No info available.";

    // To tore info in dataset for easy access
    box.dataset.note = info;

    box.addEventListener("mouseenter", () => {
      tooltip.innerText = info;
      tooltip.style.display = "block";

      const rect = box.getBoundingClientRect();

      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;
      let top = window.scrollY + rect.top - tooltipHeight - 10;
      let left = window.scrollX + rect.left + rect.width / 2 - tooltipWidth / 2;

      // To prevent tooltip from going off-screen left or right
      if (left < 10) left = 10;
      if (left + tooltipWidth > window.innerWidth - 10) left = window.innerWidth - tooltipWidth - 10;

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