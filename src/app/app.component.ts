
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  /* Los Observables llevan por convenio un $ al final */
  private usuarios$: Observable<any[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios$ = this.usuarioService.obtenerUsuarios();
    this.usuarioService.cargarDatosUsuarios();
  }

  crearUsuario(usuario) {
    this.usuarioService.crearUsuario(usuario);
  }

  aprobarTodos() {
    this.usuarioService.aprobarTodos();
  }
}
