let x
let y
let d
let vx
let vy

function setup() {
    createCanvas(600, 400);
    x = random (600)
    y = random (400)
    d = 100
    vx = -7
    vy = -7
}

function draw() {
    background("green");
    fiorellino(x, y, d)
    x = x + vx
    y = y + vy
    if (x < 0) {
        vx = -1 * vx
    }
    if (x > 600) {
        vx = -1 * vx
    }
    if (y < 0) {
        vy = -1 * vy
    }
    if (y > 400) {
        vy = -1 * vy
    }
}

function fiorellino(x, y, d) {
    let x1 = x - d / 2
    let x2 = x + d / 2
    let y1 = y - d / 2
    let y2 = y + d / 2
    fill("yellow")

    circle(x1, y1, d)
    circle(x2, y1, d)
    circle(x1, y2, d)
    circle(x2, y2, d)
    fill("red")
    circle(x, y, d)


}