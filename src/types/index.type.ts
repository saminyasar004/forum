export interface Comment {
    id: string;
    author: string;
    avatar: string;
    content: string;
    votes: number;
    timestamp: string;
    replies?: Comment[];
}

export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Tag {
    id: string;
    name: string;
}

export interface Question {
    id: string;
    question: string;
    description: string;
    author: string;
    authorImg: string;
    time: string;
    tags: Tag[];
    comments: Comment[];
    views: string[];
}
