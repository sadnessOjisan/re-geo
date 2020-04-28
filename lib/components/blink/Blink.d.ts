import * as React from "react";
interface Props {
    className?: string;
    children: React.ReactNode;
    speed?: number;
}
declare const Blink: (props: Props) => JSX.Element;
export default Blink;
