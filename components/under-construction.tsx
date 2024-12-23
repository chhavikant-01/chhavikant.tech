"use client";

import { useState } from 'react'
import { AlertCircle, X } from 'lucide-react'
import { Button } from "../components/ui/button"

export function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-purple-900 text-purple-50 p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 text-purple-200" />
          <div>
            <div className="font-semibold">Site under construction!</div>
            <div className="">
            This site is under construction. Some features may not be available.
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-purple-200 hover:text-purple-100 hover:bg-purple-800"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}

