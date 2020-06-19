# My personal website using Next.js and Markdown and TypeScript

A basic website with blog using markdown and deployed it to the cloud with [Vercel](https://vercel.com).

The blog posts are stored in `/_posts` as markdown files with front matter support. Adding a new markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

Install dependencies and run the example:

```bash
npm install
npm run dev
```

It should be up and running on [http://localhost:3000](http://localhost:3000)!

# Notes

This blog-starter-typescript uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v1.4 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

# Todo

- [x] Migration nextjs and deploy on Vercel
- [x] First phase of blog page
- [ ] [Convert Medium posts into markdown automatically](https://towardsdatascience.com/converting-medium-posts-to-markdown-for-your-blog-5d6830408467)
- [ ] Create a Portfolio Page
- [ ] Implement a newsletter system
- [ ] Migrate chart & timeline into react components

## Bug tracker
- [x] Timeline on resume page
- [ ] Chart on resume page