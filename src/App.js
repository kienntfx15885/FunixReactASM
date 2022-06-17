import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes, staffFindRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { STAFFS } from './Staffs';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            const id = route.id;
            return (
              <Fragment key={index}>
                {STAFFS.map((staff) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page id={id} />
                        </Layout>
                      }
                    />
                  );
                })}
              </Fragment>
            );
          })}

          {staffFindRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Fragment key={index}>
                {STAFFS.map((staff) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page id={index} />
                        </Layout>
                      }
                    />
                  );
                })}
              </Fragment>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
