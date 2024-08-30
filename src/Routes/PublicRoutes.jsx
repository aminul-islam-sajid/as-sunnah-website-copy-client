import { lazy } from 'react';
const Home = lazy(() => import('../Pages/Home'));


const PublicRoutes = [
  { path: '/', Component: Home }
]

export default PublicRoutes;
