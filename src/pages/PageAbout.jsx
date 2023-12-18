import githubIcon from "../lib/github-icon.svg";

function PageAbout() {
  return (
    <article className=" mx-auto px-4 py-8 max-w-prose">
      <div className="flex flex-col items-center">
        <p className="mb-4 text-gray-700">
          This is a better attempt at an easier-to-use version of the online
          RADeMS assessment tool.
        </p>
        <p className="mb-4 text-gray-700">
          This tool was created as a tribute to the hard work of the volunteers
          who have put hours of hard work into the original assessment tool, and
          isn't intended as a full standalone replacement
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
