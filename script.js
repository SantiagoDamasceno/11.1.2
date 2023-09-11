const URL = 'https://randomuser.me/api/';

function generarUsuario(){
 fetch(URL)
  .then(response => response.json())
  .then(data=>data.results)
  .then(data=>{
    let datos=data
    let contenido = document.getElementById('content');
    
    datos.forEach(inf => {
        let genero = ()=>{
            if (inf.gender==='female'){
                return "Mujer";
            }else{
                return "Hombre";
            }
            }
            contenido.innerHTML+= `<div class="row">
             <div class="col">
             <div class="card m-3">
              <img src="${inf.picture.large}" class="card-img-top" alt="Imagen de perfil">
              <div class="card-body">
                <h5 class="card-title">${inf.name.title+ ". "+inf.name.first + " "+inf.name.last}</h5>
                <hr>
                <p class="card-text">Edad: ${inf.dob.age}</p>
                <p class="card-text">Género: ${genero()}</p>
                <p class="card-text">Fecha de nacimiento: ${inf.dob.date}</p>
                <hr>
                <p class="card-text">Nacionalidad: ${inf.nat}</p>
                <p class="card-text">País: ${inf.location.country}</p>
                <p class="card-text">Ciudad: ${inf.location.city}</p>
                <p class="card-text">Código Postal: ${inf.location.postcode}</p>
                <p class="card-text">Estado: ${inf.location.state}</p>
                <p class="card-text">Calle: ${inf.location.street.name}, Número: ${inf.location.street.number}</p>
                <hr>
                <p class="card-text"><strong>Contacto</strong></p>
                <p class="card-text">Celular: ${inf.cell}</p>
                <p class="card-text">Teléfono: ${inf.phone}</p>
                <p class="card-text">Email: ${inf.email}</p>
              </div>
            </div>
          </div>
        </div>`
        });
    console.log(datos)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
  document.addEventListener('DOMContentLoaded',()=>{
       const btn = document.getElementById('generarBtn');
       btn.addEventListener('click',()=>{
        generarUsuario()
       })
  
  })