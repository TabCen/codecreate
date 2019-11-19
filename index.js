// MARK: 点击事件
function clickTheRightItem(message){
    // console.log(""+message)
    if(message == "main"){
        $("#right-content").attr("src","./pages/page_main.html")
    }else if(message == "ios"){
        $("#right-content").attr("src","./pages/page_ios.html")
    }
}