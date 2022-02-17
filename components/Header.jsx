import React, {useContext} from 'react'

import Link from 'next/link';

const Header = () => {
    const categories = [{name: 'React', slug: 'react'}, {name: 'WebDevelopment', slug: 'web-dev'}]
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
                {categories.map(category => (
                    <Link href={`category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white m-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header