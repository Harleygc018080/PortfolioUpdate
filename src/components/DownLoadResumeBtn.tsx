import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

const DownLoadResumeBtn = () => {
  return (
    <div className="mt-4">
      <Link href="/Updated Resume Carbonell.pdf " download>
        <a className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Download Resume
        </a>
      </Link>
    </div>
  );
};

export default DownLoadResumeBtn;