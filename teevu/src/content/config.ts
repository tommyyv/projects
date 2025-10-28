import {z, defineCollection } from "astro:content";

const readsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
  }),
});

export const collections = {
  reads: readsCollection,
}
