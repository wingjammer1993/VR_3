function Stars(context, basket_obj, pX, pY) {

    this.size = 0.1
    this.pX = pX;
    this.pY = pY;
    this.context = context;
	this.velY = 0.1;
	this.basket = basket_obj
}

Stars.prototype.drawStars = function() {
    var img=document.getElementById("star");
    this.context.drawImage(img,0,0,80,80);
}

Stars.prototype.draw = function() {
    this.context.save();
    this.context.translate(this.pX, this.pY);
    this.drawStars();
    this.context.save()
    this.context.restore()
    this.context.restore()
}

Stars.prototype.update = function(delta) {

	this.pY += this.velY*delta;
    if (this.pY > this.context.canvas.clientHeight - 2)
	{
		this.pY = 10;
		this.pX = Math.random() * (this.context.canvas.clientWidth - 50) + 50;
		this.velY = Math.random()
	}

	if (this.pY > this.basket.pY - 5 && this.basket.pX - 30 < this.pX && this.pX < this.basket.pX + 30)
	{

	    this.pY = 10;
		this.pX = Math.random() * (this.context.canvas.clientWidth - 50) + 50;
		this.velY = Math.random()
		score = score + 1
	}

}