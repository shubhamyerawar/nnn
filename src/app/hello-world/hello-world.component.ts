import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {


  login:FormGroup

  constructor(private fb:FormBuilder,private fbb:FormGroup) { 
    
    this.login=this.login.value;
    
  }

  ngOnInit() {
  }


}
