function NodeMaker(ID) {

    this.id = ID;

	this.createNode = function(nodeType, container, id) {

        container = container || document.body;
        id = id || false;
        var node = document.createElement(nodeType);
        if (id !== false) {
            node.id = id;
        }
        container.appendChild(node);

        return node;
    }

    this.deleteNode = function(element) {
        try {
            element.remove();
        } catch (err) {
            element.parentNode.removeChild(element);
        }
    }
}