import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

  const [cates, setCates] = useState([]);

  useEffect(async () => {
    const res = await getCategories();
    setCates(res);
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className="text-xl mb-8 font-semibold-border-b pb-4">
        Categories
      </h3>
      {cates.map((category, index) => (
        <Link href={`/category/${category.slug}`} key={index}>
          <span className='cursor-pointer block mb-3 pb-3'>
            {category.tags[0]}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories