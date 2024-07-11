export default function RecipeSkeleton() {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 animate-pulse">
                <div className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div className="h-2.5 bg-gray-200 rounded-full w-1/2 mb-4 animate-pulse"></div>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full w-4/5 mb-2 animate-pulse"></div>
            <div className="h-2.5 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
        </div>
    );
}
