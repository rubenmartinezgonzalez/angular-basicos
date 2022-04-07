import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] =['Spiderman', 'ironman', 'Hulk', 'capi'];
  
  borrarHeroe():void{    
    this.heroes.shift();
  }
}
