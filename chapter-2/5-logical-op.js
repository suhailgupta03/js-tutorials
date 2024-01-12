var isSnowing = true;
var haveTrekkingShoes = false;

var haveWaterBottle = true;
var havePowerbank = false;

var canGoOnTrek = isSnowing && haveTrekkingShoes;
var cannotGoOnTrek = !canGoOnTrek;
var carryingOptionals = haveWaterBottle || havePowerbank;

console.log(canGoOnTrek);
console.log(cannotGoOnTrek);
console.log(carryingOptionals);

