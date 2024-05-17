import React from 'react'
import { Container, Sarlavha, Box, Input, UserIcon,Bolim,Chekbox,H4,Button } from './style'

const Formleftt = () => {
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
         <Bolim>
          <div style={{ display:'flex', margin:'auto'}}>
          <Chekbox type='checkbox' />
          <H4>
            Malumotni belgilang xohlasangiz
          </H4>
          <Button>Submit</Button>
          </div>
         
         </Bolim>
      </Container>
    </div>
  )
}

export default Formleftt