const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let kruh = {
x: canvas.width /2,
y: canvas.height/2,
sensitivity: 10,
polomer: 25,
paint: function(){
    ctx.beginPath();
ctx.arc(this.x, this.y, this.polomer, 0, 2 * Math.PI);
ctx.stroke();
}



}

let skore = {
    xs: canvas.width -950,
    ys:canvas.height -650,

    paintskore: function(){
        ctx.font = "30px Arial";
    ctx.strokeStyle = 'black';
    ctx.strokeText("000", this.xs, this.ys);
    }
}

let branka ={
xb: canvas.width - 50,
yb: canvas.height -450,
a: 20,
b:100,
shift: 20,
timer: null,
paintbranka: function(){
    ctx.fillStyle = 'black'
    ctx.fillRect(this.xb, this.yb, this.a, this.b);

},
move: function(){

//if (this.yb <= canvas.height ){
    
    //if (this.yb >= canvas.height -100){
        //this.yb -= this.shift;
        this.yb += (Math.random() * 2 * this.shift) - this.shift;
      // }
  // if (this.yb = canvas.height -500){
   // this.yb += this.shift;
  // }
//}
//if (this.yb = 0){
   // this.yb = canvas.height;
//}
        
}


}

function Kolize(){
    if (kruh.x = branka.xb){

    }
}

let game = {
    timer: null,
    play: function() {
        this.timer = setInterval(function() {
            game.repaint();
        }, 20);    
    },
    repaint: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        kruh.paint();
        branka.paintbranka();
        branka.move();
        skore.paintskore();
       
    }
}
// **********************************************
document.addEventListener('keydown', function(event){
   
    switch (event.code){
       
        case 'ArrowLeft':  kruh.x -= kruh.sensitivity;
            break; 
        case 'ArrowRight':  kruh.x += kruh.sensitivity;
            break;
        case 'ArrowUp':     kruh.y -= kruh.sensitivity;
             break;
        case 'ArrowDown':    kruh.y += kruh.sensitivity;
            break;
      
        }
    
    
    });
    game.play();
