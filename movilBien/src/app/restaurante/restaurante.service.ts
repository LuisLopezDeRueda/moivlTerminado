import { Injectable } from '@angular/core';
import {restaurante} from './restaurante.model'

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  protected  restaurantes: restaurante[] = [
    {
      id:'1',
      logotipo: 'data:image/jpeg;base64,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',
      nombreRestaurante: 'Muerda la pasta',
      descripcionRestaurante: 'Muy Bueno',
      tenedores: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8793.png',
      numeroTenedores:'3',
      comentarios: ['Esta muy bueno, la mejor pasta que he comido']
    },
    {
      id:'2',
      logotipo: 'https://www.lafranquicia.es/wp-content/uploads/2016/01/la-tagliatella-logo.jpg',
      nombreRestaurante: 'La tagliatella',
      descripcionRestaurante: 'La mejor pasta',
      tenedores: 'https://www.casaldoumia.com/wp-content/uploads/2021/06/placa-restaurante-2-tenedores-2.jpg',
      numeroTenedores:'2',
      comentarios: ['Esta muy bueno, la mejor pasta que he comido']
    },
    {
      id:'3',
      logotipo: 'https://lamafia.pt/wp-content/uploads/2021/12/Logo-mafia-oro-2048x1448.png',
      nombreRestaurante: 'La Mafia',
      descripcionRestaurante: 'Pasta muy buena',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9E86/5282/9F45/9C09/C0A8/2AB9/12B1/placa-senal-xSEC737.jpg',
      numeroTenedores:'1',
      comentarios: ['Esta muy bueno, la mejor pasta que he comido']
    }
  ]

  constructor() { }

  getRestaurantes(){
    return [...this.restaurantes]
  }
  getRestaurante(restauranteID: string){
    return{
      ...this.restaurantes.find(restaurante => {
        return restaurante.id===restauranteID
      })
    }
  }
  addRestaurante(title: string, logotipo: string){
  }
  deleteRestaurante(){}
}
