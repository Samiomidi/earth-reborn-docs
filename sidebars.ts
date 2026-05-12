
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Platform',
      items: ['platform/monorepo-structure'],
    },
    {
      type: 'category',
      label: 'Applications',
      items: ['apps/docs-app'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['configuration/branding'],
    },
  ],
};

export default sidebars;
