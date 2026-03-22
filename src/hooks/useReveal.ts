import { useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "right";

interface UseRevealOptions {
  threshold?: number;
  delay?: number;
}

const useReveal = (variant: RevealVariant = "up", options: UseRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classMap = {
      up: "reveal",
      left: "reveal-left",
      right: "reveal-right",
    };

    el.classList.add(classMap[variant]);

    if (options.delay) {
      el.style.transitionDelay = `${options.delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, options.delay, options.threshold]);

  return ref;
};

export default useReveal;
