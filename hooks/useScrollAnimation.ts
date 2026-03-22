import { useInView } from "react-intersection-observer";

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.15, triggerOnce = true } = options;
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return { ref, inView };
};