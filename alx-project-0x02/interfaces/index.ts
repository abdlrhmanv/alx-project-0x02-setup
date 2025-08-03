export interface CardProps {
    title: string;
    content: string;
    image: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string; image: string }) => void;
  }
  
  export interface FormData {
    title: string;
    content: string;
    image: string;
  }

export interface ButtonProps {
    label: string;
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    disabled?: boolean;
    className?: string;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
}