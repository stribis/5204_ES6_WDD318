axios.get('data.js').then(response => {
  let data = response.data;
  console.log(data);
});