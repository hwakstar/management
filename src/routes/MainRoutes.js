import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const Datasets = Loadable(lazy(() => import('../views/Datasets')));
// const Dashboard = Loadable(lazy(() => import('../views/Dashboard')));
const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const Workflows = Loadable(lazy(() => import('../views/Workflows')));

const Classes = Loadable(lazy(() => import('../views/Classes')));
const Models = Loadable(lazy(() => import('../views/Models')));
const Quick = Loadable(lazy(() => import('../views/Quickstart')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Datasets />
    },
    {
      path: '/dataset',
      element: <Datasets />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/workflow', element: <Workflows /> },
    { path: '/class', element: <Classes /> },
    // { path: '/dashboard', element: <Dashboard /> },
    { path: '/model', element: <Models /> },
    { path: '/quick-start', element: <Quick /> }
  ]
};

export default MainRoutes;
