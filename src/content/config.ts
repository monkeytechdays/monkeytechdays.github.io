import { defineCollection, z } from "astro:content";

const mktds = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    name: z.string(),
    thumbnail: z.string(),
    subtitle: z.string(),
    description: z.array(z.string()),
    requirements: z.array(z.string()),
    program: z.array(z.string()),
    coachs: z.array(
      z.object({
        name: z.string(),
        img: z.string(),
        email: z.string().optional(),
        description: z.string(),
        tech: z.string().optional(),
        twitter: z.string().optional(),
      }),
    ),
    community: z
      .array(
        z.object({
          logo: z.string(),
          url: z.string(),
          name: z.string(),
        }),
      )
      .optional(),
    sponsor: z
      .array(
        z.object({
          logo: z.string(),
          url: z.string(),
          name: z.string(),
        }),
      )
      .optional(),
    location: z.object({
      url: z.string(),
      address: z.string(),
      name: z.string(),
      iframe: z.string(),
    }),
    planning: z.array(
      z.object({
        label: z.string().optional(),
        labels: z.array(z.string()).optional(),
        start: z.string(),
        end: z.string(),
      }),
    ),
    inscriptionLink: z.string(),
  }),
});

export const collections = { mktds };
