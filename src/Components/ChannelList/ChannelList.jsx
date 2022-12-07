import React, { useEffect, useState } from "react";
import ChannelItem from "../ChannelItem/ChannelItem";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const ChannelList = ({ setHlsUrl, hlsUrl }) => {
  const [channels, setChannels] = useState([]);
  const [featuredChannels, setFeaturedChannels] = useState([]);
  const [sportsChannel, setSportsChannel] = useState([]);
  const [newsChannel, setNewsChannel] = useState([]);
  const [musicChannel, setMusicChannel] = useState([]);
  const [bangladeshiChannel, setBangladeshiChannel] = useState([]);
  const [entertainmentChannel, setEntertainmentChannel] = useState([]);
  const [hollywoodChannel, setHollywoodChannel] = useState([]);

  const [openFeatured, setOpenFeatured] = useState(true);
  const [openSports, setOpenSports] = useState(false);
  const [openNews, setOpenNews] = useState(false);
  const [openMusic, setOpenMusic] = useState(false);
  const [openBangladeshi, setOpenBangladeshi] = useState(false);
  const [openAll, setOpenAll] = useState(false);
  const [openEntertainment, setOpenEntertainment] = useState(false);
  const [openHollywood, setOpenHollywood] = useState(false);

  useEffect(() => {
    const getChannels = async () => {
      const res = await fetch(`https://hmtv-server.vercel.app/tv-list`);
      const data = await res.json();
      if (data.success) {
        setChannels(data.data);
        const featured = data.data.filter((channel) => channel.isFeatured);
        setFeaturedChannels(featured);
        const sports = data.data.filter((channel) =>
          channel.category.includes("Sports")
        );
        setSportsChannel(sports);
        const news = data.data.filter((channel) =>
          channel.category.includes("News")
        );
        setNewsChannel(news);
        const music = data.data.filter((channel) =>
          channel.category.includes("Music")
        );
        setMusicChannel(music);
        const bangladeshi = data.data.filter((channel) =>
          channel.category.includes("Bangladeshi")
        );
        setBangladeshiChannel(bangladeshi);

        const entertainment = data.data.filter((channel) => {
          return channel.category.includes("Entertainment");
        });
        setEntertainmentChannel(entertainment);

        const hollywood = data.data.filter((channel) => {
          return channel.category.includes("Hollywood");
        });
        setHollywoodChannel(hollywood);
      }
    };

    getChannels();
  }, []);

  const handleOpenCategory = (category) => {
    switch (category) {
      case "all":
        setOpenAll(!openAll);
        break;
      case "featured":
        setOpenFeatured(!openFeatured);
        break;
      case "sports":
        setOpenSports(!openSports);
        break;
      case "news":
        setOpenNews(!openNews);
        break;
      case "music":
        setOpenMusic(!openMusic);
        break;
      case "bangladeshi":
        setOpenBangladeshi(!openBangladeshi);
        break;
      case "entertainment":
        setOpenEntertainment(!openEntertainment);
        break;
      case "hollywood":
        setOpenHollywood(!openHollywood);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-3 h-[430px] p-2 bg-gray-200 dark:bg-gray-800 overflow-y-scroll py-5 rounded-lg overflow-hidden">
      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("all")}
        >
          <h2 className="text-base font-medium text-white">
            All Channels - ({channels?.length})
          </h2>
          {openAll ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openAll && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {channels.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("featured")}
        >
          <h2 className="text-base font-medium text-white">
            Featured - ({featuredChannels?.length})
          </h2>
          {openFeatured ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openFeatured && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {featuredChannels.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("sports")}
        >
          <h2 className="text-base font-medium text-white">
            Sports - ({sportsChannel?.length})
          </h2>
          {openSports ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openSports && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {sportsChannel.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("news")}
        >
          <h2 className="text-base font-medium text-white">
            News - ({newsChannel?.length})
          </h2>
          {openNews ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openNews && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {newsChannel.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("bangladeshi")}
        >
          <h2 className="text-base font-medium text-white">
            Bangladeshi - ({bangladeshiChannel?.length})
          </h2>
          {openBangladeshi ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openBangladeshi && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {bangladeshiChannel.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("music")}
        >
          <h2 className="text-base font-medium text-white">
            Music - ({musicChannel?.length})
          </h2>
          {openMusic ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openMusic && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {musicChannel.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("entertainment")}
        >
          <h2 className="text-base font-medium text-white">
            Entertainment - ({entertainmentChannel?.length})
          </h2>
          {openEntertainment ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openEntertainment && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {entertainmentChannel.map((channel) => (
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

      <div className="border border-gray-600 rounded-lg">
        <div
          className="flex justify-between gap-3 items-center bg-gray-600 px-5 py-2.5 rounded-md hover:cursor-pointer"
          onClick={() => handleOpenCategory("hollywood")}
        >
          <h2 className="text-base font-medium text-white">
            Hollywood - ({hollywoodChannel?.length})
          </h2>
          {openHollywood ? (
            <HiChevronUp className="text-white" />
          ) : (
            <HiChevronDown className="text-white" />
          )}
        </div>
        {openHollywood && (
          <div className="flex flex-col gap-1.5 py-2 px-1">
            {hollywoodChannel.map((channel) => (
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
    </div>
  );
};

export default ChannelList;
