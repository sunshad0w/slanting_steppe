import { AfterViewInit, Component } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';

export interface IImageInfo {
  src: string;
  thumb?: string;
  description?: string;
}
@Component({
  selector: 'ss-concept-page',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
})
export class ConceptPageComponent implements AfterViewInit {
  isExpandDocs = false;

  reportImages: IImageInfo[] = [
    { src: '/assets/concept/IMG_01.JPG' },
    { src: '/assets/concept/IMG_02.JPG' },
    { src: '/assets/concept/IMG_03.JPG' },
  ];
  schemaImages: IImageInfo[] = [
    {
      src: 'https://dummyimage.com/640x4:4/000/fff',
      thumb: 'https://dummyimage.com/320x4:4/000/fff',
      description: 'Схема основных проектных решений',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/666',
      thumb: 'https://dummyimage.com/320x4:4/000/666',
      description:
        'Схема распределения активностей, информационных конструкций и туристической инфрастурктуры',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0f0',
      thumb: 'https://dummyimage.com/320x4:4/000/0f0',
      description: 'Схема этапов реализации',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/f00',
      thumb: 'https://dummyimage.com/320x4:4/000/f00',
      description: 'Схема функционального зонирования',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/00f',
      thumb: 'https://dummyimage.com/320x4:4/000/00f',
      description: 'Схема благоустройства',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0ff',
      thumb: 'https://dummyimage.com/320x4:4/000/0ff',
      description: 'Схема транспортно-пешеходных связей',
    },
  ];

  fragmentImages: IImageInfo[] = [
    {
      src: 'https://dummyimage.com/640x4:4/000/fff',
      thumb: 'https://dummyimage.com/320x4:4/000/fff',
      description: 'Главная площадь',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/666',
      thumb: 'https://dummyimage.com/320x4:4/000/666',
      description: 'Сельский клуб и фельдшерско-акушерский пукнт',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0f0',
      thumb: 'https://dummyimage.com/320x4:4/000/0f0',
      description: 'Кафе и ярмарочная площадь',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/f00',
      thumb: 'https://dummyimage.com/320x4:4/000/f00',
      description: 'Карьер со смотровой площадкой',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/00f',
      thumb: 'https://dummyimage.com/320x4:4/000/00f',
      description: 'Объекты культурного наследия по улице Верховой',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0ff',
      thumb: 'https://dummyimage.com/320x4:4/000/0ff',
      description: 'Староцерковное кладбище',
    },
  ];

  scanImages: IImageInfo[] = [
    {
      src: 'https://dummyimage.com/660x200/000/fff',
      thumb: 'https://dummyimage.com/660x200/000/fff',
      description: 'Улица Верховая. Нечётная сторона',
    },
    {
      src: 'https://dummyimage.com/660x200/000/666',
      thumb: 'https://dummyimage.com/660x200/000/666',
      description: 'Улица Верховая. Чётная сторона',
    },
    {
      src: 'https://dummyimage.com/660x200/000/0f0',
      thumb: 'https://dummyimage.com/660x200/000/0f0',
      description: 'Улица Похарик. Чётная сторона',
    },
  ];

  _3dsImages: IImageInfo[] = [
    {
      src: 'https://dummyimage.com/640x4:4/000/fff',
      thumb: 'https://dummyimage.com/320x4:4/000/fff',
      description: 'Амбар-лавка, магазин и здание школы',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/666',
      thumb: 'https://dummyimage.com/320x4:4/000/666',
      description: 'Амбар-лавка, магазин и здание школы',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0f0',
      thumb: 'https://dummyimage.com/320x4:4/000/0f0',
      description: 'Кафе и ярмарочная площадь',
    },
  ];

  analogImages: IImageInfo[] = [
    {
      src: 'https://dummyimage.com/640x4:4/000/fff',
      thumb: 'https://dummyimage.com/320x4:4/000/fff',
      description: 'Главная площадь',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/666',
      thumb: 'https://dummyimage.com/320x4:4/000/666',
      description: 'Сельский клуб и фельдшерско-акушерский пукнт',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0f0',
      thumb: 'https://dummyimage.com/320x4:4/000/0f0',
      description: 'Кафе и ярмарочная площадь',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/f00',
      thumb: 'https://dummyimage.com/320x4:4/000/f00',
      description: 'Карьер со смотровой площадкой',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/00f',
      thumb: 'https://dummyimage.com/320x4:4/000/00f',
      description: 'Объекты культурного наследия по улице Верховой',
    },
    {
      src: 'https://dummyimage.com/640x4:4/000/0ff',
      thumb: 'https://dummyimage.com/320x4:4/000/0ff',
      description: 'Староцерковное кладбище',
    },
  ];

  // todo fill hrefs
  researches: { name: string; href: string }[] = [
    { name: 'Общая характеристика проведённых исследований', href: '' },
    { name: 'Историческая записка', href: '' },
    { name: 'Отчёт по результатам социологического исследования', href: '' },
    {
      name: 'Эколого-географическая характеристика территории села и его окружения',
      href: '',
    },
    {
      name: 'Отчёт о текущем социально-экономическом положении села',
      href: '',
    },
    { name: 'Альбом фотофиксации', href: '' },
    { name: 'Отчёт по результатам градостроительного обследования', href: '' },
  ];
  // todo fill hrefs
  plans: { name: string; href: string }[] = [
    { name: 'Кафе', href: '' },
    { name: 'Воссоздание здания школы', href: '' },
    { name: 'Верёвочный парк', href: '' },
    { name: 'Строительство моста', href: '' },
    { name: 'Пункт проката спортивного инвентаря', href: '' },
    { name: 'Остановка', href: '' },
    { name: 'Продуктовый магазин', href: '' },
    { name: 'Спортивная площадка', href: '' },
    { name: 'Магазин сувениров', href: '' },
    { name: 'Фельдшерско-акушерский пункт', href: '' },
    { name: 'Модульный отель', href: '' },
    { name: 'Церковь', href: '' },
    { name: 'Строительство беседки-часовни', href: '' },
    { name: 'Ярмарочная площадь', href: '' },
    { name: 'Детская площадка', href: '' },
  ];

  constructor(public gallery: Gallery) {}

  getImageItems(imageInfo: IImageInfo[]) {
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
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.gallery.ref('reports').load(this.getImageItems(this.reportImages));
      this.gallery.ref('schemas').load(this.getImageItems(this.schemaImages));
      this.gallery
        .ref('fragments')
        .load(this.getImageItems(this.fragmentImages));
      this.gallery.ref('scans').load(this.getImageItems(this.scanImages));
      this.gallery.ref('_3ds').load(this.getImageItems(this._3dsImages));
      this.gallery.ref('analogs').load(this.getImageItems(this.analogImages));
    }, 100);
  }

  toggleExpandDocs() {
    this.isExpandDocs = !this.isExpandDocs;
  }
}
