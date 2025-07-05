import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Training from './pages/Training';
import OrgStructure from './pages/OrgStructure';
import Branch from './pages/Branch';
import Report from './pages/Report';
import Favorite from './pages/Favorite';
import AccountSetting from './pages/AccountSetting';
import { Layout } from 'antd';
import SidebarMenu from './components/SidebarMenu';
import HeaderBar from './components/HeaderBar';

const { Sider, Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/training" element={<Training />} />
        <Route path="/org-structure" element={<OrgStructure />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/report" element={<Report />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/account-setting" element={<AccountSetting />} />
      </Routes>
    </Router>
  );
}

export default App;