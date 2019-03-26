const BinarySearchTree = require("./binary-search-tree").BinarySearchTree;
const expect = require("./node_modules/chai").expect;

describe("Binary Search Tree", function() {
    let tree;

    beforeEach(function() {
        tree = new BinarySearchTree();
    });

    describe("size", function() {
        it("should return zero for an empty tree", function() {
            //
            expect(tree.getSize()).equal(0);
        });
    });

    describe("insert", function() {
        it("should add a value to an empty list", function() {
            //
            tree.insert("Monkey");
            expect(tree.getSize()).equal(1);
            tree.insert("Frog");
            expect(tree.getSize()).equal(2);
            tree.insert("Giraffe");
            expect(tree.getSize()).equal(3);

        });
    });
    describe("find", function() {
        it("should return true when a value exists or false if not", function() {
            tree.insert("Monkey");
            expect(tree.find("Monkey")).equal(0);
            tree.insert("Animal");
            expect(tree.find("Frog")).equal(0);
            tree.insert("Animal");
            expect(tree.find("Giraffe")).equal(0);

        });
    });
});