import { AfterViewInit, Component } from '@angular/core';
import { IImageInfo } from '../../core/interfaces/image.interface';
import { getImageItems } from '../../core/utils/image.util';
import { Gallery } from 'ng-gallery';

interface INews {
  title: string;
  description: string;
  images?: IImageInfo[];
  files?: {
    href: string;
    text: string;
    icon: string;
  }[];
}

@Component({
  selector: 'ss-news-page',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsPageComponent implements AfterViewInit {
  public newsList: INews[] = [
    {
      title: 'РАЗРАБОТКА КОНЦЕПЦИИ РАЗВИТИЯ СЕЛА',
      description: `29 декабря в Косостепском сельском клубе прошла презентация разработанной при поддержке Президенского фонда культурных инициатив концепция развития села. На ней авторы концепции - архитекторы Екатерина Матель, Алёна Бобрышева и Евгения Кузнецова рассказали об основных идеях проекта, особое внимание уделив будущим “точкам притяжения”, которые планируется создать в Косой Степи. Кроме жителей села  на презентации присутствовали также представители администраций Куретского МО и Ольхонского района.`,
      images: [
        { src: '/assets/news/news1_01.jpg' },
        { src: '/assets/news/news1_02.jpg' },
        { src: '/assets/news/news1_03.jpg' },
      ],
      files: [
        {
          href: '/assets/news/Концепция_презетация.pdf',
          text: 'Презентация',
          icon: '/assets/icon-pdf.jpg',
        },
      ],
    },
    {
      title: 'ПОБЕДА В АКСЕЛЕРАТОРЕ СЕЛЬСКОГО ТУРИЗМА',
      description: `Проект “Косая Степь: Всё начинается здесь” прошёл в финал Акселератора инициатив сельского и экотуризма, проведённого Агентством развития сельских инициатив (АРСИ). на семинаре для победителей, прошедшем в конце октября в Тульской области, команду “Косая Степь “ представляла Алёна Бобрышева. В рамках Акселератора были разработаны туристический маршрут «Сердце Байкала» и программа продвижения исторического села Косая Степь как туристической дестинации.

                    Также в октябре село посетила куратор Светлана Цыбикдоржиева, которая дала оценку уже действующим турпродуктам, предлагаемых жителями села, и высказала предложения по их развитию.

                    Команда проекта “Косая Степь”:

                    Алексей Копейкин
                    Татьяна Копылова
                    Алёна Бобрышева
                    Евгения Кузнецова
                    Екатерина Матель
                    Сергей Мядзелец
                    Ксения Пономарёва
                    Анастасия Хон`,
      images: [
        { src: '/assets/news/news2_01.jpg' },
        { src: '/assets/news/news2_02.jpg' },
        { src: '/assets/news/news2_03.jpg' },
      ],
    },
    {
      title: 'ВОЛОНТЁРСКИЕ АКЦИИ',
      description: `В 2002 году в селе прошли 2 волонтёрские акции, в которых приняли участие работники СБЕРа: летом был очищен от мусора и законсервирован дом по улице Верховой, 11 и убрана его територия, а в сентябре  в центре внимания оказался старый амбар, расположенный недалеко от трассы. Внутри его также провели уборку, почистили бревенчатые стены и вставили окна. Впоследствии постройку предполагается приспособить под сувенирную лавку. `,
      images: [
        { src: '/assets/news/news3_01.jpg' },
        { src: '/assets/news/news3_02.jpg' },
        { src: '/assets/news/news3_03.jpg' },
        { src: '/assets/news/news3_04.jpg' },
        { src: '/assets/news/news3_05.jpg' },
        { src: '/assets/news/news3_06.jpg' },
      ],
    },
    {
      title: 'НОВОГОДНЯЯ ЯРМАРКА',
      description: `Сотрудничество Косой Степи и СБЕРа не ограничилось только волонтёрскими акциями: в конце декабря в офисе Байкальского банка прошла ярмарка-продажа косостепской продукции.`,
      images: [
        { src: '/assets/news/news4_01.jpg' },
        { src: '/assets/news/news4_02.jpg' },
        { src: '/assets/news/news4_03.jpg' },
      ],
    },
  ];

  public getImageItems = getImageItems;

  constructor(public gallery: Gallery) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.newsList.map((news, index) => {
        // console.log(`key: `, key);
        if (news.images) {
          this.gallery
            .ref(`news_${index}`)
            .load(this.getImageItems(news.images));
        }
      });
    }, 1000);
  }
}
