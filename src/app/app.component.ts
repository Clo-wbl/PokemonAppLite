import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
    ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'hello';
}
