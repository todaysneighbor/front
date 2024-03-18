import { ButtonHTMLAttributes } from "react";

export const buttonSizes = {
  sm: "sm",
  lg: "lg",
} as const;
export type ButtonSize = (typeof buttonSizes)[keyof typeof buttonSizes];

export const buttonColors = {
  gray: "gray",
  yellow: "yellow",
  red: "red"
} as const;
export type ButtonColor = (typeof buttonColors)[keyof typeof buttonColors];

export type ButtonProps = {
  children: string
  left?: string
  right?: number
  size: ButtonSize
  color: ButtonColor
} & ButtonHTMLAttributes<HTMLButtonElement>;
