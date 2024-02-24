import {Component, OnInit} from '@angular/core';
import {Poem} from "../models/poem";

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss']
})
export class PoemListComponent implements OnInit {
  selectedPoem: Poem | undefined;
  poems: Map<number, Poem> = new Map;

  poem1 = new Poem(1,'Poezia timpului', `
    Am întrebat timpul:
    "Ce sens am eu în lume dacă m-ai blestemat la o inevitabilă pieire?"
    Iar timpul mi-a răspuns cu o poezie:

    "Când ceasul tău se va opri
    Tu vei rămâne amintire.
    N-o să conteze ce-ai trăit,
    Vei dăinui prin ce-ai sădit.

    După secundele de ceas
    Minutele mai fac un pas,
    Iar pașii tăi prea alergați
    De-ai tăi copii vor fi urmați.

    Precum secundele pe ceas
    Chiar și minutele au glas
    Și-mping și ele-ncetișor
    În orele ce trec domol.

    Tu om naiv, nu te grăbi,
    Trăiește lent cu ai tăi copii
    Iubește-ți azi cu foc soția
    Și lasă naiba poezia!

    Acum desprinde-te de mine
    Și stai cu oameni lângă tine.
    Eu nu sunt timp, sunt poezie,
    Iar tu: poet în frenezie!"`, 'Rotărici Florentin Cătălin');

    poem2 = new Poem(2, 'Diversitate', `
      Stop, așteaptă, nu da scroll,
      Să îți zic ce-i ăla rol:
      E atunci când faci din toate
      Fără vreo finalitate.

      Ieri am fost oștean cu grade
      Mă mințeam: "ce bine-mi șade!",
      M-am luat și de programare
      Însă totuși mi se pare
      Că decât să fii IT-ist
      Mai bine economist.

      Însă fără niciun gest
      Vă spun într-un mod onest,
      De-aș alege-o meserie
      Ar fi să scriu poezie.

      Am mai fost și chitarist
      Rocker și motociclist
      MLM-ist și fantezist,
      Ahhh! Ce viață de artist!

      Am jucat câte un rol
      Și totuși n-am fost actor.

      Dacă și tu simți la fel,
      Și trăiești fără un țel:

      ...fă copii!`, 'Rotărici Florentin Cătălin');

  ngOnInit(): void {
    this.poems.set(1, this.poem1);
    this.poems.set(2, this.poem2);
     this.selectedPoem = this.poems.get(1)
  }

  selectPoem(key: number) {
     this.selectedPoem = this.poems.get(key);
  }


}
