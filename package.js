class Package {
    constructor(x,y,width,height){
        var options = {
            'density':1.0,
        'friction': 1.0,
        'restitution':0.8
        }
        this.image=loadImage("sprites/package.png");
        var options = {
        isStatic:true,
        
        
    }
    }
    display(){
        
        image(this.image,0, 0, this.width, this.height);
      
         }
}        
