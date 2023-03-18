const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/carlos"

async function getData() {
    const response = await fetch(URL, {method:"GET"})
    const dataResponse = await response.json();
    console.log(dataResponse)
    return dataResponse
}


export default getData;