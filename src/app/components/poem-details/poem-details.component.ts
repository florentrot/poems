import {Component, Input} from '@angular/core';
import {Poem} from "../../models/poem";

@Component({
  selector: 'app-poem-details',
  templateUrl: './poem-details.component.html',
  styleUrls: ['./poem-details.component.scss']
})
export class PoemDetailsComponent {
  @Input() poem: Poem | undefined;

}
