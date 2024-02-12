import { Component } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-loader',
    template: `
  <div class="flex justify-center items-center h-screen">
    <mat-progress-spinner color="primary" mode="indeterminate"></mat-progress-spinner>
  </div>`,
    standalone: true,
    imports: [MatProgressSpinner],
})
export class LoaderComponent {

}
