import { Link } from "react-router-dom";
import githubIcon from "../lib/github-icon.svg";

function PageAbout() {
  return (
    <article className=" mx-auto px-4 py-8 max-w-prose">
      <div className="flex flex-col items-center">
        <p className="mb-4 text-gray-700">
          This is a concept of an easier-to-use version of the online RADeMS
          assessment tool{" "}
          <a
            href="https://bcsara.com/RADeMS/"
            target="_blank"
            className="underline text-blue-500"
          >
            (BCSARA)
          </a>
          .
        </p>
        <p className="mb-4 text-gray-700">
          This tool seeks to take all the main elements of the existing RADeMS
          PWA and distill it down to something that is easier to use in the
          field.
        </p>

        <section className="border-2 border-black rounded mt-3 mb-6 w-full p-4">
          <h2 className="my-2 text-2xl">New Assessment</h2>
          <Link
            to="/assess"
            className="border-blue-600 border-4 bg-blue-500 text-white px-4 py-2 rounded-md block text-center"
          >
            Start
          </Link>
        </section>

        <p className="mt-4 text-gray-700">
          Brian Bancroft 2023-2024. (
          <a
            href="https://bancroft.io"
            target="_blank"
            className="underline text-blue-500"
          >
            site
          </a>
          )
        </p>

        <a
          className="border-gray-600 border px-4 py-2 rounded-md block text-center mt-4"
          href="#"
          target="_blank"
        >
          <img src={githubIcon} className="w-6 h-6 inline-block mr-2" />
          Repo
        </a>
      </div>
    </article>
  );
}

export default PageAbout;
