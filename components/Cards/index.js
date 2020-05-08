// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function cardMaker(articleObj) {
    //elements
    const {authorName, authorPhoto, headline} = articleObj;
    let card = document.createElement('div');
    let headLine = document.createElement('div');
    let author = document.createElement('div');
    let imgCon = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');
    //classes
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');
    //content
    headLine.textContent = headline;
    img.src = authorPhoto;
    img.alt = `Picture of this article's author. ${authorName}`;
    span.textContent = authorName;
    //nesting
    imgCon.appendChild(img);
    author.appendChild(imgCon);
    author.appendChild(span);
    card.appendChild(headLine);
    card.appendChild(author);
    //events
    //return
    return card
}
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    console.log(response);
    for (const topic in response.data.articles) {
        if (response.data.articles.hasOwnProperty(topic)) {
            // debugger
            response.data.articles[topic].forEach(element => {
            document.querySelector(`div.cards-container`).appendChild(cardMaker(element));
            }); 
        };
    };
})
.catch(response => {
    console.log(`Error ==> ${response}`);
    
});