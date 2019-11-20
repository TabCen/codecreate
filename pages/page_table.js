

$("#testBtn").click(function(){
    console.log("存储数据成功")
    localStorage.setItem("author",{"a":"authore"})
})


$("#testBtn2").click(function(){
    let value = localStorage.getItem("author")
    alert(value)
0})





function clickTheBtn() {
    let zip = new JSZip()

    let str = getMfile("ABC")

    zip.file("Test.h", "aaaaaa")
    zip.file("Test.m", str)

    zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "code.zip");
    });
}

function getMfile(ClassName = "ABC") {
    return `
/** 这是一个 */
-(void)showLeaderView{
${ClassName} *leaderVC = [[${ClassName} alloc]init];
self.window.rootViewController = leaderVC;
[self addAnimation];
}
`
}