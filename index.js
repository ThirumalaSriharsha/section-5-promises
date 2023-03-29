const fs=require("fs");
const superagent=require("superagent");
const writeFilepro=file=>{
    return new Promise((resolve, reject) => {
  fs.writeFile(file,data,err=>
    {
        if(err)
         return reject("cannot write the file");
         resolve("sucess");

    });
    });
}
const readFilepro=file=>{
    return new Promise((resolve, reject) => {
        fs.readFile(file,(err,data)=>
        {  if(err) reject("i could not find that file");
            resolve(data);

        });
    });
} 
readFilepro(`${__dirname}/dog.txt`)
.then(data=>{
    console.log(`breed:${data}`);
       
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    
 } )
.then(res=>
        {          
            console.log(res.body.message);
            return writeFilepro('dog -image.txt',res.body.message);
        })
.then(()=>{
        console.log("random dog image saved to file ");
       })
.catch(err=>
            {
                console.log(err.message);
            });

