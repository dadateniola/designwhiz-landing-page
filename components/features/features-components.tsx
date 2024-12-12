import Image from "next/image";

// Images
// ------ Feed ------
import FeedWho from "@/public/images/features/feed-who.png";
import FeedPage from "@/public/images/features/feed-page.png";
import FeedPost from "@/public/images/features/feed-post.png";
// ------ Frames ------
import FramesTags from "@/public/images/features/frames-tags.png";
import FramesImport from "@/public/images/features/frames-import.png";

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
