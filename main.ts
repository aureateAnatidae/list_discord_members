import { getUsernames } from "./getUsernames.ts";
import { serve } from '@hono/node-server'
import { Hono } from "hono";

// Outputs as a new name per line
// import fs from "node:fs";
// fs.writeFile("./userlist.csv", usernames.join("\n"), (err) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log("Output writen to file ./userlist.csv");
// 	}
// });

const app = new Hono();

app.get("/", async (c) => {
    const usernames = await getUsernames()
    return c.json({
        users: usernames
    })
});

serve({
  fetch: app.fetch,
  port: 8304,
})
