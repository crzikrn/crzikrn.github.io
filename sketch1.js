
//Karam Byun


var kinglear = function(p){

	var lines;
	var txt;
	var spitout = [];
	var dict = {}; //dictionary of all words
	var bict = {}; //dictinoary of interesting words
	var keys = []; //array of all words in order
	var interest = []; //array of interesting words in order
	//var one =[]; //array oneshot words in order
	var mult = 1;

	p.preload = function(data){
		lines = p.loadStrings('files/full_kinglear.txt');
	};

	p.setup = function(){
		p.createCanvas(windowWidth*0.60, 200);
		//myCanvas1.parent('kinglear');

		txt = join(lines, ' ');
		//console.log(txt)

		var tokens = txt.split(/\W+/);
		//console.log(tokens);

		// for(var i = 0; i < 12;i++){
		// 	var par = tokens[i];
		// 	par.toLowerCase();
		// 	spitout.push(par);
		// }
		console.log(spitout);
		var a = p.createP(spitout);
		a.parent('');

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

		for(var i = 0; i < keys.length; i++){
			keys.sort(function(a, b) {
  			return (dict[b] -  dict[a]);
			});
		}

	};

	p.draw = function(){

		p.noStroke();
		p.background(150,180,210);
		for (var i = 0; i < keys.length; i++) {

			var size = dict[keys[i]];

			if(size > 200){
				p.fill(255,200,100,255*(size/(993*4)));
				p.ellipse(width*i/keys.length,height*0.2,size*mult,size*mult)
			} else if(size > 20 && size <200){
				p.fill(144,200,100,255*(size/300));
				p.ellipse(width*i/keys.length,height*0.55,size*mult,size*mult)
			} else{
				p.fill(255,255*(size/40));
				p.ellipse(width*i/keys.length,height*0.85,size*mult,size*mult)
			}
		}
	}

	p.mouseDragged = function(){
			mult = mouseX/width;
			if(mult<0.1){
				mult =1;
			}
		};
	//	background(0);


};

var myp5 = new p5(kinglear, 'kinglear');
