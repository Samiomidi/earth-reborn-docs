import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="EARTH REBORN" description="Persistent MMO Civilization">
      <main className="min-h-screen flex items-center justify-center px-6">
        <section className="max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
            EARTH REBORN Documentation
          </div>

          <h1 className="mt-8 text-6xl font-black tracking-tight">
            Persistent MMO Civilization Infrastructure
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-70">
            Enterprise-grade documentation platform for infrastructure, economy,
            gameplay systems, APIs, and applications.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              className="button button--primary button--lg"
              to="/docs/introduction/welcome"
            >
              Open Docs
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/docs/architecture/system"
            >
              Architecture
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
