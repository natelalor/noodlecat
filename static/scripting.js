


// window.addEventListener('load', function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=6.213770&lon=31.568054&appid=54d5824ee479aac9ca125d57a6574d95')
//         .then(response => response.json())
//         .then(data => console.log(data))
// })
//
// window.addEventListener('load', function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=64.767738&lon=-23.632360&appid=54d5824ee479aac9ca125d57a6574d95')
//         .then(response => response.json())
//         .then(data => console.log(data))
// })

// ########################################### //
// %% ########## %% -- GERMANY -- %% ########## %% //
// ########################################### //

window.addEventListener('load', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.554830&lon=10.014635&appid=54d5824ee479aac9ca125d57a6574d95')
    .then(response => response.json())
    .then(data => {

        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var countryValue = data['sys']['country'];
        var humidityValue = data.main.humidity;
        var sea_levelValue = data['main']['sea_level'];
        var timezoneValue = data['timezone'];

        var cityName = document.querySelector('.name')
        var desc = document.querySelector('.desc')
        var temp = document.querySelector('.temp')
        var country = document.querySelector('.country')
        var humidity = document.querySelector('.humidity')
        var sea_level = document.querySelector('.sea_level')
        var timezone = document.querySelector('.timezone')
        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        country.innerHTML = countryValue;
        humidity.innerHTML = humidityValue;
        sea_level.innerHTML = sea_levelValue;
        timezone.innerHTML = timezoneValue;

    })


// .catch(err => alert("error with germany data"))
})

// ################################################## //
// %% ########## %% -- AFGHANISTAN -- %% ########## %% //
// ################################################## //

var cityName2 = document.querySelector('.name2')
var desc2 = document.querySelector('.desc2')
var temp2 = document.querySelector('.temp2')
var country2 = document.querySelector('.country2')
var humidity2 = document.querySelector('.humidity2')
var sea_level2 = document.querySelector('.sea_level2')
var timezone2 = document.querySelector('.timezone2')

window.addEventListener('load', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.257332&lon=66.132766&appid=54d5824ee479aac9ca125d57a6574d95')
    .then(response => response.json())
    .then(data => {

      var nameValue2 = data['name'];
      var tempValue2 = data['main']['temp'];
      var descValue2 = data['weather'][0]['description'];
      var countryValue2 = data['sys']['country'];
      var humidityValue2 = data['main']['humidity'];
      var sea_levelValue2 = data['main']['sea_level'];
      var timezoneValue2 = data['timezone'];

      cityName2.innerHTML = nameValue2;
      temp2.innerHTML = tempValue2;
      desc2.innerHTML = descValue2;
      country2.innerHTML = countryValue2;
      humidity2.innerHTML = humidityValue2;
      sea_level2.innerHTML = sea_levelValue2;
      timezone2.innerHTML = timezoneValue2;

    })


// .catch(err => alert("error with afghanistan data"))
})

// ############################################# //
// %% ########## %% -- SWEDEN -- %% ########## %% //
// ############################################# //

var cityName3 = document.querySelector('.name3')
var desc3 = document.querySelector('.desc3')
var temp3 = document.querySelector('.temp3')
var country3 = document.querySelector('.country3')
var humidity3 = document.querySelector('.humidity3')
var sea_level3 = document.querySelector('.sea_level3')
var timezone3 = document.querySelector('.timezone3')

window.addEventListener('load', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=60.118420&lon=18.714043&appid=54d5824ee479aac9ca125d57a6574d95')
    .then(response => response.json())
    .then(data => {

      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      var countryValue = data['sys']['country'];
      var humidityValue = data['main']['humidity'];
      var sea_levelValue = data['main']['sea_level'];
      var timezoneValue = data['timezone'];

      cityName3.innerHTML = nameValue;
      temp3.innerHTML = tempValue;
      desc3.innerHTML = descValue;
      country3.innerHTML = countryValue;
      humidity3.innerHTML = humidityValue;
      sea_level3.innerHTML = sea_levelValue;
      timezone3.innerHTML = timezoneValue;

    })


// .catch(err => alert("error with sweden data"))
})

// ############################################## //
// %% ########## %% -- AMERICAN SAMOA -- %% ########## %% //
// ############################################## //

// LAT -43.257842 LON -65.307948
var cityName4 = document.querySelector('.name4')
var desc4 = document.querySelector('.desc4')
var temp4 = document.querySelector('.temp4')
var country4 = document.querySelector('.country4')
var humidity4 = document.querySelector('.humidity4')
var sea_level4 = document.querySelector('.sea_level4')
var timezone4 = document.querySelector('.timezone4')

window.addEventListener('load', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=-14.335135&lon=-170.751873&appid=54d5824ee479aac9ca125d57a6574d95')
    .then(response => response.json())
    .then(data => {

      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      var countryValue = data['sys']['country'];
      var humidityValue = data['main']['humidity'];
      var sea_levelValue = data['main']['sea_level'];
      var timezoneValue = data['timezone'];

      cityName4.innerHTML = nameValue;
      temp4.innerHTML = tempValue;
      desc4.innerHTML = descValue;
      country4.innerHTML = countryValue;
      humidity4.innerHTML = humidityValue;
      sea_level4.innerHTML = sea_levelValue;
      timezone4.innerHTML = timezoneValue;

    })


// .catch(err => alert("error with american samoa data"))
})

let form = document.querySelector("#submit_button");
form.addEventListener("click", inputvalidation)

function inputvalidation(){
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    console.log(username);
    console.log(password);

    if (username === "DEAF") {
        if (password === "SEAS") {
            window.location="anotherbeginning.html";
        }
        else {
            document.querySelector("#error_message").style.display="block";
            bordercolor();
        }
    }
    else {
        document.querySelector("#error_message").style.display="block";
        bordercolor();
    }

}

function bordercolor(){
    let borderthing = document.querySelector("#error_message");
    let color = colorSelector();

    borderthing.style.borderBottom="solid 3px " + color;
}

function colorSelector(){
    let color = "";
    let colorArray = [
        "#5C131B",
        "#6E1722",
        "#615843",
        "#24231D",
        "#1A0B08",
        "#955A31",
        "#11342E",
        "#804167",
        "#D5806B",
        "#E5C99E",
        "#7F8C72",
        "#1E566F",
        "#2B5128",
        "#1D4250",
        "#A96739",
        "#DBA15D"
    ]
    let randomColor = Math.floor(Math.random() * 17);
    color = colorArray[randomColor];
    return color;
}


function boat_found(){
    console.log("HI");
    window.location="next.html";
}






//
//
//
// //// VIBES
//
// const masterFunction = async (className) => {
//     const data = (await fetch('https://api.openweathermap.org/data/2.5/weather?lat=6.213770&lon=31.568054&appid=54d5824ee479aac9ca125d57a6574d95')).json()
//     console.log('we have called the master function and received the data')
//     console.log({data});
// }
//
// masterFunction()
//
//
//







