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


          const weatherOutput = [];
          for (let i = 5; i < data.list.length; i += 6) {
              weatherOutput.push(data.list[i].main.temp);
              weatherOutput.push(data.list[i].dt_txt);
              weatherOutput.push(data.list[i].icon);
              weatherOutput.push(data.list[i].main.humidity);
              weatherOutput.push(data.list[i].wind.speed);
          }

          // weatherOutput.forEach(temp => console.log(temp));
          
          const mainTemp = [];
          for (let i = 5; i < data.list.length; i += 6) {
            mainTemp.push(data.list[i].main.temp);
          }
          
          const dtTxt = [];
          for (let i = 5; i < data.list.length; i += 6) {
            dtTxt.push(data.list[i].dt_txt);
          }
          
          const weatherIcon = [];
          for (let i = 5; i < data.list.length; i += 6) {
            weatherIcon.push(data.list[i].weather.icon);
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

          


      })

      .catch(error => console.error(error));

  
}

  
// Handle submit button

function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    searchApi();
    
}

  searchFormEl.addEventListener('submit', handleSearchFormSubmit);


