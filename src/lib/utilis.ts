// src/lib/utils.ts

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine Tailwind classes conditionally.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import type { ClassValue } from "clsx";
