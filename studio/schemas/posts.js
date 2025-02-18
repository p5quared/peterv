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
                    title: 'Apple Music Embed',
                    name: 'appleMusicEmbed',
                    type: 'object',
                    fields: [
                        {
                            title: 'Embed URL',
                            name: 'src',
                            type: 'url',
                            validation: Rule => Rule.required()
                        }
                    ],
                    preview: {
                        select: {
                            src: 'src'
                        },
                        prepare(selection) {
                            return {
                                title: 'Apple Music Embed',
                                src: selection.src
                            }
                        }
                    }
                }
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
