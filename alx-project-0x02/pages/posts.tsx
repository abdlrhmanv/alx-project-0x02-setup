import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces';

interface PostsPageProps {
    posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
    return (
        <div>
            <Header />
            
            {posts.map((post) => (
                <PostCard key={post.id} title={post.title} content={post.content} userId={post.userId} />
            ))}
        </div>
    )
}

export async function getStaticProps() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        
        const posts = await response.json();
        
        return {
            props: {
                posts: posts.map((post: any) => ({
                    id: post.id,
                    title: post.title,
                    content: post.body,
                    userId: post.userId
                }))
            },
            revalidate: 60
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        
        return {
            props: {
                posts: []
            },
            revalidate: 60
        };
    }
}

export default Posts;
