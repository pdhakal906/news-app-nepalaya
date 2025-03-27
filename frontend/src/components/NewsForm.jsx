import { Box, Button, Select, Space, TextInput } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import React, { useEffect, useState } from 'react'

const NewsForm = () => {

  const [loading, setLoading] = useState(false)
  const [authors, setAuthors] = useState(null)


  useEffect(() => {
    setLoading(true)
    try {
      fetch("http://127.0.0.1:8000/api/news/page-data")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setAuthors(data.data)
        })

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("form submitted")
    console.log(event.target.title.value);
    const response = await fetch("http://127.0.0.1:8000/api/news",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: event.target.title.value,
          content: event.target.content.value,
          author_id: event.target.author_id.value,
        }),
      }
    )

    if (!response.ok) {
      notifications.show({
        title: 'Error',
        position: 'top-right',
        message: 'Error creating news',
        color: 'red',
        autoClose: 1000,
      })
      return
    }

    notifications.show({
      title: 'Sucess',
      position: 'top-right',
      message: 'News Created Successfully',
      color: 'green',
      autoClose: 1000,
    })
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

        {
          loading ? <p>Loading...</p> :
            <Select
              label="Author"
              placeholder="Choose an author"
              data={authors}
              name='author_id'
            />}
        <Space h={10}></Space>
        <Button type='submit'>Submit</Button>
      </form>
    </Box>
  )
}

export default NewsForm
