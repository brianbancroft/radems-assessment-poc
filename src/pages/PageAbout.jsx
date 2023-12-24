import githubIcon from "../lib/github-icon.svg";

function PageAbout() {
  return (
    <article className=" mx-auto px-4 py-8 max-w-prose">
      <div className="flex flex-col items-center">
        <p className="mb-4 text-gray-700">
          This is a better attempt at an easier-to-use version of the online
          RADeMS assessment tool{" "}
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
          This is a visual refactor of the tool. It removes the pages of text
          and context and strips it down to something which follows the workflow
          of a real-life assessment so that the question can be asked and
          answered without distraction.
        </p>

        <a
          className="border-blue-600 border px-4 py-2 rounded-md block text-center"
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
