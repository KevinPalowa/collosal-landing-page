import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import React, {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";

interface CarouselProps extends PropsWithChildren<ComponentProps<"div">> {}
export const Carousel: FC<CarouselProps> = ({ children, ...props }) => {
  const [activeItem, setActiveItem] = useState(0);
  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child)
      ),
    [children]
  );
  /* console.log(activeItem, items.length); */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveItem((prev) => prev + 1);
      setActiveItem(activeItem === items.length - 1 ? 0 : activeItem + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeItem, items.length]);
  return (
    <div>
      <div className="sm:flex sm:space-x-8">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveItem(index)}
            className={`cursor-pointer transition ${
              index === activeItem && "sm:-translate-y-8"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-[75px] hidden justify-center space-x-2 sm:flex">
        {items?.map((_, index) => (
          <button
            key={index}
            className={`h-[10px] w-[10px] rounded-full hover:bg-white ${
              index === activeItem ? "bg-white" : "bg-white/20"
            }`}
            onClick={() => setActiveItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

const DefaultLeftControl: FC = () => {
  return (
    <span>
      <HiOutlineChevronLeft />
    </span>
  );
};

const DefaultRightControl: FC = () => {
  return (
    <span>
      <HiOutlineChevronRight />
    </span>
  );
};
