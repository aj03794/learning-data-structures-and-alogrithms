class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while(true) {
                if (value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                // In this case we go to the right
                } else {
                    console.log(currentNode.value)
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }

    find(value) {
        if(this.root === null) {
            return false
        }
        let currentNode = this.root
        while(true) {
            // console.log('currentNode', currentNode)
            if (currentNode.value === value) {
                return true
            } else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    return false
                } else {
                    currentNode = currentNode.right
                }
            } else {
                if (currentNode.left === null) {
                    return false
                } else {
                    currentNode = currentNode.left
                }
            }
        }
    }

    BreadthFirstSearch() {
        const toProcess = []
        const processed = []
        if (this.root === null) {
            return processed
        } else {
            toProcess.push(this.root)
            while(toProcess.length > 0) {
                const processing = toProcess.shift();
                // console.log({ processing })
                // console.log({ toProcess })
                if(processing.left !== null) {
                    toProcess.push(processing.left)
                }
                if(processing.right !== null) {
                    toProcess.push(processing.right)
                }
                processed.push(processing.value)
            }
        }
        return processed
    }

    DFSPreOrder() {
        const data = []
        const traverse = node => {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder() {
        const data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

    DFSInOrder() {
        const data = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
            // data.push(node.value)
        }
        traverse(this.root)
        return data
    }
}


// Could manually insert ourselves if we wanted to
// const tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)

module.exports = { BinarySearchTree }