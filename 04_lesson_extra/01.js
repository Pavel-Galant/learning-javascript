/**
 * Требуется обойти все дочерние ноды HTML элемента и у тех элементов, у которых есть атрибут data-field выставить textContent из соответствующего свойства объекта.
 * В случае, если в объекте нет нужного свойства - выбросить ошибку,
 * если в объекте есть свойство, которое не используется в HTML - игнорировать
 * 
 * @param {HTMLElement} elem контейнер
 * @param {object} data оъект с полями под замену
 * @returns {undefined}
 */

function parseTemplate(elem, data) {
    const keys = Object.keys(data);
    for (let node of elem.children) {
        if (node.hasAttribute('data-field')) {
            const attrValue = node.getAttribute('data-field');
            if (!keys.includes(attrValue)) throw new Error(`Not found property ${attrValue} in data Object`)
            node.textContent = data[attrValue];
        }
    }
}

parseTemplate(
    document.getElementById('item1'),
    {
      title: 'Hello world',
      description: 'The first program',
    }
);