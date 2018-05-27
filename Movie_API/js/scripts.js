const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const director = document.createElement('h3')
      director.textContent = "Director: " + movie.director;

      const releaseDate = document.createElement('h3')
      releaseDate.textContent = "Released: " + movie.release_date;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 250);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(director);
      card.appendChild(releaseDate);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('error');
    errorMessage.textContent = `Ups, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();