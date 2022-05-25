import service from "./service";

export async function listagem(){
    return service.get('/book/ver').then(response => response.data);       
}

export async function listagemMeusLivros(){
    let axiosConfig = {
        headers: {
           'x-access-token': localStorage.getItem('AuthToken')
        }
     };
    return service.get('/book/verLista', axiosConfig).then(response => response.data);       
}

export async function listagemDesejo(){
    let axiosConfig = {
        headers: {
           'x-access-token': localStorage.getItem('AuthToken')
        }
     };
    return service.get('/book/verWish', axiosConfig).then(response => response.data);       
}

export async function cadastrarLivro(title, author, cover, genre){
    var postData = {
        title: title,
        author: author,
        cover: cover,
        genre: genre,
    };
    
    let axiosConfig = {
       headers: {
          'x-access-token': localStorage.getItem('AuthToken')
       }
    };
    
    return service.post('/book/cadastro', postData, axiosConfig)
 }

 export async function addWishList(id){
    var postData = {
        book_id: id,
    };
    
    let axiosConfig = {
       headers: {
          'x-access-token': localStorage.getItem('AuthToken')
       }
    };
    
    return service.post('/book/listar', postData, axiosConfig)
 }

 export async function avaliar(id,score){
   var postData = {
       book_id: id,
       score: score,
   };
   
   let axiosConfig = {
      headers: {
         'x-access-token': localStorage.getItem('AuthToken')
      }
   };
   
   return service.post('/book/avaliar', postData, axiosConfig)
}



export default service;