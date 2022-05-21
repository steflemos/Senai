const alunos = [
    '{nome: "Bruno", nota1: 8.5,}',
    '{nome: "Stefani", nota1: 7.0}',
    '{nome: "Gustavo", nota1: 4.5}',
]
const paraObjeto = json => JSON.parse(json)

const apenasNotas = media => media.nota

const resultado = alunos.map(paraObjeto).map(apenasNotas)
console.log("JSON", alunos, "Object", alunos.map(paraObjeto), "Notas", resultado);