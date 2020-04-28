import React from "react";
interface Props {
    children: React.ReactNode;
    className?: string;
    scale?: number;
    speed?: number;
}
declare const Zoom: (props: Props) => JSX.Element;
export default Zoom;
