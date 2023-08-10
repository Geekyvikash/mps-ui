import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpService } from 'src/app/shared/services/http.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  mobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  submitted = false;
  stateAll:any

  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }



  constructor(private modalService: NgbModal, private http: HttpService, private fb: FormBuilder, private url: BaseService){
   
  }
  openRs(content: any) {
    this.modalService.open(content, { size: 'lg',centered: true } );
  }

  // openRc(content: any) {
  //   this.modalService.open(content, { size: 'lg',centered: true } );
  // }

  openLg(content: any) {
    this.modalService.open(content, { size: '',centered: true } );
  }

  openOt(content: any) {
    this.modalService.open(content, { size: '',centered: true } );
  }

  ngOnInit(): void {
    this.getState();
  }
  registrationForm = new FormGroup({
    firstName : new FormControl ('', Validators.required),
    lastName : new FormControl ('', Validators.required),
    email : new FormControl ('', Validators.email),
    mobile : new FormControl ('', Validators.required),
    address : new FormControl ('', Validators.required),
    city : new FormControl ('', Validators.required),
    state : new FormControl ('', Validators.required),
    qualification : new FormControl ('', Validators.required),
    degisnation : new FormControl ('', Validators.required),



  })
 
  get firstName(){
    return this.registrationForm.get('firstName') as FormControl;
  }
  
  get lastName(){
    return this.registrationForm.get('lastName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  get address(){
    return this.registrationForm.get('address') as FormControl;
  }
  get state(){
    return this.registrationForm.get('state') as FormControl;
  }
  get city(){
    return this.registrationForm.get('city') as FormControl;
  }
  get qualification(){
    return this.registrationForm.get('qualification') as FormControl;
  }
  get degisnation(){
    return this.registrationForm.get('degisnation') as FormControl;
  }
  
  

//   get f()
// {
//     return this.registrationForm.controls;
// }

  
  onSubmitEmployeData(){
    console.log("click");
    
    this.submitted=true;
    if(this.registrationForm.invalid){
      return;
    }
    let url= this.url.EMPLOYEE_REGISTER
    const data = {
      first_name: this.registrationForm.controls.firstName.value, 
      last_name : this.registrationForm.controls.lastName.value,
      email :this.registrationForm.controls.email.value,
      mobile : this.registrationForm.controls.mobile.value,
      address : this.registrationForm.controls.address.value, 
      city : Number(this.registrationForm.controls.city.value)
    }
    this.http.getDataWithPost(url, data).subscribe(
      data => {
        console.log(data,data);
      },
      error =>{
        // this.error = error ? error : '';
      }
    )
  }
private getState(){
this.http.getDataWithGet(this.url.GET_STATE, '').subscribe
((data) =>{
  console.log(data,"state")
  this.stateAll= data;
})
}
  
}
