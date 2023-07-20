// assets
import { DashboardOutlined  } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'leads',
      title: 'Leads',
      type: 'item',
      url: '/leads',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'campaigns',
      title: 'Campaigns',
      type: 'item',
      url: '/campaigns',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
