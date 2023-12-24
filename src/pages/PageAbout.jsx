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

        <a
          className="border-blue-600 border px-4 py-2 rounded-md block text-center"
          href="#"
          target="_blank"
        >
          <img src={githubIcon} className="w-6 h-6 inline-block mr-2" />
          Repo
        </a>

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
      </div>
    </article>
  );
}

export default PageAbout;
