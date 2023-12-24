import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

function PageNewAssessmentSelector() {
  return (
    <AnimatedPage>
      <article className="mx-auto max-w-prose py-12">
        <h1 className="text-2xl">New Assessment</h1>

        <section className="grid grid-cols-2 grid-rows-2 gap-2 w-72 h-72 mx-auto my-4 ">
          <Link
            to="/assess/new/ground/page/new"
            className="border-black border-b-4 border-r-4 border-t border-l p-2"
          >
            Ground Search and Rescue
          </Link>
          <Link
            to="#"
            className="border-gray-200 p-2 disabled text-gray-500 cursor-not-allowed border-4"
          >
            Rope Rescue
          </Link>
          <Link
            to="#"
            className="border-gray-200 p-2 disabled text-gray-500 cursor-not-allowed border-4"
          >
            Swiftwater
          </Link>
          <Link
            to="#"
            className="border-gray-200 p-2 disabled text-gray-500 cursor-not-allowed border-4"
          >
            Alpine
          </Link>
        </section>
        <p>
          Select the type of assessment you would like to create. This is a
          proof-of-concept, and only Ground Search is available.
        </p>
      </article>
    </AnimatedPage>
  );
}

export default PageNewAssessmentSelector;
