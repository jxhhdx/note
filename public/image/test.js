const a = [
    { id: 1, pid: 1, name: 'test' },
    { id: 2, pid: 1, name: 'test2' }, 
    { id: 3, pid: 2, name: 'test3' },
    { id: 4, pid: 2, name: 'test4' },
];
const b = [
    { id: 1, name: "p1" }, 
    { id: 1, name: "p2" },
]
// const c = [
//     { id: 1, pid: 1, name: 'test', pname: "p1" }, 
//     { id: 2, pid: 1, name: 'test2', pname: "p1" },
//     { id: 3, pid: 2, name: 'test3', pname: "p2" }, 
//     { id: 4, pid: 2, name: 'test4', pname: "p2" },
// ]

(function ab(a, b){
    for(let i = 0; i < a.length; i ++ ){
        a[i].pname = b[a[i].pid]
    }
    return a
})()

