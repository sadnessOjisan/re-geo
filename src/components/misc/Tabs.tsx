import * as React from "react";
import styled from "styled-components";

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

const Tabs = (props: Props) => {
  const { tabs, className, selectedId, onClickTab } = props;
  return (
    <React.Fragment>
      <TabUl className={className}>
        {tabs.map((tab) => (
          <TabLi>
            <Link
              isActive={selectedId === tab.id}
              onClick={(_: React.SyntheticEvent) => onClickTab(tab.id)}
            >
              {tab.name}
            </Link>
          </TabLi>
        ))}
      </TabUl>
      <Tabbable>
        <TabContent>
          <TabPane>
            {tabs.filter((tab) => tab.id === selectedId)[0].content}
          </TabPane>
        </TabContent>
      </Tabbable>
    </React.Fragment>
  );
};

const TabUl = styled.ul`
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  margin-left: 0;
  list-style: none;
  padding: 0;
  margin: 0 0 10px 25px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  -webkit-font-smoothing: none;
  font-size: 16px;
  line-height: 20px;
  color: #ff0;
  display: table;
  line-height: 0;
  content: "";
  clear: both;
  line-height: 0;
`;

const TabLi = styled.li`
  line-height: 20px;
  border-radius: 4px 4px 0 0;
  margin-bottom: -1px;
  float: left;
  line-height: 20px;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const Link = styled.a<{ isActive: boolean }>`
  text-decoration: underline !important;
  display: block;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: 2px;
  border-radius: 4px 4px 0 0;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 20px;
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#555" : "#0ee"} !important;
  cursor: default;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#00f" : ""};
  border: ${(props: { isActive: boolean }) =>
    props.isActive ? "1px solid #ddd" : ""} !important;
  border-bottom-color: transparent;
`;

const Tabbable = styled.div`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: #ff0;
`;

const TabContent = styled.div`
  overflow: auto;
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: #ff0;
`;

const TabPane = styled.div`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: #ff0;
`;

export default Tabs;
