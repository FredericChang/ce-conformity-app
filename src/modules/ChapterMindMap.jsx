import React from 'react';

const RADIUS = 160;
const CENTER = 200;
const TRUNCATE_LEN = 28;

const truncate = (text, len = TRUNCATE_LEN) => {
  if (!text || text.length <= len) return text;
  return text.slice(0, len).trim() + '…';
};

const ChapterMindMap = ({ title, points, lang }) => {
  const n = Math.max(1, points.length);
  const angleStep = 360 / n;

  return (
    <div className="chapter-mindmap my-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-purple-50/80 p-4 sm:p-6 border border-indigo-100/80 overflow-x-auto">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-600/90 mb-4">
        {lang === 'zh' ? '心智圖 · 加強重點記憶' : 'Mind Map · Quick recall'}
      </p>
      <div
        className="relative mx-auto overflow-visible min-w-[380px]"
        style={{ width: CENTER * 2, height: CENTER * 2 }}
      >
        {/* 連線圖層（SVG，最底） */}
        <svg
          className="pointer-events-none absolute inset-0"
          width={CENTER * 2}
          height={CENTER * 2}
        >
          {points.map((_, i) => {
            const angleDeg = i * angleStep - 90;
            const rad = (angleDeg * Math.PI) / 180;
            const x = CENTER + RADIUS * Math.cos(rad);
            const y = CENTER + RADIUS * Math.sin(rad);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="rgb(129 140 248)"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            );
          })}
        </svg>

        {/* 分支節點 */}
        {points.map((point, i) => {
          const angleDeg = i * angleStep - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const x = CENTER + RADIUS * Math.cos(rad);
          const y = CENTER + RADIUS * Math.sin(rad);
          const label = truncate(point);

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: x - 70,
                top: y - 24,
                width: 140,
                height: 48,
              }}
            >
              <div
                title={point}
                className="rounded-xl border-2 border-indigo-200/90 bg-white px-3 py-2 text-center text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-400 hover:bg-indigo-50/80 hover:shadow-md hover:text-indigo-800"
              >
                {label}
              </div>
            </div>
          );
        })}

        {/* 中心節點（疊在連線之上） */}
        <div
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 px-5 py-3 text-center shadow-lg ring-4 ring-white"
          style={{ minWidth: 120, maxWidth: 220 }}
        >
          <span className="text-sm font-bold leading-tight text-white">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChapterMindMap;
