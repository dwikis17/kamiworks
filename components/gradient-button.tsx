'use client'

import { Button } from "@/components/ui/button"

export function GradientButton() {
  return (
    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      Click me
    </Button>
  )
}