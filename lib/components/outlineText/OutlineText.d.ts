import React from "react";
interface Props {
    className?: string;
    children: React.ReactNode;
    size: number;
    inlineColor: string;
    outlineColor: string;
    strokeWidth: number;
}
declare const OutlineText: (props: Props) => JSX.Element;
export default OutlineText;
