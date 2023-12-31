const vin = document.getElementById("vin-number")
const mileage = document.getElementById("mileage-number")
const find = document.getElementById("find")


const getCarMarketValue = async (event) => {
    event.preventDefault()
    const result = document.getElementById("result")
    const mileage_number = +mileage.value.split(",").join("")
    console.log(mileage.value, vin.value)
    if (!mileage.value && !vin.value) {
        result.innerText = "Please fill out all fields"
        return
    }

    const url = `https://car-utils.p.rapidapi.com/marketvalue?vin=${vin.value}&mileage=${mileage_number}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c32cafe327mshab2693a9f82652cp1b34f8jsn8f1fcf10433f',
            'X-RapidAPI-Host': 'car-utils.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json()
        result.innerHTML = `<span style='width: 100%'>The Value of the Car is <b>$${data.prices.average}<b><span>`;
        result.style.fontSize = "bold";
    } catch (error) {
        console.error(error);
    }
}

find.addEventListener("click", getCarMarketValue)
