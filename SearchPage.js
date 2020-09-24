import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
        channel="clever programmer"
        verified
        subs="10M subscribers"
        noOfVideos="382 videos"
        description="best programming channel in the world"
      />
      <hr />
      <VideoRow 
      title="what is the future of python"
                    views="13M views"
                    timestamp="10 days ago"
                    channelImage="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"
                    channel="qazi"
                    image="https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2019/06/Python-Is-The-Future-Rafeh-Qazi.png"
                    subs="10M subscribers"
                    description="know the complete details about python after finishing this course you will ,master python fundamentals"
       />
    </div>
  );
}

export default SearchPage;
