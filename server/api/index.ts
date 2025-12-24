import { Elysia } from "elysia";
import { treaty } from "@elysiajs/eden";

import { infoRouter } from "@/server/api/routers/info";
import { formsRouter } from "./routers/forms";
import { socialRouter } from "./routers/social";
import { userRouter } from "./routers/user";

export const app = new Elysia({
    name: 'app',
    prefix: '/api'
})
.use(infoRouter)
.use(formsRouter)
.use(socialRouter)
.use(userRouter)


export type App = typeof app;
export const api = treaty(app).api;