

const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/practica"
const URLde ="https://assets.breatheco.de/apis/fake/contact"
const HEADERS = {
    "Content-Type": "application/json"
};

async function getData() {
    const response = await fetch(URL, {method:"GET"})
    const dataResponse = await response.json();
    console.log(dataResponse)
    return dataResponse
}




export default getData;

export const newUser = async (contactos) => {
    try {
        const res = await fetch (URL, {method: "POST",
        body:JSON.stringify(contactos), 
        headers: HEADERS})

    }catch (err){
        console.log("error",err)
    }

}


export const deleteUser = async (name) => {
    try {
      const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Error:", err);
      return null;
    }
  };