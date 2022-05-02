/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import PageLoaderComponent from './core/components/page-loader/page-loader.component';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorTemplateComponent from './core/components/error-template/error-template.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Main = lazy(() => import('./routes/main/main.component'));

const errorHandler = (error, errorInfo) => {
  console.log('Logging ', error, errorInfo);
};

const App = () => {
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorTemplateComponent} onError={errorHandler}>
        <Suspense fallback={<PageLoaderComponent loading={true} />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <PageLoaderComponent />
    </Fragment>
  );
}

export default App;
