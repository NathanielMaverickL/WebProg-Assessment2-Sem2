// Toggle sidebar functionality 
function toggleSidebar() {
  console.log("Sidebar toggle triggered!");

  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("show");
  } else {
    console.warn("Sidebar element not found!");
  }
}

// Info for each achievement box 
const achievementInfo = {
  achievement1: "Home Lawn Security - Complete Adventure Mode.",
  achievement2: "Better Off Dead - Get to a streak or 10 in I. Zombie Endless.",
  achievement3: "Spudow! - Blow up a zombie using a Potato Mine.",
  achievement4: "Morticulturalist - Collect all 49 plants (including plants from Crazy Dave's Shop).",
  achievement5: "Roll Some Heads - Bowl over 5 zombies with a single Wall-nut.",
  achievement6: "Zombologist - Discover a Yeti Zombie.",
  achievement7: "Sunny Days - Get 8000 sun during a single level.",
  achievement8: "Good Morning - Complete a daytime level by planting only Mushrooms and Coffee Beans.",
  achievement9: "Beyond the Grave - Beat all 20 Mini Games.",
  achievement10: "Towering Wisdom - Grow the Tree of Wisdom to 100 feet.",
  achievement11: "Nobel Peas Prize - Get the Golden Sunflower trophy.",
  achievement12: "China Shop - Get to a streak or 10 in Vasebreaker Endless.",
  achievement13: "Explodonator - Take out 10 full-sized zombies with a single Cherry Bomb.",
  achievement14: "Don't Pea in the Pool - Complete a daytime pool level without using pea shooters of any kind.",
  achievement15: "Grounded - Defeat a normal roof level without using any catapult plant.",
  achievement16: "Penny Pincher - Pick up 30 coins in a row on a single level without letting any disapper.",
  achievement17: "Popcorn Party - Defeat 2 Gargantuars with corn cob missiles in a single level.",
  achievement18: "No Fungus Among Us - Complete a nighttime level without planting any mushrooms.",
  achievement19: "Immortal - Survive 20 waves of pure zombie ferocity.",
  achievement20: "Mustache Mode - Enable Mustache Mode."
};

// Create and style tooltip element
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

// When DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".achievement-box");

  boxes.forEach((box, index) => {
    // Assign unique ID if not present
    if (!box.id) box.id = `achievement${index + 1}`;

    const info = achievementInfo[box.id] || "No info available.";
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
