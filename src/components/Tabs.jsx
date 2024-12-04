import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 52px;
`;

const Tabs = ({ tab, handelClick }) => {
  return (
    <div key={tab.name} onClick={handelClick}>
      <Icon src={tab.icon} />
    </div>
  );
};

export default Tabs;
