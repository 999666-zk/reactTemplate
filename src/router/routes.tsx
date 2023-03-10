import AppLayout from '../layout/layout'
import { LazyImportComponent } from './LazyImportComponent'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const HelpDocs = lazy(() => import('../pages/help-docs/HelpDocs'))
const BestPractices = lazy(() => import('../pages/best-practices/BestPractices'))
const RecentUpdate = lazy(() => import('../pages/recent-update/RecentUpdate'))
const QflowCollege = lazy(() => import('../pages/qflow-college/QflowCollege'))

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: '/help-docs',
        element: <LazyImportComponent lazyChildren={HelpDocs} />,
      },
      {
        path: '/best-practices',
        element: <LazyImportComponent lazyChildren={BestPractices} />,
      },
      {
        path: '/recent-update',
        element: <LazyImportComponent lazyChildren={RecentUpdate} />,
      },
      {
        path: '/qflow-college',
        element: <LazyImportComponent lazyChildren={QflowCollege} />,
      },
    ],
  },
]

export default routes
