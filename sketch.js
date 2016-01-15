// var lines;
// var text;
//
// function preload(){
//   lines = loadStrings('files/spam.txt');
// }
//
// function setup(){
// //  loadStrings('files/spam.txt',fileready);
//   createCanvas(300,300);
//   fill(150);
//
//   text = join(lines, '<br/>');
//   var par = createP(text);
//   par.id('text');
// }

//Karam Byun
var lines;
var txt;

var dict = {}; //dictionary of all words
var bict = {}; //dictinoary of interesting words
var keys = []; //array of all words in order
var interest = []; //array of interesting words in order
//var one =[]; //array oneshot words in order

var mult = 1;

// var hamlet = function (s){
//
//   s.preload = function(data){
//     lines = loadStrings('files/full_hamlet.txt');
//
//   }
//
//   s.setup = function(){
//     createCanvas(480,400);
//     var txt = join(lines, ' ');
//     var tokens = txt.split(/\W=/);
//     console.log(tokens);
//     for(var i = 0; i < tokens.length; i++){
//   		var token = tokens[i]
//   		token = token.toLowerCase();
//
//   		if(dict[token] === undefined){
//   			dict[token] = 1;
//   			keys.push(token);
//   		} else{
//   			dict[token]++;
//   		}
//   	}
//   }
//
//   s.draw = function(){
//     noStroke();
//     background(100,180,210);
//     for (var i = 0; i < keys.length; i++) {
//
//       var size = dict[keys[i]];
//
//       if(size > 200){
//         fill(255,0,100,255*(size/(993*4)));
//         ellipse(width*i/keys.length,height*0.2,size*mult,size*mult)
//       } else if(size > 20 && size <200){
//         fill(144,200,0,255*(size/300));
//         ellipse(width*i/keys.length,height*0.55,size*mult,size*mult)
//       } else{
//         fill(255,255*(size/40));
//         ellipse(width*i/keys.length,height*0.85,size*mult,size*mult)
//       }
//     }
//   }
//
// }
//
// var one = new p5(hamlet,'text');

function preload(data){
	lines = loadStrings('files/full_hamlet.txt');
}

function setup(){
  var myCanvas = createCanvas(windowWidth, 270);
  myCanvas.parent('text');


  //   par.id('text');
	//createCanvas(1960, 400);
	//setupDropZone();

	txt = join(lines, ' ');
  //var par = createP(txt);
  //par.id('text');
	//lines = loadStrings('data/test.txt');
	console.log(txt)

	var tokens = txt.split(/\W+/);
	console.log(tokens);

  var par = createP(txt);
  par.parent('token');

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

function draw(){
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


function mouseDragged() {

	background(0);
	mult = mouseX/width;
	if(mult<0.1){
		mult =1;
	}
}
