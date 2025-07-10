export interface Translation {
    about: string;
    universities: string;
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
    passing_score: string;
    specialties_count: string;
    tuition_cost: string;
    details_button: string;
    filter_title: string;
    sort_by: string;
    sort_name_asc: string;
    sort_name_desc: string;
    sort_passing_score_asc: string;
    sort_passing_score_desc: string;
    sort_specialties_count_asc: string;
    sort_specialties_count_desc: string;
    region: string;
    all_regions: string;
    ent_subject: string;
    all_subjects: string;
    specialty: string;
    all_specialties: string;
    study_format: string;
    all_formats: string;
    study_format_full_time: string;
    study_format_part_time: string;
    study_format_online: string;
    study_duration: string;
    all_durations: string;
    min_passing_score: string;
    enter_score: string;
    apply_filters: string;
    no_universities_found: string;
    find_university: string;
    card_tests_ent: string;
    card_trial_tests: string;
    card_error_analysis: string;
    card_career_test: string;
    card_register: string;
    try_tests_free: string;
    prepare_title: string;
    prepare_subtitle: string;
    salaries_title: string;
    profession: string;
    median_salary: string;
    vacancy_universities: string;
    media_title: string;
    news_date: string;
}

export interface Translations {
    RU: Translation;
    KZ: Translation;
    EN: Translation;
}

export const translations: Translations = {
    RU: {
        about: 'О платформе',
        universities: 'Поиск Университетов',
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
        passing_score: 'Проходной балл ЕНТ',
        specialties_count: 'Количество специальностей',
        tuition_cost: 'Стоимость обучения',
        details_button: 'Подробнее',
        filter_title: 'Фильтры и сортировка',
        sort_by: 'Сортировать по',
        sort_name_asc: 'Названию (А-Я)',
        sort_name_desc: 'Названию (Я-А)',
        sort_passing_score_asc: 'Проходному баллу (по возрастанию)',
        sort_passing_score_desc: 'Проходному баллу (по убыванию)',
        sort_specialties_count_asc: 'Количеству специальностей (по возрастанию)',
        sort_specialties_count_desc: 'Количеству специальностей (по убыванию)',
        region: 'Регион',
        all_regions: 'Все регионы',
        ent_subject: 'Предмет ЕНТ',
        all_subjects: 'Все предметы',
        specialty: 'Специальность',
        all_specialties: 'Все специальности',
        study_format: 'Формат обучения',
        all_formats: 'Все форматы',
        study_format_full_time: 'Очное',
        study_format_part_time: 'Заочное',
        study_format_online: 'Онлайн',
        study_duration: 'Срок обучения',
        all_durations: 'Все сроки',
        min_passing_score: 'Минимальный проходной балл',
        enter_score: 'Введите балл',
        apply_filters: 'Применить фильтры',
        no_universities_found: 'Университеты не найдены',
        find_university: 'Найди Университет по своим критериям',
        card_tests_ent: 'Тесты ЕНТ по всем предметам',
        card_trial_tests: 'Пробные вступительные тесты вузов',
        card_error_analysis: 'Анализ ошибок и рекомендации',
        card_career_test: 'Профориентационный тест — подскажет, куда поступать',
        card_register: 'Зарегестрируйся — получи доступ к бесплатным тестам и начни готовиться уже сегодня!',
        try_tests_free: 'Попробовать тесты бесплатно',
        prepare_title: 'Готовься к поступлению у  нас',
        prepare_subtitle: 'Проходи тесты ЕНТ и внутренние экзамены — в удобном формате и с мгновенной проверкой.',
        salaries_title: 'Зарплаты специалистов',
        profession: 'Профессия',
        median_salary: 'Медианная зарплата',
        vacancy_universities: 'Университеты',
        media_title: 'Testhub медиа',
        news_date: '{date}',
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
        passing_score: 'ҰБТ өту балы',
        specialties_count: 'Мамандықтар саны',
        tuition_cost: 'Оқу құны',
        details_button: 'Толығырақ',
        filter_title: 'Сүзгілер және сұрыптау',
        sort_by: 'Бойынша сұрыптау',
        sort_name_asc: 'Атауы (А-Я)',
        sort_name_desc: 'Атауы (Я-А)',
        sort_passing_score_asc: 'Өту балы (өсу бойынша)',
        sort_passing_score_desc: 'Өту балы (кему бойынша)',
        sort_specialties_count_asc: 'Мамандықтар саны (өсу бойынша)',
        sort_specialties_count_desc: 'Мамандықтар саны (кему бойынша)',
        region: 'Аймақ',
        all_regions: 'Барлық аймақтар',
        ent_subject: 'ҰБТ пәні',
        all_subjects: 'Барлық пәндер',
        specialty: 'Мамандық',
        all_specialties: 'Барлық мамандықтар',
        study_format: 'Оқу форматы',
        all_formats: 'Барлық форматтар',
        study_format_full_time: 'Күндізгі',
        study_format_part_time: 'Сырттай',
        study_format_online: 'Онлайн',
        study_duration: 'Оқу мерзімі',
        all_durations: 'Барлық мерзімдер',
        min_passing_score: 'Ең төменгі өту балы',
        enter_score: 'Балды енгізіңіз',
        apply_filters: 'Сүзгілерді қолдану',
        no_universities_found: 'Университеттер табылмады',
        find_university: 'Критерийлеріңізге сәйкес университетті табыңыз',
        card_tests_ent: 'ҰБТ тесттері',
        card_trial_tests: 'Университеттердің сынақ тесттері',
        card_error_analysis: 'Қателерді талдау және ұсыныстар',
        card_career_test: 'Кәсіптік бағдар беру тесті — қайда түсу керектігін айтады',
        card_register: 'Тіркел — тегін тесттерге қол жеткіз және дайындықты бүгіннен баста!',
        try_tests_free: 'Тесттерді тегін көріңіз',
        prepare_title: 'Бізбен бірге қабылдауға дайындал',
        prepare_subtitle: 'ҰБТ және ішкі емтихандарды ыңғайлы форматта және лезде тексерумен тапсыр.',
        salaries_title: 'Мамандардың жалақысы',
        profession: 'Мамандық',
        median_salary: 'Орташа жалақы',
        vacancy_universities: 'Университеттер',
        media_title: 'Testhub медиа',
        news_date: '{date}',
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
        subtitle: 'Testhub.kz - This is an online platform for applicants where you can',
        card_study_rankings: 'Study rankings and compare universities across Kazakhstan',
        card_find_specialty: 'Find a suitable specialty and learn what you can work as',
        card_take_tests: 'Take ENT and career guidance tests',
        card_learn_grants: 'Learn about grants, passing scores, and admission requirements',
        card_all_in_one: 'All in one place - no extra searching or stress',
        passing_score: 'ENT Passing Score',
        specialties_count: 'Number of Specialties',
        tuition_cost: 'Tuition Cost',
        details_button: 'Details',
        filter_title: 'Filters and Sorting',
        sort_by: 'Sort by',
        sort_name_asc: 'Name (A-Z)',
        sort_name_desc: 'Name (Z-A)',
        sort_passing_score_asc: 'Passing Score (Ascending)',
        sort_passing_score_desc: 'Passing Score (Descending)',
        sort_specialties_count_asc: 'Number of Specialties (Ascending)',
        sort_specialties_count_desc: 'Number of Specialties (Descending)',
        region: 'Region',
        all_regions: 'All Regions',
        ent_subject: 'ENT Subject',
        all_subjects: 'All Subjects',
        specialty: 'Specialty',
        all_specialties: 'All Specialties',
        study_format: 'Study Format',
        all_formats: 'All Formats',
        study_format_full_time: 'Full-time',
        study_format_part_time: 'Part-time',
        study_format_online: 'Online',
        study_duration: 'Study Duration',
        all_durations: 'All Durations',
        min_passing_score: 'Minimum Passing Score',
        enter_score: 'Enter Score',
        apply_filters: 'Apply Filters',
        no_universities_found: 'No Universities Found',
        find_university: 'Find University by your criteria',
        card_tests_ent: 'UNT tests in all subjects',
        card_trial_tests: 'Mock entrance tests of universities',
        card_error_analysis: 'Error analysis and recommendations',
        card_career_test: 'Career guidance test — will tell you where to apply',
        card_register: 'Register - get access to free tests and start preparing today!',
        try_tests_free: 'Try tests for free',
        prepare_title: 'Prepare for admission with us',
        prepare_subtitle: 'Take UNT tests and internal exams - in a convenient format and with instant verification.',
        salaries_title: 'Specialists’ Salaries',
        profession: 'Profession',
        median_salary: 'Median Salary',
        vacancy_universities: 'Universities',
        media_title: 'Testhub Media',
        news_date: '{date}',
    },
};