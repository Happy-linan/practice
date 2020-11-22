/**
 * @method forEach
 * @param callback
 */
function forEach(callback) {
    console.log('run forEach');
    for( let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

/**
 * @method map
 * @param callback
 */
function map(callback) {
    console.log('run map');
    let newArr = []
    for(let i = 0; i < this.length; i++){
        newArr[i] = callback(this[i]);
    }
    return newArr;
}

/**
 * @method filter
 * @param callback
 */
function filter(callback) {
    console.log('run filter');
    let newArr = [];
    let j = 0;
    for( let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArr[j] = this[i];
            j++;
            // newArr.push(this[i]);
        }
    }
    return newArr;
}

/**
 * @method find
 * @param callback
 */
function find(callback) {
    console.log('run find');
    let target;
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            target = this[i];
            break;
        }
    }
    return target;
}

/**
 * @method findIndex 
 * @param callback
 */
function findIndex(callback){
    console.log('run findIndex');
    let index
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            index =  i;
            break;
            // return i;
        }
        index = -1;
    }
    return index;
    // return -1;
}

/**
 * @method every
 * @param callback
 */
function every(callback){
    console.log('run every');
    let flag = true;
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * @method some
 * @param callback
 */
function some(callback){
    console.log('run some');
    let flag = false;
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

/**
 * @method indexOf
 * @param callback
 */
function indexOf(callback){
    console.log('run indexOf');
    let index;
    for(let i = 0; i < this.length; i++){
        if(this[i] === callback){
            index = i;
            break;
        }
        index = -1;
    }
    return index;
}

/**
 * @method includes
 * @param callback
 */
function includes(callback){
    console.log('run includes');
    let flag = false;
    for(let i = 0; i < this.length; i++){
        console.log(i);
        if(this[i] === callback){
            flag = true;
            break;
        }
    }
    return flag;
}

/**
 * @method lastIndexOf
 * @param callback
 */
function lastIndexOf(callback){
    console.log('run lastIndexOf');
    let index;
    for(let i = 0; i < this.length; i++){
        if(this[i] === callback){
            index = i;
        }else{
            index = -1;
        }
    }
    return index;
}

/**
 * @method push
 * @param callback
 */
function push(callback){
    console.log('run push');
    this[this.length] = callback;
    return this.length;
}

/**
 * @method pop
 * @param callback
 */
function pop(callback){
    console.log('run pop');
    let elem;
    if(this[this.length -1] === callback){
        elem  = callback;
        this.length --;
    }
    return elem;
}

/**
 * @method unshift
 * @param arguments
 */
function unshift(){
    console.log('run unshift');
    for(let i = this.length -1; i >= 0; i--){
        this[ i + arguments.length] = this[i];
    }
    for(let j = 0; j < arguments.length; j++){
        this[j] = arguments[j];
    }
    return this.length;
}

/**
 * @method shift
 */
function shift(){
    console.log('run shift');
    let elem = this[0];
    console.log(this.length,this);
    for(let i = 0; i < this.length; i++){
        this[i] = this[i + 1];
    }
    this.length = this.length - 1
    console.log(this.length,this);
    return elem;
}

/**
 * @method concat
 * @param callback
 */
function concat(){
    console.log('run concat');
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr[i] = this[i];
    }
    for(let i = 0; i < arguments.length; i++){
        if(Object.prototype.toString.call(arguments[i]) === "[object Array]"){
            for(let j = 0; j < arguments[i].length; j++){
                newArr[newArr.length] = arguments[i][j];
            }
        }else{
            newArr[newArr.length] = arguments[i];
        }
    }
    return newArr;
}

/**
 * @method reverse
 */
function reverse(){
    console.log('run reverse');
    let newArr = [];
    for(let i = this.length -1; i >= 0; i--){
        newArr[newArr.length] = this[i];
    }
    for(let j = 0; j < newArr.length; j++){
        this[j] = newArr[j];
    }
    return this;
}

/**
 * @method isArray
 * @param callback
 */
 function isArray(callback){
    console.log('run isArray');
    let type = Object.prototype.toString.call(callback);
    if(type === "[object Array]"){
        return true;
    }else{
        return false;
    }
}

/**
 * @method of
 */
 function of(){
    console.log('run of');
    let newArr = [];
    for(let i = 0; i < arguments.length; i++){
        newArr[i] = arguments[i];
    }
    return newArr;
}

/**
 * @method slice
 * @params begin,end
 */
function slice(begin,end){
    console.log('run slice');
    let newArr = []
    //对begin的处理
    if(!begin){
        begin = 0;
    }else if(begin < 0){
        begin = this.length + begin;
    }else if(begin > this.length){
        return [];
    }
    //对end的处理
    if(!end || end > this.length){
        end = this.length ;
    }
    for(let i = begin; i < end ; i++){
        newArr[newArr.length] = this[i];
    }
    return newArr;
}

/**
 * @method splice
 * @params start,deleteCount,items...
 */
function splice(start,deleteCount){
    console.log('run splice');
    console.log(start,deleteCount);
    let index = start;
    let newArr = [];
    //对要删除的参数个数做处理
    if(deleteCount === undefined || deleteCount > this.length - start){
        deleteCount = this.length - start;
    }
    if(deleteCount === 0){
        for(let i = this.length - 1; i >= start; i--){
            this[i + arguments.length - 2] = this[i];
        }
        for(let j = 2; j < arguments.length; j++){
            this[index] = arguments[j];
            index++;
        }
    }else{
        for(let i = 2; i <= deleteCount; i++){
            newArr[newArr.length] = this[i];
            this[index] = arguments[i];
            index++;
        }
    }
    return newArr;
}

/**
 * @method join 
 * @param callback
 */
function join(callback){
    console.log('run join');
    let str = "";
    //对传入的链接符做处理
    if(!callback){
        callback = ",";
    }
    //如果arr.length = 0,返回空串
    if(this.length === 0){
        return str;
    }
    for(let i = 0; i < this.length - 1 ; i++){
        str += this[i] + callback;
    }
    str = str + this[this.length - 1];
    return str;
}

/**
 * @method fill
 * @param value,start,end
 */
function fill(value,start,end){
    console.log('run fill');
    //对start参数做处理
    if(!start || start + this.length < 0){
        start = 0;
    }else if(start < 0 && start + this.length > 0){
        start = start + this.length;
    }else if(start > this.length){
        return;
    }
    //对end参数对处理
    if(!end || end > this.length){
        end = this.length;
    }else if(end < 0 && end + this.length < 0 || end + this.length < start){
        return;
    }
    for(let i = start; i < end; i++){
        this[i] = value;
    }
    return this;
}

/**
 * @method 
 * @param params,callback //params为想要转换成数组的伪数组对象或可迭代对象
 *                        //callback 新数组要执行的回调函数
 */
 function from(params,callback){
    console.log('run from');
    let newArr = [];
    if(Object.prototype.toString.call(params) === "[object String]" || Object.prototype.toString.call(params) === "[object Array]"){
        for(let i = 0; i < params.length; i++){
            if(callback){
                newArr[i] = callback(params[i])
            }else{
                newArr[i] = params[i]
            }
        }
    }
    return newArr
 }


Array.prototype.forEach = forEach
Array.prototype.map = map
Array.prototype.filter = filter
Array.prototype.find = find
Array.prototype.findIndex = findIndex
Array.prototype.every = every
Array.prototype.some = some
Array.prototype.indexOf = indexOf
Array.prototype.includes = includes
Array.prototype.lastIndexOf = lastIndexOf
Array.prototype.push = push
Array.prototype.pop = pop
Array.prototype.unshift = unshift
Array.prototype.shift = shift
Array.prototype.concat = concat
Array.prototype.reverse = reverse
Array.prototype.isArray = isArray
Array.prototype.of = of
Array.prototype.slice = slice
Array.prototype.splice = splice
Array.prototype.join = join
Array.prototype.fill = fill
Array.prototype.from = from 