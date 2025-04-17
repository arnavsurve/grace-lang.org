import gracePic from "./assets/grace_cobol.jpeg";

function App() {
  return (
    <main className="min-h-screen font-sans leading-relaxed">
      <header className="flex justify-center gap-6 py-4 text-sm text-neutral-400 border-b border-neutral-800">
        <a href="/docs" className="hover:text-neutral-300">
          [ docs ]
        </a>
        <a href="/docs/language" className="hover:text-neutral-300">
          [ grace ]
        </a>
        <a href="/docs/gracecl" className="hover:text-neutral-300">
          [ graceCL ]
        </a>
        <a href="/docs/hopper" className="hover:text-neutral-300">
          [ hopper ]
        </a>
        <a
          href="https://github.com/arnavsurve/grace"
          className="hover:text-neutral-300"
        >
          [ source ]
        </a>
      </header>

      <div className="max-w-3xl mx-auto">
        <section className="px-6 py-8 pb-0">
          <h1 className="text-4xl font-bold">Grace</h1>
          <p className="mt-2 text-neutral-400">
            Look back with curiosity, build forward with Grace.
          </p>
        </section>

        <Divider />

        <img
          src={gracePic}
          alt="Grace Hopper teaching a COBOL class, standing beside a blackboard filled with handwritten COBOL code and machine instructions, while three men in military uniforms look on."
          className="my-8 mx-auto max-w-md"
        />

        <section className="px-6 space-y-2">
          <p>Grace is a full-stack development toolchain for legacy compute.</p>
          <p>
            From software to job orchestration to runtime sync, Grace is built
            to modernize from within the mainframe - without breaking what
            already works.
          </p>
        </section>

        <Divider />

        <Section
          title="Grace"
          subtitle="The programming language"
          body="A typed, width-aware, human-first programming language that compiles to COBOL."
        />

        <Section
          title="GraceCL"
          subtitle="The job control layer"
          body="A declarative configuration language for describing batch workflows."
        />

        <Section
          title="Hopper"
          subtitle="The daemon"
          body="Hopper watches Grace job output and delivers it from the mainframe to the modern stack."
        />
      </div>

      <footer className="text-center text-sm text-neutral-600 mt-16 mb-8">
        &copy; 2025 Grace - a love letter to legacy
      </footer>
    </main>
  );
}

function Divider() {
  return (
    <hr className="mx-6 my-8 border-t border-neutral-700/50 dark:border-neutral-200/10" />
  );
}

function Section({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <section className="px-6 pb-10 pt-0">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h3 className="text-lg text-zinc-400">{subtitle}</h3>
      <p className="mt-2 text-zinc-200">{body}</p>
    </section>
  );
}

export default App;
