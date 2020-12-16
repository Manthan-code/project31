var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;
function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(350,690);
  

    for (var k = 0; k <=6; k = k +1) {
      divisions[k] = new Division(100*k,600)  
     }    

    for (var j=0;j<=15;j=j+1){
      plinkos[j]=[];
      for(var i=0;i<=4;i++){
        plinkos[j][i]=new Plinko(20+j*50,150+i*50,10);
      }
    }
}
 
function draw() {
  background("yellow");
  textSize(20);
  Engine.update(engine);
  ground.display();
  for (var j=0;j<=15;j=j+1){
      for(var i=0;i<=4;i++){
      plinkos[j][i].display();
    }
  }
  if(frameCount%80===0){
    particles.push(new Particle(random(100,600),10,10));

  }
  for(var a=0;a<particles.length;a++){
    particles[a].display();
  }
   push();
   fill("black");
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   pop();
}