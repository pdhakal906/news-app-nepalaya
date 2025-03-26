import { Box, Button, Space, TextInput } from '@mantine/core'
import React from 'react'

const NewsForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("form submitted")
    console.log(event.target.title.value);
    fetch("http://127.0.0.1:8000/api/news",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: event.target.title.value,
          content: event.target.content.value,
          author: event.target.author.value,
        }),
      }
    )
  }

  return (
    <Box
      p={20}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          description="News Title"
          placeholder="Title"
          name='title'
        />
        <TextInput
          label="Content"
          description="News Content"
          placeholder="News Content"
          name='content'
        />
        <TextInput
          label="Author"
          description="Author"
          placeholder="Author"
          name='author'
        />
        <Space h={10}></Space>
        <Button type='submit'>Submit</Button>
      </form>
    </Box>
  )
}

export default NewsForm
