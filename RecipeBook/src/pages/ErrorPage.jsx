import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-[90vh] flex flex-col items-center justify-center text-center gap-y-3">
            <h1 className="text-2xl">Something went wrong!</h1>
            <p>
                Please reload the page, go back to the{" "}
                <Link to="/" className="text-sky-700">
                    homepage
                </Link>{" "}
                or try again later.
            </p>
        </div>
    );
}
