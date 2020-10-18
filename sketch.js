var particles = [];
var plinkos = [];
var divisions = [];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var ground;
var divisionHeight = 300;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12;
var plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20,plinko21,plinko22,plinko23,plinko24;
var plinko25,plinko26,plinko27,plinko28,plinko29,plinko30,plinko31,plinko32,plinko33,plinko34,plinko35,plinko36;

var division1,division2,division3,division4,division5,division6,division7,division8,division9,division10;
var division11,division12,division13,division14;



function setup()
{
    var canvas = createCanvas(1320,612);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(682.5,607,1365,10);

    for (var k = 20; k <= 1320; k = k + 90)
    {
      plinkos.push(new Plinko(k,105,20));
    }
    for (var l = 40; l <= 1310; l = l + 90)
    {
      plinkos.push(new Plinko(l,155,20));
    }
    for (var m = 20; m <= 1320; m = m + 90)
    {
      plinkos.push(new Plinko(m,205,20));
    }
    for (var n = 40; n <= 1310; n = n + 90)
    {
      plinkos.push(new Plinko(n,255,20));
    }

    
    for (var o = 20; o <= 1320; o = o + 90)
    {
      divisions.push(new Divisions(o,612- divisionHeight/2,10,divisionHeight));
    }
}

function draw()
{
    Engine.update(engine);
    background("black");

    ground.display();

    if(frameCount % 60 === 0)
    {
      particles.push(new Particle(random(100,1000), 20,20));
    }

    for (var j = 0; j < particles.length; j++)
    {
      particles[j].display();
    }



    for (var k = 0; k < plinkos.length; k++)
    {
       plinkos[k].display();
    } 
    for (var l = 0; l < plinkos.length; l++)
    {
       plinkos[l].display();
    }   
    for (var m = 0; m < plinkos.length; m++)
    {
       plinkos[m].display();
    }  
    for (var n = 0; n < plinkos.length; n++)
    {
       plinkos[n].display();
    } 
    
   
    for (var o = 0; o < divisions.length; o++)
    {
      divisions[o].display();
    }

}

