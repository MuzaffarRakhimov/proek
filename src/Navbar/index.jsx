import React from 'react'
import { Navbor, H3 } from './style'
import { Link } from 'react-router-dom'


const Navbor2 = () => {
  return (
    <div>
      <Navbor>
        <H3> <Link to={'/home1'} > Assosiy</Link></H3>
        <H3> <Link to={'/home2'} >Malumotlat</Link></H3>
        <H3><Link to={'/home3'} > Bo'limlar</Link></H3>
        <H3> <Link to={'/home4'} >  Bog'lanish</Link></H3>
      </Navbor>
    </div>
  )
}

export default Navbor2