import React from 'react';
import { Link } from 'react-router-dom';

import BreadcrumbItem from 'components/nav/BreadcrumbItem';
import BreadcrumbSeparator from 'components/nav/BreadcrumbSeparator';

const styles = {
  crumbList: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    background: '#fce8df',
    padding: 15,
    borderRadius: 10
  }
};

const Breadcrumb = ({ separator = '/', routes }) => {
  const routeKeys = Object.keys(routes);
  const items = [];

  for (let i = 0; i < routeKeys.length; i++) {
    const route = routes[routeKeys[i]].route;
    const label = routes[routeKeys[i]].label;
    const itemLookup = {
      to: route,
      label: label
    };

    items.push(itemLookup);
  }

  const breadcrumbArr = items.map(({ to, label }) => (
    <Link key={to} to={to}>
      {label}
    </Link>
  ));

  const breadcrumbChildren = breadcrumbArr.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = breadcrumbChildren.length - 1;

  const breadcrumbChildrenFormat = breadcrumbChildren.reduce(
    (acc, child, index) => {
      const notLast = index < lastIndex;
      if (notLast) {
        acc.push(
          child,
          <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
            {separator}
          </BreadcrumbSeparator>
        );
      } else {
        acc.push(child);
      }
      return acc;
    },
    []
  );

  return <ol style={styles.crumbList}>{breadcrumbChildrenFormat}</ol>;
};

export default Breadcrumb;
