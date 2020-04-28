import * as React from "react";
interface Props {
    children: React.ReactNode;
    className?: string;
    type?: "default" | "primary" | "info" | "success" | "warning" | "danger" | "inverse";
    size?: "normal" | "large" | "small";
    isDisable?: boolean;
}
declare const Button: (props: Props) => JSX.Element;
export default Button;
