import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="EARTH REBORN"
      description="EARTH REBORN Developer Documentation"
    >
      <main style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1>EARTH REBORN</h1>
        <p>Persistent MMO Economy Civilization</p>
        <p>
          Developer documentation platform for deployment, infrastructure, APIs,
          and applications.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/introduction/welcome"
        >
          Open Documentation
        </Link>
      </main>
    </Layout>
  );
}
