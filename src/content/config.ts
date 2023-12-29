import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    link: z.string().optional(),
    img1: z.string(),
    img2: z.string(),
    img3: z.string(),
    img4: z.string(),
    img5: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};