describe("NodeMaker: ", function() {

    var nodeMaker, nodeContainer, newDiv, hasDiv;

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

        hasDiv = nodeMaker.parentContains(nodeContainer, "div");
        expect(hasDiv).toBeTruthy();
    });

    it("deletes an element.", function() {
        //Create div
        newDiv = nodeMaker.createNode("div", nodeContainer, "newDiv");
        expect(newDiv).toBeDefined(newDiv);

        //Confirm created div is inside nodeContainer
        hasDiv = nodeMaker.parentContains(nodeContainer, "div");
        expect(hasDiv).toBeTruthy();

        nodeMaker.deleteNode(newDiv);

        var divRemoved = nodeMaker.parentContains(nodeContainer, "div");
        expect(divRemoved).toBeTrue();
    });
});
