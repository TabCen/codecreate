

$("#testBtn").click(function(){
    console.log("存储数据成功")
    localStorage.setItem("author",{"a":"authore"})
})


$("#testBtn2").click(function(){
    let value = localStorage.getItem("author")
    alert(value)
0})
