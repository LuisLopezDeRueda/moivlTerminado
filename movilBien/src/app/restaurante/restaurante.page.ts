import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './restaurante.service';
import { restaurante }  from './restaurante.model'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  protected titulo="Restaurantes del mundo"
  protected numeroTenedores="|| Numero de tenedores"
  protected restaurantes: restaurante[]=[];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.restaurantes=this.restauranteService.getRestaurantes();
  }

}
