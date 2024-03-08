import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
const UserInput = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const userRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findMany();
  }),
  userById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.user.findUnique({
        where: { id: input.id },
      });
    }),
  create: protectedProcedure.input(UserInput).mutation(({ ctx, input }) => {
    return ctx.db.user.create({
      data: {
        name: input.name,
        email: input.email,
        image: "/user.png",
      },
    });
  }),
  update: protectedProcedure
    .input(z.object({ userName: z.string(), id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.user.update({
        where: { id: input.id },
        data: { name: input.userName },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.user.delete({
        where: { id: input.id },
      });
    }),
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
