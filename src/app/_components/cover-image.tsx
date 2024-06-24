// import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Props = {
  title: string;
  src: string;
  slug?: string;
  classname?: string;
};

const CoverImage = ({ title, src, slug, classname }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      }, classname)}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blogs/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
