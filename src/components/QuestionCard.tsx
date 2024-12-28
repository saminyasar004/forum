import { MessagesSquare, Eye } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import { Question } from "@/types/index.type";

export default function QuestionCard({
    id,
    question,
    description,
    author,
    authorImg,
    time,
    tags,
    comments,
    views,
}: Question) {
    return (
        <Link to={`/question/${id}`} className="w-full">
            <div className="w-full bg-slate-100 rounded-lg p-5 py-6 space-y-5">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center gap-4">
                        <Avatar className={cn("ring-1 ring-primary")}>
                            <AvatarImage src={authorImg} alt={author} />
                            <AvatarFallback>{author}</AvatarFallback>
                        </Avatar>
                        <h5 className="text-lg">by: {author}</h5>
                    </div>

                    <span className="font-para font-semibold text-lg text-neutral-500">
                        {time}
                    </span>
                </div>

                <div className="w-full flex items-start justify-between flex-col gap-2">
                    <h4>{question}</h4>
                    <p className="text-base font-medium font-para">
                        {description.slice(0, 160)}...
                    </p>
                </div>

                <Separator />
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2 flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag.id}
                                className="bg-primary/10 text-primary py-2 px-3 rounded-md text-sm font-heading font-medium cursor-pointer"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <div className="flex items-center justify-center gap-2">
                            <MessagesSquare
                                className="text-neutral-500"
                                size={22}
                            />
                            <span className="font-para font-semibold text-base text-neutral-500">
                                {comments.length} comments
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Eye className="text-neutral-500" size={22} />
                            <span className="font-para font-semibold text-base text-neutral-500">
                                {views.length} views
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
