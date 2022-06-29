# The Fuzzler

Takes a directory full of photos, scans them and loads useful metadata (mostly IPTC keywords/tags) into a SQLite database.

Because photos vary widely in quality and aspect ratio, use a masonary format for displaying thumbnails.  Tags are grouped into categories 'name', 'species', and 'with' (for miscellaneous photo features).  

Features:

- Display all photos as masonary gallery
- Display all photos matching a tag as masonary gallery
- Masonary galleries can be sorted randomly or by date (asc or desc).
- Display all tags within a category with a hero photo per category.

Future Features:

- [ ] /update route to rescan image folder and update database
- [ ] lightbox display for fullsize photos
- [ ] sort images by popularity (popularity by click for full version)
- [ ] sort images by favourite flag
- [ ] search photos by filename, title, and tag
- [ ] automatically resize thumbnails in Express (on upload?)
- [ ] add/edit categories
- [ ] add/edit/delete tags
- [ ] automatically optimise image size and format
- [ ] uploading new photos
