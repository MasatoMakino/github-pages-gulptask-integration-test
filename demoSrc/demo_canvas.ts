/**
 * Canvas demo to test more complex rendering
 */

// Create a canvas element
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
canvas.style.cssText = `
  display: block;
  margin: 20px auto;
  border: 2px solid #333;
  border-radius: 4px;
`;

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("Could not get canvas context");
}

// Animation constants
const ANIMATION_SPEED = 50;
const ORBIT_RADIUS_X = 200;
const ORBIT_RADIUS_Y = 150;
const CIRCLE_RADIUS = 50;

// Draw a simple animation
let hue = 0;

function draw() {
  // Clear canvas
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw animated circle
  ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;
  const x = canvas.width / 2 + Math.cos(hue / ANIMATION_SPEED) * ORBIT_RADIUS_X;
  const y = canvas.height / 2 + Math.sin(hue / ANIMATION_SPEED) * ORBIT_RADIUS_Y;
  ctx.beginPath();
  ctx.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2);
  ctx.fill();

  // Draw text
  ctx.fillStyle = "#333";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Canvas Demo - Integration Test", canvas.width / 2, 50);

  hue = (hue + 1) % 360;
  requestAnimationFrame(draw);
}

draw();

console.log("Canvas demo initialized!");
