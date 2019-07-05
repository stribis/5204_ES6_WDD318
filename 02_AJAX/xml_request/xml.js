var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(this.responseText));
  }
};
xmlhttp.open('GET', 'data.js');
xmlhttp.send();