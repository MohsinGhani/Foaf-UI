import Image from "next-images";

export default function ProfileIcon(props) {
  const { image } = props;
  return (
    <div>
      {image.map((image, key) => (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          key={key}
        />
      ))}
    </div>
  );
}
