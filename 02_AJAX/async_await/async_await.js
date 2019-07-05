

async function displayData(){

  let response = await fetch('data.js');
  let data = await response.json();

  console.log(data);
}

displayData();
