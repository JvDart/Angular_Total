import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from '../usuarios-falsos';

const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];

  get rutaAvatar(){
    return 'assets/usuarios/' + this.usuarioSeleccionado.avatar;
  }

  selectUsuario(){
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado= USUARIOS_FALSOS[indiceAleatorio];
  }
}
