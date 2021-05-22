import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  faCoffee = faCoffee;

  public constructor(private titleService: Title) {
    this.setTitle('Matheus Guilherme Ferreira - Portfolio');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
