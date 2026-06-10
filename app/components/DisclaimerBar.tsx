import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="w-full py-4 px-4 border-t border-b border-blue-900/30"
      style={{ background: "rgba(15,23,42,0.9)" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-center text-xs text-slate-400 font-bold uppercase tracking-wider">
        <span className="text-yellow-500 text-lg">⚠</span>
        <span>
          <strong className="text-slate-200">For adults 18+ only.</strong>{" "}
          Gambling can be addictive — please play responsibly.{" "}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            BeGambleAware.org
          </a>{" "}
          |{" "}
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            GamStop
          </a>{" "}
          | National Helpline:{" "}
          <a href="tel:08088020133" className="text-yellow-500 font-black hover:underline">
            0808 8020 133
          </a>{" "}
          | Regulated by the{" "}
          <strong className="text-slate-200">UK Gambling Commission</strong>
        </span>
      </div>
    </div>
  );
}
