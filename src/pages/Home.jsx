import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
            <HomeHeroText/>
            <HomeBottomText/>
        </div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/60 pointer-events-none'></div>
    </div>
  )
}

export default Home