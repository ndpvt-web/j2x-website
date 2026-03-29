export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
        <span className="font-body font-semibold text-[11px] text-teal-800">SC</span>
      </div>
      <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-dot-pulse-1" />
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-dot-pulse-2" />
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-dot-pulse-3" />
      </div>
    </div>
  );
}
