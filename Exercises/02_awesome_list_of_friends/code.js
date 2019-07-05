// This whole function will run asynchronous, so that fetching the data does not block the stack

async function displayData(){
  // We wait to fetch the json from the API
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  // We then wait for the text to be parsed as json
  let data = await response.json()

  // This console log shows the data that we are getting from the API
  // console.log(data)
  
// We need to iterate though the data to access all the users
// I am going to create a variable for the number of users we want to display to keep the code a bit organized
const numberOfUsers = 8;
for(let i = 0; i < numberOfUsers; i++){
  // for every user we want to display the following data : 
  let username = data[i].username
  let name = data[i].name
  let email = data[i].email
  let city = data[i].address.city
  // We also create a random avatar for each user based on their username, using robohash.org
  let hashUrl = `https://robohash.org/${username}.png?set=set4`

// This is the template that will be filled in by our variables
  const template = `
  <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div class="tc">
          <img src="${hashUrl}" class="bb avatar br-100 h4 w4 dib">
          <h1 class="username f4">${username}</h1>
          <hr class="mw3 bb bw1 b--black-10 center">
      </div>
      <p class="lh-copy measure center f6 black-70">
          Name: <span class="name b">${name}</span>
      </p>
      <p class="lh-copy measure center f6 black-70">
          Email: <span class="email b">${email}</span>
      </p>
      <p class="lh-copy measure center f6 black-70">
          City: <span class="city b">${city}</span>
      </p>
  </article>
  `
// We create a div
  let myElement = document.createElement('div')
  // we insert the template as content into the div using innerHTML
  myElement.innerHTML = template
  // we the insert the div into the document
  document.querySelector('main').appendChild(myElement)
}

}


// Do not forget to call the function
displayData()