/* ============================================================
   Lab Life — photo manifest

   This file is the single source of truth for the polaroid board
   on lab-life.html. To add, remove, or edit a memory, just modify
   this array — no HTML changes needed.

   How to add a new memory:
   ------------------------
   1. Drop the photo into  assets/images/lab-life/
      Recommended: 1000x1000 px (1:1 square), JPG or PNG.
      Filename pattern: YYYY-MM-{short-description}.jpg
      Use lowercase with hyphens, no spaces.
   2. Add a new entry to the LAB_LIFE_PHOTOS array below
      (copy an existing line and edit the four fields).

   Field reference:
   ----------------
     file    — filename inside assets/images/lab-life/  (required)
     caption — handwritten-style text under the photo   (required)
     date    — small mono-font date label               (required)
     color   — placeholder gradient tone if file missing
               choose one of: 'warm' | 'cool' | 'green' | 'dusk' | 'gold'
               or '' (default light blue-gray)
               This only matters when the photo file is missing;
               a real photo always overrides the gradient.

   Display order = the order entries appear in this array.
   Top of the array = first polaroid on the page.
   Newest memories at the top.
   ============================================================ */

window.LAB_LIFE_PHOTOS = [
  {
    file:    "2025-11-lab-photo.jpg",
    caption: "Lab photo",
    date:    "Nov · 2025",
    color:   "gold"
  },
  {
    file:    "2025-02-ceremony.jpg",
    caption: "KIST 연구개발우수팀상 수상",
    date:    "Feb · 2025",
    color:   "green"
  },
  {
    file:    "2023-05-gangmun-beach.jpg",
    caption: "강문해변 산책",
    date:    "May · 2023",
    color:   "dusk"
  },
  {
    file:    "2022-12-year-end-dinner-2.jpg",
    caption: "송년 회식",
    date:    "Dec · 2022",
    color:   "cool"
  },
  {
    file:    "2022-12-year-end-dinner.jpg",
    caption: "송년 회식",
    date:    "Dec · 2022",
    color:   "warm"
  },
  {
    file:    "2022-07-center-dinner.jpg",
    caption: "Center dinner",
    date:    "Jul · 2022",
    color:   "gold"
  },
  {
    file:    "2021-11-gangmun-beach.jpg",
    caption: "강문해변 산책",
    date:    "Nov · 2021",
    color:   "dusk"
  },
  {
    file:    "2021-04-lunch.jpg",
    caption: "Lab lunch",
    date:    "Apr · 2021",
    color:   "green"
  },
  {
    file:    "2019-06-jeju-kmb-2.jpg",
    caption: "제주도 미생물생명공학회",
    date:    "Jun · 2019",
    color:   "cool"
  },
  {
    file:    "2019-06-jeju-kmb.jpg",
    caption: "제주도 미생물생명공학회",
    date:    "Jun · 2019",
    color:   "warm"
  }
];
