import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'

const NewsCard = ({ data }) => {
  return (
    <Card
      component='a'
      href={`/news/${data.id}`}
      shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={data.featured_image_url ?? data.featured_image}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data.title}</Text>
        <Badge color="pink">{data.author.first_name} {data.author.last_name}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {data.content}
      </Text>
    </Card>
  )
}

export default NewsCard
