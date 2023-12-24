import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AnimatedPage from "../components/AnimatedPage";

function PageNewAssessmentIntro() {
  const { assessmentType } = useParams();

  useEffect(() => {}, []);

  return (
    <AnimatedPage>
      <article className="mx-auto max-w-prose">
        <h1 className="my-2 text-3xl">Getting Started</h1>
        <p className="my-2">
          This is the introduction on how to use this tool to determine risk
          score for a SAR tasking
        </p>
        <p className="my-2">
          This is a individually-created supplement to the RADeMS Ground and
          Inland Water Search and Rescue Assessment and Decision Making Support
          Reference Guide published in 2014 (rev 2014-08-29)
        </p>
        <p className="my-2 font-semibold">
          This assessment tool should not be used in real taskings. If there is
          any conflict between this tool and the RADeMS guide, the RADeMS guide
          is the source of truth.
        </p>

        <section className="flex justify-center w-full mt-4">
          <Link
            to={`/assess/new/${assessmentType}/page/1`}
            className="underline text-blue-500 flex flex-row justify-evenly items-center"
          >
            <span>Start Assessment</span>
            <ArrowRightIcon className="h-6 ml-3" />
          </Link>
        </section>
      </article>
    </AnimatedPage>
  );
}

export default PageNewAssessmentIntro;
