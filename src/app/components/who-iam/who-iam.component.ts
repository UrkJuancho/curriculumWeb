import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-who-iam',
  standalone: true,
  imports: [],
  templateUrl: './who-iam.component.html',
  styleUrl: './who-iam.component.css'
})
export class WhoIAmComponent{



}

// personalData: any = '';  // Donde guardarás los datos de la API

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   // Llamada al servicio al inicializar el componente
  //   this.apiService.getAllPersonalData().subscribe(
  //     (data: any) => {
  //       // Almacena los datos recibidos de la API
  //       this.personalData = data.body;  // Aquí `body` es el campo que contiene los datos reales
  //       console.log('Información personal:', this.personalData);
  //     },
  //     (error: any) => {
  //       console.error('Error al obtener la información personal:', error);
  //     }
  //   );
  // }