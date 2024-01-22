import { useEffect, useState } from "react";

import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";

export function useActiveBreakpoint(): Breakpoints {
  const fullConfig = resolveConfig(tailwindConfig);

  const [activeBreakpoint, setActiveBreakpoint] = useState<Breakpoints>("xs");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const { sm, md, lg, xl } =
        (fullConfig.theme as unknown as Config)?.screens ?? {};

      const smallSize = Number(sm.replace("px", ""));
      const mediumSize = Number(md.replace("px", ""));
      const largeSize = Number(lg.replace("px", ""));
      const extraLargeSize = Number(xl.replace("px", ""));

      if (windowWidth < smallSize) {
        setActiveBreakpoint("xs");
      } else if (windowWidth >= smallSize && windowWidth < mediumSize) {
        setActiveBreakpoint("sm");
      } else if (windowWidth >= mediumSize && windowWidth < largeSize) {
        setActiveBreakpoint("md");
      } else if (windowWidth >= largeSize && windowWidth < extraLargeSize) {
        setActiveBreakpoint("lg");
      } else {
        setActiveBreakpoint("xl");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return activeBreakpoint;
}
