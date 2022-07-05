# The Fuzzler

Takes a folder full of cut animal photos and creates dynamic browsable, filterable, and sortable galleries.

![screenshot](server/public/screenshot.jpg)

## Requirements

- Node, Express, React, SQLite, Exifr
- Photos must have IPTC keyword tags matching `group/tag`:
  - `group` must be {name,species,with}
  - `tag` can be any single word

## Features

- Galleries can be filtered by group or tag
- Galleries are sorted randomly by default (asc/desc date optional)
- Lightbox for single image display
- Currently active navigation elements (logo, nav, tags) are highlighted
- Photo metadata (mostly IPTC keywords) imported to SQLite database

## Future Features

- [ ] sort photos by popularity
- [ ] remember sort preference
- [ ] search photos by filename, title, and tag
- [ ] uploading new photos
- [ ] add/edit/delete tags
- [ ] automatically optimise photos (resize thumbnails)
- [ ] create Docker image
- [ ] add tests

## Installation

- Put tagged photos into `server/public/images`
- Run `npm install`
- Run `npm run knex migrate:latest`
- Run `node server/db/updatedb.js`
