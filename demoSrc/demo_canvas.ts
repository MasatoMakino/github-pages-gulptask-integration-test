/**
 * Canvas demo to test more complex rendering
 */

function initCanvasDemo() {
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
  let angle = 0;

  function draw(context: CanvasRenderingContext2D) {
    // Clear canvas
    context.fillStyle = "#f0f0f0";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw animated circle
    context.fillStyle = `hsl(${hue}, 70%, 50%)`;
    const x = canvas.width / 2 + Math.cos(angle) * ORBIT_RADIUS_X;
    const y = canvas.height / 2 + Math.sin(angle) * ORBIT_RADIUS_Y;
    context.beginPath();
    context.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2);
    context.fill();

    // Draw text
    context.fillStyle = "#333";
    context.font = "24px Arial";
    context.textAlign = "center";
    context.fillText("Canvas Demo - Integration Test", canvas.width / 2, 50);

    hue = (hue + 1) % 360;
    angle += 1 / ANIMATION_SPEED;
    requestAnimationFrame(() => draw(context));
  }

  draw(ctx);

  console.log("Canvas demo initialized!");
}

// Wait for DOM to be ready before initializing
document.addEventListener("DOMContentLoaded", initCanvasDemo);
