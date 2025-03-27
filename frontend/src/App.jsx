import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

import { MantineProvider, Progress, Space, Stack } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    <MantineProvider>
      <Notifications />
      <NewsPage></NewsPage>
    </MantineProvider>
  );
}

export default App
