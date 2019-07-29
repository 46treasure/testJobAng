import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DownloadService} from '../services/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private dS: DownloadService) {
  }

  images: string[] = [];
  imagesForDownload: string[] = [];
  image = '';
  showButton = false;

  ngOnInit(): void {
    if (this.imagesForDownload.length === 0) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
    console.log(this.showButton);
    console.log(this.imagesForDownload);
  }

  getUrl($event) {
    this.image = $event.target.value;
    this.images.push(this.image);
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'flex';
  }


  load() {
    console.log(this.imagesForDownload);
    this.dS.download(this.imagesForDownload).subscribe();
    alert('Downloaded on your desktop');
  }


  close() {
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'none';
  }


  add(image: string) {
    this.imagesForDownload.push(image);
    this.showButton = true;
    console.log(this.showButton);
  }

  delete(image: string) {
    for (let i = 0; i < this.imagesForDownload.length; i++) {
      if (this.imagesForDownload[i] === image) {
        this.imagesForDownload[i] = this.imagesForDownload[0];
        this.imagesForDownload.shift();
      }
      this.ngOnInit();
    }
  }
}



