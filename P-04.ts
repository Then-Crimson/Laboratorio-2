function crearObjeto(name: string, ci: string, email: string): string {
    return `{
        "name": "${name}",
        "ci": "${ci}",
        "email": "${email}"
    }`;
}

console.log(crearObjeto("Juan", "1233444555566", "juaniXD@example.com"));
