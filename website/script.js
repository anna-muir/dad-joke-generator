const generate = document.getElementById('generate-btn')
const div = document.getElementById('div');


async function getJoke() {
    try {
        const api_url = 'http://localhost:5002/jokes'
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data[0].joke)

        div.innerHTML = data[0].joke

    } catch (error) {
        console.log(error)
    }
}





generate.addEventListener('click', getJoke)




