import React, { useState } from "react";
import "./App.css";
import ChannelList from "./Components/ChannelList/ChannelList";
import TV from "./Components/TV/TV";

function App() {
  const [hlsUrl, setHlsUrl] = useState(
    "https://stream.sunplex.live/GAZI-TV/index.m3u8"
  );
  return (
    <div className="dark">
      <div className="bg-[#F8FAFC] dark:bg-[#0A1122] w-full h-screen flex items-start lg:items-center justify-center p-5">
        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="rounded-xl border-gray-300 dark:border-gray-700 shadow-lg overflow-hidden lg:col-span-3 lg:order-last">
            <TV hlsUrl={hlsUrl} />
          </div>
          <ChannelList setHlsUrl={setHlsUrl} hlsUrl={hlsUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
