function Basket(context) {

    this.size = 0.08
    this.pX = 10;
    this.pY = 4550;
    this.context = context;
	this.velX = Math.abs(Math.random()*20 - 1);
}

Basket.prototype.drawBasket = function() {
    var img=document.getElementById("basket");
    this.context.drawImage(img,this.pX,this.pY);
}

Basket.prototype.draw = function() {
    this.context.save();
    this.context.scale(this.size, this.size);
    this.drawBasket();
    this.context.save();
    this.context.restore();
	this.context.restore();
}

Basket.prototype.update = function() {

    if (this.pX > 6400)
	{
		this.pX = 6400;
	}

    if (this.pX < 0)
	{
		this.pX = 10;
	}

}