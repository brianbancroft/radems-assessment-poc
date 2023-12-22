import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

function PageNewAssessmentSelector() {
  return (
    <AnimatedPage>
      <article className="mx-auto max-w-prose py-12">
        <h1>title</h1>

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
          Aute aliqua Lorem sunt cupidatat officia ullamco reprehenderit nisi
          officia aute nulla. Mollit ut proident velit dolor amet ex.
          Reprehenderit exercitation laboris minim nulla magna dolor irure
          pariatur ipsum officia. Minim qui sunt adipisicing sit. Duis eiusmod
          laborum cupidatat officia commodo labore sint veniam nisi velit
          laboris do. Ea laborum nulla reprehenderit esse consequat excepteur
          sunt magna eu reprehenderit.
        </p>
      </article>
    </AnimatedPage>
  );
}

export default PageNewAssessmentSelector;
