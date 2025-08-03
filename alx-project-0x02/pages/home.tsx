import React from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'


const Home = () => {
  return (
    <div>
      <Header />
      <Card title="Card 1" content="This is the first card" image="https://via.placeholder.com/150" />
      <Card title="Card 2" content="This is the second card" image="https://via.placeholder.com/150" />
      <Card title="Card 3" content="This is the third card" image="https://via.placeholder.com/150" />
      <PostModal isOpen={true} onClose={() => {}} onSubmit={() => {}} />
    </div>
  )
}

export default Home