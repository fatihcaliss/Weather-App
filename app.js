const input = document.getElementById("userInput");
const button = document.querySelector(".btn");
const output = document.querySelector(".output-section");
const inputSection = document.querySelector(".inputSection");
const apiKey = "5dac968140b28c4a2cffbdcd04e73318";

const gettingWeather = async () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

    if (!output.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
        try {

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const { name, weather, main, sys } = data;
            console.log(name, main, weather, sys);
            output.innerHTML += `<ul class="list-group col-12 col-md-6 col-xl-3">
        <li class="list-group-item">${name}<sup id="country">${sys.country}</sup></li>
        <li class="list-group-item fs-2">${main.temp}<sup>&#176C</sup></li>
        <li class="list-group-item fs-2"><img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" </img></li>
        <li class="list-group-item">${weather[0].main}</li>
    </ul>`
            // infoMessage.remove();
        } catch (error) {
            alert("There is not a city called " + input.value)
        }
        finally {
            input.value = "";
            input.focus();
        }
    } else {
        // alert(input.value + "is already exist.")
        const infoMessage = document.createElement("p");
        const node = document.createTextNode(input.value + " is already exist !!")
        infoMessage.appendChild(node);
        inputSection.appendChild(infoMessage)
        setTimeout(() => infoMessage.remove(),2000);
        input.value = "";
        input.focus();
    }

}

button.addEventListener("click", gettingWeather);
input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        gettingWeather();
    }
})