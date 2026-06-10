/**
 * Helpers y constantes compartidas.
 * Importa esto en tus tests para no repetir codigo y usar los mismos valores.
 *
 * Ejemplo de uso:
 *   const { API, generarUsuario } = require('./helpers');
 */

// URLs base
const API = 'https://api.demoblaze.com';
const WEB = 'https://www.demoblaze.com';

// Credenciales QA para tests
const QA_CREDENTIALS = {
  username: 'qaProductBrowsing',
  password: 'qapb12345',
};


module.exports = {
  API,
  WEB,
  QA_CREDENTIALS,
};