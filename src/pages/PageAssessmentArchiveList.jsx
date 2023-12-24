import { useMemo } from "react";
import { Link } from "react-router-dom";

function deleteItem(event) {
  const formData = new FormData(event.target);

  const id = formData.get("id");

  const assessments = JSON.parse(localStorage.getItem("assessment") ?? "{}");

  if (
    !window.confirm("Are you sure you want to delete this assessment?") ||
    !assessments[id]
  ) {
    return;
  }

  delete assessments[id];

  localStorage.setItem("assessment", JSON.stringify(assessments));
}

function PageAssessmentArchive() {
  const assessments = useMemo(() => {
    const savedAssessments = JSON.parse(
      localStorage.getItem("assessment") ?? "{}"
    );

    const presentableAssessments = Object.values(savedAssessments).sort(
      (a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    );

    return presentableAssessments.filter((assessment) => assessment.id);
  }, []);

  return (
    <div className="bg-gray-200 max-w-prose mx-auto">
      <article className="max-w-prose bg-white min-h-screen mx-auto">
        <h3 className="text-2xl my-2">Assessment Archive</h3>

        {assessments.length === 0 && (
          <p className="text-gray-500 text-sm">
            No assessments have been saved.
          </p>
        )}
        <ul>
          {assessments.map((assessment) => (
            <li
              key={assessment.id}
              className="p-4 bg-gray-100 mx-2 my-1 rounded-lg flex justify-between py-4"
            >
              <div>
                <h4>{assessment.name}</h4>
                <p>{assessment.description}</p>
              </div>
              <div className="flex flex-col justify-evenly h-[7rem]">
                <Link
                  to={`/archive/${assessment.id}`}
                  className="bg-white border-b-4 border-r-4 px-4 py-2"
                >
                  <button>View</button>
                </Link>
                <form onSubmit={deleteItem}>
                  <button
                    className="bg-white border-b-4 border-r-4 py-2 px-4"
                    type="submit"
                  >
                    Delete
                  </button>
                  <input type="hidden" name="id" value={assessment.id} />
                </form>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default PageAssessmentArchive;
