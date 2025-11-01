// console.log(`https://discord.com/api/v10/guilds/${process.env.GUILD_ID}/members/limit=${process.env.LIMIT}`)
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

const usernames: list = (await response).map((member) => member.user.username)
console.log(usernames)