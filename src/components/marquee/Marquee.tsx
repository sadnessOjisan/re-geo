import * as React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  width?: string;
  behavior?: "slide" | "alternate";
  bgcolor?: "left" | "right" | "up" | "down";
  direction?: string;
  height?: string;
  hspace?: number;
  loop?: number;
  scrollamount?: number;
  scrolldelay?: number;
  truespeed?: string;
  vspace?: number;
  children?: string | React.ReactNode;
  className?: string;
}

interface State {
  loopNum: number;
  elementHeight: number | null;
  elementWidth: number | null;
  animationSec: number | null;
  currentMode: string | null;
}

const Direction = {
  left: "left",
  right: "right",
  up: "up",
  down: "down",
};

const Remarquee: React.FC<Props> = (props) => {
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const wrapperRef = React.useRef<HTMLParagraphElement>(null);
  const [state, setState] = React.useState<State>({
    loopNum: -1,
    elementHeight: null,
    elementWidth: null,
    animationSec: null,
    currentMode: null,
  });
  const onAnimationEnd = () => {
    const { behavior } = props;
    const { loopNum, currentMode } = state;
    if (behavior === "alternate") {
      let nextMode = null;
      switch (currentMode) {
        case Direction.left:
          nextMode = Direction.right;
          break;
        case Direction.right:
          nextMode = Direction.left;
          break;
        case Direction.up:
          nextMode = Direction.down;
          break;
        case Direction.down:
          nextMode = Direction.up;
          break;
        default:
          break;
      }
      setState({
        ...state,
        loopNum: state.loopNum + 1,
        currentMode: nextMode,
      });
    }
    if (loopNum > 0) {
      setState({
        ...state,
        loopNum: state.loopNum - 1,
      });
    }
  };

  const {
    loopNum,
    animationSec,
    elementHeight,
    elementWidth,
    currentMode,
  } = state;
  const { children, hspace, vspace, className, behavior } = props;
  const isLoop =
    !(behavior === "slide" || behavior === "alternate") && loopNum === -1;

  React.useEffect(() => {
    const {
      direction,
      scrollamount,
      scrolldelay,
      truespeed,
      hspace,
      vspace,
    } = props;
    // 初期化されていなければ例外投げる
    if (!textRef.current || !wrapperRef.current || !scrolldelay)
      throw new Error();
    textRef.current.addEventListener("webkitAnimationEnd", () => {
      onAnimationEnd();
    });
    textRef.current.addEventListener("AnimationEnd", () => {
      onAnimationEnd();
    });
    textRef.current.addEventListener("animationend", () => {
      onAnimationEnd();
    });
    textRef.current.addEventListener("oAnimationEnd", () => {
      onAnimationEnd();
    });
    const wrapperWidth = wrapperRef.current.clientWidth;
    const wrapperHeight = wrapperRef.current.clientHeight;
    let animationSec: number;
    if (direction === Direction.up || direction === Direction.down) {
      if (truespeed === "true") {
        animationSec =
          (((wrapperHeight - (vspace || 0) * 2) / (scrollamount || 6)) *
            (scrolldelay || 85)) /
          1000;
      } else {
        animationSec =
          (((wrapperHeight - (vspace || 0) * 2) / (scrollamount || 6)) *
            (scrolldelay < 60 ? 60 : scrolldelay || 85)) /
          1000;
      }
    } else if (
      !direction ||
      direction === Direction.left ||
      direction === Direction.right
    ) {
      if (truespeed === "true") {
        animationSec =
          (((wrapperWidth - (hspace || 0) * 2) / (scrollamount || 6)) *
            (scrolldelay || 85)) /
          1000;
      } else {
        animationSec =
          (((wrapperWidth - (hspace || 0) * 2) / (scrollamount || 6)) *
            (scrolldelay < 60 ? 60 : scrolldelay || 85)) /
          1000;
      }
    }
    setState({
      ...state,
      elementHeight: textRef ? textRef.current.clientHeight : 0,
      elementWidth: textRef.current.clientWidth,
      // @ts-ignore
      animationSec,
      currentMode: direction || Direction.left,
    });
  }, []);

  return (
    // @ts-ignore
    <Wrapper {...props} ref={wrapperRef} className={className}>
      {/*
      // @ts-ignore */}
      <LeftBlock
        vspace={vspace}
        hspace={hspace}
        elementWidth={elementWidth}
        elementHeight={elementHeight}
      />
      {/*
      // @ts-ignore */}
      <Text
        ref={textRef}
        isLoop={isLoop}
        loopNum={loopNum}
        direction={currentMode}
        animationSec={animationSec}
        hspace={hspace || 0}
        vspace={vspace || 0}
        elementWidth={elementWidth}
        elementHeight={elementHeight}
        behavior={behavior}
      >
        {children}
      </Text>
      {/*
      // @ts-ignore */}
      <RightBlock
        vspace={vspace}
        hspace={hspace}
        elementWidth={elementWidth}
        elementHeight={elementHeight}
      />
    </Wrapper>
  );
};

type Purify<T extends string | number | symbol> = { [P in T]: P }[T];

export type MyRequired<T> = T extends object
  ? { [P in Purify<keyof T>]: NonNullable<T[P]> }
  : T;

type AnimationType = MyRequired<
  Pick<
    Props & State,
    "behavior" | "elementWidth" | "hspace" | "vspace" | "elementHeight"
  >
>;

const Left = (props: AnimationType) => keyframes`
  0% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? `calc(100% - ${props.elementWidth}px)`
      : `calc(100% - ${props.hspace}px)`
  }; transform: translate(0); }
  100% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? props.elementWidth
      : -(props.elementWidth - props.hspace)
  }px; transform: translate(-100%); }
`;

const Right = (props: AnimationType) => keyframes`
  0% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? props.elementWidth
      : `${props.hspace}`
  }px; transform: translate(-100%); }
  100% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? `calc(100% - ${props.elementWidth}`
      : `calc(100% - ${props.hspace}`
  }px); transform: translate(0);
`;

const Up = (props: AnimationType) => keyframes`
  0% { top: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? `calc(100% + ${-props.elementHeight}px - ${props.vspace || 0}px)`
      : `calc(100% - ${props.vspace}px)`
  }; transform: translate(0,0); }
  100% { top: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? `${0 + props.elementHeight}px`
      : `0px`
  }; transform: translate(0,-100%); }
`;

const Down = (props: AnimationType) => keyframes`
0% { top: ${
  props.behavior === "slide" || props.behavior === "alternate"
    ? props.elementHeight
    : 0 - props.elementHeight
}px; transform: translate(0,-100%); }
100% { top: calc(100% - ${
  props.vspace || 0 + props.elementHeight
}px); transform: translate(0,0); }
`;

type WrapperType = MyRequired<
  Pick<Props & State, "bgcolor" | "width" | "height" | "direction">
>;

const Wrapper = styled.div<WrapperType>`
  position: relative;
  background-color: ${(props) => props.bgcolor};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "16px")};
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    (props.direction === "up" || props.direction === "down") && "column"};
`;

type BlockType = MyRequired<
  Pick<Props & State, "hspace" | "vspace" | "elementHeight" | "elementWidth">
>;

const LeftBlock = styled.div<BlockType>`
  width: ${(props) =>
    props.hspace ? `${props.hspace + props.elementWidth}px` : "0px"};
  height: ${(props) =>
    props.vspace ? `${props.vspace - props.elementHeight}px` : "0px"};
  background-color: white;
  position: absolute;
  left: ${(props) => props.hspace - props.elementWidth}px;
  top: calc(${(props) => props.vspace}px);
  background-color: white;
  z-index: 3;
`;

const RightBlock = styled.div<BlockType>`
  width: ${(props) =>
    props.hspace ? `${props.hspace + props.elementWidth}px` : "0px"};
  height: ${(props) =>
    props.vspace ? `${props.vspace + props.elementHeight}px` : "0px"};
  position: absolute;
  left: calc(100% - ${(props) => props.hspace}px);
  top: calc(100% - ${(props) => props.vspace}px);
  background-color: white;
  z-index: 3;
`;

type TextType = MyRequired<
  Pick<
    Props & State & { isLoop: boolean },
    "direction" | "animationSec" | "behavior" | "loopNum" | "isLoop"
  >
>;

const Text = styled.p<TextType & AnimationType>`
  z-index: 1;
  position: absolute;
  animation: ${(props) => {
      switch (props.direction) {
        case Direction.left:
          return Left(props);
        case Direction.right:
          return Right(props);
        case Direction.up:
          return Up(props);
        case Direction.down:
          return Down(props);
        default:
          return Left(props);
      }
    }}
    ${(props) => props.animationSec}s linear;
  animation-iteration-count: ${(props) =>
    props.isLoop
      ? "infinite"
      : props.behavior === "slide" || props.behavior === "alternate"
      ? 1
      : props.loopNum};
  white-space: nowrap;
  display: inline-block;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export default Remarquee;
