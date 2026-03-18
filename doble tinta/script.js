// FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDG57XIg4afTgh44h4mPPASZPxE_rU5MJE",
  authDomain: "doble-tinta.firebaseapp.com",
  projectId: "doble-tinta",
  storageBucket: "doble-tinta.firebasestorage.app",
  messagingSenderId: "157366783090",
  appId: "1:157366783090:web:65aa5644929081441686eb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contenedor = document.querySelector(".galeria");

// CARGAR PRODUCTOS
async function cargarProductos(){

contenedor.innerHTML = "";

const querySnapshot = await getDocs(collection(db, "productos"));

querySnapshot.forEach((doc)=>{

let p = doc.data();

contenedor.innerHTML += `
<div class="producto ${p.categoria}">

<img src="${p.imagen}">

<h3>${p.nombre}</h3>

<a class="comprar"
href="https://wa.me/5491166695180?text=Hola quiero comprar ${p.nombre}">
Comprar
</a>

</div>
`;

});

}

cargarProductos();

// FILTRO
window.filtrar = function(categoria){

let productos = document.querySelectorAll(".producto");

productos.forEach(p => {

if(categoria === "todos"){
p.style.display = "block";
}else{
p.style.display = p.classList.contains(categoria) ? "block" : "none";
}

});

document.getElementById("productos").scrollIntoView({
behavior:"smooth"
});

}