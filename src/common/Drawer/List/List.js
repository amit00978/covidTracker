import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function DashboardItem({items,page,setPage,history}) {
    
  const renderItems = (item, index) => {
    const Compoent = item.icon
    return (
      <React.Fragment>
           {item.active? <div style={{ height: 60, width: "100%", backgroundColor: '#fff', position: 'absolute', zIndex: 1,borderTopLeftRadius:120,borderBottomLeftRadius:120 }}>

        </div> : ''}
        <ListItem button key={item.name} className="dashboard_panel" style={{ zIndex: 100 }} onClick={() => {
          console.log("histo", history)
          // setPage(item.link)
          history.push(`${item.link}`)
          window.location.reload();
            }}>
          <ListItemIcon><Compoent className={`drawer_noactive ${item.active? "drawer_active":""} `}/></ListItemIcon>
          <ListItemText primary={item.name} className={`dashboard_text ${item.active? "drawer_active":""} `} />
        </ListItem>
 
     
      </React.Fragment>
    )
        
  
    }

return (
<div>
        <List >
          {items.map(renderItems)}
        </List>
</div>    
)

}
