import { router } from "../trpcConfig";
import { exampleRouter } from "./exampleRouter";

export const appRouter = router({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
