import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import {MdDateRange} from 'react-icons/md'

const PostCard = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md pb-8 mb-6">
        <img
          src={post.coverImage.url} 
          alt={post.title}
          className={'object-top h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'}
          />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-purple-700 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img 
            src={post.author.picture.url} 
            alt={post.author.name}
            className='align-middle rounded-full'
            width={30}
            height={30}
            />
            <p className="inline-text-grey-700 align-middle ml-2 text-lg">{post.author.name}</p>
        </div>

        <div className="font-medium text-grey-700 flex items-center justify-center cursor-pointer">
          <MdDateRange />
          <span>
            {moment(post.createdAt).format('MMM, DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-lg text-center text-grey-800 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition
            duration-500 transform hover:-translate-y-1
            inline-block bg-purple-700
            text-white px-7 py-3
            rounded-full cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard