dfDOM(document.documentElement)
displayNode(document.documentElement)
function dfDOM( root ){ // обход в глубину
    let stack = [],
        deep = 0,
        node = root,
        next = true;
  
    while(node) {
        if ( next ) console.log(' '.repeat(deep), node.nodeType, node.nodeName, node.nodeValue);
        if ( next && node.firstChild ){ 
            next = true;
            deep++;
            stack.push( node );
            node = node.firstChild ;
        }
        else if ( node.nextSibling ){
            next = true;
            node = node.nextSibling;
        }
        else{
            next = false;
            deep--;
            node = stack.pop();
        }
    }
}

// Ваше решение
function displayNode(node, deep = 0) {
    console.log(' '.repeat(deep), node.nodeType, node.nodeName, node.nodeValue);
    for (let item = node.firstChild; item; item = item.nextSibling)
    displayNode(item, deep + 1);
}