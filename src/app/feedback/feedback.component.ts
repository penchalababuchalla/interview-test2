import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  isHide=true;
  name="";
  email="";
  phoneNo="";
  feedback="";

  constructor() { }

  addFeedback(){
    if(this.name==""||this.email==""||this.phoneNo==""||this.feedback==""){
      this.isHide=false;
    }
  }

}
