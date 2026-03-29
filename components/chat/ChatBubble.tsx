import type { ChatMessage } from "@/lib/types";

export function ChatBubble({ message, isRight }: { message: ChatMessage; isRight?: boolean }) {
  return (
    <div className={`flex gap-3 ${isRight ? "flex-row-reverse" : ""}`}>
      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
        <span className="font-body font-semibold text-[11px] text-teal-800">
          {message.sender.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
      <div className={`rounded-lg px-4 py-2.5 max-w-[80%] ${isRight ? "bg-teal-800 text-white" : "bg-gray-50 text-gray-700"}`}>
        <p className="font-body text-body-sm">{message.content}</p>
        <span className={`font-mono text-data-sm mt-1 block ${isRight ? "text-teal-300" : "text-gray-400"}`}>{message.timestamp}</span>
      </div>
    </div>
  );
}
