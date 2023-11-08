import { LitElement, html } from "lit-element";
import index_styles from "../index_styles";

export class MenuAdmin extends LitElement{
  //ESTILOS
    static get styles(){
        return[index_styles]
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
                <td>${usuario.email}</td>
                <td>${usuario.direccion}</td>
                <td><button @click="${() => this.actualizarUsu(2)}"><i class="fa-solid fa-file-pen"></i></button></td>
                <td><i class="fa-solid fa-trash"></i></td>
              </tr>
            `
        )}
        </tbody>
      </table>
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
  actualizarUsuario() {
    if (this.usuarioAEditar) {
      this.usuarioAEditar.nombre = this.nombre;
      this.usuarioAEditar.apellido = this.apellido;
      this.usuarioAEditar.telefono = this.telefono;
      this.usuarioAEditar.email = this.email;
      this.usuarioAEditar.direccion = this.direccion;
      this.usuarioAEditar.password = this.password;
      this.limpiarCampos();
      this.usuarioAEditar = null;
      this.mostrarFormularioEdicion = false;
      this.requestUpdate();
    } else {
      console.log('No se proporcionó un usuario válido para actualizar');
    }
  }

  limpiarCampos() {
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
    this.email = "";
    this.direccion = "";
    this.password = "";
  }

  mostrarFormularioEdicion(usuario) {
    this.mostrarFormularioEdicion = true;
    this.usuarioAEditar = usuario;
    this.identificacion = usuario.identificacion;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.telefono = usuario.telefono;
    this.email = usuario.email;
    this.direccion = usuario.direccion;
    this.password = usuario.password;
  }

  actualizarUsu(y) {
    if (y === 2) {
      if (this.mostrarFormularioEdicion) {
        this.info = html`
        <div class='color1 d-flex justify-content-center align-items-center'>
          <div class='content rounded'>
            <div class='m-3'>
              <h1 class='mr-3 font'>Editar Usuario</h1>
              <br>
              <!-- Campos de entrada con valores preestablecidos -->
              <label class='font'>Numero de Identificacion:</label><br>
              <input class='w-100 rounded  bg-none border' .value="${this.identificacion}" @input="${(e) => (this.identificacion = e.target.value)}" type="text"><br><br>
              <label class='font'>Nombres:</label><br>
              <input class='w-100 rounded  bg-none border' .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}" type="text"><br><br>
              <label class='font'>Apellidos:</label><br>
              <input class='w-100 rounded  bg-none border' type="text" .value="${this.apellido}" @input="${(e) => (this.apellido = e.target.value)}"><br><br>
              <label class='font'>Telefono:</label><br>
              <input class='w-100 rounded  bg-none border' .value="${this.telefono}" @input="${(e) => (this.telefono = e.target.value)}" type="text" ><br> <br>
              <label class='font'>Correo:</label><br>
              <input class='w-100 rounded  bg-none border' .value="${this.email}" @input="${(e) => (this.email = e.target.value)}" type="text"><br><br>
              <label class='font'>Direccion:</label><br> 
              <input class='w-100 rounded  bg-none border' .value="${this.direccion}" @input="${(e) => (this.direccion = e.target.value)}" type="text" ><br><br>
              <label class='font'>Contraseña:</label><br> 
              <input class='w-100 rounded  bg-none border' .value="${this.password}" @input="${(e) => (this.password = e.target.value)}" type="text" ><br><br>
              <!-- Botón para actualizar el usuario -->
              <button class="btn btn-dark d-flex m-1 font" @click="${() => this.actualizarUsuario()}">Actualizar  <i class="fas fa-plus fa-beat-fade"></i></button>
            </div>
          </div>
        </div>
        `;
      }
      this.requestUpdate();
    }
  }

  //fin crud usu

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
        <button @click="${() => this.mascotasUsu(2)}" class="w-100 mt-5  border buton p-2 rounded border-10">
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