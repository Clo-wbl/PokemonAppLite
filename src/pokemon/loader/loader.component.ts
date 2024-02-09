import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="flex justify-center items-center h-screen">
    <mat-progress-spinner color="primary" mode="indeterminate"></mat-progress-spinner>
  </div>`,
})
export class LoaderComponent {

}
