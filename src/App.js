/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Main from './routes/main/main.component';
import './App.scss';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorTemplateComponent from './core/components/error-template/error-template.component';

const errorHandler = (error, errorInfo) => {
  console.log('Logging ', error, errorInfo);
};

const App = () => {
  return (
    /* ErrorBoundary taken from the package react-error-boundary provides all the tools
       that are needed to declaratively handle runtime errors in the App. */
    <ErrorBoundary FallbackComponent={ErrorTemplateComponent} onError={errorHandler}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
