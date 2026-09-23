# Martin Saveski's Website ---- Borrowed

## Blog entries

The blog is listed at `/blogs/` and in the homepage's Blogs section. Each article
is a Markdown file in the repository root, with front matter like:

```yaml
---
layout: blog-post
title: "An article title"
description: "A short summary for the blog listing."
date: 2026-09-18 22:31:14 +0500
permalink: /blogs/an-article-title/
blog: true
show_hero: false
---
```

Entries are listed automatically in reverse date order. Dates are displayed in
Pakistan Standard Time (`Asia/Karachi`, UTC+05:00), as configured in `_config.yml`.
Use level-two headings for article sections. To include an automatic section
index, add a Markdown list item followed by `{:toc}` on the next line.

## Updates guide
Change one of the files in `_data`, unless you are changing the look of the website.

Test changes with:
```
jekyll serve
```

Push to the ML web directory:
```
rm -rf public_html
mkdir public_html
```
```
./__deploy.sh
```

More info on the [Media Lab wiki](http://wiki.media.mit.edu/view/Necsys/WebPagePersonal).


## External Libraries
- Framework: [Jekyll](http://jekyllrb.com/)
- CSS
  - [Skeleton](getskeleton.com)
  - Tabs: [Skeleton Tabs](https://github.com/nathancahill/skeleton-tabs)
  - Experience: [Timeline](https://codepen.io/NilsWe/pen/FemfK)
  - Icons: [Font Awesome](http://fontawesome.io/)
- JS
  - [Jquery (3.1.1)](https://jquery.com/)
