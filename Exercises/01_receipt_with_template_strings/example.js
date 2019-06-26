// This function will be called when one of the buttons in index.html is clicked
// The parameter 'id' will change depending on which of the 3 buttons is pressed
function createTemplate(id){
  // Every single time a button is pressed we want to make sure information from previous presses is removed
  // We test if there is an element with the class .letter in the document
  if(document.querySelector('.letter')){
    // If there is such an element, we remove it
    document.querySelector('.letter').remove();
  }

  // Now we can access our objeects in purchaseRecord.js and save some values into variables
  // We save the user that was clicked as 'user' using the id parameter which we give when it's corresponding button is pressed
  const user = clients.userid[id]
  // In our imaginary world, the last purchase the user made is always the first item in the purchaseId array
  const lastPurchase = user.purchaseId[0]
  // We can also save the purchase information by accessing the purchase object and using the user's last purchase as a reference
  const userPurchase = purchase[lastPurchase]
  // Our receipt also needs to display the sum of all purchased item cost
  let sum = 0;
  for(let i = 0; i < userPurchase.length; i++){
    // We iterate through all the purchase items in the last purchase and multiplay each items price times the amount of items that were purchased
    sum += userPurchase[i].articlePrice * userPurchase[i].qty
  }

  // Now we are ready to create our template, and we do so by using template strings  ( ` ` )
  // We can create a basic template using HTML tags, they will be interpreted as a string
  // Everything within the ${} simbols are JS statements
  // Here we basically just need to fill up the blanks
  const template = `
  <p>Dear ${user.gender == 'male' ? 'Mr.' : 'Mrs.'} ${user.lastName /* We have informations on the users 
    gender in the client object, we can write a conditional statement to determine if the user should be addresed as MR or MRS 
   This is called a SHORTHAND of and IF ELSE*/}</p>
  <p>Thank you for using our service, where you are always our priority</p>
  <p>Here is your receipt:</p>
  <br><br>
  <h3>Purchase ID #${lastPurchase}</h3>

  <h3>Items :<br></h3>

  <ul>

  ${Object.keys(userPurchase).map(key => (
    `<hr><li class="article-name">${userPurchase[key].articleName} x ${userPurchase[key].qty}</li> 
    <li class="article-price">PRICE: $${userPurchase[key].articlePrice}</li>
    <li class="article-total">TOTAL $${userPurchase[key].qty * userPurchase[key].articlePrice}</li>`
  )).join('')/*
    We need to iterate throught the userpurchase array and get every article's information (name, qty, price and so on)
    However we CAN NOT do normal loops in template strings due to them being multiple line statements,
    to solve this we use the higher order function map.
    Map requires a callback function, in the callback function we can use a parameter (in this case key) as an iterator, 
    very similar to a for loop
  */}
  <hr>
  <h2 class="sum">Total USD: ${sum}</h2>
  </p>
  `
  
  // Last we need to insert our filled up template into the document.
  // To do so, we create a section element
  let ele = document.createElement('section')
  // We then use innerHTML to insert the template into the element
  ele.innerHTML = template
  // We add a class so that we can select it if we need to
  ele.classList.add('letter')
  // lastly we insert it into the document
  document.querySelector('body').appendChild(ele)
}

