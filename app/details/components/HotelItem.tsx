"use client"
import { motion } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HotelItemProps {
    image: string | StaticImport,
    hotel_name: String,
    is_shuttle?: Boolean,
    hotel_link: Url,
    hotel_description: String,
    time_to_venue?: String,
    cost?: String,
}

export default function HotelItem({image, hotel_name, is_shuttle, hotel_link, hotel_description, time_to_venue, cost} : HotelItemProps) {

  return (

    <motion.div
    className='bg-white rounded-md text-left overflow-hidden shadow'
     whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}>
    <Link href={hotel_link} target='_blank' className='bg-white rounded-md text-left overflow-hidden hover:scale-105 transition-transform hover:shadow'>
        <div className='w-full aspect-video'><Image src={image} alt='hotel' className='w-full h-full object-cover'/></div>
        <div className='flex flex-col justify-between p-6 min-h-72'>
        <div className='mb-2'>
            <div className='mb-2 text-sm text-gray-500'>{time_to_venue}</div>
            <h3 className='mb-2'>{hotel_name}</h3>
            <p>{hotel_description}</p>
        </div>
        <div>
          <div className='flex'><h4 className='font-mono'>{cost}</h4><span>&nbsp;/&nbsp;night</span></div>
        </div>
        </div>
    </Link>
    </motion.div>
  )
}
