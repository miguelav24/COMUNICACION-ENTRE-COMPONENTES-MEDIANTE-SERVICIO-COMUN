
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface IUsuario {
  nombre: string;
  fechaRegistro: string;
  email: string;
  esPremium: boolean;
}

/* Datos de los usuarios */
export const DATOS_USUARIOS = [
  {
    nombre: 'Pepe López',
    fechaRegistro: '14 Sept 2013',
    email: 'pepelopez@gmail.com',
    esPremium: true
  },
  {
    nombre: 'María Pérez',
    fechaRegistro: '2 Ene 2014',
    email: 'mariaperez@gmail.com',
    esPremium: false
  },
  {
    nombre: 'Juan González',
    fechaRegistro: '28 Ene 2014',
    email: 'juangonzalez@hotmail.com',
    esPremium: false
  }
];

@Injectable()
export class UsuarioService {
  private usuariosSubject = new BehaviorSubject([]);
  private usuarios: IUsuario[];

  constructor() { }

  obtenerUsuarios(): Observable<IUsuario[]> {
    return this.usuariosSubject.asObservable();
  }

  private actualizarUsuarios() {
    // Emite un evento con los nuevos valores para que todos los que dependan se actualicen.
    this.usuariosSubject.next(this.usuarios);
  }

  crearUsuario(usuario: IUsuario) {
    /**
    * Evitar hacer this.usuario.push() pues estaríamos modificando los valores directamente,
    * se debe generar un nuevo array !!!!.
    */
    this.usuarios = [...this.usuarios, usuario];
    this.actualizarUsuarios();
  }

  /* Cargar los datos de los usuarios */
  cargarDatosUsuarios() {
    this.usuarios = DATOS_USUARIOS;
    this.actualizarUsuarios();
  }

  aprobarTodos() {
    /**
    * Evitar hacer un forEach e ir modificando cada propiedad !!! this.users.forEach(usuario => usuario.esPremium = true);
    * 
    * Pudieramos Utilizar el .map pues siempre nos retorna un nuevo array pero si olvidamos el Object.assign( {}, ... )
    * siempre estariamos tomando la referencia del objeto en memoria y estariamos modificando nuevamente el valor
    * original en vez de crear una nueva copia o version del dato.
    * 
    */

    this.usuarios = this.usuarios.map(usuario => Object.assign({}, usuario, { esPremium: true }));
    this.actualizarUsuarios();
  }
}