export default {
	title: 'Post',
	name: 'post',
	type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
    },
	prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle ? '/' + subtitle.current : 'No slug'
      }
    }
  },
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'OG Description',
			name: 'ogDescription',
			type: 'string',
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			title: 'Updated',
			name: 'dateUpdate',
			type: 'datetime',
		},
		{
			title: 'Body',
			name: 'body',
			type: 'array',
			of: [
				{ type: 'block' },
				{ type: 'image' },
				{
					name: 'audioPlayer',
					type: 'file',
					title: 'Audio Player',
					options: {
						accept: 'audio/*',
					},
					fields: [
						{
							title: 'Title',
							name: 'title',
							type: 'string',
						},
						{
							title: 'Artist',
							name: 'artist',
							type: 'string',
						}
					],
				},
			],
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

		}

	]
}
