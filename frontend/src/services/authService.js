import service from "./service";

export async function login(email, password){
    var postData = {
       email: email,
       password: password
    };    
    return service.post('/login', postData)
 }

 export async function cadastrar(email, password){
   var postData = {
      email: email,
      password: password
   };    
   return service.post('/user/cadastro', postData)
}