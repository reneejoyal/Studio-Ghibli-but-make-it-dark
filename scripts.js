const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'
app.appendChild(logo)

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(movie => {
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
      
        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
      
        // Create a span and set the text content to the film's description
        const span = document.createElement('span')
        span.textContent = movie.description
      
        // Append the cards to the container element
        container.appendChild(card)
      
        // Each card will contain an h1 and a span
        card.appendChild(h1)
        card.appendChild(span)
    })
  })
  .catch(err => {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  })