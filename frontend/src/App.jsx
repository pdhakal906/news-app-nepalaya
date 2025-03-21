import '@mantine/core/styles.css';
import { MantineProvider, Progress, Space, Stack } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    <MantineProvider>
      <NewsPage></NewsPage>
    </MantineProvider>
  );
}

export default App
