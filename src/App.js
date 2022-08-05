import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import Home from "./pages/Home";
import NFT721 from "./pages/NFT721";
import NFT1155 from "./pages/NFT1155";
import NFTMarketPlace from "./pages/NFTMarketPlace";
import TicketNFT from "./pages/TicketNFT";
import Settings from "./pages/Settings";

function App() {
  

  return (
    <Routes >
          
          <Route exact={true} path="/" element={
             <Home></Home>
          }/>
          
          <Route exact={true} path="/nft-721" element={
            <NFT721></NFT721>
          }/>

          <Route exact={true} path="/nft-1155" element={
            <NFT1155></NFT1155>
          }/>

          <Route exact={true} path="/nft-marketplace" element={
            <NFTMarketPlace></NFTMarketPlace>
          }/>

          <Route exact={true} path="/ticket-nft" element={
            <TicketNFT></TicketNFT>
          }/>

          <Route exact={true} path="/settings" element={
            <Settings></Settings>
          }/>
      </Routes>
  );
}

export default App;
