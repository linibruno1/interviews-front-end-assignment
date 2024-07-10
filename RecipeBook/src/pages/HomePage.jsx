import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="h-[90vh] flex flex-col items-center justify-center text-center gap-y-3">
            <h1 className="text-2xl">Welcome!</h1>
            <p>
                Start exploring our{" "}
                <Link to="/recipes" className="text-sky-700">
                    recipes!
                </Link>
            </p>
        </div>
    );
}
