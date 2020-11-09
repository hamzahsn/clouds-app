import React, { useState, useEffect } from 'react'
import Clouds from '../../components/Clouds/Clouds'
import './CloudList.css'


const CloudList: React.FC = () => {
    const [clouds, setClouds] = useState([])

    const getClouds = async () => {
        const clouds = await fetch('http://127.0.0.1:8000/api/v1/clouds', { method: 'GET' })
        const cloud = await clouds.json()
        setClouds(cloud)
    }

    React.useEffect(() => {
        getClouds()
    }, [])

    return (
        <div className="App">
            <Clouds {...clouds} />
        </div>
    )
}

export default CloudList
