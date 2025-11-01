import fs from "node:fs";

const response = await fetch(
	`https://discord.com/api/v10/guilds/${process.env.GUILD_ID}/members?limit=${process.env.LIMIT}`,
	{
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bot ${process.env.BOT_TOKEN}`,
		},
	},
).then((res) => res.json());

const usernames: list = (await response).map((member) => member.user.username);
fs.writeFile("./userlist", usernames.join("\n"), err => {
    if (err) {
        console.error(err)
    } else {
        console.log("Output writen to file ./userlist")
    }
})
