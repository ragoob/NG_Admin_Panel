import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutConfig } from 'src/app/config/layoutConfig';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  config : LayoutConfig;
  loginForm: FormGroup;
  constructor(private router : Router,private fb: FormBuilder,private auth : AuthService) { }

  ngOnInit() {
    this.config = new LayoutConfig();
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required],
      rememberme:[true]
    });
  }

  get f() { return this.loginForm.controls; }


  Login(){
    if(!this.loginForm.valid)
    return;
    this.auth.login(this.loginForm.value);
   
  }

}
