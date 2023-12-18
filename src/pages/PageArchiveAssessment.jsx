import { json, redirect, useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const assessments = JSON.parse(localStorage.getItem("assessment") ?? "{}");

  const assessment = assessments[params.id];

  if (!assessment) {
    return redirect("/archive");
  }

  return json(assessment);
}

function PageArchiveAssessment() {
  const assessment = useLoaderData();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(assessment.createdAt));

  return (
    <article className="mx-auto max-w-prose">
      <section className="my-4">
        <h2 className="text-2xl font-bold mb-2">{assessment.name}</h2>
        <p className="mb-2">{assessment.description}</p>
        <p className="text-gray-500 text-sm">Created at: {formattedDate}</p>
      </section>
    </article>
  );
}

export default PageArchiveAssessment;
