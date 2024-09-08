const emailList = [
  "javascript@gmail.com", 
  "abc.com",
  "mydomain.com",
  "Python@hotmail.com",
  "test",
  "anotherEmail@kenkoo.com",
  "typescript@gmail.com",
  "mailOfPikachu@@@@@",
  "elta@kkk.co",
  "user123.....",
  "wrongEmail@gmail.com",
  "kattis.go",
  "java@gamil.com",
];

let emailsValidos = emailList.filter(email => {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.endsWith('.com');
});

console.log(emailsValidos);
