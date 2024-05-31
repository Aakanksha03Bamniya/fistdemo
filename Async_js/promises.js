// promises are Enveted t over come the problem of callbacks and callbac hell
// callbacks are nasted function just like one fun inside another fun anf inside another fun


// promise req 2 parameter that is resolve and reject 

// here is the example of trip to goa by using promise

function trip_planning(){
    return new Promise((res , rej)=>{
        setTimeout(()=>{
            res('Hey, we are planing for trip to goa')
        },1000)
    })
}


// book tickets

function tickets_booking(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(' we have booked the flight tickets')
        }, 2000);

    })
}

// reach the goa and roaming out there


function enjoying_goa(){
    return new Promise ((res,rej)=>{
        setTimeout(() => {
            res('we are enjoying and having parties and visiting goa beaches')
        }, 5000);
    })
}

// back to the hometown

function back_to_town(){
    return new Promise ((res,rej)=>{
        setTimeout(() => {
            res('feeling very tired as we return to home')
        }, 4000);

    })
}
 

// promises are handle by .then
/*trip_planning().then((msg)=>{
    console.log(msg);
    tickets_booking().then((msg1)=>{
        console.log(msg1);
        enjoying_goa().then((msg2)=>{
            console.log(msg2);
            back_to_town().then((msg3)=>{
                console.log(msg3)
            })

        })
    })
 
})*/


// promises handle by async await

async function promise(){
    const plan = await trip_planning()
    console.log(plan);

    const booking = await tickets_booking();
    console.log(booking);

    
    const roaming = await enjoying_goa();
    console.log(roaming);
    


}

promise()