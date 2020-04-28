import * as React from "react";
interface Props {
    type?: "success" | "warning" | "important" | "info" | "inverse";
    children: React.ReactNode;
    className?: string;
}
declare const Badge: (props: Props) => JSX.Element;
export default Badge;
