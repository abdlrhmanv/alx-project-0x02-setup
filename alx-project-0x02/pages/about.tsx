import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
const About = () => {
  return (
    <div>
        <Header />
        <Button label="Click me" onClick={() => {}} size="small" shape="rounded-sm" variant="primary" disabled={false} className="bg-blue-500 text-white" />
        <Button label="Click me" onClick={() => {}} size="medium" shape="rounded-md" variant="secondary" disabled={false} className="bg-green-500 text-white" />
        <Button label="Click me" onClick={() => {}} size="large" shape="rounded-full" variant="outline" disabled={false} className="bg-red-500 text-white" />
    </div>
  )
}

export default About;