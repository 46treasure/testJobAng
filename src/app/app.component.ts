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

  imagesForDownload: string[] = [];
  image = '';
  // inputForm: FormGroup;
  // inputs: Input[];

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
    this.image = $event.target.value;
    this.imagesForDownload.push(this.image);
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'flex';
  }


  download() {
  }

  close() {
    (document.querySelector('.bg-modal') as HTMLElement).style.display = 'none';
  }


  sendForm(form: NgForm) {
    console.log(this.imagesForDownload);
    console.log(form.value);
  }
}




