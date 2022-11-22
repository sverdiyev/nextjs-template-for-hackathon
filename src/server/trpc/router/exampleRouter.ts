import { z } from "zod";

import { publicProcedure, router } from "../trpcConfig";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  exampleQuery: publicProcedure.query(() => {
    return { exampleOfNewQuery: "hey, im an example of trpc query" };
  }),
  exampleMutationWithDb: publicProcedure
    .input(z.string().min(1))
    .mutation(async ({ ctx, input }) => {
      const createdUser = await ctx.prisma.user.create({
        data: { Name: input },
      });
      return { createdUser: createdUser };
    }),
  getAllUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
