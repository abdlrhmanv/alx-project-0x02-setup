import React from 'react'
import { type CardProps } from '@/interfaces'

const Card = ({ title, content, image }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={image} alt={title} />
    </div>
  )
}

export default Card;