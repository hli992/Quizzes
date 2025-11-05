const canvas = document.getElementById('hypno');
const ctx = canvas.getContext('2d');
let rotation = 0;
let spinning = true;
let speed = 0.07;
let maxWidthMultiplier = 20; // Control for max width

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  centerX = w / 2;
  centerY = h / 2;
}

let width = window.innerWidth;
let height = window.innerHeight;
let centerX = width / 2;
let centerY = height / 2;

// Spiral parameters
const a = 2;
const b = 0.15;

// Calculate responsive line widths based on window size
function getLineWidths() {
  const baseSize = Math.min(width, height);
  return {
    min: baseSize * 0.002,  // 0.2% of smaller dimension
    max: baseSize * 0.03 * maxWidthMultiplier  // 3% of smaller dimension * multiplier
  };
}

// Draw single spiral
function drawSingleSpiral(rotationOffset = 0) {
  ctx.save();
  ctx.rotate(rotationOffset);
  const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);
  const tMax = Math.log(maxRadius / a) / b;
  const step = 0.01;
  const leftPoints = [];
  const rightPoints = [];
  
  const lineWidths = getLineWidths();
  const minLineWidth = lineWidths.min;
  const maxLineWidth = lineWidths.max;
  
  for (let t = 0; t <= tMax; t += step) {
    const r = a * Math.exp(b * t);
    const angle = t;
    const progress = r / maxRadius;
    const currentWidth = minLineWidth + (maxLineWidth - minLineWidth) * progress;
    const halfWidth = currentWidth / 2;
    const perpAngle = angle + Math.PI / 2;
    leftPoints.push({
      x: r * Math.cos(angle) + halfWidth * Math.cos(perpAngle),
      y: r * Math.sin(angle) + halfWidth * Math.sin(perpAngle)
    });
    rightPoints.push({
      x: r * Math.cos(angle) - halfWidth * Math.cos(perpAngle),
      y: r * Math.sin(angle) - halfWidth * Math.sin(perpAngle)
    });
  }
  ctx.beginPath();
  ctx.moveTo(leftPoints[0].x, leftPoints[0].y);
  for (let i = 1; i < leftPoints.length; i++) ctx.lineTo(leftPoints[i].x, leftPoints[i].y);
  for (let i = rightPoints.length - 1; i >= 0; i--) ctx.lineTo(rightPoints[i].x, rightPoints[i].y);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.restore();
}

// Draw all 4 spirals
function drawSpirals() {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(rotation);
  const rotations = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  for (let rot of rotations) drawSingleSpiral(rot);
  ctx.restore();
}

// Animate
function animate() {
  if (spinning) rotation += speed;
  drawSpirals();
  requestAnimationFrame(animate);
}

resizeCanvas();
animate();

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  centerX = width / 2;
  centerY = height / 2;
  resizeCanvas();
});

// --- Controls ---
document.getElementById('pauseBtn').addEventListener('click', () => {
  spinning = !spinning;
  document.getElementById('pauseBtn').textContent = spinning ? '⏸' : '▶';
});

document.getElementById('slowBtn').addEventListener('click', () => {
  speed = Math.max(speed - 0.01, 0.001);
});

document.getElementById('fastBtn').addEventListener('click', () => {
  speed += 0.01;
});

const fullscreenBtn = document.getElementById('fullscreenBtn');

// Click handler to toggle fullscreen
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

// Pressing "F" key toggles fullscreen
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'f') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }
});

// Listen for fullscreen changes to update the icon
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    fullscreenBtn.textContent = '✕'; // in fullscreen, show ✕
  } else {
    fullscreenBtn.textContent = '⛶'; // not fullscreen, show fullscreen icon
  }
});

const tooltip = document.getElementById('tooltip');

function showTooltip(e, text) {
    tooltip.style.display = 'block';
    tooltip.textContent = text;
    tooltip.style.left = e.pageX + 10 + 'px';  // offset right
    tooltip.style.top = e.pageY + 10 + 'px';   // offset below
}

function moveTooltip(e) {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}

// Slow button tooltip
const slowBtn = document.getElementById('slowBtn');
slowBtn.addEventListener('mouseenter', (e) => showTooltip(e, 'Slower'));
slowBtn.addEventListener('mousemove', moveTooltip);
slowBtn.addEventListener('mouseleave', hideTooltip);

// Fast button tooltip
const fastBtn = document.getElementById('fastBtn');
fastBtn.addEventListener('mouseenter', (e) => showTooltip(e, 'Faster'));
fastBtn.addEventListener('mousemove', moveTooltip);
fastBtn.addEventListener('mouseleave', hideTooltip);
