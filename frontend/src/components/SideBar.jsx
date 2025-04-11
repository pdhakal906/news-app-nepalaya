import { Stack } from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router'

const SideBar = () => {
  return (
    <div>
      <Stack p={20}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Stack>
    </div>
  )
}

export default SideBar
