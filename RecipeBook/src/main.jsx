import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecipeDetail from "./pages/RecipeDetail";
import RecipesList from "./pages/RecipesList";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import * as React from "react";
import "./index.css";

// Create a tanstack query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recipes",
    element: (
      <>
        <Header />
        <RecipesList />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "recipes/:id",
    element: (
      <>
        <Header />
        <RecipeDetail />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide the client */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
