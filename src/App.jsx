import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';
import AllNav from './shared/AllNav/AllNav';
import Footer from './shared/Footer/Footer';
import Loading from './shared/Loading';

const App = () => {
  return (
    <div>
      <AllNav />
      <Suspense fallback={<Loading />}>
        <main className='main'>
          <Routes>
            {PublicRoutes.map(({ path, Component }, index) => {
              return <Route key={index} path={`${path}`} element={<Component />} />;
            })}
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>

  );
};

export default App;
