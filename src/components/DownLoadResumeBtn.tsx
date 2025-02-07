import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="/resume.pdf" download="Harley_Carbonell_Resume.pdf">
      <a className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
    Download Resume
      </a>
</Link>
  
    <HackerBtn label='Download Resume' />
  </div>
  )
}

export default DownLoadResumeBtn