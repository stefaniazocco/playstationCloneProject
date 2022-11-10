import React from "react";
import CardIconSupport from "./CardIconSupport";
import "./iconSectionSupport.scss";
import { useState, useEffect } from "react";
import { IconSectionItem } from "./IconSectionItem";

const IconSectionSupport = () => {
  const [iconItem, setIconItem] = useState([]);

  useEffect(() => {
    setIconItem(IconSectionItem);
  }, []);
  return (
    <div className="wrapperIconSection">
      <h4>Sfoglia la guida per categoria</h4>
      <div className="wrapperCards">
        {iconItem.map((item, id) => {
          return (
            <CardIconSupport key={id} icon={item.icon} title={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export default IconSectionSupport;
