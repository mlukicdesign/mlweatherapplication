// // Define Application Variables

const formEl = document.getElementById('search-form');
const searchEl = document.getElementById('search');
let searchFormEl = document.querySelector('#search-form')



// Handle Api Search

function searchApi() {


  const searchInput = document.getElementById('searchEntry');


  let queryString = `http://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=d41a700a8c02c2dcea0a697c4dbe482d&units=metric`
  console.log(searchInput.value);

  fetch(queryString)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      const parentDiv = document.getElementById('output');
      parentDiv.innerHTML = '';



      const weatherData = data.list[0].main;
      console.log(weatherData)

      console.log(data.list[0].weather[0].icon)
      const icon = `https://openweathermap.org/img/w/` + data.list[0].weather[0].icon + `.png`

      const output = [];
      for (let i = 5; i < data.list.length; i += 6) {
        output.push(data.list[i].main.temp);
        // output.push(data.list[i].weather[i].icon);
        output.push(data.list[i].main.humidity);
        output.push(data.list[i].wind.speed);
      }

      

      // weatherOutput.forEach(temp => console.log(temp));

      const mainTemp = [];
      for (let i = 5; i < data.list.length; i += 6) {
        mainTemp.push(data.list[i].main.temp);
      }

      const dtTxt = [];
      for (let i = 5; i < data.list.length; i += 6) {
        dtTxt.push(data.list[i].dt_txt.slice(0,10));
      }

      const weatherIcon = [];
      for (let i = 5; i < data.list.length; i += 6) {
        weatherIcon.push(`https://openweathermap.org/img/w/` + data.list[0].weather[0].icon + `.png`);
      }

      const mainHumidity = [];
      for (let i = 5; i < data.list.length; i += 6) {
        mainHumidity.push(data.list[i].main.humidity);
      }

      const wind = [];
      for (let i = 5; i < data.list.length; i += 6) {
        wind.push(data.list[i].wind.speed);
      }



      for (let i = 0; i < mainTemp.length; i++) {
        const childDiv = document.createElement('div');
        childDiv.style.display = 'inline-block';
        childDiv.style.border = '1px solid black';
        childDiv.innerHTML = `
              <p>Temp: ${mainTemp[i]}</p>
              <p> ${dtTxt[i]}</p>
              <img src="${weatherIcon[i]}">
              <p>Humidity: ${mainHumidity[i]}</p>
              <p>Wind: ${wind[i]}</p>
            `;

        // Add big-div class to the first child div
        if (i === 0) {
          childDiv.classList.add('big-div');
        } else if (i != 0) {
          childDiv.classList.add('small-div');
        }

        parentDiv.appendChild(childDiv);



      }
      // Save search entry.

      localStorage.setItem('searchEntry', searchInput.value);
      // using local storage to display a history of past searches

      const storedData = localStorage.getItem('searchEntry'); // Replace 'myData' with the name of your local storage item
      if (storedData) {
        const button = document.createElement('button');
        button.textContent = storedData;
        const localDiv = document.getElementById('local-storage');
        localDiv.appendChild(button);
      }

    });
}

      // .catch(error => console.error(error));


    

// Local storage to dispaly history of past searches





// Handle submit button

function handleSearchFormSubmit(event) {
        event.preventDefault();
        searchApi();
      }


  searchFormEl.addEventListener('submit', handleSearchFormSubmit);