// // Define Application Variables

const formEl = document.getElementById('search-form');
const searchEl = document.getElementById('search');
const searchInput = document.getElementById('searchEntry');


const outputElement = document.getElementById("output");

let searchFormEl = document.querySelector('#search-form')





// handle submit

function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    // let searchInputVal = document.querySelector('#search-input').value;
    let queryString = `http://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=d41a700a8c02c2dcea0a697c4dbe482d&units=metric`
    console.log(searchInput.value);

    fetch(queryString)
    .then(response => response.json())
    .then(data => {
     console.log(data)

     
        

     const weatherData = data.list[0].main;
     console.log(weatherData)

    
    
     const mainTemp = data.list[0].main.temp;
     console.log(mainTemp)


    // warning!
     for (var i = 0; i < data.list[0].main.temp; i++) {
        
        const newElement = document.createElement("p");
        newElement.textContent = `The temperature is ${mainTemp}`;
        outputElement.appendChild(newElement);
     }
    ..


     const newElement = document.createElement("p");
     newElement.textContent = `The temperature is ${mainTemp}`;
     outputElement.appendChild(newElement);
     
    })
    .catch(error => console.error(error)); 
    
    printResults()

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);



