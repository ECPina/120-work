Erica Pina, Section B

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

The original code animates the ball moving across the screen. When the ball hits the corners of the canvas, it changes directions and continues it's jouney, drawing a lattice pattern over and over again. If the screen is clicked, the ball accelerates. The ball never breaks from the canvas.

``` // creates an object named ball
let ball = {};

// width of the ball is 40
ball.width = 40;

// center of ball is at 10,10
ball.x = 10;
ball.y = 10;

// Changes the the ball over time, shifting teh ball over and down by 1.
ball.delta_x = 1;
ball.delta_y = 1;

// moves the ball along along the x and y axis by 1
ball.scale_x = 1;
ball.scale_y = 1;

// creates the canvas that our ball is animated on
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}

// draws our ball
function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

// Constrains the ball to stay within the parameters of the canvas, changing direction of the ball when it hits the corners
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

// gives color of ball and dictates the dimensions of the ball
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
 // changes the direction of the ball when the mouse is pressed, as well as the speed
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
} ```

## How did you alter the sketch?
