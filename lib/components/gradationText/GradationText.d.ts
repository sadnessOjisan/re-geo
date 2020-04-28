import * as React from "react";
interface Props {
    className?: string;
    children: React.ReactNode;
    colorArray: string[];
    isAnimate?: boolean;
    fontSize?: number;
}
declare const GradationText: (props: Props) => JSX.Element;
export default GradationText;
