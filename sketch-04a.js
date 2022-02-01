const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const params = {
    cols: 15,
    rows: 15,
    scaleMin: 1,
    scaleMax: 30,
    freq: 0.001,
    amp: 0.2,
    frame: 0,
    animate: true,
    lineCap: 'butt',
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
