// JavaScript Document

function giay(productId,brand,img,name,size,price,quantity) {
    this.productId = productId;
    this.brand = brand;
    this.img = img;
    this.name = name;
    this.price = price;
	this.quantity = quantity;
}

var Adidas = [
	new giay("A01","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men",5200000,10),
	new giay("A01","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men",5200000,10),
	new giay("A01","Adidas","/Adidas/Adidas Ultraboost FZ2558 Men.png","Adidas Ultraboost FZ2558 Men",5200000,10),
	new giay("A02","Adidas","/Adidas/Adidas Ultraboost GX5928 Women.png","Adidas Ultraboost GX5928 Women",5000000,10),
	new giay("A02","Adidas","/Adidas/Adidas Ultraboost GX5928 Women.png","Adidas Ultraboost GX5928 Women",5000000,10),
	new giay("A03","Adidas","/Adidas/Unisex Adidas Ultraboost GY4173.jpg","Unisex Adidas Ultraboost GY4173",5000000,10),
];

var Nike = [
	new giay("N01","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men",5000000,10),
	new giay("N01","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men",5000000,10),
	new giay("N01","Nike","/Nike/Nike Air Max DC9332-001 Men.jpg","Nike Air Max DC9332-001 Men",5000000,10),
	new giay("N02","Nike","/Nike/Nike Air Max DH4245-400 Men.jpg","Nike Air Max DH4245-400 Men",4700000,10),
	new giay("N02","Nike","/Nike/Nike Air Max DH4245-400 Men.jpg","Nike Air Max DH4245-400 Men",4700000,10),
	new giay("N03","Nike","/Nike/Unisex Nike CV7562-104.jpg","Unisex Nike CV7562-104",4700000,10),
];

var Puma = [
	new giay("P01","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men",2700000,10),
	new giay("P01","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men",2700000,10),
	new giay("P01","Puma","/Puma/PUMA SERVE PRO 1948 TEAM GOLD Men.jpg","PUMA SERVE PRO 1948 TEAM GOLD Men",2700000,10),
	new giay("P02","Puma","/Puma/PUMA RBD GAME LOW Men.jpg","PUMA RBD GAME LOW",2800000,10),
	new giay("P02","Puma","/Puma/PUMA RBD GAME LOW Men.jpg","PUMA RBD GAME LOW",2800000,10),
	new giay("P03","Puma","/Puma/PUMA SOFTRIDE ENZO NXT Men.jpg","PUMA SOFTRIDE ENZO NXT",2200000,10),
];

var Converse = [
	new giay("C01","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color",1900000,10),
	new giay("C01","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color",1900000,10),
	new giay("C01","Converse","/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg","Converse Chuck 70 Seasonal Color",1900000,10),
	new giay("C02","Converse","/Converse/Converse Chuck Taylor All Star 70 Plus.jpg","Converse Chuck Taylor All Star 70 Plus",2500000,10),
	new giay("C02","Converse","/Converse/Converse Chuck Taylor All Star 70 Plus.jpg","Converse Chuck Taylor All Star 70 Plus",2500000,10),
	new giay("C03","Converse","/Converse/Converse Chuck Taylor All Star Dainty.jpg","Converse Chuck Taylor All Star Dainty",1500000,10),
];

var Vans = [
	new giay("V01","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker",1600000,10),
	new giay("V01","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker",1600000,10),
	new giay("V01","Vans","/Vans/Vans Old Skool Checker.jpg","Vans Old Skool Checker",1600000,10),
	new giay("V02","Vans","/Vans/Vans SK8-Hi BW.jpg","Vans SK8-Hi BW",1000000,10),
	new giay("V02","Vans","/Vans/Vans SK8-Hi BW.jpg","Vans SK8-Hi BW",1000000,10),
	new giay("V03","Vans","/Vans/Vans Old Skool Black White.jpg","Vans Old Skool Black White",1600000,10),
];


