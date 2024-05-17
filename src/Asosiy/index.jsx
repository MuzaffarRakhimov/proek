import React from 'react'
import Bodyy from '../Bodyy'
import Body2 from '../Body2'
import { Route, Routes } from 'react-router-dom'


const Asosiy = () => {
    return (
        <div>
            <Routes>
                <Route path={'/home1'} Component={Bodyy} />
                <Route path={'/home2'} Component={Bodyy} />
                <Route path={'/home3'} Component={Body2} />
                <Route path={'/home4'} Component={Bodyy} />
            </Routes>
        </div>
    )
}

export default Asosiy