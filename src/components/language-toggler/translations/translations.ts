export interface Translation {
    about: string;
    universities:string
    tests: string;
    media: string;
    salaries: string;
    login: string;
    language_ru: string;
    language_kz: string;
    language_en: string;
    hero_title: string;
    hero_subtitle: string;
    hero_find_university: string;
}

export interface Translations {
    RU: Translation;
    KZ: Translation;
    EN: Translation;
}

export const translations: Translations = {
    RU: {
    about: 'О платформе',
    universities: 'Поиск университетов',
    tests: 'Тесты ЕНТ',
    media: 'Testhub медиа',
    salaries: 'Зарплаты специалистов',
    login: 'Войти',
    language_ru: 'Русский',
    language_kz: 'Қазақша',
    language_en: 'English',
    hero_title: 'Найди университет мечты за 5 минут',
    hero_subtitle:
      'Вся информация о вузах Казахстана — в одном месте: рейтинги, специальности, гранты, проходные баллы и условия поступления.',
    hero_find_university: 'Найти университет',
  },
  KZ: {
    about: 'Платформа туралы',
    universities: 'Университеттерді іздеу',
    tests: 'ҰБТ тесттері',
    media: 'Testhub медиа',
    salaries: 'Мамандардың жалақысы',
    login: 'Кіру',
    language_ru: 'Орысша',
    language_kz: 'Қазақша',
    language_en: 'Ағылшынша',
    hero_title: 'Арман университетіңді 5 минутта тап',
    hero_subtitle:
      'Қазақстандағы жоғары оқу орындары туралы барлық ақпарат бір жерде: рейтингтер, мамандықтар, гранттар, өту балдары және қабылдау шарттары.',
    hero_find_university: 'Университет табу',
  },
  EN: {
    about: 'About the Platform',
    universities: 'University Search',
    tests: 'ENT Tests',
    media: 'Testhub Media',
    salaries: 'Specialists’ Salaries',
    login: 'Log In',
    language_ru: 'Russian',
    language_kz: 'Kazakh',
    language_en: 'English',
    hero_title: 'Find Your Dream University in 5 Minutes',
    hero_subtitle:
      'All information about universities in Kazakhstan in one place: rankings, specialties, grants, passing scores, and admission requirements.',
    hero_find_university: 'Find University',
  },
}