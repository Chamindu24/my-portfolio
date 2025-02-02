"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs?: string[]; // Made iconSlugs optional
  imageArray?: string[];
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
  // Set icon color to white for dark mode (only dark mode is used)
  

  // Render the icon with the fixed color applied
  return renderSimpleIcon({
    icon,
    bgHex: "#080510", // Dark background for dark mode
    fallbackHex: "#ffffff", // Fallback color
    minContrastRatio: 2, // Ensuring sufficient contrast
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
    // No need to apply theme-related logic since it's always dark mode
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({
  iconSlugs = [], // Default to an empty array if not provided
  imageArray,
}: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    if (iconSlugs.length > 0) {
      // Check if iconSlugs is not empty
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon), // No need for theme; we're always using white color
    );
  }, [data]);

  return (
    //ts-expect-error
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => {
            return (
              <a key={index} href="#" onClick={(e) => e.preventDefault()}>
                <img height="64" width="64" alt="A globe" src={image} />
              </a>
            );
          })}
      </>
    </Cloud>
  );
}
