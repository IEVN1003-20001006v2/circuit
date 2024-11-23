import { Component } from '@angular/core';

@Component({
  selector: 'app-api-management',
  templateUrl: './api-management.component.html',
  styleUrls: ['./api-management.component.scss']
})
export class ApiManagementComponent {
  apis = [
    { method: 'GET', endpoint: '/api/v1/users', description: 'Obtener lista de usuarios' },
    { method: 'POST', endpoint: '/api/v1/users', description: 'Crear nuevo usuario' }
  ];
}
