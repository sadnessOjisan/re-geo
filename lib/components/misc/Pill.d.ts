import * as React from "react";
interface Props {
    isActive?: boolean;
    isDisable?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Pill: (props: Props) => JSX.Element;
export default Pill;
