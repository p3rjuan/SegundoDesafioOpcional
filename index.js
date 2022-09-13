class Manga {
    constructor(titulo, precioCompra, cantidad) {
      this.titulo = titulo.toUpperCase();
      this.precioCompra = precioCompra;
      this.cantidad = cantidad;
    }
    gastoStock = () => this.cantidad * this.precioCompra;
  }
  
  function agregarMangas() {
    let numeroDeMangas = parseInt(
      prompt("Cuantos mangas quiere ingresar")
    );
    let mangas = [];
    for (let index = 0; index < numeroDeMangas; index++) {
      let titulo = prompt("Ingrese el titulo del manga");
      let precioCompra = prompt("Ingrese el precio de compra");
      let cantidad = prompt("Ingrese la cantidad");
      let mangaARegistrar = new Manga(
        titulo,
        precioCompra,
        cantidad
      );
      mangas.push(mangaARegistrar);
    }
    return mangas;
  }
  
  function gastosDeStock(mangas) {
    let sumatoriaStock = 0;
    for (const Manga of mangas) {
      sumatoriaStock += Manga.gastoStock();
    }
    return sumatoriaStock;
  }
  
  function main() {
    let mangas = agregarMangas();
    let stock = gastosDeStock(mangas);
    alert("Se gasto" + " " + stock + " $ en reponer el stock");
  }
  
  main();