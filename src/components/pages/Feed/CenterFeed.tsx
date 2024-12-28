import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import questionsData from "../../../data/questions.json";

export default function CenterFeed() {
    return (
        <section className="col-span-3 space-y-6">
            <div className="w-full flex items-center justify-between">
                <h4>All Questions</h4>
                <Button size="lg">Ask a Question</Button>
            </div>

            <div className="w-full flex items-end justify-end">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full flex items-center justify-center gap-6 flex-col">
                {questionsData.map((question) => (
                    <QuestionCard key={question.id} {...question} />
                ))}
            </div>
        </section>
    );
}
