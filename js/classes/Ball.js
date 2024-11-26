import Shape from './Shape.js'

class Ball extends Shape{
    #radius

    get radius(){
        return this.#radius
    }

    set radius(radius){
        this.#radius = radius
    }

    constructor(x,y,radius, color){
        super(x,y,color)
        this.x = x
        this.y = y
        this.radius = radius
    }

    draw(context){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
    }
}

export default Ball