function Stars(context,pX,pY) {

    this.size = 0.1
    this.pX = pX;
    this.pY = pY;
    this.context = context;
	this.velY = Math.abs(Math.random()*20 - 1);
}

Stars.prototype.drawStars = function() {
    var img=document.getElementById("star");
    this.context.drawImage(img,this.pX,this.pY);
}

Stars.prototype.draw = function() {
    this.context.save();
    this.context.scale(this.size, this.size);
    this.drawStars();
    this.context.save();
    this.context.restore();
	this.context.restore();
}

Stars.prototype.update = function() {

	this.pY += this.velY;

    if (this.pY > this.context.canvas.clientHeight)
	{
		this.pY = 10;
	}

}