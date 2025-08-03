import React from 'react'
import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
                
                {users.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No users found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const users = await response.json();
        
        return {
            props: {
                users
            },
            revalidate: 60
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        
        return {
            props: {
                users: []
            },
            revalidate: 60
        };
    }
}

export default Users;