/*ARRAY PRODUCTOS*/
function producto (id, nombre, color, precio, img){
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.precio = precio; 
    this.img = img;}

const array_productos = [
new producto(0,"BIDON BLACK","NEGRO",4500,"../img/1A.png"), 
new producto(1,"BIDON PURPLE","VIOLETA",4500,"../img/2A.png"),
new producto(2,"BIDON NEON","AMARILLO",4500,"../img/3A.png"),
new producto(3,"BIDON PINK","ROSA",4500,"../img/4A.png"),
new producto(4,"BIDON CAMEL","BEIGE",4500,"../img/5A.png"),
new producto(5,"BARRAS ENERGETICAS"," ",5000,"../img/Promo_King.png"),];

/*ARRAY CARRITO*/
let array_carrito = JSON.parse( localStorage.getItem("carrito")) || [];

/*BOTON COMPRAR*/
const buttons_comprar = document.querySelectorAll(".button_comprar");
buttons_comprar.forEach((button) => {
    button.addEventListener("click", (e) => {
        const producto_index = e.target.getAttribute('data-index');
        array_carrito.push(array_productos[producto_index]);
        localStorage.setItem('carrito', JSON.stringify(array_carrito));
        actualizar_carrito();
        window.location.href = "../pages/carrito.html";})})

/*BOTON CARRITO*/
const button_carrito = document.querySelector("#button_carrito")
function actualizar_carrito() {
    const carrito_container = document.querySelector("#carrito_container");
    if (carrito_container !== null) {
        carrito_container.innerHTML = '';
        array_carrito.forEach((producto, index) => {
            const producto_carrito = document.createElement('div');
            producto_carrito.classList.add("card", "mb-3", "bidones_space");
            producto_carrito.style.maxWidth = "600px";
            producto_carrito.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="bidon_color">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title h3_productos">${producto.nombre}</h3>
                            <h4 class="card-text h4_productos">$${producto.precio}</h4>
                            <p class="card-text parrafo_productos"><small class="text-body-secondary">Capacidad de 1.6L con peso con líquido de 1.6KG</small></p>
                            <p class="card-text parrafo_productos"><small class="text-body-secondary">Banda que evita pérdida de tapa y Manija ergonómica </small></p>
                            <p class="card-text parrafo_productos"><small class="text-body-secondary">Tapa con tecnología antiderrame</small></p>
                            <p class="card-text parrafo_productos"><small class="text-body-secondary">Material de plástico resistente</small></p>
                        </div>
                    </div>
                </div>`;

/*BOTON DELETE*/
const buttons_delete = document.createElement("button");
buttons_delete.classList.add("button_delete", "button_comprar");
buttons_delete.textContent = "X";
buttons_delete.dataset.index = producto.dataindex;
buttons_delete.addEventListener("click", function() {
    array_carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(array_carrito));
    actualizar_carrito();});
producto_carrito.querySelector('.card-body').appendChild(buttons_delete);
carrito_container.appendChild(producto_carrito);});}
}if (window.location.pathname.endsWith('/carrito.html')) {actualizar_carrito();}

/*NOTICICACION DATA CARRITO*/
let total_carrito = array_carrito.reduce((acumulador,el) => acumulador + el.precio ,0) 
const string_producto = array_carrito.length > 1 ? "PRODUCTOS" : "PRODUCTO"

button_carrito.addEventListener('click',(e) => {
e.preventDefault();
Toastify({
    text: `TENES ${array_carrito.length} ${string_producto} CON UN TOTAL DE $${total_carrito}`,
    duration: 1000,
    close: false,
    stopOnFocus: true,}).showToast();})

/*BOTON FINALIZAR COMPRA*/
const sumbit = document.querySelector("#sumbit");
if (sumbit){
    sumbit.addEventListener("click",() => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'LISTO!',
            text: `Tu pedido va en camino -TOTAL $${total_carrito}-` ,
            showConfirmButton: false,
            timer: 1800,
            didClose: () => {
                array_carrito = [];
                localStorage.removeItem('carrito');  
                location.reload();}});});}

     