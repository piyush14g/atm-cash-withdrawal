import { Component, Input, OnInit } from '@angular/core';
import { ResultObject } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent{
  @Input() resultArray: Array<ResultObject>;
}
