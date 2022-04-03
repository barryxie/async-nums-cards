let favNumber = 5;
let baseURL = "http://numbersapi.com";


//1
async function part1(){
  const res = await axios.get(`${baseURL}/${favNumber}?json`)
  console.log(res.data)
}
part1()

//2
const favNumbers = [7, 11, 22];
async function part2(){
  const res = await axios.get(`${baseURL}/${favNumbers}?json`)
  let facts = res.data
  for(let fact in facts){
    $('body').append(`<p>${facts[fact]}</p>`);
  }
  
}
part2()

//3

async function part3(){
  let facts =  await Promise.all(
    Array.from({length:4}, ()=> axios.get(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(fact => {
    console.log(fact.data.text)
  })
}

part3()

