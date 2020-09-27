const images = require('remark-images')
const emoji = require('remark-emoji')
const align = require('remark-align')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [images, emoji, align],
      rehypePlugins: []
    }
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
})