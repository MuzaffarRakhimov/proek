import React from 'react'
import {Container, Sarlavha, Box, Input, UserIcon } from './style'
const Formraydd = () => {
  return (
    <div style={{ margin: '5px' }}>
      <Container>
        <Sarlavha>Malumotlar</Sarlavha>
        <Sarlavha>Malumotlarni kiriting</Sarlavha>
        <Box>
          <div style={{ padding: '8px' }}>
            <UserIcon />
          </div>
          <div>
            <Input placeholder='username' />
          </div>
        </Box>
        <Box>
          <div style={{ padding: '8px' }}>
            <UserIcon />
          </div>
          <div>
            <Input placeholder='username' />
          </div>
        </Box>
        <Box>
          <div style={{ padding: '8px' }}>
            <UserIcon />
          </div>
          <div>
            <Input placeholder='username' />
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default Formraydd