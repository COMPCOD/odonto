import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-pdf1',
  templateUrl: './pdf1.page.html',
  styleUrls: ['./pdf1.page.scss'],
  template: `
  <pdf-viewer [src]="pdfSrc"
              

  ></pdf-viewer>
  `
})
export class Pdf1Page implements OnInit {
pdfSrc="assets/artigo1.pdf";
constructor() { }

  ngOnInit() {

  }

}
