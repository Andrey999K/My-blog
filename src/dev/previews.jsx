import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Logo from "../components/Logo/Logo";
import BigButton from "../components/BigButton";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Logo">
        <Logo/>
      </ComponentPreview>
      <ComponentPreview path="/BigButton">
        <BigButton/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
