import { useEffect, useState, RefObject } from "react";

/**
 * Returns the id of the section whose top is closest to the top of the scroll container,
 * but not above it. If all are above, highlight the last. If all are below, highlight the first.
 * Accepts a ref to the scroll container (e.g., main content div).
 */
export function useScrollSpy(ids: string[], containerRef?: RefObject<HTMLDivElement | null>) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const container = containerRef?.current || window;
    // const getScrollTop = () => {
    //   if (container instanceof Window) return window.scrollY;
    //   return (container as HTMLDivElement).scrollTop;
    // } // Commented out because it's unused
    const getBoundingClientRect = (el: HTMLElement) => {
      if (container instanceof Window) return el.getBoundingClientRect();
      const containerRect = (container as HTMLDivElement).getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return {
        top: elRect.top - containerRect.top,
        bottom: elRect.bottom - containerRect.top,
      };
    };
    const handleScroll = () => {
      let currentId = ids[0];
      let lastSectionTop = -Infinity;
      const debugRects: any[] = [];
      ids.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = getBoundingClientRect(el);
          debugRects.push({ id, top: rect.top });
          const sectionMid = rect.top + (el.offsetHeight / 2);
          if (id === 'projects' && idx > 0) {
            const prevEl = document.getElementById(ids[idx - 1]);
            if (prevEl) {
              const prevRect = getBoundingClientRect(prevEl);
              if (prevRect.bottom < window.innerHeight * 0.10) {
                lastSectionTop = sectionMid;
                currentId = id;
              }
            }
          } else if (id === 'experience' && idx > 0) {
            const prevEl = document.getElementById(ids[idx - 1]);
            if (prevEl) {
              const prevRect = getBoundingClientRect(prevEl);
              if (prevRect.bottom < window.innerHeight * 0.45) {
                lastSectionTop = sectionMid;
                currentId = id;
              }
            }
          } else if (idx === ids.length - 1) {
            if (sectionMid <= window.innerHeight / 2 && sectionMid > lastSectionTop) {
              lastSectionTop = sectionMid;
              currentId = id;
            }
          } else {
            // For all but the last section, keep it active until 20% into the next section
            const nextEl = document.getElementById(ids[idx + 1]);
            if (nextEl) {
              const nextRect = getBoundingClientRect(nextEl);
              if (nextRect.top > window.innerHeight * 0.2 && sectionMid <= window.innerHeight / 2 && sectionMid > lastSectionTop) {
                lastSectionTop = sectionMid;
                currentId = id;
              }
            } else if (sectionMid <= window.innerHeight / 2 && sectionMid > lastSectionTop) {
              lastSectionTop = sectionMid;
              currentId = id;
            }
          }
        }
      });
      // If at the bottom of the page, always select the last section
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;
        const lastSection = document.getElementById(ids[ids.length - 1]);
        if (lastSection) {
          const lastRect = lastSection.getBoundingClientRect();
          // If the last section is at least halfway into the viewport, set it as active
          if (lastRect.top < window.innerHeight / 2) {
            currentId = ids[ids.length - 1];
          } else if (scrollY + windowHeight >= bodyHeight - 2) {
            currentId = ids[ids.length - 1];
          }
        }
        // eslint-disable-next-line no-console
        console.log('ScrollSpy:', debugRects, 'Active:', currentId);
      }
      setActiveId(currentId);
    };
    if (container instanceof Window) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else if (container) {
      (container as HTMLDivElement).addEventListener('scroll', handleScroll, { passive: true });
    }
    handleScroll();
    return () => {
      if (container instanceof Window) {
        window.removeEventListener('scroll', handleScroll);
      } else if (container) {
        (container as HTMLDivElement).removeEventListener('scroll', handleScroll);
      }
    };
  }, [ids, containerRef]);

  return activeId;
} 