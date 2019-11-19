
import dialog_user from "./../ui/dialog_user.js"


$("#item-table").click(function(){
    // console.log("aaa")
    dialog_user.show()
})

$("#item-collection").click(function(){
    location.href = "./page_collection.html"
})