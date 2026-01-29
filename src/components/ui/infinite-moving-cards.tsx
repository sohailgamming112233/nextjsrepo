"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../Utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    if (!containerRef.current || !scrollerRef.current) return;

    const items = Array.from(scrollerRef.current.children);
    items.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
    );

    setStarted(true);
  }, [started, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[350px] shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5 )] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              <span className="text-sm leading-[1.6] text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>

              <div className="mt-6">
                <div className="text-sm text-neutral-500 dark:text-gray-400">
                  {item.name}
                </div>
                <div className="text-sm text-neutral-500 dark:text-gray-400">
                  {item.title}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
