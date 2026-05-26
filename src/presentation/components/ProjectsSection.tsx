"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

const tactilesImages = [
  "/images/tactile/1.jpg",
  "/images/tactile/2.jpg",
  "/images/tactile/3.jpg",
  "/images/tactile/4.jpg",
  "/images/tactile/5.jpg",
  "/images/tactile/6.jpg",
  "/images/tactile/7.jpg"
];

function TactileCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const total = tactilesImages.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragDelta.current = 0;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragDelta.current = e.clientX - startX.current;
  };
  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDelta.current < -50) {
      goTo(current + 1);
      resetTimer();
    } else if (dragDelta.current > 50) {
      goTo(current - 1);
      resetTimer();
    }
    dragDelta.current = 0;
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    dragDelta.current = 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    dragDelta.current = e.touches[0].clientX - startX.current;
  };
  const handleTouchEnd = () => {
    if (dragDelta.current < -50) {
      goTo(current + 1);
      resetTimer();
    } else if (dragDelta.current > 50) {
      goTo(current - 1);
      resetTimer();
    }
    dragDelta.current = 0;
  };

  return (
    <div
      className="relative select-none mx-auto max-w-md overflow-hidden aspect-[9/16] ring-1 ring-outline-variant/20 shadow-2xl cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${(current * 100) / total}%)`
        }}
      >
        {tactilesImages.map((src, i) => (
          <div
            key={i}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / total}%` }}
          >
            <img
              src={src}
              alt={`The Tactile Barista screenshot ${i + 1}`}
              className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 pointer-events-none" />

      {/* Badge */}
      <div className="absolute bottom-16 left-6 pointer-events-none">
        <span className="bg-outline-variant text-on-surface px-4 py-1 font-label text-[10px] uppercase tracking-widest transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
          React Native & APIs
        </span>
      </div>

      {/* Dots — centered inside at the very bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-auto">
        {tactilesImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-primary-container"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="px-6 py-32 md:px-24" id="work">
      <div className="mb-20 flex items-end justify-between">
        <div>
          <h4 className="mb-4 font-label text-xs uppercase tracking-[0.3em] text-primary-container">
            Portfolio
          </h4>
          <h2 className="font-headline text-6xl font-black tracking-tighter">
            Featured Works
          </h2>
        </div>
        <div className="hidden font-label text-[10px] uppercase tracking-widest text-outline md:block">
          / 02 SELECTED CASES
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* TindaTrack */}
        <article className="lg:col-span-7 group cursor-pointer">
          <div className="relative mb-8 overflow-hidden bg-surface-container-low ring-1 ring-outline-variant/20 shadow-2xl aspect-[9/16] max-w-sm mx-auto">
            <video
              className="h-[120%] w-full object-cover opacity-70 transition-opacity duration-700 group-hover:opacity-100 -translate-y-[8%]"
              src="/videos/tindatrack-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <span className="px-4 py-1 font-label text-[10px] uppercase tracking-widest bg-outline-variant text-on-surface transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container font-bold">
                Android & Firebase
              </span>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-headline text-3xl font-bold transition-colors group-hover:text-primary-container inline-flex items-center gap-2">
              TindaTrack
              <MaterialIcon
                name="arrow_outward"
                className="text-2xl text-outline-variant transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-container"
              />
            </h3>
            <p className="max-w-md font-body text-on-surface-variant">
              Smart inventory and daily operations, purpose-built for local
              retail and sari-sari store owners.
            </p>
          </div>
        </article>

        {/* The Tactile Barista */}
        <article className="lg:col-span-5 lg:mt-24 group cursor-pointer">
          <div className="mb-8">
            <TactileCarousel />
          </div>
          <div>
            <h3 className="mb-2 font-headline text-3xl font-bold transition-colors group-hover:text-primary-container inline-flex items-center gap-2">
              The Tactile Barista
              <MaterialIcon
                name="arrow_outward"
                className="text-2xl text-outline-variant transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-container"
              />
            </h3>
            <p className="max-w-md font-body text-on-surface-variant">
              A modern ordering and queue management system designed to keep
              coffee shop operations smooth, fast, and efficient.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
