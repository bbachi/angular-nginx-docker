import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envapp';
  appData: any;

  constructor(private appService: AppService) {
      this.appService.getConfig().subscribe(data => {
          this.appData = data;
      })
  }
}
