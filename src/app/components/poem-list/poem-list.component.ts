import {Component, OnInit} from '@angular/core';
import {Poem} from "../../models/poem";
import {PoemService} from "../../services/poem.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss']
})
export class PoemListComponent implements OnInit {
  selectedPoem: Poem | undefined;
  poemsMap: Map<number, Poem> = new Map();

  constructor(private poemService: PoemService) {
  }

  ngOnInit(): void {
    this.poemService.getPoems().pipe(
      tap(data => {
        this.selectedPoem = data.get(data.size-1);
      })
    ).subscribe(poemsMap => {
      this.poemsMap = poemsMap;
    });
  }

  selectPoem(key: number) {
    this.selectedPoem = this.poemsMap.get(key);
  }

}
