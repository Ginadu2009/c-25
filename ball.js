var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    desity:1.2
}

this.image = loadImage("paper.png")

function keyPressed () {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bola.body,bola.body.position,{x:130,y:-145});
    }
}