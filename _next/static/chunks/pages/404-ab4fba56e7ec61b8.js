(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2197, 5353, 1897], {
        9647: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(7462),
                o = r(7294),
                a = {
                    icon: {
                        tag: "svg",
                        attrs: {
                            viewBox: "64 64 896 896",
                            focusable: "false"
                        },
                        children: [{
                            tag: "path",
                            attrs: {
                                d: "M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                            }
                        }]
                    },
                    name: "heart",
                    theme: "outlined"
                },
                c = r(2135),
                s = o.forwardRef(function(e, t) {
                    return o.createElement(c.Z, (0, n.Z)({}, e, {
                        ref: t,
                        icon: a
                    }))
                })
        },
        8671: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/404", function() {
                return r(7822)
            }])
        },
        2536: function(e, t, r) {
            "use strict";
            r.d(t, {
                FL: function() {
                    return m
                },
                Ir: function() {
                    return i
                },
                N5: function() {
                    return y
                },
                NK: function() {
                    return n
                },
                Ni: function() {
                    return f
                },
                RV: function() {
                    return c
                },
                TH: function() {
                    return x
                },
                Ww: function() {
                    return v
                },
                a3: function() {
                    return h
                },
                c7: function() {
                    return s
                },
                ck: function() {
                    return g
                },
                eK: function() {
                    return a
                },
                fA: function() {
                    return w
                },
                lB: function() {
                    return d
                },
                li: function() {
                    return u
                },
                tc: function() {
                    return o
                },
                vj: function() {
                    return p
                },
                xG: function() {
                    return l
                }
            });
            let n = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/update-view?manga_id=").concat(e.manga_id, "&chapter_id=").concat(e.chapter_id), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, o = async (e, t) => {
                try {
                    let r = await fetch("".concat("https://api.mangaruu.xyz", "/rate/").concat(e), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                rate: t
                            })
                        }),
                        n = await r.json();
                    return n
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, a = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/report"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, c = async (e, t) => {
                try {
                    let r = await fetch("".concat("https://api.mangaruu.xyz", "/image-report"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                image_id: e,
                                path: t
                            })
                        }),
                        n = await r.json();
                    return n
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, s = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/store-user"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, i = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/add-comment"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, l = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/comment/").concat(e, "/like"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, u = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "DESC",
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8;
                try {
                    let a = await fetch("".concat("https://api.mangaruu.xyz", "/comments?page=").concat(r, "&per_page=").concat(o, "&order=").concat(n, "&manga_id=").concat(e, "&chapter_id=").concat(t), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        c = await a.json();
                    return c
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, p = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/sync-favorite"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, d = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/favorites?page=").concat(e.page, "&per_page=").concat(e.per_page, "&googleId=").concat(e.googleId), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, h = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/favorite"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, f = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/favorite/remove"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, y = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/profile/").concat(e), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, g = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/profile"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, m = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/subscribed"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, x = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                try {
                    let n = await fetch("".concat("https://api.mangaruu.xyz", "/notifications?per_page=").concat(r, "&googleId=").concat(e, "&firstId=").concat(t), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        o = await n.json();
                    return o
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, w = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/update-read-notification/").concat(e), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }, v = async e => {
                try {
                    let t = await fetch("".concat("https://api.mangaruu.xyz", "/badge-count/").concat(e), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        r = await t.json();
                    return r
                } catch (e) {
                    return console.log(e), {
                        success: !1,
                        error: "Server error"
                    }
                }
            }
        },
        1897: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(5893),
                o = r(1664),
                a = r.n(o),
                c = r(3403),
                s = r(3923),
                i = r(9647),
                l = r(1163),
                u = r(7294),
                p = r(9123),
                d = r(2536),
                h = r(5152),
                f = r.n(h),
                y = r(2100);
            let g = f()(() => r.e(1179).then(r.bind(r, 2722)), {
                loadableGenerated: {
                    webpack: () => [2722]
                }
            });
            f()(() => Promise.all([r.e(5265), r.e(732)]).then(r.bind(r, 732)), {
                loadableGenerated: {
                    webpack: () => [732]
                }
            });
            let m = f()(() => Promise.all([r.e(5675), r.e(5265), r.e(1707), r.e(9220), r.e(38), r.e(3144)]).then(r.bind(r, 38)), {
                    loadableGenerated: {
                        webpack: () => [38]
                    }
                }),
                x = () => {
                    let e = (0, l.useRouter)(),
                        [t, r] = (0, u.useState)(!1),
                        [o, h] = (0, u.useState)(!1),
                        [f, x] = (0, u.useState)(!1),
                        {
                            permission: w,
                            isSupported: v,
                            badgeCount: j
                        } = (0, y.O)(),
                        [S, N] = (0, u.useState)(0);
                    (0, u.useEffect)(() => {
                        N(j)
                    }, [j]);
                    let [b, C] = (0, u.useState)("/top"), {
                        user: k
                    } = (0, p.a)(), T = () => {
                        k ? e.push("/history") : (C("/history"), r(!0))
                    }, O = async t => {
                        await (0, d.c7)(t), r(!1), e.push(b)
                    }, _ = () => {
                        k ? e.push("/profile") : (C("/profile"), r(!0))
                    }, [P, E] = (0, u.useState)(!1), z = () => {
                        window.scrollY > 500 ? E(!0) : E(!1)
                    }, I = () => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    };
                    return (0, u.useEffect)(() => (window.addEventListener("scroll", z), () => {
                        window.removeEventListener("scroll", z)
                    }), []), (0, n.jsxs)("div", {
                        className: "fixed block md:hidden bottom-safe-bottom border-t box-shadow bg-gray-900 text-white w-full border-white/5 z-[100] left-0 px-[8px] py-[2px] rounded-t-2xl",
                        children: [(0, n.jsxs)("div", {
                            className: "grid-cols-5 grid gap-0",
                            children: [(0, n.jsx)("div", {
                                className: "px-[0px] flex flex-col items-center justify-center py-[5px] rounded-2xl cursor-pointer ",
                                children: P ? (0, n.jsxs)("svg", {
                                    onClick: I,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "35",
                                    height: "35",
                                    viewBox: "-0.5 0 25 25",
                                    fill: "none",
                                    children: [(0, n.jsx)("path", {
                                        d: "M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z",
                                        stroke: "#fff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0, n.jsx)("path", {
                                        d: "M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599",
                                        stroke: "#fff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                }) : (0, n.jsxs)(a(), {
                                    className: "flex flex-col items-center justify-center",
                                    href: "/top",
                                    children: [(0, n.jsx)(c.Z, {
                                        className: "text-[1.2rem]"
                                    }), (0, n.jsx)("span", {
                                        className: "text-[12px] mt-[2px]",
                                        children: "トップ"
                                    })]
                                })
                            }), (0, n.jsxs)("div", {
                                onClick: T,
                                className: "px-[0px] flex  flex-col items-center justify-center py-[5px] rounded-2xl cursor-pointer ",
                                children: [(0, n.jsx)(s.Z, {
                                    className: "text-[1.2rem]"
                                }), (0, n.jsx)("span", {
                                    className: "text-[12px] mt-[2px]",
                                    children: "既読"
                                })]
                            }), (0, n.jsxs)("div", {
                                onClick: () => {
                                    document.body.style.overflow = "hidden", x(!0)
                                },
                                className: "px-[0px] flex  flex-col items-center justify-center py-[5px] rounded-2xl cursor-pointer ",
                                children: [(0, n.jsx)("svg", {
                                    fill: "currentColor",
                                    viewBox: "0 0 48 48",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "pointer-events-none inset-y-0 h-full w-5 text-gray-300",
                                    children: (0, n.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M21.83 7.5a14.34 14.34 0 1 1 0 28.68 14.34 14.34 0 0 1 0-28.68Zm0-4a18.33 18.33 0 1 0 11.48 32.64l8.9 8.9a1 1 0 0 0 1.42 0l1.4-1.41a1 1 0 0 0 0-1.42l-8.89-8.9A18.34 18.34 0 0 0 21.83 3.5Z"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "text-[12px] mt-[2px]",
                                    children: "サーチ"
                                })]
                            }), (0, n.jsxs)(a(), {
                                href: "/favorite",
                                className: "px-[0px] flex  flex-col items-center justify-center py-[5px] rounded-2xl cursor-pointer ",
                                children: [(0, n.jsx)(i.Z, {
                                    className: "text-[1.2rem]"
                                }), (0, n.jsx)("span", {
                                    className: "text-[12px] mt-[2px]",
                                    children: "お気に入り"
                                })]
                            }), (0, n.jsxs)("div", {
                                onClick: _,
                                className: "px-[0px] flex  flex-col items-center justify-center py-[5px] rounded-2xl cursor-pointer ",
                                children: [(0, n.jsx)("img", {
                                    alt: "user",
                                    className: "w-[20px] h-[20px] rounded-full",
                                    src: (null == k ? void 0 : k.avatar) || "/icons/user.png"
                                }), (0, n.jsx)("span", {
                                    className: "text-[12px] mt-[2px]",
                                    children: "マイページ"
                                })]
                            })]
                        }), t && (0, n.jsx)(g, {
                            showLogin: t,
                            onLogined: O,
                            onCancel: () => r(!1)
                        }), f && (0, n.jsx)(m, {
                            modalSearch: f,
                            placement: "right",
                            onCancel: () => {
                                x(!1), document.body.style.overflow = "auto"
                            }
                        })]
                    })
                };
            t.default = x
        },
        2100: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return i
                }
            });
            var n = r(2536),
                o = r(9483),
                a = r.n(o),
                c = r(7294);
            r(9969);
            let s = e => {
                    let t = "=".repeat((4 - e.length % 4) % 4),
                        r = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
                        n = atob(r),
                        o = new Uint8Array(n.length);
                    for (let e = 0; e < n.length; ++e) o[e] = n.charCodeAt(e);
                    return o
                },
                i = () => {
                    let [e, t] = (0, c.useState)(0), [r, o] = (0, c.useState)(!1), [i, l] = (0, c.useState)("default");
                    (0, c.useEffect)(() => {
                        let e = () => {
                            "serviceWorker" in navigator ? "Notification" in window ? "PushManager" in window ? (l(Notification.permission), o(!0), "default" === Notification.permission && (a().setItem("endpoint", null), a().setItem("public_key", null), a().setItem("auth_token", null), localStorage.setItem("badgeCount", null)), navigator.serviceWorker.addEventListener("message", e => {
                                console.log("Received message from service worker:", e.data), "badgeCount" === e.data.type && (localStorage.setItem("badgeCount", e.data.data), t(e.data.data))
                            })) : console.log("No Push API Support!") : console.log("No Notification Support!") : console.log("No Service Worker support!")
                        };
                        return window.addEventListener("load", e()), () => {
                            window.removeEventListener("load", e())
                        }
                    }, []);
                    let u = async e => {
                        try {
                            await navigator.serviceWorker.register("/service-worker.js", {
                                scope: "/"
                            });
                            let t = await navigator.serviceWorker.ready;
                            console.log("Service Worker ready");
                            let r = await t.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: s("BFk8OpdZGe9DeIoclNjYEFcWIuLj4bZMTaMFvsNbxJvMrIKjWR3XuhSClspWeJidZrEQnSr7DQfSqZJ0sdmVO48")
                                }),
                                o = r.toJSON();
                            a().setItem("endpoint", o.endpoint), a().setItem("public_key", o.keys.p256dh), a().setItem("auth_token", o.keys.auth), await (0, n.FL)({
                                endpoint: o.endpoint,
                                public_key: o.keys.p256dh,
                                auth_token: o.keys.auth,
                                googleId: (null == e ? void 0 : e.googleId) || null
                            })
                        } catch (e) {
                            console.error("Register Service Worker failed:", e)
                        }
                    }, p = async e => {
                        if (!("Notification" in window)) {
                            alert("このブラウザは通知に対応していません。別のブラウザをご利用ください。");
                            return
                        }
                        try {
                            let t = await Notification.requestPermission();
                            l(t), "granted" === t ? u(e) : alert("「現在、お使いのブラウザは通知をブロックしています。鍵のアイコンをクリックして『許可』を選択してください！」")
                        } catch (e) {
                            console.error("Permission error:", e)
                        }
                    };
                    return {
                        badgeCount: e,
                        permission: i,
                        isSupported: r,
                        handlePermission: p
                    }
                }
        },
        7822: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r(5893),
                o = r(1664),
                a = r.n(o),
                c = r(2181),
                s = r(1387);

            function i() {
                return (0, n.jsx)("div", {
                    className: "flex flex-col items-center justify-center min-h-[calc(100vh-120px)] overflow-hidden",
                    children: (0, n.jsx)(c.ZP, {
                        status: "404",
                        title: "404",
                        subTitle: (0, n.jsx)("p", {
                            className: "mb-10 text-lg font-light text-gray-300",
                            children: "ページが見つかりません"
                        }),
                        extra: (0, n.jsx)(a(), {
                            href: "/top",
                            children: (0, n.jsx)(s.ZP, {
                                type: "primary",
                                className: "bg-[#F8413B]",
                                children: "トップ"
                            })
                        })
                    })
                })
            }
            r(1897)
        }
    },
    function(e) {
        e.O(0, [1664, 2368, 2181, 9774, 2888, 179], function() {
            return e(e.s = 8671)
        }), _N_E = e.O()
    }
]);
