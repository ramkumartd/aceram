! function() {
    "use strict";
    class t {
        constructor() {
            this.callbacks = [], window.addEventListener("DOMContentLoaded", (() => this.onDOMContentLoaded()))
        }
        onDOMContentLoaded() {
            this.callbacks.sort(((t, e) => t.priority - e.priority)).forEach((({
                callback: t
            }) => t()))
        }
        runOnLoad(t) {
            "loading" === document.readyState ? this.callbacks.push(t) : t.callback()
        }
    }
    const e = async t => {
            const a = t.classList.contains("animated"),
                r = () => t.style.animationPlayState = "running";
            a && n(t) ? (await o(t), r()) : a ? r() : null != t.firstElementChild && e(t.firstElementChild)
        },
        n = t => {
            var e;
            const n = !!(null === (e = t.textContent) || void 0 === e ? void 0 : e.length),
                o = t.getElementsByTagName("img").length > 0,
                a = t.getElementsByTagName("video").length > 0;
            return o || n || a
        },
        o = async t => {
            const e = [],
                n = t.getElementsByTagName("img");
            for (let t = 0; t < n.length; t++) {
                const o = n.item(t);
                e.push(a(o))
            }
            const o = t.getElementsByTagName("video");
            for (let t = 0; t < o.length; t++) {
                const n = o.item(t);
                e.push(r(n))
            }
            return e.push(document.fonts.ready), Promise.all(e)
        },
        a = t => new Promise(((e, n) => {
            t.complete ? e() : (t.loading = "eager", t.onload = () => e(), t.onerror = () => n())
        })),
        r = t => new Promise(((e, n) => {
            t.readyState > 0 ? e() : (t.onloadeddata = () => e(), t.onerror = () => n())
        }));
    ! function(e, n = Number.MAX_VALUE) {
        var o;
        (window.canva_scriptExecutor = null !== (o = window.canva_scriptExecutor) && void 0 !== o ? o : new t).runOnLoad({
            callback: e,
            priority: n
        })
    }((() => {
        (() => {
            const t = document.querySelectorAll(".animation_container");
            if (0 === t.length) return;
            const n = new IntersectionObserver((t => {
                t.forEach((t => {
                    if (!t.isIntersecting) return;
                    const o = t.target;
                    e(o), n.unobserve(o)
                }))
            }), {
                threshold: .01
            });
            t.forEach((t => n.observe(t)))
        })()
    }))
}();