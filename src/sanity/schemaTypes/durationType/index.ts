import { defineField } from 'sanity';

import { DurationInput } from './DurationInput';

export default defineField({
  type: 'object',
  name: 'duration',
  title: 'Duration',
  components: {
    input: DurationInput,
  },
  fields: [
    defineField({
      type: 'date',
      name: 'start',
      title: 'Start',
    }),
    defineField({
      type: 'date',
      name: 'end',
      title: 'End',
    }),
  ],
});