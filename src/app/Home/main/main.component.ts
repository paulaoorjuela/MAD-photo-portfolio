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
  imagesVertical = [
    '../../../assets/img/PhotoGalery/vertical/IMG_8864.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_8872.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_8887.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0017.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0103.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0110.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0118.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0120.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_0093.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_9314.JPG',
    '../../../assets/img/PhotoGalery/vertical/IMG_9350.JPG'
  ];

  imagesHorizontal = [
    '../../../assets/img/PhotoGalery/horizontal/IMG_0005.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_9990.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0008.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0024.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0071.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0101.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0078.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_01.png'
  ];

  modalImage: string | null = null;
  isHorizontal: boolean = false;

  ngAfterViewInit(): void {
    // Initialize Vertical Slider
    new Splide('.splide-vertical', {
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

    // Initialize Horizontal Slider
    new Splide('.splide-horizontal', {
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

  openModal(image: string, isHorizontal: boolean): void {
    this.modalImage = image;
    this.isHorizontal = isHorizontal;
  }

  closeModal(): void {
    this.modalImage = null;
    this.isHorizontal = false;
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
