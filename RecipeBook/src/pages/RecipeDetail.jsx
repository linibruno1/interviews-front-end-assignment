import { useNavigate, useParams } from "react-router-dom";

export default function RecipeDetail() {
    const { id } = useParams();

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-y-5 justify-center h-[75vh] items-center">
            <button
                onClick={() => navigate(-1)}
                className="rounded-md bg-gray-50 px-5 py-2 text-md font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 disabled:cursor-not-allowed disabled:text-gray-400"
            >
                Go back
            </button>
            <h1>Recipe n° {id}</h1>
        </div>
    );
}
