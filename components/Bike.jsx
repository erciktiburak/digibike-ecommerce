'use client'
import AddToCart from './AddToCart'

import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { CgEye, CgShoppingBag } from 'react-icons/cg'

const Bike = ({bike}) => {
    const popularBikeCat = bike.categories.find(
        (bike) => bike.name === 'popular')

    return (
    <div className='group'>
        <div className='border h-[328px] mb-5 p-4 overflow-hidden relative'>
            <div className='bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center'>
                {/* Badge */}
                {popularBikeCat && (
                <div className='absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium'>
                    Popular
                </div>
            )}
            <Image src={urlFor(bike.images[0]).url()} width={240} height={147} alt={bike.name} />
            </div>
            {/* button group */}
            <div>
                <AddToCart />
            </div>
        </div>
    </div>  
    )
}

export default Bike