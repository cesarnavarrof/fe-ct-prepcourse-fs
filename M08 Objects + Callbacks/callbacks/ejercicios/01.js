function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
   function devuelvoUsuario() {
      return 'CAMILO';
   }
   function devuelvoSaludo() {
      return 'Hola';
   }
   function saludar(cb1, cb2) {
      return cb1() + ' ' + cb2();
   }
}

module.exports = invocarCallback;
