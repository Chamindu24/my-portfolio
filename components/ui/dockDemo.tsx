"use client";

import React, { PropsWithChildren, useRef, useEffect, useState } from "react";
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";
import { cn } from "@/lib/utils"; // Update this based on your utility class setup

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "left" | "center" | "right";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-gray-800/90 supports-backdrop-blur:dark:bg-black/80 flex flex-col h-max w-[60px] items-center justify-center gap-3 rounded-2xl border border-gray-800 p-4 backdrop-blur-md shadow-lg fixed top-1/2 transform -translate-y-1/2",
  {
    variants: {
      mode: {
        dark: "bg-gray-900 text-white",
      },
    },
    defaultVariants: {
      mode: "dark",
    },
  }
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "center",
      ...props
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(false); // Track if the component is mounted
    const mouseY = useMotionValue(Infinity);

    useEffect(() => {
      setMounted(true); // Set mounted to true once the component is client-side
    }, []);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child as React.ReactElement<ExtendedDockIconProps>, {
            ...Object.assign({}, child.props),
            mouseY: mouseY,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    // Render only on client-side
    if (!mounted) {
      return null;
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseY.set(e.pageY)}
        onMouseLeave={() => mouseY.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseY?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

interface ExtendedDockIconProps extends DockIconProps {
  mouseY: MotionValue<number>;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseY,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseY = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseY ?? defaultMouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-full bg-black hover:bg-gray-600",
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };

// Example usage
export default function VerticalDock() {
  return (
    <Dock>
      <DockIcon>
        <FaInstagram size={24} className="text-white" />
      </DockIcon>
      <DockIcon>
        <FaFacebook size={24} className="text-white" />
      </DockIcon>
      <DockIcon>
        <FaYoutube size={24} className="text-white" />
      </DockIcon>
      <DockIcon>
        <FaLinkedin size={24} className="text-white" />
      </DockIcon>
      <DockIcon>
        <FaTiktok size={24} className="text-white" />
      </DockIcon>
    </Dock>
  );
}
