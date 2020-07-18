import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const DrawerComp = ({ drawerState, toggleDrawer, anchor, children }) => (
  <SwipeableDrawer
    anchor={anchor}
    open={drawerState}
    onClose={toggleDrawer(anchor, false)}
    onOpen={toggleDrawer(anchor, true)}
  >
    {children}
  </SwipeableDrawer>
);

export default DrawerComp;
