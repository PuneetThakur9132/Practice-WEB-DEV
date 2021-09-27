const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1', function(response){
//     console.log("It worked!!!")
//     console.log(response)
//     fakeRequestCallback('books.com/page2',function(response){
//         console.log("IT WORKED AGAIN")
//         console.log(response)
//         fakeRequestCallback('books.com/page3',function(response){
//             console.log("worked (3rd request)")
//             console.log(response)

//         },function(err){
//             console.log("error(3rd request)")
//             console.log(err)

//         })
//     },function(err){
//         console.log('ERROR (2nd req)')
//         console.log(err)

//     })
// },function(err){
//     console.log("ERROR!!!")
//     console.log(err)
// })

// fakeRequestPromise('yelp.com/api/coffe/page1')
// .then(()=>{
//     console.log("IT WORKED!!!...(page1)")
//     fakeRequestPromise('yelp.com/api/coffe/page1')
//     .then(()=>{
//         console.log("IT WORKED!!!....(page2)")
//     })
//     .catch(()=>{
//         console.log("ERROR....(page2)")
//     })
// })
// .catch(()=>{
//     console.log("OH NO! ERROR")
// })

fakeRequestPromise('yelp.com/api/coffe/page1')
.then((data)=>{
    console.log("IT WORKED...(page1)")
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffe/page2')
})
.then((data)=>{

    console.log("IT WORKED....(page2)")
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffe/page3')
})
.then((data)=>{
    console.log("IT WORKED...(PAGE3)")
    console.log(data)
})
.catch(()=>{
    console.log("OH NO!!!IT FAILED")
})
