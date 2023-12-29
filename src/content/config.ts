import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    link: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};