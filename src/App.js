import React from "react";
import "./styles/App.css";
import ReactGA from 'react-ga4';
import Web3Provider from "./utils/network";
import Home from "./pages/Home";
import NarBar from "./Components/NavBar/NavBar";
import Stake from "./pages/Stake"
import Footer from "./Components/Footer/Footer";
import CoinSwapper from "./pages/Swap";
import Pools from "./pages/Pools";
import Dash from "./pages/Dash";
import Transactions from "./pages/Transactions";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Control from "./pages/Control";
import BonePools from "./pages/BonePools";
import Featured from "./Components/Pools/Featured";
import FAQ from "./pages/FAQ"
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./pages/Liquidity";
import PoolStats from "./pages/PoolStats";
import AllPoolStats from "./pages/AllPoolStats";
import PortfolioTracker from "./pages/Portfolio.js";
import { createTheme, ThemeProvider } from "@mui/material";

import { Context } from "./Context.js";
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a9d6d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
  },
});

const App = () => {
  ReactGA.initialize('G-823N1D2MNZ');

  // ONLY MINTME price - nothing else
  const [mintmePriceInUSD, setMintmePriceInUSD] = React.useState(0);

  React.useEffect(() => {
    const getMintMePrice = async function() {
      try {
        const apiKey = 'CG-MDVh7vkyf1ZYzkQTop6oaFqm';
        // Try direct API first (may have CORS issues)
        const targetUrl = `https://api.coingecko.com/api/v3/simple/price?ids=webchain&vs_currencies=usd&x_cg_demo_api_key=${apiKey}`;
        const response = await axios.get(targetUrl);
        
        console.log("📡 API Response:", response.data);
        
        if(response.status === 200) {
          const price = response.data['webchain']?.usd || 0;
          setMintmePriceInUSD(price);
          console.log("💰 MINTME Price set to:", price);
        }
      } catch (error) {
        console.error("❌ Can't fetch MINTME price:", error);
        // If CORS fails, try with proxy
        try {
          console.log("🔄 Trying with proxy...");
          const proxyUrl = 'https://corsproxy.io/?';
          const apiKey = 'CG-MDVh7vkyf1ZYzkQTop6oaFqm';
          const targetUrl = `https://api.coingecko.com/api/v3/simple/price?ids=webchain&vs_currencies=usd&x_cg_demo_api_key=${apiKey}`;
          const response = await axios.get(`${proxyUrl}${encodeURIComponent(targetUrl)}`);
          
          if(response.status === 200) {
            const price = response.data['webchain']?.usd || 0;
            setMintmePriceInUSD(price);
            console.log("💰 MINTME Price set to (via proxy):", price);
          }
        } catch (proxyError) {
          console.error("❌ Proxy also failed:", proxyError);
        }
      }
    }

    getMintMePrice();
    // Fetch every 10 minutes
    const interval = setInterval(getMintMePrice, 600000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Context.Provider 
      value={{
        // ONLY MINTME price - simplified
        mintmePriceInUSDState: [mintmePriceInUSD, setMintmePriceInUSD]
      }}
    >
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <Web3Provider
              render={(network) => (
                <div>
                  <NarBar />
                  <Routes>
                    <Route path="/swap" element={<CoinSwapper network={network} />} />
                    <Route path="/liquidity" element={<Liquidity network={network} />} />
                    <Route path="/stake" element={<Stake network={network} />} />
                    <Route path="/pools" element={<Pools network={network} />} />
                    <Route path="/dash" element={<Dash network={network} />} />
                    <Route path="/featured" element={<Featured network={network} />} />
                    <Route path="/transactions" element={<Transactions network={network} />} />
                    <Route path="/terms" element={<Terms network={network} />} />
                    <Route path="/privacy" element={<Privacy network={network} />} />
                    <Route path="/cookies" element={<Cookies network={network} />} />
                    <Route path="/faq" element={<FAQ network={network} />} />
                    <Route path="/control" element={<Control network={network} />} />
                    <Route path="/bonepools" element={<BonePools network={network} />} />
                    <Route path="/poolstats" element={<PoolStats network={network} />} />
                    <Route path="/allpoolstats" element={<AllPoolStats network={network} />} />
                    <Route path="/portfolio" element={<PortfolioTracker network={network} />} />
                    <Route path="*" element={<CoinSwapper network={network} />} />
                  </Routes>
                  <Footer />
                </div>
              )}
            />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    </Context.Provider>
  );
};

export default App;
