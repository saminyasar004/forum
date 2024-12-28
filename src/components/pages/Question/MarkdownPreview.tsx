import ReactMarkdown from "react-markdown";

interface MarkdownPreviewProps {
    content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
    return (
        <div className="max-w-none text-base font-medium font-para">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
