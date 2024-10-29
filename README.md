# Virtualised List

This virtualised list adds 5 or less items in the DOM at any given time.

These 5 items are stored in an array that's treated like a double ended queue.

When the user crosses the middle of the queue scrolling down, we remove one item from the front of the queue and add one item to the rear.

When the user crosses the middle of the queue scrolling up, we remove one item from the back of the queue and add one item to the front.

Then VirtualisedList component is the complete virtualised list which takes props.

I've added the stages of development to help explain how to arrive at the final version.

- **Stage 1:** A viewer with an X number of pages that renders all Pages.
- **Stage 2:** Add parent container div to viewport.
- **Stage 3:** Define the height of the viewport as the height of pages \* pageHeight. Position viewport absolute and make parent container scrollable.
- **Stage 4:** Add page numbers based on index. Add Minor styling change to make viewport blend into parent container
- **Stage 5:** Add page numbers based on scroll position.
- **Stage 6:** Initially load only 5 or less pages.
- **Stage 7:** Handle User scrolling down.
  - Push one page at a time to pagesInView as user scrolls down.
  - Shift first page in pagesInView as user scrolls down.
- **Stage 8:** Handle User scrolling up.
  - Unshift one page at a time to pagesInView as user scrolls up.
  - Pop last page in pagesInView as user scrolls up.
