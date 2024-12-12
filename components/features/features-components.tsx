import Image from "next/image";

// Images
// ------ Feed ------
import FeedWho from "@/public/images/features/feed-who.png";
import FeedPage from "@/public/images/features/feed-page.png";
import FeedPost from "@/public/images/features/feed-post.png";
// ------ Frames ------
import FramesTags from "@/public/images/features/frames-tags.png";
import FramesImport from "@/public/images/features/frames-import.png";
// ------ Resources ------
import ResourcesCard from "@/public/images/features/resources-card.png";
import ResourcesPage from "@/public/images/features/resources-page.png";
// ------ Import ------
import ImportFrom from "@/public/images/features/import-from.png";
import ImportLink from "@/public/images/features/import-link.png";
// ------ Cross Post ------
import CrossPostTags from "@/public/images/features/cross-post-tags.png";
import CrossPostAccounts from "@/public/images/features/cross-post-accounts.png";
// ------ Jobs ------
import JobsPage from "@/public/images/features/jobs-page.png";
import JObsAirbnb from "@/public/images/features/jobs-airbnb.png";
import JobsSpotify from "@/public/images/features/jobs-spotify.png";

export const FeedFeatures = () => (
  <div className="w-full relative pr-[26px]">
    <Image src={FeedPage} alt="feed page" className="w-full" />
    <Image
      src={FeedWho}
      alt="who to follow"
      className="w-[20%] absolute bottom-[10%] right-2 rounded-md rotate-[7deg]"
      style={{
        boxShadow:
          "42.612px 66.843px 47.625px 0px rgba(0, 0, 0, 0.03), 19.217px 29.244px 35.092px 0px rgba(0, 0, 0, 0.05), 5.013px 7.52px 19.217px 0px rgba(0, 0, 0, 0.06), 92.895px 144.576px 48.41px 0px rgba(0, 0, 0, 0.00), 59.531px 92.241px 43.831px 0px rgba(0, 0, 0, 0.01), 33.364px 52.335px 37.289px 0px rgba(0, 0, 0, 0.03), 15.046px 22.897px 27.476px 0px rgba(0, 0, 0, 0.05), 3.925px 5.888px 15.046px 0px rgba(0, 0, 0, 0.06)",
      }}
    />
    <Image
      src={FeedPost}
      alt="feed post"
      className="w-[37%] absolute -bottom-[2%] left-[3%] rounded-[5px] -rotate-[6deg]"
      style={{
        boxShadow:
          "88.059px 137.05px 45.89px 0px rgba(0, 0, 0, 0.00), 88.059px 137.05px 45.89px 0px rgba(0, 0, 0, 0.00), 56.432px 87.439px 41.549px 0px rgba(0, 0, 0, 0.01), 56.432px 87.439px 41.549px 0px rgba(0, 0, 0, 0.01), 31.627px 49.611px 35.348px 0px rgba(0, 0, 0, 0.03), 31.627px 49.611px 35.348px 0px rgba(0, 0, 0, 0.03), 14.263px 21.705px 26.046px 0px rgba(0, 0, 0, 0.05), 3.721px 5.581px 14.263px 0px rgba(0, 0, 0, 0.06)",
      }}
    />
  </div>
);

export const FramesFeatures = () => (
  <div className="w-full pt-6 sm:pt-[40px] navbar:pt-[50px] xl:pt-[64px] relative flex justify-end">
    <Image
      src={FramesImport}
      alt="import your designs to frames"
      className="absolute top-0 left-0 w-[50%] rounded-md"
    />
    <Image
      src={FramesTags}
      alt="final touches to frames"
      className="relative w-[60%] rounded-lg"
      style={{
        boxShadow:
          "-281.943px -155.627px 90.026px 0px rgba(0, 0, 0, 0.00), -180.75px -99.797px 82.35px 0px rgba(0, 0, 0, 0.00), -101.192px -55.83px 69.788px 0px rgba(0, 0, 0, 0.01), -45.362px -25.124px 51.643px 0px rgba(0, 0, 0, 0.02), -11.166px -6.281px 28.613px 0px rgba(0, 0, 0, 0.03)",
      }}
    />
  </div>
);

export const ResourcesFeatures = () => (
  <div className="w-full relative pr-[26px]">
    <Image src={ResourcesPage} alt="resources page" className="w-full" />
    <Image
      src={ResourcesCard}
      alt="resource card"
      className="w-[18%] absolute bottom-[16%] right-9 rounded-xl rotate-[7deg]"
      style={{
        boxShadow:
          "42.612px 66.843px 47.625px 0px rgba(0, 0, 0, 0.03), 19.217px 29.244px 35.092px 0px rgba(0, 0, 0, 0.05), 5.013px 7.52px 19.217px 0px rgba(0, 0, 0, 0.06), 92.895px 144.576px 48.41px 0px rgba(0, 0, 0, 0.00), 59.531px 92.241px 43.831px 0px rgba(0, 0, 0, 0.01), 33.364px 52.335px 37.289px 0px rgba(0, 0, 0, 0.03), 15.046px 22.897px 27.476px 0px rgba(0, 0, 0, 0.05), 3.925px 5.888px 15.046px 0px rgba(0, 0, 0, 0.06)",
      }}
    />
  </div>
);

export const ImportFeatures = () => (
  <div className="w-full relative">
    <Image
      src={ImportFrom}
      alt="import from any platform"
      className="w-[70%]"
    />
    <Image
      src={ImportLink}
      alt="import designs with a link"
      className="absolute bottom-[4%] right-0 w-[50%] rounded-lg"
      style={{
        boxShadow:
          "292.418px 162.617px 93.341px 0px rgba(0, 0, 0, 0.00), 187.41px 103.55px 85.319px 0px rgba(0, 0, 0, 0.01), 105.008px 58.338px 72.193px 0px rgba(0, 0, 0, 0.04), 46.67px 26.252px 53.233px 0px rgba(0, 0, 0, 0.07), 11.668px 6.563px 29.169px 0px rgba(0, 0, 0, 0.08)",
      }}
    />
  </div>
);

export const CrossPostFeatures = () => (
  <div className="w-full relative navbar:pl-[4%] pr-[16%]">
    <Image
      src={CrossPostTags}
      alt="final touches to cross posts"
      className="w-full"
    />
    <Image
      src={CrossPostAccounts}
      alt="cross post from different platforms"
      className="absolute bottom-[25%] right-0 w-[50%] rounded-lg"
      style={{
        boxShadow:
          "379.976px 211.308px 121.289px 0px rgba(0, 0, 0, 0.00), 243.526px 134.555px 110.866px 0px rgba(0, 0, 0, 0.01), 136.45px 75.806px 93.809px 0px rgba(0, 0, 0, 0.04), 60.645px 34.113px 69.173px 0px rgba(0, 0, 0, 0.07), 15.161px 8.528px 37.903px 0px rgba(0, 0, 0, 0.08)",
      }}
    />
  </div>
);

export const JobsFeatures = () => (
  <div className="w-full relative pr-[37px]">
    <Image src={JobsPage} alt="jobs page" className="w-full" />
    <Image
      src={JObsAirbnb}
      alt="jobs airbnb"
      className="absolute -bottom-[5%] right-7 w-[9%] rounded-[30px] rotate-[41deg]"
      style={{
        boxShadow:
          "42.612px 66.843px 47.625px 0px rgba(0, 0, 0, 0.03), 19.217px 29.244px 35.092px 0px rgba(0, 0, 0, 0.05), 5.013px 7.52px 19.217px 0px rgba(0, 0, 0, 0.06)",
      }}
    />
    <Image
      src={JobsSpotify}
      alt="jobs spotify"
      className="absolute top-0 right-[20%] -translate-y-[110%] w-[10%] rounded-[30px] -rotate-[64deg]"
      style={{
        boxShadow:
          "42.612px 66.843px 47.625px 0px rgba(0, 0, 0, 0.03), 19.217px 29.244px 35.092px 0px rgba(0, 0, 0, 0.05), 5.013px 7.52px 19.217px 0px rgba(0, 0, 0, 0.06)",
      }}
    />
  </div>
);
