import { json, redirect, useLoaderData } from "react-router-dom";

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

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(assessment.createdAt));

  const { questions: q } = assessment;

  const questionaireQuestions = questionaire[assessment.type].questions;

  const operationRiskScore = q[0] + q[1] + q[2] + q[3] + q[4];
  const responseCapabilityScore = q[5] + q[6] + q[7] + q[8] + q[9];

  let responseElements = [];
  for (let i = 0; i < questionaireQuestions.length; i++) {
    responseElements.push(
      <div>
        <h4>{questionaireQuestions[i].question}</h4>
        <p>{q[i]}</p>
      </div>
    );
  }

  return (
    <>
      <article className="mx-auto max-w-prose">
        <section className="my-4">
          <h2 className="text-2xl font-bold mb-2">{assessment.name}</h2>
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
      <SelectorGauge />
    </>
  );
}

export default PageArchiveAssessment;
