setTimeout(function(){
    var board = document.getElementsByTagName("cg-board")[0];
    var rect = board.getBoundingClientRect();
    var x0 = Math.round(rect.left); var xf0 = rect.left;
    var y0 = Math.round(rect.top); var yf0 = rect.top;
    var w = Math.round(rect.width);
    var sqsize = Math.round(w / 8); var sqsizef = rect.width / 8;


    var canvas = document.createElement('canvas');
    canvas.id = 'timeRatio';
    canvas.width = sqsize*2;
    canvas.height = w;
    canvas.style.position = 'absolute';
    canvas.style.left = x0+sqsize*3 + "px";
    canvas.style.top = y0 + "px";
    canvas.style.zIndex = 1;
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    var context = canvas.getContext('2d');


var myClock = document.querySelector('.rclock.rclock-bottom'),
      opClock = document.querySelector('.rclock.rclock-top');


function toSeconds(time) {
        var parts = time.trim().split(':');
        var m = parseInt(parts[0]);
        var secParts = parts[1].split('.');
        var s = parseInt(secParts[0]);
        var h = secParts.length > 1 ? parseInt(secParts[1].substr(0, 1)) : 0;
        var val = m * 60 + s + h / 10;
        return val;
    }
 function readTime(clock) {
        var timer = clock.querySelector('.time');
        return timer ? toSeconds(timer.textContent) : 0;
    }

//console.log(readTime(myClock), readTime(opClock));

 var myBurner,opBurner,myTime,opTime;


    setInterval(function() {

myTime = readTime(myClock);
        opTime = readTime(opClock);
//myBurner = ((myTime - opTime) / myTime * 100);
//opBurner = ((opTime - myTime) / opTime * 100);

        if (myTime === opTime) {
            myBurner = 0;
            opBurner = 0;
        } else if (myTime > opTime) {
            myBurner = ((myTime - opTime) / myTime);
            opBurner = 0;
        } else {
            opBurner = ((opTime - myTime) / opTime);
            myBurner = 0;
        }

      context.clearRect(0, 0, canvas.width, canvas.height);


              /*   context.beginPath();
        context.rect(0, w / 2 - 6, sqsize * 2 * ((myTime) / 15), 12);
        context.fillStyle = '#800045';
context.fill();
context.closePath(); */
context.beginPath();
context.rect(0, w / 2 - 6, sqsize * 2 * ((myTime) / 15), 6);
context.fillStyle = '#800045';
context.fill();

context.beginPath();
context.rect(0, w / 2 , sqsize * 2 * ((myTime) / 15), 12);
context.fillStyle = '#5B0070';
context.fill();

context.closePath();




        context.beginPath();
/*context.rect(sqsize-8, (w/2)*(1-myBurner), 16, w/2*myBurner);
                 context.fillStyle = 'blue';*/

                 context.rect(sqsize-8, (w/2)*(1-myBurner), 12, w/2*myBurner);
                 context.fillStyle = 'blue';
                 context.fill();
                 context.beginPath();
                 context.rect(sqsize+4, (w/2)*(1-myBurner), 12, w/2*myBurner);
                 context.fillStyle = '#35FF00';                 
context.fill();
context.closePath();

       /*  context.beginPath();
context.rect(sqsize-8, w/2, 16, w/2*opBurner);
                 context.fillStyle = 'red'; */

                 context.beginPath();
                 context.rect(sqsize-8, w/2, 12, w/2*opBurner);
                                  context.fillStyle = 'red';
                                  context.fill();
                                 


                                  context.beginPath();
                                  context.rect(sqsize+4, w/2, 12, w/2*opBurner);
                                                   context.fillStyle = '#D900FF';
context.fill();
context.closePath();


/*
 context.beginPath();
        context.rect(rect.x*1.009, rect.y+rect.width/2-3, rect.width*((myTime)/15)+3, 6);
                 context.fillStyle = 'magenta';
context.fill();
context.closePath();


        context.beginPath();
        context.rect(rect.x*1.009, rect.y+rect.width/2-9, rect.width*((opTime)/15)+3, 6);
                 context.fillStyle = 'magenta';
context.fill();
context.closePath();
*/

//console.log(myBurner,opBurner,myTime,opTime);

        /*
document.addEventListener("keydown", function(event){

    if(event.keyCode==77){
     document.getElementsByClassName("fbt go-berserk")[0].click();
    }

});
*/






}, 100);

       }, 500);