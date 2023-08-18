import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PP_TANN_SOPHAT_ANGULAR_MINI_PROJECT';
  ngOnInit(): void {
    initFlowbite();
  }
}
