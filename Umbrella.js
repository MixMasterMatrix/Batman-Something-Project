class umbrella{
    constructor(x,y,r){
        var options = {
          'restitution': 0.1,
          'friction' : 1.2,
        }
        this.image = loadImage("images/Walking_Frame/walking_1.png")
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body)
    }
}