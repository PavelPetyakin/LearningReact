import React from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/mainLayout";
import { ProjectPage, WelcomePage } from "pages";
import { CustomerDirections } from "routing/directions";

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
