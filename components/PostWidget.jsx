import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { getRecentPosts, getRelatedPosts } from '../services'
import Link from 'next/link'
const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect( async() => {
    if (slug) {
      const res = await getRelatedPosts(categories, slug)
      setRelatedPosts(res)
    }
    else {
      const res = await getRecentPosts();
      setRelatedPosts(res)
    }
  }, [slug])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className="text-xl mb-8 font-semibold-border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div className="flex items-center w-full mb-4" key={index}>
          <div className="w-16 flex-none">
            <img
              src={post.coverImage.url} 
              alt={post.title}
              className="align-middle rounded-full"
              width="60px"
              height="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-grey-500 text-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget