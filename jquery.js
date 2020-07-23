window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector)


    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            //闭包：函数访问外部变量
            return this
        },
        /*
        关于this 
        obj.fn(p1)等价于：
        obj.fn.call(obj,p1) //函数里的this就是obs
        */

        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },

        print(){
            console.log(elements);
        }





    }

}
