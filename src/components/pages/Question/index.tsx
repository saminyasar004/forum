import { useState } from "react";
import {
    MessageSquare,
    ThumbsUp,
    ThumbsDown,
    Share2,
    Bookmark,
    Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import CommentEditor from "./CommentEditor";
import CommentTree from "./CommentsTree";
import { useComments } from "@/components/hooks";

export default function QuestionPage() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [votes, setVotes] = useState(42);
    const { comments, addComment, addReply, updateVotes } = useComments();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Question Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">
                    How to properly implement authentication in a React
                    application?
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <Avatar className="h-10 w-10 ring-1 ring-primary">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                            alt="User avatar"
                        />
                    </Avatar>
                    <div>
                        <h6 className="font-semibold font-heading text-lg">
                            John Doe
                        </h6>
                        <span className="font-para font-semibold text-base text-neutral-500">
                            Asked 2 days ago · Viewed 1.2k times
                        </span>
                    </div>
                </div>
            </div>

            {/* Question Content */}
            <Card className="p-6 mb-6">
                <div className="flex gap-4">
                    {/* Voting */}
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setVotes(votes + 1)}
                        >
                            <ThumbsUp className="h-5 w-5" />
                        </Button>
                        <span className="font-semibold text-lg">{votes}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setVotes(votes - 1)}
                        >
                            <ThumbsDown className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="max-w-none text-base font-medium font-para space-y-2">
                            <p>
                                I'm building a React application and I need to
                                implement user authentication. I've looked into
                                several solutions like JWT and session-based
                                auth, but I'm not sure about the best practices.
                            </p>
                            <p>My main concerns are:</p>
                            <ul>
                                <li>Security best practices</li>
                                <li>Token storage (localStorage vs cookies)</li>
                                <li>Handling token expiration</li>
                                <li>Protected routes implementation</li>
                            </ul>
                            <p>
                                Can someone provide a comprehensive guide or
                                point me in the right direction?
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mt-6">
                            <span className="bg-primary/10 text-primary py-2 px-3 rounded-md text-sm font-heading font-medium cursor-pointer">
                                react
                            </span>
                            <span className="bg-primary/10 text-primary py-2 px-3 rounded-md text-sm font-heading font-medium cursor-pointer">
                                web security
                            </span>
                            <span className="bg-primary/10 text-primary py-2 px-3 rounded-md text-sm font-heading font-medium cursor-pointer">
                                jwt
                                <span className="bg-primary/10 text-primary py-2 px-3 rounded-md text-sm font-heading font-medium cursor-pointer">
                                    nvm
                                </span>
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 mt-6">
                            <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsBookmarked(!isBookmarked)}
                            >
                                <Bookmark
                                    className={`h-4 w-4 mr-2 ${
                                        isBookmarked ? "fill-current" : ""
                                    }`}
                                />
                                Bookmark
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Flag className="h-4 w-4 mr-2" />
                                Report
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Comments Section */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">
                        {comments.length} Answers
                    </h2>
                </div>

                <CommentEditor onSubmit={addComment} />
                <Separator className="my-8" />
                <CommentTree
                    comments={comments}
                    onReply={addReply}
                    onVote={updateVotes}
                />
            </div>
        </div>
    );
}
