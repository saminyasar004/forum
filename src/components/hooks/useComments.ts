import { useState } from "react";
import type { Comment } from "@/types/index.type";

const SAMPLE_COMMENTS: Comment[] = [
    {
        id: "1",
        author: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        content:
            "For security best practices, I would recommend using HttpOnly cookies for token storage instead of localStorage. This helps prevent XSS attacks since JavaScript cannot access the cookie content.",
        votes: 15,
        timestamp: "1 day ago",
        replies: [
            {
                id: "2",
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
        id: "3",
        author: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
        content:
            "For handling token expiration, you can implement a refresh token mechanism. Store the access token in memory and the refresh token in an HttpOnly cookie.",
        votes: 12,
        timestamp: "1 day ago",
    },
];

export function useComments() {
    const [comments, setComments] = useState<Comment[]>(SAMPLE_COMMENTS);
    const [nextId, setNextId] = useState("4");

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
        setNextId(nextId + 1);
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
