const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [ 1080, 1080  ]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        // number of columns and rows in a grid
        const cols = 5;
        const rows = 5;

        // width and height of the sketch area without margins
        const gridw = width * 0.8;
        const gridh = height * 0.8;

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

        const radius = w * 0.6;

        let x, y;

        for (let i = 0; i < cols; i++){
            for (let j = 0; j < rows; j++){
                x = ix + (w + margx) * i;
                y = iy + (h + margy) * j;

                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.strokeStyle = 'lack';
                context.stroke();
            }
        }
    };
};

canvasSketch(sketch, settings);