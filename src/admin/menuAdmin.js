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
    };
  }

  

}


function guardarDatos() {
  localStorage.nombre = document.getElementById("nombre").value,
  localStorage.apellido = document.getElementById("apellido").value,
  localStorage.telefono = document.getElementById("telefono").value,
  localStorage.direccion = document.getElementById("direccion").value,
  localStorage.password = document.getElementById("password").value,
  localStorage.identificacion = document.getElementById("identificacion").value,
  localStorage.email = document.getElementById("email").value
};

function recuperarDatos() {
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

    
    //eliminar usu


    eliminarUsu(usuario) {
      // Puedes implementar la lógica de eliminación aquí.
      // Encuentra al usuario por su ID y elimínalo del array 'usuarios'.
      const index = this.usuarios.findIndex((u) => u.identificacion === usuario.identificacion);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
        this.requestUpdate();
      }
    }
  
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
                <td><button @click="${() => this.actualizarFormUsu()}" class="w-100 mt-5  border buton p-2 rounded border-10"> Actualizar</button>
                <div id="miModal" class="modal">
                  <div class="modal-dialog">
                    <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                      <button class='color  bg-transparent border-0' @click="${this.cerrarModal}">X</button>
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
                          <input class='w-100 rounded  bg-none border'id='actualizarEmail' .value='${usuario.email}' type="text"><br><br>
                          <label class='font'>Direccion:</label><br> 
                          <input class='w-100 rounded  bg-none border'id='actualizardirec' .value='${usuario.direccion}' type="text" ><br><br>
                          <label class='font'>Contraseña:</label><br> 
                          <input class='w-100 rounded  bg-none border'id='actualizarPass' .value='${usuario.password}' type="text" ><br><br>
                          <button type="button" class="btn btn-dark d-flex m-1 font" @click="${() => this.actualizarUsuario(usuario.identificacion)}">Actualizar  <i class="fas fa-plus fa-beat-fade"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </td>
                  <td><i class="fa-solid fa-trash" @click="${() => this.eliminarUsu()}"></i></td>
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
  eliminarUsu(usuario) {
    const index = this.usuarios.findIndex((u) => u.identificacion === usuario.identificacion);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      this.requestUpdate();
    }
  }
  //actualizar usuario
  actualizarUsuario(){
    console.log(usuario)
    let usuario1= this.usuarios.find((usuario1)=> usuario1.document == usuario)
    
    console.log(usuario1);
    let identificacion = this.shadowRoot.querySelector('#actualizarIdentifi').value
    let nombre = this.shadowRoot.querySelector('#actualizarNom').value
    let apellido = this.shadowRoot.querySelector('#actualizarApell').value
    let telefono= this.shadowRoot.querySelector('#actualizarTel').value
    let email = this.shadowRoot.querySelector('#actualizarEmail')
    let direccion = this.shadowRoot.querySelector('#actualizardirec').value
    let password = this.shadowRoot.querySelector('#actualizarPass').value

    console.log(identificacion,nombre,apellido,telefono,email,direccion, password)

    usuario1.document= identificacion;
    usuario1.document= nombre;
    usuario1.document= apellido;
    usuario1.document= telefono;
    usuario1.document= email;
    usuario1.document= direccion;
    usuario1.document= password;
    this.requestUpdate()
    
  }
  actualizarFormUsu(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content rounded'>
          <div class='m-3'>
          <h1 class='mr-3 font'>Editar Usuario</h1>
          <br>
          <label class='font'>Numero de Identificacion:</label><br>
          <input class='w-100 rounded  bg-none border' id='actualizarIdentifi' .value='${usuario.identificacion}' type="text"><br><br>
          <label class='font'>Nombres:</label><br>
          <input class='w-100 rounded  bg-none border' id='actualizarNom' .value='${usuario.nombre}' type="text"><br><br>
          <label class='font'>Apellidos:</label><br>
          <input class='w-100 rounded  bg-none border' id='actualizarApell' .value='${usuario.apellido}' ><br><br>
          <label class='font'>Telefono:</label><br>
          <input class='w-100 rounded  bg-none border'id='actualizarTel' .value='${usuario.telefono}' type="text" ><br> <br>
          <label class='font'>Correo:</label><br>
          <input class='w-100 rounded  bg-none border'id='actualizarEmail' .value='${usuario.email}' type="text"><br><br>
          <label class='font'>Direccion:</label><br> 
          <input class='w-100 rounded  bg-none border'id='actualizardirec' .value='${usuario.direccion}' type="text" ><br><br>
          <label class='font'>Contraseña:</label><br> 
          <input class='w-100 rounded  bg-none border'id='actualizarPass' .value='${usuario.password}' type="text" ><br><br>
          <button type="button" class="btn btn-dark d-flex m-1 font" @click="${() => this.actualizarUsuario(usuario.identificacion)}">Actualizar  <i class="fas fa-plus fa-beat-fade"></i></button>
        </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
}

  //fin crud usu
  //mascotas
  mascotasCard(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content2 rounded'>
          <div class='m-3'>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-primary">Registrar</button>
                </div>
                <div class="col">
                </div>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">datos</li>
                <li class="list-group-item">datos</li>
                <li class="list-group-item">datos</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link" style="padding: -30px;">Eliminar</a>
                <a href="#" class="card-link" style="padding: -30px>Actualizar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      this.requestUpdate();
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