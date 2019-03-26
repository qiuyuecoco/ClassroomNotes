class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    insert(value){
        //empty list
        if(this.size === 0){

        }
        else {
            //find nodes (left & right)
            let currentNode = this.head;

        }
    }
    remove(value){

    }
    print(){

    }
    find(value){
        if(this.head == null){
            return false;
        }
        else{
            let currentNode = this.head;
            //loop until found or reached null
            while(true){
                if(currentNode === null){
                    return false;
                }
                else if(value === currentNode.value){
                    return true;
                }
                else if(value < currentNode.value){
                    currentNode = currentNode.left;
                }
                else{
                    currentNode = currentNode.right;
                }
            }
        }
    }
}



module.exports.BinarySearchTree = BinarySearchTree;