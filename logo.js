const svg = document.getElementById('logo');
const R = 120; // Major radius
const r = 50;  // Minor radius
const stepsU = 100; // Longitudinal segments
const stepsV = 50; // Latitudinal segments

for (let i = 0; i <= stepsU; i++) {
    const u = i / stepsU * 2 * Math.PI;
    for (let j = 0; j <= stepsV; j++) {
        const v = j / stepsV * 2 * Math.PI;
        const x = (R + r) * Math.cos(v) * Math.cos(u);
        const y = (R - 0.2 * r) * Math.cos(v) * Math.sin(u) / 1.5;
        const z = r * Math.sin(2 * v);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", 200 + x);
        circle.setAttribute("cy", 200 + y - z);
        circle.setAttribute("r", 1);
        circle.setAttribute("fill", "currentColor");
        svg.appendChild(circle);
    }
}

anime({
    targets: '#logo circle',
    r: [
        { value: 3, duration: 100, easing: 'easeOutSine' },
        { value: 1, duration: 100, easing: 'easeInSine' }
    ],
    delay: anime.stagger(60, { grid: [stepsU + 10, stepsV + 10], from: 'center' }),
    loop: true
});
