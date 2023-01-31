module.exports = {
	name: "Player Announcement Away Team",
	description: "The announcment of the player for the away team",
	category: "Basic",
	icon: "image",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
		}
	},
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		}
	],
	entry_props: [
		
		{
			name: "number",
			description: "Player number",
			type: "String"

		},
		{
			name: "name",
			description: "Player Name",
			type: "String"

		},
		{
			name: "team",
			description: "Team Name",
			type: "String"

		},
		{
			name: "dor",
			description: "dor",
			type: "String"

		}
	],
	
	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
