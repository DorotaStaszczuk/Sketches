const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [ 1080, 1080 ],
    animate: true,
    fps: 2,
    playbackRate: 'throttle',
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.01;

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

        // starting point for drawing squares
        const ix = (width - gridw) / 2;
        const iy = (height - gridh) / 2;

        let x, y;

        // drawing a grid of squares
        for (let i = 0; i < cols; i++){
            for (let j = 0; j < rows; j++){
                x = ix + (w + margx) * i;
                y = iy + (h + margy) *j;

                context.beginPath();
                context.rect(x, y, w, h);
                context.strokeStyle = '#384A89';
                context.stroke();

                // drawing dots in random squares
                if (Math.random() > 0.5){
                    // adding parameter p
                    let p;
                    // checking what has smaller value: w or h and making p equal to that value
                    if (w < h){p = w} else {p = h};
                    context.save();
                    context.beginPath();
                    context.arc(x + w / 2, y + h /2, p / 2 * 0.6, 0, 2 * Math.PI);
                    context.fillStyle = '#6A72E5';
                    context.fill();
                    context.restore();
                }
            }
        }
    };
};

canvasSketch(sketch, settings);