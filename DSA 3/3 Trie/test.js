class Node{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char])node.children[char] = new Node();
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char])return false
            node = node.children[char]
        }
        return node.isEnd
    }

    startsWith(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char])return false
            node = node.children[char]
        }
        return true
    }
}

const trie = new Trie();

trie.insert('cat')
trie.insert('sat')
trie.insert('mat')

console.log(trie.startsWith('sa'));