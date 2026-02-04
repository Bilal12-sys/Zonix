document.getElementById("options").addEventListener("change", function () {
  var selectedValue = this.value;
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  if (selectedValue === "All category") {
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
    return;
  }
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];

    if (selectedValue === "Cars" && card.id === "cars") {
      card.style.display = "block";
    }

    if (selectedValue === "Bikes" && card.id === "bikes") {
      card.style.display = "block";
    }

    if (selectedValue === "Mobiles" && card.id === "mobiles") {
      card.style.display = "block";
    }
  }
});


let bike1 = {
  company: "BMW",
  topSpeed: "199 mph",
  horsepower: "205 hp",
  color: "Blue/White/Red",
};

// Print data in HTML
document.getElementById("bmwb").innerHTML = `   
<b>Company:</b> ${bike1.company}<br>
<b>Top Speed</b>: ${bike1.topSpeed}<br>
<b>Horsepower:</b> ${bike1.horsepower}<br>
<b>Color:</b> ${bike1.color}
`;

function bmw(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let bmwCar = new bmw("BMW", "180 mph", "503 hp", "Blue/black/white");

document.getElementById("bmwc").innerHTML = `
<b>Company:</b> ${bmwCar.company}<br>
<b>Top Speed:</b> ${bmwCar.topSpeed}<br>
<b>Horsepower:</b> ${bmwCar.horsepower}<br>
<b>Color:</b> ${bmwCar.color}
`;

function hondaBike(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let hondaBike1 = new hondaBike("Honda", "120 mph", "150 hp", "blue");

document.getElementById("hondab").innerHTML = `
<b>Company:</b> ${hondaBike1.company}<br>
<b>Top Speed:</b> ${hondaBike1.topSpeed}<br>
<b>Horsepower:</b> ${hondaBike1.horsepower}<br>
<b>Color:</b> ${hondaBike1.color}
`;

function lamboCar(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}

let lambo1 = new lamboCar("Lamborghini", "211 mph", "640 hp", "Orange   ");
document.getElementById("lambo").innerHTML = `
<b>Company:</b> ${lambo1.company}<br>
<b>Top Speed:</b> ${lambo1.topSpeed}<br>
<b>Horsepower:</b> ${lambo1.horsepower}<br>
<b>Color:</b> ${lambo1.color}
`;

function iphoneMobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let iphone1 = new iphoneMobile("Apple", "iPhone 13 Pro", "256 GB", "Deep Purple");

document.getElementById("iphone").innerHTML = `
<b>Company:</b> ${iphone1.company}<br>
<b>Model:</b> ${iphone1.model}<br>
<b>Storage:</b> ${iphone1.storage}<br>
<b>Color:</b> ${iphone1.color}
`;

function frerricar(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let ferrari1 = new frerricar("Ferrari", "211 mph", "670 hp", "Red");

document.getElementById("frerrari").innerHTML = `
<b>Company:</b> ${ferrari1.company}<br>
<b>Top Speed:</b> ${ferrari1.topSpeed}<br>
<b>Horsepower:</b> ${ferrari1.horsepower}<br>
<b>Color:</b> ${ferrari1.color}
`;

function samsungMobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}   
let samsung1 = new samsungMobile("Samsung", "Galaxy S23 Ultra", "256 GB", "pink");

document.getElementById("samsung").innerHTML = `
<b>Company:</b> ${samsung1.company}<br>
<b>Model:</b> ${samsung1.model}<br>
<b>Storage:</b> ${samsung1.storage}<br>
<b>Color:</b> ${samsung1.color}
`;

function ferrariTwo(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let ferrari2 = new ferrariTwo("Ferrari", "211 mph", "670 hp", "Red");

document.getElementById("f2").innerHTML = `
<b>Company:</b> ${ferrari2.company}<br>
<b>Top Speed:</b> ${ferrari2.topSpeed}<br>
<b>Horsepower:</b> ${ferrari2.horsepower}<br>
<b>Color:</b> ${ferrari2.color}
`;

function iphone15Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let iphone15 = new iphone15Mobile("Apple", "iPhone 15 Pro Max", "512 GB", "Gray");

document.getElementById("iphone15").innerHTML = `
<b>Company:</b> ${iphone15.company}<br>
<b>Model:</b> ${iphone15.model}<br>
<b>Storage:</b> ${iphone15.storage}<br>
<b>Color:</b> ${iphone15.color}
`;

function samsung24Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}   
let samsung24 = new samsung24Mobile("Samsung", "Galaxy S24 Ultra", "512 GB", "Gray");

document.getElementById("samsung24").innerHTML = `  
<b>Company:</b> ${samsung24.company}<br>
<b>Model:</b> ${samsung24.model}<br>
<b>Storage:</b> ${samsung24.storage}<br>
<b>Color:</b> ${samsung24.color}
`;

function iphone12Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let iphone12 = new iphone12Mobile("Apple", "iPhone 12", "128 GB", "blue");

document.getElementById("iphone12").innerHTML = `
<b>Company:</b> ${iphone12.company}<br>
<b>Model:</b> ${iphone12.model}<br>
<b>Storage:</b> ${iphone12.storage}<br>
<b>Color:</b> ${iphone12.color}
`;
function samsung21Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let samsung21 = new samsung21Mobile("Samsung", "Galaxy S21 Ultra", "128 GB", "Silver");

document.getElementById("samsung21").innerHTML = `
<b>Company:</b> ${samsung21.company}<br>
<b>Model:</b> ${samsung21.model}<br>
<b>Storage:</b> ${samsung21.storage}<br>
<b>Color:</b> ${samsung21.color}
`;

function kawasakiNinjaH2r(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let ninjaH2r = new kawasakiNinjaH2r("Kawasaki", "249 mph", "310 hp", "Green/Black");

document.getElementById("kawasakib2").innerHTML = `
<b>Company:</b> ${ninjaH2r.company}<br>
<b>Top Speed:</b> ${ninjaH2r.topSpeed}<br>
<b>Horsepower:</b> ${ninjaH2r.horsepower}<br>
<b>Color:</b> ${ninjaH2r.color}
`;

function ningah2(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let ninjaH2 = new ningah2("Kawasaki", "249 mph", "310 hp", "Green/Black");

document.getElementById("kawasakib").innerHTML = `
<b>Company:</b> ${ninjaH2.company}<br>
<b>Top Speed:</b> ${ninjaH2.topSpeed}<br>
<b>Horsepower:</b> ${ninjaH2.horsepower}<br>
<b>Color:</b> ${ninjaH2.color}
`;

function onplusMobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let oneplus1 = new onplusMobile("OnePlus", "OnePlus Nord 3", "256 GB", "Lite Green");

document.getElementById("oneplusnord3").innerHTML = `
<b>Company:</b> ${oneplus1.company}<br>
<b>Model:</b> ${oneplus1.model}<br>
<b>Storage:</b> ${oneplus1.storage}<br>
<b>Color:</b> ${oneplus1.color}
`;

function oneplue11Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let oneplus11 = new oneplue11Mobile("OnePlus", "OnePlus 11", "512 GB", "Lite Green");

document.getElementById("oneplus11").innerHTML = `
<b>Company:</b> ${oneplus11.company}<br>
<b>Model:</b> ${oneplus11.model}<br>
<b>Storage:</b> ${oneplus11.storage}<br>
<b>Color:</b> ${oneplus11.color}
`;

function iphone13Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let iphone13 = new iphone13Mobile("Apple", "iPhone 13", "256 GB", "black");

document.getElementById("iphone13").innerHTML = `
<b>Company:</b> ${iphone13.company}<br>
<b>Model:</b> ${iphone13.model}<br>
<b>Storage:</b> ${iphone13.storage}<br>
<b>Color:</b> ${iphone13.color}
`;

function iphone17Mobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let iphone17 = new iphone17Mobile("Apple", "iPhone 17 Pro Max", "1 TB", "White");

document.getElementById("iphone17").innerHTML = `
<b>Company:</b> ${iphone17.company}<br>
<b>Model:</b> ${iphone17.model}<br>
<b>Storage:</b> ${iphone17.storage}<br>
<b>Color:</b> ${iphone17.color}
`;

function onepluse10ProMobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let onepluse10pro = new onepluse10ProMobile("OnePlus", "OnePlus 10 Pro", "256 GB", "lite Green");

document.getElementById("oneplus10pro").innerHTML = `
<b>Company:</b> ${onepluse10pro.company}<br>
<b>Model:</b> ${onepluse10pro.model}<br>
<b>Storage:</b> ${onepluse10pro.storage}<br>
<b>Color:</b> ${onepluse10pro.color}
`;

function porsche356Car(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let porsche3561 = new porsche356Car("Porsche", "320 mph", "230 hp", "Gray");

document.getElementById("porsche356").innerHTML = `
<b>Company:</b> ${porsche3561.company}<br>
<b>Top Speed:</b> ${porsche3561.topSpeed}<br>
<b>Horsepower:</b> ${porsche3561.horsepower}<br>
<b>Color:</b> ${porsche3561.color}
`;

function porsche911Car(Company, Model, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.model = Model;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let porsche911 = new porsche911Car("Porsche", "911 Turbo S", "205 mph", "640 hp", "Gray");
document.getElementById("porsche911").innerHTML = `
<b>Company:</b> ${porsche911.company}<br>
<b>Model:</b> ${porsche911.model}<br>
<b>Top Speed:</b> ${porsche911.topSpeed}<br>
<b>Horsepower:</b> ${porsche911.horsepower}<br>
<b>Color:</b> ${porsche911.color}
`;

function porsche356Car(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let porsche356 = new porsche356Car("Porsche", "320 mph", "230 hp", "Gray");

document.getElementById("porsche918").innerHTML = `
<b>Company:</b> ${porsche356.company}<br>
<b>Top Speed:</b> ${porsche356.topSpeed}<br>
<b>Horsepower:</b> ${porsche356.horsepower}<br>
<b>Color:</b> ${porsche356.color}
`;

function rollsroyceCar(Company, Model, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.model = Model;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let rollsroyce1 = new rollsroyceCar("Rolls Royce", "Phantom", "155 mph", "563 hp", "Black");

document.getElementById("rollsroycephantom").innerHTML = `
<b>Company:</b> ${rollsroyce1.company}<br>
<b>Model:</b> ${rollsroyce1.model}<br>
<b>Top Speed:</b> ${rollsroyce1.topSpeed}<br>
<b>Horsepower:</b> ${rollsroyce1.horsepower}<br>
<b>Color:</b> ${rollsroyce1.color}
`;

function rollsroyleghost(Company, Model, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.model = Model;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let rollsroyce2 = new rollsroyleghost("Rolls Royce", "Ghost", "155 mph", "563 hp", "White");

document.getElementById("rollsroyceghost").innerHTML = `
<b>Company:</b> ${rollsroyce2.company}<br>
<b>Model:</b> ${rollsroyce2.model}<br>
<b>Top Speed:</b> ${rollsroyce2.topSpeed}<br>
<b>Horsepower:</b> ${rollsroyce2.horsepower}<br>
<b>Color:</b> ${rollsroyce2.color}
`;

function rollsroyalwaraith(Company, Model, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.model = Model;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let rollsroyce3 = new rollsroyalwaraith("Rolls Royce", "Wraith", "155 mph", "624 hp", "Blue");

document.getElementById("rollsroywarith").innerHTML = `
<b>Company:</b> ${rollsroyce3.company}<br>
<b>Model:</b> ${rollsroyce3.model}<br>
<b>Top Speed:</b> ${rollsroyce3.topSpeed}<br>
<b>Horsepower:</b> ${rollsroyce3.horsepower}<br>
<b>Color:</b> ${rollsroyce3.color}
`;

function bikkks(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let bikkk1 = new bikkks("Bajaj", "70 mph", "40 hp", "Red/Black");

document.getElementById("bikees").innerHTML = `
<b>Company:</b> ${bikkk1.company}<br>
<b>Top Speed:</b> ${bikkk1.topSpeed}<br>
<b>Horsepower:</b> ${bikkk1.horsepower}<br>
<b>Color:</b> ${bikkk1.color}
`;

function s25ultraMobile(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let s25ultra = new s25ultraMobile("Samsung", "Galaxy S25 Ultra", "512 GB", "Black");
document.getElementById("samsungs25ultra").innerHTML = `
<b>Company:</b> ${s25ultra.company}<br>
<b>Model:</b> ${s25ultra.model}<br>
<b>Storage:</b> ${s25ultra.storage}<br>
<b>Color:</b> ${s25ultra.color}
`;

function swifttt(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let swift1 = new swifttt("Suzuki", "130 mph", "138 hp", "Blue");

document.getElementById("swift").innerHTML = `
<b>Company:</b> ${swift1.company}<br>
<b>Top Speed:</b> ${swift1.topSpeed}<br>
<b>Horsepower:</b> ${swift1.horsepower}<br>
<b>Color:</b> ${swift1.color}
`;

function yamaha111(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let yamaha1 = new yamaha111("Yamaha", "186 mph", "200 hp", "Blue");

document.getElementById("yamaha").innerHTML = `
<b>Company:</b> ${yamaha1.company}<br>
<b>Top Speed:</b> ${yamaha1.topSpeed}<br>
<b>Horsepower:</b> ${yamaha1.horsepower}<br>
<b>Color:</b> ${yamaha1.color}
`;

function bmwm44(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let bmwm4 = new bmwm44("BMW", "180 mph", "503 hp", "Blue/black/white");

document.getElementById("bmwm4").innerHTML = `
<b>Company:</b> ${bmwm4.company}<br>
<b>Top Speed:</b> ${bmwm4.topSpeed}<br>
<b>Horsepower:</b> ${bmwm4.horsepower}<br>
<b>Color:</b> ${bmwm4.color}
`;

function BYdDTang(Company, Model, Storage, Color) {
  this.company = Company;
  this.model = Model;
  this.storage = Storage;
  this.color = Color;
}
let byd1 = new BYdDTang("BYD", "DT Tang", "1 TB", "Red");

document.getElementById("byd").innerHTML = `
<b>Company:</b> ${byd1.company}<br>
<b>Model:</b> ${byd1.model}<br>
<b>Storage:</b> ${byd1.storage}<br>
<b>Color:</b> ${byd1.color}
`;

function defender120(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let defender1 = new defender120("Land Rover", "119 mph", "518 hp", "Sliver");

document.getElementById("defender").innerHTML = `
<b>Company:</b> ${defender1.company}<br>
<b>Top Speed:</b> ${defender1.topSpeed}<br>
<b>Horsepower:</b> ${defender1.horsepower}<br>
<b>Color:</b> ${defender1.color}
`;

function hondacittus(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let cittus1 = new hondacittus("Honda", "130 mph", "158 hp", "Sliver");
document.getElementById("hondacity").innerHTML = `
<b>Company:</b> ${cittus1.company}<br>
<b>Top Speed:</b> ${cittus1.topSpeed}<br>
<b>Horsepower:</b> ${cittus1.horsepower}<br>
<b>Color:</b> ${cittus1.color}
`;

function hyundaia11(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let a11 = new hyundaia11("Hyundai", "130 mph", "158 hp", "White");

document.getElementById("hyundaia").innerHTML = `
<b>Company:</b> ${a11.company}<br>
<b>Top Speed:</b> ${a11.topSpeed}<br>
<b>Horsepower:</b> ${a11.horsepower}<br>
<b>Color:</b> ${a11.color}
`;

function hondacs12511(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let cs125 = new hondacs12511("Honda", "75 mph", "11 hp", "Black");

document.getElementById("hondacs125").innerHTML = `
<b>Company:</b> ${cs125.company}<br>
<b>Top Speed:</b> ${cs125.topSpeed}<br>
<b>Horsepower:</b> ${cs125.horsepower}<br>
<b>Color:</b> ${cs125.color}
`;

function hondacg1501(Company, TopSpeed, Horsepower, Color) {
  this.company = Company;
  this.topSpeed = TopSpeed;
  this.horsepower = Horsepower;
  this.color = Color;
}
let cg150 = new hondacg1501("Honda", "85 mph", "15 hp", "Red");

document.getElementById("hondacg150").innerHTML = `
<b>Company:</b> ${cg150.company}<br>
<b>Top Speed:</b> ${cg150.topSpeed}<br>
<b>Horsepower:</b> ${cg150.horsepower}<br>
<b>Color:</b> ${cg150.color}
`;