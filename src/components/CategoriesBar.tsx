import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";

import { categories } from "../data/data";

const StyledCategoriesBar = styled.div`
  position: relative;
`;

const Bar = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 100%;

  overflow-x: hidden;
`;

type ItemProps = {
  $active: boolean;
};

const Item = styled.button<ItemProps>`
  flex: 0 0 auto;
  color: inherit;
  background-color: ${(props) =>
    props.$active ? "var(--color-gray-400)" : "var(--color-gray-200)"};
  border-radius: var(--radius-md);
  border: none;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 0;

  padding: 1.6rem 1.2rem;

  &:hover {
    background-color: var(--color-gray-400);
  }
`;

const Left = styled.div`
  position: absolute;

  background: linear-gradient(
    to right,
    var(--color-gray-50) 60%,
    transparent 100%
  );

  height: 100%;
  width: 6.4rem;

  left: 0;
  top: 50%;

  transform: translateY(-50%);
`;

const Right = styled.div`
  position: absolute;

  background: linear-gradient(
    to left,
    var(--color-gray-50) 60%,
    transparent 100%
  );

  height: 100%;
  width: 6.4rem;

  right: 0;
  top: 50%;

  transform: translateY(-50%);

  text-align: right;
`;

const Button = styled.button`
  height: 100%;
  border-radius: 100%;
  border: none;

  background-color: transparent;

  line-height: 0;

  &:hover {
    background-color: var(--color-gray-400);
  }

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default function CategoriesBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  useEffect(function () {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      if (!ref.current) return;

      setIsLeftVisible(ref.current.scrollLeft > 0);
      setIsRightVisible(
        ref.current.offsetWidth +
          ref.current.scrollLeft -
          ref.current.scrollWidth <
          -2
      );
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function handleScroll(direction: -1 | 1) {
    if (!ref.current) return;

    ref.current.scrollLeft += direction * 200;

    setIsLeftVisible(ref.current.scrollLeft > 0);
    setIsRightVisible(
      ref.current.offsetWidth +
        ref.current.scrollLeft -
        ref.current.scrollWidth <
        -2
    );
  }

  return (
    <StyledCategoriesBar>
      <Bar ref={ref}>
        {categories.map((category) => (
          <Item
            key={category}
            $active={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Item>
        ))}
      </Bar>

      {isLeftVisible && (
        <Left>
          <Button
            onClick={() => {
              handleScroll(-1);
            }}
          >
            <MdChevronLeft />
          </Button>
        </Left>
      )}

      {isRightVisible && (
        <Right>
          <Button
            onClick={() => {
              handleScroll(1);
            }}
          >
            <MdChevronRight />
          </Button>
        </Right>
      )}
    </StyledCategoriesBar>
  );
}
