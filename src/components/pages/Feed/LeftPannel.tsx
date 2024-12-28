import { Button } from "@/components/ui/button";
import { House, Tag, UsersRound } from "lucide-react";
export default function LeftPannel() {
    const navigations = [
        {
            name: "Home",
            url: "/",
            icon: House,
            isActive: true,
        },
        {
            name: "Tags",
            url: "/tags",
            icon: Tag,
            isActive: false,
        },
        {
            name: "Users",
            url: "/users",
            icon: UsersRound,
            isActive: false,
        },
    ];

    const topics = [
        "Indoor Plants",
        "Curing The Plants",
        "Organic Gardening",
        "Waving Seeds",
    ];

    const searches = ["Grass", "No Rain", "Seeds", "Homepage"];

    return (
        <section className="space-y-6">
            <div className="w-full flex items-center justify-start gap-2 flex-col">
                {navigations.map((navigation) => (
                    <div
                        className={`w-full flex items-center justify-start gap-2 cursor-pointer hover:bg-slate-100 rounded-md py-2 pl-3 transition-all duration-300 ${
                            navigation.isActive
                                ? "bg-slate-100 text-primary"
                                : ""
                        }`}
                    >
                        <navigation.icon size={24} />
                        <h5>{navigation.name}</h5>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-center justify-start gap-4 flex-col pl-4">
                <h6 className="text-neutral-500/60 w-full text-base">
                    Featured Topic
                </h6>
                {topics.map((topic) => (
                    <h6 className="w-full cursor-pointer text-lg font-semibold">
                        {topic}
                    </h6>
                ))}
            </div>

            <div className="w-full flex items-center justify-start flex-col gap-4 pl-4">
                <h6 className="text-neutral-500/60 w-full text-base">
                    Featured Topic
                </h6>
                <div className="w-full flex items-start justify-start flex-wrap gap-4">
                    {searches.map((search) => (
                        <Button variant={"outline"}>{search}</Button>
                    ))}
                </div>
            </div>
        </section>
    );
}
