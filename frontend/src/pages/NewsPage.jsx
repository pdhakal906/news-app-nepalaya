
import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Progress, Space, Stack } from '@mantine/core';

const NewsPage = () => {

  const [data, setData] = useState([])

  async function fetchData() {
    // const response = await fetch("http://127.0.0.1:8000/api/news/");
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, [])



  const products = data.products;

  return (
    <>


      {
        products?.map((item) => {
          return (
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
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          )
        })
      }



    </>
  );
}

export default NewsPage
