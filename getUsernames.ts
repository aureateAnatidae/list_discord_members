export async function getUsernames() {
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
	const usernames = Array(response.length * 3);
	for (let i = 0; i < response.length; i++) {
		usernames.push(response[i].user.global_name);
		usernames.push(response[i].user.username);
		if (response[i].nick) {
			usernames[i] = (response[i].nick);
		}
	}
	return usernames.filter((element) => element);
}
