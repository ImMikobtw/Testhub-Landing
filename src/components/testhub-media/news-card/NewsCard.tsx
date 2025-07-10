import React from 'react';
import type { News } from '../TesthubMediaSection';

interface NewsCardProps {
    news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full">
            <div className="flex flex-col gap-4">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <a
                  href={news.url}
                  className="text-lg font-montserrat font-bold text-gray-900 hover:text-[#2374EE] transition-colors duration-200"
                >
                    {news.title}
                </a>
                <p className="text-sm font-montserrat text-gray-600 opacity-70">
                    {news.date}
                </p>
            </div>
        </div>
    );
};

export default NewsCard;