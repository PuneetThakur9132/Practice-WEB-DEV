// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then((res)=>{
//     console.log('RESPONSE WAITING....',res)
//     return res.json()
// })
// .then((data)=>{
//     console.log('HERE IS MY DATA',data.ticker.price)
// })
// .catch((err)=>{
//     console.log('OH NO ERROR')
// })


// const fetchBitcoinPrice = async ()=>{
   
//     try{
//         const res =  await fetch('https://api.cryptonator.com/api/tickerlolll/btc-usd')
//         console.log(res)
//         const data = await res.json()
//         console.log(data.ticker.price)
//     }

//     catch(e){
//         console.log("OH NO ERROR")
//     }
// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then((res)=>{
//     console.log(res.data.ticker.price)
// })
// .catch((err)=>{
//     console.log("ERROR",err)
// })

// const getBitcoinPrice = async ()=>{

//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }
//     catch(e){
//         console.log("ERROR",e);
//     }
// }
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getDadJoke = async ()=>{
    try{
   
    const config = {headers:{Accept:'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke

    }
    catch(e){
        return "NO JOKES AVAILABLE SORRY"
    }

}

const addJoke = async ()=>{
    const jokeText = await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(jokeText)
    jokes.append(newLi)
}


button.addEventListener('click',addJoke)