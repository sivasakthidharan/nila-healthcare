import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import MainLayout from './components/layout/MainLayout'
// import MainLayout from './components/layout/MainLayout'
import ProtectedRoute from './components/auth/ProthectedRoute'
// import ProtectedRoute from './components/auth/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Experts from './pages/Experts'
import Appointments from './pages/Appointments'
import Payment from './pages/Payment'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import CoupleTherapy from './pages/CoupleTherapy';
import SexualHealth from './pages/SexualHealth';
import IndividualTherapy from './pages/IndividualTherapy';
import AnxietyStressPage from './pages/Session1';
import DepressionPage from './pages/Session2';
import TraumaPage from './pages/Session3';
import RelationshipPage from './pages/Session4';
import GriefPage from './pages/Session5';
import AngerManagementPage from './pages/Session6';
import QueerAffirmativePage from './pages/Session7';
import WorkStressPage from './pages/Session8';
import ParentingPage from './pages/Session9';
import FollowUpPage from './pages/Follow-up';
import './App.css'

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<ProtectedRoute />}>
//             <Route element={<MainLayout />}>
//               <Route index element={<Home/>} />
//               <Route path="dashboard" element={<Dashboard />} />
//               <Route path="users" element={<Users />} />
//               <Route path="experts" element={<Experts />} />
//               <Route path="appointments" element={<Appointments />} />
//               <Route path="payments" element={<Payment />} />
//               <Route path="about-us" element={<AboutUs />} />
//               <Route path="careers" element={<Careers />} />
//               <Route path="service/couple" element={<CoupleTherapy />} />
//               <Route path="service/sexual-health" element={<SexualHealth />} />
//               <Route path="service/individual" element={<IndividualTherapy/>} />
//               <Route path="concern/anxiety" element={<AnxietyStressPage/>} />
//               <Route path="service/followup" element={<FollowUpPage/>} />
//               <Route path="concern/depression" element={<DepressionPage/>} />
//               <Route path="concern/trauma" element={<TraumaPage/>} />
//               <Route path="concern/relationship" element={<RelationshipPage/>} />
//               <Route path="concern/grief" element={<GriefPage/>} />
//               <Route path="concern/anger" element={<AngerManagementPage/>} />
//               <Route path="concern/queer" element={<QueerAffirmativePage/>} />
//               <Route path="concern/work-stress" element={<WorkStressPage/>} />
//               <Route path="concern/parenting" element={<ParentingPage/>} />
//             </Route>
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* ✅ Public Route */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="service/couple" element={<CoupleTherapy />} />
            <Route path="service/sexual-health" element={<SexualHealth />} />
            <Route path="service/individual" element={<IndividualTherapy />} />
            <Route path="service/followup" element={<FollowUpPage />} />
            <Route path="concern/anxiety" element={<AnxietyStressPage />} />
            <Route path="concern/depression" element={<DepressionPage />} />
            <Route path="concern/trauma" element={<TraumaPage />} />
            <Route path="concern/relationship" element={<RelationshipPage />} />
            <Route path="concern/grief" element={<GriefPage />} />
            <Route path="concern/anger" element={<AngerManagementPage />} />
            <Route path="concern/queer" element={<QueerAffirmativePage />} />
            <Route path="concern/work-stress" element={<WorkStressPage />} />
            <Route path="concern/parenting" element={<ParentingPage />} />
            <Route path="/experts" element={<Experts />} />
              <Route path="/appointments" element={<Appointments />} />
             <Route path="appointments" element={<Appointments />} />

          </Route>

          {/* ✅ Login */}
          <Route path="/login" element={<Login />} />

          {/* 🔒 Protected Routes ONLY */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              
              <Route path="/payments" element={<Payment />} />
            </Route>
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;