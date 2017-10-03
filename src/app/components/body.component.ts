import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
  /* styleUrls: ['./app.component.css'] <<< este estilo solo afecta al component se puede borrar*/
})
export class BodyComponent {
  /*title = 'app';*/
public mostrar:boolean=false;

 public frase:any={
   mensaje:"Black Dog",
   autor:"Led Zeppelin"
 };

sevenGuitar:string[]=["Jimi Hendrix", "Richie Blackmoore", "Paul Kosoff", "Jimmy Page", "Tommy Iommy"];

}
