// // Define Application Variables

const formEl = document.getElementById('search-form');
// const searchEl = document.getElementById('search');
// const inputValue = document.getElementById("searchInput").value;



// // Search city via api function

// function getForecast(cityname){
//     const url = `api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid={API key}`;
//     return fetch(url)
//     .then(function(response){
//         return responsejson();
//     });
// }

// //When user click on submit form

// formEl.addEventListener('submit', function(event){
//     event.preventDefault();

//     getForecast()
// });



// handle submit

let searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    // let searchInputVal = document.querySelector('#search-input').value;
    let queryString = "http://api.openweathermap.org/data/2.5/forecast?q=Perth&appid=d41a700a8c02c2dcea0a697c4dbe482d"
    

    fetch(queryString)
        .then(function (response) {
            if(response.ok) {
                return response.json()
            }
        });

        console.log(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);










// // Test Zone


fetch("http://api.openweathermap.org/data/2.5/forecast?q=Perth&appid=d41a700a8c02c2dcea0a697c4dbe482d")
  .then(response => response.json())
  .then(data => {
   console.log(data)
  })
  .catch(error => console.error(error));




// const cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Perth&limit=5&appid=c36729007c993b432071623f51e48494"

// console.log(cityUrl);

// const testUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Perth&appid=d41a700a8c02c2dcea0a697c4dbe482d"
// console.log(testUrl);

