export default {
	title: 'Reading',
	name: 'reading',
	type: 'document',
	fields: [
		{
			title: 'Link',
			name: 'link',
			type: 'url',
			required: true,
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
			required: true,
		},
		{
			title: 'Read?',
			name: 'isRead',
			type: 'boolean',
			required: false,
			default: false,
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			required: true,
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
			required: false,
		},
		{
			title: 'Image',
			name: 'image',
			type: 'url',
			required: false,
		},
		{
			title: 'readDate',
			name: 'readDate',
			description: "Override the read date if necessary.",
			type: 'datetime',
		},
	]

}
