import { z } from "zod";

export const createNoteSchema = z.object({
  // validating the note input.
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;
