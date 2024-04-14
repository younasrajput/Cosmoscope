/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import BaseLayout from "../layouts/BaseLayout";
import TransactionPage from "../pages/transactionPage/TransactionPage";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const ProposalsPage = lazy(() => import("../pages/proposalPage/ProposalsPage"));
const ValidatorsPage = lazy(
  () => import("../pages/validatorPage/ValidatorsPage"),
);
const BlockPage = lazy(() => import("../pages/blockPage/BlockPage"));

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/proposals",
        element: (
          <Suspense fallback={<Loading />}>
            <ProposalsPage />
          </Suspense>
        ),
      },
      {
        path: "/validators",
        element: (
          <Suspense fallback={<Loading />}>
            <ValidatorsPage />
          </Suspense>
        ),
      },
      {
        path: "/blocks/:height",
        element: (
          <Suspense fallback={<Loading />}>
            <BlockPage />
          </Suspense>
        ),
      },
      { path: "/txs/:hash", element: <TransactionPage /> },
    ],
  },
]);
