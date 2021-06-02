class stone {
    constructor(x, y,radius) {
        var options = {
          'density':1,
          'friction': 5,
          'restitution':0.3
        };
        this.body = Bodies.rectangle(x, y, 50, options);
        this.x = 350;
        this.y = 564;
        this.r = radius;
        World.add(world, this.body);
      };
      display(){
  
        var pos = this.body.position;
		var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle); 
	  fill('yellow')
	  ellipseMode(CENTER);
	  ellipse(this.x,this.y, this.r, this.r);
	  pop();
	};
  };