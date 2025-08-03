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
