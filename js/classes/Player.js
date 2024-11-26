import Shape from './Shape.js'


class Player extends Shape{
    #width
    #length

    get width(){
        return this.#width
    }

    set width(width){
        this.#width = width
    }

    get length(){
        return this.#length
    }

    set length(length){
        this.#length = length
    }

    constructor(x,y,width,length,color){
        super(x,y,color)
        this.width = width
        this.length = length
    }

    draw(context){
        context.beginPath()
        context.rect(this.x, this.y, this.width, this.length)
        context.fillStyle = this.color
        context.fill()
    }
}

export default Player