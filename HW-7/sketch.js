let box = {};

box.width = 40;

box.x = 0;
box.y = 0;

box.delta_x = 3;
box.delta_y = 3;
box.scale_x = 3;
box.scale_y = 3;

function setup() {
    createCanvas(windowWidth, 400);
    background('rgba(153, 204, 153, 0.8)');
}

function draw() {

    box.x += box.delta_x / box.scale_x;
    box.y += box.delta_y * box.scale_y;

    if (box.x >= width || box.x <= 0) {
        box.delta_x = -2 * box.delta_x;
    }
    if (box.y >= height || box.y <= 0) {
        box.delta_y = -1 * box.delta_y;
    }

    stroke('rgba(255, 153, 102, 0.7)');
    fill('rgba(255, 204, 51, 0.1)');
    rect(box.x, box.y, box.width, box.width);
}

function mousePressed() {
    box.scale_x = map(mouseX, 0, width, 0.5, 10);
    box.scale_y = map(mouseY, 0, height, 0.5, 10);
}
