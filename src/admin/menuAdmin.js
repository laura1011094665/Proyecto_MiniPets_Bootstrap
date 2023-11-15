import { LitElement, html } from "lit-element";
import index_styles from "../index_styles"  

export class MenuAdmin extends LitElement{
  //ESTILOS
    static get styles(){
        return[index_styles]
    }
    abrirModal() {

      const miModal = this.shadowRoot.querySelector("#miModal");
      miModal.style.display = "block";
    }
  
    cerrarModal() {
      const miModal = this.shadowRoot.querySelector("#miModal");
      miModal.style.display = "none";
    }
    abrirModal1() {

      const miModal = this.shadowRoot.querySelector("#miModal");
      miModal.style.display = "block";
    }
  
    cerrarModal1() {
      const miModal = this.shadowRoot.querySelector("#miModal");
      miModal.style.display = "none";
    }

    //TIPOS DE DATOS
    constructor(){
      super();
      this.usuarios = [];
      this.nombre = "";
      this.apellido = "";
      this.telefono = "";
      this.direccion = "";
      this.password = "";
      this.identificacion = "";
      this.email = "";
      this.info = "";
      this.mostrarFormularioEdicion = false;
      this.mascotas=[];
      this.nombreM='';
      this.especieM='';
      this.razaM='';
      this.pesoM='';
      this.edadM='';
      this.imagenM='';
      this.id='';

    }
  static get properties() {
    return {
      usuarios: { type: Array },
      nombre: { type: String },
      apellido: { type: String },
      telefono: { type: Number },
      direccion: { type: String },
      password: { type: String },
      identificacion: { type: Number },
      email: { type: String },
      mostrarFormularioEdicion: { type: Boolean },
      mascotas: { type: Array },
    nombreM: { type: String },
    especieM: { type: String },
    razaM: { type: String },
    pesoM: { type: Number },
    edadM: { type: Number },
    imagenM: { type: String },
    id: { type: Number },
    estado: { type: Text },
    }
  }
   guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value,
    localStorage.apellido = document.getElementById("apellido").value,
    localStorage.telefono = document.getElementById("telefono").value,
    localStorage.direccion = document.getElementById("direccion").value,
    localStorage.password = document.getElementById("password").value,
    localStorage.identificacion = document.getElementById("identificacion").value,
    localStorage.email = document.getElementById("email").value
};

 recuperarDatos() {
  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
      document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
  } else {
      document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
}


    //PAGINAS DE MENU
    bienvenido(y){
      if (y===0){
        this.info =html`
        <div class='bg-color-dark  d-flex flex-column m-3 cont1'>
          <div class='cont2  rounded d-flex justify-content-center align-items-center flex-column'>
            <h1 class='color'>Bienvenido administrador...</h1>
          </div>
            <img class='img rounded' src='https://www.eltiempo.com/files/article_main_1200/uploads/2019/12/13/5df4525ec3073.jpeg'>
        </div>
        </div>
        `
        this.requestUpdate();
  
      }
    }
    connectedCallback() {
      super.connectedCallback();
      // Llama a la función informacion(0) cuando el componente se conecta al DOM.
      this.bienvenido(0);
    }
    //comienzo de crud de usu

    //actualizar usu



    


    //consultar usuario
    consultarUsu(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content1 rounded'>
          <div class='m-3'>
          <button class='' @click="${() => this.registrarUsu(2)}">Registrar Usuario</button>
          <table class=' posicion table table-striped table-bordered w-100'>
            <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Direccion</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          ${this.usuarios.map(
            (usuario) => html`
              <tr>
                <td>${usuario.identificacion}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.telefono}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.direccion}</td>
                <td>
                <button @click="${() => this.abrirModal()}" class="w-100 m-2  border buton p-2 rounded border-10"> Actualizar</button>
                <div id="miModal" class="modal">
                  <div class="modal-dialog">
                    <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                      <button class='bg-dark  bg-transparent border-0' @click="${this.cerrarModal}">X</button>
                        <div>
                          <label class='font'>Numero de Identificacion:</label><br>
                          <input class='w-100 rounded  bg-none border' id='actualizarIdentifi' .value='${usuario.identificacion}' type="text"><br><br>
                          <label class='font'>Nombres:</label><br>
                          <input class='w-100 rounded  bg-none border' id='actualizarNom' .value='${usuario.nombre}' type="text"><br><br>
                          <label class='font'>Apellidos:</label><br>
                          <input class='w-100 rounded  bg-none border' id='actualizarApell' .value='${usuario.apellido}' ><br><br>
                          <label class='font'>Telefono:</label><br>
                          <input class='w-100 rounded  bg-none border'id='actualizarTel' .value='${usuario.telefono}' type="text" ><br> <br>
                          <label class='font'>Correo:</label><br>
                          <input class='w-100 rounded  bg-none border'id='actualizarEmail' .value='${usuario.correo}' type="text"><br><br>
                          <label class='font'>Direccion:</label><br> 
                          <input class='w-100 rounded  bg-none border'id='actualizardirec' .value='${usuario.direccion}' type="text" ><br><br>
                          <label class='font'>Contraseña:</label><br> 
                          <input class='w-100 rounded  bg-none border'id='actualizarPass' .value='${usuario.password}' type="text" ><br><br>
                          <button type="button" class="btn btn-dark d-flex m-1 font" @click="${() => this.actualizarUsuario()}">Actualizar  <i class="fas fa-plus fa-beat-fade"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td>
                  <button type="button" class="w-100 m-2  border buton p-2 rounded border-10" @click="${() => this.eliminarUsu(usuario.identificacion)}">Eliminar</button></td>
                  </tr>`
                  )} 
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
  }

  //registro del usuario por el administrador
  registrarUsu(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content rounded'>
          <div class='m-3'>
            <h1 class='mr-3 font'>Registrate</h1>
            <br>
            <label class='font'>Numero de Identificacion:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.identificacion}" @input="${(e) => (this.identificacion = e.target.value)}" type="text"><br><br>
            <label class='font'>Nombres:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}" type="text"><br><br>
            <label class='font'>Apellidos:</label><br>
            <input class='w-100 rounded bg-none border' type="text" .value="${this.apellido}" @input="${(e) => (this.apellido = e.target.value)}"><br><br>
            <label class'font'>Telefono:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.telefono}" @input="${(e) => (this.telefono = e.target.value)}" type="text"><br> <br>
            <label class='font'>Correo:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.email}" @input="${(e) => (this.email = e.target.value)}" type="text"><br><br>
            <label class='font'>Direccion:</label><br> 
            <input class='w-100 rounded bg-none border' .value="${this.direccion}" @input="${(e) => (this.direccion = e.target.value)}" type="text"><br><br>
            <label class='font'>Contraseña:</label><br> 
            <input class='w-100 rounded bg-none border' .value="${this.password}" @input="${(e) => (this.password = e.target.value)}" type="text"><br><br>
            <button class="btn btn-dark d-flex m-1 font" @click="${() => this.registrarUsuarios()}">Registrar  <i class="fas fa-plus fa-beat-fade"></i></button>
          </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
}

  registrarUsuarios() {
    if (this.nombre && this.apellido && this.telefono && this.email && this.direccion && this.password) {
      const nuevoUsuario = {
        identificacion: this.identificacion,
        nombre: this.nombre,
        apellido: this.apellido,
        telefono: this.telefono,
        correo:this.email,
        direccion: this.direccion,
        password: this.password,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];
      console.log(this.usuarios);
      this.identificacion = "";
      this.nombre = "";
      this.apellido = "";
      this.telefono = "";
      this.email="";
      this.direccion = "";
      this.password = "";
    } else {
      console.log('nose puo')
    }
  }
  //eliminarusu

  eliminarUsu(identificacion) {
    console.log("Identificacion a eliminar:", identificacion);

    const index = this.usuarios.findIndex((usuario) => usuario.identificacion === identificacion);
    if (index !== -1) {
        console.log("Usuario encontrado en el índice:", index);
        this.usuarios.splice(index, 1);
        console.log("Usuarios después de la eliminación:", identificacion);
        this.requestUpdate();
        this.consultarUsu(2);
    } else {
        console.log("Usuario no encontrado");
    }
}

  //actualizar usuario
  actualizarUsuario() {
    // Obtiene el valor de la identificación del input
    let identificacion = this.shadowRoot.querySelector('#actualizarIdentifi').value;
    let nombre = this.shadowRoot.querySelector('#actualizarNom').value;
    let apellido = this.shadowRoot.querySelector('#actualizarApell').value;
    let telefono = this.shadowRoot.querySelector('#actualizarTel').value;
    let email = this.shadowRoot.querySelector('#actualizarEmail').value;
    let direccion = this.shadowRoot.querySelector('#actualizardirec').value;
    let password = this.shadowRoot.querySelector('#actualizarPass').value;

    // Encuentra el usuario en el array por su identificación
    let usuario = this.usuarios.find((usuario) => usuario.identificacion == identificacion);

    // Actualiza las propiedades del usuario
    if (usuario) {
        usuario.identificacion = identificacion;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.telefono = telefono;
        usuario.correo = email;
        usuario.direccion = direccion;
        usuario.password = password;

        console.log(usuario); // Muestra el usuario actualizado en la consola
        this.requestUpdate(); // Actualiza la vista si es necesario
        this.cerrarModal();
        this.consultarUsu(2);

      } else {
        console.log('Usuario no encontrado'); // Manejar el caso en que el usuario no se encuentre
    }
}
  //fin crud usu
  //mascotas

  // consultar mascotas
  mascotasCard(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content2 rounded'>
        <button class='button" class="w-100 m-2  border buton p-2 rounded border-10'  @click="${() => this.registrarMascota(2)}" >Registrar</button>
          <div class='m-3'>
            <div class="container text-center">
              <div class="row"><div class="row">
              ${this.mascotas.map(
                (mascota) => html`
                  <div class="col">
                    <div class="card" style="width: 18rem;">
                      <img src="${mascota.imagen}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${mascota.nombre}</h5>
                        <!-- Otros detalles de la mascota -->
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">${mascota.especie}</li>
                        <li class="list-group-item">${mascota.raza}</li>
                        <li class="list-group-item">${mascota.edad} años</li>
                        <li class="list-group-item">${mascota.peso}</li>
                      </ul>
                      <div class="card-body">
                      <button type="button" class="w-100 m-2  border buton p-2 rounded border-10" @click="${() => this.eliminarMascota(mascota.id)}">Eliminar</button></td>
                        <button @click="${() => this.abrirModal1()}" class="w-100 m-2  border buton p-2 rounded border-10"> Actualizar</button>
                <div id="miModal" class="modal">
                  <div class="modal-dialog">
                    <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                      <button class='bg-dark  bg-transparent border-0' @click="${this.cerrarModal1}">X</button>
                        <div>
                        
                        <label class='font'>id:</label><br>
                        <input class='w-100 rounded  bg-none border' id='idM' .value='${mascota.id}' type="text"><br><br>
                          <label class='font'>Nombre:</label><br>
                          <input class='w-100 rounded  bg-none border' id='nombreM' .value='${mascota.nombre}' type="text"><br><br>
                          <label class='font'>especie:</label><br>
                          <input class='w-100 rounded  bg-none border' id='especieM' .value='${mascota.especie}' type="text"><br><br>
                          <label class='font'>raza:</label><br>
                          <input class='w-100 rounded  bg-none border' id='razaM' .value='${mascota.raza}' ><br><br>
                          <label class='font'>peso:</label><br>
                          <input class='w-100 rounded  bg-none border'id='pesoM' .value='${mascota.peso}' type="text" ><br> <br>
                          <label class='font'>edad:</label><br>
                          <input class='w-100 rounded  bg-none border'id='edadM' .value='${mascota.edad}' type="text"><br><br>
                          <label class='font'>imagen:</label><br> 
                          <input class='w-100 rounded  bg-none border'id='imagenM' .value='${mascota.imagen}' type="text" ><br><br>
                          <button type="button" class="btn btn-dark d-flex m-1 font" @click="${() => this.actualizarMascota()}">Actualizar  <i class="fas fa-plus fa-beat-fade"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                `
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
  }
  //registrar mascota
  
  // Dentro de la clase MenuAdmin
registrarMas() {
  if (this.id &&this.nombreM && this.especieM && this.razaM && this.pesoM && this.edadM  && this.imagenM) {
    const nuevaMascota = {
      id: this.id,
      nombre: this.nombreM,
      especie: this.especieM,
      raza: this.razaM,
      peso: this.pesoM,
      edad: this.edadM,
      imagen: this.imagenM,
    };

    // Agrega la nueva mascota al array de mascotas
    this.mascotas = [...this.mascotas, nuevaMascota];

    // Limpia los campos del formulario
    this.id="";
    this.nombreM = "";
    this.especieM = "";
    this.razaM = "";
    this.pesoM = "";
    this.edadM = "";
    this.imagenM = "";
  } else {
    console.log('No se pueden dejar campos vacíos');
  }
}

  registrarMascota(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content rounded'>
          <div class='m-3'>
            <h1 class='mr-3 font'>Registra Una Mascota</h1>
            <br>
            <label class='font'>ID:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.id}" @input="${(e) => (this.id = e.target.value)}" type="text"><br><br>
            <label class='font'>Nombre:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.nombreM}" @input="${(e) => (this.nombreM = e.target.value)}" type="text"><br><br>
            <label class='font'>Especie:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.especieM}" @input="${(e) => (this.especieM = e.target.value)}" type="text"><br><br>
            <label class='font'>Raza:</label><br>
            <input class='w-100 rounded bg-none border' type="text" .value="${this.razaM}" @input="${(e) => (this.razaM = e.target.value)}"><br><br>
            <label class'font'>Peso:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.pesoM}" @input="${(e) => (this.pesoM = e.target.value)}" type="text"><br> <br>
            <label class='font'>Edad:</label><br>
            <input class='w-100 rounded bg-none border' .value="${this.edadM}" @input="${(e) => (this.edadM = e.target.value)}" type="text"><br><br>
            <label class='font'>Imagen:</label><br> 
            <input class='w-100 rounded bg-none border' .value="${this.imagenM}" @input="${(e) => (this.imagenM = e.target.value)}" type="text"><br><br>
            <button class="btn btn-dark d-flex m-1 font" @click="${() => this.registrarMas(2)}">Registrar  <i class="fas fa-plus fa-beat-fade"></i></button>
            </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
}
//actualizar mascota

actualizarMascota() {
  // Obtiene el valor de la identificación del input
  let id = this.shadowRoot.querySelector('#idM').value;
  let nombre = this.shadowRoot.querySelector('#nombreM').value;
  let especie = this.shadowRoot.querySelector('#especieM').value;
  let raza = this.shadowRoot.querySelector('#razaM').value;
  let peso = this.shadowRoot.querySelector('#pesoM').value;
  let edad = this.shadowRoot.querySelector('#edadM').value;
  let imagen = this.shadowRoot.querySelector('#imagenM').value;

  // Encuentra el usuario en el array por su identificación
  let mascota = this.mascotas.find((mascota) => mascota.id == id);

  // Actualiza las propiedades del usuario
  if (mascota) {
    mascota.id= id
    mascota.nombre = nombre;
    mascota.especie= especie;
    mascota.raza = raza;
    mascota.peso = peso;
    mascota.edad = edad;
    mascota.imagen = imagen;

      console.log(mascota); // Muestra el usuario actualizado en la consola
      this.requestUpdate(); // Actualiza la vista si es necesario
      this.cerrarModal1();
      this.mascotasCard(2);

    } else {
      console.log('mascota no encontrado'); // Manejar el caso en que el usuario no se encuentre
  }
}
eliminarMascota(id) {
  console.log("id a eliminar:", id);

  const index = this.mascotas.findIndex((mascota) => mascota.id === id);
  if (index !== -1) {
      console.log("mascota encontrado en el índice:", index);
      this.mascotas.splice(index, 1);
      console.log("mascotas después de la eliminación:", id);
      this.requestUpdate();
      this.mascotasCard(2);
  } else {
      console.log("mascota no encontrado");
  }
}


  render() {
    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      </style>
      <div class="d-flex vw-100 vh-100 font">
      <div class="bg-dark  rounded w-15  m-3 border-20 p-3">
      <div class="bg-color-secondary">
      <button @click="${() => this.bienvenido(0)}" class="w-100 mt-5 p-2 border buton rounded border-10">
          <i class="fas fa-user"></i> Inicio
        </button>
        <button @click="${() => this.consultarUsu(2)}" class="w-100 mt-5 p-2 border buton rounded border-10">
          <i class="fas fa-user"></i> Usuarios
        </button>
        <button @click="${() => this.mascotasCard(2)}" class="w-100 mt-5  border buton p-2 rounded border-10">
          <i class="fa-solid fa-paw"></i> Mascotas
        </button>
      </div>
    </div>
        <div class="mt-3 mb-2 m-3" style="border: 1px solid #ccc; padding: 10px;">
                <div class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100">
                    <div class="border-dark col w-50">
                    ${this.info}
                    </div>
                </div>
            </div>
      </div>
    `;
  }
}
customElements.define('menu-admin', MenuAdmin)