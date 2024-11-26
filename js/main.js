import Ball from './classes/Ball.js'
import Player from './classes/Player.js'

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

let ballPos = {
    x: 320,
    y: 240
};

let playerY = 240

let direction = {
    x: 1,
    y: 1
};

let velocity = {
    x: 1.5,
    y: 1.5
};

const anim = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if( ( ballPos.y > canvas.height ) || ( ballPos.y < 0 )){
        direction.y = direction.y * -1
    }

    if( ( ballPos.x > canvas.width ) || ( ballPos.x < 0 )){
        ballPos = {
            x: 320,
            y: 240
        };
    }

    if ( ( ((ballPos.x) < 10) || (ballPos.x>630) )   && ( (ballPos.y < playerY + 80) && (ballPos.y > playerY) ) ){
        //direction.y = direction.y * -1
        direction.x = direction.x * -1
    }
    
    ballPos.x += velocity.x * direction.x;
    ballPos.y += velocity.y * direction.y; 

    const ball = new Ball(ballPos.x,ballPos.y,10,'red')
    ball.draw(context)

    const player1 = new Player(10, playerY, 5, 80, "blue")
    const player2 = new Player(630, playerY, 5, 80, "blue")
    player1.draw(context)
    player2.draw(context)

    requestAnimationFrame(anim);
};

canvas.addEventListener('mousemove', (e) => {
    playerY = e.offsetY
});

requestAnimationFrame(anim)