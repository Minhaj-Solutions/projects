import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/app/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-xl shadow-md p-6 md:p-8',
          {
            'hover:shadow-xl hover:-translate-y-1 transition-all duration-200': hover,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

