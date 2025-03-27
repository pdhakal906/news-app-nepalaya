
import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Progress, Space, Stack } from '@mantine/core';
import { Grid } from '@mantine/core';
import NewsForm from '../components/NewsForm';


const NewsPage = () => {

  const [data, setData] = useState([])

  async function fetchData() {
    const response = await fetch("http://127.0.0.1:8000/api/news");
    // const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, [])



  const news = data

  return (
    <>
      <NewsForm></NewsForm>
      <Grid>


        {
          news?.map((item) => {
            return (
              <Grid.Col span={{ base: 3, md: 3, lg: 3 }}>
                <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{item.title}</Text>
                    <Badge color="pink">{item.author.first_name} {item.author.last_name}</Badge>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {item.content}
                  </Text>

                  <Button color="blue" fullWidth mt="md" radius="md">
                    Book classic tour now
                  </Button>
                </Card>
              </Grid.Col>
            )
          })
        }



      </Grid>


    </>
  );
}

export default NewsPage
