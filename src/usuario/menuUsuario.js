import { LitElement, html } from "lit-element";
import index_styles from "../index_styles";

export class MenuUsu extends LitElement {

  //ESTILOS
  static get styles() {
    return [index_styles]
  }
  //TIPOS DE DATOS
  constructor() {
    super();
    this.info = "";

  }

  //PAGINAS DE MENU
  bienvenido(y) {
    if (y === 0) {
      this.info = html`
        <div class='bg-color-dark  d-flex flex-column m-3 cont1'>
          <div class='cont2  rounded d-flex justify-content-center align-items-center flex-column'>
            <h1 class='color'>Bienvenido Usuario...</h1>
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

  //fin crud usu

  //mascotas
  mascotasCard(y) {
    if (y === 2) {
      this.info = html`
        <div class="color1 d-flex justify-content-center align-items-center">
          <div class="content2 rounded">
            <div class="m-3">
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <button @click="${(e) => this.registro_mascota(4)}" type="button" class="btn btn-primary">Registrar</button>
                  </div>
                  <div class="col"></div>
                </div>
              </div>
  
              ${this.mascotas.map(
                (mascota) => html`
                  <div class="card" style="width: 18rem;">
                    <img src="${mascota.imagen}" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">${mascota.nombre}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">especie: ${mascota.especie}</li>
                      <li class="list-group-item">raza: ${mascota.raza}</li>
                      <li class="list-group-item">peso: ${mascota.peso}</li>
                      <li class="list-group-item">edad: ${mascota.edad}</li>
                      <h6 hidden id = "id_mascota ${mascota.id}"> ${mascota.id}</h6>
                    </ul>
                    <div class="card-body">
                      <button @click="${(e) => this.actualizar_mascota(5, mascota.id)}" type="button" class="btn btn-primary"> Actualizar </button>
                      <button @click="${(e) => this.eliminar_mascota(mascota.id)}" type="button" class="btn btn-primary">Eliminar</button>
                    </div>
                  </div>
                `
              )}
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

customElements.define('menu-usu', MenuUsu)