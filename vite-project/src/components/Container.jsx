import { cn } from 'cn'

function Container({ className, children }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1120px] px-6 md:px-10', className)}>
      {children}
    </div>
  )
}

export default Container
