/*--CONTACTO--*/
/*FORMULARIO*/
const base_datos = [
  {nombre: 'Hernan', telefono: '3517598564'},
  {nombre: 'Vicki', telefono: '3515550000'},];
const consulta = { nombre: '', telefono: '' };
const formulario = document.getElementById("form");
const mensaje = mensaje => {app.innerHTML = `<h2 class='h2'> YA HIZO SU CONSULTA ANTERIORMENTE, LA RESPONDEREMOS EN LA BREVEDAD ${mensaje}</h2>`};
   

formulario.addEventListener("submit", (e) => {
     e.preventDefault();
     const consulta_encontrada = base_datos.find(el => el.nombre === consulta.nombre && el.telefono === consulta.telefono);
     
     if(consulta_encontrada){
       mensaje(consulta_encontrada.nombre);
       localStorage.setItem("autenticacion", JSON.stringify({ name: consulta_encontrada.nombre, isLogin: true }));
     }else{
       console.log("Nombre:", consulta.nombre);
       console.log("Teléfono:", consulta.telefono);
       
       const consultas_guardadas = localStorage.getItem("consultas");
       const consultas_nuevas = consultas_guardadas ? JSON.parse(consultas_guardadas) : [];
       consultas_nuevas.push({ nombre: consulta.nombre, telefono: consulta.telefono });
       localStorage.setItem("consultas", JSON.stringify(consultas_nuevas));
     }
   });
   
const consultas_guardadas = localStorage.getItem("consultas");
const consultas_nuevas = consultas_guardadas ? JSON.parse(consultas_guardadas) : [];
console.log("Consultas guardadas:", consultas_nuevas);
   
const inputs = document.querySelectorAll("input");
     
inputs.forEach((element) => {
  element.addEventListener("input", (e) => {
  if (e.target.name === "nombre") { consulta.nombre = e.target.value; }
  if (e.target.name === "telefono") { consulta.telefono = e.target.value; }
  if (e.target.name === 'mensaje') { consulta.mensaje = e.target.value; }});});
   