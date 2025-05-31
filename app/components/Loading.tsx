"use client"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Image from "next/image"

const Loading = () => {
  const pathname = usePathname()

  const getMessage = () => {
    if (pathname.includes("domi-chat")) return "Loading DomiChat..."
    if (pathname.includes("elementix")) return "Loading Elementix..."
    if (pathname.includes("givn")) return "Loading Givn..."
    if (pathname.includes("one-earner-referrals"))
      return "Loading OneEarner Referrals..."
    return "Loading..."
  }

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md bg-gradient-to-br from-background/90 via-background/80 to-blue-900/60"
      >
        {/* Logo con glow pulsante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20 animate-pulse scale-110" />
          <Image
            src="/jb-logo.jpg"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-full shadow-lg relative z-10"
            priority
          />
        </motion.div>

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="rounded-full h-16 w-16 border-t-4 border-white border-opacity-40 border-t-blue-500 mb-6 shadow-lg"
        >
          <div className="h-full w-full bg-gradient-to-br from-blue-500 via-white to-transparent rounded-full blur-sm animate-pulse" />
        </motion.div>

        {/* Texto */}
        <motion.p
          key="loading-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="text-muted-foreground text-sm font-medium italic"
        >
          {getMessage()}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loading
