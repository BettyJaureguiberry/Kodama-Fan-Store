//array con productos
const productos = [
    { nombre: "Tanjiro Kamado Demon Slayer Kimetsu No Yaiba Sentada", stock: 10, precio: 7990, id: "1", idCat: "Figuras", img: "../imagenes/DemonSlayerTanjiro.webp", detalle: "Hermosa figura de Tanjiro Kamado de Demon Slayer, la posición de la figura es como se ve en la imagen Sentada, así que podrás colocar la figura en la superficie que prefieras. Perfecta para decorar espacios. Características: Material: Pvc/Plástico. Altura: 14 cm aproximadamente. No posee base, es para colocarla sentada en la superficie que prefieras. Edad recomendada: 8 años en adelante." },
    { nombre: "Shinobu Kocho Demon Slayer Kimetsu No Yaiba Blister", stock: 10, precio: 4760, id: "2", idCat: "Figuras",img: "../imagenes/ShinobuKocho.webp", detalle: "Hermosa figura de Shinobu Kocho de Demon Slayer, la posicion de la figura es como se ve en la imagen Sentada, así que podrás colocar la figura en la superficie que prefieras. Perfecta para decorar espacios. La figura viene sin caja. Viene empacada en blister. Características:Material: Pvc/Plástico. Altura: 14 cm aproximadamente. No posee base, es para colocarla en la superficie que prefieras.La figura no incluye caja. Edad recomendada: 8 años en adelante." },
    { nombre: "Kanroji Mitsuri Demon Slayer Kimetsu No Yaiba Sentada", stock: 10, precio: 7990, id: "3", idCat: "Figuras", img: "../imagenes/Kanroji.webp", detalle: "Figura Kimetsu No Yaiba Demon Slayer. Características: Personaje: Mitsuri Altura: 13 cm. Material: PVC/ Plástico. Excelente Calidad. Viene en bolsa sellada y trae su caja." },
    { nombre: "Kimetsu No Yaiba Rengoku Onigiri Demon Slayer", stock: 10, precio: 8500, id: "4",  idCat: "Figuras",img: "../imagenes/Rengoku.webp", detalle: "Figura Kimetsu No Yaiba Rengoku Onigiri Demon Slayer. Características: Personaje: Rengoku. Altura: 13 cm. Material: PVC/ Plástico. Excelente Calidad. Importado. Viene en bolsa sellada y trae su caja." },
    { nombre: "Inosuke Demon Slayer Kimetsu No Yaiba Sentada", stock: 10, precio: 7990, id: "5",  idCat: "Figuras",img: "../imagenes/Inosuke.webp", detalle: "Figura Kimetsu No Yaiba Inosuke Onigiri Demon Slayer. Características: Personaje: Inosuke. Alltura: 10 cm.  Material: PVC/ Plástico. Excelente Calidad. Importado. Viene en bolsa sellada y trae su caja." },
    { nombre: "Remera Sailor Meown!", precio: 6450, id: "6",idCat: "Remeras", stock: 15, img: "../imagenes/remerasailor.webp", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
    { nombre: "Remera ThunderPaws!", precio: 6450, id: "7",idCat: "Remeras", stock: 15, img: "../imagenes/remerathundercats.webp", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
    { nombre: "Remera Spider Cat!", precio: 6450, id: "8", idCat: "Remeras",stock: 15, img: "../imagenes/remeraspider.webp", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
    { nombre: "Remera Gatito Oriental Tanjiro!", precio: 6450, id: "9",idCat: "Remeras", stock: 15, img: "../imagenes/remeratanjiro.png", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
    { nombre: "Remera Gatito Nezuko!", precio: 6450, id: "10",idCat: "Remeras", stock: 15, img: "../imagenes/remeranezuko.png", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
    { nombre: "Demon Slayer Figuras Set X 8 - 7 Cm", stock: 5, precio: 7900, id: "11", idCat: "Ofertas",img: "../imagenes/setdemon.webp", detalle: "Set Figuras Demon Slayer x 8 Pcs.No se venden por separado. Presentación: Bolsita Altura: 7 cm. Base de apoyo: 3 cm de diámetro." },
    { nombre: "Remera Gato Samurai Mascara", stock: 8, precio: 7900, id: "12",idCat: "Ofertas", img: "../imagenes/gatosamurai.png", detalle: "Remeras con telas de primera calidad, Algodón 100% Premium. de textura suave estampadas en impresión digital  (impresión directa sobre la tela).Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de reeb al tono. Tapacostura 2AG Fino con hilos de algodón en mangas y cintura. Detalle de Talles: (Ancho x Largo) S:: 48 X 60,M:: 49 X 65,L:: 52 X 66,XL::. 54 X 68, XX:: 56 X 70" },
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)

    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}


