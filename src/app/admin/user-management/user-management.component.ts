import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: any[] = []; // Aquí almacenaremos los datos de usuarios

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); // Carga inicial de usuarios
  }

  // Método para cargar la lista de usuarios
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Asigna los datos recibidos a la variable 'users'
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  // Método para manejar la edición de un usuario
  editUser(userId: string): void {
    console.log('Editar usuario con ID:', userId);
    // Aquí puedes agregar la lógica para editar un usuario (ej. abrir un modal)
  }

  // Método para manejar la eliminación de un usuario
  deleteUser(userId: string): void {
    console.log('Eliminar usuario con ID:', userId);
    // Lógica para eliminar un usuario
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        console.log('Usuario eliminado:', response);
        this.loadUsers(); // Recarga la lista de usuarios después de eliminar
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
}
