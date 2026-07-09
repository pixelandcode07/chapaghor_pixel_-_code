import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function LandingPageBtn() {
    return (
        <Link href={'/view-all-product'} className="w-full sm:w-auto">
            <button
                // variant={"ghost"}
                className="group relative w-full overflow-hidden rounded-md bg-transparent hover:bg-transparent text-[16px] xl:text-[21px] font-bold shadow-sm transition-all duration-300"
            >
                {/* FRONT OF BUTTON - Initial State (#FD7034) */}
                <span className="relative flex h-full w-full items-center justify-center bg-[#FD7034] text-white px-[42px] py-[21px] transition-all duration-500 [transform:translateY(0)_rotateX(0)] group-hover:opacity-0 group-hover:[transform:translateY(50%)_rotateX(90deg)]">
                    View All Products
                </span>

                {/* BACK OF BUTTON - Hover State (#012C60) */}
                <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#012C60] text-white px-[42px] py-[21px] opacity-0 transition-all duration-500 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:[transform:translateY(0)_rotateX(0)]">
                    View All Products
                </span>
            </button>
        </Link>
    )
}
