col=0;
multiply=-1;
class KY_029{
	constructor(ctx,GND=false,RED=0,GREEN=0){
		this.ctx=ctx;
		this.GND=GND;
		this.RED=RED;
		this.GREEN=GREEN;
		this.res="#000000";
		
		multiply+=1;
		this.canvasWidth=document.getElementById("myCanvas").getAttribute("width");
		this.canvasWidth=this.canvasWidth.substr(0,this.canvasWidth.length-2);
		if(this.canvasWidth<300*(multiply+1)){col+=1; multiply=multiply-4;}
		this.x=300*multiply;
		this.y=150*col;
		
		this.exec();
	}
	exec(){
		if(this.GND!=false){
			if(this.RED==1 && this.GREEN==1){
				this.res="#FFFF00";
				}
			else if(this.RED==0 && this.GREEN==0){
				this.res="#000000";	
				}
			else if(this.RED==1 && this.GREEN==0){
				this.res="#FF0000"
				}
			else if(this.RED==0 && this.GREEN==1){
				this.res="#00FF00";
				}
			}
			this.draw();
		}
	draw(){
		this.ctx.font = "15px Arial";
		this.ctx.fillStyle = "#3d3d3d";
		this.ctx.fillRect(this.x+110,this.y+10, 100, 80);
		this.ctx.fillStyle = "#797b7d";
		this.ctx.fillRect(this.x+80,this.y+20, 40, 10);
		this.ctx.fillRect(this.x+80,this.y+45, 40, 10);
		this.ctx.fillRect(this.x+80,this.y+70, 40, 10);
		this.ctx.fillStyle = this.res;
		this.ctx.fillRect(this.x+205,this.y+30, 10, 40);
		this.ctx.fillRect(this.x+215,this.y+35, 30, 30);
		this.ctx.fillStyle = "#FFFFFF";
		this.ctx.fillText("KY-029",this.x+150,this.y+53);
		this.ctx.fillText("-",this.x+130,this.y+30);
		this.ctx.fillText("S",this.x+130,this.y+80);
	}
}