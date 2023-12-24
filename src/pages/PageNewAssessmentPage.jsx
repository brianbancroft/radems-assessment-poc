import { Fragment, useEffect } from "react";
import { useParams, useNavigate, useBlocker } from "react-router-dom";

import { questionaire } from "../lib/questionaire";
import AnimatedPage from "../components/AnimatedPage";

function PageNewAssessmentPage() {
  const { assessmentType, page } = useParams();

  const navigate = useNavigate();
  const blocker = useBlocker(({ nextLocation }) => {
    return !/\/assess\/new\/ground\/page\//.test(nextLocation.pathname);
  });

  useEffect(() => {
    if (
      blocker.state === "blocked" &&
      confirm("Are you sure you want to cancel this assessment?")
    ) {
      blocker.proceed();
    }
  }, [blocker.state]);

  const { questions } = questionaire[assessmentType];

  const { question, title, explainers, type } = questions[Number(page) - 1];

  function handleClick(points) {
    return async function () {
      const assessment = JSON.parse(localStorage.getItem("assessment")) || {};
      const currentAssessment = assessment["current"] || {
        type: "ground",
        questions: {},
      };

      currentAssessment.questions[Number(page) - 1] = points;

      assessment["current"] = currentAssessment;

      await localStorage.setItem("assessment", JSON.stringify(assessment));

      navigate(`/assess/new/${assessmentType}/page/${Number(page) + 1}`);
    };
  }

  const scoring =
    type === "SAR operation risk score"
      ? [
          {
            title: "low",
            points: 0,
            color: "green",
          },
          {
            title: "moderate",
            points: 1,
            color: "yellow",
          },
          {
            title: "high",
            points: 2,
            color: "red",
          },
        ]
      : [
          {
            title: "high",
            points: 0,
            color: "green",
          },
          {
            title: "moderate",
            points: 1,
            color: "yellow",
          },
          {
            title: "low",
            points: 2,
            color: "red",
          },
        ];

  return (
    <AnimatedPage>
      <article className="mx-auto max-w-prose">
        <section id="intro" className="mt-4">
          <h2 className="text-xl mb-3">{title}</h2>
          <p className="my-1">{question}</p>
        </section>
        <section id="selector" className="mt-2 mb-6">
          <h3 className="my-2 italic">Select one:</h3>
          <div className="grid grid-cols-3 gap-x-2">
            {scoring.map(({ title, points, color }) => (
              <button
                className={`bg-${color}-200 border-2 border-${color}-600 rounded-md py-4 shadow-lg focus:border-${color}-800 focus:bg-${color}-400 select-none`}
                onClick={handleClick(points)}
                key={title}
              >
                {title}
              </button>
            ))}
          </div>
        </section>
        <section id="explainer">
          <h2 className="text-xl mb-3">Scoring criteria</h2>
          {scoring.map(({ title, color }) => (
            <Fragment key={`explainer-${title}`}>
              <h3
                className={`my-2 text-xl border-l-[20px] pl-4 border-l-${color}-200 capitalize text-${color}-600`}
              >
                {title}
              </h3>
              <ul className="my-1 list-disc pl-8">
                {explainers[title].map((explainer, index) => (
                  <li key={index}>{explainer}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </section>
        <div className="hidden text-red-600 border-red-600 bg-red-200 border-l-red-200" />
        <div className="hidden text-yellow-600 border-yellow-600 bg-yellow-200 border-l-yellow-200" />
        <div className="hidden text-green-600 border-green-600 bg-green-200 border-l-green-200" />
        <div className="hidden text-red-600 border-red-800 bg-red-400 border-l-red-200" />
        <div className="hidden text-yellow-600 border-yellow-800 bg-yellow-400 border-l-yellow-200" />
        <div className="hidden text-green-600 border-green-800 bg-green-400 border-l-green-200" />
      </article>
    </AnimatedPage>
  );
}

export default PageNewAssessmentPage;
