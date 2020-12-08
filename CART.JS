let products = [
  {id: 1, price: 100, discount: 0.10},
  {id: 2, price: 200, discount: 0.10},
  {id: 3, price: 300, discount: 0.10},
  {id: 4, price: 400, discount: 0.10},
  {id: 5, price: 500, discount: 0.05},
];

let cart = [];
// add or updadte qty of the given product into the cart and return new cart


console.log(cart); 


function addToCart(cart, product) {
    // console.log(cart.length);
    console.log("****",cart)
     IDs=[]

     cart.forEach(i => {
        IDs.push(i.id)
     });

     productIndex = IDs.indexOf(product.id);
     if( productIndex  === -1){
         product_copy=JSON.parse(JSON.stringify(product));
         product_copy.qty = 1;
         product_copy.total = product_copy.price * (1 - product_copy.discount);
         cart.push(product_copy)
     }
     else{
        cart[productIndex].qty++;
        cart[productIndex].total = (cart[productIndex].qty * cart[productIndex].price) - 
                                    (cart[productIndex].qty * cart[productIndex].price * cart[productIndex].discount)

     }

     return cart;
 }



let product = products[2];
cart = addToCart(cart, product);
console.log(cart);  
//output:  [ { id: 3, price: 300, discount: 0.1, qty: 1, total: 270 } ]

// add to cart 
product = products[4];
cart = addToCart(cart, product);
console.log(cart); 
//output: [
//   { id: 3, price: 300, discount: 0.1, qty: 1, total: 270 },
//   { id: 5, price: 500, discount: 0.05, qty: 1, total: 475 }
// ]

// add to cart 
product = products[2];
cart = addToCart(cart, product);
console.log(cart);
//output: [
//   { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
//   { id: 5, price: 500, discount: 0.05, qty: 1, total: 475 }
// ]

// add to cart 
product = products[0];
cart = addToCart(cart, product);
console.log(cart);
//output: [
//   { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
//   { id: 5, price: 500, discount: 0.05, qty: 1, total: 475 },
//   { id: 1, price: 100, discount: 0.1, qty: 1, total: 90 }
// ]

// add to cart 
product = products[4];
cart = addToCart(cart, product);
console.log(cart);
//output: [
//   { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
//   { id: 5, price: 500, discount: 0.05, qty: 2, total: 950 },
//   { id: 1, price: 100, discount: 0.1, qty: 1, total: 90 }
// ]
