import { Component } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent, UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
