import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  standalone: true,
  styleUrls: ['./addrole.component.css'],
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, CommonModule, MatListModule],
})
export class AddroleComponent {

roles= [
  {'id':"1","role":"Subscriber"},
  {'id':"2","role":"Editor3"},
  {'id':"3","role":"Reviewer"},
  {'id':"4","role":"Editor"},
  {'id':"5","role":"Editor1"},
  {'id':"6","role":"Admin"},
  {'id':"7","role":"Editor2"},
]
filterRole= this.roles
onSearchs(value:string){
  console.log("value",value)
  this.filterRole= this.roles.filter((item)=>{
    item.role.toLowerCase().includes(value.toLowerCase()) ||
    item.role.includes(value)
  })

}

permissions= [
  {'id':"1","permisson":"All"},
  {'id':"2","permisson":"Only Subscribe"},
  {'id':"3","permisson":"Full Permission"}
]
filterPermission= this.permissions
onSearch(value:string){
  console.log("value",value)
  this.filterPermission= this.permissions.filter((item)=>{
    item.permisson.toLowerCase().includes(value.toLowerCase()) ||
    item.permisson.includes(value)
  })

}

}
