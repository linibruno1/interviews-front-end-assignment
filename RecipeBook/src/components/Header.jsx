import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="p-6 text-center border-b border-gray-200">
            <Link to="/">
                <h2 className="text-2xl font-medium text-gray-900">RecipeBook</h2>
            </Link>
        </div>
    );
}
