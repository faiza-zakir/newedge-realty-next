import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import BannerForm from "../banner-form/BannerForm";
// data
import { homeData } from "../../../../db/homeData";
// css
import "./styles.scss";

const BannerVideo = () => {
  const { bannerData } = homeData;
  const router = useRouter();
  const videoRef = useRef(null);

  const autoPlay = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.play();
    }
  };

  useEffect(() => {
    autoPlay();
  }, []);

  return (
    <div className="banner-video-area">
      <video
        // id="myVideo"
        // autoPlay
        loop
        muted
        className="banner_video"
        playsInline
        webkit-playsinline="true"
        fetchpriority="high"
        poster={bannerData?.bg}
        ref={videoRef}
      >
        <source
          src="https://newedge-realty.prismcloudhosting.com/bannerVideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

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
