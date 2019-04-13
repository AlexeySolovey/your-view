$(document).ready(function() {
    $("body").on("click", '[data-toggle="modal"]', function() {
        var t = $(this).data("target"),
            e = $(this).data("subject");
        null != e && $(t).find("#Feedbacks_subject").val(e);
        var a = $(this).data("title");
        null != a && $(t).find(".js_title").html(a);
        var i = $(this).data("file");
        "" != i && $(t).find(".js_file").attr("data-file", i);
        var d = $(this).data("desc");
        null != d && $(t).find(".js_desc").html(d);
        var l = $(this).data("button");
        null != l && $(t).find('[type="submit"]').html(l);
        var n = $(this).data("goal");
        null != n && $(t).find("form").attr("id", n);
        var s = $(this).data("redirect");
        null != s ? $(t).find("form").data("redirect", s) : $(t).find("form").data("redirect");
        var o = $(this).data("img");
        null != o && $(t).find(".img-responsive").attr("src", o), $(".main_modal").on("hidden.bs.modal", function() {
            null != $(this).data("title") && $(t).find(".js_title").html("")
        })
    }), $(document).on("submit", ".ajaxForm", function(t) {
        t.preventDefault();
        var n = $(this),
            s = (n.attr("id"), $(this).closest(".modal")),
            e = n.find('[name="Feedbacks[phone]"], [name="Reviews[phone]"]'),
            a = e.val().replace(/[^0-9]/gim, "").length;
        if (null == e || 12 == a) return $(this).ajaxSubmit({
            beforeSubmit: function(t, e, a) {
                n.find('[type="submit"]').prop("disabled", !0)
            },
            success: function(t, e, a, i) {
                if (n.find('[type="submit"]').prop("disabled", !1), "1" == t) {
                    window.dataLayer, void 0 !== window.dataLayer && dataLayer.push({
                        event: "Lead"
                    }), n[0].reset(), $(s).modal("hide");
                    var d = n.data("redirect"),
                        l = n.data("final");
                    null != d ? location.assign(d) : l ? $("." + l).modal("show") : null != $(s).find(".js_file").data("file") ? (console.log($(s).find(".js_file").data("file")), $(s).find(".js_file a").attr("href", $(s).find(".js_file").data("file")), $(s).find(".js_file a").trigger("click"), document.getElementById("js_file").click()) : $(".js_modal_result").modal("show")
                } else alert(t)
            }
        }), !1
    }), $(".send_to_form").on("click", function(t) {
        var e = $("#style_select").find(".jq-selectbox__select-text").html(),
            a = $("#material_select").find(".jq-selectbox__select-text").html(),
            i = $("#size_select").find(".jq-selectbox__select-text").html(),
            d = $(this).data("target");
        $(d).find("#hidden-door-style").val(e), $(d).find("#hidden-door-material").val(a), $(d).find("#hidden-door-size").val(i)
    })
});