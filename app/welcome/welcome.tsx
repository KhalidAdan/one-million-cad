import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-mono text-black">
        $1 MILLION{" "}
        <Link
          to="https://xe.com/currencyconverter/convert/?Amount=1000000&From=CAD&To=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline transition-all"
        >
          CAD
        </Link>
      </h1>

      <Link
        to="https://www.namecheap.com/market/buynow/?query=broadcast.now"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-sm font-mono text-gray-600 hover:text-black transition-colors underline hover:no-underline"
      >
        Buy now
      </Link>
    </div>
  );
}
