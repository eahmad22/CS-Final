const vin = document.getElementById("vin-number")
const mileage = document.getElementById("mileage-number")
const find = document.getElementById("find")


const getCarMarketValue = async (event) => {
    event.preventDefault()
    const result = document.getElementById("result")
    console.log(mileage.value, vin.value)
    if (!mileage.value && !vin.value){ 
       result.innerText = "please fill out this form"
        return
    }
    
    const url = `https://car-utils.p.rapidapi.com/marketvalue?vin=${vin.value}&mileage=${mileage.value}`;
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
        result.innerText = "The Value of the Car is $" + data.prices.average
    } catch (error) {
        console.error(error);
    }
}


find.addEventListener("click", getCarMarketValue)
