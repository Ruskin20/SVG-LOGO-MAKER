class Shape {
    constructor() {
        this.text - text,
            this.textColor = textColor,
            this.shapeColor = shapeColor,
            this.shape = shape
    }
}



class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50%" r="100" height"100%" width="100%"
        fill="${this.shapeColor}">${this.text} ${this.textColor}</text></svg>`
    }

}
class Square extends Shape {
    render() {
        return `rect x="50" height="200" width="200" 
        fill= "${this.shapeColor}">${this.text}${this.textColor}</text></svg>`
    }
}
class Triangle extends Shape {
    render() {
        return `polygon height="100%" width="100%" points="0,200 300,200 150,0"
        fill= "${this.shapeColor}">${this.text}${this.textColor}</text></svg>`

    }
};



module.exports = { Circle, Square, Triangle }