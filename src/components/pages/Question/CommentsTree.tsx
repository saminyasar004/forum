import { useState } from "react";
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/types/index.type";
import MarkdownPreview from "./MarkdownPreview";
import CommentEditor from "./CommentEditor";

interface CommentItemProps {
    comment: Comment;
    depth?: number;
    onReply: (parentId: string, content: string) => void;
    onVote: (commentId: string, delta: number) => void;
}

function CommentItem({
    comment,
    depth = 0,
    onReply,
    onVote,
}: CommentItemProps) {
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleReply = (content: string) => {
        onReply(comment.id, content);
        setShowReplyForm(false);
    };

    return (
        <div className={`pl-${depth * 8}`}>
            <div className="flex gap-4">
                {/* Voting */}
                <div className="flex flex-col items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onVote(comment.id, 1)}
                    >
                        <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-semibold">
                        {comment.votes}
                    </span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onVote(comment.id, -1)}
                    >
                        <ThumbsDown className="h-4 w-4" />
                    </Button>
                </div>

                {/* Comment Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-8 w-8 ring-1 ring-primary">
                            <img src={comment.avatar} alt={comment.author} />
                        </Avatar>
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">
                            {comment.timestamp}
                        </span>
                    </div>

                    <div className="mb-4">
                        <MarkdownPreview content={comment.content} />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowReplyForm(!showReplyForm)}
                        >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Reply
                        </Button>
                    </div>

                    {showReplyForm && (
                        <div className="mt-4">
                            <CommentEditor
                                onSubmit={handleReply}
                                onCancel={() => setShowReplyForm(false)}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Nested Replies */}
            {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 ml-12 space-y-4">
                    {comment.replies.map((reply) => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            depth={depth + 1}
                            onReply={onReply}
                            onVote={onVote}
                        />
                    ))}
                </div>
            )}

            <Separator className="my-6" />
        </div>
    );
}

interface CommentTreeProps {
    comments: Comment[];
    onReply: (parentId: string, content: string) => void;
    onVote: (commentId: string, delta: number) => void;
}

export default function CommentsTree({
    comments,
    onReply,
    onVote,
}: CommentTreeProps) {
    return (
        <div className="space-y-6">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    onReply={onReply}
                    onVote={onVote}
                />
            ))}
        </div>
    );
}
