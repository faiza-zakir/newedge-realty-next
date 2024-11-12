import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import BannerForm from "../banner-form/BannerForm";
// data
import { homeData } from "../../../../db/homeData";
// css
import { fatchHomeBannerVideo } from "@/app/apis/commonApi";
import bannerImg1 from "@/app/assets/banner/homebanner1.webp";

import "./styles.scss";

const BannerVideo = () => {
  const { bannerData } = homeData;
  const router = useRouter();
  const videoRef = useRef(null);
  const [bannerVideo, setBannerVideo] = useState({
    video_thumbnail: bannerImg1,
  });
  const autoPlay = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      setTimeout(() => {
        video.play();
      }, 2000);
    }
  };

  const getData = async () => {
    try {
      const resp = await fatchHomeBannerVideo();
      let NewData = resp?.data?.[resp?.data?.length - 1];
      let UpdatedData = {};
      UpdatedData.video_thumbnail =
        process.env.NEXT_PUBLIC_IMAGE_BASE_URL + NewData?.video_thumbnail;
      UpdatedData.video_url = NewData?.video_url;
      setBannerVideo(UpdatedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (bannerVideo?.video_url) {
      autoPlay();
    }
  }, [bannerVideo]);

  return (
    <div
      className="banner-video-area"
      style={{
        backgroundImage: `url(${bannerVideo?.video_thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      {bannerVideo?.video_url ? (
        <video
          // id="myVideo"
          autoPlay
          loop
          muted
          className="banner_video"
          playsInline
          webkit-playsinline="true"
          fetchPriority="high"
          // poster={bannerData?.bg}
          poster={bannerVideo?.video_thumbnail}
          ref={videoRef}
        >
          <source
            // src="https://newedge-realty.prismcloudhosting.com/bannerVideo.mp4"
            src={bannerVideo?.video_url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : null}

      {/* Add content you want to display on top of the video */}
      <div className="container" fetchpriority="high">
        <div className="banner-content mtb-60">
          <div className="bannerDetails">
            <div className="content_wrap">
              <span className="tag_line">{bannerData?.tagLine}</span>
              <h1>{bannerData?.title}</h1>
              <button
                className="theme_btn"
                onClick={() => router.push(bannerData?.link)}
              >
                Learn More
              </button>
            </div>
            <div className="banner_form_wrap form_desktop_view">
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
