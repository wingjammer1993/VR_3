function Basket(context) {

    this.size = 0.08
    this.pX = 0;
    this.pY = context.canvas.clientHeight - 140;
    this.context = context;
	this.velX = Math.abs(Math.random()*5 - 1);
}

Basket.prototype.drawBasket = function() {
    var img=document.getElementById("basket");
    this.context.drawImage(img,0,0, 100, 150);
}

Basket.prototype.draw = function() {
    this.context.save();
    this.context.translate(this.pX, this.pY);
    this.drawBasket();
    this.context.save()
    this.context.restore()
    this.context.restore()
}

Basket.prototype.update = function() {


    if (this.pX > this.context.canvas.clientWidth - 100)
	{
		this.pX = this.context.canvas.clientWidth - 100;
	}

    if (this.pX < 0)
	{
		this.pX = 0;
	}

}