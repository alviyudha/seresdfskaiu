import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';

export default function GalleryViewer({ images }) {
  return (
    <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
      {images.map((image, index) => (
        <a
          key={index}
          data-lg-size={`${image.src.split('&w=')[1]}-${image.src.split('&w=')[1]}`}
          className="gallery-item"
          data-src={image.src}
          data-sub-html={image.subHtml}
        >
          <img
            className="img-responsive"
            src={image.thumb}
            alt={`Image ${index}`}
          />
        </a>
      ))}
    </LightGallery>
  );
}
