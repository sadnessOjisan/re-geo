import * as React from "react";
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
declare class Remarquee extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    onAnimationEnd(): void;
    render(): JSX.Element;
}
export default Remarquee;
