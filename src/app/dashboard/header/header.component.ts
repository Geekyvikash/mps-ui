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
  isLinear = true;


  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  submitted = false;
  stateAll:any=[];
  citiesAll: any=[];


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
//  REGISTER LOGIN
  openLg(longCompany: any) {
    this.modalService.open(longCompany, { size: '',centered: true } );
  }
  openOt(lonContent: any) {
    this.modalService.open(lonContent, { size: '',centered: true } );
  }

  // COMPANY LOGIN
  openCm(longCompany: any) {
    this.modalService.open(longCompany, { size: '',centered: true } );
  }
  openRscom(loginCompany: any) {
    this.modalService.open(loginCompany, { size: 'lg',centered: true } );
  }
  openOtp(lonCompany: any) {
    this.modalService.open(lonCompany, { size: '',centered: true } );
  }

 

  ngOnInit(): void {
    this.getState();
    // this.getCity();
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

  // COMPANY LOGIN
  // COMPANY LOGIN

  companyRegistrationForm = new FormGroup({
    comapanyFirstName : new FormControl ('', Validators.required),
    businessName : new FormControl ('', Validators.required),
    businessType : new FormControl ('', Validators.required),
    panNumnber : new FormControl ('', Validators.required),
    registrationNumber : new FormControl ('', Validators.required),
    companyAddress : new FormControl ('', Validators.required),
    mailingAddress : new FormControl ('', Validators.required),
    businessEmail : new FormControl ('', Validators.required),
    phoneNo : new FormControl ('', Validators.required),
    cityId : new FormControl ('', Validators.required),
    compContName: new FormControl ('', Validators.required),
    comapanyId: new FormControl ('', Validators.required),
    contactType: new FormControl ('', Validators.required),
    phNumber: new FormControl ('', Validators.required),
    companyEmail: new FormControl ('', Validators.required),
    companyAddresss: new FormControl ('', Validators.required),


  })
 
 

  get comapanyFirstName(){
    return this.companyRegistrationForm.get('comapanyFirstName') as FormControl;
  }
  get businessName(){
    return this.companyRegistrationForm.get('businessName') as FormControl;
  }
  
  get businessType(){
    return this.companyRegistrationForm.get('businessType') as FormControl;
  }

  get panNumnber(){
    return this.companyRegistrationForm.get('panNumnber') as FormControl;
  }
  
  get registrationNumber(){
    return this.companyRegistrationForm.get('registrationNumber') as FormControl;
  }
  
  get companyAddress(){
    return this.companyRegistrationForm.get('companyAddress') as FormControl;
  }
  
  get mailingAddress(){
    return this.companyRegistrationForm.get('mailingAddress') as FormControl;
  }

  get businessEmail(){
    return this.companyRegistrationForm.get('businessEmail') as FormControl;
  }
  
  get phoneNo(){
    return this.companyRegistrationForm.get('phoneNo') as FormControl;
  }
  
  get cityId(){
    return this.companyRegistrationForm.get('cityId') as FormControl;
  }
  get compContName(){
    return this.companyRegistrationForm.get('compContName') as FormControl;
  }
  get comapanyId(){
    return this.companyRegistrationForm.get('comapanyId') as FormControl;
  }
  get contactType(){
    return this.companyRegistrationForm.get('contactType') as FormControl;
  }
  get phNumber(){
    return this.companyRegistrationForm.get('phNumber') as FormControl;
  }
  get companyEmail(){
    return this.companyRegistrationForm.get('companyEmail') as FormControl;
  }
  get companyAddresss(){
    return this.companyRegistrationForm.get('companyAddresss') as FormControl;
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
private getCity(){
  this.http.getDataWithGet(this.url.GET_CITYBY_ID, '').subscribe
  ((data) =>{
    this.citiesAll= data;
    console.log("citiesAll",this.citiesAll )
  })
  }
  
onhandleCompanyReg(){
  console.log("click")
}


Msg: any;
onSubmitCompanyData(){
  this.submitted=true;
  if(this.companyRegistrationForm.invalid){
    return;
  }

}


}
