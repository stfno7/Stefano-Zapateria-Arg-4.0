/** CAMBIAR TEXTO HEADER **/
let headerText = document.getElementById("header-text"); /** ID, TEMA PROPUESTO EN CLASE */
let texto = ["3 cuotas sin interés", "Envíos gratis a partir de $40.000 🚀"];
let currentTextIndex = 0;

setInterval(()=>{ /** FUNCION FLECHA */
  currentTextIndex = (currentTextIndex + 1) % texto.length;
  headerText.textContent = texto[currentTextIndex];
}, 3000);
/** CAMBIAR TEXTO HEADER **/


/** TABLA DE TALLES, DECORACIÓN **/
const abrirModal = document.getElementById('abrir-modal');
const cerrarModal = document.getElementById('cerrar-modal');
const modal = document.getElementById('modal');

abrirModal.addEventListener('click', function() {
  modal.style.display = 'block';
});

cerrarModal.addEventListener('click', function() {
  modal.style.display = 'none';
});
/** TABLA DE TALLES, DECORACIÓN **/


/** MOSTRAR MENU HAMBURGUESA */
const menuToggle = document.querySelector('.menu-toggle'); /** ARCHIVO AGARRADO DEL DOM CON UNA CLASS */
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
/** MOSTRAR MENU HAMBURGUESA */


/** SLICK DE IMAGEN */
$(document).ready(function(){
  $('.imagen-slider').slick({  
    dots: true,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 7000, 
    speed: 1000 
  });
});
/** SLICK DE IMAGEN */



/** GOOGLE MAPS FOOTER */
(function () {
  var setting = {"height":300,"width":700,"zoom":12,"queryString":"Necochea, Buenos Aires, Argentina","place_id":"ChIJ6ekwQ0O9j5URIrNvJ5nA9wc","satellite":false,"centerCoord":[-38.56055577919007,-58.75627616512008],"cid":"0x7f7c099276fb322","lang":"en","cityUrl":"/argentina/necochea-41511","cityAnchorText":"Map of Necochea, Buenos Aires, Argentina","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"902050"};
  var d = document;
  var s = d.createElement('script');
  s.src = 'https://1map.com/js/script-for-user.js?embed_id=902050';
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting)
  };
  var to = d.getElementsByTagName('script')[0];
  to.parentNode.insertBefore(s, to);
})();
