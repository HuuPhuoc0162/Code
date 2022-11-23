// JavaScript Document

function giay(productId,brand,img,name,size,price,quantity) {
    this.productId = productId;
    this.brand = brand;
    this.img = img;
    this.name = name;
	this.size = size;
    this.price = price;
	this.quantity = quantity;
}

var Adidas = [
	new giay("A01-36","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men","36",5200000,10),
	new giay("A01-37","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men","37",5200000,10),
	new giay("A01-38","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men","38",5200000,10),
	new giay("A02-40","Adidas","/Adidas/Adidas Ultraboost GX5928 Women.png","Adidas Ultraboost GX5928 Women","40",5000000,10),
	new giay("A02-42","Adidas","/Adidas/Adidas Ultraboost GX5928 Women.png","Adidas Ultraboost GX5928 Women","42",5000000,10),
	new giay("A03-39","Adidas","/Adidas/Unisex Adidas Ultraboost GY4173.jpg","Unisex Adidas Ultraboost GY4173","39",5000000,10),
];

var Nike = [
	new giay("N01-36","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men","36",5000000,10),
	new giay("N01-37","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men","37",5000000,10),
	new giay("N01-38","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men","38",5000000,10),
	new giay("N02-40","Nike","/Nike/Nike Air Max DH4245-400 Men.jpg","Nike Air Max DH4245-400 Men","40",4700000,10),
	new giay("N02-42","Nike","/Nike/Nike Air Max DH4245-400 Men.jpg","Nike Air Max DH4245-400 Men","42",4700000,10),
	new giay("N03-39","Nike","/Nike/Unisex Nike CV7562-104.jpg","Unisex Nike CV7562-104","39",4700000,10),
];

var Puma = [
	new giay("P01-36","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men","36",2700000,10),
	new giay("P01-37","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men","37",2700000,10),
	new giay("P01-38","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men","38",2700000,10),
	new giay("P02-40","Puma","/Puma/PUMA RBD GAME LOW Men.jpg","PUMA RBD GAME LOW","40",2800000,10),
	new giay("P02-42","Puma","/Puma/PUMA RBD GAME LOW Men.jpg","PUMA RBD GAME LOW","42",2800000,10),
	new giay("P03-39","Puma","/Puma/PUMA SOFTRIDE ENZO NXT Men.jpg","PUMA SOFTRIDE ENZO NXT","39",2200000,10),
];

var Converse = [
	new giay("C01-36","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color","36",1900000,10),
	new giay("C01-37","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color","37",1900000,10),
	new giay("C01-38","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color","38",1900000,10),
	new giay("C02-40","Converse","/Converse/Converse Chuck Taylor All Star 70 Plus.jpg","Converse Chuck Taylor All Star 70 Plus","40",2500000,10),
	new giay("C02-42","Converse","/Converse/Converse Chuck Taylor All Star 70 Plus.jpg","Converse Chuck Taylor All Star 70 Plus","42",2500000,10),
	new giay("C03-39","Converse","/Converse/Converse Chuck Taylor All Star Dainty.jpg","Converse Chuck Taylor All Star Dainty","39",1500000,10),
];

var Vans = [
	new giay("V01-36","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker","36",1600000,10),
	new giay("V01-37","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker","37",1600000,10),
	new giay("V01-38","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker","38",1600000,10),
	new giay("V02-40","Vans","/Vans/Vans SK8-Hi BW.jpg","Vans SK8-Hi BW","40",1000000,10),
	new giay("V02-42","Vans","/Vans/Vans SK8-Hi BW.jpg","Vans SK8-Hi BW","42",1000000,10),
	new giay("V03-39","Vans","/Vans/Vans Old Skool Black White.jpg","Vans Old Skool Black White","39",1600000,10),
];