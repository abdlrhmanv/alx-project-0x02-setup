import React from 'react'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'
const Posts = () => {
    return (
        <div>
            <Header />
            <PostModal isOpen={true} onClose={() => {}} onSubmit={() => {}} />
        </div>
    )
}

export default Posts;
