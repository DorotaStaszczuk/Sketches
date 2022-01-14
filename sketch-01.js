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

        const cols = 5;
        const rows = 5;

        const gridw = width * 0.8;
        const gridh = height * 0.8;

        const cellw = gridw / cols;
        const cellh = gridw / rows;

        const w = cellw * 0.8;
        const h = cellh * 0.8;

        const margx = (gridw - (cols * w)) / (cols - 1);
        const margy = (gridh - (rows * h)) / (rows - 1);

        const ix = (width - gridw) / 2;
        const iy = (height - gridh) / 2;

        let x, y;

        for (let i = 0; i < cols; i++){
            for (let j = 0; j < rows; j++){
                x = ix + (w + margx) * i;
                y = iy + (h + margy) *j;

                context.beginPath();
                context.rect(x, y, w, h);
                context.strokeStyle = '#384A89';
                context.stroke();

                if (Math.random() > 0.5){
                    context.save();
                    context.beginPath();
                    context.arc(x + w / 2, y + w /2, w / 2 * 0.6, 0, 2 * Math.PI);
                    context.fillStyle = '#6A72E5';
                    context.fill();
                    context.restore();
                }
            }
        }
    };
};

canvasSketch(sketch, settings);