// Builds the NACA 4-digit airfoil as an SVG path inside #hero-airfoil-svg.
// Rotation + pitch are CSS-driven so the airfoil stays crisp at any DPI and
// renders reliably in headless / screenshot contexts.
(function () {
  const svg = document.getElementById('hero-airfoil');
  if (!svg) return;

  // NACA 4-digit airfoil generator. Default: 4414 (more visible camber + thickness).
  function generateNACA(m, p, t, n) {
    m /= 100; p /= 10; t /= 100;
    const upper = [], lower = [];
    for (let i = 0; i <= n; i++) {
      const beta = (Math.PI * i) / n;
      const x = (1 - Math.cos(beta)) / 2;
      const yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x);
      let yc, dyc_dx;
      if (x < p) {
        yc = (m / (p * p)) * (2 * p * x - x * x);
        dyc_dx = (2 * m / (p * p)) * (p - x);
      } else {
        yc = (m / ((1 - p) * (1 - p))) * ((1 - 2 * p) + 2 * p * x - x * x);
        dyc_dx = (2 * m / ((1 - p) * (1 - p))) * (p - x);
      }
      const theta = Math.atan(dyc_dx);
      upper.push([x - yt * Math.sin(theta), yc + yt * Math.cos(theta)]);
      lower.push([x + yt * Math.sin(theta), yc - yt * Math.cos(theta)]);
    }
    return upper.concat(lower.reverse());
  }

  // Build path scaled to a 200x60 box centered on (0, 0).
  function pathFromPoints(points, w, h) {
    return points.map(([x, y], i) => {
      const px = (x - 0.5) * w;
      const py = -y * h;
      return (i === 0 ? 'M' : 'L') + px.toFixed(2) + ' ' + py.toFixed(2);
    }).join(' ') + ' Z';
  }

  const W = 240, H = 90;
  const front = generateNACA(4, 4, 14, 110);
  const rear  = generateNACA(2, 4, 12, 110);
  const frontPath = pathFromPoints(front, W, H);
  const rearPath  = pathFromPoints(rear, W * 1.08, H * 1.05);

  // Clear and populate the svg.
  svg.setAttribute('viewBox', '-400 -300 800 600');
  svg.innerHTML = `
    <defs>
      <pattern id="hf-grid" width="32" height="32" patternUnits="userSpaceOnUse" x="0" y="0">
        <circle cx="1" cy="1" r="1" fill="#A5A5AD" opacity="0.18"/>
      </pattern>
      <linearGradient id="hf-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="#0A0A0B" stop-opacity="0"/>
        <stop offset="100%" stop-color="#0A0A0B" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <rect x="-400" y="-300" width="800" height="600" fill="url(#hf-grid)"/>
    <g class="hf-stack">
      <g class="hf-wing hf-wing--rear" transform="translate(-12 18)">
        <path d="${rearPath}" fill="none" stroke="#4A8AE8" stroke-width="3"  stroke-opacity="0.22" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="${rearPath}" fill="none" stroke="#92B8F0" stroke-width="1.2" stroke-opacity="0.6"  stroke-linejoin="round" stroke-linecap="round"/>
      </g>
      <g class="hf-wing hf-wing--front" transform="translate(8 -10)">
        <path d="${frontPath}" fill="none" stroke="#4A8AE8" stroke-width="6"  stroke-opacity="0.35" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="${frontPath}" fill="none" stroke="#A8C5F4" stroke-width="1.6" stroke-opacity="1"    stroke-linejoin="round" stroke-linecap="round"/>
        <line x1="-${W/2}" y1="0" x2="${W/2}" y2="0" stroke="#4A8AE8" stroke-width="0.8" stroke-opacity="0.4" stroke-dasharray="6 6"/>
      </g>
    </g>
    <rect x="-400" y="-300" width="800" height="600" fill="url(#hf-fade)"/>
  `;
})();
