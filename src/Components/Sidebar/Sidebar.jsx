import React from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { menu } from './SidebarConfig'

const Sidebar = () => {
  return (
    <div className='sticky top-0 h-[100vh] flex'>
        <div className='flex flex-col justify-between h-full px-10'>
            <div>
                <div className='pt-10'>
                    <img className='w-40' src='https://i.imgur.com/zqpwkLQ.png' alt='Instagram logo'/>
                </div>
                <div className='mt-10'>
                    {menu.map((item, index) => (
                        <div key={index} className='flex items-center cursor-pointer mb-5 text-lg'>
                            {item.icon}
                            <p className='ml-5'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center cursor-pointer pb-10'>
                <IoReorderThreeOutline/>
                <p className='ml-5'>More</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar