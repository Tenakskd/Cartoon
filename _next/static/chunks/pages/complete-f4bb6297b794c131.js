(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8247], {
        2920: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/complete", function() {
                return a(7336)
            }])
        },
        9175: function(e, t, a) {
            "use strict";
            var n = a(5893);
            a(7294);
            var r = a(1664),
                i = a.n(r),
                o = a(3971),
                s = a.n(o);
            let l = e => {
                let {
                    total: t,
                    current_page: a,
                    per_page: r,
                    total_page: o,
                    slug: l
                } = e, c = [];
                for (let e = 1; e <= o; e++) 1 === e ? c.push(e) : e >= a - 1 && e <= a + 1 ? c.push(e) : e === o ? c.push(e) : (e === a - 2 || e === a + 2) && c.push("...");
                return (0, n.jsx)(n.Fragment, {
                    children: o > 1 && (0, n.jsxs)("div", {
                        className: "".concat(s().pagination, " hidden md:block my-[15px] px-[15px] pt-[15px] pb-[60px]"),
                        children: [a > 1 ? (0, n.jsx)(i(), {
                            className: "rounded-full inline-block !my-[2px] text-white flex-none p-2 text-xs font-medium ring-1 hover:bg-[#F8413B] ring-inset ring-gray-400/20",
                            href: "/".concat(l, "/page/").concat(Math.max(1, a - 1)),
                            children: "戻る"
                        }) : (0, n.jsx)("span", {
                            className: "rounded-full inline-block !my-[2px] text-white flex-none p-2 text-xs font-medium ring-1 ring-inset bg-gray-400/10 ring-gray-400/20 opacity-50 cursor-not-allowed",
                            children: "戻る"
                        }), c.map((e, t) => "..." === e ? (0, n.jsx)("span", {
                            className: "text-white inline-block !my-[2px]",
                            children: "..."
                        }, t) : (0, n.jsx)(i(), {
                            className: "".concat(a === e ? "bg-[#F8413B]" : "", " rounded-full inline-block !my-[2px] flex-none px-4 py-2 text-xs font-medium ring-1 ring-inset text-white hover:bg-[#F8413B] ring-gray-400/20"),
                            href: "".concat(1 === e ? "/".concat(l) : "/".concat(l, "/page/").concat(e)),
                            children: e
                        }, t)), a < o ? (0, n.jsx)(i(), {
                            className: "rounded-full inline-block !my-[2px] flex-none p-2 text-xs font-medium ring-1 ring-inset text-white hover:bg-[#F8413B] ring-gray-400/20",
                            href: "/".concat(l, "/page/").concat(Math.min(o, a + 1)),
                            children: "次へ"
                        }) : (0, n.jsx)("span", {
                            className: "rounded-full inline-block !my-[2px] flex-none p-2 text-xs font-medium ring-1 ring-inset text-white bg-gray-400/10 ring-gray-400/20 opacity-50 cursor-not-allowed",
                            children: "次へ"
                        })]
                    })
                })
            };
            t.Z = l
        },
        5116: function(e, t, a) {
            "use strict";
            var n = a(5893),
                r = a(4250),
                i = a(7294),
                o = a(9175),
                s = a(4222),
                l = a(1897),
                c = a(7071),
                d = a(9969),
                g = a(2229);
            let {
                useBreakpoint: u
            } = r.ZP, p = e => {
                var t, a;
                let {
                    data: r
                } = e, p = (0, i.useRef)(!1), [m, x] = (0, i.useState)(!1), [h, f] = (0, i.useState)({
                    latestMangaId: null,
                    results: [],
                    currentPage: 1,
                    totalPage: 1,
                    pagination: null
                }), [v, w] = (0, i.useState)(!1), [j, y] = (0, i.useState)(!1), b = u(), [_, P] = (0, i.useState)(6);
                (0, i.useEffect)(() => {
                    b.xl ? P(15) : b.md ? P(10) : P(6)
                }, [b]), (0, i.useEffect)(() => {
                    if (r) {
                        if (p.current) {
                            if (window.innerWidth < 768) {
                                var e;
                                (null === (e = r.results[0]) || void 0 === e ? void 0 : e.id) !== h.latestMangaId && y(!0)
                            } else f(e => {
                                var t;
                                return {
                                    ...e,
                                    latestMangaId: null === (t = r.results[0]) || void 0 === t ? void 0 : t.id,
                                    results: [{
                                        page: r.pagination.current_page,
                                        mangas: r.results
                                    }],
                                    currentPage: r.pagination.current_page,
                                    totalPage: r.pagination.total_page,
                                    pagination: r.pagination
                                }
                            })
                        } else p.current = !0, f(e => {
                            var t;
                            return {
                                ...e,
                                latestMangaId: null === (t = r.results[0]) || void 0 === t ? void 0 : t.id,
                                results: [{
                                    page: r.pagination.current_page,
                                    mangas: r.results
                                }],
                                currentPage: r.pagination.current_page,
                                totalPage: r.pagination.total_page,
                                pagination: r.pagination
                            }
                        })
                    } else w(!0)
                }, [r]), (0, i.useEffect)(() => {
                    let e = async e => {
                        try {
                            let t = await fetch(e);
                            if (!t.ok) throw Error("Failed to fetch data: ".concat(t.statusText));
                            let a = await t.json();
                            f(e => ({
                                ...e,
                                results: [...e.results, {
                                    page: a.pageProps.data.pagination.current_page,
                                    mangas: a.pageProps.data.results
                                }],
                                currentPage: a.pageProps.data.pagination.current_page
                            }))
                        } catch (e) {
                            console.error("Error fetching latest data:", e)
                        }
                    }, t = (0, d.P2)(async () => {
                        if (window.innerWidth > 768) return;
                        let t = window.scrollY,
                            a = window.innerHeight,
                            n = document.body.scrollHeight,
                            r = Math.max(600, .6 * a),
                            i = "/_next/data/".concat("GomuRaw5oOTEHU24", "/complete/page/").concat(h.currentPage + 1, ".json?ts=").concat(Date.now());
                        t + a >= n - r && !m && h.currentPage < h.totalPage ? (x(!0), await e(i), x(!1)) : setTimeout(() => {
                            let t = window.scrollY,
                                a = t + window.innerHeight >= document.body.scrollHeight - r;
                            a && !m && h.currentPage < h.totalPage && (x(!0), e(i).then(() => x(!1)))
                        }, 300)
                    }, 200);
                    return window.addEventListener("scroll", t), () => {
                        window.removeEventListener("scroll", t)
                    }
                }, [h.currentPage, h.totalPage]), (0, i.useEffect)(() => {
                    let e = new IntersectionObserver(e => {
                            e.forEach(e => {
                                if (e.isIntersecting) {
                                    if (m) return;
                                    let t = e.target.getAttribute("data-page-index");
                                    if (t) {
                                        let e = "";
                                        e = "1" === t ? "/complete" : "/complete/page/".concat(t), window.location.pathname !== e && history.replaceState(null, "", e)
                                    }
                                }
                            })
                        }, {
                            root: null,
                            rootMargin: "0px 0px -50% 0px",
                            threshold: 0
                        }),
                        t = document.querySelectorAll("[data-page-index]");
                    return t.forEach(t => e.observe(t)), () => {
                        t.forEach(t => e.unobserve(t)), e.disconnect()
                    }
                }, [h.results.length]);
                let E = async () => {
                    y(!1);
                    try {
                        let e = "/_next/data/".concat("GomuRaw5oOTEHU24", "/complete.json?ts=").concat(Date.now()),
                            t = await fetch(e);
                        if (!t.ok) throw Error("Failed to fetch data: ".concat(t.statusText));
                        let a = await t.json();
                        f(e => {
                            var t;
                            return {
                                ...e,
                                latestMangaId: null === (t = a.pageProps.data.results[0]) || void 0 === t ? void 0 : t.id,
                                results: [{
                                    page: a.pageProps.data.pagination.current_page,
                                    mangas: a.pageProps.data.results
                                }],
                                currentPage: a.pageProps.data.pagination.current_page,
                                totalPage: a.pageProps.data.pagination.total_page,
                                pagination: a.pageProps.data.pagination
                            }
                        })
                    } catch (e) {
                        console.error("Error fetching latest data:", e)
                    }
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                };
                return (0, n.jsxs)("div", {
                    className: "container min-h-[calc(100vh-120px)]",
                    children: [(0, n.jsx)("div", {
                        className: "flex md:items-center md:justify-between flex-col md:flex-row py-2",
                        children: (0, n.jsx)("div", {
                            className: "flex items-center justify-between pb-2",
                            children: (0, n.jsx)("h1", {
                                className: "font-semibold leading-7 text-white border-b-[2px] border-[#F8413B] pb-[5px]",
                                children: "完結"
                            })
                        })
                    }), v ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2",
                            children: Array.from({
                                length: _
                            }).map((e, t) => (0, n.jsx)("div", {
                                className: "animate-pulse bg-gray-700 rounded-md min-h-[240px] md:min-h-[250px]"
                            }, t))
                        })
                    }) : (null == h ? void 0 : null === (t = h.results) || void 0 === t ? void 0 : t.length) > 0 ? (0, n.jsxs)("div", {
                        className: "divide-y divide-white/5",
                        children: [null == h ? void 0 : null === (a = h.results) || void 0 === a ? void 0 : a.map((e, t) => {
                            var a;
                            return (0, n.jsx)("div", {
                                "data-page-index": (null == e ? void 0 : e.page) || 1,
                                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 md:gap-2 mb-[0.5rem] md:mb-0",
                                children: null === (a = e.mangas) || void 0 === a ? void 0 : a.map((e, a) => (0, n.jsx)(s.Z, {
                                    index: t,
                                    manga: e
                                }, "".concat(e.id, "-").concat(a)))
                            }, t)
                        }), m && (0, n.jsx)("div", {
                            className: "flex-col flex items-center justify-center py-20",
                            children: (0, n.jsx)(g.Z, {
                                className: "text-white text-[2rem] mt-5"
                            })
                        })]
                    }) : (0, n.jsx)("div", {
                        className: "text-white",
                        children: "データなし"
                    }), (0, n.jsx)(o.Z, {
                        ...h.pagination,
                        slug: "complete"
                    }), j && (0, n.jsx)(c.Z, {
                        refreshPage: E
                    }), (0, n.jsx)(l.default, {})]
                })
            };
            t.Z = p
        },
        7336: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return c
                }
            });
            var n = a(5893),
                r = a(1163),
                i = a(7294),
                o = a(5116),
                s = a(4910);
            let l = e => {
                let {
                    data: t
                } = e, a = (0, r.useRouter)(), [l, c] = (0, i.useState)(!1), [d, g] = (0, i.useState)(t), {
                    historyStack: u
                } = (0, s.vQ)();
                (0, i.useEffect)(() => {
                    c(!0)
                }, []);
                let p = async e => {
                    try {
                        let t = "/_next/data/".concat("GomuRaw5oOTEHU24").concat("" === e || "/" === e ? "/index" : e, ".json?ts=").concat(Date.now()),
                            a = await fetch(t);
                        if (!a.ok) throw Error("Failed to fetch data: ".concat(a.statusText));
                        let n = await a.json();
                        g(n.pageProps.data)
                    } catch (e) {
                        console.error("Error fetching latest data:", e)
                    }
                };
                return (0, i.useEffect)(() => {
                    let e = async e => {
                        await p(e)
                    };
                    return a.events.on("routeChangeComplete", e), () => {
                        a.events.off("routeChangeComplete", e)
                    }
                }, [a.events]), (0, n.jsx)("div", {
                    children: l && d ? (0, n.jsx)(o.Z, {
                        data: d
                    }) : (0, n.jsx)("div", {
                        className: "pb-[30px] md:pb-[60px] m-h-[600px]"
                    })
                })
            };
            var c = !0;
            t.default = l
        },
        3971: function(e) {
            e.exports = {
                pagination: "custom-pagination1_pagination__TYMj0",
                active: "custom-pagination1_active__BAG1p"
            }
        }
    },
    function(e) {
        e.O(0, [1664, 2368, 5675, 8173, 9774, 2888, 179], function() {
            return e(e.s = 2920)
        }), _N_E = e.O()
    }
]);
