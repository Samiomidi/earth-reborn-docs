declare module "@theme/Heading";
declare module "@theme/Layout" {
  import React from "react";

  interface Props {
    children: React.ReactNode;
    title?: string;
    description?: string;
  }

  export default function Layout(props: Props): JSX.Element;
}
declare module "@theme/*";
declare module "@docusaurus/*";
