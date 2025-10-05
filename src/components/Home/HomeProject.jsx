import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SoftportfolioList } from "../../data/SoftwareServices";
import { HardwareportfolioList } from "../../data/HardwareServices";
import { AIportfolioList } from "../../data/AIServices";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";
import HomeProjectCard from "./HomeProjectCard";

const getSlidesPerView = (w) => {
  // Match the original responsive config
  if (w >= 1200) return 3; // >= 1199 -> 3
  if (w >= 576) return 2; // >= 575 -> 2
  return 1; // < 575 -> 1
};
const AUTOPLAY_MS = 1500;
const SPEED_MS = 500;
const GAP_PX = 24; // Tailwind gap-6 (1.5rem ~ 24px)

const HomeProject = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(() =>
    getSlidesPerView(typeof window !== "undefined" ? window.innerWidth : 1200)
  );
  const [index, setIndex] = useState(() =>
    getSlidesPerView(typeof window !== "undefined" ? window.innerWidth : 1200)
  );
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Drag state (supports touch & mouse)
  const dragStartXRef = useRef(0);
  const dragDeltaRef = useRef(0);
  const draggingRef = useRef(false);

  // Recalculate container width and slidesPerView on resize
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setSlidesPerView(() => {
        const next = getSlidesPerView(w);
        return next;
      });
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone slides for infinite effect
  const projectData = useMemo(() => {
    const combined = [
      ...SoftportfolioList,
      ...HardwareportfolioList,
      ...AIportfolioList,
    ];
    return combined.map((item) => ({
      id:item.id,
      title: item.projectName || item.title || "",
      image: `/assets/images/portfolios/${item.image}`,
    }));
  }, []);

  const extendedSlides = useMemo(() => {
    const n = slidesPerView;
    const last = projectData.slice(-n);
    const first = projectData.slice(0, n);
    return [...last, ...projectData, ...first];
  }, [slidesPerView, projectData]);

  // Ensure we always start at the first real slide after slidesPerView changes
  useEffect(() => {
    // Jump without transition
    setTransitioning(false);
    setIndex(slidesPerView);
  }, [slidesPerView]);

  const slideWidth =
    containerWidth > 0
      ? (containerWidth - GAP_PX * (slidesPerView - 1)) / slidesPerView
      : 0;

  // Base offset in pixels for the current index
  const baseOffset = index * (slideWidth + GAP_PX);

  // Handlers for navigation
  const handleNext = useCallback(() => {
    if (draggingRef.current) return;
    setTransitioning(true);
    setIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (draggingRef.current) return;
    setTransitioning(true);
    setIndex((prev) => prev - 1);
  }, []);

  // Autoplay
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [hovered, handleNext]);

  // Transition end correction for infinite looping
  const onTransitionEnd = () => {
    const n = slidesPerView;
    const total = projectData.length;
    if (index >= total + n) {
      // Jump back to the first real slide
      setTransitioning(false);
      setIndex(n);
    } else if (index < n) {
      // Jump forward to the last real slide
      setTransitioning(false);
      setIndex(index + total);
    }
  };

  // Drag / Swipe logic (touch + mouse)
  const startDrag = (x) => {
    draggingRef.current = true;
    dragStartXRef.current = x;
    dragDeltaRef.current = 0;
    setTransitioning(false);
  };

  const moveDrag = (x) => {
    if (!draggingRef.current) return;
    dragDeltaRef.current = x - dragStartXRef.current;
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    const delta = dragDeltaRef.current;
    draggingRef.current = false;
    dragDeltaRef.current = 0;

    const threshold = Math.max(50, slideWidth * 0.15);
    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      // Snap back
      setTransitioning(true);
      setIndex((prev) => prev);
    }
  };

  // Mouse handlers
  const onMouseDown = (e) => {
    e.preventDefault();
    setHovered(true); // pause autoplay while dragging
    startDrag(e.clientX);
    const onMove = (ev) => moveDrag(ev.clientX);
    const onUp = () => {
      endDrag();
      setHovered(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setHovered(true);
      startDrag(e.touches[0].clientX);
    }
  };
  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      moveDrag(e.touches[0].clientX);
    }
  };
  const onTouchEnd = () => {
    endDrag();
    setHovered(false);
  };

  // Compose transform taking drag into account
  const dragDelta = dragDeltaRef.current;
  const translateX = -(baseOffset - (draggingRef.current ? dragDelta : 0));

  return (
    <div className="bg-white py-16">
      <Container>
        <div className="flex">
          <div className="w-full lg:w-2/3 mx-auto text-center">
            <div className="my-7">
              <SectionTitle
                SubTitle="Our Project"
                Title="Driving Success Through Innovative IT Solution Project"
              />
            </div>
          </div>
        </div>

        <div className="h-8"></div>

        <div className="project-slider mt-8 relative">
          {/* Slider container */}
          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: transitioning
                  ? `transform ${SPEED_MS}ms ease`
                  : "none",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {extendedSlides.map((item, i) => (
                <div
                  key={`proj_slide_${i}`}
                  style={{ flex: "0 0 auto", width: `${slideWidth}px` }}
                >
                  <HomeProjectCard
                    id={item.id}
                    title={item.title}
                    img={item.image}
                    btnName="Read More"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeProject;
