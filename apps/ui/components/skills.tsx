import { getTranslations } from 'next-intl/server'
import * as motion from 'motion/react-client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionTitle } from './section-title'
import { SkillCard } from './skill-card'
import { DEFAULT_TRANSITION } from '@/lib/motion'

import { client } from '@/sanity/lib/client'
import { SKILLS_QUERY } from '@/sanity/lib/queries'

import type { SKILLS_QUERYResult } from '@/sanity/types'

export const Skills = async () => {
  const t = await getTranslations()

  const skills = await client.fetch<SKILLS_QUERYResult>(SKILLS_QUERY)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: -20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.6 }}
    >
      <SectionTitle title={t('titles.skills')} />
      <Accordion type="multiple" className="w-full">
        {Object.entries(skills)
          .sort()
          .map(([key, value]) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="font-bold text-base tracking-tight hover:cursor-pointer">
                {t(`skills.${key}`)}
              </AccordionTrigger>
              <AccordionContent>
                {value.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    name={skill.name!}
                    level={skill.proficiency}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </motion.div>
  )
}
