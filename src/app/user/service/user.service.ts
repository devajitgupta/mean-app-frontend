import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
	private ROOT_URL="http://localhost:3000/api/user";


  constructor(public http:HttpClient,public router:Router) {}


  register(user){
  	return this.http.post<any>(`${this.ROOT_URL}/register`,user);
  }

  login(user){
  	return this.http.post<any>(`${this.ROOT_URL}/login`,user);
  }
  loggedIn(){
  	return !!localStorage.getItem("token");
  }
  logOut(){
  	localStorage.removeItem("token");
  	this.router.navigate(["/listings"]);
  }
}


