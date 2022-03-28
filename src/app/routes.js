import React from 'react';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { useStores } from '../stores';

const Login = React.lazy(async () => import('../pages/Login').then((m) => ({ default: m.Login })));
const Main = React.lazy(async () => import('../pages/Main').then((m) => ({ default: m.Main })));
const StudentMain = React.lazy(async () => import('../pages/StudentMain').then((m) => ({ default: m.StudentMain })));
const Page404 = React.lazy(async () => import('../pages/Page404').then((m) => ({ default: m.Page404 })));
const StudentPage = React.lazy(async () => import('../pages/StudentPage').then((m) => ({ default: m.StudentPage })));
const ForgotYourPassword = React.lazy(async () => import('../pages/ForgotYourPassword').then((m) => ({ default: m.ForgotYourPassword })));
const RedefinePassword = React.lazy(async () => import('../pages/RedefinePassword').then((m) => ({ default: m.RedefinePassword })));
const LoginStudent = React.lazy(async () => import('../pages/LoginStudent').then((m) => ({ default: m.LoginStudent })));

function ProtectedRoutes({ redirectTo }) {
  const { userStore: { token } } = useStores();

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}
export function MyRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<LoginStudent />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main />} />
      </Route>

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/studentmain" element={<StudentMain />}>
          <Route path="" element={<StudentPage />} />
        </Route>
      </Route>
      <Route path="/recovery" element={<ForgotYourPassword />} />

      <Route path="/redefine/:token" element={<RedefinePassword />} />

      <Route path="*" element={<Page404 />} />
    </Routes >

  );
}
