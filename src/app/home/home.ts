import { Component, signal } from '@angular/core';
import { Greeting } from "../components/greeting/greeting";

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  home_message = signal("hello form home");
}
