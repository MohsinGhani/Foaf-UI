import Image from "next/image";
import CreateStory from "../createStory";
import { useRouter } from "next/router";
import Story from "../homeStories";
export default function Stories() {
  const router = useRouter();
  return (
    <div className="stories_main">
      <CreateStory />

      <Story
        url="/images/dashboard/samesize.svg"
        name="Erin Press"
        bgurl="/images/dashboard/story1.png"
      />

      <Story
        url="/images/dashboard/requestProfile1.svg"
        name="Charlie Carder"
        bgurl="/images/dashboard/story2.png"
      />

      <Story
        url="/images/dashboard/samesize.svg"
        name="Alfredo Schleifer"
        bgurl="/images/dashboard/story3.png"
      />

      <Story
        url="/images/dashboard/requestProfile3.svg"
        name="Tatiana Dorwart"
        bgurl="/images/dashboard/story4.png"
      />

      <Story
        url="/images/dashboard/requestProfile1.svg"
        name="Lincoln Carder"
        bgurl="/images/dashboard/story4.png"
      />
      <div className="arrow">
        <div
          className="arrow_arrow"
          onClick={() => {
            router.push("/stories");
          }}
        >
          <Image
            src="/images/dashboard/arrow.svg"
            alt="arrow"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}
