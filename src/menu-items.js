// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DatasetIcon from '@mui/icons-material/Dataset';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ClassIcon from '@mui/icons-material/Class';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const icons = {
  WorkHistoryIcon: WorkHistoryIcon,
  ClassIcon: ClassIcon,
  ModelTrainingIcon: ModelTrainingIcon,
  DatasetIcon: DatasetIcon,
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'quickstart',
      title: 'Quick start',
      type: 'group',
      icon: icons['ContactSupportOutlinedIcon'],
      children: [
        {
          id: 'quickstart',
          title: 'Quick Start',
          type: 'item',
          icon: icons['DatasetIcon'],
          url: '/quick-start'
        }
      ]
    },
    {
      id: 'navigation',
      title: 'Materially',
      caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'datasets',
          title: 'Datasets',
          type: 'item',
          icon: icons['DatasetIcon'],
          url: '/dataset'
        },
        {
          id: 'workflows',
          title: 'Workflows',
          type: 'item',
          icon: icons['WorkHistoryIcon'],
          url: '/workflow'
        },
        {
          id: 'classes',
          title: 'Classes',
          type: 'item',
          icon: icons['ClassIcon'],
          url: '/class'
        },
        {
          id: 'models',
          title: 'Models',
          type: 'item',
          icon: icons['ModelTrainingIcon'],
          url: '/model'
        }
      ]
    },
    // {
    //   id: 'pages',
    //   title: 'Pages',
    //   caption: 'Prebuild Pages',
    //   type: 'group',
    //   icon: icons['NavigationOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/sample-page',
    //       icon: icons['ChromeReaderModeOutlinedIcon']
    //     },
    //     {
    //       id: 'auth',
    //       title: 'Authentication',
    //       type: 'collapse',
    //       icon: icons['SecurityOutlinedIcon'],
    //       children: [
    //         {
    //           id: 'login-1',
    //           title: 'Login',
    //           type: 'item',
    //           url: '/application/login',
    //           target: true
    //         },
    //         {
    //           id: 'register',
    //           title: 'Register',
    //           type: 'item',
    //           url: '/application/register',
    //           target: true
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'utils',
    //   title: 'Utils',
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-icons',
    //       title: 'Icons',
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: 'Typography',
    //       type: 'item',
    //       url: '/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: icons['ContactSupportOutlinedIcon'],
      children: [
        // {
        //   id: 'disabled-menu',
        //   title: 'Disabled Menu',
        //   type: 'item',
        //   url: '#',
        //   icon: icons['BlockOutlinedIcon'],
        //   disabled: true
        // },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          icon: icons['HelpOutlineOutlinedIcon'],
          chip: {
            label: 'Help?',
            color: 'primary'
          },
          external: true,
          target: true
        }
      ]
    }
  ]
};
