import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Index from "../components/Logo";
import BigButton from "../components/BigButton";
import Header from "../components/Header";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Logo">
        <Index/>
      </ComponentPreview>
      <ComponentPreview path="/BigButton">
        <BigButton/>
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
