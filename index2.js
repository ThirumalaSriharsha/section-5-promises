const fs=require("fs");
const superagent=require("superagent");

const readFilepro=file=>{
    return new Promise((resolve, reject) => {
        fs.readFile(file,(err,data)=>
        {  if(err) reject("i could not find that file");
            resolve(data);

        });
    });
}; 
const writeFilepro=file=>{
    return new Promise((resolve, reject) => {
  fs.writeFile(file,data,err=>
    {
        if(err)
         return reject("cannot write the file");
         resolve("sucess");

    });
    });
};
const getdogpic=async() =>
 { 
    try{
                                                                                     
     const data=await readFilepro(`${__dirname}/dog.txt`);
     console.log(`breed:${data}`);
      const res =await  superagent.get
      (`https://dog.ceo/api/breed/Affenpinscher/images/random/`);
      console.log(res.body.message);
      await  writeFilepro('dog-image.txt',res.body.message);
      console.log("random dog image saved to file ");
    }
    catch(err)
    {
        console.log(err.message);
        throw err;
    }
    return "2:ready"
 };
 (async()=>{
 try
 {
    console.log("1:will get dog pics");
    const x =await getdogpic();
    console.log(x);
    console.log("3.done getting dog pics");
  }
     catch(err)
     {
        console.log("error💥");
     }
    })();






/*console.log("1:will get dog pics");
getdogpic().then(x =>
 {
    console.log(x);
    console.log("3.done getting dog pics");
}).catch(err=> 
    {
        console.log("error💥");
    });




readFilepro(`${__dirname}/dog.txt`)
.then(data=>{
    console.log(`breed:${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
 })
.then(res=>
        {          
            console.log(res.body.message);
            return writeFilepro('dog-image.txt',res.body.message);
        })
.then(()=>{
        console.log("random dog image saved to file ");
       })
.catch(err=>
            {
                console.log(err.message);
            });
            
*/
// the file is working but the dogs pics ar not found


