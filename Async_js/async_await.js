console.log('consumer : 1')
console.log('consumer : 2')

/*const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve('here is the  products')
    }, 3000);
})

const promise2 = promise1.then((e)=>{
    console.log('consumer : 3 did not find out the product they he wanted')
    return new Promise ((resolve, reject)=> resolve(`${e} :)`))
})

//promise2.then((e)=>console.log(e))

const promise3 = promise2.then((find)=>{
    console.log('consumer : 3 asking for his product to the salesman');
    return new Promise((res,rej)=> res(find))
});

//promise3.then((e)=> console.log(e))
  const promise4 = promise3.then((payment)=>{
     console.log('consumer : 3 get his product and go for the payment counter');
     return new Promise ((res,rej)=> res(payment))
  })

promise4.then((e)=> console.log(e))
*/



// here we are using async await for understaing the async js functionalities;
// async always return a promise , thats why we used .then


const consumer = async()=> {
    const prom1 = new Promise((res,rej)=>{
        setTimeout(() => {
            res('product')
        }, 3000);
    })

    const prom2 = new Promise ((res,rej)=> res('The product is : popcorn'))
    const prom3 = new Promise((res,rej)=> res('Next product is : butter'))

    let item = await prom1;


    const pro = await prom2;
    console.log(`${pro}`)

    const prom = await prom3;
    console.log(`${prom}`)



     return item;
}

consumer().then((e)=> console.log(e))






console.log('consumer : 4')
console.log('consumer : 5')