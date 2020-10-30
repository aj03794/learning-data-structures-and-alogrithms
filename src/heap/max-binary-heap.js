class MaxBinaryHeap {
    constructor() {
        this.root = null
    }
    BubbleUp(value) {
        if (this.root === null) {
            this.root = value
        }
    }
}

module.exports = MaxBinaryHeap