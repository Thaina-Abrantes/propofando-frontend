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
const Page404 = React.lazy(async () => import('../pages/Page404').then((m) => ({ default: m.Page404 })));
const Users = React.lazy(async () => import('../pages/Users').then((m) => ({ default: m.Users })));
const QuestionCategory = React.lazy(async () => import('../pages/QuestionCategory').then((m) => ({ default: m.QuestionCategory })));

function ProtectedRoutes({ redirectTo }) {
  const { userStore: { token } } = useStores();

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}
export function MyRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main />}>
          <Route path="" element={<Users />} />
          <Route path="page2" element={<QuestionCategory />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>

  );
}
