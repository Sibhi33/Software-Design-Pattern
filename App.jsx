
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import RetroGrid from "@/components/magicui/retro-grid";





const App = () => {
    return (
        <>
            <RetroGrid />
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
{/* 
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText> */}
        </>
    )
}

export default App