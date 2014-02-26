describe("NodeMaker: ", function() {

    var nodeMaker, nodeContainer, newDiv;

    beforeEach(function() {
        nodeContainer = document.createElement("div");
        nodeContainer.id = "nodeContainer";
        document.body.appendChild(nodeContainer);
        nodeMaker = new NodeMaker("artemis");
    });

    it("NodeMaker is defined.", function() {
        expect(nodeMaker).toBeDefined();
    });

    it("NodeMaker has an id of artemis.", function() {
        expect(nodeMaker.id).toMatch("artemis");
    });

    it("creates an element. nodeContainer contains new element.", function() {
        newDiv = nodeMaker.createNode("div", nodeContainer, "newDiv");
        expect(newDiv).toBeDefined(newDiv);

        var hasDiv = nodeMaker.parentContains(nodeContainer, "div");
        expect(hasDiv).toBeTruthy();
    });
});
