class  bunny{
    constructor(x,y)
      {
          var options = { 
              density: 1,
               
              
          };
          this.x=x;
          this.y=y;
        
          this.image=loadImage("bunny.gif");
          this.body=Bodies.rectangle(this.x, this.y,  options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var bunnyPos=this.body.position;		
              push()
              translate(bunnyPos.x, bunnyPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
             
              pop()
              
      }
    }