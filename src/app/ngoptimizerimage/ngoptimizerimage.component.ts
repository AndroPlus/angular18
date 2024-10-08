import { CommonModule, NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ngoptimizerimage',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './ngoptimizerimage.component.html',
  styleUrl: './ngoptimizerimage.component.scss',
  providers: provideImageKitLoader("https://ik.imagekit.io/arungudelli/")
})
export class NgoptimizerimageComponent {

  imageUrls:imageInfo[] = [];

  randomContent = "";

  constructor() {
    for (let i = 1; i < 7; i++) {
      this.imageUrls.push({
        id:"class-"+i,
        url:i+"-"+"4000x3000_ag.jpg"
      });
    }

    this.randomContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  }
}

export interface imageInfo{
  id:string;
  url:string;
}
