import { Separator } from './ui/separator'
import { Details } from './details'
import { Skills } from './skills'

export const Sidebar = ({
  email,
  phone,
  location,
  social,
}: {
  email: string
  phone: string
  location: string
  social: Record<string, string>
}) => {
  return (
    <div className="flex flex-col pt-4 lg:pr-6 lg:border-r border-border">
      <Details
        email={email}
        phone={phone}
        location={location}
        social={social}
      />
      <Separator className="mb-4" />
      <Skills />
    </div>
  )
}
