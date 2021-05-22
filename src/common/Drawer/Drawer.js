import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import DashboardIcon from '@material-ui/icons/Dashboard'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Icon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { color } from '../../Color/color'
import DashboardItem from "./List/List"
import { draweData } from "./drawerdData"
import './drawer.css'

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
    
    
  },
  drawerPaper: {
      width: drawerWidth,
      backgroundColor:'var(--primary-color)'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
export default function Drawer1(props) {
  const classes = useStyles();
  

const map =item=>{
		let route = props.history.location.pathname;
        item.active = route.includes(item.link);
		return item;
	}
return (
    <div>
        <React.Fragment key={`left`}>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
             anchor="left"
      >
        <div className={classes.toolbar} />
        <DashboardItem items={draweData.map(map)} {...props}/>
      </Drawer>
        </React.Fragment>
    </div>
)

}

