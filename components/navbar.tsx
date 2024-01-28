"use client"
import {Menu, Sparkles} from "lucide-react"
import Link from "next/link"
import {cn} from "@/lib/utils"
import {Poppins} from "next/font/google"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import { MobileSidebar } from "@/components/mobile-sidebar"
const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const Navbar = () => {
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                    )}>
                        Aion
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button  variant ="premium" size="sm">
                    Upgrade
                    <Sparkles  className="h-4 w-5 fill-white text-white ml-2"/>
                </Button>
                <ModeToggle/>
                <UserButton />
            </div>
        </div>
    )
}