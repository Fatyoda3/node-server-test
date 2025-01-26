const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ct = canvas.getContext("2d");
document.body.appendChild(canvas);

let w = window.innerWidth;
let h = window.innerHeight;

ct.strokeStyle = "red";

class RotatingText {
    constructor(radius) {
        this.radius = radius; // Radius of the circle
        this.angle = 0;       // Current angle in radians
        this.centerX = w / 2; // Center X of the circle
        this.centerY = h / 2; // Center Y of the circle
    }

    draw() {
        const x = this.centerX + this.radius * Math.cos(this.angle); // X position on the circle
        const y = this.centerY + this.radius /* * Math.sin(this.angle); */ // Y position on the circle

        ct.beginPath();
        ct.font = "24px Arial";
        ct.strokeText("Hello World", x, y);
        ct.closePath();
    }

    update() {
        this.angle += 0.02; // Increment the angle for rotation
        if (this.angle >= 2 * Math.PI) this.angle = 0; // Reset angle after full rotation
        this.draw();
    }

    reset() {
        this.centerX = w / 2;
        this.centerY = h / 2;
    }
}

const rotatingText = new RotatingText(200); // Circle radius of 200px

function animate() {
    ct.clearRect(0, 0, w, h);
    rotatingText.update();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    w = window.innerWidth;
    h = window.innerHeight;

    rotatingText.reset();
});
