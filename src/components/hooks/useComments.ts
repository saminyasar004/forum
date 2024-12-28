import { useState } from "react";
import type { Comment, Question } from "@/types/index.type";
import questionsData from "../../data/questions.json";

const SAMPLE_QUESTION: Question = {
    id: "q1",
    question: "How can I center a div in CSS?",
    description:
        "I'm trying to vertically and horizontally center a div using CSS. What is the best approach for modern browsers?",
    author: "John Doe",
    authorImg: "https://i.pravatar.cc/50",
    time: "2 hours ago",
    tags: [
        {
            id: "t1",
            name: "CSS",
        },
        {
            id: "t2",
            name: "HTML",
        },
    ],
    comments: [
        {
            id: "c1",
            author: "Jane Smith",
            avatar: "https://i.pravatar.cc/50",
            content:
                "You can use flexbox. Add `display: flex; justify-content: center; align-items: center;` to the parent container.",
            votes: 10,
            timestamp: "a day ago",
        },
        {
            id: "c2",
            author: "Mike Johnson",
            avatar: "https://i.pravatar.cc/50",
            content:
                "Grid is another option. Use `display: grid; place-items: center;` on the parent container.",
            votes: 10,
            timestamp: "a day ago",
        },
        {
            id: "c3",
            author: "Sarah Wilson",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            content:
                "HHHHH For security best practices, I would recommend using HttpOnly cookies for token storage instead of localStorage. This helps prevent XSS attacks since JavaScript cannot access the cookie content.",
            votes: 15,
            timestamp: "1 day ago",
            replies: [
                {
                    id: "c5",
                    author: "Mike Johnson",
                    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
                    content:
                        "Great point about HttpOnly cookies! Also worth mentioning that you should implement CSRF protection when using cookies.",
                    votes: 8,
                    timestamp: "20 hours ago",
                },
            ],
        },
        {
            id: "c4",
            author: "Alex Chen",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
            content:
                "For handling token expiration, you can implement a refresh token mechanism. Store the access token in memory and the refresh token in an HttpOnly cookie.",
            votes: 12,
            timestamp: "1 day ago",
        },
    ],
    views: ["u1", "u2", "u3"],
};

export function useComments(id: string) {
    const currentQuestion =
        questionsData.find((question) => question.id === id) || SAMPLE_QUESTION;

    const [comments, setComments] = useState<Comment[]>(
        currentQuestion.comments
    );
    const [nextId, setNextId] = useState("c4");
    console.log(comments);

    const addComment = (content: string) => {
        const newComment: Comment = {
            id: nextId,
            author: "Current User",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
            content,
            votes: 0,
            timestamp: "just now",
        };

        setComments([...comments, newComment]);
        setNextId((parseInt(nextId.slice(1)) + 1).toString());
    };

    const addReply = (parentId: string, content: string) => {
        const newReply: Comment = {
            id: nextId,
            author: "Current User",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
            content,
            votes: 0,
            timestamp: "just now",
        };

        const updateComments = (comments: Comment[]): Comment[] => {
            return comments.map((comment) => {
                if (comment.id === parentId) {
                    return {
                        ...comment,
                        replies: [...(comment.replies || []), newReply],
                    };
                }
                if (comment.replies) {
                    return {
                        ...comment,
                        replies: updateComments(comment.replies),
                    };
                }
                return comment;
            });
        };

        setComments(updateComments(comments));
        setNextId(nextId + 1);
    };

    const updateVotes = (commentId: string, delta: number) => {
        const updateVotesInComments = (comments: Comment[]): Comment[] => {
            return comments.map((comment) => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        votes: comment.votes + delta,
                    };
                }
                if (comment.replies) {
                    return {
                        ...comment,
                        replies: updateVotesInComments(comment.replies),
                    };
                }
                return comment;
            });
        };

        setComments(updateVotesInComments(comments));
    };

    return {
        comments,
        addComment,
        addReply,
        updateVotes,
    };
}
