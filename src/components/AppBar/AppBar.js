import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const AppBarComp = ({ toggleDrawer, anchor, position }) => {
  const classes = useStyles();

  return (
    <AppBar position={position} className={classes.appBar}>
      <Toolbar>
        <Hidden smUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer(anchor, true)}
            edge='start'
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant='h6' noWrap>
          App Bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
