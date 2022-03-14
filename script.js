var SCALE = 2 ;

var canvas  = document.getElementById("canvas");
		canvas.width = 700;
    canvas.height = 500;
    
    ctx = canvas.getContext("2d");
    clrs=["green","red","blue","green","red","blue","green","red","blue","green","red","blue"]
  
  	for (var i = 0; i< canvas.width;i+=100) {
    	console.log(i);
    	ctx.fillStyle =clrs[i/100];
    	ctx.fillRect(i,0,50,50);
    }
    
    
   console.log(ctx.getImageData(1, 1, 1, 1).data);
   var canvas2  = document.getElementById("canvas2");
		canvas2.width = 700;
    canvas2.height = 500;
    
    ctx2 = canvas2.getContext("2d");
    
    ctx2.putImageData(ctx.getImageData(1, 1, 1, 1), 0,0)
    

    for (var i = 1; i< canvas.height; i++ ){
    	for (var j =1; j<canvas.width; j++) {
        scalePix(SCALE, ctx.getImageData(i,j,1,1),i,j);    
      }
    }
    
    function scalePix (pow, imgdata, src_row, src_col) {
    		var pos1 = src_row + (src_row - 1);
        var pos2 = src_col + (src_col - 1);
        for (var i = pos1 ; i < pos1+pow; i++) {
        	for (var j = pos2 ; j < pos2+pow; j++) {
          	ctx2.putImageData(imgdata,i, j);
            console.log([pos1, pos2])
          }
        }
    }
    console.log(123)

