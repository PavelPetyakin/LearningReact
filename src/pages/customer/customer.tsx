import { ProjectPage, WelcomePage } from "pages";
import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { CustomerDirections } from "routing/directions";
import { MainLayout } from "../../layouts/mainLayout";

export function Customer(props: RouteComponentProps<{page: string}>) {
  const { page } = props.match.params;
  const direction = new CustomerDirections();
console.log("Customer", page);
  let t;
  switch (page) {
    case direction.projects:
      t = ProjectPage;
      break;
    default:
      t = WelcomePage;
      break;
  }
  return (
    <MainLayout>
      <Switch>
        <Route to={page} component={t} />
      </Switch>
    </MainLayout>
  );
}
