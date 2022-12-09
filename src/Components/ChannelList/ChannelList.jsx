import React, { useEffect, useState } from "react";
import ChannelItem from "../ChannelItem/ChannelItem";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const ChannelList = ({ setHlsUrl, hlsUrl }) => {
  const [channels, setChannels] = useState([]);

  const [currentCat, setCurrentCat] = useState("Featured");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getChannels = async () => {
      setLoading(true);
      const res = await fetch(
        `https://hmtv-server.vercel.app/tv-list-by-category`
      );
      const data = await res.json();
      if (data.success) {
        setChannels(data.data);
        setErrorMessage("");
      } else {
        setErrorMessage(data.error);
      }
      setLoading(false);
    };

    getChannels();
  }, []);

  const handleOpenCategory = (category) => {
    if (currentCat === category) {
      setCurrentCat("");
    } else {
      setCurrentCat(category);
    }
  };

  return (
    <div className="flex flex-col gap-3 lg:min-h-[485px] max-h-[490px] p-2 bg-gray-200 dark:bg-gray-800 overflow-y-scroll py-5 rounded-lg overflow-hidden w-full">
      {loading && (
        <div className="flex justify-center items-center h-full">
          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
            <span class="flex h-6 w-6 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
            </span>
          </h2>
        </div>
      )}

      {errorMessage && (
        <div className="flex justify-center items-center h-full">
          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
            {errorMessage}
          </h2>
        </div>
      )}

      {channels.map((categoryItem, idx) => (
        <div key={idx} className="border border-gray-600 rounded-lg">
          <div
            className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
            onClick={() => handleOpenCategory(categoryItem.category_name)}
          >
            <h2 className="text-base font-medium text-white">
              {categoryItem.category_name} - ({categoryItem.totalChannel})
            </h2>
            {categoryItem.category_name === currentCat ? (
              <HiChevronUp className="text-white" />
            ) : (
              <HiChevronDown className="text-white" />
            )}
          </div>
          {categoryItem.category_name === currentCat && (
            <div className="flex flex-col gap-1.5 py-2 px-1">
              {categoryItem.channels.map((channel) => (
                <ChannelItem
                  hlsUrl={hlsUrl}
                  key={channel._id}
                  channel={channel}
                  setHlsUrl={setHlsUrl}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChannelList;
