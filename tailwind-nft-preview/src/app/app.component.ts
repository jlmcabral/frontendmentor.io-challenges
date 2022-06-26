import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tailwind-nft-preview';
  cardTitle: string = "Equilibrium #3429";
  cardImageUrl: string = "../assets/images/image-equilibrium.jpg";
  creatorImgUrl: string = "../assets/images/image-avatar.png";
  creatorName: string = "Jules Wyvern";
  price: number = 0.041;
  daysLeft: number = 3;
}
