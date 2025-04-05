import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-4 text-center">
      <Helmet>
        <title>404 Not Found | GameOn Solution</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Page not found - GameOn Solution" />
      </Helmet>

      <h1 className="text-7xl font-extrabold text-black">404</h1>
      <p className="mt-3 text-lg text-gray-600">
        Oops! The page you're looking for doesn&apos;t exist.
      </p>

      <a
        href="/"
        className="mt-6 inline-block bg-black text-white rounded-2xl px-6 py-3 text-sm font-semibold"
      >
        Go Back Home
      </a>
    </div>
  );
}
