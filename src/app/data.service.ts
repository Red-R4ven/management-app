import { Injectable } from "@angular/core";

export interface ITech {
  name: string,
  techCount: number,
  shopInfo: IShopInfo[]
}

export interface IShopInfo {
    name: string,
    about: string[]
}

@Injectable()
export class DataService {
  public dataForDxTable: ITech[] = [{
    name: 'Monitor',
    techCount: 200,
    shopInfo: [{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}, {name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']},{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}]
  },{
    name: 'Monitor',
    techCount: 200,
    shopInfo: [{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}, {name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']},{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}]
  },{
    name: 'Monitor',
    techCount: 200,
    shopInfo: [{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}, {name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']},{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}]
  },{
    name: 'Monitor',
    techCount: 200,
    shopInfo: [{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}, {name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']},{name: 'LALALALALALA', about: ['lalalalalala', 'lalalalalala']}]
  }]

  public columnHeader: string[] = ['Техника', 'Количество', 'Магазин', 'Общая информация', 'Ебать'];
}
