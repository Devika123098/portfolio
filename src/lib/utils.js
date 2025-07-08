import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import (twMerge)
export const cn = (...inputs)=>{
        return twMerge(clsx(inputs))
}