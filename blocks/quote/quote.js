export default function decorate(block) {
  const rows = [block.children];

  const quote = rows[0]?.textContent.trim();
  const author = rows[1]?.textContent.trim();
  const role = rows[2]?.textContent.trim();

  block.innerHTML = '';

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quote;

  if (author) {
    const authorElement = document.createElement('div');
    authorElement.className = 'author';
    authorElement.textContent = `— ${author}`;
    block.append(authorElement);
  }

  if (role) {
    const roleElement = document.createElement('div');
    roleElement.className = 'role';
    roleElement.textContent = role;
    block.prepend(blockquote);
    block.append(roleElement);
  }
}
