import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  // Personal Details of the User
  first_name:string="Amitabh"
  last_name:string="Bachchan"
  user_profile:string = "https://w7.pngwing.com/pngs/813/128/png-transparent-amitabh-bachchan-the-great-gatsby-bollywood-actor-allahabad-amitabh-bachchan-celebrities-glass-necktie.png"

}
