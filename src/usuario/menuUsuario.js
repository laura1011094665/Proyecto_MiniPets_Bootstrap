import { LitElement, html } from "lit-element";
import index_styles from "../index_styles";

export class MenuUsu extends LitElement{

    static get styles(){
        return[index_styles]
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
customElements.define('menu-usu', MenuUsu)