import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RightPannel() {
    const stepsToImproveAccount = [
        {
            id: "upvote",
            title: "Upvote 5 Question",
        },
        {
            id: "ask",
            title: "Ask a Question",
        },
        {
            id: "answer",
            title: "Answer a Question",
        },
        {
            id: "follow",
            title: "Follow 5 User",
        },
        {
            id: "credentials",
            title: "Add 3 Credentials",
        },
    ];

    return (
        <section className="space-y-6">
            <div className="p-5 rounded-md space-y-5 bg-slate-100">
                <h5 className="border-b-2rem border-b-slate-400/40 py-3">
                    Improve Your Account
                </h5>
                {stepsToImproveAccount.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <Checkbox id={item.id} />
                        <div className="flex items-center gap-3">
                            <Label htmlFor={item.id}>{item.title}</Label>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
