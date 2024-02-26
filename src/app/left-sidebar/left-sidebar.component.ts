import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

  //Your shortcuts where the array is formed and image , text are stored in key-value pair
  shortcutImage:Array<{shortcut_img:string,shortcut_text:string}>=[
    {
      shortcut_img:"https://m.media-amazon.com/images/M/MV5BZTEwYjc5ZjUtZjhmMy00NDQzLTg2OTEtZmQxNjVjNjNiOGJiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY209_CR0,0,140,209_AL_.jpg",
      shortcut_text:"Saat Hindustani"
    },
    {
      shortcut_img:"https://m.media-amazon.com/images/M/MV5BYzJlNzYyMTEtOWRhYS00OTRiLWI0MDEtOWUxOGRlMDIwZDk2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR3,0,140,209_AL_.jpg",
      shortcut_text:"Deewar"
    },
    {
      shortcut_img:"https://m.media-amazon.com/images/M/MV5BZTYwNGU2YzQtMDRjNS00MjlmLTk1MDEtMjBmYWQ3ZjY0NWRjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY209_CR7,0,140,209_AL_.jpg",
      shortcut_text: "Sarkar"
    },
    {
      shortcut_img:"https://m.media-amazon.com/images/M/MV5BYmQzNWMyZDAtMmUxYi00NzY5LWE1ZWYtYTRhZTkwN2U4M2FkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg",
      shortcut_text: "Cheeni Kum"
    }
  ]




}
