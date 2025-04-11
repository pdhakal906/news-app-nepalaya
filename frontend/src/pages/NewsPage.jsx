import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getNewsById } from '../features/newsFeature';
import { Box, Image, Text } from '@mantine/core';

const NewsPage = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsById(id);
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
    <Box
      pl={20}
    >
      <h1>{news.title}</h1>
      <Image
        w={500}
        src={news.featured_image ?? news.featured_image_url}
      >

      </Image>
      <Text>
        {news.content}
      </Text>
    </Box>
  )
}

export default NewsPage
