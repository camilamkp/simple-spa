import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const data =
[
    { 
        id: 1,
        image: Single,
        title: 'Single User',
        price: '$149',
        storage: '500GB',
        quantity: '1 Granted User',
        message: 'Send up to 2GB'
    },
    {
        id: 2,
        image: Double,
        title: 'Double User',
        price: '$280',
        storage: '1TB  ',
        quantity: '2 Granted User',
        message: 'Send up to 4GB'
    },
    {
        id: 3,
        image: Triple,
        title: 'Triple User',
        price: '$500',
        storage: '2TB',
        quantity: '3 Granted User',
        message: 'Send up to 8GB'
    }
]

const Cards = () =>
{
  return (
      <div className='w-full py-[10rem] px-4 bg-white text-black'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
            { data.map((item) =>
                (
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300' key={ item.id }>
                        
                        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={ item.image } alt={ item.title } />
                        
                        <h2 className='text-2xl font-bold text-center py-8'> { item.title } </h2>
                        
                        <p className='text-center text-4xl font-bold'> { item.price } </p>
                        
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>{ item.storage }</p>
                            <p className='py-2 border-b mx-8'>{ item.quantity }</p>
                            <p className='py-2 border-b mx-8'>{ item.message }</p>
                        </div>
                        
                        <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Start Trial</button>
                    
                    </div>
                )) }
            </div>
        </div>
  )
}

export default Cards;
