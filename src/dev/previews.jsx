import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Logo from "../components/Logo/Logo";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Logo">
        <Logo/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
