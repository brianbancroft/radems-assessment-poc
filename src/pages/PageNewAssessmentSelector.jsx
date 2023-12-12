import { Link } from "react-router-dom";

function PageNewAssessmentSelector() {
  return (
    <article className="mx-auto max-w-prose py-8">
      <h1>title</h1>

      <section className="grid grid-cols-2 grid-rows-2 gap-2 w-72 h-72 mx-auto my-4">
        <Link to="/assess/gsar/1" className="border">
          Ground Search and Rescue
        </Link>
        <Link
          to="#"
          className="border disabled text-gray-500 cursor-not-allowed"
        >
          Rope Rescue
        </Link>
        <Link
          to="#"
          className="border disabled text-gray-500 cursor-not-allowed"
        >
          Swiftwater
        </Link>
        <Link
          to="#"
          className="border disabled text-gray-500 cursor-not-allowed"
        >
          Alpine
        </Link>
      </section>
      <p>
        Aute aliqua Lorem sunt cupidatat officia ullamco reprehenderit nisi
        officia aute nulla. Mollit ut proident velit dolor amet ex.
        Reprehenderit exercitation laboris minim nulla magna dolor irure
        pariatur ipsum officia. Minim qui sunt adipisicing sit. Duis eiusmod
        laborum cupidatat officia commodo labore sint veniam nisi velit laboris
        do. Ea laborum nulla reprehenderit esse consequat excepteur sunt magna
        eu reprehenderit.
      </p>
      <p>
        Anim voluptate sit consequat ut consequat laborum id do proident. Sint
        dolore nostrud anim aute exercitation in ipsum aliquip. Ex laboris do
        enim in. Officia sunt exercitation dolor non mollit. Reprehenderit non
        officia adipisicing qui proident incididunt aute exercitation tempor
        voluptate non elit mollit. Sint commodo id exercitation aute sint duis.
        Incididunt ullamco aliquip commodo laborum reprehenderit dolore aliquip.
      </p>
    </article>
  );
}

export default PageNewAssessmentSelector;
