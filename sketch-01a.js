const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
    dimensions: [ 1080, 1080  ]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = '#ED3B4B';
        context.fillRect(0, 0, width, height);

        // number of columns and rows in a grid
        const cols = 8;
        const rows = 8;

        // width and height of the sketch area without margins
        const gridw = width * 0.75;
        const gridh = height * 0.75;

        // width and height of a single cell including margins
        const cellw = gridw / cols;
        const cellh = gridw / rows;

        // width and height of a single cell without the margins
        const w = cellw * 0.8;
        const h = cellh * 0.8;

        // margines for a single cell
        const margx = (gridw - (cols * w)) / (cols - 1);
        const margy = (gridh - (rows * h)) / (rows - 1);

        // starting point for drawing circles
        const ix = (width - gridw) / 2 + w * 0.5;
        const iy = (height - gridh) / 2 + h * 0.5;

        const radius = w * 0.45;

        let x, y;

        for (let i = 0; i < cols; i++){
            for (let j = 0; j < rows; j++){
                x = ix + (w + margx) * i;
                y = iy + (h + margy) * j;

                // drawing a grid of white cirles
                context.save();
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.lineWidth = 18;
                context.strokeStyle = 'white';
                context.stroke();
                context.restore();

                // drawing and rotating randomly a grid of grey arcs
                context.save();
                context.translate(x, y);
                let rotateAngle = random.range(0, 360) * Math.PI / 180;
                context.rotate(rotateAngle);
                context.translate(-x, -y);
                context.beginPath();
                context.arc(x, y, radius, 0, 1.6 * Math.PI);
                context.lineWidth = 19;
                context.strokeStyle = '#4A4B5F';
                context.lineCap = 'round';
                context.stroke();
                context.restore();
            }
        }
    };
};

canvasSketch(sketch, settings);