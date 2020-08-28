console.log('interview-------------------------------------')


console.log('防抖---------------------')
function debounce(fn, delay) {
    let timer = null;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, arguments);
        }, delay)
    }
}

function sayhi() {
    console.log('防抖成功---------------')
}

var testDebounce = debounce(sayhi, 1000);


console.log('截流--------------------')
function throttle(fn, delay){
    let timer = null;
    let startTime = Date.now();
    return function() {
        clearTimeout(timer);
        let curTime = Date.now();
        if(curTime - startTime > delay){
            fn.call(this, arguments);
            startTime = curTime;
        }else{
            timer = setTimeout(() => {
                fn.call(this, arguments);
            }, delay)
        }
    }
}

function testThrottle() {
    console.log('test----------throttle')
}

window.addEventListener('resize' ,throttle(testThrottle, 1000));


console.log('set----------------集合')
const set = new Set([1,2,3,4,4,3]);
console.log(set)

const tree = [
    {
        id: '1',
        children: [
            {
                id: '1-1'
            },
            {
                id: '1-2',
                children: [
                    {
                        id: '1-1-1'
                    },
                    {
                        id: '1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        children: [
            {
                id: '2-1'
            },
            {
                id: '2-2',
                children: [
                    {
                        id: '2-1-1'
                    },
                    {
                        id: '2-1-2'
                    }
                ]
            }
        ]
    }
]



console.log('深度优先遍历---------------------');
function dfs(data) {
    let result = [];
    // 栈 先进后出
    let stack = [];
    if(data.length){
        for(let i = 0; i < data.length; i++){
            stack.push(data[i])
            while(stack.length){
                let item = stack.pop();
                let children = item.children;
                result.push(item.id)
                if(children){
                    for(let j = children.length - 1; j >= 0; j--){
                        stack.push(children[j])
                    }
                }
            }
        }
        
    }
    return result;
}

console.log(dfs(tree))


console.log('广度优先遍历---------------------');
function bfs(data){
    let result = [];
    // 队列, 先进先出
    let stack = [];
    for(let i = 0; i < data.length; i++) {
        if(data.length){
            for(let i = 0; i < data.length; i++){
                stack.push(data[i])
            }
            while(stack.length){
                let item = stack.shift();
                let children = item.children;
                result.push(item.id);
                if(children){
                    for(let i = 0; i < children.length; i++){
                        stack.push(children[i])
                    }
                }
            }
        }
        return result;
    }
}
console.log(bfs(tree))


console.log('new------------');
function _New(fn) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.call(obj);
    return obj;
}

let arr = [1, 2, 31, 123, 12, 80, 9];
console.log(arr.sort((a, b) => a-b));


class LazyMan {
    constructor(name) {
        this.task=[];
        this.name=name;
        setTimeout(() => {
            this.next();
        })
    }

    sleepFirst(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`);
                this.next();
            }, time)
        }
        this.task.unshift(fn);
        return this;
    }

    sleep() {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next()
            }, time)
        }
        this.task.push(fn);
        return this;
    }

    eat(food) {
        const fn = () => {
            console.log(`I am eating ${food}`)
            this.next()
        }
        this.task.push(fn);
        return this;
    }

    next() {
        const fn = this.task.shift();
        fn && fn();
    }
}

function deepClone(obj) {
    // hash表,存储对象
    let map = new WeakMap() 
    function dp(obj) {
        const result = {};
        const keys = Object.keys(obj);
        const mapObj = map.get(obj);
        if(mapObj){
            return obj;
        }
        // 没有的话,保存对象
        map.set(obj, {});
        keys.forEach(key => {
            const tpl = obj[key];
            if(tpl && typeof tpl === 'object'){
                result[key] = dp(tpl)
            }else{
                result[key] = tpl;
            }
        })
        return result;
   }
}