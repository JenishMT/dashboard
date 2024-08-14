window.onload = function () {
  // Line Chart Section
  const lineCanvas = document.getElementById("chart-line");
  if (lineCanvas) {
    // Check if the canvas element exists
    const lineCtx = lineCanvas.getContext("2d");

    const dataPoints = [
      { x: 50, y: 250 },
      { x: 150, y: 200 },
      { x: 250, y: 150 },
      { x: 350, y: 180 },
      { x: 450, y: 100 },
      { x: 550, y: 130 },
    ];

    lineCtx.beginPath();
    lineCtx.moveTo(dataPoints[0].x, dataPoints[0].y);
    for (let i = 1; i < dataPoints.length; i++) {
      lineCtx.lineTo(dataPoints[i].x, dataPoints[i].y);
    }
    lineCtx.strokeStyle = "blue";
    lineCtx.lineWidth = 2;
    lineCtx.stroke();

    lineCtx.fillStyle = "red";
    for (let i = 0; i < dataPoints.length; i++) {
      lineCtx.beginPath();
      lineCtx.arc(dataPoints[i].x, dataPoints[i].y, 5, 0, Math.PI * 2, true);
      lineCtx.fill();
    }
  }

  // Bar Chart Section
  const barCanvas = document.createElement("canvas");
  barCanvas.id = "chart-bars";
  barCanvas.width = 611;
  barCanvas.height = 170;
  barCanvas.style.display = "block";
  barCanvas.style.boxSizing = "border-box";

  const container = document.getElementById("chart-container");
  if (container) {
    // Check if the container exists
    container.appendChild(barCanvas);

    const barCtx = barCanvas.getContext("2d");

    const barDataPoints = [50, 75, 100, 125, 90];
    const barWidth = 50;
    const barSpacing = 20;
    const chartHeight = barCanvas.height;

    barDataPoints.forEach((value, index) => {
      const barHeight = value;
      const x = index * (barWidth + barSpacing);
      const y = chartHeight - barHeight;

      barCtx.fillStyle = "blue";
      barCtx.fillRect(x, y, barWidth, barHeight);
    });
  }
};
