const posts = [{
    title : 'post1',
    body : 'here is the post1'
},
{
    title : 'post2',
    body : 'here is the post2'
},
]

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((e)=>{
            output += `<li>${e.title}</li>`
        })

    document.body.innerHTML= output;
        
    }, 1000);
}


function create_new_post(post){
   console.log('list scene before creating post3',new Date())
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push();
        resolve()
    }, 1000);
   })
}

function delete_post(){
    console.log('last scene before delete the post', new Date());
    return new Promise((res,rej)=>{
        setTimeout(() => {
            posts.pop();
            res()
        }, 1200);
    })
}

function update_post(){
    console.log('last scene before update the post', new Date());
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let a = new Date ();
            resolve(a)
        }, 2000);
    })
}


const post3= {title:'post3', body:'there is post post3'}

Promise.all([create_new_post(post3).then(getPost),update_post().then((a)=>{
    console.log(a)
})])