const modal = document.querySelector('.modal__container');



// function addEvent(obj, evt, fn) {
//   if (obj.addEventListener) {
//     obj.addEventListener(evt, fn, false);
//   }
//   else if (obj.attachEvent) {
//     obj.attachEvent("on" + evt, fn);
//   }
// }
// addEvent(window, "load", function (e) {
//   addEvent(document, "mouseout", function (e) {
//     e = e ? e : window.event;
//     var from = e.relatedTarget || e.toElement;
//     if (!from || from.nodeName == "HTML") {
//       // Aqui você coloca o seu popup
//       // modal.classList.add('active');
//     }
//   });
// });

// function closeModal() {
//   modal.classList.remove('active')
// }

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})