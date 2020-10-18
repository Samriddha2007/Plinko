
class BaseClass1 
{
    constructor(x,y,height)
   {
      var options = 
      {
          'restitution' : 0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,20,height,options);
      this.radius = 20;
      this.height = height;
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world,this.body);
      
   }
   display()
   {
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(0,0,this.radius,this.height);
    pop();
   }
}
