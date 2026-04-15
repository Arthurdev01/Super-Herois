import { Component, OnInit } from '@angular/core';
import { Data, Router, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor,} from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'super_herois';
}
