//Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

// Plant information 
const plantInfo = {
  plant1: "Peashooter - Peashooters are your first line of defense, they shoot peas at zombies.\nCost: 100 ☀️\nDamage: Normal\nRecharge: Fast",
  plant2: "Sunflower - Sunflowers are essential for you to produce extra sun, try planting as many as you can.\nCost: 50 ☀️\nSun production: Normal\nRecharge: Fast",
  plant3: "Cherry Bomb - Cherry Bomb can blow up all zombies in an area, they have a short fuse so plant them near zombies.\nCost: 150 ☀️\nDamage: Massive\nRecharge: Very Slow",
  plant4: "Wall-nut - Wall-nuts have hard shells which you can use to protect your other plants\nCost: 50 ☀️\nToughness: High\nRecharge: Slow",
  plant5: "Potato Mine- Potato Mines pack a powerful punch, but they need a while to arm themselves. You should plant them ahead of zombies, they will explode on contact.\nCost: 25 ☀️\nDamage: Massive\nRecharge: Slow",
  plant6: "Snow Pea - Snow Peas shoot frozen peas that damage and slow the enemy.\nCost: 175 ☀️\nDamage: Normal / Slows zombies\nRecharge: Fast",
  plant7: "Chomper - Chompers can devour a zombie whole, but they are vulnerable while chewing\nCost: 150 ☀️\nDamage: Massive\nRecharge: Fast",
  plant8: "Repeater - Repeaters fires two peas at a time.\nCost: 200 ☀️\nDamage: Normal (for each pea)\nRecharge: Fast",
  plant9: "Puff-shroom - Puff-shrooms are cheap, but can only fire a short distance.\nCost: 0 ☀️\nDamage: Normal\nRecharge: Fast",
  plant10: "Sun-shroom - Sun-shrooms give small sun at first and normal sun later.\nCost: 25 ☀️\nSun production: Low, then normal\nRecharge: Fast",
  plant11: "Fume-shroom - Fume-shrooms shoot fumes that can pass through screen doors.\nCost: 75 ☀️\nDamage: Normal, penetrates screen doors\nRecharge: Fast",
  plant12: "Grave Buster - Plant Grave Busters on graves to remove the graves.\nCost: 75 ☀️\nUsage: Single use, must be planted on graves\nRecharge: Fast",
  plant13: "Hypno-shroom - When eaten, Hypno-shrooms will make a zombie turn around and fight for you.\nCost: 75 ☀️\nUsage: Single use, on contact\nRecharge: Slow",
  plant14: "Scaredy-shroom - Scaredy-shrooms are long-ranged shooters that hide when enemies get near them\nCost: 25 ☀️\nDamage: Normal\nRecharge: Fast",
  plant15: "Ice-shroom - Ice-shrooms temporarily immobilize all zombies on the screen.\nCost: 125 ☀️\nDamage: Very light, immobilizes zombies\nRecharge: Very Slow",
  plant16: "Doom-shroom - Doom-shrooms destroy everything in a large area and leave a crater that can't be planted on.\nCost: 125 ☀️\nDamage: Massive\nRecharge: Very Slow",
  plant17: "Lily Pad - Lily pads let you plant non-aquatic plants on top of them.\nCost: 25 ☀️\nSpecial: Non-aquatic plants can be planted on top of it.\nRecharge: Fast",
  plant18: "Squash - Squashe will smash the first zombie that gets close to it.\nCost: 50 ☀️\nDamage: Massive\nRecharge: Slow",
  plant19: "Threepeater - Threepeaters shoot peas in three lanes.\nCost: 325 ☀️\nDamage: Normal (for each pea)\nRecharge: Fast",
  plant20: "Tangle Kelp - Tangle Kelp are aquatic plants that pull the first zombie that nears them underwater\nCost: 25 ☀️\nDamage: Massive\nRecharge: Slow",
  plant21: "Jalapeno - Jalapenos can destroy an entire lane of zombies.\nCost: 125 ☀️\nDamage: Massive\nRecharge: Very Slow",
  plant22: "Spikeweed - Spikeweeds pop tires and hurt any zombies that step on them.\nCost: 100 ☀️\nDamage: Normal\n:Recharge: Fast",
  plant23: "Torchwood - Torchwoods turn peas that pass through them into fireballs that deal twice as much damage.\nCost: 175 ☀️\nSpecial: Doubles the damage of peas that pass through it. Fireballs deal damage to nearby zombies on impact\nRecharge: Fast",
  plant24: "Tall-nut - Tall-nuts are heavy-duty wall plants that can't be vaulted over.\nCost: 125 ☀️\nToughness: Very high\nRecharge: Slow",
  plant25: "Sea-shroom - Sea-shrooms are aquatic plants that shoot short ranged spores.\nCost: 0 ☀️\nDamage: Normal\nRecharge: Slow",
  plant26: "Plantern - Planterns light up an area, letting you see through fog.\nCost: 25 ☀️\nRange: One lane\nRecharge: Slow",
  plant27: "Cactus - Cactuses shoot spikes that can hit both ground and air targets\nCost: 125 ☀️\nDamage: Normal\nRecharge: Fast",
  plant28: "Blover - Blovers blow away all balloon zombies and fog.\nCost: 100 ☀️\nUsage: Single use, instant\nRecharge: Fast",
  plant29: "Split Pea - Split Peas shoot peas forward and backwards.\nCost: 125 ☀️\nDamage: Normal\nRecharge: Fast",
  plant30: "Starfruit - Strafruits shoot stars in 5 directions.\nCost: 125 ☀️\nDamage: Normal\nRecharge: Fast",
  plant31: "Pumpkin - Pumpkins protect plants that are within their shells.\nCost: 125 ☀️\nToughness: High\nRecharge: Fast",
  plant32: "Magnet-shroom - Magnet-shrooms remove helmets and other metal objects from zombies.\nCost: 100 ☀️\nSpecial: Removes metal objects from zombies\nRecharge: Fast",
  plant33: "Cabbage-pult - Cabbage-pults hurl cabbages at the enemy.\nCost: 100 ☀️\nDamage: Normal\nRecharge: Fast",
  plant34: "Flower Pot - Flower Pots let you plant on the roof.\nCost: 25 ☀️\nSpecial: Allows you to plant on the roof\nRecharge: Fast",
  plant35: "Kernel-pult - Kernel-pults fling corn kernels and butter at zombies.\nCost: 100 ☀️\nDamage: Light (kernel), Normal (butter)\nRecharge: Fast",
  plant36: "Coffee Bean - Use Coffee Beans to wake up sleeping mushrooms.\nCost: 75 ☀️\nUsage: Single use, instant\nRecharge: Fast",
  plant37: "Garlic - Garlic diverts zombies into other lanes.\nCost: 50 ☀️\nUsage: On contact\nRecharge: Fast",
  plant38: "Umbrella Leaf - Umbrella Leaves protect nearby plants from bungees and catapults.\nCost: 100 ☀️\nSpecial: Portects adjacent plants from bungees and catapults\nRecharge: Fast",
  plant39: "Marigold - Marigolds give you silver and gold coins.\nCost: 50 ☀️\nSpecial; gives coins\nRecharge: Slow",
  plant40: "Melon-pult - Melon-pults do heavy damage to groups of zombies.\nCost: 300 ☀️\nDamage: Heavy\nRecharge: Fast",
  plant41: "Gatling Pea - Gatling Peas shoot four peas at a time.\nCost: 250 ☀️\nFiring Speed: 4x\nMust be planted on repeaters\nRecharge: Very Slow",
  plant42: "Twin Sunflower - Twin Sunflowers give twice as much sun as normal sunflower.\nCost: 150 ☀️\nSun production: Double\nMust be planted on sunflowers\nRecharge: Very Slow",
  plant43: "Gloom-shroom - Gloom-shrooms release heavy fumes in an area around themselves.\nCost: 150☀️\nMust be planted on fume-shrooms\nRecharge: Very Slow",
  plant44: "Cattail: Cattails can attack any lane and shoot down balloon zombies too.\nCost: 225 ☀️\nMust be planted on lily pads\nRecharge: Very Slow",
  plant45: "Winter Melon - Winter Melons do heavy damage and slow groups of zombies.\nCost: 200 ☀️\nDamage: Very heavy\nMust be planted on melon-pults\nRecharge: Very Slow",
  plant46: "Gold Magnet - Gold Magnets collect coins and diamonds for you.\nCost: 50 ☀️\nMust be planted on magnet-shrooms\nRecharge: Very Slow",
  plant47: "Spikerocks pop multiple tires and damage zombies that walk over it.\nCost: 125 ☀️\nMust be planted on spikeweeds\nRecharge: Very Slow",
  plant48: "Cob Cannon - Click on the Cob Cannon to launch deadly cobs of corn.\nCost: 500 ☀️\nMust be planted on 2 side-by-side kernel pults\nRecharge: Very Slow",
  plant49: "Imitater - Imitaters let you use twp of the same plant during a level"
};

// Create and style the tooltip element
const tooltip = document.createElement("div");
tooltip.className = "floating-tooltip";
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.whiteSpace = "pre-line"; // Enables new lines
document.body.appendChild(tooltip);

// Add event listeners once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".plant-box");

  boxes.forEach((box, index) => {
    if (!box.id) box.id = `plant${index + 1}`;

    const id = box.id;
    const note = plantInfo[id] || box.dataset.note || "No info yet!";
    box.dataset.note = note;

    box.addEventListener("mouseenter", () => {
      tooltip.innerText = note;
      tooltip.style.display = "block";

      const rect = box.getBoundingClientRect();
      tooltip.style.top = `${window.scrollY + rect.top}px`;

      // Show tooltip to the left for specific plants
      if (["plant8", "plant16", "plant24", "plant32", "plant40", "plant48"].includes(id)) {
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