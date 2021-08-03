/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/

let bike = {
    model: 'marin',
    wheels: 2,
    speed: 12,
    authorizedBikers: ['Beatrice', 'Alan'],
    hasHadAccident: false,
  };
  
  function getBikeSpeed() {
    return bike.speed//your code here
  }
  //open your browser console to check the results
  console.log('result: ' + JSON.stringify(getBikeSpeed()));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = getBikeSpeed;
  }


  <br> // new object question// </br>

  /*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/


function getProduct(productId) {
    let product = {id:productId, serialNumber: 'WD579000', manufacturer: 'Apple', price: 1500};
    return product;
  }
    
  //open your browser console to check the results
  console.log('result: ' + JSON.stringify(getProduct(1)));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = getProduct;
  }
  