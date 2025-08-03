import React, { useState } from 'react'
import { type UserModalProps, type UserProps } from '@/interfaces'

const UserModal = ({ isOpen, onClose, onSubmit }: UserModalProps) => {
    const [formData, setFormData] = useState<UserProps>({
        id: 0,
        name: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        }
    })
    const [errors, setErrors] = useState<{ name?: string; email?: string; address?: { street?: string; suite?: string; city?: string; zipcode?: string; geo?: { lat?: string; lng?: string } } }>({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validateForm = (): boolean => {
        const errors: { name?: string; email?: string; address?: { street?: string; suite?: string; city?: string; zipcode?: string; geo?: { lat?: string; lng?: string } } } = {}

        if (!formData.name) {
            errors.name = 'Name is required'
        }

        if (!formData.email) {
            errors.email = 'Email is required'
        }

        if (!formData.address.street) {
            errors.address = {
                ...formData.address,
                street: formData.address.street
            }
        }

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit(formData)
            onClose()
        }
    }

    const handleClose = () => {
        setFormData({
            id: 0,
            name: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            }
        })
    }
    return (
        <div>
            <h2>User Modal</h2>
        </div>
    )
}
export default UserModal;