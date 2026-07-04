import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function LandingPageBtn() {
    return (
        <Link href={'/view-all-product'} className="w-full sm:w-auto block">
            <Button
                variant={"ghost"}
                className="group relative w-full h-16 p-0 overflow-hidden rounded-md bg-transparent hover:bg-transparent text-[16px] 3xl:text-[18px] font-medium shadow-sm transition-all duration-300"
            >
                {/* FRONT OF BUTTON - Initial State (#FD7034) */}
                <span className="relative flex h-full w-full items-center justify-center bg-[#FD7034] text-white px-10 transition-all duration-500 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)]">
                    View All Products
                </span>

                {/* BACK OF BUTTON - Hover State (#012C60) */}
                <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#012C60] text-white px-10 opacity-0 transition-all duration-500 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)]">
                    View All Products
                </span>
            </Button>
        </Link>
    )
}
