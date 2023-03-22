import { AfterViewInit, Component } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { IImageInfo } from '../../core/interfaces/image.interface';
import { getImageItems } from '../../core/utils/image.util';

@Component({
  selector: 'ss-concept-page',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
})
export class ConceptPageComponent implements AfterViewInit {
  isExpandDocs = false;

  galleries: Record<string, IImageInfo[]> = {
    reports: [
      { src: '/assets/concept/IMG_01.JPG' },
      { src: '/assets/concept/IMG_02.JPG' },
      { src: '/assets/concept/IMG_03.JPG' },
    ],
    schemas: [
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
    ],
    fragments: [
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
    ],
    scans: [
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
    ],
    _3ds: [
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
    ],
    analogs: [
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
    ],
  };

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

  public getImageItems = getImageItems;

  ngAfterViewInit() {
    setTimeout(() => {
      Object.keys(this.galleries).map((key) => {
        this.gallery.ref(key).load(this.getImageItems(this.galleries[key]));
      });
    }, 100);
  }

  toggleExpandDocs() {
    this.isExpandDocs = !this.isExpandDocs;
  }
}
