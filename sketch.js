

//Karam Byun
var lines;
var txt;

var dict = {}; //dictionary of all words
var bict = {}; //dictinoary of interesting words
var keys = []; //array of all words in order
var interest = []; //array of interesting words in order
//var one =[]; //array oneshot words in order

var mult = 1;

var hamlet = function (s){

  s.preload = function(data){
    lines = loadStrings('data/full_hamlet.txt');
    createP(lines[0]);
  }

  s.setup = function(){
    createCanvas(480,400);
    var txt = lines.join(' ');
    var tokens = txt.split(/\W=/);
    console.log(tokens);
    for(var i = 0; i < tokens.length; i++){
  		var token = tokens[i]
  		token = token.toLowerCase();

  		if(dict[token] === undefined){
  			dict[token] = 1;
  			keys.push(token);
  		} else{
  			dict[token]++;
  		}
  	}
  }

  s.draw = function(){
    noStroke();
    background(100,180,210);
    for (var i = 0; i < keys.length; i++) {

      var size = dict[keys[i]];

      if(size > 200){
        fill(255,0,100,255*(size/(993*4)));
        ellipse(width*i/keys.length,height*0.2,size*mult,size*mult)
      } else if(size > 20 && size <200){
        fill(144,200,0,255*(size/300));
        ellipse(width*i/keys.length,height*0.55,size*mult,size*mult)
      } else{
        fill(255,255*(size/40));
        ellipse(width*i/keys.length,height*0.85,size*mult,size*mult)
      }
    }
  }

}

var one = new p5(hamlet,'hamlet');
//
// function preload(data){
// 	lines = loadStrings('data/full_hamlet.txt');
// }
//
// function setup(){
//   var myCanvas = createCanvas(480, 270);
//   myCanvas.parent('hamlet');
//
//   line(15, 25, 70, 90);
//   stroke(0);
//   fill(150);
//
// 	//createCanvas(1960, 400);
// 	//setupDropZone();
//
// 	txt = lines.join(' ');
// 	//lines = loadStrings('data/test.txt');
// 	console.log(txt)
//
// 	var tokens = txt.split(/\W+/);
// 	console.log(tokens);
//
// 	for(var i = 0; i < tokens.length; i++){
// 		var token = tokens[i]
// 		token = token.toLowerCase();
//
// 		if(dict[token] === undefined){
// 			dict[token] = 1;
// 			keys.push(token);
// 		} else{
// 			dict[token]++;
// 		}
// 	}
// }
//
// function draw(){
// 	noStroke();
// 	background(100,180,210);
//
// 	for (var i = 0; i < keys.length; i++) {
//
// 		var size = dict[keys[i]];
//
// 		if(size > 200){
// 			fill(255,0,100,255*(size/(993*4)));
// 			ellipse(width*i/keys.length,height*0.2,size*mult,size*mult)
// 		} else if(size > 20 && size <200){
// 			fill(144,200,0,255*(size/300));
// 			ellipse(width*i/keys.length,height*0.55,size*mult,size*mult)
// 		} else{
// 			fill(255,255*(size/40));
// 			ellipse(width*i/keys.length,height*0.85,size*mult,size*mult)
// 		}
// 	}
// }
//
//
// function mouseDragged() {
//
// 	background(0);
// 	mult = mouseX/width;
// 	if(mult<0.1){
// 		mult =1;
// 	}
// }
