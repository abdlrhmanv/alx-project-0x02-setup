import React, { useState } from 'react'
import { type UserProps } from '@/interfaces'
import UserModal from './UserModal'

interface UserCardComponentProps {
    user: UserProps;
}

const UserCard: React.FC<UserCardComponentProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
            <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => {}} />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{user.id}</h2>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-500 text-sm mb-4">
                {user.address.street}, {user.address.city}
            </p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">User ID: {user.id}</span>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}
export default UserCard;