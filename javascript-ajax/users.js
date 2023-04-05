const theUserText = document.querySelector('#user-list');

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    xhr.response.forEach(function (e) {
      var theName = document.createElement('li');
      theName.textContent = e.name;
      theUserText.appendChild(theName);
    });
  });
  xhr.send();
}

getData('');
