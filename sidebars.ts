import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "category",
      label: "Introduction",
      items: ["introduction/welcome", "introduction/vision"],
    },
    {
      type: "category",
      label: "Economy",
      items: ["economy/overview", "economy/currency"],
    },
    {
      type: "category",
      label: "Ownership",
      items: ["ownership/nft"],
    },
    {
      type: "category",
      label: "Gameplay",
      items: ["gameplay/core"],
    },
    {
      type: "category",
      label: "World",
      items: ["nations/world"],
    },
    {
      type: "category",
      label: "Architecture",
      items: ["architecture/system"],
    },
    {
      type: "category",
      label: "Roadmap",
      items: ["roadmap/roadmap"],
    },
  ],
};

export default sidebars;
