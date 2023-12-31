import { json, redirect, useLoaderData, useNavigate } from "react-router-dom";

import { questionaire } from "../lib/questionaire";

import SelectorGauge from "../components/SelectorGauge";

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
  const navigate = useNavigate();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(assessment.createdAt));

  const { questions: q } = assessment;

  function handleClick() {
    if (!confirm("Are you sure you want to delete this assessment?")) {
      return;
    }

    const assessments = JSON.parse(localStorage.getItem("assessment") ?? "{}");

    delete assessments[assessment.id];

    localStorage.setItem("assessment", JSON.stringify(assessments));

    navigate("/archive");
  }

  const questionaireQuestions = questionaire[assessment.type].questions;

  const operationRiskScore = q[0] + q[1] + q[2] + q[3] + q[4];
  const responseCapabilityScore = q[5] + q[6] + q[7] + q[8] + q[9];

  let responseElements = [];

  for (let i = 0; i < questionaireQuestions.length; i++) {
    if (i === 0) {
      responseElements.push(
        <h3 className="text-xl my-1 font-light">SAR Operation Risk Score</h3>
      );
    }

    if (i === 5) {
      responseElements.push(
        <h3 className="text-xl my-1 font-light">Response Capability Score</h3>
      );
    }

    responseElements.push(
      <div className="my-5">
        <h4 className="font-light text-sm italic">
          {questionaireQuestions[i].question}
        </h4>
        <SelectorGauge selectedOption={q[i]} />
      </div>
    );
  }

  return (
    <>
      <article className="mx-auto max-w-prose">
        <section className="my-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-2">{assessment.name}</h2>
            <button className="text-red-500" onClick={handleClick}>
              Delete
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            {questionaire[assessment.type].title} assessment
          </p>
          <p className="mb-2">{assessment.description}</p>
          <p className="text-gray-500 text-sm">Created at: {formattedDate}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Score</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h4>Operation Risk Score</h4>
              <p>Your score is {operationRiskScore}</p>
            </div>
            <div>
              <h4>Response Capability Score</h4>
              <p>Your score is {responseCapabilityScore}</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Questions</h2>
          {responseElements}
        </section>
        <section>{/* TODO: Create delete action */}</section>
      </article>
    </>
  );
}

export default PageArchiveAssessment;
