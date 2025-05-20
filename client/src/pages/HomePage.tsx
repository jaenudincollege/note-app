import { Link } from "react-router";

const HomePage = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Organize your thoughts and
            <strong className="text-teal-600"> stay productive</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Take notes quickly, keep them organized, and access them anywhere.
            Whether it's a brilliant idea or a daily task — capture it all in
            one place.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              to="/notes"
            >
              View Notes
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              to="/createnote"
            >
              Create a Note
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
