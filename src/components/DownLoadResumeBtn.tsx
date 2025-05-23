import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
    <a href="/Updated Resume Carbonell.pdf" download="Harley_Carbonell_Resume.pdf">
  <HackerBtn label='Download Resume' />
</a>
  </div>
  )
}

export default DownLoadResumeBtn