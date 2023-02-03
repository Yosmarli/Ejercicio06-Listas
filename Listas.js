const compra = ["Galletas", "Helados", "Chocolates", "Doritos", "Refrescos"]
console.log(compra)


compra.push("Aceite de Girasol")
console.log(compra)


compra.pop()
console.log(compra)


const peliculas = [
    {
        titulo: "Wall·E",
        director: "Andrew Stanton",
        fecha: new Date ([2008, 8, 08])
    },

    {
        titulo: "¿Qué le pasó a Lunes?",
        director: "Tommy Wirkola",
        fecha: new Date ([2017, 08, 30])
    },

    {
        titulo: "Interestelar",
        director: "Christopher Nolan",
        fecha: new Date([2014, 11, 07])
    }
]
 console.log(peliculas)

 
 const fechafiltro = new Date([2010, 01, 01])
 let peliculasPosteriores = peliculas.filter(pelicula => pelicula.fecha > fechafiltro )
 console.log(peliculasPosteriores)


const directores = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(directores)


const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos)


const directoresTitulos = directores.concat(titulos)
console.log(directoresTitulos)


const directoresTitulosPropagacion = [...directores, ...titulos]
console.log(directoresTitulosPropagacion) 
