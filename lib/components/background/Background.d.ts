import * as React from "react";
interface Props {
    children?: React.ReactNode;
    className?: string;
    pattern: "stars" | "microfab" | "rainbow";
}
declare const BackGround: (props: Props) => JSX.Element;
export default BackGround;
