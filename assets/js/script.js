// // <!-- 1. Una agencia de viajes desea llevar un control de todos los servicios de turismo que ofrece. 
// // La agencia presta servicios de reserva de paquetes turísticos, y ofrece 3 diferentes, de los 
// // cuales se tiene el comportamiento: 
// // a. Para el paquete 1 se hace una reserva a la ciudad de México, la cantidad de 
// // personas debe ser mínimo 3 y máximo 5, el valor por persona es de 5.000.000
// // b. Para el paquete 2 se hace una reserva a la ciudad de Brasil, solo pueden viajar 2 
// // personas y ninguna de ellas debe ser menor de edad. El valor del viaje por persona 
// // es de 4.500.000
// // c. Para el paquete 3 se hace una reserva a la ciudad de Ámsterdam, máximo para 2 
// // persona. El valor por persona es de 7.500.000, y si alguna persona es menor de 
// // edad se le hace un descuento del 25%
// // Finalizando el día, es necesario mostrar las ganancias por cada paquete, mostrar cuentas 
// // personas viajarán a México, cuantas viajarán a Ámsterdam y cuantas a Brasil. Mostrar 
// // cuantas personas son menores de edad
// // Recordar que es necesario almacenar la información de las personas que viajan (nombre, 
// // documento, teléfono y edad) ya que debe existir una función que muestre la información 
// // de las personas que se han registrado -->



// // <!-- definir variables -->


 
function abrirVentana_a() {
    let url = "/assets/mexico.html";
    if (url) {
      window.open(url, "_blank", "width=600,height=470");
    }
  }
  function abrirVentana_b() {
    let url = "/assets/brasil.html";
    if (url) {
      window.open(url, "_blank", "width=600,height=470");
    }
  }
  function abrirVentana_c() {
    let url = "/assets/amsterdam.html";
    if (url) {
      window.open(url, "_blank", "width=600,height=470");
    }
  }




