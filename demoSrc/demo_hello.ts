/**
 * Simple demo page to test GitHub Pages deployment with gulptask-demo-page
 */

// Add a simple greeting message to the page
const greeting = document.createElement("div");
greeting.textContent = "Hello from gulptask-demo-page integration test!";
greeting.style.cssText = `
  font-family: Arial, sans-serif;
  font-size: 24px;
  color: #333;
  margin: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
`;

document.body.appendChild(greeting);

// Add some timestamp information
const timestamp = document.createElement("div");
timestamp.textContent = `Built at: ${new Date().toISOString()}`;
timestamp.style.cssText = `
  font-family: monospace;
  font-size: 14px;
  color: #666;
  margin: 20px;
  text-align: center;
`;

document.body.appendChild(timestamp);

console.log("Demo page loaded successfully!");
