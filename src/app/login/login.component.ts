import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  name='';
  password='';
  isHide=true;
  constructor(private router: Router) { 
    this.router = router;
  }

  userLogin(){
    if(this.name==""||this.password==""){
      this.isHide=false;
    }
    this.router.navigateByUrl('/list?sortType=hightolow')

  }

}
