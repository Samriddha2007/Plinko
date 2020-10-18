
class BaseClass 
{
    constructor(x,y,height)
   {
      var options = 
      {
          'isStatic' : true,
          'restitution' : 0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,20,height,options);
      this.radius = 20;
      this.height = height;
      World.add(world,this.body);
      
   }
   display()
   {
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(CENTER);
    fill("white");
    ellipse(0,0,this.radius,this.height);
    pop();
   }
}
