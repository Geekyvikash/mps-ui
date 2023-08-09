import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private modalService: NgbModal, private service:HttpService, private fb: FormBuilder, private url: BaseService){
   
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
    
  }
  registrationForm = new FormGroup({
    firstName : new FormControl ('', Validators.required),
    lastName : new FormControl ('', Validators.required),
    email : new FormControl ('', Validators.required),
    mobile : new FormControl ('', Validators.required),
    address : new FormControl ('', Validators.required),
    city : new FormControl ('', Validators.required),

  })
 
  get firstName(){
    return this.registrationForm.get('firstName')
  }
  
  get lastName(){
    return this.registrationForm.get('lastName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get mobile(){
    return this.registrationForm.get('mobile')
  }
  get address(){
    return this.registrationForm.get('address')
  }
  get city(){
    return this.registrationForm.get('city')
  } 
  onSubmitEmployeData(){
    let url= this.url.EMPLOYEE_REGISTER
    const data = {
      first_name: this.registrationForm.controls.firstName.value, 
      last_name : this.registrationForm.controls.lastName.value,
      email :this.registrationForm.controls.email.value,
      mobile : this.registrationForm.controls.mobile.value,
      address : this.registrationForm.controls.address.value, 
      city : Number(this.registrationForm.controls.city.value)
    }
    this.service.getDataWithPost(url, data).subscribe(
      data => {
        console.log(data,data);
      },
      error =>{
        // this.error = error ? error : '';
      }
    )
  }

  
}
