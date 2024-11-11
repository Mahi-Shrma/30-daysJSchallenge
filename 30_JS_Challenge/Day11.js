// Day 11 => Promises and Async/Awaits

// Activity 1 => Understanding Promises

//  Task 1
const pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("Welcome")
    },2000)
}).then((msg)=> console.log(msg));

// Task 2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
     reject('Promise rejected')
    },2000)
}).then((msg)=> console.log(msg)).catch((er)=>console.log(er));

//---------------------------------------------------------------------------------------------------------------------------------------------------------

// Activity 2 => Chaining Promises

// Task 3 



//--------------------------------------------------------------------------------------------------------------------------------------------

// Activity 3 => Using Await/Await

//  Task 4 

const prom = new Promise((resolve,reject)=>{
    resolve("Async function");
})

async function consumePromise1 (){
    const response = await prom;
    console.log(response);
}
consumePromise1();

// Task 5 

const prom1 = new Promise((resolve,reject)=>{
    // resolve("Async function");
    const res = false;
    if(res){
        resolve("Data recieved");
    }
    else{
        reject("Error ocurred");
    }
})

async function consumePromise2 (){
    try {
        const response = await prom1;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise2();

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Activity 4 => Fetching data from an API

// Task 6

const api = 'https://catfact.ninja/fact';

fetch(api).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Didn't get data from API");
})

// Task 7

async function result (){
    const response1 = await fetch('https://api.nationalize.io?name=mahi');
    //console.log(response.json());
    const data1 =await response1.json();    // here await keyword is imp*
    console.log(data1);
}
result();

//--------------------------------------------------------------------------------------------------------------------------------------------------

// Activity 5 => Concurrent Promises 

// Task 8 

// The Promise.all() method is actually a method of the Promise object (which is also an object under JavaScript used to
//  handle all the asynchronous operations), that takes an array of promises(an iterable) as input. It returns a single Promise
//  that resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises.
//  if any promise fails to get executed, then Promise.all() method will return an error and it will
//  not take into account whether other promises are successfully fulfilled or not.

let first_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 1 second");
	}, 1000);
});

let second_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 2 seconds");
	}, 2000);
});

let third_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 3 seconds");
	}, 3000);
});

try {
	let result = Promise.all([first_promise, second_promise, third_promise]);
	result.then((data) => console.log(data));
} catch (error) {
	console.log(error);
}

// Task 9

let a = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("data 1");
    },3000);
});

let b = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("data 2");
    },2000);
});

let c = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("data 3");
    },5000);
});

try {
    const d = Promise.race([a,b,c]);
    d.then((data)=>console.log(data));
} catch (error) {
    console.log("ERROR!");
}

//**************************************************DAY 11 TASK COMPLETED************************************************************************/