const joke = document.querySelector('.joke')
const btn = document.querySelector('button')

newJoke()

btn.addEventListener('click', () => {
    newJoke()
})

function newJoke(){
   fetch('https://icanhazdadjoke.com/', {
       headers: {
         Accept: 'application/json'
       } 
    }).then((res) => res.json()).then((data) => {
        joke.innerHTML = data.joke
        console.log(data)
    })
    
}