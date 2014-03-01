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

    this.parentContains = function(parent, node) {
        var parentArray = parent.childNodes, hasNode = false, i;
        for (i = 0; i < parentArray.length; i += 1) {
            if (getType(parentArray[i]) === node) {
                hasNode = true;
            }
        }
        return hasNode;
    }

    this.deleteNode = function(element) {

        try {
            element.remove();
        } catch (err) {
            element.parentNode.removeChild(element);
        }
    }

    this.getNodeId = function(element) {
        return element.id;
    }

    function getType(obj) {

        var type;
        if(obj.nodeName !== undefined) {
            //element
            type = (obj.nodeName);
        } else {
            //everything else
            type = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1]
        }
        return type.toLowerCase();
    }

    function getInfo(obj) {

        var info;
        try {
            info = JSON.stringify(obj);
        } catch (err) {
            console.log("getInfo: could not stringify.", obj);
        }
        return info;
    };
}