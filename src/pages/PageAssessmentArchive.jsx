import { useMemo } from "react";
import { Link } from "react-router-dom";

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

    return presentableAssessments;
  }, []);

  return (
    <div className="bg-gray-200 ">
      <article className="max-w-prose bg-white min-h-screen mx-auto">
        <h3>Assessments</h3>
        <ul>
          {assessments.map((assessment) => (
            <li
              key={assessment.id}
              className="p-4 bg-gray-100 mx-2 rounded flex justify-between"
            >
              <div>
                <h4>{assessment.name}</h4>
                <p>{assessment.description}</p>
              </div>
              <div>
                <Link to={`/archive/${assessment.id}`} className="bg-white p-4">
                  <button>View</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default PageAssessmentArchive;
