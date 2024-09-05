import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{
  images = [
    'assets/img/landing/about-us/carousel/1.jpg',
    'assets/img/landing/about-us/carousel/2.jpg',
    'assets/img/landing/about-us/carousel/3.jpg',
    'assets/img/landing/about-us/carousel/4.jpg',
    'assets/img/landing/about-us/carousel/5.jpg'
  ];

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type   : 'loop',
      drag   : 'free',
      perPage: 4,
      perMove: 1,
      focus  : 0,
      autoplay: true,
      breakpoints: {
        580: { perPage: 2 },
        1280: { perPage: 3 },
      },
    }).mount();
  }
}
