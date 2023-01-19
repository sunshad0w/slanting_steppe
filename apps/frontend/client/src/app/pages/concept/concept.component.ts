import { Component } from '@angular/core';

@Component({
  selector: 'ss-concept-page',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
})
export class ConceptPageComponent {
  isExpandDocs = false;

  expandDocs() {
    this.isExpandDocs = true;
  }
}
