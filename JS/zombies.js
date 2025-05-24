// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Zombie information 
const plantInfo = {
  zombie1: "Zombie - Regular Garden-variety Zombie\nToughness: Low",
  zombie2: "Flag Zombie - Flag Zombie marks the arrival of a huge pile or wave of zombies.\nToughness: Low",
  zombie3: "Conehead Zombie - His traffic cone headpiece makes him twice as tough as normal zombies.\nToughness: Medium",
  zombie4: "Pole Vaulting Zombie - Pole Vaulting Zombies vaults with a pole.\nToughness: Medium\nSpeed: Fast, then normal (after jump)\nSpecial: Jumps the first plant he runs into",
  zombie5: "Buckethead Zombie - His bucket hat makes him extremely resistant to damage.\nToughness: High\nWeakness: Magnet-shroom",
  zombie6: "Newspaper Zombie - His newspaper provides limited defense.\nToughness: Low\nNewspaper Toughness: Low\nSpeed: Normal, then fast (after losing newspaper)",
  zombie7: "Screen Door Zombie - His screen door is an effective shield.\nToughness: Low\nScreen Door Toughness: High\nWeakness: Fume-shroom and Magnet=shroom",
  zombie8: "Football Zombie - Football Zombie makes the big plays.\nToughness: Very high\nSpeed: Fast\nWeakness: Magnet-shroom",
  zombie9: "Dancing Zombie - Any resemblance between Dancing Zombie and persons living or dead is purely coincidental.\nToughness: Medium\nSpecial: Summons back-up dancers",
  zombie10: "Backup Dancer - These zombies appear in sets of four whenever Dancing Zombies rocks out.\nToughness: Low",
  zombie11: "Ducky Tube Zombie - The ducky tube allows this zombie to float in water.\nToughness: Low\nOnly appears in the pool",
  zombie12: "Snorkel Zombie - Snorkel zombies can swim underwater.\nToughness: Low\nSpecial: Submerges to avoid attacks\nOnly appears in the pool",
  zombie13: "Zomboni - The Zomboni applies ice, steam and pressure to your plants.\nToughness: High\nSpecial: Crushes plants, leaves an ice trail",
  zombie14: "Zombie Bobsled Team - These zombies appear in teams of four.\nToughness: Low (each zombies)\nBobsled Toughness: Low\nSpecial: Only appears in ice",
  zombie15: "Dolphin Rider Zombie - Dolphin Rider Zombies use dolphins to exploit weaknesses in your pool defense.\nToughness: Medium\nSpeed: Fast, then slow (after jump)\nSpecial: Jumps over the first plant he runs\nOnly appears in the pool\nThe dolphin is also a zombie.",
  zombie16: "Jack-in-the-Box Zombie - This zombie carries an explosive surprise.\nToughness: Medium\nSpeed: Fast\nSpecial: Jack-in-the-box explodes\nWeakness: Magnet-shroom",
  zombie17: "Balloon Zombie - Balloon Zombie floats above the fray, immune to most attacks.\nToughness: Low\nSpecial: Flying\nWeakness: Cactus and Blover",
  zombie18: "Digger Zombie - This zombie digs to bypass your defenses.\nToughness: Medium\nSpeed: Fast, then slow\nSpecial: Tunnels underground and appears on the left side of the lawn\nWeakness: Split pea and Magnet-shroom",
  zombie19: "Pogo Zombie - Pogo Zombies hops to bypass your defenses.\nToughness: Medium\nSpecial: Hops over plants\nWeakness: Magnet-shroom",
  zombie20: "Yeti Zombie - A rare and curious creature.\nToughness: High\nSpecial: Runs away after a short while",
  zombie21: "Bungee Zombie - Bungee Zombie attacks from above.\nToughness: Medium\nSpecial: Descends from the sky and steals a plant",
  zombie22: "Ladder Zombie - Ladder Zombie climbs over obstacles.\nToughness: Medium\nLadder Toughness: Medium\nSpeed: Fast, then slow (after placing ladder)\nWeakness: Fume-shroom and Magnet-shroom",
  zombie23: "Catapult Zombie - Catapult Zombie operates heavy machinery.\nToughness: Medium\nSpecial: Lobs basketballs at your plants",
  zombie24: "Gargantuar - Gargantuar is a gigantic zombie\nToughness: Extremely high",
  zombie25: "Imp - Imps are tiny zombies hurled by Gargantuar deep into your defenses.\nToughness: Low",
  zombie26: "Dr. Zomboss - Dr. Zomboss rules them all.\nToughness (in Zomboss shell): Extreme"
};

// Tooltip Styling
const tooltip = document.createElement("div");
tooltip.className = "floating-tooltip";
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.whiteSpace = "pre-line"; 
document.body.appendChild(tooltip);

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".zombie-box");

  boxes.forEach((box, index) => {
    if (!box.id) box.id = `zombie${index + 1}`;

    const id = box.id;
    const note = plantInfo[id] || box.dataset.note || "No info yet!";
    box.dataset.note = note;

    box.addEventListener("mouseenter", () => {
      tooltip.innerText = note;
      tooltip.style.display = "block";

      const rect = box.getBoundingClientRect();
      tooltip.style.top = `${window.scrollY + rect.top}px`;

      // Show tooltip to the left for specific zombies
      if (["zombie5", "zombie10", "zombie15", "zombie20", "zombie25"].includes(id)) {
        tooltip.style.left = `${window.scrollX + rect.left - tooltip.offsetWidth - 10}px`;
      } else {
        tooltip.style.left = `${window.scrollX + rect.right + 10}px`;
      }
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