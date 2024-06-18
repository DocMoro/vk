export enum path {
  favorites = '/favorites',
  movie = '/movie',
  movies = '/movies'
}
export enum apiPath {
  base = 'https://api.kinopoisk.dev/v1.4/',
  movie = 'movie'
}
export const TOKEN_API = '0CSKXBW-1W1M09Z-GAPJRHQ-ZXHJD88'
export const LIMIT = 50
export const PAGINATION_STEP = 5
export const KEY_LOCALDB_FAVORITES = 'favorites'
export const baseInfo = {
  total: 0,
  page: 1,
  pages: 0,
  limit: LIMIT
}
export const START_PARAMS = `page=1&limit=${LIMIT}`
export const notNullFields =
  '&notNullFields=name&notNullFields=id&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url'
export const GENRES = ['комедия', 'мелодрама', 'ужасы', 'драма']
export enum KEY_QUERY {
  GENRES = 'genres.name',
  RATING = 'rating.kp'
}
export const moviesTestData = {
  docs: [
    {
      id: 5613436,
      name: 'Прошлая ложь',
      alternativeName: 'Las largas sombras',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 6.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 24,
        imdb: 479,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 309,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5611835,
      name: null,
      alternativeName: "You Shouldn't Have Let Me In",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 3.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 19,
        imdb: 121,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 84,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'США'
        },
        {
          name: 'Италия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5461627,
      name: 'Неведомая Австралия',
      alternativeName: 'Hidden Australia',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2020,
      description:
        'Австралия знаменита своими морскими пляжами, однако вся внутренняя территория континента представляет собой «лоскутное одеяло» из контрастных природных зон: тропических лесов, гор, сухих равнин, обширных болот и засушливых пустынь.',
      shortDescription:
        'Какие диковинные животные населяют бескрайние просторы континента? Красочный док, снятый с невероятным юмором',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 47,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 50,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/eb8e64a7-817d-41ab-8745-36da29f34b54/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/eb8e64a7-817d-41ab-8745-36da29f34b54/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e662457cf6d00f9b1c1c4ab2be6/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e662457cf6d00f9b1c1c4ab2be6/x1000'
      },
      genres: [
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629310,
      name: 'Подземелья Чикен Карри-9. Человек в железной маске',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 11,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 102,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5699592,
      name: 'Я, владыка демонов, взял эльфийку-рабыню в жёны. И как же мне её любить?',
      alternativeName: 'Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 53,
        imdb: 365,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/12db97ac-aa76-4bc5-a750-f80ed9ee58c1/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/12db97ac-aa76-4bc5-a750-f80ed9ee58c1/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5698664,
      name: 'Абонемент на расследование. Маленькие трагедии',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Журналист, расследовавший гибель Виктора Кронаса, близкого друга Талича, был убит. Гликерия убеждена, что пришло время выяснить, что на самом деле произошло с Виктором и кому выгодно скрывать правду. В поисках ответов Талич обращается к отцу Кронаса, который явно знает больше, чем говорит. Однако внезапно появляется новое тело, которое не вписывается в общую картину. Что может связывать столичного мажора и бедного охранника из глубинки?',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 12,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5631668,
      name: 'Милая соседка',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2023,
      description:
        'После двух лет брака Веру бросает её муж — несостоявшийся писатель Степан. Всё это время Вера была вынуждена не только содержать его, но и терпеть нескончаемые претензии свекрови Нины Ивановны, которая не считала обыкновенную швею достойной парой своему талантливому сыну. Но теперь Степан нашёл себе другую женщину, и Вера оказывается без крыши над головой. К тому же она неожиданно теряет работу. Вера решает начать новую жизнь и заняться собственным бизнесом — пошивом модной одежды. Она снимает две комнаты в трёхкомнатной квартире. Но у хозяина квартиры Евгения внезапно меняются планы. После измены жены, блогерши Ирины, Евгений уходит от неё и переезжает к Вере в третью комнату. Вере ничего не остаётся, как согласиться на нежданное соседство.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 67,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 9
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: 2023
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5699681,
      name: 'Сказание об обручальных кольцах',
      alternativeName: 'Kekkon Yubiwa Monogatari',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 12,
        imdb: 445,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/1acdd6f4-9538-4bbc-a37b-843931b0a9de/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/1898899/1acdd6f4-9538-4bbc-a37b-843931b0a9de/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5626368,
      name: 'Кто угодно, только не она',
      alternativeName: 'Todas menos tú',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 204,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 93,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/3c3f27ec-c6c8-409a-897c-2e88671c779c/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/3c3f27ec-c6c8-409a-897c-2e88671c779c/x1000'
      },
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Мексика'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5626375,
      name: 'Любовь на кончике ножа',
      alternativeName: 'Hades - Eine (fast) wahre Geschichte aus der Unterwelt',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 35,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 100,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Австрия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5632806,
      name: 'Неразумный ангел в танце с демоном',
      alternativeName: 'Oroka na Tenshi wa Akuma to Odoru',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'Проигрывая войну армии небесных ангелов, демоны ада находятся на грани краха. В качестве последней отчаянной попытки переломить ход войны демоны отправляют Масатору Акуцу к людям на Землю. Маскируясь под старшеклассника, он должен завербовать личность, способную привести демонов к победе. Одноклассница Лили Аманэ представляется Акуцу идеальным кандидатом, но она, как назло, оказывается ангелом, а постепенно возникающие романтические чувства осложняют и без того непростую ситуацию.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 22,
        imdb: 326,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 276,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486362/77c135b9-40fa-40de-bb73-36559e6573a0/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486362/77c135b9-40fa-40de-bb73-36559e6573a0/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'комедия'
        },
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5647499,
      name: "Варшава'21",
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'В ходе предвыборной гонки за кресло президента Польши цинично убивают знаменитого журналиста Козельского. Польские телеканалы моментально подхватывают версию о вмешательстве России во внутренние дела страны, с целью поддержки силезских сепаратистов и дестабилизации обстановки. В качестве доказательства по ТВ крутят аудиозапись разговора российского посла Конобеева и одного из кандидатов в президенты Домбровского, которая, якобы, была разослана с почты убитого журналиста. Из небольшой искры раздувается геополитический пожар, способный нанести огромный ущерб интересам страны. Скомпрометированный сотрудник дипмиссии попадает в больницу с инфарктом, а на его место прибывает кризисный дипломат Вячеслав Васильев. Ему предстоит доказать, что обвинения в адрес Москвы не имеют под собой никаких оснований.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 336,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 721
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/7d2d4b1b-beb1-4fb1-b4d7-17785ce3e347/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/7d2d4b1b-beb1-4fb1-b4d7-17785ce3e347/x1000'
      },
      genres: [
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5647638,
      name: 'Хозяюшки',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Хозяюшками в «Яндексе» называют отдел, отвечающий за кафетерии, зоны отдыха и многое другое, что составляет знаменитую домашнюю атмосферу офисов компании. Чего только нет в этих офисных кофе-пойнтах и буфетах — и появляется это все по расписанию, в срок, в сотнях зданий в десятках городов. В фильме хозяюшки рассказывают о том, как проходят их дни и как устроена их заботливая работа.',
      shortDescription:
        'Кто обеспечивает сотрудников «Яндекса» снеками, напитками и канцелярией? Подробный док о буднях офисных фей',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 25
      },
      movieLength: 10,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/4001c736-3ad2-4527-ae78-3499d236735c/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/4001c736-3ad2-4527-ae78-3499d236735c/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/13074011/2a0000018fe8bc8a952a216a6d9ded13df4f/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/13074011/2a0000018fe8bc8a952a216a6d9ded13df4f/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5647637,
      name: 'de_Dacha',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Лучшие команды мира собрались в Дубае на заключительном LAN-турнире года по CS2 — они приехали, чтобы встретиться с давними соперниками, заявить о себе или остаться в статусе лидера. Чемпионы мейджоров FalleN и Snax, а также nafany, KaiR0N- и chopper рассказывают о том, за что любят игру, как справляются с поражениями и что заставляет их из раза в раз выходить на новый раунд. Индустрия киберспорта еще недавно была сообществом энтузиастов, но сегодня она полна букмекерских денег и серьезных контрактов.',
      shortDescription:
        'Звезды киберспорта сталкиваются на турнире по CS2. Драйвовый док об изнанке многомиллионной индустрии',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 31
      },
      movieLength: 25,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/de8e9f84-4472-4b39-a7bb-48ab006ffe1d/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/de8e9f84-4472-4b39-a7bb-48ab006ffe1d/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe8a6646b744666cc3defd73ce2/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe8a6646b744666cc3defd73ce2/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5639022,
      name: 'Край ночи',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'В 2020 году режиссер Андрей Натоцинский приехал в Сухум, и город встретил его темнотой: ни на центральной площади, ни вокруг не горели фонари. Узнав, что веерные отключения электричества связывают с криптомайнерами, которых в Абхазию привлекла дешевая электроэнергия, Натоцинский вернулся со съемочной группой. Чтобы разобраться, как устроен контраст между активной добычей криптовалюты и общей разрухой, обрамленной дикими пейзажами, за три года он провел четыре съемочных экспедиции. Однако «Край ночи» — это фильм не о майнерах, вернее, не столько о них, сколько вообще о регионе, который до сих пор не оправился от войны 92-93 годов, последовавших конфликтов и экономической катастрофы. Погружаясь в местную историю, разговаривая с самыми разными людьми, наблюдая приход и уход майнеров, Натоцинский старается создать объективную — насколько это возможно — картину жизни в Абхазии. Режиссер фокусируется на том, чтобы задавать вопросы, отдавая право делать заявления своим героям, и хотя его фильм снят нарочито живописно, чувства, которые он оставляет, вряд ли будут легкими.',
      shortDescription:
        'Как Сухум стал центром нелегального майнинга? Пронзительный док об истоках проблемы, погрузившей город во тьму',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 26
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/66950c96-be7d-4d5c-b92f-a0aa5c4219fa/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/66950c96-be7d-4d5c-b92f-a0aa5c4219fa/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018fe7c9fc355bef0735c98a41bd97/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018fe7c9fc355bef0735c98a41bd97/x1000'
      },
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5639025,
      name: 'Точно не керамика',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Завод «Дымов Керамика» и развернувшаяся вокруг него культурная жизнь стали неотъемлемой частью Суздаля — многие туристы удивляются тому, что еще двадцать лет назад ничего этого не было. Авторы снимают сооснователей завода Вадима Дымова и Евгению Зеленскую в мастерских и в быту и расспрашивают их, как они пришли к предпринимательству, чем вдохновляются и каково быть партнерами в бизнесе и в жизни. Из этих разговоров, очень живых, простых и открытых, складывается портрет людей, настолько увлеченных своим делом, что становится ясно, откуда взялась та самая атмосфера места, вовлекающего в свою орбиту так много людей и меняющего атмосферу города.',
      shortDescription:
        'Как устроена бурная жизнь завода по производству посуды? Док об одном из самых успешных предприятий Суздаля',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 5,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 25,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/28f32651-2f45-4154-804d-70162f494feb/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/28f32651-2f45-4154-804d-70162f494feb/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018fe83ccce8907c0cc663529b9337/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018fe83ccce8907c0cc663529b9337/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5639023,
      name: 'Сады всегда на следующий год',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Вы могли слышать о проекте «Сад им.» художника и куратора Артема Филатова — открытом мемориальном саде при частном крематории в Нижнем Новгороде. Туда можно прийти ногами, чтобы послушать звуковую инсталляцию или побыть в пространстве тихой рефлексии, а можно посетить это место виртуально — и посвятить одно из растений в саду кому-то из ушедших близких. Артем тесно связывает свою практику с историей Нижнего Новгорода, но при этом ставит вопросы, выходящие за рамки одного города и вообще нашего времени — он стремится создавать искусство, которое говорит о жизни и смерти и устремлено в будущее, по-новому раскрываясь для следующих поколений. В фильме Филатов рассказывает о «Саде» и других своих работах, а также об идеях, стоящих за ними.',
      shortDescription:
        'Художники разбивают прекрасный сад во дворе крематория. Док о том, как искусство работает со страхом смерти',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 10,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 12,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/50828dc0-7983-4d1e-bde6-8e360a643243/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/50828dc0-7983-4d1e-bde6-8e360a643243/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fe7e42189e2738c5299b7408667/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fe7e42189e2738c5299b7408667/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5639021,
      name: '4:30',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Незрячий пенсионер Илья планирует пробежать марафон за среднее для зрячих атлетов время — четыре с половиной часа. Молодой тренер Дима помогает ему правильно подойти к делу: выдержать темп, рассчитать нагрузку, продержаться до финиша. За 15 минут, которые длится фильм, мы увидим весь диапазон эмоций между ними, от раздражения до искренней поддержки, а также узнаем многое об Илье: к чему он стремится, когда перестал видеть, что в жизни он считает важным, а что — чепухой. Режиссер снимает героев на зернистую черно-белую пленку, перемежая пробежки и разговоры сюрреалистичными, фантазийными портретными кадрами, отделяет диалог от картинки и прошивают фильм пульсирующей звуковой дорожкой, пересобирает материал как коллаж, создавая небанальную и удивительно цельную эстетику. Получается кино, в котором гармонично сложилась редкая комбинация: чувство стиля и чувство юмора, история и портрет, визуальная красота и абсолютно живая фактура.',
      shortDescription: 'Тренер готовит незрячего бегуна к марафону. Захватывающий док с юмором и накалом эмоций',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 13,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/b6dc03c7-9827-4d61-9611-292eb664b737/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/b6dc03c7-9827-4d61-9611-292eb664b737/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018fe7b5cf0f9244d26a55c76992ea/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018fe7b5cf0f9244d26a55c76992ea/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5632822,
      name: 'Сасаки и Пи',
      alternativeName: 'Sasaki to Pii-chan',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        '39-летний офисный работник Сасаки смирился, что проживёт тихой обычной жизнью без приключений и опасностей. Но всё круто меняется, когда он решает взять домой яванского воробья, дав ему имя Пи. Мало того, что птица умеет говорить, выясняется, что она ещё и является реинкарнацией знаменитого волшебника из другого мира. Пи решает передать Сасаки часть своих способностей, в том числе возможность перемещаться между мирами. Решив воспользоваться ситуацией, мужчина организует прибыльный бизнес по продаже разного рода технологических изделий менее развитой цивилизации другого мира. Однажды с помощью сверхспособностей Сасаки спасает жизнь правительственному агенту Хосидзаки, которой поручено выслеживать подобных ему людей.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 26,
        imdb: 351,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 25,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/22533d6b-3186-4bcc-9dbb-8b351cfea61a/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/22533d6b-3186-4bcc-9dbb-8b351cfea61a/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'приключения'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5629414,
      name: 'Хотя бы в кино 3',
      alternativeName: 'Хотя бы кинода 3',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'После освобождения из тюрьмы Кайрат сразу бросается на поиски способа спасти свою больную мать. Диагноз врачей оказывается безжалостным: чтобы спасти жизнь матери, ему необходимо достать дорогостоящее медицинское оборудование из Китая и лекарства на миллион долларов. Без денег и постоянной работы Кайрат обращается за помощью к бывшим олигархам, которые также находятся в тюрьме. Они соглашаются помочь, но с условием: Кайрат должен доставить грузовик зерна в Китай. Встав перед выбором, Кайрат соглашается.\nВ пути через границу Китая Кайрата и его водителя останавливает и нападает неизвестная преступная группа. Они оба оказываются без сознания. Когда Кайрат приходит в себя, он обнаруживает себя в китайской «Школе Кунг-фу». Местный житель объясняет ему, что спас его и водителя, потому что их машина загорелась. Кайрат тут же связывается с олигархами в Казахстане, чтобы сообщить о произошедшем. Они признают, что в пропавшем грузе находилось ценное золото, и требуют его найти, угрожая, что иначе он больше не увидит свою мать. Теперь Кайрату предстоит раскрыть загадку похищения груза. Ему помогают учителя и ученики школы кунг-фу.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 332,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 40
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/784e5d41-13fc-49cb-aed2-438f847f2d01/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10812607/784e5d41-13fc-49cb-aed2-438f847f2d01/x1000'
      },
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Казахстан'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5609984,
      name: 'Молчание добычи',
      alternativeName: 'Silence of the Prey',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'В отчаянной попытке обеспечить будущее своему ребенку иммигрантка без документов устраивается на работу сиделкой к пожилому мужчине, не подозревая, что он скрывает жуткую тайну.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 10,
        imdb: 151,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 97,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/12840516-f584-4c34-8f7e-225de40e986c/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/12840516-f584-4c34-8f7e-225de40e986c/x1000'
      },
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627042,
      name: 'Шины',
      alternativeName: 'Tires',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 17,
        imdb: 6871,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 20,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2025
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5613193,
      name: null,
      alternativeName: 'Geek Girl',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 110,
        imdb: 3029,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 6
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 30,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        },
        {
          name: 'Канада'
        },
        {
          name: 'Великобритания'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10671298/6743e217-b44b-4626-abee-953a6649ba53/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/6743e217-b44b-4626-abee-953a6649ba53/orig'
      }
    },
    {
      id: 5461684,
      name: 'Неведомая Япония',
      alternativeName: 'Hidden Japan',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2020,
      description:
        'Культура Японии поражает воображение: от праздника цветения сакуры до ультрасовременных городов. Но дикая природа Японии не менее удивительна. На 6852 островах, входящих в состав Японии и располагающихся в разных климатических зонах, обитает более 130 видов млекопитающих и 600 видов птиц.',
      shortDescription:
        'Цветущая сакура, рисовые поля и действующие вулканы. Гипнотический док об одной из самых загадочных стран мира',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 67,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 46,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/de3029b3-3892-418e-9f92-92fa691bf573/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/de3029b3-3892-418e-9f92-92fa691bf573/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018e74aca9e7fa9eb82a7e06067f87/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018e74aca9e7fa9eb82a7e06067f87/x1000'
      },
      genres: [
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5607933,
      name: 'Подземелья Чикен Карри-27. Достучаться до небес',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 25,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 14
      },
      movieLength: 115,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10592371/d61f9789-8a4f-4e4d-ba83-249c2a7e87d3/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/d61f9789-8a4f-4e4d-ba83-249c2a7e87d3/orig'
      }
    },
    {
      id: 5629973,
      name: null,
      alternativeName: 'Rrugës',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Косово'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629978,
      name: null,
      alternativeName: 'Across the Waters',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629979,
      name: null,
      alternativeName: 'Volcelest',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629960,
      name: null,
      alternativeName: 'Gazer',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 114,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629969,
      name: null,
      alternativeName: 'Amarela',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Бразилия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629972,
      name: null,
      alternativeName: 'Les belles cicatrices',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629971,
      name: null,
      alternativeName: 'Sanki Yoxsan',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629970,
      name: null,
      alternativeName: 'Perfectly a Strangeness',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629961,
      name: null,
      alternativeName: 'Sister Midnight',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 110,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629957,
      name: null,
      alternativeName: 'Niki',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 98,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'биография'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629958,
      name: null,
      alternativeName: 'Les reines du drame',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 114,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Бельгия'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629955,
      name: null,
      alternativeName: 'Eephus',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 98,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629956,
      name: null,
      alternativeName: 'Les fantômes',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 106,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629954,
      name: null,
      alternativeName: 'Blue Sun Palace',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 116,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627754,
      name: 'Дворняга',
      alternativeName: 'Bai yi cang gou',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 5
      },
      movieLength: 128,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Тайвань'
        },
        {
          name: 'Сингапур'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627674,
      name: null,
      alternativeName: 'Covjek koji nije mogao sutjeti',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 13,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Хорватия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627532,
      name: null,
      alternativeName: 'Simón de la montaña',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 4
      },
      movieLength: 96,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/cd1fdac5-c877-4227-9884-de09888683e6/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10592371/cd1fdac5-c877-4227-9884-de09888683e6/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Аргентина'
        },
        {
          name: 'Чили'
        },
        {
          name: 'Уругвай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627356,
      name: null,
      alternativeName: 'Julie Keeps Quiet',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 97,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/d7cdbc98-7529-4431-9c61-b08ab4715e4b/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/d7cdbc98-7529-4431-9c61-b08ab4715e4b/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Бельгия'
        },
        {
          name: 'Швеция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627760,
      name: null,
      alternativeName: 'Bunnyhood',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 9,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627458,
      name: null,
      alternativeName: 'Three Kilometres to the End of the World',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 12
      },
      movieLength: 105,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Румыния'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627256,
      name: null,
      alternativeName: 'Mau por um momento',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/89ac3643-30e0-4f67-9675-29ba16a06ecc/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10812607/89ac3643-30e0-4f67-9675-29ba16a06ecc/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630899,
      name: null,
      alternativeName: 'Withered Blossoms',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 14,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Австралия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630898,
      name: null,
      alternativeName: "The Deer's Tooth",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 16,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630896,
      name: null,
      alternativeName: 'Mauvais coton',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 20,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630897,
      name: null,
      alternativeName: 'Praeis',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 27,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Литва'
        },
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630894,
      name: null,
      alternativeName: 'Elevación',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 28,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Мексика'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630895,
      name: null,
      alternativeName: 'In spirito',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 14,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Италия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630891,
      name: null,
      alternativeName: 'Plevel',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 14,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630892,
      name: null,
      alternativeName: 'Terminal',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 18,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630889,
      name: null,
      alternativeName: 'Forest of Echos',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 22,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630893,
      name: null,
      alternativeName: 'Crow Man',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 8,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630890,
      name: null,
      alternativeName: "It's Not Time for Pop",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 14,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Израиль'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5630888,
      name: null,
      alternativeName: 'Echoes',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 7,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629963,
      name: null,
      alternativeName: 'When the Light Breaks',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 82,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Исландия'
        },
        {
          name: 'Нидерланды'
        },
        {
          name: 'Хорватия'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5629959,
      name: null,
      alternativeName: 'La Pampa',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 104,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627669,
      name: 'Универсальный язык',
      alternativeName: 'Universal Language',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 7.4,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 20,
        russianFilmCritics: 0,
        await: 16
      },
      movieLength: 89,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627538,
      name: null,
      alternativeName: 'Baby',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: 107,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Бразилия'
        },
        {
          name: 'Франция'
        },
        {
          name: 'Нидерланды'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627531,
      name: null,
      alternativeName: 'Ma vie ma gueule',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 99,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627675,
      name: null,
      alternativeName: 'Volveréis',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 3
      },
      movieLength: 114,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Испания'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627539,
      name: null,
      alternativeName: 'The Brink of Dreams',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 102,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Египет'
        },
        {
          name: 'Франция'
        },
        {
          name: 'Дания'
        },
        {
          name: 'Катар'
        },
        {
          name: 'Саудовская Аравия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627668,
      name: null,
      alternativeName: 'Colored',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 32,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'биография'
        },
        {
          name: 'история'
        }
      ],
      countries: [
        {
          name: 'Тайвань'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627357,
      name: null,
      alternativeName: 'Noksan',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 23,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/545bdbaa-0a36-4494-8041-9284f117e584/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10592371/545bdbaa-0a36-4494-8041-9284f117e584/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Турция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627459,
      name: null,
      alternativeName: 'Las novias del sur',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 37,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/80a24a56-78e8-4912-a102-c4197083665c/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/80a24a56-78e8-4912-a102-c4197083665c/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5699221,
      name: 'Империя UFC',
      alternativeName: 'Fight Inc: Inside the UFC',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Закулисье главной ММА-организации в мире: многолетняя история развития промоушена и восхождения к славе её звезд, антураж вокруг главных боёв и ежедневная работа президента Дэны Уайта по организации крупнейших ивентов, рассказанная им самим, Хабибом Нурмагомедовым, Джоном Джонсом и другими бойцами, которые создавали наследие UFC.',
      shortDescription: 'Как UFC стал главным бойцовским шоу планеты? Рассказывают Хабиб, Дэна Уайт и другие легенды',
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.19
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 382
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 48,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/1ab93872-55a8-447c-8de0-f2c2483b5994/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/1ab93872-55a8-447c-8de0-f2c2483b5994/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018fea2109b68d0a4294a1d67ef540/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018fea2109b68d0a4294a1d67ef540/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5699552,
      name: 'История розы',
      alternativeName: 'Mei gui de gu shi',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Хуан Имэй родилась в интеллигентной семье и с самого детства занималась искусствами. На работе её сразу полюбили, там она познакомилась и завела отношения с коллегой, но эта любовь закончилась. Девушка вернулась в университет, окончила его, и вышла замуж за сокурсника. Но молодожёны не сошлись характерами, и в конце концов развелись. Имэй начала заниматься бизнесом и искусством, что позволило ей встретиться с идеальным мужчиной. Однако, и эта любовь оказалась скоротечной. Пережив столько неудачных отношений, девушка не отчаивается и продолжает с оптимизмом смотреть в будущее.',
      shortDescription:
        'Дочь ученых ищет свое призвание в мире искусства. Оптимистичная китайская мелодрама о пути к мечте',
      status: null,
      rating: {
        kp: 0,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 34,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 12
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10768063/218fea3f-92bf-45b1-a14b-5bfcba206b39/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10768063/218fea3f-92bf-45b1-a14b-5bfcba206b39/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fed65af7a9526cd71fdb37a3fe4/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fed65af7a9526cd71fdb37a3fe4/x1000'
      },
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5629200,
      name: null,
      alternativeName: 'Gaga Chromatica Ball',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 60,
        imdb: 1351,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 117,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/55feae32-ebd6-427c-98ce-3f40b2ad7aa6/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/55feae32-ebd6-427c-98ce-3f40b2ad7aa6/x1000'
      },
      genres: [
        {
          name: 'концерт'
        },
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5632758,
      name: null,
      alternativeName: 'Fern Brady: Autistic Bikini Queen',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 441,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 57,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5610381,
      name: null,
      alternativeName: 'Менің атым Қызболсын',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Адиль — помощник прокурора, единственный сын в патриархальной семье. Выслуживаясь на работе перед шефом, он «отмазывает» в суде семейного абьюзера — сынка высокопоставленного чиновника, избивающего жену. Однажды он просыпается в альтернативной вселенной, где мужчины и женщины занимают обратные роли. В этом мире он сталкивается с неравенством и предвзятым отношением к мужчинам. Адиль меняет свои взгляды на гендерное равенство и решает помочь жертве семейного насилия. Его действия приводят к увольнению из прокуратуры, но он продолжает бороться за справедливость. В конце концов, он решает стать независимым правозащитником.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 184,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 80,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 12,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/1b3ccf95-9044-4fa9-a724-bdc73958e3b7/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/1b3ccf95-9044-4fa9-a724-bdc73958e3b7/x1000'
      },
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Казахстан'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5632688,
      name: 'Вильф – ведьмин пёс',
      alternativeName: "Wilf the Witch's Dog",
      type: 'animated-series',
      typeNumber: 5,
      year: 2002,
      description:
        'Вильф хочет стать ведьминым псом, но сделать это очень сложно, так как ведьмы обычно держат других животных. К счастью, он встречает Вини, учительницу ведьм.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10768063/cc7bcb56-84eb-4424-9c16-476ea9028423/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10768063/cc7bcb56-84eb-4424-9c16-476ea9028423/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018fce27dd398e269d68ad03d27f72/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018fce27dd398e269d68ad03d27f72/x1000'
      },
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'детский'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      releaseYears: [
        {
          start: 2002,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5633117,
      name: 'Скрафф',
      alternativeName: 'Rovelló',
      type: 'animated-series',
      typeNumber: 5,
      year: 2000,
      description:
        'Семья туристов теряет своего щенка. После долгой ночи, проведенной в лесу, щенка находит Питер, молодой сельский рабочий, который усыновляет его и отвозит на ферму к своим тете и дяде.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 21,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/fc6d5e52-6893-457d-9921-053d7bc43958/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/fc6d5e52-6893-457d-9921-053d7bc43958/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018fce40936249f084ca34d3b798f0/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018fce40936249f084ca34d3b798f0/x1000'
      },
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'детский'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      releaseYears: [
        {
          start: 2000,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5613754,
      name: 'Орден цветов',
      alternativeName: 'Hua jian ling',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 27,
        imdb: 79,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/33f9b9a7-e3e9-429a-9ab3-029cd7f35d3f/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/33f9b9a7-e3e9-429a-9ab3-029cd7f35d3f/x1000'
      },
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'фэнтези'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5461747,
      name: 'Раскрывая творческий разум',
      alternativeName: 'Unraveling the Creative Mind',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2016,
      description:
        'Способность к творчеству — основной компонент человеческого прогресса. Искусство и технологии создают люди, которые не боятся мыслить иначе — не так, как все. Нейропсихиатр Нэнси Андерсен изучает творческие процессы в человеческом мозге и их связь с психическими расстройствами.',
      shortDescription:
        'Нейропсихиатр наблюдает за тягой к творчеству и работой мозга. Док о креативности и мышлении вне стандартов',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 36,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 10,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/4293f08f-8432-49ac-8050-0427325401f6/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/4293f08f-8432-49ac-8050-0427325401f6/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018e7efee6cfc7a2485558fd8e20a1/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018e7efee6cfc7a2485558fd8e20a1/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5632573,
      name: null,
      alternativeName: 'Ni una más',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 7.367,
        imdb: 7.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 385,
        imdb: 1603,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 9
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5629430,
      name: 'Тесла Kids',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2021,
      description: null,
      shortDescription:
        'Как сделать дома вулкан или сварить мыло? Увлекательные эксперименты для детей от канала Капуки Кануки',
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 11,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/03195d21-6552-4cac-b4dc-aa7bfe6ded30/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/03195d21-6552-4cac-b4dc-aa7bfe6ded30/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe2f34747cda2e826e0f6d32b96/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe2f34747cda2e826e0f6d32b96/x1000'
      },
      genres: [
        {
          name: 'детский'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2021,
          end: 2022
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5631494,
      name: 'Наследие миллионера',
      alternativeName: 'Milijonieriaus palikimas',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 6,
        imdb: 185,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 84,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Литва'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5613191,
      name: 'Цвета зла: Красный',
      alternativeName: 'Kolory zla. Czerwien',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'На пляже находят тело молодой девушки. Расследование возглавляет амбициозный и упорный прокурор Леопольд Бильский. К расследованию подключается и мать жертвы, судья Хелена Богуцкая. Все улики ведут в один из приморских клубов, который оказывается связан с убийством женщины 15-летней давности.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 6.365,
        imdb: 6.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 206,
        imdb: 3632,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 111,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'драма'
        },
        {
          name: 'криминал'
        },
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'Польша'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5611775,
      name: null,
      alternativeName: 'El correo',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 66,
        imdb: 2377,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 101,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'драма'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'Испания'
        },
        {
          name: 'Бельгия'
        },
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5608204,
      name: 'Убийственный отсчёт тел',
      alternativeName: 'Killer Body Count',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 21,
        imdb: 172,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 109,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Канада'
        },
        {
          name: 'ЮАР'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5627147,
      name: 'Мунджья',
      alternativeName: 'Munjya',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 13,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 23
      },
      movieLength: 140,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486362/661529f2-e4de-4078-ae6c-105312ef1f99/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486362/661529f2-e4de-4078-ae6c-105312ef1f99/x1000'
      },
      genres: [
        {
          name: 'ужасы'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Индия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5611838,
      name: 'Райзмен',
      alternativeName: 'RiseMan',
      type: 'animated-series',
      typeNumber: 5,
      year: 2023,
      description:
        '17-летний Скотт — сын владельца знаменитого ресторанчика в Зеро-Сити, который мечтает стать шеф-поваром. Однажды во время доставки он находит упавший с неба Геокамень. Земля подвергается нападению космических монстров, которые пришли за Геокамнями. Космическая полиция «Райз» приходит на помощь Зеро-Сити. Скотт надевает пояс, который позволяет превращаться в Райзмана, и теперь парень будет сражаться с бесчисленными монстрами, чтобы спасти Землю.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 5,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 14,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/db04982f-3fc8-4164-9dad-801afc75b33e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/db04982f-3fc8-4164-9dad-801afc75b33e/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018fcfb15f9f4e93290fa9728f8c24/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018fcfb15f9f4e93290fa9728f8c24/x1000'
      },
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'боевик'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Корея Южная'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5632634,
      name: 'Технологии',
      alternativeName: 'The Tech Effect',
      type: 'tv-series',
      typeNumber: 2,
      year: 2021,
      description:
        'Технологии — это портал в будущее, взгляд на идеи и изобретения, которые могут повлиять на жизнь в следующем столетии. От киберспорта до робототехники, от домашней автоматизации до автономных автомобилей — сериал показывает потенциал передовых технологий для улучшения жизни, не забывая при этом о рисках.',
      shortDescription:
        'Истории изобретений, призванных упростить жизнь человека. Австралийский док о плюсах и минусах прогресса',
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/e2ea348f-e026-4a0d-b1f9-568ddddbdbd9/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10592371/e2ea348f-e026-4a0d-b1f9-568ddddbdbd9/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/13051577/2a0000018fc49719770a4f2ede87e4409432/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/13051577/2a0000018fc49719770a4f2ede87e4409432/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Австралия'
        }
      ],
      releaseYears: [
        {
          start: 2021,
          end: 2021
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5626362,
      name: 'Южный парк: Конец ожирения',
      alternativeName: 'South Park: The End of Obesity',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 6.893,
        imdb: 7.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 381,
        imdb: 4371,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 50,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618636,
      name: 'Русский Медичи',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Фильм рассказывает о русском меценате Савве Мамонтове. Его называли Саввой Великолепным и московским Медичи. В Абрамцеве он создал отдельный мир с идеальными условиями для художников, театралов и просто ценителей искусства. Он первым открыл частную оперу, где продвигал исключительно русских авторов. Савва Мамонтов всю свою жизнь посвятил развитию и культивированию русского искусства. В фильме не просто рассказана биография мецената, но и сделана попытка разгадать феномен Саввы Мамонта, понять мотивы его масштабного меценатства, осознать глобальную миссию этого человека и оценить его вклад в отечественную культуру.',
      shortDescription:
        'Как промышленник стал покровителем художников? Док о Савве Мамонтове и его вкладе в экономику и культуру',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/41ab4bfb-5da7-4bbe-9ccd-e75d119b266e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10835644/41ab4bfb-5da7-4bbe-9ccd-e75d119b266e/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018fba0d6b19eca2834eb41eac6321/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018fba0d6b19eca2834eb41eac6321/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618633,
      name: 'Русский хозяин',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Фильм посвящен 100-летней годовщине смерти Павла Павловича Рябушинского и его семье. Наш фильм — это не просто биографическая зарисовка, это попытка разгадать феномен Павла Рябушинского, понять мотивы его масштабного меценатства, осознать глобальную миссию этого человека и оценить его вклад в отечественную культуру и историю. Главный герой фильма — Павел Рябушинский, его судьба, его успехи и неудачи, его политическая и предпринимательская деятельность. Также в фильме рассказывается и о всей династии, к которой он принадлежал. Мы исследуем принципы предпринимательства представителей старообрядческих семей, изучаем, как они умели вести дело, как сочетали бизнес и традиции. Кроме того, в нашем фильме мы оцениваем вклад Рябушинских в развитие русского искусства. Мы надеемся, что наш фильм вызовет интерес у современных зрителей к наследию дореволюционных предпринимателей и к их вкладу в развитие экономики, науки, образования, культуры и искусства России.',
      shortDescription:
        'Выходец из старообрядческой семьи становится меценатом. Док о предпринимателе и политике Павле Рябушинском',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/396d5ead-fe60-45c2-86b4-ba0b0abe9cb0/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/396d5ead-fe60-45c2-86b4-ba0b0abe9cb0/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018fba411ee10859a0aa9c9f4170ec/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018fba411ee10859a0aa9c9f4170ec/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618635,
      name: 'Русская живопись',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description:
        'Фильм посвящен истории русской живописи, ее истокам, главным вехам и основным периодам своего развития. В нем будут освещены разные этапы истории Русской живописи: древнерусский период, затем знакомство России с западной школой живописи и открытие в 1757 году «Академия трех знатнейших художеств»; история XIX столетия, как золотого века русской живописи; несколько периодов ХХ века, когда русская живопись встала на путь отрицания классики и разделения на огромное количество различных течений, затем Советский период, создание в 1932 году Союза художников СССР, художники в годы Великой Отечественной войны, в период оттепели, застоя и перестройки; и, разумеется, современное искусство сегодня, перспективы его развития.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/0845eabd-5056-4138-b94c-63748b59ff10/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/0845eabd-5056-4138-b94c-63748b59ff10/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018fb9f736610185d94c7eff932d85/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018fb9f736610185d94c7eff932d85/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618634,
      name: 'Русская классическая музыка',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Фильм посвящен большому пути, который прошла русская музыка в разные периоды истории: от знаменной музыки до произведений современных композиторов. С точки зрения общемировой истории культуры русская классическая музыка в том виде, в котором мы ее знаем сегодня, появилась довольно поздно — в первой половине 19 века. Но появление это имело во всем мире ошеломляющий эффект. Значительная часть повествования посвящена 19 веку и таким величайшим композиторам, как Глинка, Даргомыжский, Чайковский, Бородин, Мусоргский и многим другим. Большое место в фильме занимает ХХ век, подаривший не менее гениальных композиторов: Свиридов, Хачатурян, Прокофьев, Шостакович, Щедрин. Завершает фильм исследование современности.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/93d69d78-7550-421b-a38e-c492045c7b56/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/93d69d78-7550-421b-a38e-c492045c7b56/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018fba26983da00e4b611c931b9b89/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018fba26983da00e4b611c931b9b89/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618630,
      name: 'Русский театр',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description:
        'Посвящается истории русского театра, его истокам, главным вехам и основным периодам своего развития, его влиянии на страну и мир. В фильме будут освещены разные этапы истории русского театра: истоки в народных балаганных представлениях и мистерии-проповедях; открытие публичных и крепостных театров в России; Александр Островский — основоположник современной русской драматургии; Константин Станиславский — создатель новой школы актерского мастерства; творчество Олега Ефремова, Юрия Любимова, Галины Волчек, Андрея Гончарова и, разумеется, современный театр сегодня, перспективы его развития.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/463308ea-a3cb-4c50-a44b-83c0b6de6706/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/463308ea-a3cb-4c50-a44b-83c0b6de6706/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fb9d231c9a5a33612e4d26ec035/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018fb9d231c9a5a33612e4d26ec035/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5618570,
      name: 'Русская архитектура',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Большое путешествие в историю, попытка осмыслить, как менялась отечественная архитектура, какие события и личности влияли на эти изменения, и понять с каким багажом мы подошли ко дню сегодняшнему. Что создают современные архитекторы, и какой они видят архитектуру будущего. Мы надеемся, что наш фильм привлечёт внимание не только любителей русского зодчества, но и вызовет интерес у людей пока ещё далёких от яркого многообразия национального архитектурного наследия.',
      shortDescription:
        'От древних теремов — до современных небоскребов. Док о прошлом и будущем отечественного градостроительства',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/65166c66-284e-41ff-89a8-7ebde44752ce/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/65166c66-284e-41ff-89a8-7ebde44752ce/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fba95449c6178c95f3e123281e8/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fba95449c6178c95f3e123281e8/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5613575,
      name: 'Цветняшки. Песни',
      alternativeName: null,
      type: 'animated-series',
      typeNumber: 5,
      year: 2022,
      description:
        'Добрые истории, которые знакомят малышей и их родителей с героями Вселенной Цветняшек. Песни Цветняшек формируют музыкальный вкус, расширяют кругозор, способствуют пополнению активного и пассивного словарного запаса и становлению речи, создают приятную атмосферу, развивая малыша в разных направлениях.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 6,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 3,
      ratingMpaa: null,
      ageRating: 0,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/e5195492-bfe0-41f1-a4ad-2540c4be54d2/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/1898899/e5195492-bfe0-41f1-a4ad-2540c4be54d2/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018fa51c5658b00ac139adcced8f3f/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018fa51c5658b00ac139adcced8f3f/x1000'
      },
      genres: [
        {
          name: 'детский'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'мюзикл'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2022,
          end: 2022
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5608205,
      name: 'Дихотомии',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Рассказ о людях в медицине. Фильм построен на откровенных воспоминаниях и размышлениях 50 человек, которые лечатся, лечат, помогают выздоравливать и принимать себя в новом качестве. Перед камерой они впервые выходят из функциональных ролей «врач — пациент», делятся всем наболевшим, что не могли сказать в моменте, и размышляют о темах, которые редко обсуждаются в контексте медицины — о гендере, деньгах, вере в высшие силы, о романтических и сексуальных отношениях и обо всем, что им по-человечески важно.',
      shortDescription:
        'Что помогает в борьбе с болезнью и как пережить утрату? Искренние истории российских медиков и их подопечных',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 90,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 123,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/93aeb117-53e6-4ae7-ad93-3bc60efe6c6a/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/93aeb117-53e6-4ae7-ad93-3bc60efe6c6a/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018f96c91ce6ef3f8b6bedf17a2f30/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018f96c91ce6ef3f8b6bedf17a2f30/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5608206,
      name: 'Арена ди Верона: Тоска',
      alternativeName: 'Giacomo Puccini: Tosca - Arena di Verona',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Каждое лето тысячи любителей музыки стекаются в Верону на одно из важнейших оперных событий года — оперный сезон на древнеримской Арене. Постановка использует обширное пространство амфитеатра для размещения массивных сценических элементов, заимствованных из реальных римских локаций, в которых происходит действие.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 8,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 136,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/cb0cae92-e312-4527-adf3-494b08b50b32/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/cb0cae92-e312-4527-adf3-494b08b50b32/x1000'
      },
      genres: [
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'Италия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: true
    },
    {
      id: 5613545,
      name: 'Лучший джасс – русский',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description:
        'Фильм рассказывает о зарождении джаза, о его появлении, развитии и становлении в России, о взаимопроникновении культур и влиянии русского авангарда начала 20-го века на американский джаз, о серьëзном и курьëзном в джазовом сообществе.',
      shortDescription:
        'Именитые исполнители, музыковеды и культурологи — об истории жанра. Док, посвященный юбилею российского джаза',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10768063/aaf31049-6437-4022-bb67-4fad82773cff/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10768063/aaf31049-6437-4022-bb67-4fad82773cff/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fa4e4a7c0f0f259032100026f4f/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fa4e4a7c0f0f259032100026f4f/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5461825,
      name: 'Что видят животные',
      alternativeName: 'What Animals See',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2018,
      description:
        'Как животные воспринимают окружающий мир? Как зрение животного связано с его местом в природе? Профессор Томас Кронин рассказывает, как устроены самые сложные и необычные глаза в царстве животных, и как у животных вообще появились органы зрения.',
      shortDescription:
        'Как особенности зрения помогают животным ориентироваться и охотиться? Мир глазами разных представителей фауны',
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 256,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 28,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/92887c89-fd6c-409b-9624-80c2b609d152/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10671298/92887c89-fd6c-409b-9624-80c2b609d152/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018e7f135bc01a10661eadfacc4064/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018e7f135bc01a10661eadfacc4064/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5145681,
      name: null,
      alternativeName: 'Lil Wayne: A Milli',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2008,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 6,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5151550,
      name: null,
      alternativeName: 'Warriors Feat. Imagine Dragons: League of Legends',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2014,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 7,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 3,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5150880,
      name: null,
      alternativeName: 'Tyga & Jhené Aiko & Pop Smoke: Sunshine',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 7,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 4,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5605745,
      name: null,
      alternativeName: "L'Heureuse élue",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10812607/609a7bc9-381d-4668-8eb9-5ec58f50baf2/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/609a7bc9-381d-4668-8eb9-5ec58f50baf2/orig'
      }
    },
    {
      id: 5605746,
      name: 'Бэмби',
      alternativeName: "Bambi, L'histoire d'une vie dans les bois",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 20
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/45a7025d-cd98-409c-820e-1a5b1b76f718/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10671298/45a7025d-cd98-409c-820e-1a5b1b76f718/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600611,
      name: 'Пульс',
      alternativeName: 'Pulse',
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5595409,
      name: 'Беззаконный адвокат',
      alternativeName: 'Law-less',
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'триллер'
        },
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Таиланд'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5598979,
      name: 'Форсаж. Полный вперёд',
      alternativeName: 'Get Fast',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599057,
      name: 'Смертельный закат',
      alternativeName: 'Desert Dawn',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'триллер'
        },
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600734,
      name: null,
      alternativeName: 'Myth of Man',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'фантастика'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595289,
      name: null,
      alternativeName: 'Batman: Knightfall, Part 1',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595288,
      name: null,
      alternativeName: 'Onslaught',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        },
        {
          name: 'боевик'
        },
        {
          name: 'триллер'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599591,
      name: null,
      alternativeName: 'Untitled John Wick Caine Spinoff',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595390,
      name: 'За её грехи',
      alternativeName: 'For Her Sins',
      type: 'tv-series',
      typeNumber: 2,
      year: 2023,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 5.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 11,
        imdb: 669,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 60,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: 2023
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5595345,
      name: 'MF Призрак',
      alternativeName: 'MF Ghost',
      type: 'anime',
      typeNumber: 4,
      year: 2023,
      description:
        'В 2020-х электромобили доминируют в повседневной жизни, а интерес к автомобилям с двигателями внутреннего сгорания поддерживается лишь благодаря автогонкам MFG. Сотни гонщиков, за которыми онлайн наблюдают 30 миллионов зрителей, изо всех сил стремятся попасть в топ-15, чтобы побороться за главный приз в размере 100 миллионов иен. Среди тех, кто также стремится к вершине — 19-летняя Каната Ривингтон, которая приехала в Японию после обучения в гоночной школе Англии и участвует в чемпионате под фамилией Катагири. Для Канаты участие в MFG лишь ступенька на пути к главной цели — найти пропавшего много лет назад отца.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 8,
        imdb: 389,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/27947b5d-973d-4d7e-ba60-783ab2442d9e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/27947b5d-973d-4d7e-ba60-783ab2442d9e/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'драма'
        },
        {
          name: 'спорт'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5599922,
      name: 'Оперативная память',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description:
        'Опытный майор Багрышев (Андрей Смоляков) ревностно воспринимает прикрепление к нему молодого стажёра Соломатина (Кузьма Сапрыкин), думая, что его появление лишь приблизит выход на пенсию. Однако первые симптомы Альцгеймера еще больше усугубляют его положение — Багрышев понимает, что ему придется уйти в отставку. Соломатин считает, что майор — настоящий ас в оперативном розыске, и именно у него он должен учиться, чтобы стать первоклассным полицейским. Поэтому предлагает новому начальнику заключить договор: Багрышев передаёт ему весь свой опыт и знания, а взамен он становится для него своеобразной «оперативной памятью», то есть всячески помогает и подчищает все его проколы. Багрышев соглашается. В первый же день совместной работы напарники обнаруживают в озере трупы. Способ убийства напоминает почерк маньяка, которого Багрышев застрелил при задержании несколько лет назад. Майору и стажеру предстоит докопаться до правды в этом запутанном деле, но у них не так много времени, ведь важные «файлы» стираются из головы опытного следака.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 4
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5601369,
      name: 'Разящий луч',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description:
        'КГБ СССР встревожен попытками ЦРУ проникнуть в секреты лаборатории нобелевского лауреата Николая Басова, разрабатывающей лазеры для противоракетной обороны. Полковник КГБ Валентин Симагин вербует Кима Никанорова, бывшего сотрудника лаборатории, ставшего валютным спекулянтом. Он должен стать каналом дезинформации для американцев о деятельности лаборатории. Кима устраивают снова работать к Басову и помогают ему установить контакты с резидентом ЦРУ.\nВсе идет по плану КГБ, но вскоре Ким сталкивается с очень опытной и изощренной противницей — агентом ЦРУ с позывным Леонардо. Она подозревает, что Ким — подставная фигура КГБ.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5595307,
      name: 'Взрывной храбрец Брейверн',
      alternativeName: 'Yuuki Bakuhatsu Bang Bravern',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'Во время совместных учений армий разных стран на Гавайях на военных внезапно нападает неизвестный враг. Используя гигантские механизированные костюмы Титанострайдер, солдат сухопутных сил самообороны Японии Ао Исами и американский морпех Льюис Смит объединяются, чтобы одолеть опасного противника.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 11,
        imdb: 88,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 276,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/5eadd58e-51f0-45a0-93f3-9bc8fbe1d54e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10592371/5eadd58e-51f0-45a0-93f3-9bc8fbe1d54e/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5599663,
      name: null,
      alternativeName: 'Devuélveme la vida',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 9.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 13,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 60,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Колумбия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/11c5dbb6-ff7c-4b07-804c-5eb185b31bc6/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/11c5dbb6-ff7c-4b07-804c-5eb185b31bc6/orig'
      }
    },
    {
      id: 5595853,
      name: 'Скандал',
      alternativeName: 'Seukaendeul',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 7
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 40,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'детектив'
        },
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Корея Южная'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5595575,
      name: 'Доктор Экстаз',
      alternativeName: 'Dxktexr khilmæks pucchâ phâ seîyw',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 98.47
      },
      votes: {
        kp: 0,
        imdb: 13,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 170
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 60,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/545b57f2-74b9-4805-bb4f-c10a7f4fe355/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10835644/545b57f2-74b9-4805-bb4f-c10a7f4fe355/x1000'
      },
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Таиланд'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5595556,
      name: 'Мисс День и Ночь',
      alternativeName: 'Natgwa bami dareun geunyeo',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Ли Ми-джин уже несколько лет тщетно пытается найти приличную работу, а пока перебивается подработками и получает различные квалификационные сертификаты. Однажды утром она обнаруживает себя в теле 50-летней женщины. И так теперь происходит каждый день: с восходом солнца — женщина средних лет, с заходом — девушка.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 28
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 70,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'мелодрама'
        },
        {
          name: 'фэнтези'
        }
      ],
      countries: [
        {
          name: 'Корея Южная'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10812607/90a3238c-4761-4df0-86dd-86d689ac227f/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/90a3238c-4761-4df0-86dd-86d689ac227f/orig'
      }
    },
    {
      id: 5595330,
      name: 'Девчонки с Хоккайдо чудо как милы',
      alternativeName: 'Dosanko Gal wa Namara Menkoi',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'Старшеклассник Цубаса Сики переезжает из Токио на Хоккайдо и сразу начинает исследовать живописные зимние пейзажи, которых он никогда не видел в столице. С первым же порывом чистого морозного воздуха идеализированное представление Цубасы о самой северной префектуре Японии рушится в один миг. Пытаясь найти дорогу к своему новому дому, парень встречает одетую в короткую юбку Минами Фуюки — разговорчивую и дружелюбную уроженку Хоккайдо.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 59,
        imdb: 679,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 288,
      seriesLength: 24,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/bec4a477-9d68-4d58-9b70-0d25dcb4d0ef/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/bec4a477-9d68-4d58-9b70-0d25dcb4d0ef/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5212126,
      name: null,
      alternativeName: 'Clint Eastwood, la dernière légende',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 187,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 78,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'биография'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595287,
      name: 'Сестрички',
      alternativeName: 'Sestrenicky',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 1988,
      description: 'Про двух сестричек, которые жили за городом и любили сардельки из свежего мяса.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 7,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Чехословакия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600733,
      name: null,
      alternativeName: 'Murder Company',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 6
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/7af798b4-5550-4c99-98fc-1dae108bc454/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/7af798b4-5550-4c99-98fc-1dae108bc454/x1000'
      },
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'военный'
        }
      ],
      countries: [
        {
          name: 'Болгария'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599850,
      name: 'Поезд 13',
      alternativeName: 'Kereta Berdarah',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'В поезде, который следует на курорт, начинается кровавый террор. При каждом въезде в тоннель силы тьмы захватывают вагон за вагоном, а пассажиры погружаются в пучину ужаса.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 113,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 103,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/6532bab5-6e14-44e9-b412-97b1f83bd3b2/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10812607/6532bab5-6e14-44e9-b412-97b1f83bd3b2/x1000'
      },
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Индонезия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600641,
      name: 'Кое-что ещё',
      alternativeName: "Un p'tit truc en plus",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: 'Спасаясь от полиции, грабители отец и сын случайно находят убежище в летнем лагере для инвалидов.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 758,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 99,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/293de215-8229-4948-8bb4-1b5682d525aa/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/293de215-8229-4948-8bb4-1b5682d525aa/orig'
      }
    },
    {
      id: 5599921,
      name: 'Перейти черту',
      alternativeName: 'Sao hei jue bu fang qi',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 115,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/4f80ef13-ce9a-471b-9e99-ff8f8470ce37/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/4f80ef13-ce9a-471b-9e99-ff8f8470ce37/x1000'
      },
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600459,
      name: null,
      alternativeName: 'Biônicos',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 21,
        imdb: 1032,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 110,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'фантастика'
        },
        {
          name: 'боевик'
        },
        {
          name: 'триллер'
        },
        {
          name: 'приключения'
        },
        {
          name: 'спорт'
        }
      ],
      countries: [
        {
          name: 'Бразилия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595295,
      name: 'Голос из космоса',
      alternativeName: 'Wow! Nachricht aus dem All',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Аннабелль и Дино — друзья, которых объединяет любовь к астрономии. Однажды они получают таинственное послание из космоса. Ребята уверены, что с ними пытались связаться внеземные цивилизации, но взрослые отказываются им верить. Во время экскурсии на космодром они случайно попадают на космический корабль и оказываются на орбите совсем одни. Воспользовавшись шансом, друзья отправляются в захватывающее приключение на поиски инопланетян.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 44,
        imdb: 52,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 103,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486362/9b4af53d-afe8-47a6-9fe6-e3848001718a/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486362/9b4af53d-afe8-47a6-9fe6-e3848001718a/x1000'
      },
      genres: [
        {
          name: 'фантастика'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'приключения'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: true
    },
    {
      id: 5598980,
      name: 'Фрэнк. Засланец из космоса',
      alternativeName: 'Franta Mimozemstan',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 16,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'фантастика'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Чехия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10812607/5dfbed8a-ecda-489a-956d-502ba3bbceb6/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/5dfbed8a-ecda-489a-956d-502ba3bbceb6/orig'
      }
    },
    {
      id: 5599056,
      name: null,
      alternativeName: 'Gump - Jsme dvojka',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 9.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 11,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 87,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Чехия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10768063/863dd823-abae-43a6-a74b-2a9dbde49c90/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10768063/863dd823-abae-43a6-a74b-2a9dbde49c90/orig'
      }
    },
    {
      id: 5599923,
      name: 'Отель «Жизнь»',
      alternativeName: 'Lai fu da jiu dian',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 118,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/cc8ce696-49b9-42ae-bf47-8a9059757a13/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/cc8ce696-49b9-42ae-bf47-8a9059757a13/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595574,
      name: 'Инопланетный апокалипсис',
      alternativeName: 'Alien Apocalypse',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 43,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 87,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'фантастика'
        },
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595286,
      name: 'Клаус и Баррузу',
      alternativeName: 'Klaus & Barroso',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Погрязнув в долгах, румынский бармен Клаус придумывает, как раздобыть денег. Он сдаёт в аренду на ночь бар, не поставив хозяина в известность. В эту свою хитрую схему он втягивает и своего брата, добродушного вышибалу Баррузу. В арендованном баре они устраивают мальчишник для наивного юноши, собравшегося жениться на зрелой тётке. И, разумеется, попойка по случаю грядущей свадьбы идёт наперекосяк с первых же минут.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 18,
        imdb: 1022,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 87,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Румыния'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595543,
      name: 'Свидание',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595544,
      name: 'Ослепительная Кирари',
      alternativeName: 'Kirakira Kirari',
      enName: null,
      type: 'anime',
      typeNumber: 4,
      year: 2022,
      description:
        'Однажды робкая школьница Кирари, которая любит рисовать, встречает загадочную девочку, которая переносит её в иной мир.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 10,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/75627a13-3ca8-481e-9276-5280155a3b4a/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/75627a13-3ca8-481e-9276-5280155a3b4a/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        },
        {
          name: 'фэнтези'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599589,
      name: 'Мастер',
      alternativeName: 'Master',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2015,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        },
        {
          name: 'Черногория'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595294,
      name: 'На 1 секунду впереди, на 1 секунду позади',
      alternativeName: 'Ichibyou Saki no Kare',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 179,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 119,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/63dbb8ba-9986-45cb-b852-bc6143ce481b/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10835644/63dbb8ba-9986-45cb-b852-bc6143ce481b/x1000'
      },
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595284,
      name: null,
      alternativeName: 'War and Justice',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 33,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 93,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595545,
      name: 'Космическая путешественница Титти',
      alternativeName: 'Uchuu Camper Chicchi',
      enName: null,
      type: 'anime',
      typeNumber: 4,
      year: 2022,
      description:
        'Будущее. Обычная офисная работница Титти решает провести отпуск в космическом лагере. По пути ей приходится совершить аварийную посадку на планете, которая является кладбищем для списанных космических кораблей.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 9,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/e9a3e341-1146-4c29-bfe5-e07d788fb079/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/e9a3e341-1146-4c29-bfe5-e07d788fb079/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599849,
      name: 'Проклятие джинна',
      alternativeName: 'Khong Khaek',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Семья Вина становится объектом преследования страшных джиннов. Пытаясь спастись, Вин перевозит родных в отдалённую южную провинцию, но зло настигает их и здесь.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 112,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 98,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486362/11d3ffcc-081d-48f2-81b3-39dd8d88e8af/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486362/11d3ffcc-081d-48f2-81b3-39dd8d88e8af/x1000'
      },
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Таиланд'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599055,
      name: 'Лучшим игрокам приготовиться',
      alternativeName: 'Game On',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 2.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 187,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 85,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Нидерланды'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10900341/12abda61-6c05-456d-9388-ef312f5ab0f1/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/12abda61-6c05-456d-9388-ef312f5ab0f1/orig'
      }
    },
    {
      id: 5599852,
      name: 'Золото или хрень',
      alternativeName: 'Zou zou ting ting',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 40,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 99,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/864b8f8d-7e75-4b38-a2c3-ef12754246c9/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10835644/864b8f8d-7e75-4b38-a2c3-ef12754246c9/x1000'
      },
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599662,
      name: 'Твой образ',
      alternativeName: 'The Image of You',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 12,
        imdb: 368,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: 'r',
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 290756,
      name: null,
      alternativeName: 'Kinder der Schlafviertel',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2005,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 35,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595677,
      name: 'Тастаймын-ау сени',
      alternativeName: 'Тастаймын-ау сені',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Жарас и Алмагуль женаты уже более десяти лет. Жарас работает в большой компании на хорошей должности, Алмагуль не работает, но хочет развиваться как личность. Ни о чем не спрашивая Алмагуль, Жарас покрывает её нужды лишь деньгами. Из-за пренебрежения Алмагуль начинает пьянствовать. Однажды, напившись, Алмагуль позорит Жараса перед его начальником. Не выдержав такого, на следующий день Жарас решает отправить жену на лечение к одному из сильнейших лекарей.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 274,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/7c375fc3-0094-48d7-8a10-b7470f416caf/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/7c375fc3-0094-48d7-8a10-b7470f416caf/x1000'
      },
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Казахстан'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      backdrop: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018fe3368805dbf7f1322cf0d1d413/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018fe3368805dbf7f1322cf0d1d413/orig'
      }
    },
    {
      id: 5595585,
      name: null,
      alternativeName: 'Adam bol',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Сын богатого олигарха Арсен с рождения привык жить в роскоши. Чрезмерная избалованность довела его до безумного высокомерия. Заметив в сыне несерьезность к жизни, Болат ставит ультиматум Арсену. Он должен поехать в штаты и продлить контракт с партнерами. В случае неудачи отец лишает его роскошной жизни…',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 9,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/bba8a295-acd8-415f-a104-dc53ae98efb9/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/bba8a295-acd8-415f-a104-dc53ae98efb9/x1000'
      },
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Казахстан'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595285,
      name: 'Слэшер',
      alternativeName: 'Slasher',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 72,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 95,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5600724,
      name: null,
      alternativeName: 'Queer Planet',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 703,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5599851,
      name: 'Охотник на призраков',
      alternativeName: 'The Spirit Hunter',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 105,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/7fdd2331-c85e-4241-a36a-c79de9e0639e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/7fdd2331-c85e-4241-a36a-c79de9e0639e/x1000'
      },
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Таиланд'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5595321,
      name: 'Жара позднего лета',
      alternativeName: 'Neutdeowo',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 126,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/34ac357a-127e-46e0-bfd9-a1fa91c6d183/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10592371/34ac357a-127e-46e0-bfd9-a1fa91c6d183/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Корея Южная'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5498864,
      name: 'Полночь',
      alternativeName: 'Middonaito',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 16,
        imdb: 89,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 19,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/c3345aa5-9070-4b71-b45f-ca1cf4f9e49d/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/c3345aa5-9070-4b71-b45f-ca1cf4f9e49d/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'боевик'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5593289,
      name: 'Неправильный способ использования исцеляющей магии',
      alternativeName: 'Chiyu Mahou no Machigatta Tsukaikata',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'Кэн Усато — обычный старшеклассник, который мечтает, чтобы в его жизни произошло что-нибудь фантастическое. И вскоре так и происходит, когда он переносится в другой мир вместе с выдающимися членами ученического совета Рюсэном Кадзуки и Судзунэ Инуками. По прибытии в королевство Ллингер троицу принимают за героев, которым поручено остановить армию повелителя демонов. Правда, в отличие от Рюсэна и Судзунэ, которые получили крутые способности, Кэн не является героем и обладает лишь чрезвычайно редкой магией исцеления.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 7.059,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 93,
        imdb: 1332,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 299,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/8328345d-6db8-49d5-9331-0ac4c356f4ef/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/8328345d-6db8-49d5-9331-0ac4c356f4ef/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5594916,
      name: 'Идеальная жертва',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Полина учится в художественном училище, рисует картины на заказ, но клиентов немного. Однажды она пишет автопортрет, который за огромные деньги тут же покупает молодой загадочный красавец. Он обаятелен, нежен, богат и готов носить Полину на руках, их отношения развиваются стремительно. Недолго думая, девушка соглашается выйти замуж, поселившись в его уединенном доме. И с этого момента жизнь Полины превращается в кошмар — муж стремится во всем контролировать жизнь возлюбленной и готов удерживать ее рядом любой ценой.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 28
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        },
        {
          name: 'фантастика'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594708,
      name: 'Королева со скальпелем',
      alternativeName: 'Gekai Elise',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'В прошлой жизни известная талантливая женщина-хирург Аои Такамото была злодейкой благородного происхождения по имени Элиз де Клоранс. Эгоизм, дерзость и одержимая любовь к жениху, принцу Линдену де Романофф, привели к гибели всей её семьи и в конечном счете к её собственной смерти. После перерождения Элиз осознаёт ошибки прошлого и решает измениться, но трагическая авиакатастрофа обрывает её жизнь. Девушка снова перерождается и на этот раз в своём теле, но ещё до официальной помолвки с Линденом. Полная решимости спасти семью и избавить Линдена от нежелательного брака, Элиз намерена использовать свои передовые медицинские знания, чтобы продолжать спасать жизни.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 6.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 42,
        imdb: 407,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 276,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10768063/a241495e-4043-469f-956f-4000c3c43c19/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10768063/a241495e-4043-469f-956f-4000c3c43c19/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'мелодрама'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5592840,
      name: null,
      alternativeName: 'DAZN Boxing',
      type: 'tv-series',
      typeNumber: 2,
      year: 2015,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 19,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 180,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'спорт'
        }
      ],
      releaseYears: [
        {
          start: 2015,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5592474,
      name: null,
      alternativeName: 'The Challenge: Australia',
      type: 'tv-series',
      typeNumber: 2,
      year: 2022,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 85,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'Австралия'
        }
      ],
      releaseYears: [
        {
          start: 2022,
          end: 2022
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5594722,
      name: 'Плов под прикрытием',
      alternativeName: 'Pistirmadagi Osh',
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 25,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/3ec4b3b1-6667-4235-a88a-c0690b711561/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/3ec4b3b1-6667-4235-a88a-c0690b711561/x1000'
      },
      countries: [
        {
          name: 'Узбекистан'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5592795,
      name: 'Майор и Меймун',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description:
        'Майор — это не звание, а прозвище капитана юстиции Майорова. Воспитывал будущего блюстителя порядка дед — легендарный опер Союза, который всегда жил работой. У внука — всё ровно также: три рубашки, два галстука, костюм, две куртки — всё на своих местах, жизнь расписана по минутам. Пока в один прекрасный день жизнь Майорова не переворачивается с ног на голову: он избивает чиновника, которого сам же арестовал и довёл до суда. В память о легендарном деде Майора не увольняют, а отправляют, пока, правда, временно, в Туапсе.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5593838,
      name: 'Становясь волшебницей',
      alternativeName: 'Mahou Shoujo ni Akogarete',
      type: 'anime',
      typeNumber: 4,
      year: 2024,
      description:
        'Команда из трёх девушек-волшебниц стоит на страже города, в котором живёт Утэна Хиираги. Как и большинство жителей, Утэна восхищается отважным трио. Однажды она встречает чёрное существо по имени Веналита, которое предлагает ей стать волшебницей. Незамедлительно согласившись, Утэна и подумать не могла, что вступает на сторону сил тьмы.',
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 92,
        imdb: 585,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 299,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/abe50785-e206-42c2-9aaf-551a79c013a8/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/abe50785-e206-42c2-9aaf-551a79c013a8/x1000'
      },
      genres: [
        {
          name: 'аниме'
        },
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5153152,
      name: null,
      alternativeName: 'Matchroom Boxing: Before the Bell',
      type: 'tv-series',
      typeNumber: 2,
      year: 2018,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'спорт'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      releaseYears: [
        {
          start: 2018,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5594761,
      name: null,
      alternativeName: "La venue de l'avenir",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594751,
      name: 'Без фильтров',
      alternativeName: 'Uncropped',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Джеймс Хэмилтон начал свою карьеру в Нью-Йорке в начале 70-х. Он сотрудничал с Harper’s Bazaar, Vanity Fair, Rolling Stone, The New York Observer и 20 лет был штатным фотографом The Village Voice. Хэмилтон снимал абсолютно всех героев американской культуры, от Вуди Аллена и Сюзан Зонтаг до Лу Рида и Джима Джармуша. В фильме Джеймс обсуждает фотографию и журналистику вместе с коллегами и поклонниками, вспоминает о своей удивительной бабушке, на старости лет ставшей популярной актрисой, и травит байки о знаменитостях, например, о том, как уговорил Жана-Люка Годара позировать на балконе небоскреба, хотя тот панически боялся высоты.',
      shortDescription:
        'Легендарный светский фотограф — о секретах мастерства и своих моделях. Ностальгический док от Уэса Андерсона',
      status: null,
      rating: {
        kp: 0,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 85,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 111,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/3988b6e6-37b8-4104-9e5c-534daf81066c/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/3988b6e6-37b8-4104-9e5c-534daf81066c/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: true,
      backdrop: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe20a0330e3c5873b45409f0f1b/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fe20a0330e3c5873b45409f0f1b/orig'
      }
    },
    {
      id: 5593407,
      name: null,
      alternativeName: 'Соңғы үкім',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'История жизни общественного деятеля, ученого, поэта, одного из самых ярких лидеров казахской политической элиты начала XX века — Ахмета Байтурсынова.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 20,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 6
      },
      movieLength: 129,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 12,
      genres: [
        {
          name: 'история'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Казахстан'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/377a7d90-5d86-46fb-bae1-0bbc805800c0/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/377a7d90-5d86-46fb-bae1-0bbc805800c0/orig'
      }
    },
    {
      id: 5594760,
      name: null,
      alternativeName: 'Return to Reason',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 85,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 70,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5593307,
      name: 'Вурхиз: По следу зверя',
      alternativeName: 'Voorhees After the Beast',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 18,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594876,
      name: 'Вместе навсегда',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Дизайнер Женя берет в ипотеку подозрительно дешевую квартиру и заселяется туда со своей девушкой. После переезда парню начинают сниться страшные сны, он видит призрак бывшей хозяйки квартиры, которая называет его убийцей. Женя хочет избавиться от квартиры, но договор не предполагает досрочного расторжения. \nДевушка Жени, не выдержав нервного напряжения, уходит от него. Чтобы покончить со своим кошмаром, Женя едет в городок Маранск, где ему предстоит разобраться с трагическими событиями десятилетней давности.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 3
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        },
        {
          name: 'фантастика'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5592401,
      name: null,
      alternativeName: 'Operation Portugal 2 - La vie de chateau',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 26,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 93,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10671298/1ab9d221-1cb8-4744-8808-2fbd8a605473/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/1ab9d221-1cb8-4744-8808-2fbd8a605473/orig'
      }
    },
    {
      id: 5582621,
      name: 'Беляковы в отпуске',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: 'Приключения Сергея Белякова, который обладает талантом разговаривать с телевизором.',
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 8
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594759,
      name: 'Большая земля',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description:
        'Марфа возвращается с сыном на остров в Тихом океане, где она выросла и где ее отец работал смотрителем маяка. Одновременно с этим на острове появляется ее сводный брат Илья, которого Марфа не видела много лет. Марфу и Илью связывает темная тайна. Но сколько бы они ни пытались убежать от прошлого, оно настигает их в виде таинственного кита, курсирующего у берегов острова и будто пытающегося что-то донести до Марфы.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 6
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594915,
      name: 'Свидание вслепую',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'После совместной ночи случайные знакомые Аня и Сергей не знают, как себя правильно повести… Звонить или подождать? Хочет ли партнер продолжения? И взаимно ли вдруг вспыхнувшее чувство? Сомнения мешают им встретиться. А вокруг друзья и знакомые со своими запутанными личными историями и лишними советами.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 13
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'детектив'
        },
        {
          name: 'фантастика'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5592794,
      name: null,
      alternativeName: 'Wife and Dog',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 5
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5594894,
      name: 'Воздушный бой',
      alternativeName: 'Air War',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 42,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 106,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'военный'
        }
      ],
      countries: [
        {
          name: 'Израиль'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 4968850,
      name: null,
      alternativeName: 'In Real Life',
      type: 'tv-series',
      typeNumber: 2,
      year: 2021,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 22,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ток-шоу'
        },
        {
          name: 'реальное ТВ'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2021,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582430,
      name: null,
      alternativeName: 'PJ Masks: Power Heroes',
      type: 'animated-series',
      typeNumber: 5,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 77,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        }
      ],
      countries: [
        {
          name: 'США'
        },
        {
          name: 'Канада'
        },
        {
          name: 'Великобритания'
        },
        {
          name: 'Франция'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5589216,
      name: null,
      alternativeName: 'Betty la Fea: The Story Continues',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      countries: [
        {
          name: 'Колумбия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5589219,
      name: null,
      alternativeName: "Bronx Zoo '90: Crime, Chaos and Baseball",
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 134,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: 136,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'криминал'
        },
        {
          name: 'спорт'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582361,
      name: null,
      alternativeName: 'Rubble & Crew',
      type: 'animated-series',
      typeNumber: 5,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 160,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 30,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5591517,
      name: null,
      alternativeName: 'Miss Adrenaline: A Tale of Twins',
      type: 'tv-series',
      typeNumber: 2,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 195,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Колумбия'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582607,
      name: 'Суперниндзя. Дети',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Детская версия спортивного экстрим-шоу, в котором участники борются за приз, проходя сложнейшую полосу препятствий.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 34,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 120,
      ratingMpaa: null,
      ageRating: 12,
      genres: [
        {
          name: 'реальное ТВ'
        },
        {
          name: 'игра'
        },
        {
          name: 'детский'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486362/53dfc1fa-7af2-4642-a4ec-6d04d385f3a3/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486362/53dfc1fa-7af2-4642-a4ec-6d04d385f3a3/orig'
      }
    },
    {
      id: 5582628,
      name: 'Титаны',
      alternativeName: null,
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'Искусственный интеллект отберёт 99 лучших атлетов страны, чтобы столкнуть их в бескомпромиссной битве за 10 миллионов рублей и звание главного титана России.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 72,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 20
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/780c271e-e25b-4d2b-82b9-94d8d9283638/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/780c271e-e25b-4d2b-82b9-94d8d9283638/x1000'
      },
      genres: [
        {
          name: 'реальное ТВ'
        },
        {
          name: 'спорт'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582367,
      name: null,
      alternativeName: 'Baahubali: Crown of Blood',
      type: 'animated-series',
      typeNumber: 5,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 2102,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Индия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10835644/f30efe8b-9b89-4b44-afb5-ee81e0c37b04/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/f30efe8b-9b89-4b44-afb5-ee81e0c37b04/orig'
      }
    },
    {
      id: 5582362,
      name: null,
      alternativeName: 'Angry Birds Mystery Island',
      type: 'animated-series',
      typeNumber: 5,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 30,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 12,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        },
        {
          name: 'детектив'
        },
        {
          name: 'приключения'
        },
        {
          name: 'семейный'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'США'
        },
        {
          name: 'Финляндия'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/9784475/45f735e2-ecf1-45df-883e-04cf1a2dbab5/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/45f735e2-ecf1-45df-883e-04cf1a2dbab5/orig'
      }
    },
    {
      id: 5582595,
      name: null,
      alternativeName: "The King of Bloody Fookin' Britain",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 73,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 130,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582593,
      name: null,
      alternativeName: 'Orange mécanique, les rouages de la violence',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 46,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 54,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Франция'
        },
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582594,
      name: null,
      alternativeName: 'Kleine Eheverbrechen',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 27,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 89,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582429,
      name: null,
      alternativeName: "Hitler's Holy Treasure",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2019,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 51,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'военный'
        },
        {
          name: 'история'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582428,
      name: null,
      alternativeName: 'When Paris was german',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2020,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 98,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5591585,
      name: 'Пушкин и... Михайловское. Начало',
      alternativeName: null,
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2023,
      description:
        'Молодой поэт переживает смешные и загадочные приключения. Но ему помогают настоящие друзья, а в нём самом есть доброе верное сердце и любовь к жизни.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 20,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 32
      },
      movieLength: 59,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10809116/7a634319-751f-42b9-afc4-afa01a4e8f63/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10809116/7a634319-751f-42b9-afc4-afa01a4e8f63/x1000'
      },
      genres: [
        {
          name: 'мультфильм'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: true
    },
    {
      id: 5582365,
      name: null,
      alternativeName: 'Toupie et Binou: Le Film',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 99,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 84,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Канада'
        },
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 491464,
      name: 'Конец пути',
      alternativeName: 'Akher aldonia',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2006,
      description:
        'На собственном дне рождения телеведущая Сальма случайно убивает девушку, которая увела её парня. Проходит 7 лет. Терзаемая чувством вины, Сальма обращается за помощью к психиатру, который, как выясняется позже, является братом погибшей девушки.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 172,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/fba8fd27-ea54-4336-ba57-52dc7c3d768b/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/fba8fd27-ea54-4336-ba57-52dc7c3d768b/x1000'
      },
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Египет'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5591751,
      name: 'Время есть',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description:
        'Пять новелл, герои которых стали заложниками общепринятых предрассудков о любви. В каждой истории показаны штампы на тему отношений. \nО том, как важно жить и любить не по навязанным обществом шаблонам.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 3
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582620,
      name: 'Старая песня',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2021,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 20,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703959/f79606ad-ea3a-4fa5-8ae2-2966aa75122b/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703959/f79606ad-ea3a-4fa5-8ae2-2966aa75122b/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582604,
      name: null,
      alternativeName: 'The Power of Women',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2015,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 525512,
      name: null,
      alternativeName: 'Lakhmet Ras',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2006,
      description:
        'Юсуф — парень из среднего класса, который изо всех сил старается поступить в полицейскую академию, но у него ничего не получается. Вскоре он попадает в неслабый переплёт, когда его сумку случайно меняют на другую, и теперь за ним охотится банда, во главе с профессиональным вором. Пытаясь вернуть то, что принадлежит им, преступники похищают невесту и отца Юсуфа.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 3.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 391,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 115,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/f8a25d74-b6e1-4204-9d8b-75f1f076b3ec/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/f8a25d74-b6e1-4204-9d8b-75f1f076b3ec/x1000'
      },
      genres: [
        {
          name: 'комедия'
        },
        {
          name: 'криминал'
        }
      ],
      countries: [
        {
          name: 'Египет'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 525546,
      name: 'Давай потанцуем',
      alternativeName: 'Ma tigi Norqos',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2006,
      description:
        'Чтобы отвлечься от рутинных будней и сложных взаимоотношений с мужем, женщина-адвокат Сальва решает ходить на уроки танцев, которые в итоге помогают ей справиться со стрессом. Однако супруг не в восторге от нового увлечения жены, а окружающие её осуждают.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 2.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 226,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 120,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/d309b550-5482-4a24-9ef5-00dbec438be4/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/d309b550-5482-4a24-9ef5-00dbec438be4/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Египет'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582605,
      name: null,
      alternativeName: 'ABBA: Against the Odds',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 212,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'история'
        },
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        },
        {
          name: 'Норвегия'
        },
        {
          name: 'Исландия'
        },
        {
          name: 'Швеция'
        },
        {
          name: 'Дания'
        },
        {
          name: 'Финляндия'
        },
        {
          name: 'Бельгия'
        },
        {
          name: 'Германия'
        },
        {
          name: 'Эстония'
        },
        {
          name: 'Нидерланды'
        },
        {
          name: 'Франция'
        },
        {
          name: 'Чехия'
        },
        {
          name: 'Швейцария'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5589215,
      name: null,
      alternativeName: 'Cirque Du Soleil: Without a Net',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 95,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: 'pg13',
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582606,
      name: null,
      alternativeName: 'One of the Thousand Hills',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 80,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Бельгия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 1083568,
      name: 'Горько-сладкая жизнь',
      alternativeName: "Bolteya El-A'iyma",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2008,
      description:
        'Владелица небольшого продуктового магазина и её дочь вступают в битву с инвесторами-застройщиками, которые пытаются завладеть этим местом для строительства новых зданий.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 141,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 96,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/9c81793d-733e-408a-9aa4-4fee725eb558/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/9c81793d-733e-408a-9aa4-4fee725eb558/x1000'
      },
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Египет'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582363,
      name: null,
      alternativeName: 'Bamse och havets hemlighet',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2025,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'приключения'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Швеция'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582622,
      name: 'Лючия',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2017,
      description:
        'История о пожилой чудачке, которая из-за несчастной любви прожила в иллюзии всю свою жизнь. Но реальность ворвалась в её мир и заставила измениться.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 15,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5591408,
      name: 'Хочу сейчас',
      alternativeName: 'Fino Alla Fine',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Софи — белокурая двадцатилетняя американка, путешествующая по Италии со своей сестрой. Готовая вернуться в Калифорнию, в последний день отпуска на Сицилии она встречает парня Джулио и его друзей, с которыми проведет самую непредсказуемую, безумную, шокирующую, захватывающую, романтическую и пугающую ночь в своей жизни. Через двадцать четыре часа после их встречи они уже никогда не станут прежними.',
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Италия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/1898899/cd1c3ff8-6a4f-493d-8ed9-6e6f6169fa11/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/cd1c3ff8-6a4f-493d-8ed9-6e6f6169fa11/orig'
      }
    },
    {
      id: 5591409,
      name: 'Налог на спасение',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'О людях, оказавшихся в сложных ситуациях и о цене, которую им пришлось заплатить, чтобы спасти свою жизнь.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 63,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10900341/fcc045ab-8ecd-442d-ad85-8c17bc9c9703/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10900341/fcc045ab-8ecd-442d-ad85-8c17bc9c9703/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582366,
      name: null,
      alternativeName: 'Bigfoot vs Megalodon 2',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 73,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5589196,
      name: 'Беляев. Когда погаснет свет',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2020,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 27,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5584979,
      name: null,
      alternativeName: 'The Little Mermaid',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: 'r',
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5589214,
      name: null,
      alternativeName: 'Un hípster en la España vacía',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 488,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 97,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582399,
      name: null,
      alternativeName: 'Kyle Kinane: Dirt Nap',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 44,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5587598,
      name: null,
      alternativeName: 'Sayen: La Cazadora',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 160,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 88,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Чили'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582364,
      name: null,
      alternativeName: 'Dog Man',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2025,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5591919,
      name: 'Эффект компассии',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'Истинное добро не ищет славы и награды, а, оставляя неизгладимый след в сердцах людей, меняет к лучшему жизни тех, кто с ним соприкоснулся.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 5
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5591410,
      name: null,
      alternativeName: 'Young Sherlock',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 15
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5461786,
      name: 'Самые опасные существа',
      alternativeName: 'Nature’s Most Dangerous',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2021,
      description:
        'Какое животное самое опасное для человека? Лев? Тигр? Да, это и вправду свирепые хищники, иногда нападающие на людей. Но гораздо больше людей погибло от нападения бегемотов или буйволов, а также домашних коров, свиней и собак.',
      shortDescription:
        'Огромные зубы, острые когти и запредельные скорости. Документальный проект о страхах и настоящей опасности',
      status: null,
      rating: {
        kp: 8.733,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 1144,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 50,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/x1000'
      },
      backdrop: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e79e8e54b313ddadf025cd0dd27/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e79e8e54b313ddadf025cd0dd27/x1000'
      },
      genres: [
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'Германия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582112,
      name: null,
      alternativeName: 'Dino Dex',
      type: 'animated-series',
      typeNumber: 5,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'комедия'
        },
        {
          name: 'приключения'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582113,
      name: null,
      alternativeName: 'King of the Hill Revival',
      type: 'tv-series',
      typeNumber: 2,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: null,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582134,
      name: null,
      alternativeName: "Honey Don't!",
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582128,
      name: null,
      alternativeName: 'Balls Up',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582001,
      name: null,
      alternativeName: '5 Outlaws',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: 'r',
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/f013f5c4-08bb-46ba-8432-1db70fa7bd9e/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/f013f5c4-08bb-46ba-8432-1db70fa7bd9e/x1000'
      },
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'криминал'
        },
        {
          name: 'детектив'
        },
        {
          name: 'вестерн'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582127,
      name: null,
      alternativeName: 'Untitled Shinjiro Atae Documentary',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582021,
      name: null,
      alternativeName: 'Beezel',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 81,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582129,
      name: null,
      alternativeName: 'I Play Rocky',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582011,
      name: 'Горизонты: Часть 3',
      alternativeName: 'Horizon: An American Saga - Chapter 3',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: null,
      description: null,
      shortDescription: null,
      status: 'filming',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'вестерн'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582136,
      name: 'Переговорщик',
      alternativeName: 'Le négociateur',
      type: 'tv-series',
      typeNumber: 2,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 28,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'триллер'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Франция'
        }
      ],
      releaseYears: [
        {
          start: 2023,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582149,
      name: null,
      alternativeName: 'Teen Mom: Young and Pregnant',
      type: 'tv-series',
      typeNumber: 2,
      year: 2018,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 4.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 171,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'реальное ТВ'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2018,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582040,
      name: null,
      alternativeName: 'Costa!!',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 80,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        },
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'Нидерланды'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582144,
      name: 'Спейси без маски',
      alternativeName: 'Spacey Unmasked',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'О жизни Кевина Спейси — от его детства, невероятного успеха на Бродвее и восхождения к славе, до его падения в немилость, когда он столкнулся с обвинениями в сексуальных домогательствах и насилии.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 8,
        imdb: 1043,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582150,
      name: null,
      alternativeName: 'Against the Grain',
      type: 'tv-series',
      typeNumber: 2,
      year: 1993,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 6.1,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 3,
        imdb: 67,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 60,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 1993,
          end: 1994
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582022,
      name: 'Спасибо, следующий!',
      alternativeName: 'Kimler Geldi Kimler Geçti',
      type: 'tv-series',
      typeNumber: 2,
      year: 2024,
      description:
        'После болезненного разрыва молодая женщина-адвокат заручается поддержкой лучших друзей и с головой окунается в запутанный мир современных свиданий.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 7.719,
        imdb: 5.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null
      },
      votes: {
        kp: 209,
        imdb: 5118,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'мелодрама'
        },
        {
          name: 'комедия'
        }
      ],
      countries: [
        {
          name: 'Турция'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
      poster: {
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/10812607/bca2b978-7193-4380-b781-a82cec4c030a/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/10812607/bca2b978-7193-4380-b781-a82cec4c030a/orig'
      }
    },
    {
      id: 5582018,
      name: null,
      alternativeName: "Dead Dead Demon's Dededede Destruction Kôhen",
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 37,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 120,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'фантастика'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'Япония'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582133,
      name: 'Хакни свой организм: Тайны кишечника',
      alternativeName: 'Hack Your Health: The Secrets of Your Gut',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description:
        'О том, какую роль в общем самочувствии играет здоровье кишечника как части пищеварительной системы.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 15,
        imdb: 1803,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 79,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
      poster: {
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/1898899/52ecf523-6d2f-40fc-85ad-219fc049370f/x1000',
        url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/52ecf523-6d2f-40fc-85ad-219fc049370f/orig'
      }
    },
    {
      id: 5582032,
      name: null,
      alternativeName: 'Scooby-Doo!: Mystery Cases',
      type: 'animated-series',
      typeNumber: 5,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 5
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      releaseYears: [
        {
          start: 2024,
          end: null
        }
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false
    },
    {
      id: 5582076,
      name: null,
      alternativeName: 'Lord of Wolves',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'completed',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 87,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582132,
      name: null,
      alternativeName: 'The Taste of Freedom',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 4,
        imdb: 84,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 117,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        },
        {
          name: 'семейный'
        }
      ],
      countries: [
        {
          name: 'Украина'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582083,
      name: null,
      alternativeName: 'Darap Idebop',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2021,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 9,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      genres: [
        {
          name: 'короткометражка'
        },
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 4922488,
      name: 'Возвращение Тани Такер',
      alternativeName: 'The Return of Tanya Tucker: Featuring Brandi Carlile',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 266,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 108,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: 'r',
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/9abc6adb-0ac8-4755-8cb6-de0a434e546a/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/9abc6adb-0ac8-4755-8cb6-de0a434e546a/x1000'
      },
      genres: [
        {
          name: 'документальный'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582145,
      name: 'Церемония вручения премии BET Awards 2016',
      alternativeName: 'BET Awards 2016',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2016,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 5.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 37,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 180,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'музыка'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582009,
      name: null,
      alternativeName: 'Rice Girl: My Redneck Neighbor II',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'ужасы'
        },
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        },
        {
          name: 'комедия'
        },
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582065,
      name: null,
      alternativeName: 'Mao shan tian shi',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2022,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 69,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/db3911c4-ca8e-4205-ab5f-a280a30d450f/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10671298/db3911c4-ca8e-4205-ab5f-a280a30d450f/x1000'
      },
      genres: [
        {
          name: 'фэнтези'
        },
        {
          name: 'боевик'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582082,
      name: null,
      alternativeName: 'Teddy and Daddy',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582051,
      name: 'Хорошо ловится рыбка-бананка',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2019,
      description: 'Один день молодоженов на курорте.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 21,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10893610/1c8741b3-ca86-4dff-83dd-da245b7e4821/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10893610/1c8741b3-ca86-4dff-83dd-da245b7e4821/x1000'
      },
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582078,
      name: null,
      alternativeName: 'Writing a Love Song',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мелодрама'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582079,
      name: null,
      alternativeName: 'Out Standing',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2025,
      description: null,
      shortDescription: null,
      status: 'pre-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'биография'
        }
      ],
      countries: [
        {
          name: 'Канада'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5581991,
      name: null,
      alternativeName: 'A mo a yi',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 109,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10703859/ad694c86-f9f7-4bdd-8cf0-b431a297a836/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10703859/ad694c86-f9f7-4bdd-8cf0-b431a297a836/x1000'
      },
      genres: [
        {
          name: 'драма'
        }
      ],
      countries: [
        {
          name: 'Китай'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582080,
      name: 'Арктический апокалипсис',
      alternativeName: 'Arctic Armageddon',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 3.2,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 117,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 86,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'приключения'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582229,
      name: 'Мелкое утреннее преступление',
      alternativeName: 'A Petty Morning Crime',
      enName: null,
      type: 'cartoon',
      typeNumber: 3,
      year: 2016,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 4,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'мультфильм'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Болгария'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582096,
      name: 'Придурок',
      alternativeName: null,
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description:
        'Одинокая молодая швея Маша снимает квартиру у вдовца Валерия, который совсем недавно потерял любимую жену. Не в силах смириться с потерей, Валерий чуть ли не каждый день наведывается к Маше, чем мешает ей наладить свою личную жизнь.',
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 22,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/5c93b332-19d9-4724-a5fc-bff738cd2d73/orig',
        previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/10671298/5c93b332-19d9-4724-a5fc-bff738cd2d73/x1000'
      },
      genres: [
        {
          name: 'драма'
        },
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Россия'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582014,
      name: null,
      alternativeName: 'Entrance Wounds',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 1,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: 18,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'США'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582019,
      name: null,
      alternativeName: 'Estación Rocafort',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: 'post-production',
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'ужасы'
        },
        {
          name: 'детектив'
        }
      ],
      countries: [
        {
          name: 'Испания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    },
    {
      id: 5582013,
      name: null,
      alternativeName: 'Camera Test (King Cadbury)',
      enName: null,
      type: 'movie',
      typeNumber: 1,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1
      },
      movieLength: 7,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      genres: [
        {
          name: 'короткометражка'
        }
      ],
      countries: [
        {
          name: 'Великобритания'
        }
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false
    }
  ],
  total: 1057183,
  limit: 250,
  page: 1,
  pages: 4229
}
