import { useState } from "react";
import { Bold, Italic, Link, List, Underline, Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MarkdownPreview from "./MarkdownPreview";

interface CommentEditorProps {
    onSubmit: (content: string) => void;
    onCancel?: () => void;
}

export default function CommentEditor({
    onSubmit,
    onCancel,
}: CommentEditorProps) {
    const [content, setContent] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const handleFormat = (format: string) => {
        const formats: Record<string, { prefix: string; suffix: string }> = {
            bold: { prefix: "**", suffix: "**" },
            italic: { prefix: "_", suffix: "_" },
            underline: { prefix: "<u>", suffix: "</u>" },
            link: { prefix: "[text](", suffix: ")" },
            list: { prefix: "- ", suffix: "" },
        };

        const textarea = document.querySelector("textarea");
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = content.substring(start, end);
        const { prefix, suffix } = formats[format];

        const newContent =
            content.substring(0, start) +
            prefix +
            (selectedText || "text") +
            suffix +
            content.substring(end);

        setContent(newContent);
    };

    const handleSubmit = () => {
        if (content.trim()) {
            onSubmit(content);
            setContent("");
            setIsPreview(false);
        }
    };

    return (
        <Card className="p-4">
            <div className="space-y-4">
                <div className="border rounded-lg">
                    <div className="flex justify-between border-b p-1">
                        <ToggleGroup type="multiple" className="flex flex-wrap">
                            <ToggleGroupItem
                                value="bold"
                                aria-label="Toggle bold"
                                onClick={() => handleFormat("bold")}
                            >
                                <Bold className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="italic"
                                aria-label="Toggle italic"
                                onClick={() => handleFormat("italic")}
                            >
                                <Italic className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="underline"
                                aria-label="Toggle underline"
                                onClick={() => handleFormat("underline")}
                            >
                                <Underline className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="link"
                                aria-label="Insert link"
                                onClick={() => handleFormat("link")}
                            >
                                <Link className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="list"
                                aria-label="Toggle list"
                                onClick={() => handleFormat("list")}
                            >
                                <List className="h-4 w-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsPreview(!isPreview)}
                        >
                            {isPreview ? (
                                <>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                </>
                            ) : (
                                <>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                </>
                            )}
                        </Button>
                    </div>

                    {isPreview ? (
                        <div className="p-4">
                            <MarkdownPreview content={content} />
                        </div>
                    ) : (
                        <Textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your answer..."
                            className="border-0 focus-visible:ring-0 resize-none"
                            rows={6}
                        />
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    {onCancel && (
                        <Button variant="outline" onClick={onCancel}>
                            Cancel
                        </Button>
                    )}
                    <Button onClick={handleSubmit}>Post Answer</Button>
                </div>
            </div>
        </Card>
    );
}
