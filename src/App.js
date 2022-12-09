import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./App.css";
import ChannelList from "./Components/ChannelList/ChannelList";
import TV from "./Components/TV/TV";

function App() {
  const [hlsUrl, setHlsUrl] = useState(
    "https://stream.sunplex.live/GAZI-TV/index.m3u8"
  );

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {
        if (!data?.as?.includes("Vision Technologies")) {
          toast.error("Video can't be played from other ISP");
        }
      });
  }, []);

  return (
    <div className="dark">
      <div className="bg-[#F8FAFC] dark:bg-[#0A1122] w-full min-h-screen flex items-start lg:items-center justify-center p-5">
        <div className="lg:max-w-6xl w-full lg:w-[72rem] grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="rounded-xl border-gray-300 dark:border-gray-700 shadow-lg overflow-hidden lg:col-span-3 lg:order-last lg:min-h-[485px] max-h-[490px]">
            <TV hlsUrl={hlsUrl} />
          </div>
          <ChannelList setHlsUrl={setHlsUrl} hlsUrl={hlsUrl} />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
