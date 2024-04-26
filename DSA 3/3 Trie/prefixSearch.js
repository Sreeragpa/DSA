class Node{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
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
            if(!node.children[char])return null;
            node = node.children[char]
        }

        return this.findRelated(node,word)
    }

    findRelated(node,prefix,word="",result=[]){
        if(node.isEnd){
            result.push(prefix+word);
        }
        for(let char in node.children){
            this.findRelated(node.children[char],prefix,word+char,result)
        }

        return result
    }
}

const myTrie = new Trie();

myTrie.insert("Sreerag")
myTrie.insert("Sreehari");
console.log(myTrie.search("Sree"));