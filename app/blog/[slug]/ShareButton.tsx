'use client'

import { type BlogPost } from '@/data/blogs'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  post: BlogPost
}

export function ShareButton({ post }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  )
}
