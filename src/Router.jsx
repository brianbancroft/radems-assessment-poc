import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageAbout from "./pages/PageAbout";
import PageAssessmentArchive from "./pages/PageAssessmentArchive";
import PageHome from "./pages/PageHome";
import PageAssessmentLayout from "./pages/PageAssessmentLayout";
import PageNewAssessmentLayout from "./pages/PageNewAssessmentLayout";
import PageNewAssessmentSelector from "./pages/PageNewAssessmentSelector";
import PageNewAssessmentIntro from "./pages/PageNewAssessmentIntro";
import PageNewAssessmentEnd from "./pages/PageNewAssessmentEnd";
import PageNewAssessmentPage from "./pages/PageNewAssessmentPage";

import LayoutHome from "./pages/LayoutHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/archive",
        element: <PageAssessmentArchive />,
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "/assess",
        element: <PageAssessmentLayout />,
        children: [
          {
            path: "/assess",
            element: <PageNewAssessmentSelector />,
          },
          {
            path: "/assess/new/:assessmentType/",
            element: <PageNewAssessmentLayout />,
            children: [
              {
                path: "/assess/new/:assessmentType/page/new",
                element: <PageNewAssessmentIntro />,
              },
              {
                path: "/assess/new/:assessmentType/page/end",
                element: <PageNewAssessmentEnd />,
              },
              {
                path: "/assess/new/:assessmentType/page/:page",
                element: <PageNewAssessmentPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
