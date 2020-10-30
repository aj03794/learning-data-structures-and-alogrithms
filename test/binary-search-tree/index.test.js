const { expect } = require("chai")
const { BinarySearchTree } = require('../../src/binary-search-tree')

describe('Binary search tree', () => {
    
    const bst = new BinarySearchTree()
    bst.insert(10)
    bst.insert(15)
    bst.insert(20)
    bst.insert(6)
    bst.insert(3)
    bst.insert(8)

    describe('Find', () => {

        it('should find 10 - root scenario', done => {
            const res = bst.find(10)
            expect(res).to.equal(true)
            done()
        })
        it('should find 8', done => {
            const res = bst.find(8)
            expect(res).to.equal(true)
            done()
        })
        it('should find 20', done => {
            const res = bst.find(20)
            expect(res).to.equal(true)
            done()
        })
        it('should not find 0', done => {
            const res = bst.find(0)
            expect(res).to.equal(false)
            done()
        })
    })

    describe('Breadth First Search', () => {
        it('should traverse all elements level by level', done => {
            const res = bst.BreadthFirstSearch()
            expect(res).to.deep.equal([10, 6, 15, 3, 8 , 20])
            console.log({ res })
            done()
        })
    })

    describe.only('Depth first search', () => {
        it('should do DFS PreOrder', done => {
            const res = bst.DFSPreOrder();
            expect(res).to.deep.equal([ 10, 6, 3, 8, 15, 20 ])
            done()
        })
        it('should do DFS Post Order', done => {
            const res = bst.DFSPostOrder();
            expect(res).to.deep.equal([ 3, 8, 6, 20, 15, 10 ])
            done()
        })
        it('should do DFS In Order', done => {
            const res = bst.DFSInOrder();
            expect(res).to.deep.equal([ 3, 6, 8, 10, 15, 20 ])
            done()
        })
    })
})