export default {
	title: 'Projects',
	name: 'projects',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Pinned?',
			name: 'pinned',
			type: 'boolean',
			initialValue: false
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
		},
		{
			title: 'Body',
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, {type: 'image'}],
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				slugify: input => input
						.toString()
						.toLowerCase()
						.replace(/\s+/g, '-')           // Replace spaces with -
						.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
						.replace(/\-\-+/g, '-')         // Replace multiple - with single -
						.replace(/^-+/, '')             // Trim - from start of text
						.replace(/-+$/, '') 
			},
		},
		{
			title: 'Repository',
			name: 'repository',
			type: 'url',
		},
		{
			title: 'Live Demo',
			name: 'liveDemo',
			type: 'url',
		},
	]
}
