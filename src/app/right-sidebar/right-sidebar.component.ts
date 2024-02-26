import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

  // This is array of object of event that lined for that person
  event_array:Array<{day:number,Month:string,event_name:string}>=[
    {
      day: 25,
      Month: "April",
      event_name: "Movie Event"
    },
    {
      day: 10,
      Month: "May",
      event_name: "Eat Food"
    },
    {
      day: 5,
      Month: "June",
      event_name: "Networking Mixer"
    },
    {
      day: 20,
      Month: "July",
      event_name: "Meet Sharukh"
    },
    {
      day: 15,
      Month: "August",
      event_name: "See Movie"
    }
]

  //Your conversation where the array is formed and image names are stored in key-value pair
  conversationArray:Array<{profile_pic:string,profile_name:string}>=[
    {
      profile_pic:"https://m.media-amazon.com/images/M/MV5BMjAwMjk3NDUzN15BMl5BanBnXkFtZTcwNjI4MTY0NA@@._V1_UX140_CR0,0,140,209_AL_.jpg",
      profile_name:"Amir Khan"
    },
    {
      profile_pic:"https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_UY209_CR13,0,140,209_AL_.jpg",
      profile_name:"Akshay Kumar"
    },
    {
      profile_pic:"https://m.media-amazon.com/images/M/MV5BOWUzNjU3YTUtOGIyMi00MDk3LTk1NDMtMzY4MDZlNDFhNTFhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY209_CR73,0,140,209_AL_.jpg",
      profile_name:"Amjad Khan"
    },
    {
      profile_pic:"https://m.media-amazon.com/images/M/MV5BY2YyZGI4MzMtZTZkMy00YzY5LWI2ZWItNDM1YjQyMzI4MGE0XkEyXkFqcGdeQXVyMzQ0NTk5NzU@._V1_UY209_CR87,0,140,209_AL_.jpg",
      profile_name:"Annu Kapoor"
    }
  ]

}
