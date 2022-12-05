import service from './service';

export async function login(email, password) {
  //  var postData = {
  //     email: email,
  //     password: password
  //  };
  //  return service.post('/login', postData)
  localStorage.setItem(
    'AuthToken',
    'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJha2xtIiwiVXNlcm5hbWUiOiJ0ZXN0ZUBlbWFpbC5jb20ifQ.8kezcsjN7OKr0pnCwek26NnJlxaLl2tGz1SjSDD5Mso'
  );
  return;
}

export async function cadastrar(email, password) {
  // var postData = {
  //    email: email,
  //    password: password
  // };
  // return service.post('/user/cadastro', postData)
  localStorage.setItem(
    'AuthToken',
    'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJha2xtIiwiVXNlcm5hbWUiOiJ0ZXN0ZUBlbWFpbC5jb20ifQ.8kezcsjN7OKr0pnCwek26NnJlxaLl2tGz1SjSDD5Mso'
  );
  return;
}
