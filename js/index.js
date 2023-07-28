/*ARRAY PRODUCTOS*/
function producto (nombre, color, precio, img){
    this.nombre = nombre;
    this.color = color;
    this.precio = precio; 
    this.img = img;}

const array_productos = [
new producto("BIDON BLACK","NEGRO",4500,"../img/1A.png"), 
new producto("BIDON PURPLE","VIOLETA",4500,"../img/2A.png"),
new producto("BIDON NEON","AMARILLO",4500,"../img/3A.png"),
new producto("BIDON PINK","ROSA",4500,"../img/4A.png"),
new producto("BIDON CAMEL","BEIGE",4500,"../img/5A.png"),
new producto("BARRAS ENERGETICAS"," ",5000,"../img/Promo_King.png"),];

/*ARRAY CARRITO*/
let array_carrito = JSON.parse( localStorage.getItem("carrito")) || [];

/*BOTON COMPRAR*/
const buttons_comprar = document.querySelectorAll(".button_comprar");
buttons_comprar.forEach((button) => {
    button.addEventListener("click", (e) => {
        const producto_index = e.target.getAttribute('data-index');
        array_carrito.push(array_productos[producto_index]);
        localStorage.setItem('carrito', JSON.stringify(array_carrito));})})

/*CARRITO*/
const button_carrito = document.querySelector("#button_carrito")
function actualizar_carrito(){
    const carrito_container = document.querySelector("#carrito_container");
    if(carrito_container !== null){
        carrito_container.innerHTML = '';
        array_carrito.forEach((producto) => {
            const producto_carrito = document.createElement('div');
            producto_carrito.innerHTML = `<div class="card mb-3 bidones_space" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="bidon_black">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title h3_productos">${producto.nombre}</h3>
                        <h4 class="card-text h4_productos">$${producto.precio}</h4>
                        <p class="card-text parrafo_productos"><small class="text-body-secondary">Capacidad de 1.6L
                                con peso con líquido de 1.6KG</small></p>
                        <p class="card-text parrafo_productos"><small class="text-body-secondary">Banda que evita
                                pérdida de tapa y Manija
                                ergonómica </small></p>
                        <p class="card-text parrafo_productos"><small class="text-body-secondary">Tapa con
                                tecnología antiderrame</small></p>
                        <p class="card-text parrafo_productos"><small class="text-body-secondary">Material de
                                plástico resistente</small></p>
                    </div>
                </div>
            </div>
        </div>`
        carrito_container.appendChild(producto_carrito);});}}
actualizar_carrito();

/*BOTON FINALIZAR COMPRA*/
const sumbit = document.querySelector("#sumbit");
if (sumbit){
    sumbit.addEventListener("click",() => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'LISTO!',
            text: 'Tu pedido va en camino',
            showConfirmButton: false,
            timer: 1800,})});}

     