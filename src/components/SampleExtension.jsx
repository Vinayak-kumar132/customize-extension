
import github from "../assets/github.png"
import wolf from "../assets/wolf.png"

export default function SampleExtension({ outerColor, innerColor, mascotImage }) {
  return (
    <div
      className="text-white p-4 mx-auto rounded-lg font-sans text-base"
      style={{ backgroundColor: outerColor }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Enter CA that ends in 'pump'"
          className="text-white px-4 py-3 rounded w-full max-w-md text-sm"
          style={{ backgroundColor: innerColor }}
        />
        <div className="flex items-center gap-3 ml-4">
          <button className="bg-transparent border border-gray-600 p-2 rounded" style={{ backgroundColor: innerColor }}>
            <img src={github} alt="GitHub" className="w-7 h-7" />
          </button>
          <div className="p-2 rounded" style={{ backgroundColor: innerColor }}>
            <img src={wolf} alt="Wolf Icon" className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Ticker and Market Cap */}
      <div className="flex gap-4 items-center mb-4">
        <div className="flex justify-center mb-4">
          <img
            src={mascotImage}
            alt="Selected Mascot"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: innerColor }}
          />
        </div>

        <div className="p-4 rounded text-sm" style={{ backgroundColor: innerColor }}>
          <div className="font-semibold">Ticker</div>
          <div>Loading..</div>
          <div className="mt-1 text-xs">Age: Loading...</div>
          <div className="text-xs">Holders: &gt;150</div>
        </div>

        <div className="p-4 rounded text-sm" style={{ backgroundColor: innerColor }}>
          <div className="font-semibold">Market Cap</div>
          <div>Loading....</div>
          <div className="mt-1 flex gap-2 text-xs flex-wrap">
            {['Mint', 'Freeze', 'Locked', 'DEX'].map((item) => (
              <span key={item} className="bg-green-600 px-2 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button Row */}
      <div className="flex gap-6 mb-4 w-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="p-2.5 rounded w-10 h-10"
            style={{ backgroundColor: innerColor }}
          ></div>
        ))}
      </div>

      {/* Bundle Analysis */}
      <div className="p-4 rounded mb-4 text-sm" style={{ backgroundColor: innerColor }}>
        <h2 className="font-semibold mb-2">Bundle Analysis</h2>
        <div className="h-2 bg-gray-700 rounded mb-2"></div>
        <div className="flex gap-4 text-xs">
          <span>
            Active Bundles: <strong>No Data</strong>
          </span>
          <span>
            Active Total: <strong>No Data</strong>
          </span>
        </div>
      </div>

      {/* Sniper Analysis */}
      <div className="p-2 rounded mb-4 text-sm" style={{ backgroundColor: innerColor }}>
        <h2 className="font-semibold mb-2">Sniper Analysis</h2>
        <div className="h-20 rounded mb-2" style={{ backgroundColor: innerColor }}></div>
        <div className="flex gap-4 text-xs">
          <span>
            Active Snipers: <strong>No Data</strong>
          </span>
          <span>
            Active Total: <strong>No Data</strong>
          </span>
        </div>
      </div>

      {/* Holder Analysis */}
      <div className="p-4 rounded text-sm" style={{ backgroundColor: innerColor }}>
        <h2 className="font-semibold mb-2">Holder Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded text-xs" style={{ backgroundColor: innerColor }}>
            <h3 className="font-semibold mb-1">Clusters</h3>
            <p>
              Active Total: <strong>No Data</strong>
            </p>
          </div>
          <div className="p-3 rounded text-xs" style={{ backgroundColor: innerColor }}>
            <h3 className="font-semibold mb-1">Top 10 Holders</h3>
            <p>
              Total: <strong>Error loading data</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
