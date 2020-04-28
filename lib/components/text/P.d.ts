import * as React from "react";
interface Props {
    children: React.ReactNode;
    color?: string;
    fontSize?: number;
    className?: string;
}
declare const P: (props: Props) => JSX.Element;
export default P;
