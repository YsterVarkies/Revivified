import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Shared timing, matching the tokens in global.css.
export const EASE_OUT = 'expo.out';
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

/** Rise the given parts of a section in reading order, once, as the section enters. */
export function riseIn(targets: gsap.TweenTarget, trigger: Element, opts: { y?: number; stagger?: number; start?: string } = {}) {
  return gsap.from(targets, {
    y: opts.y ?? 28,
    opacity: 0,
    duration: 0.9,
    ease: EASE_OUT,
    stagger: opts.stagger ?? 0.08,
    scrollTrigger: { trigger, start: opts.start ?? 'top 85%', once: true },
  });
}

export { gsap, ScrollTrigger, useGSAP };
