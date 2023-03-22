import { IImageInfo } from '../interfaces/image.interface';
import { ImageItem } from 'ng-gallery';

export const getImageItems = (imageInfo: IImageInfo[]) => {
  return imageInfo.map(
    (info) =>
      new ImageItem({
        src: info.src,
        thumb: info.thumb
          ? info.thumb
          : info.src.replace(/(.*)\/(.*)/, '$1/thumbs/$2'),
        alt: info.description || '',
      })
  );
};
