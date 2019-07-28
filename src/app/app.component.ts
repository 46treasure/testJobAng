import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  images: string[] = [];
  imagesForDownload: string[] = [];
  image = '';
  added = false;

  ngOnInit(): void {

  }

  getUrl($event) {
    this.image = $event.target.value;
    this.images.push(this.image);
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'flex';
  }


  download() {
    console.log(this.imagesForDownload);

  }

  close() {
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'none';
  }


  add(image: string) {
    this.imagesForDownload.push(image);
  }

  delete(image: string) {
    for (let i = 0; i < this.imagesForDownload.length; i++) {
      if (this.imagesForDownload[i] === image) {
        this.imagesForDownload[i] = this.imagesForDownload[0];
        this.imagesForDownload.shift();
        this.added = false;
      }
    }
  }
}



