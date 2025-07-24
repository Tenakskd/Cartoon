(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8573], {
        7163: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/500", function() {
                return n(8007)
            }])
        },
        8007: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                s = n(2181),
                a = n(1387),
                i = n(1664),
                l = n.n(i);
            let c = () => (0, r.jsx)("div", {
                className: "container rounded-b-[6px] ",
                children: (0, r.jsx)(s.ZP, {
                    className: "pt-[90px] pb-[90px] text-white",
                    status: "500",
                    title: (0, r.jsx)("h1", {
                        className: "text-white text-[2rem]",
                        children: "500"
                    }),
                    subTitle: (0, r.jsx)("h3", {
                        className: "text-white text-[1rem]",
                        children: "Internal Server Error. Please try again later."
                    }),
                    extra: (0, r.jsx)(l(), {
                        href: "/top",
                        children: (0, r.jsx)(a.ZP, {
                            className: " bg-blue-800 h-[40px] px-[20px] text-white",
                            type: "primary",
                            children: "Home"
                        })
                    })
                })
            });
            t.default = c
        }
    },
    function(e) {
        e.O(0, [1664, 2181, 9774, 2888, 179], function() {
            return e(e.s = 7163)
        }), _N_E = e.O()
    }
]);
