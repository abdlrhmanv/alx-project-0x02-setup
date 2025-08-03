import React from 'react'
import About from '@/pages/about'
import Home from '@/pages/home'
import Posts from '@/pages/posts'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex gap-4'>
        <Link href="/about">About</Link>
        <Link href="/home">Home</Link>
        <Link href="/posts">Posts</Link>
    </div>
  )
}

export default Header;  