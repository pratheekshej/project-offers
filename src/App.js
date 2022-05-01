/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import PageLoaderComponent from './core/components/page-loader/page-loader.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Main = lazy(() => import('./routes/main/main.component'));

const App = (props) => {
  return (
    <Fragment>
      <Suspense fallback={<PageLoaderComponent loading={true} />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home {...props} />} />
        </Routes>
      </Suspense>
      <PageLoaderComponent />
    </Fragment>
  );
}

export default App;
