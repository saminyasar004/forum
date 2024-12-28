import CenterFeed from "./CenterFeed";
import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";

export default function Feed() {
    return (
        <section className="py-20">
            <div className="row grid grid-cols-5 gap-5">
                <LeftPannel />

                <CenterFeed />

                <RightPannel />
            </div>
        </section>
    );
}
