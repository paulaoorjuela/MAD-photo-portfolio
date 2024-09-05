import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-horizontal-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-slide.component.html',
  styleUrl: './horizontal-slide.component.css'
})
export class HorizontalSlideComponent implements AfterViewInit{
  imagesHorizontal = [
    '../../../assets/img/PhotoGalery/horizontal/IMG_0005.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0008.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0024.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0071.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0078.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_01.png',
    '../../../assets/img/PhotoGalery/horizontal/IMG_0101.JPG',
    '../../../assets/img/PhotoGalery/horizontal/IMG_9990.JPG'
  ];

  modalImage: string | null = null;

  ngAfterViewInit(): void {
    // Horizontal Slider
    new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      perPage: 3,
      perMove: 1,
      focus: 0,
      autoplay: true,
      breakpoints: {
        580: { perPage: 1 },
        1280: { perPage: 2 },
      },
    }).mount();
  }

  openModal(image: string): void {
    this.modalImage = image;
  }

  closeModal(): void {
    this.modalImage = null;
  }
}
