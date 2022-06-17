import Home from '~/pages/Home';
import Staff from '~/pages/Staff';
import Salary from '~/pages/Salary';
import Depart from '~/pages/Depart';
import Staffs from '~/Staffs'
import Add from '~/Staffs';
import StaffDetails from '~/pages/Staff/StaffDetails';
import StaffInfo from '~/pages/Staff/StaffInfo';
import StaffFind from '~/pages/Staff/StaffFind';
import { STAFFS } from '~/Staffs';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/staff', component: Staff },
  { path: '/staff/details', component: StaffDetails },
  { path: '/salary', component: Salary },
  { path: '/depart', component: Depart },
  { path: '/add', component: Add },
];

const staffFindRoutes = [

];

for (var i = 0; i < STAFFS.length; i++) {
  var b = {path: `/staff/find/${i}`, component: StaffFind, id: i}
  staffFindRoutes.push(b);
}

const privateRoutes = [
  
];

for (var i = 0; i < STAFFS.length + 3; i++) {
  var b = {path: `/staff/${i}/*`, component: StaffInfo, id: i}
  privateRoutes.push(b);
}

export { publicRoutes, privateRoutes, staffFindRoutes };
