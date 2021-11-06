import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../components/ui/NavBar'
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/marvel" element={ <MarvelScreen /> } />
          <Route exact path="/dc" element={ <DcScreen /> } />
          <Route exact path="/search" element={ <SearchScreen /> } />
          <Route exact path="/hero/:heroeId" element={ <HeroScreen /> } />
          <Navigate to="/marvel"/>
        </Routes>        
      </div>  
    </>
  )
};