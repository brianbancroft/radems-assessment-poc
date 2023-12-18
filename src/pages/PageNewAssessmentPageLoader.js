import { redirect } from "react-router-dom";

import { questionaire } from "../lib/questionaire";

export async function loader({ params }) {
  const { page, assessmentType } = params;

  if (!questionaire[assessmentType]) {
    return redirect("/assess");
  }

  const { questions } = questionaire[assessmentType];

  if (isNaN(page)) {
    return redirect(`/assess/new/${assessmentType}/page/new`);
  }

  if (Number(page) > questions.length) {
    return redirect(`/assess/new/${assessmentType}/page/end`);
  }

  return null;
}
