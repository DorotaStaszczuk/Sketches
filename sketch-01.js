const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  fps: 2,
  playbackRate: 'throttle'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;
    let x, y;

    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            x = ix + (w + gap) * i;
            y = iy + (w + gap) * j;

            context.beginPath();
            context.rect(x, y, w, h);
            context.strokeStyle = '#384A89';
            context.stroke();

            if (Math.random() > 0.5){
                context.save();
                context.beginPath();
                context.arc(x + w / 2, y + w /2, width * 0.03, 0, 2 * Math.PI);
                context.fillStyle = '#6A72E5';
                context.fill();
                context.restore();
            }
        }
    }
  };
};

canvasSketch(sketch, settings);