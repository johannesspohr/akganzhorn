/**
 * Created by tganz on 29.11.2016.
 */
Element.prototype.moveBGP=function(a,b,c){var d,e;""==this.style.backgroundPosition?(d=parseFloat(window.getComputedStyle(this,null).backgroundPositionX),e=parseFloat(window.getComputedStyle(this,null).backgroundPositionY)):(d=parseFloat(this.style.backgroundPositionX),e=parseFloat(this.style.backgroundPositionY)),this.style.backgroundPosition=d+a+c+" "+(e+b)+c};
