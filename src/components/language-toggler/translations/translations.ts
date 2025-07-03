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
    card_study_rankings: string;
    card_find_specialty: string;
    card_take_tests: string;
    card_learn_grants: string;
    card_all_in_one: string;
    subtitle: string;
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
    subtitle: 'Testhub.kz - Это онлайн платформа для абитуриентов, где ты можешь',
    card_study_rankings: 'Изучить рейтинги и сравнить вузы по всему Казахстану',
    card_find_specialty: 'Найти подходящую специальность и узнать, кем можно работать',
    card_take_tests: 'Пройти тесты ЕНТ и профориентации',
    card_learn_grants: 'Узнать про гранты, проходные баллы и требования к поступлению',
    card_all_in_one: 'Все в одном месте - без лишнего поиска и стресса',
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
    subtitle: 'Testhub.kz - Абитуриенттерге арналған онлайн платформа, онда сіз ...',
    card_study_rankings: 'Қазақстан бойынша университеттердің рейтингтерін зерттеу және салыстыру',
    card_find_specialty: 'Жарамды мамандықты табу және қайда жұмыс істей аласыңды білу',
    card_take_tests: 'ЕНТ және кәсіптік бағдар тестерін тапсыру',
    card_learn_grants: 'Гранттар, өту баллдары және қабылдау талаптары туралы білу',
    card_all_in_one: 'Барлығы бір жерде - артық іздеу және стресс жоқ',
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
    card_study_rankings: 'Study rankings and compare universities across Kazakhstan',
    card_find_specialty: 'Find a suitable specialty and learn what you can work as',
    card_take_tests: 'Take ENT and career guidance tests',
    card_learn_grants: 'Learn about grants, passing scores, and admission requirements',
    card_all_in_one: 'All in one place - no extra searching or stress',
    subtitle: 'Testhub.kz - This is an online platform for applicants where you can',
  },
}