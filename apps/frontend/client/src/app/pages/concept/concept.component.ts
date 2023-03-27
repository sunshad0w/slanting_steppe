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
        src: '/assets/concept/AE_1.png',
        description: 'Элементы благоустройста и навигация',
      },
      {
        src: '/assets/concept/AE_2.png',
        description: 'Элементы благоустройста и интерактив',
      },
      {
        src: '/assets/concept/AE_3.png',
        description: 'Элементы благоустройста и тропы',
      },
      {
        src: '/assets/concept/AE_4.png',
        description: 'Веревочнй парк',
      },
      {
        src: '/assets/concept/AE_5.png',
        description: 'Глэмпинг',
      },
      {
        src: '/assets/concept/AE_6.png',
        description: 'Гостеые дома (интерьер)',
      },
      {
        src: '/assets/concept/AE_7.png',
        description: 'Гостеые дома (экстерьер)',
      },
      {
        src: '/assets/concept/AE_8.png',
        description: 'Детская и спортивная площадки',
      },
      {
        src: '/assets/concept/AE_9.png',
        description: 'Заготовительный цэх (переработка дикоросов)',
      },
      {
        src: '/assets/concept/AE_10.png',
        description: 'Информационно-туристический центр (интерьер)',
      },
      {
        src: '/assets/concept/AE_11.png',
        description: 'Информационно-туристический центр (экстерьер)',
      },
      {
        src: '/assets/concept/AE_12.png',
        description: 'Кафе',
      },
      {
        src: '/assets/concept/AE_13.png',
        description: 'Уличное кафе и сувенирная лавка',
      },
      {
        src: '/assets/concept/AE_14.png',
        description: 'Территория староцерковного кладбища',
      },
      {
        src: '/assets/concept/AE_15.png',
        description: 'Сельский клуб и фельдшерско-акушерный пункт',
      },
      {
        src: '/assets/concept/AE_16.png',
        description: 'Малые архитектурные формы',
      },
      {
        src: '/assets/concept/AE_17.png',
        description: 'Модульный отель',
      },
      {
        src: '/assets/concept/AE_18.png',
        description: 'Мосты',
      },
      {
        src: '/assets/concept/AE_19.png',
        description: 'Набережная реки Бугульдейка',
      },
      {
        src: '/assets/concept/AE_20.png',
        description: 'Ограждения',
      },
      {
        src: '/assets/concept/AE_21.png',
        description: 'Остановочный пункт',
      },
      {
        src: '/assets/concept/AE_22.png',
        description:
          'Смотровая площадка у Братской могилы коммунистов и комсомольцев',
      },
      {
        src: '/assets/concept/AE_23.png',
        description: 'Благоустройство територии утраченной церкви',
      },
      {
        src: '/assets/concept/AE_24.png',
        description: 'Воссоздаваемая школа',
      },
      {
        src: '/assets/concept/AE_25.png',
        description: 'Ярморочная площадь',
      },
      {
        src: '/assets/concept/AE_26.png',
        description: 'Благоустройство ярморочной площади',
      },
    ],
  };

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

  plans: { name: string; href: string }[] = [
    { name: 'Кафе', href: '/assets/concept/Кафе.pdf' },
    {
      name: 'Воссоздание здания школы',
      href: '/assets/concept/Воссоздание здания школы.pdf',
    },
    { name: 'Верёвочный парк', href: '/assets/concept/Верёвочный парк.pdf' },
    {
      name: 'Строительство моста',
      href: '/assets/concept/Устройство мостов.pdf',
    },
    {
      name: 'Пункт проката спортивного инвентаря',
      href: '/assets/concept/Пункт_проката_спортивного_инвентаря.pdf',
    },
    {
      name: 'Остановка',
      href: '/assets/concept/Реконструкция_остановочных_пунктов.pdf',
    },
    {
      name: 'Продуктовый магазин',
      href: '/assets/concept/Продуктовый магазин.pdf',
    },
    {
      name: 'Детская и спортивная площадки',
      href: '/assets/concept/Детская и спортивная площадки.pdf',
    },
    {
      name: 'Магазин сувениров',
      href: '/assets/concept/Сувенирный магазин.pdf',
    },
    {
      name: 'Фельдшерско-акушерский пункт',
      href: '/assets/concept/Фельдшерско-акушерский пункт.pdf',
    },
    { name: 'Модульный отель', href: '/assets/concept/Модульный отель.pdf' },
    { name: 'Церковь', href: '/assets/concept/Воссоздание церкви.pdf' },
    {
      name: 'Строительство беседки-часовни',
      href: '/assets/concept/Благоустройство кладбища.pdf',
    },
    {
      name: 'Ярмарочная площадь',
      href: '/assets/concept/Ярморочная площадь.pdf',
    },
    {
      name: 'Устройство основных коммунакаций',
      href: '/assets/concept/Коммунакации.pdf',
    },
    {
      name: 'Модульный цех по производству варенья',
      href: '/assets/concept/Модульный_цех_по_производству_варенья.pdf',
    },
  ];

  constructor(public gallery: Gallery) {}

  public getImageItems = getImageItems;

  ngAfterViewInit() {
    setTimeout(() => {
      Object.keys(this.galleries).map((key) => {
        this.gallery.ref(key).load(this.getImageItems(this.galleries[key]));
      });
    }, 100);
    setTimeout(() => {
      document.querySelectorAll('.scan').forEach((s) => {
        s.scrollLeft = s.scrollWidth / 2;
      });
    }, 3000);
  }

  toggleExpandDocs() {
    this.isExpandDocs = !this.isExpandDocs;
  }
}
