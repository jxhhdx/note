var addTwoNumbers = function(l1, l2) {
    let a = ''
    let b = ''
    while(l1){
        a+=l1.val;
        l1 = l1.next;
    }
    while(l2){
        b+=l2.val;
        l2 = l2.next;
    }
    let c = (+a)+(+b)
    c = c.toString;
    

};