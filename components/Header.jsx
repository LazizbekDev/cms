import React, {useState, useEffect} from 'react'
import { getCategories } from '../services'
import Link from 'next/link';

const Header = () => {
  const [cates, setCates] = useState([]);
  useEffect(async () => {
    const res = await getCategories();
    setCates(res);
  }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-blue-400 py8">
            <div className="md:float-left block">
                <Link href={'/'}>
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Blog
                    </span>
                </Link>
            </div>
            <div className="hidden md:foalt-left md:contents">
                {cates.map(cate => (
                    <Link href={`category/${cate.slug}`} key={cate.slug}>
                        <span className="md:float-right mt-2 align-middle text-white m-4 font-semibold cursor-pointer">
                            {cate.tags[0]}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header