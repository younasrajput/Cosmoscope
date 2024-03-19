import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import BaseLayout from "../layouts/BaseLayout";
import ProposalsPage from "../components/ProposalsPage";
import ValidatorsPage from "../components/ValidatorsPage";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/proposals", element: <ProposalsPage /> },
      { path: "/validators", element: <ValidatorsPage /> },
    ],
  },
]);
