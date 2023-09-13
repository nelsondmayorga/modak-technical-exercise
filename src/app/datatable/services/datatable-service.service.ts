import { Injectable } from '@angular/core';
import { ICustomer } from '../types/customer.interface';

@Injectable()
export class DatatableService {
  customers: ICustomer[] = [
    { id: 1, nombre: 'Juan', edad: 25, ciudad: 'Madrid', pais: 'España' },
    { id: 2, nombre: 'María', edad: 30, ciudad: 'Barcelona', pais: 'España' },
    { id: 3, nombre: 'Carlos', edad: 22, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 4, nombre: 'Ana', edad: 28, ciudad: 'México DF', pais: 'México' },
    { id: 5, nombre: 'Laura', edad: 35, ciudad: 'Lima', pais: 'Perú' },
    { id: 6, nombre: 'David', edad: 29, ciudad: 'Santiago', pais: 'Chile' },
    { id: 7, nombre: 'Elena', edad: 27, ciudad: 'Caracas', pais: 'Venezuela' },
    { id: 8, nombre: 'Pedro', edad: 32, ciudad: 'Buenos Aires', pais: 'Argentina' },
    { id: 9, nombre: 'Sofía', edad: 26, ciudad: 'Quito', pais: 'Ecuador' },
    { id: 10, nombre: 'Luis', edad: 24, ciudad: 'Guatemala City', pais: 'Guatemala' },
    { id: 11, nombre: 'Julia', edad: 31, ciudad: 'Lisboa', pais: 'Portugal' },
    { id: 12, nombre: 'Fernando', edad: 33, ciudad: 'Sao Paulo', pais: 'Brasil' },
    { id: 13, nombre: 'Isabel', edad: 29, ciudad: 'San Juan', pais: 'Puerto Rico' },
    { id: 14, nombre: 'Alejandro', edad: 27, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 15, nombre: 'Carmen', edad: 28, ciudad: 'Sevilla', pais: 'España' },
    { id: 16, nombre: 'Ricardo', edad: 23, ciudad: 'Panamá City', pais: 'Panamá' },
    { id: 17, nombre: 'Andrea', edad: 25, ciudad: 'Ciudad de México', pais: 'México' },
    { id: 18, nombre: 'Gabriela', edad: 27, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 19, nombre: 'Pablo', edad: 30, ciudad: 'Lima', pais: 'Perú' },
    { id: 20, nombre: 'Valentina', edad: 29, ciudad: 'Santiago', pais: 'Chile' },
    { id: 21, nombre: 'Miguel', edad: 34, ciudad: 'Caracas', pais: 'Venezuela' },
    { id: 22, nombre: 'Lucía', edad: 26, ciudad: 'Santo Domingo', pais: 'República Dominicana' },
    { id: 23, nombre: 'Manuel', edad: 32, ciudad: 'Buenos Aires', pais: 'Argentina' },
    { id: 24, nombre: 'Natalia', edad: 28, ciudad: 'Quito', pais: 'Ecuador' },
    { id: 25, nombre: 'Javier', edad: 29, ciudad: 'Guatemala City', pais: 'Guatemala' },
    { id: 26, nombre: 'Camila', edad: 31, ciudad: 'Lisboa', pais: 'Portugal' },
    { id: 27, nombre: 'Diego', edad: 28, ciudad: 'Sao Paulo', pais: 'Brasil' },
    { id: 28, nombre: 'Valeria', edad: 27, ciudad: 'San Juan', pais: 'Puerto Rico' },
    { id: 29, nombre: 'Eduardo', edad: 24, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 30, nombre: 'Lorena', edad: 33, ciudad: 'Sevilla', pais: 'España' },
    { id: 31, nombre: 'Santiago', edad: 22, ciudad: 'Panamá City', pais: 'Panamá' },
    { id: 32, nombre: 'Marta', edad: 26, ciudad: 'Ciudad de México', pais: 'México' },
    { id: 33, nombre: 'Raúl', edad: 35, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 34, nombre: 'Alicia', edad: 28, ciudad: 'Lima', pais: 'Perú' },
    { id: 35, nombre: 'Erik', edad: 30, ciudad: 'Santiago', pais: 'Chile' },
    { id: 36, nombre: 'Marina', edad: 29, ciudad: 'Caracas', pais: 'Venezuela' },
    { id: 37, nombre: 'Gonzalo', edad: 27, ciudad: 'Santo Domingo', pais: 'República Dominicana' },
    { id: 38, nombre: 'Silvia', edad: 32, ciudad: 'Buenos Aires', pais: 'Argentina' },
    { id: 39, nombre: 'Arturo', edad: 28, ciudad: 'Quito', pais: 'Ecuador' },
    { id: 40, nombre: 'Nadia', edad: 29, ciudad: 'Guatemala City', pais: 'Guatemala' },
    { id: 41, nombre: 'Hugo', edad: 30, ciudad: 'Lisboa', pais: 'Portugal' },
    { id: 42, nombre: 'Laura', edad: 33, ciudad: 'Sao Paulo', pais: 'Brasil' },
    { id: 43, nombre: 'Jorge', edad: 27, ciudad: 'San Juan', pais: 'Puerto Rico' },
    { id: 44, nombre: 'Patricia', edad: 28, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 45, nombre: 'Roberto', edad: 24, ciudad: 'Sevilla', pais: 'España' },
    { id: 46, nombre: 'Susana', edad: 35, ciudad: 'Panamá City', pais: 'Panamá' },
    { id: 47, nombre: 'Samuel', edad: 29, ciudad: 'Ciudad de México', pais: 'México' },
    { id: 48, nombre: 'Cecilia', edad: 30, ciudad: 'Bogotá', pais: 'Colombia' },
    { id: 49, nombre: 'Federico', edad: 26, ciudad: 'Lima', pais: 'Perú' },
    { id: 50, nombre: 'Isabella', edad: 29, ciudad: 'Santiago', pais: 'Chile' },
  ];

  getCustomers(): ICustomer[] {
    return this.customers;
  }
}
