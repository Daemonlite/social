import bcrypt from 'bcrypt'

 export const hashPassword = (password) => {
    return new Promise( (resolve,reject) =>{
        bcrypt.genSalt(12,(err,salt)=>{
            if(err){
                reject(err)
            }
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

export const comparePassword = (password,hashed) => {
   return bcrypt.compare(password,hashed)
}



export default hashPassword
// async ... await method

// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';

// (async () => {
//     // Technique 1 (generate a salt and hash on separate function calls):
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(myPlaintextPassword, salt);
//     // Store hash in your password DB.

//     // Technique 2 (auto-gen a salt and hash):
//     const hash2 = await bcrypt.hash(myPlaintextPassword, saltRounds);
//     // Store hash in your password DB.
// })();