import { useState, useEffect } from 'react';
import type { News } from '../TesthubMediaSection';

import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

export const mockNews: News[] = [
    {
    id: '1',
    title: 'День открытых дверей - приходи узнать о специальностях в Назарбаевском Университете!',
    date: '19 марта 2025 г.',
    image: news1,
    url: '/news/1',
  },
  {
    id: '2',
    title: 'Открыт набор на новую специальность - геймдизайн и разработка игр.',
    date: '20 марта 2025 г.',
    image: news2,
    url: '/news/2',
  },
  {
    id: '3',
    title: 'Проходные баллы на инженерные специальности повышены с 65 до 75.',
    date: '22 марта 2025 г.',
    image: news3,
    url: '/news/3',
  },
];

interface NewsListState {
    news: News[];
}

export const useNewsList = (): NewsListState => {
    const [news, setNews] = useState<News[]>(mockNews);

    useEffect(() => {
        // очередная апишка должна быть здесь
        setNews(mockNews);
    }, []);

    return { news };
};