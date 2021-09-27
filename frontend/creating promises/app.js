const fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if(rand<0.7){
                resolve('YOUR FAKE DATA HERE')
            }
            reject('Request error!')
        },1000)
    })
}

async function makeRequests(){
    try{
    
    await fakeRequest('/page1')
    console.log("REQUEST FOR PAGE1 RESOLVED")
    await fakeRequest('/page2')
    console.log("REQUEST FOR PAGE2 RESOLVED")

    }
    catch(e){
        console.log("OH ERROR")
        console.log(e)
    }
}

// fakeRequest('yelp.com/api/cofee/page')
// .then((data)=>{
//     console.log("DONE WITH REQUEST")
//     console.log(data)
// })
// .catch((data)=>{
//     console.log("OH ERROR!")
//     console.log(data)
// })


// const delayedColorChange = (color ,delay)=>{
   
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();

//         },delay)
//     })
// }

// async function rainbow(){
//     await delayedColorChange('red',1000)
//     await delayedColorChange('orange',1000)
//     await delayedColorChange('yellow',1000)
//     await delayedColorChange('green',1000)
//     await delayedColorChange('blue',1000)
//     await delayedColorChange('magenta',1000)
//     await delayedColorChange('violet',1000)
//     return "ALL DONE"
// }

// async function printRainbow(){
//     let data = await rainbow();
//     console.log(data)
//     console.log("HEY IT IS A RAIBOW")
// }

// delayedColorChange('red',1000)
// .then(()=>{
//     return delayedColorChange('orange',1000)
// })
// .then(()=>{
//     return delayedColorChange('yellow',1000)
// })
// .then(()=>{
//     return delayedColorChange('purple',1000)
// })
// .then(()=>{
//     return delayedColorChange('blue',1000)
// })


// async function hello(){
    
// }

// const sing = async ()=>{

//     throw 'OH PROBLEM!'
//     return 'LA LA LA LA'
// }

// sing()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("ERROR AA GYA BHAGO")
//     console.log(err)
// })

// const login = async (username , password)=>{

//     if(!username || !password) throw 'Missing Credentials'
//     if(password==='corgifeetarecute') return 'WELCOME!'
//     throw 'INVALID PASSWORD'

// }

// login('asaddj','corgifeetarecute')
// .then((data)=>{
//     console.log('LOGGED IN')
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('error')
//     console.log(err)
// })

