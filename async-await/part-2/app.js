
let baseURL = "https://deckofcardsapi.com/api/deck";

//1
async function part1(){
  let res = await axios.get(`${baseURL}/new/shuffle/`)
  let deckId = res.data.deck_id
  let cardData = await axios.get(`${baseURL}/${deckId}/draw/`)
  let resCard = cardData.data.cards[0]
  console.log(`${resCard.value} of ${resCard.suit}`)
}

part1()

//2
async function part2(){
  let res = await axios.get(`${baseURL}/new/shuffle/`)
  let deckId = res.data.deck_id
  let firstCard= await axios.get(`${baseURL}/${deckId}/draw/`)
  let firstCardData = await firstCard.data
  let SecondCard= await axios.get(`${baseURL}/${deckId}/draw/`)
  const cards = [firstCard, SecondCard]
  cards.forEach(card => {
    let { suit, value } = card.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
 
}

part2()


//3
async function cardGame(){
  let $btn = $('button');
  let $cardArea = $('#card-area');

  const res = await axios.get(`${baseURL}/new/shuffle/`);
  const cardData = res.data
  const deckId = cardData.deck_id
  $btn.show().on("click", async function(){
    let cardRes = await axios.get(`${baseURL}/${deckId}/draw/`) 
    let cardData = cardRes.data
    let cardSrc = cardData.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append($('<img>',{ 
      src: cardSrc,
      css: {
         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
    }))
    if (cardData.remaining === 0) $btn.remove();
  })
}

cardGame()
