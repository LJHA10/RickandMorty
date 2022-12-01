import { showModal, navegacion, loadData, urlBase } from './app.js';

loadData(urlBase);
document.querySelector('#respuesta').addEventListener('click', showModal);
document.querySelector('.botones').addEventListener('click', navegacion);