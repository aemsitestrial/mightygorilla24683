export default function decorate(block) {
  const rows = [...block.children];

  if (!rows.length) return;

  const cells = rows.length === 1
    ? [...rows[0].children]
    : rows.map((row) => row.firstElementChild);

  const quoteText = cells[0]?.textContent.trim() || "";
  const author = cells[1]?.textContent.trim() || "";
  const role = cells[2]?.textContent.trim() || "";

  // Clear original EDS content
  block.textContent = "";

  // Quote
  const blockquote = document.createElement("blockquote");
  blockquote.textContent = quoteText;

  // Author
  const authorElement = document.createElement("div");
  authorElement.className = "author";
  authorElement.textContent = author;

  // Role
  const roleElement = document.createElement("div");
  roleElement.className = "role";
  roleElement.textContent = role;

  // Add elements
  block.append(
    blockquote,
    authorElement,
    roleElement,
  );
}