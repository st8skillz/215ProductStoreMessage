var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

var wrapperEle = document.body
function popUp(pId) {
  var that = this;

  this.popUpEle = document.createElement("div");
  this.popUpEle.classList.add("popUp");

  this.imgEle = document.createElement("img");
  this.imgEle.setAttribute("src", products[pId].image);
 

  this.nameEle = document.createElement("div");
  this.nameEle.innerHTML = "Name: " + products[pId].name;
  

  this.priceEle = document.createElement("div");
  this.priceEle.innerHTML = "Price: $" + products[pId].price;
  
  this.popUpEle.appendChild(this.imgEle);
  this.popUpEle.appendChild(this.nameEle);
  this.popUpEle.appendChild(this.priceEle);


  this.popUpEle.addEventListener("click", function () {
    wrapperEle.innerHTML = "";
    var produceInit = new fruit();
  });

  wrapperEle.appendChild(this.popUpEle);
}

function product(pCol) {
  var that = this;

  this.productEle = document.createElement("div");
  this.productEle.classList.add("product");

  this.imgEle = document.createElement("img");
  this.imgEle.setAttribute("src", products[pCol].image);
  this.productEle.appendChild(this.imgEle);

  this.nameEle = document.createElement("div");
  this.nameEle.innerHTML = "Name: " + products[pCol].name;

  this.priceEle = document.createElement("div");
  this.priceEle.innerHTML = "Price: $" + products[pCol].price;

  this.productEle.addEventListener("mouseover", function () {
    that.productEle.style.borderColor = products[pCol].color;
  });
  this.productEle.addEventListener("mouseout", function () {
    that.productEle.style.borderColor = "black";
  });

  this.productEle.appendChild(this.nameEle);
  this.productEle.appendChild(this.priceEle);
}

function fruit() {
  var that = this;

  this.fruitType = [];

  this.fruitEle = document.createElement("div");

  for (let i = 0; i < 3; i++) {
    that.fruitType.push(new product(i));
    that.fruitType[i].productEle.addEventListener("click", function () {
      var popup = new popUp(i);
    });

    this.fruitEle.appendChild(this.fruitType[i].productEle);
  }

  wrapperEle.appendChild(this.fruitEle);
}
var produceInit = new fruit();