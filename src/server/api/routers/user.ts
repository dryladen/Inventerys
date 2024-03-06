import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
const createUserInput = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const userRouter = createTRPCRouter({
  all: publicProcedure.query( async ({ctx}) => {
    return await ctx.db.user.findMany({take:10})
  }),
  create: protectedProcedure
    .input(createUserInput)
    .mutation(({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          image: "/box.jpg",
        },
      });
    }),
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
