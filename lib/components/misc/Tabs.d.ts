import * as React from "react";
interface ITab {
    id: string;
    name: string;
    content: React.ReactNode;
}
interface Props {
    selectedId: string;
    className?: string;
    tabs: ITab[];
    onClickTab?: any;
}
declare const Tabs: (props: Props) => JSX.Element;
export default Tabs;
