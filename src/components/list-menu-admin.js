import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoney from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';


export const mainListItems = (
  <div>
    <ListItem button component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/admin/CLT">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Funcionários - CLT" />
    </ListItem>
    <ListItem button component="a" href="/admin/CPS">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Funcionários - CPS" />
    </ListItem>
    <ListItem button component="a" href="/admin/MEI">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Funcionários - MEI" />
    </ListItem>
    <ListItem button component="a" href="/admin/passagem">
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
      <ListItemText primary="Passagens" />
    </ListItem>
    <ListItem button component="a" href="/admin/usuarios">
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);