/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:05:22
 * @LastEditTime: 2020-08-30 21:52:18
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\App.js
 * @
 */
import React, { memo, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DocumentTitle from "react-document-title";
import BaseLayout from "../layouts/basicLayout";
import { adminRoutes } from "../router/index";

import "../styles/App.scss";
const App = memo(function App(props) {
  const [title, setTitle] = useState("welcome");

  return (
    <>
      <DocumentTitle title={title}>
        <BaseLayout>
          <Switch>
            {adminRoutes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact} render={props=>(
                <route.component { ...props} />
              ) }></Route>
            ))}
            {/* 都未命中 */}
            <Redirect to="/404" />
          </Switch>
        </BaseLayout>
      </DocumentTitle>
    </>
  );
});

export default App;
