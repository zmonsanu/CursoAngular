import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* styleUrls: ['./app.component.css'] <<< este estilo solo afecta al component se puede borrar*/
})
export class AppComponent {
  /*title = 'app';*/
   nombre:string="Brandon";
   apellidos:string="Breineng";
}
