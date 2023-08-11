import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  
    constructor(private http: HttpService, private fb: FormBuilder, private url: BaseService){
     
    }

    ngOnInit(): void {
    
    }
    loginForm= new FormGroup({
      email: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required),
     
    })
    get email(){
      return this.loginForm.get('email') as FormControl
    }
    get password(){
      return this.loginForm.get('password') as FormControl
    }
  onclick (){ 
    let url = this.url.SUPER_ADMIN
    const data  = {
      email: this.loginForm.controls.email.value, 
      password: this.loginForm.controls.password.value 
    }
    this.http.getDataWithPost(url,data).subscribe(
    data => {
    console.log(data,"superadmin");
  }
)


  }
}

  

    
  
  

