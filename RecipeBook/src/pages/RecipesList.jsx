import RecipeSkeleton from "../components/RecipeSkeleton";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Recipe from "../components/Recipe";
import React, { useState } from "react";

export default function RecipesList() {
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const base_url = import.meta.env.VITE_API_URL;
    const page = searchParams.get("page") || "1";

    // Get recipes
    const getAllRecipes = async () => {
        const res = await fetch(
            `${base_url}/recipes?_page=${page}&_expand=cuisine&_expand=diet&_expand=difficulty&_embed=comments&_limit=8`
        );
        const total = res.headers.get("x-total-count");
        setTotalPages(Math.ceil(total / 10));
        const data = await res.json();
        return data;
    };

    const { data: recipes, isLoading } = useQuery({
        queryFn: getAllRecipes,
        queryKey: ["recipes", page],
    });

    // Handle pagination
    const prevPage = () => {
        if (page && !isNaN(Number(page))) {
            const prev = (Number(page) - 1).toString();
            setSearchParams({ page: prev });
        } else {
            setSearchParams({ page: "1" });
        }
    };

    const nextPage = () => {
        if (page && !isNaN(Number(page))) {
            const next = (Number(page) + 1).toString();
            setSearchParams({ page: next });
        } else {
            setSearchParams({ page: "1" });
        }
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-[90rem] lg:px-8">
            <h2 className="text-2xl font-medium text-gray-900">Browse recipes</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
                {!isLoading
                    ? recipes.map((recipe) => (
                        <React.Fragment key={recipe.id}>
                            <Recipe data={recipe} />
                        </React.Fragment>
                    ))
                    : Array.from({ length: 8 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <RecipeSkeleton />
                        </React.Fragment>
                    ))}
            </div>

            <div className="mt-20 flex justify-between">
                <button
                    onClick={prevPage}
                    disabled={Number(page) === 1}
                    className="rounded-md bg-gray-50 px-5 py-2 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 disabled:cursor-not-allowed disabled:text-gray-400"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={Number(page) === totalPages}
                    className="rounded-md bg-gray-50 px-5 py-2 text-md font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 disabled:cursor-not-allowed disabled:text-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
