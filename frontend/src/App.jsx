import '@mantine/core/styles.css';
import { MantineProvider, Progress, Space, Stack } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


function App() {
  return (
    <MantineProvider>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
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

      <Space h={100}></Space>

      <Group
        gap={20}
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          Hello
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          Hi
        </Card>
      </Group>

      <Progress
        color="yellow"
        value={50} />;

    </MantineProvider>
  );
}

export default App
