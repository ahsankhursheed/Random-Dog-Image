const dogImageDiv = document.getElementById('dog-image');
const randomBtn = document.getElementById('randomBtn');

const generateDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dogImageDiv.innerHTML = `<img src='${json.message}' alt='dog image' height = 480 width = 480 />`
    })
}

randomBtn.onclick = () => generateDog();