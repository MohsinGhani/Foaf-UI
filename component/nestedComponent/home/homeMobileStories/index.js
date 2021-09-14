import Image from "next/image";
export default function MobileStories() {
  return (
    <div className="mobile_stories_main">
      <div>
        <Image
          src="/images/dashboard/image1.png"
          height="60"
          width="60"
          alt="story_1"
        />
      </div>
      <div>
        <Image
          src="/images/dashboard/Image 2.png"
          height="60"
          width="60"
          alt="story_1"
        />
      </div>
      <div>
        <Image
          src="/images/dashboard/Image 3.png"
          height="60"
          width="60"
          alt="story_1"
        />
      </div>
      <div>
        <Image
          src="/images/dashboard/Image 4.png"
          height="60"
          width="60"
          alt="story_1"
        />
      </div>
      <div>
        <Image
          src="/images/dashboard/Image 5.png"
          height="60"
          width="60"
          alt="story_1"
        />
      </div>
    </div>
  );
}
