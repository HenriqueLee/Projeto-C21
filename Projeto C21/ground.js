class ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        var pencil = {
            isStatic: true
        }
     this.body = Bodies.rectangle(x,y,w,h,pencil);
     World.add(world,this.body);


    }
    show(){
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);



        pop();
    }
}