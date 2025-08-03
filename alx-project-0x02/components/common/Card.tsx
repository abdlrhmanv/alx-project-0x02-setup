import React from 'react'
import { CardProps } from '@/interfaces'

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  )
}

export default Card;