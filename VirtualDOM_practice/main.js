const $reloadBtn = document.querySelector('.reload');
const $root = document.getElementById("root");


// Фукнция, преобразовывающая html в VDOM(React.createElement()).
const h = (type, props, ...children) => {
  return { type, props, children };
};

const HTML = h(
  "ul",
  { className: "list" },
  h("li", {}, "item 1"),
  h("li", {}, "item 2")
);

const newHTML = h(
  "div",
  { className: "container" },
  h("h2", {}, "New DOM here!"),
  h("ul", {}, 
    h("li", {}, "new item 1"),
    h("li", {}, "new item 2"),
  )
);

// Функция, создающая реальный DOM на основе VDOM.
const createElement = (node) => {
  if (typeof node === "string") return document.createTextNode(node);
  const $el = document.createElement(node.type);
  node.children
    .map(createElement) // Как работают(el, i, arr) в cb?
    .forEach($el.appendChild.bind($el)); // Что тут происходит??
  return $el;
};

// Вспомогательная функция, которая сравнивает старую и новую VNode. С помощью нее узнаем, изменилась ли нода.
const nodeChanged = (node1, node2) => {
  return (
    typeof node1 !== typeof node2 ||
    (typeof node1 === "string" && node1 !== node2) ||
    node1.type !== node2.type
  );
};

// Функция, обновляющая реальный DOM на основе старого и нового VDOM.
const updateElement = ($parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    $parent.removeChild($parent.childNodes[index]);
  } else if (nodeChanged(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
  } else if (newNode.type) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i]
      );
    }
  }
};



$reloadBtn.addEventListener("click", () => {
  updateElement($root, newHTML, HTML);
});

$root.appendChild(createElement(HTML));
console.log(HTML);