//Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Survival Infos
const survivalModeInfo = {
  survivalMode1: "Survival: Day - Classic daytime survival challenge.",
  survivalMode2: "Survival: Night - Survive waves during the night with limited visibility.",
  survivalMode3: "Survival: Pool - Defend your pool lane with aquatic plants.",
  survivalMode4: "Survival: Fog - Fog reduces visibility and slows plant placement.",
  survivalMode5: "Survival: Roof - Rooftop survival with new plant mechanics.",
  survivalMode6: "Survival: Day (Hard) - Hard mode of classic daytime survival.",
  survivalMode7: "Survival: Night (Hard) - Hard mode for night challenges.",
  survivalMode8: "Survival: Pool (Hard) - Tougher pool lane survival.",
  survivalMode9: "Survival: Fog (Hard) - Hard mode with foggy conditions.",
  survivalMode10: "Survival: Roof (Hard) - Hard mode on the rooftop.",
  survivalMode11: "Survival: Endless - Survive endless waves for as long as possible."
};

// Tootltip Style
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
  const boxes = document.querySelectorAll(".survival-mode");

  boxes.forEach((box, index) => {
    if (!box.id) box.id = `survivalMode${index + 1}`;

    // Get info from survivalModeInfo 
    const info = survivalModeInfo[box.id] || "No info available.";

    // Store info in dataset for easy access
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
