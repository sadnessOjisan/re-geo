import * as React from "react";
import styled from "styled-components";

interface Props {
  type?: "disabled";
  children: React.ReactNode;
  className?: string;
}

const Pager = (props: Props) => {
  const { type, children, className } = props;
  return (
    <Wrapper className={className}>
      <Link type={type}>{children}</Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: inline;
  line-height: 20px;
  margin: 20px 0;
  text-align: center;
  list-style: none;
`;

const Link = styled.a`
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  text-decoration: underline;
  color: ${(props: Props) =>
    props.type === "disabled" ? "#999" : "#0ee"} !important;
  font-size: 16px;
  cursor: default;
  background-color: #fff;
`;

export default Pager;
