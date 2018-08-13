import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

     @Component({
       selector: 'lista-usuarios',
       templateUrl: './lista-usuarios.component.html',
       styleUrls: ['./lista-usuarios.component.css'],
       changeDetection: ChangeDetectionStrategy.OnPush
     })
     export class ListaUsuariosComponent implements OnInit {
       /* Lista de usuarios */
       @Input() usuarios;
       @Output() onCrearUsuario: EventEmitter<any> = new EventEmitter();
       @Output() onAprobarTodos: EventEmitter<any> = new EventEmitter();

       constructor() { }

       ngOnInit() {
       }

       /* Método para crear un nuevo usuario */
       crearUsuario() {
         this.onCrearUsuario.emit({
           nombre: 'Prueba',
           email: 'prueba@gmail.com',
           fechaRegistro: '11 May 2016',
           esPremium: false
         });
       }

       /* Método para aprobar que todos los usuarios tengan una cuenta Premium */
       aprobarTodos() {
         this.onAprobarTodos.emit();
       }
     }