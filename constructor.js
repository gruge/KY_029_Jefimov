class KY029{
	constructor(ctx,GND=false,RED=0,GREEN=0){
		this.ctx=ctx;
		this.GND=GND;
		this.RED=RED;
		this.GREEN=GREEN;
		this.res=res;
		this.X=X
		this.Y=Y
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
		this.ctx.fillRect(110,10, 100, 80);
		this.ctx.fillStyle = "#797b7d";
		this.ctx.fillRect(80,20, 40, 10);
		this.ctx.fillRect(80,45, 40, 10);
		this.ctx.fillRect(80,70, 40, 10);
		this.ctx.fillStyle = this.res;
		this.ctx.fillRect(205,30, 10, 40);
		this.ctx.fillRect(215,35, 30, 30);
		this.ctx.fillStyle = "#FFFFFF";
		this.ctx.fillText("KY-029",150,53);
		this.ctx.fillText("-",130,30);
		this.ctx.fillText("S",130,80);
	}
}