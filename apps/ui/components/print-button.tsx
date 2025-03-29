'use client'

import { Button } from './ui/button'
import { Printer } from 'lucide-react'

export const PrintButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="hidden lg:inline-flex rounded-full hover:cursor-pointer"
      onClick={() => window.print()}
    >
      <Printer />
    </Button>
  )
}
