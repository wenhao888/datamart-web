'use strict';

class RespRender {
    render (res, context, additionView) {
        if (!additionView || !additionView.trim()) {
            res.render("layouts/empty", context);
        } else {
            res.render(additionView, context);
        }
    }
}

export default new RespRender();
