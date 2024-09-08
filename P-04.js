function crearObjeto(name, ci, email) {
    return "{\n        \"name\": \"".concat(name, "\",\n        \"ci\": \"").concat(ci, "\",\n        \"email\": \"").concat(email, "\"\n    }");
}
console.log(crearObjeto("Juan", "1233444555566", "juaniXD@example.com"));
