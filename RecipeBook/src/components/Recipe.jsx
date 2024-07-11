import { StarIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function Recipe({ data }) {
    const {
        id,
        name,
        ingredients,
        instructions,
        image,
        cuisine: { name: cuisine },
        diet: { name: diet },
        difficulty: { name: difficulty },
        comments,
    } = data;

    // Get full url image
    const imageUrl = import.meta.env.VITE_API_URL + image;

    // Get color of difficulty
    let difficultyColor = "";

    switch (difficulty) {
        case "Easy":
            difficultyColor = "bg-green-600";
            break;
        case "Medium":
            difficultyColor = "bg-yellow-600";
            break;
        case "Hard":
            difficultyColor = "bg-red-600";
            break;
        default:
            difficultyColor = "bg-gray-400";
            break;
    }

    // Calculate Rating
    let averageRating = 0;

    if (comments && comments.length >= 1) {
        const totalRating = comments.reduce(
            (acc, comment) => acc + comment.rating,
            0
        );
        averageRating = Math.round(totalRating / comments.length);
    }

    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt={name}
                    src={imageUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="absolute top-4 right-4 flex gap-2 flex-wrap">
                <span className="text-xs text-white bg-amber-600 px-2 py-0.5 rounded-full">
                    #{cuisine}
                </span>
                <span className="text-xs text-white bg-amber-600 px-2 py-0.5 rounded-full">
                    #{diet}
                </span>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <div className="flex gap-2 items-center">
                        <h3 className="text-md font-medium text-gray-700">
                            <Link to={`/recipes/${id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </Link>
                        </h3>
                        <span className={`w-3 h-3 ${difficultyColor} rounded-full`}></span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{instructions}</p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                        {ingredients.map((e) => (
                            <span
                                className="text-xs text-white bg-sky-700 px-2 py-0.5 rounded-full"
                                key={e}
                            >
                                {e}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-1">
                    <p className="text-sm font-medium text-gray-900">{averageRating}</p>
                    <StarIcon className="mt-0.5 size-4" />
                </div>
            </div>
        </div>
    );
}
