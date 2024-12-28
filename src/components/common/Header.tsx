import { Search, Bell, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Logo from "../../assets/images/logo.png";

export default function Header() {
    const navItems = [
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Terms",
            url: "/terms",
        },
        {
            name: "Careers",
            url: "/careers",
        },
    ];

    return (
        <nav className="w-full z-50 py-1 bg-slate-100/50 backdrop-blur-lg sticky top-0 transition-all duration-300 ease-in-out border-b-2 border-slate-400/40">
            <div className="row grid grid-cols-5 gap-5">
                <div className="max-w-[80px]">
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" className="" />
                    </Link>
                </div>
                <div className="flex items-center justify-start">
                    <ul className="w-full flex items-start justify-start gap-6">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="text-base font-semibold transition-all duration-300 hover:text-primary"
                            >
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-2 flex items-center justify-center relative">
                    <Input
                        className="w-full h-12 font-medium text-base pl-16"
                        placeholder="Search..."
                    />
                    <Search
                        className="text-neutral-500 pointer-events-none absolute top-1/2 left-6 -translate-y-1/2"
                        size={24}
                    />
                </div>
                <div className="actions flex items-center justify-end gap-8">
                    <Link
                        to={"/"}
                        className="hover:text-primary transition-all duration-300"
                    >
                        <Bell size={24} />
                    </Link>
                    <Link
                        to={"/"}
                        className="hover:text-primary transition-all duration-300"
                    >
                        <Bookmark size={24} />
                    </Link>
                    <Link to={"/"}>
                        <Avatar className={cn("ring-1 ring-primary")}>
                            <AvatarImage
                                src="https://avatar.iran.liara.run/public"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
