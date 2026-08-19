import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { listPublishedPortfolioItems, listPublishedProfileRecords, listSiteSettings, upsertPortfolioItem } from "./db";
import { z } from "zod";

const portfolioItemInput = z.object({
  slug: z.string().min(1).max(160), itemType: z.enum(["research", "applied_work", "technical_practice"]), category: z.string().min(1).max(120), focus: z.string().min(1).max(120), status: z.string().min(1).max(180), title: z.string().min(1).max(255), description: z.string().min(1), evidence: z.string().min(1), stack: z.array(z.string()), details: z.object({ question: z.string(), approach: z.string(), evidence: z.string(), scope: z.string() }), sourceUrl: z.string().url().optional(), sourceNote: z.string().min(1).max(255), featured: z.boolean().default(false), published: z.boolean().default(true), sortOrder: z.number().int().default(0),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  portfolio: router({
    items: publicProcedure.query(() => listPublishedPortfolioItems()),
    profile: publicProcedure.query(() => listPublishedProfileRecords()),
    settings: publicProcedure.query(() => listSiteSettings()),
    upsertItem: adminProcedure.input(portfolioItemInput).mutation(({ input }) => upsertPortfolioItem(input)),
  }),
});

export type AppRouter = typeof appRouter;
