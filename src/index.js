import { LitElement, html } from "lit-element";
import index_styles from "./index_styles";
import { MenuAdmin } from "./admin/menuAdmin";
import { MenuUsu } from "./usuario/menuUsuario";

export class IndexElement extends LitElement {
  //estilos
  static get styles() {
    return [index_styles]
k
  }
  //constructor
  constructor() {
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
    };
  }
  //contenedor principal
  connectedCallback() {
    super.connectedCallback();
    // Llama a la función informacion(0) cuando el componente se conecta al DOM.
    this.informacion(0);
  }
//conteneor de cambio
  informacion(y){
    if (y===0){
      this.info =html`
      <div class='bg-color-dark  d-flex flex-column m-3 cont1'>
        <div class='cont2  rounded d-flex justify-content-center align-items-center flex-column'>
          <h1 class='color'>No Compres, Adopta!!!!</h1>
            <p class='color'>tu puedes ser la excepcion</p>
        </div>
          <img class='img rounded' src='https://www.eltiempo.com/files/article_main_1200/uploads/2019/12/13/5df4525ec3073.jpeg'>
      </div>
      <div class='w-50 h-50 m-3 rounded  '>
        <h1 class='m-2'>Nosotros...</h1>
          <p class='m-3 w-75'>nosotros consistimos en una casa de adopcion, en la cual podras conocer varios tipos de perros y gatos, delos cuales te puedes enamorar. <br>
          tu podras venir a nuestro punto de encuentro donde podras conocerlos o ta,bien podras registrarte desde aqui y poder ver el catalogo y la informacion de cada perro o gatos.</p>
        <div class='w-100 d-flex justify-content-center align-items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1074580771046!2d-74.15297952424207!3d4.574713942735242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f1661def41d%3A0x31bb378e0c4aa71f!2sCra.%2043%20%2358c24%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1699161492362!5m2!1ses-419!2sco" 
          class='w-50 h-25 rounded m-3' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      `
      this.requestUpdate();

    }
  }
  loginUsu(y) {

    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='m-3'>
          <div class="main">
              <div class="container text-center d-flex justify-content-center align-items-center">
                <div class="row">
                <div class="input-group mb-3">
                      <span class="input-group-text"  id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" value="${this.email}" @input="${(e) => (this.email = e.target.value)}" aria-describedby="basic-addon1" />
                    </div>
                      <div class="input-group mb-3">
                      <samp class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></samp>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="${this.password}" value="${this.password}" @input="${(e) => (this.password = e.target.value)}" aria-describedby="basic-addon1">
                    </div>
                    <div>
                      <button type="button" class="btn1 btn-outline-dark" @click="${this.iniciarSesion}">Ingresar</button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
      `;
      this.requestUpdate();
    }
  }
//inicio de sesion
iniciarSesion() {
    const usuarioValido = this.usuarios.find((usuario) => usuario.email === this.email && usuario.password === this.password);

    if (usuarioValido) {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    } else {
      const dominio = this.email.split('@')[1]; // Obtén el dominio del correo

      if (dominio === "minipet.com") {
        const MenuAdmin = document.createElement('menu-admin');
        document.body.innerHTML = '';
        document.body.appendChild(MenuAdmin);
        console.log("Administrador");
      } else if (dominio === "gmail.com") {
        const MenuUsu = document.createElement('menu-usu');
        document.body.innerHTML = '';
        document.body.appendChild(MenuUsu);
        console.log("Usuario normal");
      } else {
        alert("Dominio de correo no válido. Inténtalo de nuevo.");
      }
    }
  }


  registrarUsu(y) {
    if (y === 2) {
      this.info = html`
      <div class='color1 d-flex justify-content-center align-items-center'>
        <div class='content rounded'>
          <div class='m-3'>
            <h1 class='mr-3 font'>Registrate</h1>
            <br>
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
            <button class="btn btn-dark d-flex m-1 font" @click="${() => this.registrarUsuarios()}">Registrar  <i class="fas fa-plus fa-beat-fade"></i></button>
          </div>
        </div>
    </div>
      `;
      this.requestUpdate();
    }
  }
  mascotasUsu(y) {
    if (y === 2) {
      this.info = html`
        <table class='posicion table table-striped table-bordered w-100'>
          <thead>
            <tr>
              <th>Identificacion del Equipo</th>
              <th># integrantes</th>
              <th>Estado del equipo</th>
              <th>Campaña del equipo</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      `;
      this.requestUpdate();
    }
  }
  //registro de ususarios
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
  




  render() {
    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      </style>
      <div class="d-flex vw-100 vh-100 font">
      <div class="bg-dark  rounded w-15  m-3 border-20 p-3">
      <div class="bg-color-secondary">
      <button @click="${() => this.informacion(0)}" class="w-100 mt-5 p-2 border buton rounded border-10">
          <i class="fas fa-user"></i> Inicio
        </button>
        <button @click="${() => this.loginUsu(2)}" class="w-100 mt-5 p-2 border buton rounded border-10">
          <i class="fas fa-user"></i> Iniciar Sesion
        </button>
        <button @click="${() => this.registrarUsu(2)}" class="w-100 mt-5 border buton  p-2 rounded border-10">
          <i class="fa-solid fa-id-card"></i> Registrarse
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
customElements.define("index-element", IndexElement);

