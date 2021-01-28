import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes:string[]=['Hulk','Ironman','Thor'];
  heroeBorrado:string[]=[];
  borrarHeroe ():void{
    console.log(this.heroes);
    let itemBorrado =this.heroes[0]
    this.heroes.shift();
    this.heroeBorrado.unshift(itemBorrado);
    console.log (this.heroeBorrado) ;
    itemBorrado='';
  }
}
