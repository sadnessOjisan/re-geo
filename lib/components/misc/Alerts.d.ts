import * as React from "react";
interface Props {
    type: "alert" | "error" | "success" | "info";
    children: React.ReactNode;
    className?: string;
    onClose?: any;
}
declare const Alerts: (props: Props) => JSX.Element;
export default Alerts;
