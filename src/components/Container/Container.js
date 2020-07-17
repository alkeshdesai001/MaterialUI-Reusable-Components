import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (width) =>
  makeStyles({
    maxWidthLg: {
      maxWidth: width,
    },
  })();

const ContainerComp = ({ children, component, maxWidth, disableGutters }) => {
  const classes = useStyles(maxWidth);

  return (
    <Container
      component={component ? component : 'div'}
      maxWidth={component ? 'lg' : false}
      fixed={component ? false : true}
      disableGutters={disableGutters ? disableGutters : false}
      className={classes.maxWidthLg}
    >
      {children}
    </Container>
  );
};

export default ContainerComp;
