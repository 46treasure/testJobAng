import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  // imagesForDownload: string[] = [];
  // image = '';
  // inputForm: FormGroup;
  // inputs: Input[];
  images: Image[] = [];
  currentImg: Image = new Image();


  ngOnInit(): void {


    // this.inputForm = this.fb.group({
    //   inputs: this.fb.array([this.fb.group({url: ''})])
    // });
  }


  // get inputPoints() {
  //   return this.inputForm.get('inputs') as FormArray;
  // }
  //
  // addInput() {
  //   this.inputPoints.push(this.fb.group({url: ''}));
  // }

  // deleteInput(index) {
  //   this.inputPoints.removeAt(index);
  // }

  getUrl($event) {
    this.currentImg.image = $event.target.value;
    console.log(this.currentImg);
    setTimeout(() => {
      this.images.push(this.currentImg);
    }, 400);
    for (let i = 0; i < this.images.length; i++) {

    }
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'flex';
  }


  download() {

  }

  close() {
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'none';
  }


  sendForm(form: NgForm, i: string) {
    // for (let i = 0; i < this.imagesForDownload.length; i++) {
    //   console.log(this.imagesForDownload[i]);
    //
    // }
    // console.log((document.querySelector('.imgForLoad') as HTMLElement).valueOf());
    // console.log(document.getElementById('imgD').getAttribute('src'));
    console.log(form);
  }
}

export class Image {
  // public id: number = null;
  public image = '';
}




