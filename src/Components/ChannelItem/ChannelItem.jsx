import React from "react";

const ChannelItem = ({ channel, setHlsUrl, hlsUrl }) => {
  return (
    <button
      onClick={() => {
        setHlsUrl(channel.channel_link);
      }}
      disabled={channel.channel_link === hlsUrl}
      title={channel.channel_link === hlsUrl ? "Playing" : "Play"}
      className={
        channel.channel_link === hlsUrl
          ? "shadow-lg border-gray-300 dark:border-gray-600 border rounded-md p-3 hover:cursor-not-allowed bg-gray-100 dark:bg-black"
          : "shadow-lg border-gray-300 dark:border-gray-600 border rounded-md p-3 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-black"
      }
    >
      <div className="flex-row gap-4 flex justify-start items-center">
        <div className="flex-shrink-0">
          <img
            alt="channel logo"
            src={channel.channel_logo}
            className="mx-auto object-cover rounded h-16 w-16 "
          />
        </div>
        <div>
          <span className="text-sm font-medium text-gray-600 dark:text-white">
            {channel.channel_name}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ChannelItem;
