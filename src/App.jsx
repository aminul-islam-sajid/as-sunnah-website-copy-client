import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';

const App = () => {
  return (
    <Suspense>
      <main className='main'>
        <Routes>
          {PublicRoutes.map(({ path, Component }, index) => {
            return <Route key={index} path={`${path}`} element={<Component />} />;
          })}
        </Routes>
      </main>
    </Suspense>
  );
};

export default App;
