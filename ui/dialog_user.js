let dialog_user = {
    show: function(){
        let dialogstr =
        `
        <div style="position: absolute;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.2);display: flex;justify-content: center;align-items: center;">
            <div style="width: 736px;height: 421px;background-color: white;position: fixed;border-radius: 4px;box-sizing: border-box;box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
            </div>
        </div>
        `

        //jquery靠谱
        window.top.$("body").append(dialogstr)
    }
}

export default dialog_user;
