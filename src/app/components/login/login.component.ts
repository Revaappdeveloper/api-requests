import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials = {
    username:"RevathyAshok",
    password: "abcd1234"
  }

  constructor(private httpClient: HttpClient) {
    console.log("Hi! This is Constructor.");

   }

  ngOnInit() {

    console.log("Hi! This is nGOnInIt.")
  }

  saveData(){
    console.log(this.loginCredentials);
    let httpRequest = this.httpClient.get('https://api.myjson.com/bins/a88kr');
    console.log(this);
    httpRequest.subscribe((data)=>{
      console.log(data);
    }, (err:any)=>{
      console.error(err);
    });

    let httpRequest2 = this.httpClient.put('https://api.myjson.com/bins/a88kr', this.loginCredentials);
    console.log(this);
    httpRequest2.subscribe((data)=>{
      console.log(data);
    }, (err: any)=>{
      console.error(err);
    });

}
saveNewData() {
  let httpRequest = this.httpClient.post('https://api.myjson.com/bins', this.loginCredentials);
  httpRequest.subscribe((data) => {
    console.log(data);
  }, (err) => {
    console.error(err);
  });
}
}
