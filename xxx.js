new Promise((resolve, reject)=>{
    console.log("1");
    resolve("==========");
    console.log("2");
    console.log("3");
    console.log("4");
    reject("-------")
    let xxx = 1/0;

}).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})