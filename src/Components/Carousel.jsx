import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

export const Carousel = ({ src, name, title, review, className }) => {

    

  return (
    <div className={`${className} flex flex-col gap-8`}>
      <div className="-bg--lime-green border -border--neutrals-600 flex-col flex gap-5 p-6 rounded-2xl">
        <p>{review}</p>
        <div className="flex gap-3 items-center">
          <img src={src} alt="reviewer" className="size-[60px] rounded-full" />
          <div>
            <p className="font-semibold">{name}</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <FaCircleChevronLeft className="text-h2 -text--green-700" />
        <FaCircleChevronRight className="text-h2 -text--green-700" />
      </div>
    </div>
  );
};
