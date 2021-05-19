import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function DashboardItem({items}) {
    
  const renderItems = (item) => {
  const Compoent = item.icon
    return (
        <ListItem button key={item.name} className="dashboard_panel">
                  <ListItemIcon><Compoent style={{ color: '#fff' }}/></ListItemIcon>
              <ListItemText primary={item.name} className="dashboard_text"/>
            </ListItem>
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
