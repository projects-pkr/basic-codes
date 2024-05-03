// high order Component
// when a component was use a prop and return a coomponent its called high order component


// DOM=> The DOM (Document Object Model) is a Tree representation of the page, starting from the <html> tag, going down into every child, which are called nodes.

// It’s kept in the browser memory, and directly linked to what you see in a page. The DOM has an API that you can use to traverse it, access every single node, filter them, modify them.


// vertual DOM=> The Virtual DOM Explained
// Every time the DOM changes, the browser has to do two intensive operations: repaint (visual or content changes to an element that do not affect the layout and positioning relative to other elements) and reflow (recalculate the layout of a portion of the page — or the whole page layout).

// React uses a Virtual DOM to help the browser use less resources when changes need to be done on a page.

// When you call setState() on a Component, specifying a state different than the previous one, React marks that Component as dirty. This is key: React only updates when a Component changes the state explicitly.