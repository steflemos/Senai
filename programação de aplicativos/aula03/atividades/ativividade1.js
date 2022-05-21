/*let cliente1 = {nome:"stefani", email:"stef@gmail.com", telefone:"4882-8922"}
let cliente2 = {nome:"fernando", email:"fer@gmail.com", telefone:"4882-8923"}
let cliente3 = {nome:"brendo", email:"brendo@gmail.com", telefone:"4882-2356"}
console.log(cliente1, cliente2, cliente2);*/

let clientes = []
for (i=0; i<6; i++){
    clientes.push({nome:"joao"+i, email:"jgmail.com"+i, telefone:  "123456"+i})
}
console.log(clientes);