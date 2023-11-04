import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../restaurante.service';
import { restaurante } from '../restaurante.model';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})
export class RestauranteDetailPage implements OnInit {

  restaurante: restaurante = {id: '',logotipo: '',nombreRestaurante: '',descripcionRestaurante: '',tenedores: '',comentarios:[]};

  constructor(private activatedRouted: ActivatedRoute,private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap  =>{
      const recipeId = paramMap.get('restauranteID')!;
      this.restaurante = this.restauranteService.getRestaurante(recipeId);
    })
  }

}
