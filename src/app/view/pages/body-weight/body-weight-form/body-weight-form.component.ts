import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-body-weight-form',
  templateUrl: './body-weight-form.component.html',
  styleUrls: ['./body-weight-form.component.scss']
})
export class BodyWeightFormComponent implements OnInit {

  newFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newFormGroup = this.formBuilder.group({

    })
  }

}
