let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// axios.get(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data.data);
//   });




// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});


// axios.get(`${baseURL}/${favNumbers}?json`).then(data => {
//   console.log(data.data)
// })

// //3.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${baseURL}/${favNumber}?json`);
//   })
// ).then(facts => {
//   facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });

let arryFour = []
for (let i=1; i<5; i++){
  arryFour.push(
    axios.get(`${baseURL}/${favNumber}?json`)
  )
}

Promise.all(arryFour).then(
  facts => {
    facts.forEach(data =>  $("body").append(`<p>${data.data.text}</p>`))
  }
)
