import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard = ({ id, title, content, userId }: PostProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">User ID: {userId}</span>
                <span className="text-sm text-gray-500">Post ID: {id}</span>
            </div>
        </div>
    );
};

export default PostCard;