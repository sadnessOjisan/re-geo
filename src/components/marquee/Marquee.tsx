import * as React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  width?: string;
  behavior?: "slide" | "alternate";
  bgcolor?: string;
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
  down: "down"
};

class Remarquee extends React.Component<Props, State> {
  // private text = React.createRef<HTMLParagraphElement>();
  // private wrapper = React.createRef<HTMLParagraphElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      loopNum: -1,
      elementHeight: null,
      elementWidth: null,
      animationSec: null,
      currentMode: null
    };
    this.text = React.createRef<HTMLParagraphElement>();
    this.wrapper = React.createRef<HTMLParagraphElement>();
  }

  componentDidMount() {
    const {
      direction,
      scrollamount,
      scrolldelay,
      truespeed,
      hspace,
      vspace,
      behavior
    } = this.props;
    this.text.current.addEventListener("webkitAnimationEnd", () => {
      this.onAnimationEnd();
    });
    this.text.current.addEventListener("AnimationEnd", () => {
      this.onAnimationEnd();
    });
    this.text.current.addEventListener("animationend", () => {
      this.onAnimationEnd();
    });
    this.text.current.addEventListener("oAnimationEnd", () => {
      this.onAnimationEnd();
    });
    const wrapperWidth = this.wrapper.current.clientWidth;
    const wrapperHeight = this.wrapper.current.clientHeight;
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
    this.setState({
      elementHeight: this.text.current.clientHeight,
      elementWidth: this.text.current.clientWidth,
      animationSec: animationSec,
      currentMode: direction || Direction.left
    });
  }

  onAnimationEnd() {
    const { behavior } = this.props;
    const { loopNum, currentMode } = this.state;
    if (behavior === "alternate") {
      let nextMode;
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
      this.setState({
        loopNum: this.state.loopNum + 1,
        currentMode: nextMode
      });
    }
    if (loopNum > 0) {
      this.setState({
        loopNum: this.state.loopNum - 1
      });
    }
  }

  render() {
    const {
      loopNum,
      animationSec,
      elementHeight,
      elementWidth,
      currentMode
    } = this.state;
    const { children, hspace, vspace, className, behavior } = this.props;
    const isLoop =
      !(behavior === "slide" || behavior === "alternate") && loopNum === -1;
    return (
      <Wrapper {...this.props} ref={this.wrapper} className={className}>
        <LeftBlock
          vspace={vspace}
          hspace={hspace}
          elementWidth={elementWidth}
          elementHeight={elementHeight}
        />
        <Text
          ref={this.text}
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
        <RightBlock
          vspace={vspace}
          hspace={hspace}
          elementWidth={elementWidth}
          elementHeight={elementHeight}
        />
      </Wrapper>
    );
  }
}

const Left = props => keyframes`
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

const Right = props => keyframes`
  0% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? props.elementWidth
      : `${props.hspace}`
  }px; transform: translate(-100%); }
  100% { left: ${
    props.behavior === "slide" || props.behavior === "alternate"
      ? `calc(100% - ${props.elementWidth}`
      : `calc(100% - ${props.hspace}`
  }px); transform: translate(0); }
`;

const Up = props => keyframes`
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

const Down = props => keyframes`
0% { top: ${
  props.behavior === "slide" || props.behavior === "alternate"
    ? props.elementHeight
    : 0 - props.elementHeight
}px; transform: translate(0,-100%); }
100% { top: calc(100% - ${props.vspace ||
  0 + props.elementHeight}px); transform: translate(0,0); }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.bgcolor};
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "16px")};
  overflow: hidden;
  display: flex;
  flex-direction: ${props =>
    (props.direction === "up" || props.direction === "down") && "column"};
`;

const LeftBlock = styled.div`
  width: ${props =>
    props.hspace ? `${props.hspace + props.elementWidth}px` : "0px"};
  height: ${props =>
    props.vspace ? `${props.vspace - props.elementHeight}px` : "0px"};
  background-color: white;
  position: absolute;
  left: ${props => props.hspace - props.elementWidth}px;
  top: calc(${props => props.vspace}px);
  background-color: white;
  z-index: 3;
`;

const RightBlock = styled.div`
  width: ${props =>
    props.hspace ? `${props.hspace + props.elementWidth}px` : "0px"};
  height: ${props =>
    props.vspace ? `${props.vspace + props.elementHeight}px` : "0px"};
  position: absolute;
  left: calc(100% - ${props => props.hspace}px);
  top: calc(100% - ${props => props.vspace}px);
  background-color: white;
  z-index: 3;
`;

const Text = styled.p`
  z-index: 1;
  position: absolute;
  animation: ${props => {
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
    ${props => props.animationSec}s linear;
  animation-iteration-count: ${props =>
    props.isLoop
      ? "infinite"
      : props.behavior === "slide" || props.behavior === "alternate"
      ? 1
      : props.loopNum};
  white-space: nowrap;
  display: inline-block;
`;

export default Remarquee;
