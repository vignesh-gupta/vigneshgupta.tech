import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { skillType } from './skillType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType],
}
