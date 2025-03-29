import { Progress } from './ui/progress'

type SkillLevel = 'beginner' | 'expert' | 'intermediate'

const levelMap: Record<SkillLevel, number> = {
  beginner: 30,
  expert: 100,
  intermediate: 70,
}

export const SkillCard = ({
  name,
  level,
}: {
  name: string
  level: SkillLevel | null
}) => {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-base">{name}</h4>
      {level && <Progress value={levelMap[level]} className="mt-1" />}
    </div>
  )
}
