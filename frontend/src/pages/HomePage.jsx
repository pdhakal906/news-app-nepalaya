import React, { useEffect, useState } from 'react'
import { getNews } from '../features/newsFeature';
import { SimpleGrid, Text } from '@mantine/core';
import NewsCard from '../components/NewsCard';

const HomePage = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data.data);

      } catch (error) {
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SimpleGrid p={20} cols={5}>
      {news.map((indvNews) => {
        return <NewsCard data={indvNews} />
      })}
    </SimpleGrid>
  )
}

export default HomePage
