import { lazy } from 'react';
const Home = lazy(() => import('../Pages/Home'));
const Blog = lazy(() => import('../Pages/Blog'));


const PublicRoutes = [
  { path: '/', Component: Home },
  { path: '/blog', Component: Blog }
]

export default PublicRoutes;
