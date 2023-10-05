/*

const init = () => {
  const movieForm = document.querySelector('form');

  movieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = e.target.children[1].value;
    //const inputField = document.querySelector('input#searchByID').value
    //console.log(inputField);

    fetch(`http://localhost:3000/movies/${inputField}`)
    .then ((resp) => resp.json())
    .then ((data) => {
        //console.log(data);
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        title.innerText = data.title;
        summary.innerText = data.summary;

    })
    movieForm.reset();
  })
}

document.addEventListener('DOMContentLoaded', init);

*/

const init = () => {
    const movieForm = document.querySelector('form');

    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formInput = e.target.children[1].value;

        fetch(`http://localhost:3000/movies/${formInput}`)
        .then((bookData) => bookData.json())
        .then((convertedData) => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
            summary.innerText = convertedData.summary
            title.innerText = convertedData.title
        })

        movieForm.reset();
    })



}

document.addEventListener('DOMContentLoaded', init);