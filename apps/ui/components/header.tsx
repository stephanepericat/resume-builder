import { LanguageToggle } from './language-toggle'
import { ModeToggle } from './mode-toggle'
import { PrintButton } from './print-button'
import { Separator } from './ui/separator'

export const Header = ({
  name,
  print = false,
  title,
}: {
  name: string
  print?: boolean
  title: string
}) => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="font-title text-5xl font-extrabold uppercase tracking-tight mb-1">
            {name}
          </h1>
          <h2 className="text-lg">{title}</h2>
        </div>
        <div className="flex gap-2 pt-2">
          {print && <PrintButton />}
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </div>
  )
}
