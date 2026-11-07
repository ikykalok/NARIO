(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/motion/Counter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Counter",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Counter({ value, className, prefix = "", suffix = "" }) {
    _s();
    const target = typeof value === "number" ? value : parseFloat(value) || 0;
    const isInteger = Number.isInteger(target);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(target.toLocaleString("en-IN"));
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (prefersReducedMotion) {
                setDisplayValue(isInteger ? target.toLocaleString("en-IN") : target.toLocaleString("en-IN", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                }));
                return;
            }
            const observer = new IntersectionObserver({
                "Counter.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        const counterObj = {
                            val: 0
                        };
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(counterObj, {
                            val: target,
                            duration: 1.8,
                            ease: "power3.out",
                            onUpdate: {
                                "Counter.useEffect": ()=>{
                                    const current = counterObj.val;
                                    const formatted = isInteger ? Math.round(current).toLocaleString("en-IN") : current.toLocaleString("en-IN", {
                                        minimumFractionDigits: 1,
                                        maximumFractionDigits: 1
                                    });
                                    setDisplayValue(formatted);
                                }
                            }["Counter.useEffect"]
                        });
                        observer.unobserve(el);
                    }
                }
            }["Counter.useEffect"], {
                threshold: 0.85
            });
            observer.observe(el);
            return ({
                "Counter.useEffect": ()=>observer.disconnect()
            })["Counter.useEffect"];
        }
    }["Counter.useEffect"], [
        target,
        isInteger,
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            prefix,
            displayValue,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/motion/Counter.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Counter, "LlqVvlADwJftboH/GCWszJe4nWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Counter;
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/motion/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SmoothScroll({ children }) {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (prefersReducedMotion) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                return;
            }
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.15,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 1.4,
                wheelMultiplier: 0.95
            });
            window.__lenis = lenis;
            document.documentElement.classList.add("lenis");
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            const tickerCb = {
                "SmoothScroll.useEffect.tickerCb": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["SmoothScroll.useEffect.tickerCb"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tickerCb);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.lagSmoothing(0);
            // Intercept clicks on a[href^="#"]
            const handleHashClick = {
                "SmoothScroll.useEffect.handleHashClick": (e)=>{
                    const target = e.target.closest('a[href^="#"]');
                    if (!target) return;
                    const href = target.getAttribute("href");
                    if (!href || href === "#") return;
                    const element = document.querySelector(href);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element, {
                            offset: 0,
                            duration: 1.6
                        });
                    }
                }
            }["SmoothScroll.useEffect.handleHashClick"];
            document.addEventListener("click", handleHashClick);
            // Refresh ScrollTrigger after 300ms and on fonts ready
            const timer = setTimeout({
                "SmoothScroll.useEffect.timer": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["SmoothScroll.useEffect.timer"], 300);
            if (document.fonts) {
                document.fonts.ready.then({
                    "SmoothScroll.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                    }
                }["SmoothScroll.useEffect"]);
            }
            // Width-only resize observer (ignore height or changes < 2px, debounce 250ms)
            let lastWidth = window.innerWidth;
            let resizeTimer = null;
            const handleResize = {
                "SmoothScroll.useEffect.handleResize": ()=>{
                    const currentWidth = window.innerWidth;
                    if (Math.abs(currentWidth - lastWidth) >= 2) {
                        lastWidth = currentWidth;
                        if (resizeTimer) clearTimeout(resizeTimer);
                        resizeTimer = setTimeout({
                            "SmoothScroll.useEffect.handleResize": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                            }
                        }["SmoothScroll.useEffect.handleResize"], 250);
                    }
                }
            }["SmoothScroll.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    clearTimeout(timer);
                    if (resizeTimer) clearTimeout(resizeTimer);
                    document.removeEventListener("click", handleHashClick);
                    window.removeEventListener("resize", handleResize);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tickerCb);
                    lenis.destroy();
                    document.documentElement.classList.remove("lenis");
                    delete window.__lenis;
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], [
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion/SmoothScroll.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
_s(SmoothScroll, "UfxMXTFadrHY4QaoUFnFXCFysSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/SipFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipFooter",
    ()=>SipFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/FluteEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/SipLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/PackerLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SipFooter() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isJoined, setIsJoined] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email) return;
        setIsJoined(true);
    };
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "sip-footer",
        "data-theme": "dark",
        className: "relative z-20 bg-[var(--color-ink)] text-[var(--color-ivory)] pt-20 md:pt-28 pb-12 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full -translate-y-[98%] text-[var(--color-ink)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FluteEdge"], {}, void 0, false, {
                    fileName: "[project]/components/sip/SipFooter.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sip/SipFooter.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x max-w-7xl mx-auto flex flex-col gap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "sip-newsletter",
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow text-[var(--color-grey)]",
                                        children: "Sip Club"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "display-sm max-w-[24ch]",
                                        children: "15% off your first crate, and first sips of new flavours."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center border-b border-white/30 focus-within:border-[var(--color-kraft)] pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    disabled: isJoined,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "Enter your email",
                                                    required: true,
                                                    className: "w-full bg-transparent text-base md:text-lg outline-none placeholder:text-white/30 text-[var(--color-ivory)] font-sans"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/SipFooter.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isJoined,
                                                    className: "font-mono text-sm tracking-[0.14em] uppercase text-[var(--color-kraft)] hover:text-white transition-colors cursor-pointer pl-4 shrink-0 font-medium disabled:opacity-50",
                                                    children: isJoined ? "Joined ✓" : "Join"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/SipFooter.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/SipFooter.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        isJoined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs text-[var(--color-kraft)] mt-1",
                                            children: "You're on the list."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/SipFooter.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/SipFooter.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipFooter.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-12 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-[var(--color-grey)]",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipNav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "hover:text-[var(--color-kraft)] transition-colors",
                                                children: item.label
                                            }, item.label, false, {
                                                fileName: "[project]/components/sip/SipFooter.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-[var(--color-grey)]",
                                        children: "Flavours"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#sip-flavours",
                                                className: "hover:text-[var(--color-kraft)] transition-colors",
                                                children: f.name
                                            }, f.id, false, {
                                                fileName: "[project]/components/sip/SipFooter.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-[var(--color-grey)]",
                                        children: "Cartons by"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PackerMark"], {
                                                className: "w-8 h-7 text-[var(--color-kraft)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/SipFooter.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display font-semibold text-base",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs tracking-wider text-[var(--color-grey)]",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].tagline
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/SipFooter.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-sm text-[var(--color-grey)] text-xs max-w-[34ch] mt-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].positioning
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipFooter.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipFooter.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full flex items-center justify-between select-none pointer-events-none opacity-6 my-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-bold text-[14.5vw] leading-none tracking-[-0.04em] text-[var(--color-ivory)]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark
                            }, void 0, false, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[12vw] h-[12vw] shrink-0 text-[var(--color-ivory)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipMark"], {
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/SipFooter.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipFooter.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    year,
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].name,
                                    ". ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].product,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Packed in a ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].name,
                                    " carton"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipFooter.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipFooter.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/SipFooter.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/SipFooter.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(SipFooter, "35Y2dqWLhQ6dYuYZM/GJjuUrGKQ=");
_c = SipFooter;
var _c;
__turbopack_context__.k.register(_c, "SipFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/SipIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipIntro",
    ()=>SipIntro,
    "onIntroDone",
    ()=>onIntroDone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/SipLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/textures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function onIntroDone(fn) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.__sipIntroDone) {
        fn();
    } else {
        window.addEventListener("sip:intro-done", fn, {
            once: true
        });
    }
}
function SipIntro() {
    _s();
    const [shownPercent, setShownPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLifting, setIsLifting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUnmounted, setIsUnmounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const veilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipIntro.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (prefersReducedMotion) {
                window.__sipIntroDone = true;
                window.dispatchEvent(new CustomEvent("sip:intro-done"));
                setIsUnmounted(true);
                return;
            }
            // Stop Lenis & scroll to top
            if (window.__lenis) {
                window.__lenis.stop();
            }
            window.scrollTo(0, 0);
            const startTime = performance.now();
            let target = 12;
            let current = 0;
            let fontsReady = false;
            let sceneReady = false;
            let hasTriggeredLift = false;
            let rafId;
            // Check fonts ready
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFontsReady"])().then({
                "SipIntro.useEffect": ()=>{
                    fontsReady = true;
                }
            }["SipIntro.useEffect"]);
            const onSceneReady = {
                "SipIntro.useEffect.onSceneReady": ()=>{
                    sceneReady = true;
                }
            }["SipIntro.useEffect.onSceneReady"];
            window.addEventListener("sip:scene-ready", onSceneReady, {
                once: true
            });
            const animate = {
                "SipIntro.useEffect.animate": (now)=>{
                    const elapsed = now - startTime;
                    if (sceneReady || elapsed >= 4500) {
                        target = 100;
                    } else {
                        let base = 20 + elapsed / 60;
                        if (fontsReady) {
                            base = Math.max(55, base);
                        }
                        target = Math.min(92, base);
                    }
                    // Ease toward target by 12% per frame
                    current += (target - current) * 0.12;
                    setShownPercent(Math.floor(current));
                    if (current >= 99.2 && elapsed >= 900 && !hasTriggeredLift) {
                        hasTriggeredLift = true;
                        setShownPercent(100);
                        setIsLifting(true);
                        // At 380ms restart Lenis and fire "sip:intro-done"
                        setTimeout({
                            "SipIntro.useEffect.animate": ()=>{
                                window.__sipIntroDone = true;
                                if (window.__lenis) {
                                    window.__lenis.start();
                                }
                                window.dispatchEvent(new CustomEvent("sip:intro-done"));
                            }
                        }["SipIntro.useEffect.animate"], 380);
                        // Unmount at 1.1s
                        setTimeout({
                            "SipIntro.useEffect.animate": ()=>{
                                setIsUnmounted(true);
                            }
                        }["SipIntro.useEffect.animate"], 1100);
                        return;
                    }
                    rafId = requestAnimationFrame(animate);
                }
            }["SipIntro.useEffect.animate"];
            rafId = requestAnimationFrame(animate);
            return ({
                "SipIntro.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    window.removeEventListener("sip:scene-ready", onSceneReady);
                }
            })["SipIntro.useEffect"];
        }
    }["SipIntro.useEffect"], [
        prefersReducedMotion
    ]);
    if (isUnmounted) return null;
    const countStr = shownPercent.toString().padStart(3, "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        ref: veilRef,
        "aria-hidden": "true",
        className: `fixed inset-0 z-[90] bg-[var(--color-ink)] text-[var(--color-ivory)] flex items-center justify-center select-none transition-all duration-[850ms] ${isLifting ? "[clip-path:inset(0_0_100%_0)] pointer-events-none" : "[clip-path:inset(0_0_0_0)]"}`,
        style: {
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: `flex flex-col items-center gap-6 transition-all duration-700 ease-[var(--ease-expo)] ${isLifting ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipMark"], {
                        animated: true,
                        className: "w-full h-full text-[var(--color-ivory)]"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/SipIntro.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sip/SipIntro.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-display font-semibold text-2xl md:text-3xl tracking-[0.18em]",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark
                }, void 0, false, {
                    fileName: "[project]/components/sip/SipIntro.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-ivory)]/70",
                    children: [
                        countStr,
                        " — opening the coconut"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/SipIntro.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sip/SipIntro.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/SipIntro.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(SipIntro, "bTr1tasYYEciO7C0QkWrUJvV+Po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SipIntro;
var _c;
__turbopack_context__.k.register(_c, "SipIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/SipNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipNav",
    ()=>SipNav,
    "addToCrate",
    ()=>addToCrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/SipLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/PackerLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function addToCrate(n = 1) {
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent("sip:crate", {
            detail: {
                count: n
            }
        }));
    }
}
function SipNav() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [crateCount, setCrateCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isBumping, setIsBumping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track scroll > 40
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipNav.useEffect": ()=>{
            const handleScroll = {
                "SipNav.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 40);
                }
            }["SipNav.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "SipNav.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["SipNav.useEffect"];
        }
    }["SipNav.useEffect"], []);
    // Listen for crate events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipNav.useEffect": ()=>{
            const onCrateAdd = {
                "SipNav.useEffect.onCrateAdd": ()=>{
                    setCrateCount({
                        "SipNav.useEffect.onCrateAdd": (prev)=>prev + 1
                    }["SipNav.useEffect.onCrateAdd"]);
                    setIsBumping(true);
                    setTimeout({
                        "SipNav.useEffect.onCrateAdd": ()=>{
                            setIsBumping(false);
                        }
                    }["SipNav.useEffect.onCrateAdd"], 450);
                }
            }["SipNav.useEffect.onCrateAdd"];
            window.addEventListener("sip:crate", onCrateAdd);
            return ({
                "SipNav.useEffect": ()=>window.removeEventListener("sip:crate", onCrateAdd)
            })["SipNav.useEffect"];
        }
    }["SipNav.useEffect"], []);
    // Detect dark sections via ScrollTrigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipNav.useEffect": ()=>{
            const darkSections = document.querySelectorAll('[data-theme="dark"]');
            const triggers = [];
            darkSections.forEach({
                "SipNav.useEffect": (section)=>{
                    const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: section,
                        start: "top 44px",
                        end: "bottom 44px",
                        onEnter: {
                            "SipNav.useEffect.st": ()=>setIsDark(true)
                        }["SipNav.useEffect.st"],
                        onLeave: {
                            "SipNav.useEffect.st": ()=>setIsDark(false)
                        }["SipNav.useEffect.st"],
                        onEnterBack: {
                            "SipNav.useEffect.st": ()=>setIsDark(true)
                        }["SipNav.useEffect.st"],
                        onLeaveBack: {
                            "SipNav.useEffect.st": ()=>setIsDark(false)
                        }["SipNav.useEffect.st"]
                    });
                    triggers.push(st);
                }
            }["SipNav.useEffect"]);
            return ({
                "SipNav.useEffect": ()=>{
                    triggers.forEach({
                        "SipNav.useEffect": (st)=>st.kill()
                    }["SipNav.useEffect"]);
                }
            })["SipNav.useEffect"];
        }
    }["SipNav.useEffect"], []);
    // Handle menu open / close Lenis stop & keyboard Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipNav.useEffect": ()=>{
            if (isMenuOpen) {
                if (window.__lenis) window.__lenis.stop();
                document.body.style.overflow = "hidden";
            } else {
                if (window.__lenis) window.__lenis.start();
                document.body.style.overflow = "";
            }
            const handleKeyDown = {
                "SipNav.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape" && isMenuOpen) {
                        setIsMenuOpen(false);
                    }
                }
            }["SipNav.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "SipNav.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["SipNav.useEffect"];
        }
    }["SipNav.useEffect"], [
        isMenuOpen
    ]);
    const textColor = isMenuOpen || isDark ? "text-[var(--color-ivory)]" : "text-[var(--color-ink)]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[var(--gutter)] transition-all duration-500 ease-[var(--ease-expo)] select-none ${isScrolled ? "h-[64px] backdrop-blur-md bg-transparent" : "h-[88px]"} ${textColor}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipLogo"], {
                        compact: isScrolled
                    }, void 0, false, {
                        fileName: "[project]/components/sip/SipNav.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#sip-flavours",
                                "data-cursor": "cta",
                                className: `flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 transition-all duration-300 hover:border-current ${isBumping ? "scale-110" : "scale-100"}`,
                                "aria-label": `View crate: ${crateCount} cans added`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 20 20",
                                        className: "w-4 h-4 fill-none stroke-current stroke-[1.6]",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 5l7-3 7 3v10l-7 3-7-3V5z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/SipNav.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10 2v16M3 5l7 4 7-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/SipNav.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/SipNav.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-semibold tracking-wider",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(crateCount)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipNav.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipNav.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                "data-cursor": "cta",
                                "aria-expanded": isMenuOpen,
                                "aria-label": isMenuOpen ? "Close menu" : "Open menu",
                                className: "flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-current/20 transition-all duration-300 hover:border-current cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-medium tracking-[0.12em] uppercase",
                                        children: isMenuOpen ? "Close" : "Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/SipNav.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-4 h-3 flex flex-col justify-center gap-[5px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block w-full h-[1.5px] bg-current transition-all duration-500 ease-[var(--ease-expo)] ${isMenuOpen ? "rotate-45 translate-y-[3px]" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/SipNav.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block w-full h-[1.5px] bg-current transition-all duration-500 ease-[var(--ease-expo)] ${isMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/SipNav.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/SipNav.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/SipNav.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipNav.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/SipNav.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuRef,
                "data-lenis-prevent": true,
                className: `fixed inset-0 z-45 bg-[var(--color-ink)] text-[var(--color-ivory)] px-[var(--gutter)] pt-[100px] pb-12 flex flex-col justify-between overflow-y-auto transition-all duration-700 ease-[var(--ease-expo)] ${isMenuOpen ? "[clip-path:inset(0_0_0_0)] pointer-events-auto" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "lg:col-span-8 flex flex-col gap-4 md:gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipNav"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setIsMenuOpen(false),
                                    className: "group flex items-baseline gap-4 md:gap-8 font-display font-medium text-[clamp(2.6rem,8vw,6.5rem)] leading-none text-[var(--color-ivory)] hover:text-[var(--color-kraft)] transition-colors duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs md:text-sm tracking-[0.18em] text-[var(--color-grey)] group-hover:text-[var(--color-kraft)] transition-colors",
                                            children: [
                                                "0",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/components/sip/SipNav.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sip/SipNav.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 flex flex-col justify-between gap-12 pt-6 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow text-[var(--color-grey)]",
                                            children: "Flavours"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2.5",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"].map((flavour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#sip-flavours",
                                                    onClick: ()=>setIsMenuOpen(false),
                                                    className: "flex items-center gap-3 text-sm md:text-base font-medium hover:text-[var(--color-kraft)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2.5 h-2.5 rounded-full shrink-0",
                                                            style: {
                                                                backgroundColor: flavour.accent
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sip/SipNav.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: flavour.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sip/SipNav.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, flavour.id, true, {
                                                    fileName: "[project]/components/sip/SipNav.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/SipNav.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 pt-6 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow text-[var(--color-grey)]",
                                            children: "Cartons by"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PackerMark"], {
                                                    className: "w-7 h-6 text-[var(--color-kraft)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/SipNav.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-display font-semibold text-sm tracking-wide",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sip/SipNav.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-grey)]",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sip/SipNav.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sip/SipNav.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/SipNav.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/SipNav.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/SipNav.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/SipNav.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sip/SipNav.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/SipNav.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(SipNav, "KGYLZIoXJbrEWYMi7xyY++ANKUk=");
_c = SipNav;
var _c;
__turbopack_context__.k.register(_c, "SipNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/SipOfferBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipOfferBar",
    ()=>SipOfferBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/SipLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SipOfferBar() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SipOfferBar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const closed = sessionStorage.getItem("sip-offer-closed");
            if (closed) return;
            setIsDismissed(false);
            const onIntroDone = {
                "SipOfferBar.useEffect.onIntroDone": ()=>{
                    setTimeout({
                        "SipOfferBar.useEffect.onIntroDone": ()=>{
                            setIsVisible(true);
                        }
                    }["SipOfferBar.useEffect.onIntroDone"], 1400);
                }
            }["SipOfferBar.useEffect.onIntroDone"];
            if (window.__sipIntroDone) {
                setTimeout({
                    "SipOfferBar.useEffect": ()=>{
                        setIsVisible(true);
                    }
                }["SipOfferBar.useEffect"], 1400);
            } else {
                window.addEventListener("sip:intro-done", onIntroDone, {
                    once: true
                });
            }
        }
    }["SipOfferBar.useEffect"], []);
    const handleDismiss = ()=>{
        setIsVisible(false);
        sessionStorage.setItem("sip-offer-closed", "true");
        setTimeout(()=>{
            setIsDismissed(true);
        }, 500);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email) return;
        setIsSubmitted(true);
    };
    if (isDismissed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Promotional offer",
        className: `fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[620px] transition-all duration-700 ease-[var(--ease-expo)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-[var(--color-ink)] text-[var(--color-ivory)] rounded-full px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 border border-white/10 select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-[var(--color-moss)] text-[var(--color-ivory)] flex items-center justify-center shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$SipLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipMark"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/SipOfferBar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono text-xs text-[var(--color-kraft)] font-medium text-center flex-1",
                    children: "You're in — check your inbox for 15% off."
                }, void 0, false, {
                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-xs md:text-sm font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Sip Club — 15% off your first crate of six"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm:hidden",
                                    children: "Sip Club — 15% off"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/SipOfferBar.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "hidden md:flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "Enter email",
                                    required: true,
                                    className: "bg-white/10 text-xs px-3 py-1.5 rounded-full outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[var(--color-kraft)] w-36"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] hover:bg-[var(--color-ivory)] transition-colors cursor-pointer",
                                    children: "Join"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/SipOfferBar.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#sip-newsletter",
                            className: "md:hidden font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)]",
                            children: "Join"
                        }, void 0, false, {
                            fileName: "[project]/components/sip/SipOfferBar.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleDismiss,
                    "aria-label": "Dismiss offer",
                    className: "w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer shrink-0",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/components/sip/SipOfferBar.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sip/SipOfferBar.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/SipOfferBar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(SipOfferBar, "FhHk9Q7gQW3X3wvb3qlYeKIy8+c=");
_c = SipOfferBar;
var _c;
__turbopack_context__.k.register(_c, "SipOfferBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/SipPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipPage",
    ()=>SipPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/SipIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/SipNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$story$2f$StorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/story/StorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$ManifestoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/sections/ManifestoSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$FlavoursSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/sections/FlavoursSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$HealthSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/sections/HealthSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$ReviewsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/sections/ReviewsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/SipFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipOfferBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/SipOfferBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$SmoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/SmoothScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Cursor.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function SipPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-ink)] focus:text-[var(--color-ivory)] focus:rounded-full font-mono text-xs",
                children: "Skip to content"
            }, void 0, false, {
                fileName: "[project]/components/sip/SipPage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipIntro"], {}, void 0, false, {
                fileName: "[project]/components/sip/SipPage.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$SmoothScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScroll"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipNav"], {}, void 0, false, {
                        fileName: "[project]/components/sip/SipPage.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        id: "main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$story$2f$StorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorySection"], {}, void 0, false, {
                                fileName: "[project]/components/sip/SipPage.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$ManifestoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManifestoSection"], {}, void 0, false, {
                                fileName: "[project]/components/sip/SipPage.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$FlavoursSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlavoursSection"], {}, void 0, false, {
                                fileName: "[project]/components/sip/SipPage.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$HealthSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HealthSection"], {}, void 0, false, {
                                fileName: "[project]/components/sip/SipPage.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$sections$2f$ReviewsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewsSection"], {}, void 0, false, {
                                fileName: "[project]/components/sip/SipPage.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/SipPage.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipFooter"], {}, void 0, false, {
                        fileName: "[project]/components/sip/SipPage.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$SipOfferBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SipOfferBar"], {}, void 0, false, {
                        fileName: "[project]/components/sip/SipPage.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/SipPage.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cursor"], {}, void 0, false, {
                fileName: "[project]/components/sip/SipPage.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/SipPage.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SipPage;
var _c;
__turbopack_context__.k.register(_c, "SipPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/sections/FlavoursSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlavoursSection",
    ()=>FlavoursSection,
    "dispatchAddToCrate",
    ()=>dispatchAddToCrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/FluteEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/Still.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/stills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/turntable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function dispatchAddToCrate(flavour) {
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent("sip:crate", {
            detail: {
                flavour
            }
        }));
    }
}
// Deterministic 14 droplets
const DROPLETS = Array.from({
    length: 14
}).map(_c = (_, i)=>{
    const angle = i / 14 * Math.PI * 2 + i % 3 * 0.2;
    const radius = 70 + i * 37 % 60;
    const size = 5 + i % 4 * 2.3;
    const isWhite = i % 3 === 0;
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size,
        isWhite,
        delay: 0.12 + i * 0.012
    };
});
_c1 = DROPLETS;
function FlavourCard({ flavour, index }) {
    _s();
    const [isBack, setIsBack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTurningLive, setIsTurningLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shadowScale, setShadowScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [burstActive, setBurstActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Preload back still on hover or focus
    const handleMouseEnter = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestStill"])(`can-back-${flavour.id}`);
    };
    const handleTurn = ()=>{
        if (prefersReducedMotion) {
            setIsBack((prev)=>!prev);
            return;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turntableManager"].getIsTurning()) return;
        const host = hostRef.current;
        if (!host) return;
        const targetBack = !isBack;
        setIsBack(targetBack);
        setIsTurningLive(true);
        setBurstActive(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turntableManager"].turn(host, flavour, targetBack, {
            onLift: ()=>setShadowScale(0.62),
            onDrop: ()=>setShadowScale(1),
            onComplete: ()=>{
                setIsTurningLive(false);
                setBurstActive(false);
            }
        });
    };
    const handleAdd = ()=>{
        dispatchAddToCrate(flavour);
        setIsAdded(true);
        setTimeout(()=>{
            setIsAdded(false);
        }, 1400);
    };
    const stillKey = isBack ? `can-back-${flavour.id}` : `can-${flavour.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onMouseEnter: handleMouseEnter,
        onFocus: handleMouseEnter,
        className: "flavour-card group relative flex flex-col justify-between rounded-[1.25rem] p-6 md:p-8 select-none transition-transform duration-500 hover:-translate-y-1 shadow-xl overflow-hidden",
        style: {
            backgroundColor: flavour.tint,
            color: flavour.ink
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none transition-opacity duration-700 ease-[var(--ease-expo)]",
                style: {
                    background: `radial-gradient(circle at 50% 50%, ${flavour.accent} 0%, transparent 70%)`,
                    opacity: isBack ? 0.25 : 0.08
                }
            }, void 0, false, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[0.7rem] tracking-[0.18em] uppercase opacity-70",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(index + 1),
                            " / 06"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleTurn,
                        "aria-label": `Toggle front and back view of ${flavour.name} can`,
                        className: "flex items-center gap-2 cursor-pointer focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-opacity ${!isBack ? "font-semibold opacity-100" : "opacity-40"}`,
                                children: "Front"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-9 h-5 rounded-full bg-black/10 p-[2px] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 rounded-full transition-transform duration-700 ease-[var(--ease-expo)]",
                                    style: {
                                        backgroundColor: flavour.accent,
                                        transform: isBack ? "translateX(16px)" : "translateX(0)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-opacity ${isBack ? "font-semibold opacity-100" : "opacity-40"}`,
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex flex-col items-center my-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleTurn,
                        "data-cursor": "3d",
                        className: "relative w-[78%] aspect-[3/4] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-[1.03] group-hover:-translate-y-2 focus:outline-none",
                        "aria-label": `Tap to turn ${flavour.name} can`,
                        children: [
                            burstActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none flex items-center justify-center z-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-36 h-36 rounded-full border-2 animate-ping",
                                        style: {
                                            borderColor: flavour.accent,
                                            opacity: 0.92,
                                            animationDuration: "0.85s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-44 h-44 rounded-full border animate-ping",
                                        style: {
                                            borderColor: flavour.ink,
                                            opacity: 0.7,
                                            animationDuration: "1.1s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    DROPLETS.map((drop, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute rounded-full transition-all duration-700 ease-out",
                                            style: {
                                                width: `${drop.size}px`,
                                                height: `${drop.size}px`,
                                                backgroundColor: drop.isWhite ? "#ffffff" : flavour.accent,
                                                transform: `translate(${drop.x}px, ${drop.y}px)`,
                                                opacity: 0.85
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 w-[55%] h-4 rounded-full bg-black/20 blur-[6px] transition-transform duration-500",
                                style: {
                                    transform: `scaleX(${shadowScale})`,
                                    opacity: shadowScale < 1 ? 0.45 : 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: hostRef,
                                className: "absolute inset-[-20%] pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full h-full relative z-0 transition-opacity duration-300 ${isTurningLive ? "opacity-0" : "opacity-100"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                    stillKey: stillKey,
                                    alt: `${flavour.name} 250 ml can ${isBack ? "back nutrition facts" : "front label"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase opacity-75 mt-2 block md:opacity-0 md:group-hover:opacity-80 transition-opacity",
                        children: isBack ? "Tap for the front ↺" : "Tap to turn ↻"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-[140px] flex flex-col justify-between",
                children: [
                    !isBack ? /* Front Info */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 transition-opacity duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "display-sm leading-none font-medium",
                                children: flavour.name
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm opacity-80 max-w-[28ch]",
                                children: flavour.notes
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this) : /* Back Info */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 transition-opacity duration-500 text-[0.8rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase font-semibold",
                                children: "Back of the can · per 250 ml"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-x-2 gap-y-1 my-1 font-mono text-[0.75rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Energy ",
                                            flavour.kcal,
                                            " kcal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Added sugar 0 g"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Potassium 500 mg"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Sodium 62 mg"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-sans text-[0.75rem] opacity-75 line-clamp-2",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIngredients"])(flavour).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-4 border-t border-black/10 mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full",
                                        style: {
                                            backgroundColor: flavour.accent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[0.65rem] tracking-[0.12em] uppercase opacity-75",
                                        children: "250 ml · 0 g added sugar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAdd,
                                "data-cursor": "cta",
                                className: "font-medium text-[0.85rem] tracking-[0.02em] px-4 py-1.5 rounded-full bg-[var(--color-ink)] text-[var(--color-ivory)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)] transition-colors duration-300",
                                children: isAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--color-moss)] font-bold",
                                    children: "Added ✓"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this) : "Add to crate +"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(FlavourCard, "CW4ykL4xSP5BykdnTtoyW3/9KFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = FlavourCard;
function FlavoursSection() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const word1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const word2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlavoursSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            // Warm turntable when section within 200px
            const observer = new IntersectionObserver({
                "FlavoursSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        if ("requestIdleCallback" in window) {
                            window.requestIdleCallback({
                                "FlavoursSection.useEffect": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turntableManager"].warm(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0]);
                                }
                            }["FlavoursSection.useEffect"]);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turntableManager"].warm(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0]);
                        }
                        observer.disconnect();
                    }
                }
            }["FlavoursSection.useEffect"], {
                rootMargin: "200px"
            });
            observer.observe(section);
            if (prefersReducedMotion) return;
            // Headline: the two words slide in from ∓12% with a fade scrubbed from top 85% to top 35%
            if (word1Ref.current && word2Ref.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(word1Ref.current, {
                    xPercent: -12,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headlineRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(word2Ref.current, {
                    xPercent: 12,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headlineRef.current,
                        start: "top 85%",
                        end: "top 35%",
                        scrub: true
                    }
                });
            }
            // Cards batch in (y 70 -> 0, 1.1s expo, stagger .08) at top 90%
            const cards = section.querySelectorAll(".flavour-card");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(cards, {
                y: 70,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%"
                }
            });
            return ({
                "FlavoursSection.useEffect": ()=>{
                    observer.disconnect();
                }
            })["FlavoursSection.useEffect"];
        }
    }["FlavoursSection.useEffect"], [
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "sip-flavours",
        "data-theme": "dark",
        className: "relative z-30 bg-[var(--color-moss)] text-[var(--color-ivory)] pt-[6vh] pb-[14vh] container-x",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow text-center text-[var(--color-ivory)]/70 mb-6",
                        children: "03 — The range"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ref: headlineRef,
                        className: "font-display font-medium text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.035em] text-center flex items-center justify-center flex-wrap gap-4 md:gap-8 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: word1Ref,
                                className: "inline-block",
                                children: "Explore all"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-[clamp(44px,7vw,88px)] h-[clamp(44px,7vw,88px)] text-[var(--color-kraft)] animate-[spin_18s_linear_infinite]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 120 120",
                                    className: "w-full h-full fill-current",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "60",
                                            cy: "60",
                                            r: "18",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "60",
                                            cy: "60",
                                            r: "26",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeDasharray: "3 3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        Array.from({
                                            length: 16
                                        }).map((_, i)=>{
                                            const ang = i / 16 * Math.PI * 2;
                                            const rOuter = i % 2 === 0 ? 54 : 44;
                                            const rInner = 32;
                                            const x1 = 60 + Math.cos(ang) * rInner;
                                            const y1 = 60 + Math.sin(ang) * rInner;
                                            const x2 = 60 + Math.cos(ang) * rOuter;
                                            const y2 = 60 + Math.sin(ang) * rOuter;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: x1,
                                                y1: y1,
                                                x2: x2,
                                                y2: y2,
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round"
                                            }, i, false, {
                                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: word2Ref,
                                className: "inline-block text-[var(--color-kraft)]",
                                children: "flavours"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-[0.75rem] tracking-[0.16em] uppercase text-[var(--color-ivory)]/70 mb-14 md:mb-20",
                        children: "Tap any can to turn it around"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"].map((flavour, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlavourCard, {
                                flavour: flavour,
                                index: idx
                            }, flavour.id, false, {
                                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full translate-y-[98%] text-[var(--color-moss)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FluteEdge"], {
                    flip: true
                }, void 0, false, {
                    fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/sections/FlavoursSection.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_s1(FlavoursSection, "IBn7MLg8DE9Et4rGENX6GQ+iwaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c3 = FlavoursSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DROPLETS$Array.from({ length: 14 }).map");
__turbopack_context__.k.register(_c1, "DROPLETS");
__turbopack_context__.k.register(_c2, "FlavourCard");
__turbopack_context__.k.register(_c3, "FlavoursSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/sections/HealthSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HealthSection",
    ()=>HealthSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Magnetic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Counter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/Still.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function HealthSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card4Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HealthSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section || prefersReducedMotion) return;
            // Headline in three masked lines rising on entry (stagger .09, 1.2s expo)
            const lines = [
                line1Ref.current,
                line2Ref.current,
                line3Ref.current
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(lines, {
                yPercent: 110
            }, {
                yPercent: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.09,
                scrollTrigger: {
                    trigger: headlineRef.current,
                    start: "top 80%"
                }
            });
            // Polaroid cards parallax: y 90*s -> -90*s across section
            const polaroids = [
                {
                    ref: card1Ref,
                    s: 0.3
                },
                {
                    ref: card2Ref,
                    s: 0.55
                },
                {
                    ref: card3Ref,
                    s: 0.45
                },
                {
                    ref: card4Ref,
                    s: 0.8
                }
            ];
            polaroids.forEach({
                "HealthSection.useEffect": ({ ref, s })=>{
                    if (!ref.current) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(ref.current, {
                        y: 90 * s
                    }, {
                        y: -90 * s,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                }
            }["HealthSection.useEffect"]);
        }
    }["HealthSection.useEffect"], [
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "sip-health",
        className: "relative z-20 bg-[var(--color-ivory)] text-[var(--color-ink)] pt-[22vh] pb-[14vh] container-x",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "eyebrow text-center mb-6",
                    children: "04 — Why it matters"
                }, void 0, false, {
                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: headlineRef,
                    className: "font-display font-medium text-[clamp(2.6rem,7.4vw,8rem)] leading-[0.94] tracking-[-0.04em] text-center max-w-[14ch] mb-20 md:mb-28 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: line1Ref,
                                className: "block",
                                children: "You deserve"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: line2Ref,
                                className: "block",
                                children: "the best for"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: line3Ref,
                                className: "block text-[var(--color-kraft)]",
                                children: "your health."
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lede text-[var(--color-ink)] font-normal",
                                    children: "Nothing added, nothing hidden. Coconut water naturally carries electrolytes like potassium — we keep it raw, cold and simple."
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-sm text-[var(--color-ink)]/75",
                                    children: "Every can starts as one young green coconut, opened and pressed within a day of harvest. No concentrate, no preservatives, no added sugar — just what the coconut made."
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                        strength: 0.22,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "#sip-flavours",
                                            variant: "ink",
                                            size: "lg",
                                            children: "Find your flavour"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-8 pt-8 border-t border-[var(--color-ink)]/10 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                                        value: 500,
                                                        suffix: " mg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                                    children: "Potassium per can"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                                        value: 0,
                                                        suffix: " g"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                                    children: "Added sugar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                                        value: 24,
                                                        suffix: " h"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                                    children: "Tree to can"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                                        value: 6
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                                    children: "Flavours, all real fruit"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 relative w-full aspect-[1/1.05] min-h-[460px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: card1Ref,
                                    className: "absolute left-0 top-[3%] w-[44%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-10",
                                    style: {
                                        backgroundColor: "#e4e9dc",
                                        transform: "rotate(-5deg)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full aspect-[4/3] overflow-hidden rounded-lg bg-black/5 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                                stillKey: "coconut-half",
                                                alt: "Fig. 03 — 100% raw young coconut cut"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center",
                                            children: "Fig. 03 — 100% raw"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: card2Ref,
                                    className: "absolute right-[4%] top-0 w-[38%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-20",
                                    style: {
                                        backgroundColor: "#e9e2d5",
                                        transform: "rotate(4deg)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full aspect-[3/4] overflow-hidden rounded-lg bg-black/5 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                                stillKey: "can-back-original",
                                                alt: "Fig. 04 — Nothing hidden back label"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center",
                                            children: "Fig. 04 — Nothing hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: card3Ref,
                                    className: "absolute left-[27%] bottom-0 w-[38%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-30",
                                    style: {
                                        backgroundColor: "#efe4d2",
                                        transform: "rotate(3deg)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full aspect-[4/3] overflow-hidden rounded-lg bg-black/5 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                                stillKey: "coconut-pair",
                                                alt: "Fig. 05 — Opened within a day coconut pair"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center",
                                            children: "Fig. 05 — Opened within a day"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: card4Ref,
                                    className: "absolute right-0 bottom-[14%] w-[31%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-20",
                                    style: {
                                        backgroundColor: "#d9e6d0",
                                        transform: "rotate(-6deg)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full aspect-[3/4] overflow-hidden rounded-lg bg-black/5 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                                stillKey: "can-lime",
                                                alt: "Fig. 06 — Lime & mint 250 ml can"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center",
                                            children: "Fig. 06 — Lime & mint"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/sections/HealthSection.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/sections/HealthSection.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sip/sections/HealthSection.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/sections/HealthSection.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(HealthSection, "Dgrs4IpF8GKF0Wbsgy1Mw+DmwFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = HealthSection;
var _c;
__turbopack_context__.k.register(_c, "HealthSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/sections/ManifestoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManifestoSection",
    ()=>ManifestoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/FluteEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ManifestoSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fig1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fig2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManifestoSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            if (prefersReducedMotion) return;
            // Scrub headline words opacity .14 -> 1 from top 78% to bottom 42%
            if (headlineRef.current) {
                const words = headlineRef.current.querySelectorAll(".manifesto-word");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(words, {
                    opacity: 0.14
                }, {
                    opacity: 1,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: headlineRef.current,
                        start: "top 78%",
                        end: "bottom 42%",
                        scrub: true
                    }
                });
            }
            // Chip scrub scale .6 -> 1 and rotate -14° -> -4°
            if (chipRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(chipRef.current, {
                    scale: 0.6,
                    rotate: -14
                }, {
                    scale: 1,
                    rotate: -4,
                    scrollTrigger: {
                        trigger: headlineRef.current,
                        start: "top 78%",
                        end: "bottom 42%",
                        scrub: true
                    }
                });
            }
            // Drawings [data-draw] scrub strokeDashoffset 1 -> 0
            const drawPaths = section.querySelectorAll("[data-draw]");
            if (drawPaths.length > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(drawPaths, {
                    strokeDashoffset: 1
                }, {
                    strokeDashoffset: 0,
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 88%",
                        end: "bottom 55%",
                        scrub: true
                    }
                });
            }
            // [data-fade] groups fade in
            const fadeGroups = section.querySelectorAll("[data-fade]");
            if (fadeGroups.length > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(fadeGroups, {
                    opacity: 0
                }, {
                    opacity: 1,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        end: "bottom 60%",
                        scrub: true
                    }
                });
            }
            // Parallaxes: Fig 01 (s = 0.25), sticker (s = -0.2), Fig 02 (s = 0.45)
            // y = 80*s -> -80*s across section
            if (fig1Ref.current) {
                const s = 0.25;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(fig1Ref.current, {
                    y: 80 * s
                }, {
                    y: -80 * s,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
            if (stickerRef.current) {
                const s = -0.2;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(stickerRef.current, {
                    y: 80 * s
                }, {
                    y: -80 * s,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
            if (fig2Ref.current) {
                const s = 0.45;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(fig2Ref.current, {
                    y: 80 * s
                }, {
                    y: -80 * s,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        }
    }["ManifestoSection.useEffect"], [
        prefersReducedMotion
    ]);
    const words = [
        "Pure",
        "coconut",
        "water.",
        "Naturally",
        "hydrating,",
        "refreshingly",
        "fresh,",
        "from",
        "nature's",
        "source."
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "sip-manifesto",
        "data-theme": "dark",
        className: "relative z-30 -mt-[100svh] bg-[var(--color-moss)] text-[var(--color-ivory)] pt-[16vh] md:pt-[22vh] pb-[12vh] container-x",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full -translate-y-[98%] text-[var(--color-moss)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$FluteEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FluteEdge"], {}, void 0, false, {
                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow text-center text-[var(--color-ivory)]/70 mb-8",
                        children: "02 — What's inside"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ref: headlineRef,
                        className: "font-display font-medium text-[clamp(2.4rem,6.6vw,7rem)] leading-[1.05] tracking-[-0.035em] text-center max-w-[17ch] mb-20 md:mb-28",
                        children: words.map((w, idx)=>{
                            if (w === "fresh,") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: chipRef,
                                    className: "manifesto-word inline-block px-4 py-1 mx-2 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] origin-center shadow-lg font-medium",
                                    children: "fresh,"
                                }, idx, false, {
                                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "manifesto-word inline-block mr-[0.3em]",
                                children: w
                            }, idx, false, {
                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: fig1Ref,
                                className: "md:col-span-5 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 470 400",
                                        className: "w-full h-auto stroke-current fill-none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                    id: "innerWaterClip",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M160 116 C 210 116 234 158 234 214 C 234 268 204 302 160 302 C 116 302 86 268 86 214 C 86 158 110 116 160 116 Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                transform: "translate(10, 0)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-draw": true,
                                                        pathLength: "1",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "1",
                                                        d: "M150 30 C 245 30 300 110 300 205 C 300 300 235 372 150 372 C 65 372 0 300 0 205 C 0 110 55 30 150 30 Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-draw": true,
                                                        pathLength: "1",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "1",
                                                        opacity: "0.7",
                                                        d: "M150 62 C 225 62 268 128 268 207 C 268 288 216 344 150 344 C 84 344 32 288 32 207 C 32 128 75 62 150 62 Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-draw": true,
                                                        pathLength: "1",
                                                        strokeWidth: "3",
                                                        strokeDasharray: "1",
                                                        d: "M150 104 C 208 104 236 150 236 212 C 236 274 200 314 150 314 C 100 314 64 274 64 212 C 64 150 92 104 150 104 Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        "data-draw": true,
                                                        pathLength: "1",
                                                        strokeWidth: "1.5",
                                                        strokeDasharray: "1",
                                                        opacity: "0.7",
                                                        d: "M150 116 C 200 116 224 158 224 214 C 224 268 194 302 150 302 C 106 302 76 268 76 214 C 76 158 100 116 150 116 Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        clipPath: "url(#innerWaterClip)",
                                                        opacity: "0.45",
                                                        strokeWidth: "1",
                                                        children: [
                                                            140,
                                                            160,
                                                            180,
                                                            200,
                                                            220,
                                                            240,
                                                            260,
                                                            280,
                                                            295
                                                        ].map((wy, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "70",
                                                                y1: wy,
                                                                x2: "250",
                                                                y2: wy,
                                                                strokeDasharray: "3 3"
                                                            }, idx, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "150",
                                                        y1: "15",
                                                        x2: "150",
                                                        y2: "385",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "8 4 2 4",
                                                        opacity: "0.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        "data-fade": true,
                                                        className: "transition-opacity duration-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "214",
                                                                cy: "58",
                                                                r: "3",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M214 58 L280 58 L320 58",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "330",
                                                                y: "62",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "11",
                                                                letterSpacing: "1.5",
                                                                children: "SKIN — 2 MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "196",
                                                                cy: "96",
                                                                r: "3",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M196 96 L280 96 L320 96",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "330",
                                                                y: "100",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "11",
                                                                letterSpacing: "1.5",
                                                                children: "HUSK — 25 MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "176",
                                                                cy: "134",
                                                                r: "3",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M176 134 L280 134 L320 134",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "330",
                                                                y: "138",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "11",
                                                                letterSpacing: "1.5",
                                                                children: "SHELL — 3 MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "164",
                                                                cy: "172",
                                                                r: "3",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M164 172 L280 172 L320 172",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "330",
                                                                y: "176",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "11",
                                                                letterSpacing: "1.5",
                                                                children: "MEAT — 6 MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "150",
                                                                cy: "270",
                                                                r: "3",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M150 270 L280 270 L320 270",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "330",
                                                                y: "274",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "11",
                                                                letterSpacing: "1.5",
                                                                children: "WATER — 250 ML"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "382",
                                                                x2: "300",
                                                                y2: "382",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "376",
                                                                x2: "0",
                                                                y2: "388",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "300",
                                                                y1: "376",
                                                                x2: "300",
                                                                y2: "388",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "150",
                                                                y: "396",
                                                                textAnchor: "middle",
                                                                fill: "currentColor",
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: "10",
                                                                letterSpacing: "2",
                                                                children: "Ø 180 MM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ivory)]/70",
                                        children: "Fig. 01 — Young coconut, section · 1 : 2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: stickerRef,
                                className: "md:col-span-3 flex flex-col items-center justify-center my-6 md:my-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-36 h-36 flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 200 200",
                                            className: "absolute inset-0 w-full h-full animate-[spin_22s_linear_infinite]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    id: "sticker-text-path",
                                                    d: "M 100 22 A 78 78 0 1 1 99.9 22",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    fill: "var(--color-kraft)",
                                                    fontFamily: "var(--font-mono)",
                                                    fontSize: "15",
                                                    letterSpacing: "4",
                                                    fontWeight: "500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                                        href: "#sticker-text-path",
                                                        children: "NO ADDED SUGAR · NOT FROM CONCENTRATE ·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] flex items-center justify-center font-display font-semibold text-xl shadow-md",
                                            children: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: fig2Ref,
                                className: "md:col-span-4 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 440 300",
                                        className: "w-full h-auto stroke-current fill-none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                "data-draw": true,
                                                pathLength: "1",
                                                strokeWidth: "1.8",
                                                strokeDasharray: "1",
                                                d: "M20 80 L20 60 L140 60 L140 20 L220 20 L220 60 L340 60 L340 20 L420 20 L420 60 L420 240 L420 280 L340 280 L340 240 L220 240 L220 280 L140 280 L140 240 L20 240 L20 220 L0 214 L0 86 L20 80 Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                strokeDasharray: "4 4",
                                                strokeWidth: "1.2",
                                                opacity: "0.6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "20",
                                                        y1: "80",
                                                        x2: "20",
                                                        y2: "220"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "140",
                                                        y1: "60",
                                                        x2: "140",
                                                        y2: "240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "220",
                                                        y1: "60",
                                                        x2: "220",
                                                        y2: "240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "340",
                                                        y1: "60",
                                                        x2: "340",
                                                        y2: "240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "20",
                                                        y1: "60",
                                                        x2: "420",
                                                        y2: "60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "20",
                                                        y1: "240",
                                                        x2: "420",
                                                        y2: "240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                "data-fade": true,
                                                fill: "currentColor",
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "10",
                                                letterSpacing: "1.5",
                                                textAnchor: "middle",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "80",
                                                        y: "155",
                                                        children: "SIDE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "180",
                                                        y: "155",
                                                        children: "FRONT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "280",
                                                        y: "155",
                                                        children: "SIDE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "380",
                                                        y: "155",
                                                        children: "BACK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "10",
                                                        y: "155",
                                                        fontSize: "8",
                                                        children: "GLUE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "220",
                                                        y: "295",
                                                        fontSize: "9",
                                                        opacity: "0.7",
                                                        children: "— CUT   - - SCORE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ivory)]/70",
                                        children: "Fig. 02 — Fluteworks Packaging RSC blank · 6 × 250 ml"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/sections/ManifestoSection.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(ManifestoSection, "v8Y3J+7Neg/0CoMmXOHnEVZ6qHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ManifestoSection;
var _c;
__turbopack_context__.k.register(_c, "ManifestoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/sections/ReviewsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsSection",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/Still.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ReviewsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floatCard1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floatCard2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section || prefersReducedMotion) return;
            // Headline rising from 110%
            if (headlineRef.current) {
                const span = headlineRef.current.querySelector("span");
                if (span) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(span, {
                        yPercent: 110
                    }, {
                        yPercent: 0,
                        duration: 1.1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: headlineRef.current,
                            start: "top 85%"
                        }
                    });
                }
            }
            // Two floating tinted cards at top right: drifting and rotating with scroll
            if (floatCard1Ref.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(floatCard1Ref.current, {
                    y: -30,
                    rotate: -4
                }, {
                    y: 40,
                    rotate: 6,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
            if (floatCard2Ref.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(floatCard2Ref.current, {
                    y: 30,
                    rotate: 5
                }, {
                    y: -40,
                    rotate: -7,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        }
    }["ReviewsSection.useEffect"], [
        prefersReducedMotion
    ]);
    // Update carousel counter on scroll
    const handleScroll = ()=>{
        const carousel = carouselRef.current;
        if (!carousel) return;
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".review-card")?.clientWidth || 420;
        const gap = 24;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setCurrentIndex(Math.max(0, Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length - 1, index)));
    };
    const scrollToCard = (idx)=>{
        const carousel = carouselRef.current;
        if (!carousel) return;
        const card = carousel.querySelector(`.review-card-${idx}`);
        if (card) {
            carousel.scrollTo({
                left: card.offsetLeft - 24,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "sip-reviews",
        className: "relative z-20 bg-[var(--color-ivory)] text-[var(--color-ink)] pt-[8vh] pb-[16vh] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x max-w-7xl mx-auto relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block absolute right-4 -top-8 pointer-events-none z-10 w-[300px] h-[220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: floatCard1Ref,
                                className: "absolute right-0 top-0 w-32 aspect-[3/4] p-3 rounded-2xl shadow-xl flex items-center justify-center",
                                style: {
                                    backgroundColor: "#f4e4c4"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                    stillKey: "can-mango",
                                    alt: "Mango 250 ml can"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: floatCard2Ref,
                                className: "absolute right-24 top-16 w-32 aspect-[3/4] p-3 rounded-2xl shadow-xl flex items-center justify-center",
                                style: {
                                    backgroundColor: "#f1d6d0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$Still$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Still"], {
                                    stillKey: "can-guava",
                                    alt: "Pink guava 250 ml can"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow mb-4",
                        children: "05 — From the crate"
                    }, void 0, false, {
                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                ref: headlineRef,
                                className: "line-mask font-display font-medium text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.035em]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: [
                                        "Sippers say",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--color-kraft)] font-semibold",
                                            children: "!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                            lineNumber: 143,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 self-start sm:self-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-sm tracking-[0.16em] uppercase text-[var(--color-grey)]",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(currentIndex + 1),
                                            " / ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>scrollToCard(currentIndex - 1),
                                                disabled: currentIndex === 0,
                                                "aria-label": "Previous review",
                                                className: "w-12 h-12 rounded-full border border-[var(--color-ink)]/20 flex items-center justify-center text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)] disabled:opacity-30 disabled:pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 16",
                                                    className: "w-4 h-4 fill-none stroke-current stroke-[1.8]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 3L5 8l5 5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>scrollToCard(currentIndex + 1),
                                                disabled: currentIndex === __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length - 1,
                                                "aria-label": "Next review",
                                                className: "w-12 h-12 rounded-full border border-[var(--color-ink)]/20 flex items-center justify-center text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)] disabled:opacity-30 disabled:pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 16",
                                                    className: "w-4 h-4 fill-none stroke-current stroke-[1.8]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 3l5 5-5 5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: carouselRef,
                onScroll: handleScroll,
                "data-cursor": "drag",
                tabIndex: 0,
                "aria-label": "Reviews carousel",
                className: "sip-no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory px-[var(--gutter)] py-4 cursor-grab active:cursor-grabbing focus:outline-none",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].map((review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `review-card review-card-${i} shrink-0 snap-start w-[min(86vw,420px)] bg-[var(--color-paper)] p-8 rounded-2xl flex flex-col justify-between gap-8 select-none shadow-sm transition-transform duration-300 hover:-translate-y-1`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-[var(--color-kraft)]",
                                        children: Array.from({
                                            length: 5
                                        }).map((_, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 20 20",
                                                className: "w-4 h-4 fill-current",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10 1.5l2.6 5.3 5.9.8-4.3 4.2 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.2 5.9-.8z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            }, si, false, {
                                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(i + 1)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "font-display font-medium text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[1.3] tracking-[-0.02em] text-[var(--color-ink)]",
                                children: [
                                    "“",
                                    review.quote,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 pt-4 border-t border-[var(--color-ink)]/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-[var(--color-moss)] text-[var(--color-ivory)] flex items-center justify-center font-display font-semibold text-sm",
                                        children: review.author.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display font-semibold text-sm leading-tight text-[var(--color-ink)]",
                                                children: review.author
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[var(--color-grey)]",
                                                children: review.city
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/sections/ReviewsSection.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(ReviewsSection, "lsQRa0h4tdpovwev45f5Mn1pbv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/story/StorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorySection",
    ()=>StorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Magnetic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sip/ui/PackerLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const DynamicStoryScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/sip/story/StoryScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.StoryScene), {
    loadableGenerated: {
        modules: [
            "[project]/components/sip/story/StoryScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = DynamicStoryScene;
function StorySection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const entranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointer"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    // Overlay elements refs
    const heroRealRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroSipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroCopyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroTopRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollHintRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stampsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const readoutContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const readoutTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const readoutNumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canCopyContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canCopyTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canBottomRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const keepSippingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packCopyContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packTitle1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packTitle2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packTitle3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packEyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const packSpecsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [currentStageIdx, setCurrentStageIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StorySection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            // ScrollTrigger to drive progressRef and timeline
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.6,
                onUpdate: {
                    "StorySection.useEffect.st": (self)=>{
                        progressRef.current = self.progress;
                        const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStageIndex"])(self.progress);
                        if (stage !== currentStageIdx) {
                            setCurrentStageIdx(stage);
                        }
                    }
                }["StorySection.useEffect.st"]
            });
            // Intro entrance trigger
            const onIntroDone = {
                "StorySection.useEffect.onIntroDone": ()=>{
                    if (prefersReducedMotion) {
                        entranceRef.current = 1;
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(entranceRef, {
                        current: 1,
                        duration: 1.8,
                        ease: "power2.out"
                    });
                    // Hero lines rise from 115%
                    const lines = [
                        heroRealRef.current,
                        heroSourceRef.current,
                        heroSipRef.current
                    ];
                    lines.forEach({
                        "StorySection.useEffect.onIntroDone": (line, i)=>{
                            if (line) {
                                const span = line.querySelector("span");
                                if (span) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(span, {
                                        yPercent: 115
                                    }, {
                                        yPercent: 0,
                                        duration: 1.2,
                                        ease: "power4.out",
                                        delay: 0.15 + i * 0.1
                                    });
                                }
                            }
                        }
                    }["StorySection.useEffect.onIntroDone"]);
                    // Fade-in items
                    const fades = section.querySelectorAll('[data-in="fade"]');
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(fades, {
                        opacity: 0,
                        y: 14
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.08,
                        delay: 0.55,
                        ease: "power2.out"
                    });
                }
            }["StorySection.useEffect.onIntroDone"];
            if (window.__sipIntroDone || prefersReducedMotion) {
                onIntroDone();
            } else {
                window.addEventListener("sip:intro-done", onIntroDone, {
                    once: true
                });
            }
            // Main GSAP Scrub Timeline
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6
                }
            });
            // Scroll hint fade by .005
            if (scrollHintRef.current) {
                tl.to(scrollHintRef.current, {
                    opacity: 0,
                    duration: 0.005
                }, 0.001);
            }
            // heroOut (.02 - .10):
            // "The real" xPercent -30 + fade, "source of" xPercent +30 + fade,
            // "every sip." yPercent 60 + fade, hero copy y -40 + fade
            if (heroRealRef.current) {
                tl.to(heroRealRef.current, {
                    xPercent: -30,
                    opacity: 0,
                    duration: 0.08,
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut.start);
            }
            if (heroSourceRef.current) {
                tl.to(heroSourceRef.current, {
                    xPercent: 30,
                    opacity: 0,
                    duration: 0.08,
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut.start);
            }
            if (heroSipRef.current) {
                tl.to(heroSipRef.current, {
                    yPercent: 60,
                    opacity: 0,
                    duration: 0.08,
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut.start);
            }
            if (heroCopyRef.current) {
                tl.to(heroCopyRef.current, {
                    y: -40,
                    opacity: 0,
                    duration: 0.08 * 0.7,
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut.start);
            }
            if (heroTopRightRef.current) {
                tl.to(heroTopRightRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.08,
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut.start);
            }
            // Stamps i = 0..3 enter at statsIn + .014*i
            const stampRotations = [
                -9,
                7,
                5,
                -6
            ];
            stampsRef.current.forEach({
                "StorySection.useEffect": (el, i)=>{
                    if (!el) return;
                    const enterStart = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].statsIn.start + 0.014 * i;
                    const enterDuration = 0.035;
                    const baseRot = stampRotations[i];
                    // Enter
                    tl.fromTo(el, {
                        opacity: 0,
                        scale: 0.4,
                        rotation: baseRot + (i % 2 === 0 ? -40 : 40),
                        y: 40
                    }, {
                        opacity: 1,
                        scale: 1,
                        rotation: baseRot,
                        y: 0,
                        duration: enterDuration,
                        ease: "back.out(1.6)"
                    }, enterStart);
                    // Drift up until statsOut
                    const driftDuration = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].statsOut.start - (enterStart + enterDuration);
                    if (driftDuration > 0) {
                        tl.to(el, {
                            y: -60 - 14 * i,
                            duration: driftDuration,
                            ease: "none"
                        }, enterStart + enterDuration);
                    }
                    // Exit
                    tl.to(el, {
                        scale: 0.7,
                        y: -140,
                        opacity: 0,
                        duration: 0.025,
                        ease: "power2.in"
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].statsOut.start + 0.006 * i);
                }
            }["StorySection.useEffect"]);
            // Readout
            if (readoutContainerRef.current) {
                tl.fromTo(readoutContainerRef.current, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.02
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0] - 0.01);
                tl.to(readoutContainerRef.current, {
                    opacity: 0,
                    duration: 0.02
                }, 0.89);
            }
            if (progressBarRef.current) {
                tl.fromTo(progressBarRef.current, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    duration: 0.88 - (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0] - 0.01),
                    ease: "none"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0] - 0.01);
            }
            // canCopyIn (.47 - .52): "Coconut." rises from 110%, copy fades up
            if (canCopyContainerRef.current) {
                tl.fromTo(canCopyContainerRef.current, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.02
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyIn.start);
            }
            if (canTitleRef.current) {
                const span = canTitleRef.current.querySelector("span");
                if (span) {
                    tl.fromTo(span, {
                        yPercent: 110
                    }, {
                        yPercent: 0,
                        duration: 0.05,
                        ease: "power3.out"
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyIn.start);
                    // canCopyOut (.555 - .585): title exits -110%
                    tl.to(span, {
                        yPercent: -110,
                        duration: 0.03,
                        ease: "power3.in"
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyOut.start);
                }
            }
            if (canCopyTextRef.current) {
                tl.fromTo(canCopyTextRef.current, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.04
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyIn.start + 0.01);
                tl.to(canCopyTextRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.03
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyOut.start);
            }
            if (canBottomRightRef.current) {
                tl.fromTo(canBottomRightRef.current, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.04
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyIn.start + 0.015);
                tl.to(canBottomRightRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.03
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canCopyOut.start);
            }
            // keepIn (.55 - .61): "Keep sipping." yPercent 70 -> 0 and fades in
            if (keepSippingRef.current) {
                tl.fromTo(keepSippingRef.current, {
                    yPercent: 70,
                    opacity: 0
                }, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.06,
                    ease: "power3.out"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].keepIn.start);
                // keepOut (.63 - .67): yPercent -90 and out
                tl.to(keepSippingRef.current, {
                    yPercent: -90,
                    opacity: 0,
                    duration: 0.04,
                    ease: "power3.in"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].keepOut.start);
            }
            // packCopyIn (.745 - .80): three title lines rise (stagger .008), copy fades up
            if (packCopyContainerRef.current) {
                tl.fromTo(packCopyContainerRef.current, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.02
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].packCopyIn.start);
                // Fade out on cover
                tl.to(packCopyContainerRef.current, {
                    opacity: 0,
                    duration: 0.05
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].cover.start);
            }
            if (packEyebrowRef.current) {
                tl.fromTo(packEyebrowRef.current, {
                    opacity: 0,
                    y: 14
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.03
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].packCopyIn.start);
            }
            const packSpans = [
                packTitle1Ref.current,
                packTitle2Ref.current,
                packTitle3Ref.current
            ];
            packSpans.forEach({
                "StorySection.useEffect": (span, i)=>{
                    if (span) {
                        tl.fromTo(span, {
                            yPercent: 110
                        }, {
                            yPercent: 0,
                            duration: 0.04,
                            ease: "power3.out"
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].packCopyIn.start + i * 0.008);
                    }
                }
            }["StorySection.useEffect"]);
            if (packBodyRef.current) {
                tl.fromTo(packBodyRef.current, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.04
                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].packCopyIn.start + 0.02);
            }
            // Four spec lines slide in from x 20 during crateTurn (stagger .008)
            packSpecsRef.current.forEach({
                "StorySection.useEffect": (el, i)=>{
                    if (!el) return;
                    tl.fromTo(el, {
                        opacity: 0,
                        x: 20
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.03,
                        ease: "power2.out"
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateTurn.start + i * 0.008);
                }
            }["StorySection.useEffect"]);
            return ({
                "StorySection.useEffect": ()=>{
                    st.kill();
                    tl.kill();
                }
            })["StorySection.useEffect"];
        }
    }["StorySection.useEffect"], [
        prefersReducedMotion,
        currentStageIdx
    ]);
    // Stage roll-up animation on stage change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StorySection.useEffect": ()=>{
            if (!readoutTextRef.current || !readoutNumRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo([
                readoutTextRef.current,
                readoutNumRef.current
            ], {
                yPercent: 100
            }, {
                yPercent: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        }
    }["StorySection.useEffect"], [
        currentStageIdx
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "sip-story",
        "aria-label": "BR-Nario — from coconut to carton",
        className: "relative w-full h-[950svh] md:h-[1100vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stageRef,
            className: "sticky top-0 left-0 w-full h-[100svh] overflow-hidden bg-[var(--color-ivory)] select-none grain",
            style: {
                background: "radial-gradient(70% 60% at 50% 46%, #fbfaf6 0%, #f5f3ee 55%, #ece8df 100%)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "sr-only",
                            children: "BR-Nario — The real source of every sip."
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: heroRealRef,
                            "aria-hidden": "true",
                            className: "absolute left-[var(--gutter)] top-[26%] md:top-[39%] line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "display-xl text-[var(--color-ink)]",
                                children: "The real"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: heroSourceRef,
                            "aria-hidden": "true",
                            className: "absolute right-[var(--gutter)] top-[35%] md:top-[39%] line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "display-xl text-[var(--color-ink)]",
                                children: "source of"
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: heroSipRef,
                            "aria-hidden": "true",
                            className: "absolute left-[var(--gutter)] md:left-[47%] top-[44%] md:top-[51%] line-mask",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "display-xl text-[var(--color-kraft)]",
                                children: "every sip."
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            ref: keepSippingRef,
                            "aria-hidden": "true",
                            className: "absolute w-full text-center top-[16%] md:top-[12%] font-display font-medium text-[clamp(3.6rem,17vw,16rem)] leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] opacity-0 pointer-events-none",
                            children: [
                                "Keep sipping",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--color-kraft)]",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 456,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/story/StorySection.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicStoryScene, {
                    progressRef: progressRef,
                    entranceRef: entranceRef,
                    pointerRef: pointerRef
                }, void 0, false, {
                    fileName: "[project]/components/sip/story/StorySection.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-[var(--gutter)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8"
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: heroTopRightRef,
                                    "data-in": "fade",
                                    className: "hidden md:flex flex-col items-end gap-4 max-w-[32ch] text-right pointer-events-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "body-sm text-[var(--color-ink)]/80",
                                            children: "Quench your thirst with pure tender coconut water — no concentrate, no added sugar, nothing hidden."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                            strength: 0.25,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                href: "#sip-flavours",
                                                variant: "ghost",
                                                size: "md",
                                                children: "Discover flavours"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-end justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: heroCopyRef,
                                    "data-in": "fade",
                                    className: "flex flex-col gap-2 max-w-[34ch]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "eyebrow-ink",
                                                    children: "Tender coconut water · 250 ml"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 h-[1px] bg-[var(--color-ink)]/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "body-sm text-[var(--color-ink)]/70",
                                            children: "For centuries, coconuts have carried their own perfectly balanced refreshment. We simply open them — and can what's inside within a day."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: scrollHintRef,
                                    "data-in": "fade",
                                    className: "flex flex-col items-center gap-2 pointer-events-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-grey)]",
                                            children: "Scroll to crack it open"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[1.5px] h-[40px] bg-[var(--color-ink)]/15 overflow-hidden relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-[16px] bg-[var(--color-ink)] sip-hint-bar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipStats"].map((stat, i)=>{
                            const tones = [
                                "moss",
                                "kraft",
                                "ivory",
                                "ink"
                            ];
                            const tone = tones[i];
                            const toneClass = tone === "kraft" ? "data-tone='kraft'" : tone === "ivory" ? "data-tone='ivory'" : tone === "ink" ? "data-tone='ink'" : "";
                            // Positions:
                            // moss left 4% top 17% / 19% 22%
                            // kraft 58% 64% / 70% 60%
                            // ivory 4% 62% / 13% 60%
                            // ink 60% 14% / 68% 16%
                            const posClasses = [
                                "left-[4%] top-[17%] md:left-[19%] md:top-[22%]",
                                "left-[58%] top-[64%] md:left-[70%] md:top-[60%]",
                                "left-[4%] top-[62%] md:left-[13%] md:top-[60%]",
                                "left-[60%] top-[14%] md:left-[68%] md:top-[16%]"
                            ][i];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    stampsRef.current[i] = el;
                                },
                                className: `absolute ${posClasses} sip-stamp opacity-0 pointer-events-none`,
                                "data-tone": tone,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 200 200",
                                    className: "w-full h-full select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "96",
                                            className: "sip-stamp-disc"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "64",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.2",
                                            strokeDasharray: "4 4",
                                            opacity: "0.45"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 568,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            id: `stamp-path-${i}`,
                                            d: "M 100 22 A 78 78 0 1 1 99.9 22",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 580,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            className: "sip-stamp-ring",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                                href: `#stamp-path-${i}`,
                                                startOffset: "0%",
                                                spacing: "auto",
                                                children: [
                                                    stat.label.toUpperCase(),
                                                    " · ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark,
                                                    " ·"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 586,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 585,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "100",
                                            y: "108",
                                            textAnchor: "middle",
                                            dominantBaseline: "middle",
                                            fill: "currentColor",
                                            fontFamily: "var(--font-display)",
                                            fontWeight: "600",
                                            fontSize: "42",
                                            children: [
                                                stat.value,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                    fontSize: "21",
                                                    dy: "-10",
                                                    children: stat.unit
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 563,
                                    columnNumber: 17
                                }, this)
                            }, stat.label, false, {
                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: canCopyContainerRef,
                            className: "absolute inset-0 p-[var(--gutter)] flex flex-col justify-between pointer-events-none opacity-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 max-w-[42ch]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            ref: canTitleRef,
                                            className: "line-mask font-display font-medium text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.9] text-[var(--color-ink)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Coconut",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-kraft)]",
                                                        children: "."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/story/StorySection.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 629,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            ref: canCopyTextRef,
                                            className: "hidden md:block lede text-[var(--color-ink)]/80",
                                            children: "One green coconut, opened and pressed within a day of harvest. 100% raw, with 500 mg of potassium in every can."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 624,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: canBottomRightRef,
                                    className: "flex flex-col items-end gap-4 max-w-[34ch] self-end text-right pointer-events-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "body-sm text-[var(--color-ink)]/80",
                                            children: "Six flavours, each one pressed with real fruit. Mango, lychee, pink guava — and three more worth meeting."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 646,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                            strength: 0.25,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                href: "#sip-flavours",
                                                variant: "ink",
                                                size: "md",
                                                children: "Explore flavours"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: packCopyContainerRef,
                            className: "absolute inset-0 p-[var(--gutter)] flex items-center justify-between pointer-events-none opacity-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 max-w-[42ch]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: packEyebrowRef,
                                            className: "flex items-center gap-2 text-[var(--color-ink)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sip$2f$ui$2f$PackerLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PackerMark"], {
                                                    className: "w-5 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "eyebrow-ink",
                                                    children: "04 — Packed by Fluteworks"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 666,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-medium text-[clamp(2.4rem,4.4vw,4.6rem)] leading-[0.95] text-[var(--color-ink)] flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-mask",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        ref: packTitle1Ref,
                                                        children: "Sealed in a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/story/StorySection.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-mask",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        ref: packTitle2Ref,
                                                        children: "carton built"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/story/StorySection.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-mask",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        ref: packTitle3Ref,
                                                        className: "text-[var(--color-kraft)]",
                                                        children: "to travel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sip/story/StorySection.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 674,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            ref: packBodyRef,
                                            className: "hidden md:block lede text-[var(--color-ink)]/80",
                                            children: "Six cans, one corrugated shipper — designed, printed and converted by Fluteworks Packaging, so every crate arrives the way it left."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-[var(--gutter)] bottom-[var(--gutter)] flex flex-col gap-1 text-right",
                                    children: [
                                        "RSC shipper · 6 × 250 ml",
                                        "3-ply · B-flute · kraft",
                                        "2-colour flexo print",
                                        "Made in India"
                                    ].map((spec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                packSpecsRef.current[i] = el;
                                            },
                                            className: "font-mono text-[0.6rem] tracking-[0.16em] uppercase text-[var(--color-ink)]/70",
                                            children: spec
                                        }, spec, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 697,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: readoutContainerRef,
                            className: "absolute left-[var(--gutter)] bottom-[var(--gutter)] w-[min(15rem,40vw)] flex flex-col gap-2 pointer-events-none opacity-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[var(--color-ink)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "line-mask",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: readoutTextRef,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipStages"][currentStageIdx]
                                            }, void 0, false, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 726,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 725,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "line-mask",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: readoutNumRef,
                                                children: [
                                                    "0",
                                                    currentStageIdx + 1,
                                                    " / 04"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sip/story/StorySection.tsx",
                                                lineNumber: 729,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sip/story/StorySection.tsx",
                                            lineNumber: 728,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 724,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[1px] bg-[var(--color-ink)]/20 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: progressBarRef,
                                        className: "absolute inset-0 bg-[var(--color-ink)] origin-left"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sip/story/StorySection.tsx",
                                        lineNumber: 734,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sip/story/StorySection.tsx",
                                    lineNumber: 733,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sip/story/StorySection.tsx",
                            lineNumber: 720,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sip/story/StorySection.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sip/story/StorySection.tsx",
            lineNumber: 408,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/story/StorySection.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s(StorySection, "PSHVT25hMFA2HcSSc0dhex0mf5Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = StorySection;
var _c, _c1;
__turbopack_context__.k.register(_c, "DynamicStoryScene");
__turbopack_context__.k.register(_c1, "StorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/ui/FluteEdge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FluteEdge",
    ()=>FluteEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FluteEdge({ className, color, flip = false }) {
    _s();
    const pathD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FluteEdge.useMemo[pathD]": ()=>{
            const waves = 9;
            const width = 1200;
            const s = width / waves;
            const A = 34;
            const yOffset = 4; // allow -1.7 to be within viewBox 0 0 1200 74
            let d = `M 0 ${A + yOffset}`;
            for(let i = 0; i < waves; i++){
                const x = i * s;
                const cp1x = (x + 0.18 * s).toFixed(2);
                const cp1y = (A - 1.05 * A + yOffset).toFixed(2);
                const cp2x = (x + 0.32 * s).toFixed(2);
                const cp2y = (A - 1.05 * A + yOffset).toFixed(2);
                const midx = (x + 0.5 * s).toFixed(2);
                const midy = (A - 0.02 * A + yOffset).toFixed(2);
                const cp3x = (x + 0.82 * s).toFixed(2);
                const cp3y = (A + A + yOffset).toFixed(2);
                const endx = ((i + 1) * s).toFixed(2);
                const endy = (A + yOffset).toFixed(2);
                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${midx} ${midy} S ${cp3x} ${cp3y}, ${endx} ${endy}`;
            }
            const bottomY = 2 * A + 6;
            d += ` L 1200 ${bottomY} L 0 ${bottomY} Z`;
            return d;
        }
    }["FluteEdge.useMemo[pathD]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full overflow-hidden leading-none pointer-events-none select-none z-20", flip && "rotate-180", className),
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1200 74",
            preserveAspectRatio: "none",
            className: "w-full h-[clamp(28px,5vw,64px)] block",
            style: {
                fill: color || "currentColor"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathD
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/FluteEdge.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sip/ui/FluteEdge.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/ui/FluteEdge.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(FluteEdge, "7JKrozR+DG1y4kFw7HC1izSRlF4=");
_c = FluteEdge;
var _c;
__turbopack_context__.k.register(_c, "FluteEdge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/ui/PackerLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PackerLogo",
    ()=>PackerLogo,
    "PackerMark",
    ()=>PackerMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PackerMark({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 40 32",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-7 h-6 stroke-current fill-none shrink-0", className),
        strokeWidth: "3.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 5H37M3 27H37"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 16C5.55 1.33 8.95 1.33 11.5 16S17.45 30.67 20 16S25.95 1.33 28.5 16S34.45 30.67 37 16"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/ui/PackerLogo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = PackerMark;
function PackerLogo({ className, showTagline = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-3 select-none text-current", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackerMark, {
                className: "w-6 h-5"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display font-semibold text-[0.95rem] tracking-[0.08em] uppercase",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].name
                    }, void 0, false, {
                        fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    showTagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[0.65rem] tracking-[0.14em] opacity-70",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].tagline
                    }, void 0, false, {
                        fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/ui/PackerLogo.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/ui/PackerLogo.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = PackerLogo;
var _c, _c1;
__turbopack_context__.k.register(_c, "PackerMark");
__turbopack_context__.k.register(_c1, "PackerLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/ui/SipLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SipLogo",
    ()=>SipLogo,
    "SipMark",
    ()=>SipMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function SipMark({ className, animated = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "1 4.5 30 33",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 fill-current shrink-0", animated && "sip-mark-animated", className),
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "sip-mark-top transition-transform duration-500 ease-[var(--ease-expo)]",
                d: "M3 20 L7 16.5 L11 20.5 L15 16 L19 20.5 L23 16.5 L27 20.5 L29 18.5 A14 14 0 0 0 3 20 Z"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/SipLogo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "sip-mark-bottom transition-transform duration-500 ease-[var(--ease-expo)]",
                d: "M3 23 L7 19.5 L11 23.5 L15 19 L19 23.5 L23 19.5 L27 23.5 L29 21.5 A14 14 0 0 1 3 23 Z"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/SipLogo.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/ui/SipLogo.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SipMark;
function SipLogo({ compact = false, className, animated = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "#sip-story",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-3 select-none group text-current", className),
        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].product}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SipMark, {
                animated: animated,
                className: "w-7 h-7"
            }, void 0, false, {
                fileName: "[project]/components/sip/ui/SipLogo.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display font-semibold text-[1.15rem] leading-none tracking-[0.14em]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark
                    }, void 0, false, {
                        fileName: "[project]/components/sip/ui/SipLogo.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[0.5rem] tracking-[0.18em] uppercase opacity-70 mt-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].product
                    }, void 0, false, {
                        fileName: "[project]/components/sip/ui/SipLogo.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/ui/SipLogo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/ui/SipLogo.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = SipLogo;
var _c, _c1;
__turbopack_context__.k.register(_c, "SipMark");
__turbopack_context__.k.register(_c1, "SipLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/ui/Still.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Still",
    ()=>Still
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/stills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Still({ stillKey, alt, className, priority = false }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(priority);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Still.useEffect": ()=>{
            if (priority) {
                setInView(true);
                return;
            }
            const el = containerRef.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "Still.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                }
            }["Still.useEffect"], {
                rootMargin: "600px"
            });
            observer.observe(el);
            return ({
                "Still.useEffect": ()=>observer.disconnect()
            })["Still.useEffect"];
        }
    }["Still.useEffect"], [
        priority
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Still.useEffect": ()=>{
            if (!inView) return;
            let isMounted = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestStill"])(stillKey).then({
                "Still.useEffect": (url)=>{
                    if (isMounted) setSrc(url);
                }
            }["Still.useEffect"]).catch({
                "Still.useEffect": (err)=>{
                    console.error("Failed to load still:", stillKey, err);
                }
            }["Still.useEffect"]);
            return ({
                "Still.useEffect": ()=>{
                    isMounted = false;
                }
            })["Still.useEffect"];
        }
    }["Still.useEffect"], [
        inView,
        stillKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center w-full h-full", className),
        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "sip-still-in w-full h-full object-contain pointer-events-none select-none",
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/components/sip/ui/Still.tsx",
            lineNumber: 67,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "img",
            "aria-label": alt,
            className: "sr-only",
            children: alt
        }, void 0, false, {
            fileName: "[project]/components/sip/ui/Still.tsx",
            lineNumber: 74,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/ui/Still.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Still, "GYSUYyeyy5yQr4RAj4GHdHz2FuA=");
_c = Still;
var _c;
__turbopack_context__.k.register(_c, "Still");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Button({ href, onClick, children, variant = "ink", size = "md", className, arrow = true, external = false, type = "button", disabled = false, "data-cursor": dataCursor = "cta" }) {
    const baseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em] font-sans transition-all duration-500 ease-[var(--ease-expo)] select-none", size === "md" && "px-6 py-3 text-[0.85rem]", size === "lg" && "px-8 py-4 text-[0.95rem]", variant === "ink" && "bg-[var(--color-ink)] text-[var(--color-ivory)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)]", variant === "ivory" && "bg-[var(--color-ivory)] text-[var(--color-ink)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)]", variant === "ghost" && "border border-[color-mix(in_srgb,var(--color-ink)_20%,transparent)] text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)]", variant === "ghost-light" && "border border-[color-mix(in_srgb,var(--color-ivory)_25%,transparent)] text-[var(--color-ivory)] hover:border-[var(--color-ivory)] hover:bg-[color-mix(in_srgb,var(--color-ivory)_10%,transparent)]", disabled && "opacity-50 pointer-events-none", className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-[14px] h-[14px] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 8h10M9 4l4 4-4 4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/Button.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
    if (href) {
        if (external || href.startsWith("http")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: baseClasses,
                "data-cursor": dataCursor,
                onClick: onClick,
                children: content
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: baseClasses,
            "data-cursor": dataCursor,
            onClick: onClick,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        disabled: disabled,
        className: baseClasses,
        onClick: onClick,
        "data-cursor": dataCursor,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cursor",
    ()=>Cursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Cursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || prefersReducedMotion) return;
            // Check fine pointer
            const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            if (!isFine) return;
            document.body.classList.add("cursor-none-desktop");
            let mouseX = -100;
            let mouseY = -100;
            let ringX = -100;
            let ringY = -100;
            let isVisible = false;
            let currentMode = "";
            let rafId;
            const onMouseMove = {
                "Cursor.useEffect.onMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    if (!isVisible) {
                        isVisible = true;
                        ringX = mouseX;
                        ringY = mouseY;
                        if (dotRef.current) dotRef.current.style.opacity = "1";
                        if (ringRef.current) ringRef.current.style.opacity = "1";
                    }
                    // Check nearest [data-cursor]
                    const target = e.target.closest("[data-cursor]");
                    const mode = target ? target.getAttribute("data-cursor") || "" : "";
                    if (mode !== currentMode) {
                        currentMode = mode;
                        if (mode === "view") setLabel("View");
                        else if (mode === "drag") setLabel("Drag");
                        else if (mode === "3d" || mode === "rotate") setLabel("Rotate");
                        else setLabel("");
                    }
                }
            }["Cursor.useEffect.onMouseMove"];
            const onMouseLeave = {
                "Cursor.useEffect.onMouseLeave": ()=>{
                    isVisible = false;
                    if (dotRef.current) dotRef.current.style.opacity = "0";
                    if (ringRef.current) ringRef.current.style.opacity = "0";
                }
            }["Cursor.useEffect.onMouseLeave"];
            const animate = {
                "Cursor.useEffect.animate": ()=>{
                    ringX += (mouseX - ringX) * 0.18;
                    ringY += (mouseY - ringY) * 0.18;
                    if (dotRef.current) {
                        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                    }
                    if (ringRef.current) {
                        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
                    }
                    rafId = requestAnimationFrame(animate);
                }
            }["Cursor.useEffect.animate"];
            window.addEventListener("mousemove", onMouseMove, {
                passive: true
            });
            document.addEventListener("mouseleave", onMouseLeave);
            rafId = requestAnimationFrame(animate);
            return ({
                "Cursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseleave", onMouseLeave);
                    cancelAnimationFrame(rafId);
                    document.body.classList.remove("cursor-none-desktop");
                }
            })["Cursor.useEffect"];
        }
    }["Cursor.useEffect"], [
        prefersReducedMotion
    ]);
    if (prefersReducedMotion) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                "aria-hidden": "true",
                className: "fixed top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full bg-[var(--color-ivory)] pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 select-none mix-blend-difference"
            }, void 0, false, {
                fileName: "[project]/components/ui/Cursor.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                "aria-hidden": "true",
                className: `fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 -ml-[16px] -mt-[16px] rounded-full flex items-center justify-center transition-all duration-300 ease-[var(--ease-expo)] select-none ${label ? "w-[80px] h-[80px] -ml-[40px] -mt-[40px] bg-[var(--color-ivory)] text-[var(--color-ink)] !mix-blend-normal shadow-lg" : ""}`,
                style: label ? {} : {
                    width: "32px",
                    height: "32px",
                    border: "1.5px solid var(--color-ivory)",
                    mixBlendMode: "difference"
                },
                children: label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[10px] tracking-[0.14em] font-semibold uppercase text-[var(--color-ink)]",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/ui/Cursor.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Cursor.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Cursor.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Cursor, "4MpQWgv9Vk5RbmHCBOxCF/uvTjY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Magnetic",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Magnetic({ children, strength = 0.22, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Magnetic.useEffect": ()=>{
            const el = ref.current;
            if (!el || prefersReducedMotion) return;
            // Mouse pointers only
            if (window.matchMedia("(pointer: coarse)").matches) return;
            let targetX = 0;
            let targetY = 0;
            let currentX = 0;
            let currentY = 0;
            let rafId = null;
            let isHovered = false;
            const animate = {
                "Magnetic.useEffect.animate": ()=>{
                    currentX += (targetX - currentX) * 0.16;
                    currentY += (targetY - currentY) * 0.16;
                    if (el) {
                        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
                    }
                    if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
                        rafId = requestAnimationFrame(animate);
                    } else {
                        currentX = targetX;
                        currentY = targetY;
                        if (el) {
                            el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                        }
                        rafId = null;
                    }
                }
            }["Magnetic.useEffect.animate"];
            const handleMouseMove = {
                "Magnetic.useEffect.handleMouseMove": (e)=>{
                    const rect = el.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    targetX = (e.clientX - centerX) * strength;
                    targetY = (e.clientY - centerY) * strength;
                    if (!rafId) {
                        rafId = requestAnimationFrame(animate);
                    }
                }
            }["Magnetic.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "Magnetic.useEffect.handleMouseEnter": ()=>{
                    isHovered = true;
                    if (!rafId) {
                        rafId = requestAnimationFrame(animate);
                    }
                }
            }["Magnetic.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "Magnetic.useEffect.handleMouseLeave": ()=>{
                    isHovered = false;
                    targetX = 0;
                    targetY = 0;
                    if (!rafId) {
                        rafId = requestAnimationFrame(animate);
                    }
                }
            }["Magnetic.useEffect.handleMouseLeave"];
            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "Magnetic.useEffect": ()=>{
                    el.removeEventListener("mousemove", handleMouseMove);
                    el.removeEventListener("mouseenter", handleMouseEnter);
                    el.removeEventListener("mouseleave", handleMouseLeave);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["Magnetic.useEffect"];
        }
    }["Magnetic.useEffect"], [
        strength,
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            display: "inline-block"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Magnetic.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(Magnetic, "6Ms68tmVLriAtTNYJW0WYVwshXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/sip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flavours",
    ()=>flavours,
    "getIngredients",
    ()=>getIngredients,
    "getNutrition",
    ()=>getNutrition,
    "reviews",
    ()=>reviews,
    "sipBrand",
    ()=>sipBrand,
    "sipNav",
    ()=>sipNav,
    "sipPacker",
    ()=>sipPacker,
    "sipStages",
    ()=>sipStages,
    "sipStats",
    ()=>sipStats
]);
const sipBrand = {
    name: "BR-Nario",
    wordmark: "BR-NARIO",
    product: "Tender coconut water",
    volume: "250 ml",
    tagline: "The real source of every sip."
};
const sipPacker = {
    name: "Fluteworks Packaging",
    short: "Fluteworks",
    wordmark: "FLUTEWORKS",
    tagline: "Corrugated boxes & mono cartons",
    positioning: "Corrugated shippers and mono cartons — designed, printed, converted and tested under one roof.",
    place: "India",
    href: "#sip-story"
};
const sipNav = [
    {
        label: "Story",
        href: "#sip-story"
    },
    {
        label: "Flavours",
        href: "#sip-flavours"
    },
    {
        label: "Health",
        href: "#sip-health"
    },
    {
        label: "Reviews",
        href: "#sip-reviews"
    }
];
const sipStats = [
    {
        value: "500",
        unit: "mg",
        label: "Potassium per can"
    },
    {
        value: "100",
        unit: "%",
        label: "Natural hydration"
    },
    {
        value: "0",
        unit: "g",
        label: "Added sugar"
    },
    {
        value: "45",
        unit: "kcal",
        label: "Per 250 ml can"
    }
];
const sipStages = [
    "Whole coconut",
    "Cracked open",
    "Canned",
    "Packed"
];
const flavours = [
    {
        id: "original",
        name: "Coconut",
        short: "Original",
        notes: "One green coconut, opened and pressed within a day of harvest.",
        kcal: 45,
        bg: "#f5f3ee",
        ink: "#1f3328",
        accent: "#2f4a3c",
        tint: "#e4e9dc",
        fruit: "coconut"
    },
    {
        id: "mango",
        name: "Mango",
        short: "Alphonso",
        notes: "Ratnagiri Alphonso pulp folded into cold-pressed coconut water.",
        kcal: 62,
        bg: "#fbefd9",
        ink: "#3b2a12",
        accent: "#e39a2d",
        tint: "#f4e4c4",
        fruit: "mango"
    },
    {
        id: "guava",
        name: "Pink guava",
        short: "Pink guava",
        notes: "Blush-pink guava with a gentle, floral finish.",
        kcal: 58,
        bg: "#f9e3de",
        ink: "#3d1f1c",
        accent: "#d9665f",
        tint: "#f1d6d0",
        fruit: "guava"
    },
    {
        id: "lychee",
        name: "Lychee",
        short: "Lychee",
        notes: "Muzaffarpur lychee — perfumed, bright and barely sweet.",
        kcal: 55,
        bg: "#f4e6ee",
        ink: "#35202c",
        accent: "#b9668f",
        tint: "#ecdbe4",
        fruit: "lychee"
    },
    {
        id: "pineapple",
        name: "Pineapple",
        short: "Pineapple",
        notes: "Sun-ripe pineapple for a sharper, tropical edge.",
        kcal: 57,
        bg: "#f7f0cf",
        ink: "#33300f",
        accent: "#c9a72a",
        tint: "#efe7c1",
        fruit: "pineapple"
    },
    {
        id: "lime",
        name: "Lime & mint",
        short: "Lime & mint",
        notes: "Squeezed lime and garden mint. The one for hot afternoons.",
        kcal: 48,
        bg: "#e6f0dd",
        ink: "#1d3320",
        accent: "#5f9a4e",
        tint: "#d9e6d0",
        fruit: "lime"
    }
];
function getIngredients(flavour) {
    if (flavour.fruit === "coconut") {
        return [
            "Tender coconut water (100%)."
        ];
    }
    return [
        "Tender coconut water (88%),",
        `${flavour.name.toLowerCase()} pulp / juice (12%).`
    ];
}
function getNutrition(flavour) {
    const energyKcal = flavour ? flavour.kcal : 45;
    return [
        {
            label: "Energy",
            value: `${energyKcal} kcal`
        },
        {
            label: "Carbohydrate",
            value: "10.5 g"
        },
        {
            label: "  of which sugars*",
            value: "9.0 g",
            indent: true
        },
        {
            label: "Added sugar",
            value: "0 g"
        },
        {
            label: "Fat",
            value: "0 g"
        },
        {
            label: "Protein",
            value: "0.4 g"
        },
        {
            label: "Potassium",
            value: "500 mg"
        },
        {
            label: "Sodium",
            value: "62 mg"
        }
    ];
}
const reviews = [
    {
        quote: "It tastes like the coconut the vendor opens for you on the beach — not like something that sat in a warehouse.",
        author: "Ananya R.",
        city: "Bengaluru"
    },
    {
        quote: "I swapped my afternoon soda for the lime & mint. Three weeks in, I don't miss it at all.",
        author: "Kabir S.",
        city: "Mumbai"
    },
    {
        quote: "Post-run, this is the only thing I reach for. Light, salty-sweet and properly cold.",
        author: "Meera J.",
        city: "Pune"
    },
    {
        quote: "The crate arrived in a box sturdy enough to reuse. Not one dented can across two orders.",
        author: "Rohan D.",
        city: "Gurugram"
    },
    {
        quote: "Pink guava is dangerous. My kids and I fight over the last can every weekend.",
        author: "Farah K.",
        city: "Hyderabad"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
"use client";
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].config({
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].defaults({
        ease: "power3.out",
        duration: 1
    });
}
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>useEvent,
    "useInView",
    ()=>useInView,
    "useIsMobile",
    ()=>useIsMobile,
    "useIsTouch",
    ()=>useIsTouch,
    "useLatest",
    ()=>useLatest,
    "useMediaQuery",
    ()=>useMediaQuery,
    "usePointer",
    ()=>usePointer,
    "useQualityTier",
    ()=>useQualityTier,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const mql = window.matchMedia(query);
            setMatches(mql.matches);
            const handler = {
                "useMediaQuery.useEffect.handler": (e)=>setMatches(e.matches)
            }["useMediaQuery.useEffect.handler"];
            mql.addEventListener("change", handler);
            return ({
                "useMediaQuery.useEffect": ()=>mql.removeEventListener("change", handler)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
function useReducedMotion() {
    _s1();
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}
_s1(useReducedMotion, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useIsMobile() {
    _s2();
    return useMediaQuery("(max-width: 767px)");
}
_s2(useIsMobile, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useIsTouch() {
    _s3();
    const [isTouch, setIsTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsTouch.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
        }
    }["useIsTouch.useEffect"], []);
    return isTouch;
}
_s3(useIsTouch, "Ki4wWnlfXGClyxMOF+YkZO2M1CM=");
function useQualityTier() {
    _s4();
    const [tier, setTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const isMobile = useIsMobile();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQualityTier.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (isMobile) {
                setTier(0);
                return;
            }
            const nav = navigator;
            const cores = nav.hardwareConcurrency || 4;
            const memory = nav.deviceMemory || 4;
            const dpr = window.devicePixelRatio || 1;
            if (cores <= 4 || memory <= 4) {
                setTier(0);
            } else if (cores >= 8 && memory >= 8 && dpr <= 2) {
                setTier(2);
            } else {
                setTier(1);
            }
        }
    }["useQualityTier.useEffect"], [
        isMobile
    ]);
    return tier;
}
_s4(useQualityTier, "rN25J4CuuYbaqy2MZX/ZgUzSFds=", false, function() {
    return [
        useIsMobile
    ];
});
function useInView(options = {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.05
}) {
    _s5();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    setInView(entry.isIntersecting);
                }
            }["useInView.useEffect"], options);
            observer.observe(el);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        options.rootMargin,
        options.threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s5(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function usePointer() {
    _s6();
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePointer.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const handlePointerMove = {
                "usePointer.useEffect.handlePointerMove": (e)=>{
                    const x = e.clientX / window.innerWidth * 2 - 1;
                    const y = -(e.clientY / window.innerHeight) * 2 + 1; // y up
                    pointerRef.current.x = x;
                    pointerRef.current.y = y;
                }
            }["usePointer.useEffect.handlePointerMove"];
            window.addEventListener("mousemove", handlePointerMove, {
                passive: true
            });
            return ({
                "usePointer.useEffect": ()=>window.removeEventListener("mousemove", handlePointerMove)
            })["usePointer.useEffect"];
        }
    }["usePointer.useEffect"], []);
    return pointerRef;
}
_s6(usePointer, "c8yLsanxbD0VVsTjORMCQZTVbAo=");
function useLatest(value) {
    _s7();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLatest.useEffect": ()=>{
            ref.current = value;
        }
    }["useLatest.useEffect"]);
    return ref;
}
_s7(useLatest, "8uVE59eA/r6b92xF80p7sH8rXLk=");
function useEvent(handler) {
    _s8();
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEvent.useEffect": ()=>{
            handlerRef.current = handler;
        }
    }["useEvent.useEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEvent.useCallback": (...args)=>handlerRef.current(...args)
    }["useEvent.useCallback"], []);
}
_s8(useEvent, "r8EkGPWeoAtbpqQQUu7qFrG8tD8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAN",
    ()=>CAN,
    "COCONUT",
    ()=>COCONUT,
    "createCan",
    ()=>createCan,
    "createCoconut",
    ()=>createCoconut,
    "getCanMaterials",
    ()=>getCanMaterials,
    "getCoconutMaterials",
    ()=>getCoconutMaterials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/textures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
;
;
;
const COCONUT = {
    RX: 0.86,
    RY: 0.98,
    INNER: 0.69,
    U: 168,
    V: 60,
    TEETH: 11
};
const CAN = {
    R: 0.32,
    H: 1.6,
    BODY_Y0: 0.13,
    BODY_Y1: 1.44
};
// ==========================================
// COCONUT MATH & GEOMETRIES
// ==========================================
const toothRnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(7);
const toothAmp = [];
for(let i = 0; i < COCONUT.TEETH; i++){
    toothAmp.push(0.6 + toothRnd() * 0.7);
}
const toothPeak = [];
for(let i = 0; i < COCONUT.TEETH; i++){
    toothPeak.push(0.35 + toothRnd() * 0.3);
}
function cutTheta(phi) {
    const normPhi = (phi % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const x = normPhi / (Math.PI * 2) * COCONUT.TEETH;
    const i = Math.floor(x) % COCONUT.TEETH;
    const f = x - Math.floor(x);
    const peak = toothPeak[i];
    const amp = toothAmp[i];
    const tri = f < peak ? f / peak : (1 - f) / (1 - peak);
    return Math.PI / 2 - 0.07 + tri * 0.17 * amp + 0.03 * Math.sin(phi);
}
function evalCoconutSurface(theta, phi, scale = 1.0, target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()) {
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);
    const lobes = 1 + 0.04 * Math.cos(3 * phi + 0.4) * (sinTheta * sinTheta);
    const taper = 1 - 0.14 * Math.pow(Math.max(0, -cosTheta), 2.2);
    const n = 1 + 0.012 * Math.sin(5 * phi + 3 * theta) + 0.008 * Math.sin(9 * phi - 7 * theta);
    const r = COCONUT.RX * sinTheta * lobes * taper * n * scale;
    const yFactor = cosTheta < 0 ? 1.07 : 1 - 0.05 * Math.pow(cosTheta, 4);
    const y = COCONUT.RY * cosTheta * yFactor * n * scale;
    target.set(r * Math.cos(phi), y, r * Math.sin(phi));
    return target;
}
const tempPos0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempPosPhiP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempPosPhiM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempPosThetaP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempPosThetaM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempDPhi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const tempDTheta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const poleUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
const poleDown = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0);
function evalCoconutNormal(theta, phi, scale = 1.0, target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()) {
    if (theta <= 1e-4) {
        return target.set(0, 1, 0);
    }
    if (theta >= Math.PI - 1e-4) {
        return target.set(0, -1, 0);
    }
    const eps = 1e-3;
    // Central differences as specified:
    // "Normals are analytic: central differences (ε = 1e-3) of the surface in φ and θ, cross(dφ, dθ), normalised; exact (0,±1,0) at the poles."
    evalCoconutSurface(theta, phi + eps, scale, tempPosPhiP);
    evalCoconutSurface(theta, phi - eps, scale, tempPosPhiM);
    tempDPhi.subVectors(tempPosPhiP, tempPosPhiM).divideScalar(2 * eps);
    evalCoconutSurface(theta + eps, phi, scale, tempPosThetaP);
    evalCoconutSurface(theta - eps, phi, scale, tempPosThetaM);
    tempDTheta.subVectors(tempPosThetaP, tempPosThetaM).divideScalar(2 * eps);
    // Surface tangent dPhi is along phi (azimuth), dTheta is along theta (polar downwards)
    // cross(dPhi, dTheta) points OUTWARD
    target.crossVectors(tempDPhi, tempDTheta);
    const len = target.length();
    if (len > 1e-6) {
        target.divideScalar(len);
    } else {
        target.set(0, theta < Math.PI / 2 ? 1 : -1, 0);
    }
    // Smooth polar blend to exact (0, 1, 0) and (0, -1, 0) avoiding polar parametric noise singularity
    const poleMargin = 0.22;
    if (theta < poleMargin) {
        const w = theta / poleMargin;
        const smoothW = w * w * (3 - 2 * w);
        target.lerpVectors(poleUp, target, smoothW).normalize();
    } else if (theta > Math.PI - poleMargin) {
        const w = (Math.PI - theta) / poleMargin;
        const smoothW = w * w * (3 - 2 * w);
        target.lerpVectors(poleDown, target, smoothW).normalize();
    }
    return target;
}
function buildCoconutHalfGeometry(isTop, scale = 1.0, invertNormals = false) {
    const U = COCONUT.U;
    const V = COCONUT.V;
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    const tempPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tempNorm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    for(let j = 0; j <= V; j++){
        const t = j / V;
        for(let i = 0; i <= U; i++){
            const phi = i / U * Math.PI * 2;
            const cut = cutTheta(phi);
            const theta = isTop ? t * cut : cut + t * (Math.PI - cut);
            evalCoconutSurface(theta, phi, scale, tempPos);
            evalCoconutNormal(theta, phi, scale, tempNorm);
            if (invertNormals) {
                tempNorm.negate();
            }
            positions.push(tempPos.x, tempPos.y, tempPos.z);
            normals.push(tempNorm.x, tempNorm.y, tempNorm.z);
            uvs.push(i / U, 1 - theta / Math.PI);
        }
    }
    for(let j = 0; j < V; j++){
        for(let i = 0; i < U; i++){
            const a = j * (U + 1) + i;
            const b = (j + 1) * (U + 1) + i;
            const c = (j + 1) * (U + 1) + (i + 1);
            const d = j * (U + 1) + (i + 1);
            if (!invertNormals) {
                // Outward front-facing CCW winding
                indices.push(a, d, b);
                indices.push(b, d, c);
            } else {
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
    }
    const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    geom.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
    geom.setAttribute("normal", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](normals, 3));
    geom.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
    geom.setIndex(indices);
    return geom;
}
function buildCoconutRimGeometry(isTop = false) {
    const U = COCONUT.U;
    const R = 6; // 7 rings (0 to 6)
    const positions = [];
    const uvs = [];
    const indices = [];
    const tempPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    for(let r = 0; r <= R; r++){
        const scale = 1.0 - r / R * (1.0 - COCONUT.INNER);
        for(let i = 0; i <= U; i++){
            const phi = i / U * Math.PI * 2;
            const cut = cutTheta(phi);
            evalCoconutSurface(cut, phi, scale, tempPos);
            positions.push(tempPos.x, tempPos.y, tempPos.z);
            uvs.push(i / U * 6, 1 - r / R);
        }
    }
    for(let r = 0; r < R; r++){
        for(let i = 0; i < U; i++){
            const a = r * (U + 1) + i;
            const b = (r + 1) * (U + 1) + i;
            const c = (r + 1) * (U + 1) + (i + 1);
            const d = r * (U + 1) + (i + 1);
            if (isTop) {
                // Top rim faces downward into crack (away from top half)
                indices.push(a, d, b);
                indices.push(b, d, c);
            } else {
                // Bottom rim faces upward into crack (away from bottom half)
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
    }
    const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    geom.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](positions, 3));
    geom.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
    geom.setIndex(indices);
    geom.computeVertexNormals();
    return geom;
}
let cachedCoconutGeometries = null;
let cachedCoconutMaterials = null;
function getCoconutMaterials() {
    if (cachedCoconutMaterials) return cachedCoconutMaterials;
    const skinTextures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoconutSkinTextures"])();
    const rimTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRimCutTexture"])();
    const skin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: skinTextures.color,
        bumpMap: skinTextures.bump,
        bumpScale: 1.1,
        roughness: 0.46,
        clearcoat: 0.35,
        clearcoatRoughness: 0.42,
        sheen: 0.4,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#d9e6a8"),
        sheenRoughness: 0.6
    });
    const meat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#f6f3ea"),
        roughness: 0.3,
        clearcoat: 0.7,
        clearcoatRoughness: 0.25,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
    });
    const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: rimTexture,
        roughness: 0.7,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
    });
    cachedCoconutMaterials = {
        skin,
        meat,
        rim
    };
    return cachedCoconutMaterials;
}
function createCoconut() {
    if (!cachedCoconutGeometries) {
        cachedCoconutGeometries = {
            outerTop: buildCoconutHalfGeometry(true, 1.0, false),
            innerTop: buildCoconutHalfGeometry(true, COCONUT.INNER, false),
            outerBottom: buildCoconutHalfGeometry(false, 1.0, false),
            innerBottom: buildCoconutHalfGeometry(false, COCONUT.INNER, false),
            rimTop: buildCoconutRimGeometry(true),
            rimBottom: buildCoconutRimGeometry(false)
        };
    }
    const mats = getCoconutMaterials();
    const topGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    topGroup.name = "coconut-top";
    const outerTopMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.outerTop, mats.skin);
    outerTopMesh.castShadow = true;
    outerTopMesh.receiveShadow = true;
    topGroup.add(outerTopMesh);
    const innerTopMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.innerTop, mats.meat);
    innerTopMesh.castShadow = true;
    innerTopMesh.receiveShadow = true;
    topGroup.add(innerTopMesh);
    const topRimMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.rimTop, mats.rim);
    topRimMesh.castShadow = true;
    topRimMesh.receiveShadow = true;
    topGroup.add(topRimMesh);
    const bottomGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    bottomGroup.name = "coconut-bottom";
    const outerBottomMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.outerBottom, mats.skin);
    outerBottomMesh.castShadow = true;
    outerBottomMesh.receiveShadow = true;
    bottomGroup.add(outerBottomMesh);
    const innerBottomMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.innerBottom, mats.meat);
    innerBottomMesh.castShadow = true;
    innerBottomMesh.receiveShadow = true;
    bottomGroup.add(innerBottomMesh);
    const bottomRimMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](cachedCoconutGeometries.rimBottom, mats.rim);
    bottomRimMesh.castShadow = true;
    bottomRimMesh.receiveShadow = true;
    bottomGroup.add(bottomRimMesh);
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "coconut-root";
    root.add(topGroup);
    root.add(bottomGroup);
    return {
        root,
        top: topGroup,
        bottom: bottomGroup
    };
}
// ==========================================
// CAN GEOMETRY & FACTORY
// ==========================================
let cachedCanGeometries = null;
let cachedCanMetalMaterial = null;
let cachedCanLidMaterial = null;
function getCanMaterials(flavour) {
    if (!cachedCanMetalMaterial) {
        cachedCanMetalMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#d4d6d8"),
            metalness: 1.0,
            roughness: 0.26,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
    }
    if (!cachedCanLidMaterial) {
        cachedCanLidMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#c9ccce"),
            metalness: 1.0,
            roughness: 0.3
        });
    }
    const labelTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCanLabelTexture"])(flavour);
    const labelMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: labelTexture,
        roughness: 0.32,
        metalness: 0.18,
        clearcoat: 0.85,
        clearcoatRoughness: 0.16
    });
    return {
        metal: cachedCanMetalMaterial,
        lid: cachedCanLidMaterial,
        label: labelMaterial
    };
}
function getCanGeometries() {
    if (cachedCanGeometries) return cachedCanGeometries;
    const rawProfile = [
        [
            0,
            0.058
        ],
        [
            0.1,
            0.055
        ],
        [
            0.19,
            0.038
        ],
        [
            0.232,
            0.006
        ],
        [
            0.245,
            0
        ],
        [
            0.262,
            0.006
        ],
        [
            0.285,
            0.03
        ],
        [
            0.305,
            0.062
        ],
        [
            0.318,
            0.1
        ],
        [
            0.32,
            0.13
        ],
        [
            0.32,
            1.44
        ],
        [
            0.316,
            1.47
        ],
        [
            0.303,
            1.51
        ],
        [
            0.29,
            1.545
        ],
        [
            0.286,
            1.572
        ],
        [
            0.291,
            1.59
        ],
        [
            0.287,
            1.6
        ],
        [
            0.278,
            1.598
        ],
        [
            0.272,
            1.582
        ],
        [
            0.265,
            1.576
        ],
        [
            0,
            1.576
        ]
    ];
    const halfH = CAN.H / 2;
    const profilePoints = rawProfile.map(([x, y])=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y - halfH));
    const bodyGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LatheGeometry"](profilePoints, 96);
    bodyGeom.computeVertexNormals();
    // Label: open CylinderGeometry radius R + .0016, height BODY_Y1 - BODY_Y0 - .02, 144 radial segments, thetaStart -PI/2
    const labelH = CAN.BODY_Y1 - CAN.BODY_Y0 - 0.02;
    const labelGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](CAN.R + 0.0016, CAN.R + 0.0016, labelH, 144, 1, true, -Math.PI / 2, Math.PI * 2);
    // Center label at body band: middle of BODY_Y0 and BODY_Y1, offset by -halfH
    const labelY = (CAN.BODY_Y0 + CAN.BODY_Y1) / 2 - halfH;
    labelGeom.translate(0, labelY, 0);
    // Ring pull: ellipse shape .085 x .055 with elliptical hole .042 x .03 offset .02
    const pullShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    pullShape.absellipse(0, 0, 0.085, 0.055, 0, Math.PI * 2, false, 0);
    const holePath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"]();
    holePath.absellipse(0.02, 0, 0.042, 0.03, 0, Math.PI * 2, true, 0);
    pullShape.holes.push(holePath);
    const ringPullGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](pullShape, {
        depth: 0.008,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.004,
        bevelThickness: 0.003,
        curveSegments: 24
    });
    ringPullGeom.center();
    // Rotate flat and position on lid
    ringPullGeom.rotateX(Math.PI / 2);
    ringPullGeom.translate(0.03, 1.58 - halfH, 0);
    cachedCanGeometries = {
        body: bodyGeom,
        label: labelGeom,
        ringPull: ringPullGeom
    };
    return cachedCanGeometries;
}
function createCan(flavour = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0]) {
    const geoms = getCanGeometries();
    const mats = getCanMaterials(flavour);
    const bodyMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geoms.body, mats.metal);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    const labelMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geoms.label, mats.label);
    labelMesh.castShadow = true;
    labelMesh.receiveShadow = true;
    const ringPullMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geoms.ringPull, mats.lid);
    ringPullMesh.castShadow = true;
    ringPullMesh.receiveShadow = true;
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = `can-${flavour.id}`;
    root.add(bodyMesh);
    root.add(labelMesh);
    root.add(ringPullMesh);
    return {
        root,
        body: bodyMesh,
        label: labelMesh,
        ringPull: ringPullMesh,
        flavour
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/stills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAN_POSE",
    ()=>CAN_POSE,
    "STUDIO_CONFIG",
    ()=>STUDIO_CONFIG,
    "requestStill",
    ()=>requestStill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/textures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
;
;
;
;
;
const CAN_POSE = {
    front: {
        y: 0.18,
        z: -0.1
    },
    back: {
        y: Math.PI + 0.12,
        z: 0.06
    }
};
const STUDIO_CONFIG = {
    fov: 24,
    aspect: 600 / 800,
    canCamPos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.2, 5.2),
    ambientColor: "#fff7ea",
    ambientIntensity: 0.5,
    keyPos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-3.5, 5, 4.5),
    keyColor: "#fff2df",
    keyIntensity: 2.2,
    rimPos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](4.5, 2.2, -3.5),
    rimColor: "#e3ebf2",
    rimIntensity: 1.5
};
// Cache for generated stills: key -> object URL
const stillCache = new Map();
const pendingPromises = new Map();
const renderQueue = [];
let isProcessingQueue = false;
let offscreenRenderer = null;
let pmremGenerator = null;
let roomEnvTarget = null;
let contextReleaseTimer = null;
function getSharedOffscreenRenderer() {
    if (contextReleaseTimer) {
        clearTimeout(contextReleaseTimer);
        contextReleaseTimer = null;
    }
    if (!offscreenRenderer) {
        offscreenRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: "low-power"
        });
        offscreenRenderer.setSize(600, 800);
        offscreenRenderer.setPixelRatio(1.5);
        offscreenRenderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        offscreenRenderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"];
        offscreenRenderer.setClearColor(0x000000, 0);
        pmremGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](offscreenRenderer);
        pmremGenerator.compileEquirectangularShader();
        const roomScene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEnvironment"]();
        roomEnvTarget = pmremGenerator.fromScene(roomScene, 0.04);
    }
    return {
        renderer: offscreenRenderer,
        env: roomEnvTarget.texture
    };
}
function scheduleContextRelease() {
    if (contextReleaseTimer) clearTimeout(contextReleaseTimer);
    contextReleaseTimer = setTimeout(()=>{
        if (renderQueue.length === 0 && offscreenRenderer) {
            if (roomEnvTarget) {
                roomEnvTarget.dispose();
                roomEnvTarget = null;
            }
            if (pmremGenerator) {
                pmremGenerator.dispose();
                pmremGenerator = null;
            }
            offscreenRenderer.dispose();
            offscreenRenderer.forceContextLoss();
            offscreenRenderer = null;
        }
    }, 1500);
}
function setupSceneLights(scene, envTexture) {
    scene.environment = envTexture;
    scene.environmentIntensity = 0.9;
    const ambient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](STUDIO_CONFIG.ambientColor, STUDIO_CONFIG.ambientIntensity);
    scene.add(ambient);
    const keyLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](STUDIO_CONFIG.keyColor, STUDIO_CONFIG.keyIntensity);
    keyLight.position.copy(STUDIO_CONFIG.keyPos);
    scene.add(keyLight);
    const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](STUDIO_CONFIG.rimColor, STUDIO_CONFIG.rimIntensity);
    rimLight.position.copy(STUDIO_CONFIG.rimPos);
    scene.add(rimLight);
}
async function renderStillInternal(key) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFontsReady"])();
    const { renderer, env } = getSharedOffscreenRenderer();
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    setupSceneLights(scene, env);
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](STUDIO_CONFIG.fov, STUDIO_CONFIG.aspect, 0.1, 50);
    let tempObject = null;
    if (key.startsWith("can-")) {
        const isBack = key.startsWith("can-back-");
        const id = isBack ? key.replace("can-back-", "") : key.replace("can-", "");
        const flavour = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"].find((f)=>f.id === id) || __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0];
        const canObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCan"])(flavour);
        tempObject = canObj.root;
        scene.add(tempObject);
        camera.position.copy(STUDIO_CONFIG.canCamPos);
        camera.lookAt(0, 0, 0);
        const pose = isBack ? CAN_POSE.back : CAN_POSE.front;
        tempObject.rotation.y = pose.y;
        tempObject.rotation.z = pose.z;
        tempObject.position.set(0, 0, 0);
    } else if (key === "coconut-whole") {
        const coconutObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoconut"])();
        tempObject = coconutObj.root;
        scene.add(tempObject);
        tempObject.rotation.set(0.12, 0.8, -0.18);
        tempObject.position.set(0, 0, 0);
        camera.position.set(0, 0.35, 6.2);
        camera.lookAt(0, 0, 0);
    } else if (key === "coconut-half") {
        const coconutObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoconut"])();
        tempObject = coconutObj.root;
        scene.add(tempObject);
        // Top hidden; rotation .95,.4,.08; y .35; camera (0,.3,6.4)
        coconutObj.top.visible = false;
        tempObject.rotation.set(0.95, 0.4, 0.08);
        tempObject.position.set(0, 0.35, 0);
        camera.position.set(0, 0.3, 6.4);
        camera.lookAt(0, 0, 0);
    } else if (key === "coconut-pair") {
        const coconutObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoconut"])();
        tempObject = coconutObj.root;
        scene.add(tempObject);
        // top at (-.25,.95,.1) rot (-.9,0,.5), bottom at (.15,-.35,0) rot (.85,.3,-.1); camera (0,.2,7.4)
        coconutObj.top.position.set(-0.25, 0.95, 0.1);
        coconutObj.top.rotation.set(-0.9, 0, 0.5);
        coconutObj.bottom.position.set(0.15, -0.35, 0);
        coconutObj.bottom.rotation.set(0.85, 0.3, -0.1);
        camera.position.set(0, 0.2, 7.4);
        camera.lookAt(0, 0, 0);
    }
    renderer.render(scene, camera);
    // Convert canvas to blob / object URL
    return new Promise((resolve, reject)=>{
        renderer.domElement.toBlob((blob)=>{
            if (!blob) {
                reject(new Error("Failed to capture still canvas blob"));
                return;
            }
            const url = URL.createObjectURL(blob);
            resolve(url);
        }, "image/webp", 0.92);
    });
}
async function processQueue() {
    if (isProcessingQueue) return;
    isProcessingQueue = true;
    while(renderQueue.length > 0){
        const task = renderQueue.shift();
        try {
            const url = await renderStillInternal(task.key);
            stillCache.set(task.key, url);
            task.resolve(url);
        } catch (err) {
            task.reject(err);
        }
    }
    isProcessingQueue = false;
    scheduleContextRelease();
}
function requestStill(key) {
    if (stillCache.has(key)) {
        return Promise.resolve(stillCache.get(key));
    }
    if (pendingPromises.has(key)) {
        return pendingPromises.get(key);
    }
    const promise = new Promise((resolve, reject)=>{
        renderQueue.push({
            key,
            resolve,
            reject
        });
        processQueue();
    });
    pendingPromises.set(key, promise);
    return promise;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/textures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCanLabelTexture",
    ()=>getCanLabelTexture,
    "getCoconutSkinTextures",
    ()=>getCoconutSkinTextures,
    "getRimCutTexture",
    ()=>getRimCutTexture,
    "labelFontsReady",
    ()=>labelFontsReady,
    "mulberry32",
    ()=>mulberry32
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
;
;
function mulberry32(seed) {
    let a = seed;
    return function() {
        let t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
let fontsReadyPromise = null;
function labelFontsReady() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (fontsReadyPromise) return fontsReadyPromise;
    fontsReadyPromise = new Promise((resolve)=>{
        let resolved = false;
        const finish = ()=>{
            if (!resolved) {
                resolved = true;
                resolve();
            }
        };
        const timeout = setTimeout(finish, 2500);
        if (document.fonts) {
            Promise.all([
                document.fonts.load('600 64px "Inter Tight"'),
                document.fonts.load('500 64px "Inter Tight"'),
                document.fonts.load('500 32px "Manrope"'),
                document.fonts.load('500 24px "JetBrains Mono"'),
                document.fonts.ready
            ]).then(()=>{
                clearTimeout(timeout);
                finish();
            }).catch(finish);
        } else {
            clearTimeout(timeout);
            finish();
        }
    });
    return fontsReadyPromise;
}
let cachedSkinTextures = null;
let cachedRimTexture = null;
function getCoconutSkinTextures() {
    if (cachedSkinTextures) return cachedSkinTextures;
    const W = 1024;
    const H = 512;
    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = W;
    colorCanvas.height = H;
    const cctx = colorCanvas.getContext("2d");
    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = W;
    bumpCanvas.height = H;
    const bctx = bumpCanvas.getContext("2d");
    const rnd = mulberry32(11);
    // Vertical gradient
    // #a3ad4f (0) -> #86a23f (.1) -> #6f9637 (.45) -> #5c8530 (.8) -> #4b6f28 (1)
    const cGrad = cctx.createLinearGradient(0, 0, 0, H);
    cGrad.addColorStop(0, "#a3ad4f");
    cGrad.addColorStop(0.1, "#86a23f");
    cGrad.addColorStop(0.45, "#6f9637");
    cGrad.addColorStop(0.8, "#5c8530");
    cGrad.addColorStop(1, "#4b6f28");
    cctx.fillStyle = cGrad;
    cctx.fillRect(0, 0, W, H);
    // Bump base #808080 (neutral 128 mid-grey)
    bctx.fillStyle = "#808080";
    bctx.fillRect(0, 0, W, H);
    // Micro-tissue plant cellular noise for natural organic surface feel
    const imgData = cctx.getImageData(0, 0, W, H);
    const data = imgData.data;
    const bumpData = bctx.getImageData(0, 0, W, H);
    const bData = bumpData.data;
    for(let y = 0; y < H; y++){
        const rowOffset = y * W * 4;
        for(let x = 0; x < W; x++){
            const idx = rowOffset + x * 4;
            // High-frequency subtle organic grain
            const noise = (rnd() - 0.5) * 14;
            data[idx] = Math.max(0, Math.min(255, data[idx] + noise));
            data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + noise * 1.2));
            data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + noise * 0.8));
            // Delicate tactile micro-bump variation
            const bNoise = (rnd() - 0.5) * 16;
            const bVal = Math.max(0, Math.min(255, 128 + bNoise));
            bData[idx] = bVal;
            bData[idx + 1] = bVal;
            bData[idx + 2] = bVal;
        }
    }
    cctx.putImageData(imgData, 0, 0);
    bctx.putImageData(bumpData, 0, 0);
    // 90 soft radial blotches (light rgba(190,205,110,.2) or dark rgba(40,70,25,.18), r 20-110)
    // drawn at x-W, x, x+W so seam wraps invisibly
    for(let i = 0; i < 90; i++){
        const isLight = rnd() > 0.45;
        const cx = rnd() * W;
        const cy = rnd() * H;
        const r = 20 + rnd() * 90;
        const color = isLight ? "rgba(190, 205, 110, 0.22)" : "rgba(40, 70, 25, 0.18)";
        for (const ox of [
            -W,
            0,
            W
        ]){
            const g = cctx.createRadialGradient(cx + ox, cy, 0, cx + ox, cy, r);
            g.addColorStop(0, color);
            g.addColorStop(1, "transparent");
            cctx.fillStyle = g;
            cctx.beginPath();
            cctx.arc(cx + ox, cy, r, 0, Math.PI * 2);
            cctx.fill();
            // Soft height variation in bump map for natural undulating skin
            const bg = bctx.createRadialGradient(cx + ox, cy, 0, cx + ox, cy, r);
            bg.addColorStop(0, isLight ? "rgba(146, 146, 146, 0.35)" : "rgba(110, 110, 110, 0.35)");
            bg.addColorStop(1, "rgba(128, 128, 128, 0)");
            bctx.fillStyle = bg;
            bctx.beginPath();
            bctx.arc(cx + ox, cy, r, 0, Math.PI * 2);
            bctx.fill();
        }
    }
    // 520 meridian fibre streaks (quadratic curves 40-260 px, alpha .05-.13, light or dark)
    // mirrored as +-10% strokes into bump map
    for(let i = 0; i < 520; i++){
        const isLight = rnd() > 0.5;
        const x0 = rnd() * W;
        const y0 = rnd() * H;
        const len = 40 + rnd() * 220;
        const x1 = x0 + (rnd() - 0.5) * 24;
        const y1 = y0 + len;
        const cpx = (x0 + x1) / 2 + (rnd() - 0.5) * 16;
        const cpy = (y0 + y1) / 2;
        const alpha = 0.05 + rnd() * 0.08;
        cctx.strokeStyle = isLight ? `rgba(215, 230, 140, ${alpha})` : `rgba(25, 45, 15, ${alpha * 1.1})`;
        cctx.lineWidth = 0.6 + rnd() * 1.4;
        // +-10% mirrored strokes into bump map (relative to 128: 128 +- 25 -> #999999 / #676767)
        bctx.strokeStyle = isLight ? "rgba(168, 168, 168, 0.55)" : "rgba(88, 88, 88, 0.55)";
        bctx.lineWidth = cctx.lineWidth;
        for (const ox of [
            -W,
            0,
            W
        ]){
            cctx.beginPath();
            cctx.moveTo(x0 + ox, y0);
            cctx.quadraticCurveTo(cpx + ox, cpy, x1 + ox, y1);
            cctx.stroke();
            bctx.beginPath();
            bctx.moveTo(x0 + ox, y0);
            bctx.quadraticCurveTo(cpx + ox, cpy, x1 + ox, y1);
            bctx.stroke();
        }
    }
    // 4200 lenticel dots r .4-1.7 (light or dark) mirrored into bump (white .35 / black .3)
    for(let i = 0; i < 4200; i++){
        const isLight = rnd() > 0.5;
        const x = rnd() * W;
        const y = rnd() * H;
        const r = 0.4 + rnd() * 1.3;
        cctx.fillStyle = isLight ? "rgba(220, 235, 160, 0.45)" : "rgba(35, 55, 20, 0.45)";
        bctx.fillStyle = isLight ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.35)";
        for (const ox of [
            -W,
            0,
            W
        ]){
            cctx.beginPath();
            cctx.arc(x + ox, y, r, 0, Math.PI * 2);
            cctx.fill();
            bctx.beginPath();
            bctx.arc(x + ox, y, r, 0, Math.PI * 2);
            bctx.fill();
        }
    }
    // Three pale vertical ridges at (k+.1)/3 * W, 80 px wide
    for(let k = 0; k < 3; k++){
        const rx = (k + 0.1) / 3 * W;
        for (const ox of [
            -W,
            0,
            W
        ]){
            const g = cctx.createLinearGradient(rx + ox - 40, 0, rx + ox + 40, 0);
            g.addColorStop(0, "transparent");
            g.addColorStop(0.5, "rgba(210, 225, 145, 0.18)");
            g.addColorStop(1, "transparent");
            cctx.fillStyle = g;
            cctx.fillRect(rx + ox - 40, 0, 80, H);
            const bg = bctx.createLinearGradient(rx + ox - 40, 0, rx + ox + 40, 0);
            bg.addColorStop(0, "rgba(128,128,128,0)");
            bg.addColorStop(0.5, "rgba(165,165,165,0.45)");
            bg.addColorStop(1, "rgba(128,128,128,0)");
            bctx.fillStyle = bg;
            bctx.fillRect(rx + ox - 40, 0, 80, H);
        }
    }
    // Calyx at stem end: dry brown (#6f6334) three-lobed star band 10-44 px deep plus a darker 9 px cap
    cctx.fillStyle = "#6f6334";
    cctx.beginPath();
    cctx.moveTo(0, 0);
    for(let x = 0; x <= W; x += 4){
        const phi = x / W * Math.PI * 2;
        const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
        cctx.lineTo(x, depth);
    }
    cctx.lineTo(W, 0);
    cctx.closePath();
    cctx.fill();
    // Darker 9px cap
    cctx.fillStyle = "#4a4220";
    cctx.fillRect(0, 0, W, 9);
    // Calyx radial scratches in color
    cctx.strokeStyle = "rgba(45, 38, 18, 0.4)";
    for(let i = 0; i < 180; i++){
        const x = rnd() * W;
        cctx.beginPath();
        cctx.moveTo(x, 0);
        cctx.lineTo(x + (rnd() - 0.5) * 8, 8 + rnd() * 28);
        cctx.stroke();
    }
    // Calyx relief mirrored into bump map for tactile woody crown
    bctx.fillStyle = "rgba(155, 155, 155, 0.55)";
    bctx.beginPath();
    bctx.moveTo(0, 0);
    for(let x = 0; x <= W; x += 4){
        const phi = x / W * Math.PI * 2;
        const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
        bctx.lineTo(x, depth);
    }
    bctx.lineTo(W, 0);
    bctx.closePath();
    bctx.fill();
    // Dark woody ridge bevel at calyx edge
    bctx.strokeStyle = "rgba(70, 70, 70, 0.6)";
    bctx.lineWidth = 2.0;
    bctx.beginPath();
    for(let x = 0; x <= W; x += 4){
        const phi = x / W * Math.PI * 2;
        const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
        if (x === 0) bctx.moveTo(x, depth);
        else bctx.lineTo(x, depth);
    }
    bctx.stroke();
    // Bump radial scratch grooves on calyx
    bctx.strokeStyle = "rgba(60, 60, 60, 0.45)";
    bctx.lineWidth = 1.0;
    for(let i = 0; i < 180; i++){
        const x = rnd() * W;
        bctx.beginPath();
        bctx.moveTo(x, 0);
        bctx.lineTo(x + (rnd() - 0.5) * 8, 8 + rnd() * 28);
        bctx.stroke();
    }
    // Flower-end tip: 26 px gradient to rgba(90,78,40,.95) at the bottom
    const tipGrad = cctx.createLinearGradient(0, H - 26, 0, H);
    tipGrad.addColorStop(0, "transparent");
    tipGrad.addColorStop(1, "rgba(90, 78, 40, 0.95)");
    cctx.fillStyle = tipGrad;
    cctx.fillRect(0, H - 26, W, 26);
    // Tip subtle dimple/bump contour
    const tipBumpGrad = bctx.createLinearGradient(0, H - 26, 0, H);
    tipBumpGrad.addColorStop(0, "rgba(128, 128, 128, 0)");
    tipBumpGrad.addColorStop(0.7, "rgba(110, 110, 110, 0.3)");
    tipBumpGrad.addColorStop(1, "rgba(85, 85, 85, 0.6)");
    bctx.fillStyle = tipBumpGrad;
    bctx.fillRect(0, H - 26, W, 26);
    const colorTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](colorCanvas);
    colorTexture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    colorTexture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    colorTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    colorTexture.generateMipmaps = true;
    colorTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    colorTexture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    colorTexture.anisotropy = 8;
    const bumpTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](bumpCanvas);
    bumpTexture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    bumpTexture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    bumpTexture.generateMipmaps = true;
    bumpTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    bumpTexture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    bumpTexture.anisotropy = 8;
    cachedSkinTextures = {
        color: colorTexture,
        bump: bumpTexture
    };
    return cachedSkinTextures;
}
function getRimCutTexture() {
    if (cachedRimTexture) return cachedRimTexture;
    const W = 1024;
    const H = 256;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const rnd = mulberry32(5);
    // Layers by v:
    // skin 0-.035 (#5f8b33 with a light line)
    // husk .035-.6 (cream gradient #e9e2b9 -> #f1ead0 -> #e8dcbc with 1800 short fibres)
    // shell .6-.69 (brown #7a5431 -> #5d3e22 -> #6d4a2a)
    // meat .69-1 (#fbf9f2 -> #eef0e8)
    // 1. Skin
    ctx.fillStyle = "#5f8b33";
    ctx.fillRect(0, 0, W, H * 0.035);
    ctx.strokeStyle = "#8ebd4c";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, H * 0.035);
    ctx.lineTo(W, H * 0.035);
    ctx.stroke();
    // 2. Husk
    const huskGrad = ctx.createLinearGradient(0, H * 0.035, 0, H * 0.6);
    huskGrad.addColorStop(0, "#e9e2b9");
    huskGrad.addColorStop(0.5, "#f1ead0");
    huskGrad.addColorStop(1, "#e8dcbc");
    ctx.fillStyle = huskGrad;
    ctx.fillRect(0, H * 0.035, W, H * (0.6 - 0.035));
    // 1800 short husk fibres
    ctx.strokeStyle = "rgba(165, 140, 105, 0.28)";
    for(let i = 0; i < 1800; i++){
        const x = rnd() * W;
        const y = H * 0.035 + rnd() * H * (0.6 - 0.035);
        const len = 3 + rnd() * 8;
        const ang = rnd() * Math.PI * 2;
        ctx.lineWidth = 0.5 + rnd() * 0.8;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
        ctx.stroke();
    }
    // 3. Shell
    const shellGrad = ctx.createLinearGradient(0, H * 0.6, 0, H * 0.69);
    shellGrad.addColorStop(0, "#7a5431");
    shellGrad.addColorStop(0.5, "#5d3e22");
    shellGrad.addColorStop(1, "#6d4a2a");
    ctx.fillStyle = shellGrad;
    ctx.fillRect(0, H * 0.6, W, H * 0.09);
    // 4. Meat
    const meatGrad = ctx.createLinearGradient(0, H * 0.69, 0, H);
    meatGrad.addColorStop(0, "#fbf9f2");
    meatGrad.addColorStop(1, "#eef0e8");
    ctx.fillStyle = meatGrad;
    ctx.fillRect(0, H * 0.69, W, H * 0.31);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    texture.flipY = true;
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    texture.generateMipmaps = true;
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.anisotropy = 8;
    cachedRimTexture = texture;
    return texture;
}
// Flat fruit illustrations (2-4 fills each)
function drawFruit(ctx, fruit, cx, cy, R) {
    ctx.save();
    ctx.translate(cx, cy);
    if (fruit === "coconut") {
        // Half-shell bowl (green outside, cream husk ring, brown shell, white meat),
        // a striped straw at -0.5 rad and a palm frond in moss
        // Palm frond
        ctx.save();
        ctx.rotate(0.4);
        ctx.strokeStyle = "#2f4a3c";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-R * 0.6, -R * 0.2);
        ctx.quadraticCurveTo(0, -R * 0.7, R * 0.7, -R * 0.85);
        ctx.stroke();
        // leaflets
        for(let i = 0; i < 9; i++){
            const t = i / 9;
            const lx = -R * 0.5 + t * R * 1.1;
            const ly = -R * 0.3 - t * R * 0.5;
            ctx.beginPath();
            ctx.moveTo(lx, ly);
            ctx.lineTo(lx - 22, ly - 28);
            ctx.stroke();
        }
        ctx.restore();
        // Striped straw at -0.5 rad
        ctx.save();
        ctx.rotate(-0.5);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(-10, -R * 0.95, 20, R * 0.9);
        ctx.fillStyle = "#e39a2d";
        for(let sy = -R * 0.9; sy < 0; sy += 24){
            ctx.beginPath();
            ctx.moveTo(-10, sy);
            ctx.lineTo(10, sy + 14);
            ctx.lineTo(10, sy + 22);
            ctx.lineTo(-10, sy + 8);
            ctx.fill();
        }
        ctx.restore();
        // Coconut half-shell bowl (bottom half arc)
        // Green outside
        ctx.fillStyle = "#5c8530";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.75, 0, Math.PI);
        ctx.fill();
        // Cream husk ring
        ctx.fillStyle = "#e9e2b9";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.65, 0, Math.PI);
        ctx.fill();
        // Brown shell
        ctx.fillStyle = "#6d4a2a";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.55, 0, Math.PI);
        ctx.fill();
        // White meat
        ctx.fillStyle = "#fbf9f2";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.48, 0, Math.PI);
        ctx.fill();
        // Cut line flat rim
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.75, R * 0.16, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fbf9f2";
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.48, R * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();
    } else if (fruit === "mango") {
        // Rotated -0.35, yellow->orange->red gradient ellipse, highlight, green leaf, stem
        ctx.rotate(-0.35);
        // Stem & Leaf
        ctx.fillStyle = "#3a2a10";
        ctx.fillRect(-4, -R * 0.75, 8, 28);
        ctx.fillStyle = "#3d7332";
        ctx.beginPath();
        ctx.moveTo(0, -R * 0.65);
        ctx.quadraticCurveTo(R * 0.6, -R * 0.85, R * 0.65, -R * 0.5);
        ctx.quadraticCurveTo(R * 0.35, -R * 0.4, 0, -R * 0.65);
        ctx.fill();
        // Mango body: gradient ellipse
        const mg = ctx.createRadialGradient(-R * 0.15, -R * 0.1, R * 0.1, 0, 0, R * 0.68);
        mg.addColorStop(0, "#ffe043");
        mg.addColorStop(0.55, "#f78a1c");
        mg.addColorStop(1, "#d63820");
        ctx.fillStyle = mg;
        ctx.beginPath();
        // Mango curve
        ctx.moveTo(0, -R * 0.6);
        ctx.bezierCurveTo(R * 0.6, -R * 0.6, R * 0.75, R * 0.2, R * 0.2, R * 0.68);
        ctx.bezierCurveTo(-R * 0.15, R * 0.78, -R * 0.65, R * 0.4, -R * 0.55, -R * 0.2);
        ctx.bezierCurveTo(-R * 0.5, -R * 0.55, -R * 0.2, -R * 0.6, 0, -R * 0.6);
        ctx.fill();
        // Soft highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.32)";
        ctx.beginPath();
        ctx.ellipse(-R * 0.18, -R * 0.15, R * 0.24, R * 0.14, -0.4, 0, Math.PI * 2);
        ctx.fill();
    } else if (fruit === "guava") {
        // Green rind, pale flesh ring, coral flesh, pink core, 22 seeds
        ctx.fillStyle = "#63993c";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#f5ead3";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.64, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#e37470";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.58, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#d44f57";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.38, 0, Math.PI * 2);
        ctx.fill();
        // 22 seeds
        ctx.fillStyle = "#fff4d0";
        for(let i = 0; i < 22; i++){
            const ang = i / 22 * Math.PI * 2;
            const sr = R * (0.2 + i % 3 * 0.07);
            const sx = Math.cos(ang) * sr;
            const sy = Math.sin(ang) * sr;
            ctx.beginPath();
            ctx.ellipse(sx, sy, 4.5, 3, ang, 0, Math.PI * 2);
            ctx.fill();
        }
    } else if (fruit === "lychee") {
        // Scalloped pink shell at left, peeled white fruit with brown stone at right
        // Shell at left
        ctx.fillStyle = "#bf436c";
        ctx.beginPath();
        ctx.arc(-R * 0.22, 0, R * 0.52, 0, Math.PI * 2);
        ctx.fill();
        // Shell texture bumps
        ctx.fillStyle = "#8a2444";
        for(let i = 0; i < 28; i++){
            const ang = i / 28 * Math.PI * 2;
            const bx = -R * 0.22 + Math.cos(ang) * R * 0.48;
            const by = Math.sin(ang) * R * 0.48;
            ctx.beginPath();
            ctx.arc(bx, by, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        // Peeled white aril at right
        ctx.fillStyle = "#faf3ee";
        ctx.beginPath();
        ctx.arc(R * 0.25, 0, R * 0.48, 0, Math.PI * 2);
        ctx.fill();
        // Translucent pulp glow
        ctx.fillStyle = "rgba(235, 210, 220, 0.4)";
        ctx.beginPath();
        ctx.arc(R * 0.25, 0, R * 0.38, 0, Math.PI * 2);
        ctx.fill();
        // Brown stone in center
        ctx.fillStyle = "#4a2318";
        ctx.beginPath();
        ctx.ellipse(R * 0.25, 0, R * 0.2, R * 0.26, 0, 0, Math.PI * 2);
        ctx.fill();
    } else if (fruit === "pineapple") {
        // Seven crown leaves, gold body clipped with a diagonal lattice
        // Leaves
        ctx.fillStyle = "#3e7a3e";
        const leafAngles = [
            -0.6,
            -0.4,
            -0.2,
            0,
            0.2,
            0.4,
            0.6
        ];
        for (const ang of leafAngles){
            ctx.save();
            ctx.translate(0, -R * 0.25);
            ctx.rotate(ang);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(8, -R * 0.55, 0, -R * 0.65);
            ctx.quadraticCurveTo(-8, -R * 0.55, 0, 0);
            ctx.fill();
            ctx.restore();
        }
        // Gold body
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(0, R * 0.18, R * 0.46, R * 0.55, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#e5a720";
        ctx.fill();
        ctx.clip();
        // Diagonal lattice
        ctx.strokeStyle = "#a57010";
        ctx.lineWidth = 3.5;
        for(let d = -R; d < R * 2; d += 22){
            ctx.beginPath();
            ctx.moveTo(-R, d);
            ctx.lineTo(R, d - R * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-R, d - R * 2);
            ctx.lineTo(R, d);
            ctx.stroke();
        }
        ctx.restore();
    } else if (fruit === "lime") {
        // Green rind, pale pith, nine segments, two mint leaves
        // Mint leaves
        ctx.fillStyle = "#3e8c45";
        ctx.save();
        ctx.translate(-R * 0.45, -R * 0.45);
        ctx.rotate(-0.5);
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.35, R * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.translate(R * 0.4, -R * 0.45);
        ctx.rotate(0.6);
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.32, R * 0.16, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // Green rind
        ctx.fillStyle = "#489e2c";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.65, 0, Math.PI * 2);
        ctx.fill();
        // Pale pith
        ctx.fillStyle = "#e3efd4";
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.59, 0, Math.PI * 2);
        ctx.fill();
        // 9 segments
        ctx.fillStyle = "#8dc854";
        for(let i = 0; i < 9; i++){
            const a1 = i / 9 * Math.PI * 2 + 0.05;
            const a2 = (i + 1) / 9 * Math.PI * 2 - 0.05;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, R * 0.53, a1, a2);
            ctx.closePath();
            ctx.fill();
        }
        // Center white dot
        ctx.fillStyle = "#e3efd4";
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}
const labelTextureCache = new Map();
function getCanLabelTexture(flavour) {
    if (labelTextureCache.has(flavour.id)) {
        return labelTextureCache.get(flavour.id);
    }
    const W = 2048;
    const H = 1328;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const rnd = mulberry32(flavour.id.length * 97 + 3);
    // Base background
    ctx.fillStyle = flavour.bg;
    ctx.fillRect(0, 0, W, H);
    // 3 px ink hairline at y 64 all the way round
    ctx.strokeStyle = flavour.ink;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 64);
    ctx.lineTo(W, 64);
    ctx.stroke();
    // 250 px accent band along bottom with a 10 px ink rule on top
    const bandY = H - 250;
    ctx.fillStyle = flavour.accent;
    ctx.fillRect(0, bandY, W, 250);
    ctx.fillStyle = flavour.ink;
    ctx.fillRect(0, bandY, W, 10);
    // ==========================================
    // FRONT (centre x 512)
    // ==========================================
    const frontX = 512;
    // mono 500 26px "TENDER COCONUT WATER" at 128
    ctx.fillStyle = flavour.ink;
    ctx.textAlign = "center";
    ctx.font = '500 26px "JetBrains Mono", monospace';
    ctx.fillText("TENDER COCONUT WATER", frontX, 128);
    // display 600 168px wordmark "BR-NARIO" at 318 (scaled down to fit 470 px)
    ctx.font = '600 168px "Inter Tight", sans-serif';
    const wmText = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark;
    const wmWidth = ctx.measureText(wmText).width;
    ctx.save();
    ctx.translate(frontX, 318);
    if (wmWidth > 470) {
        const scale = 470 / wmWidth;
        ctx.scale(scale, scale);
    }
    ctx.fillText(wmText, 0, 0);
    ctx.restore();
    // display 500 64px flavour name at 408
    ctx.font = '500 64px "Inter Tight", sans-serif';
    ctx.fillText(flavour.name, frontX, 408);
    // mono 22px "NOT FROM CONCENTRATE" at 452 (alpha .7)
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.font = '500 22px "JetBrains Mono", monospace';
    ctx.fillText("NOT FROM CONCENTRATE", frontX, 452);
    ctx.restore();
    // Illustration disc: accent at 16% alpha, r 215 at (512, 720), dashed ink ring r 238
    ctx.save();
    ctx.fillStyle = flavour.accent;
    ctx.globalAlpha = 0.16;
    ctx.beginPath();
    ctx.arc(frontX, 720, 215, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // Dashed ink ring r 238
    ctx.save();
    ctx.strokeStyle = flavour.ink;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([
        8,
        6
    ]);
    ctx.beginPath();
    ctx.arc(frontX, 720, 238, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    // Fruit drawn at (512, 730), R 175
    drawFruit(ctx, flavour.fruit, frontX, 730, 175);
    // Four registration crosses +-250 at y 520 and 960 (alpha .5)
    ctx.save();
    ctx.strokeStyle = flavour.ink;
    ctx.globalAlpha = 0.5;
    ctx.lineWidth = 1.5;
    const crossArms = 8;
    for (const cx of [
        frontX - 250,
        frontX + 250
    ]){
        for (const cy of [
            520,
            960
        ]){
            ctx.beginPath();
            ctx.moveTo(cx - crossArms, cy);
            ctx.lineTo(cx + crossArms, cy);
            ctx.moveTo(cx, cy - crossArms);
            ctx.lineTo(cx, cy + crossArms);
            ctx.stroke();
        }
    }
    ctx.restore();
    // Above the band: ink mono 22px "<kcal> KCAL · 500 MG POTASSIUM" at y 1030
    ctx.fillStyle = flavour.ink;
    ctx.font = '500 22px "JetBrains Mono", monospace';
    ctx.textAlign = "center";
    ctx.fillText(`${flavour.kcal} KCAL · 500 MG POTASSIUM`, frontX, 1030);
    // In the foot band, in f.bg:
    // display 600 58px "250 ML" at H-150
    // mono 22px "NO ADDED SUGAR · 100% RAW" at H-100
    // mono 18px "PACKED IN INDIA" at H-60
    ctx.fillStyle = flavour.bg;
    ctx.font = '600 58px "Inter Tight", sans-serif';
    ctx.fillText("250 ML", frontX, H - 150);
    ctx.font = '500 22px "JetBrains Mono", monospace';
    ctx.fillText("NO ADDED SUGAR · 100% RAW", frontX, H - 100);
    ctx.font = '500 18px "JetBrains Mono", monospace';
    ctx.fillText("PACKED IN INDIA", frontX, H - 60);
    // ==========================================
    // SIDES (at x 1024, 0 and 2048, rotated -90°, centred at H/2 - 120)
    // ==========================================
    const sidePositions = [
        0,
        1024,
        2048
    ];
    for (const sx of sidePositions){
        ctx.save();
        ctx.translate(sx, H / 2 - 120);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        ctx.fillStyle = flavour.ink;
        ctx.font = '600 92px "Inter Tight", sans-serif';
        ctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark, 0, 0);
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.font = '500 20px "JetBrains Mono", monospace';
        ctx.fillText(`${flavour.short.toUpperCase()} · TENDER COCONUT WATER`, 0, 48);
        ctx.restore();
        ctx.restore();
    }
    // ==========================================
    // BACK (left 1306 -> right 1766)
    // ==========================================
    const backLeft = 1306;
    const backRight = 1766;
    const backWidth = backRight - backLeft;
    // display 600 44px "Nutrition"
    ctx.fillStyle = flavour.ink;
    ctx.textAlign = "left";
    ctx.font = '600 44px "Inter Tight", sans-serif';
    ctx.fillText("Nutrition", backLeft, 140);
    // mono 18px "TYPICAL VALUES PER 250 ML CAN"
    ctx.font = '500 18px "JetBrains Mono", monospace';
    ctx.fillText("TYPICAL VALUES PER 250 ML CAN", backLeft, 178);
    // 5 px rule
    ctx.fillRect(backLeft, 196, backWidth, 5);
    // 8 rows 46 px apart from y 250
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNutrition"])(flavour);
    let curY = 250;
    for (const row of rows){
        ctx.font = row.indent ? '400 22px "Manrope", sans-serif' : '600 24px "Manrope", sans-serif';
        ctx.textAlign = "left";
        ctx.fillStyle = flavour.ink;
        ctx.fillText(row.label, backLeft + (row.indent ? 16 : 0), curY);
        ctx.font = '500 22px "JetBrains Mono", monospace';
        ctx.textAlign = "right";
        ctx.fillText(row.value, backRight, curY);
        // faint rule
        ctx.save();
        ctx.strokeStyle = flavour.ink;
        ctx.globalAlpha = 0.15;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(backLeft, curY + 12);
        ctx.lineTo(backRight, curY + 12);
        ctx.stroke();
        ctx.restore();
        curY += 46;
    }
    // "*Naturally occurring sugars only."
    ctx.font = '400 18px "Manrope", sans-serif';
    ctx.textAlign = "left";
    ctx.fillStyle = flavour.ink;
    ctx.fillText("*Naturally occurring sugars only.", backLeft, curY + 10);
    // Ingredients (display 600 26px)
    curY += 50;
    ctx.font = '600 26px "Inter Tight", sans-serif';
    ctx.fillText("Ingredients", backLeft, curY);
    // Ingredient lines (body 21px)
    curY += 30;
    ctx.font = '500 21px "Manrope", sans-serif';
    const ings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIngredients"])(flavour);
    for (const line of ings){
        ctx.fillText(line, backLeft, curY);
        curY += 26;
    }
    // Serve instructions
    curY += 16;
    ctx.font = '400 18px "Manrope", sans-serif';
    ctx.fillText("Serve chilled. Shake gently before opening.", backLeft, curY);
    curY += 24;
    ctx.fillText("Once opened, drink the same day.", backLeft, curY);
    // Seeded barcode 120 px tall from y 905 with "8 901234 567890" beneath
    const barY = 905;
    const barH = 100;
    let bx = backLeft;
    while(bx < backLeft + 320){
        const bw = 2 + Math.floor(rnd() * 4);
        if (rnd() > 0.4) {
            ctx.fillRect(bx, barY, bw, barH);
        }
        bx += bw + 2;
    }
    ctx.font = '500 16px "JetBrains Mono", monospace';
    ctx.textAlign = "center";
    ctx.fillText("8 901234 567890", backLeft + 160, barY + barH + 24);
    // 46 px "ALU" recycling ring at the right
    ctx.save();
    ctx.strokeStyle = flavour.ink;
    ctx.lineWidth = 2.5;
    const aluX = backRight - 45;
    const aluY = barY + 50;
    ctx.beginPath();
    ctx.arc(aluX, aluY, 23, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = '600 16px "Inter Tight", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("ALU", aluX, aluY + 6);
    ctx.restore();
    // In the foot band on back:
    // "BEST BEFORE — SEE BASE · STORE COOL & DRY" and "SHIPS IN A FLUTEWORKS 3-PLY CARTON"
    ctx.fillStyle = flavour.bg;
    ctx.textAlign = "center";
    ctx.font = '500 20px "JetBrains Mono", monospace';
    ctx.fillText("BEST BEFORE — SEE BASE · STORE COOL & DRY", (backLeft + backRight) / 2, H - 130);
    ctx.font = '500 17px "JetBrains Mono", monospace';
    ctx.fillText("SHIPS IN A FLUTEWORKS 3-PLY CARTON", (backLeft + backRight) / 2, H - 75);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    texture.anisotropy = 8;
    labelTextureCache.set(flavour.id, texture);
    return texture;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEATS",
    ()=>BEATS,
    "COVER_START",
    ()=>COVER_START,
    "STAGE_AT",
    ()=>STAGE_AT,
    "getStageIndex",
    ()=>getStageIndex
]);
const BEATS = {
    heroOut: {
        start: 0.02,
        end: 0.1
    },
    statsIn: {
        start: 0.075,
        end: 0.14
    },
    statsOut: {
        start: 0.19,
        end: 0.23
    },
    close: {
        start: 0.21,
        end: 0.29
    },
    turnSide: {
        start: 0.3,
        end: 0.35
    },
    crack: {
        start: 0.35,
        end: 0.39
    },
    emerge: {
        start: 0.39,
        end: 0.47
    },
    fly: {
        start: 0.45,
        end: 0.53
    },
    canGrow: {
        start: 0.4,
        end: 0.5
    },
    canUpright: {
        start: 0.46,
        end: 0.52
    },
    canCopyIn: {
        start: 0.47,
        end: 0.52
    },
    canCopyOut: {
        start: 0.555,
        end: 0.585
    },
    turn: {
        start: 0.54,
        end: 0.61
    },
    keepIn: {
        start: 0.55,
        end: 0.61
    },
    keepOut: {
        start: 0.63,
        end: 0.67
    },
    crateRise: {
        start: 0.61,
        end: 0.68
    },
    canLift: {
        start: 0.61,
        end: 0.67
    },
    drop: {
        start: 0.67,
        end: 0.745
    },
    seal: {
        start: 0.745,
        end: 0.8
    },
    packCopyIn: {
        start: 0.745,
        end: 0.8
    },
    crateTurn: {
        start: 0.79,
        end: 0.88
    },
    cover: {
        start: 0.9,
        end: 1.0
    }
};
const COVER_START = 0.9;
const STAGE_AT = [
    0.22,
    0.33,
    0.47,
    0.64
];
function getStageIndex(p) {
    if (p < STAGE_AT[0]) return 0;
    if (p < STAGE_AT[1]) return 1;
    if (p < STAGE_AT[2]) return 2;
    return 3;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/turntable.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OVERSCAN",
    ()=>OVERSCAN,
    "turntableManager",
    ()=>turntableManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/stills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
;
;
;
;
;
const OVERSCAN = 1.4;
class TurntableManager {
    renderer = null;
    scene = null;
    camera = null;
    glintLight = null;
    canCache = new Map();
    currentCan = null;
    currentHost = null;
    animTimeline = null;
    isTurning = false;
    rafId = null;
    init() {
        if (this.renderer || ("TURBOPACK compile-time value", "object") === "undefined") return;
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(600 * OVERSCAN, 800 * OVERSCAN);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        this.renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"];
        this.renderer.setClearColor(0x000000, 0);
        const pmrem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](this.renderer);
        pmrem.compileEquirectangularShader();
        const roomScene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEnvironment"]();
        const envTarget = pmrem.fromScene(roomScene, 0.04);
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
        this.scene.environment = envTarget.texture;
        this.scene.environmentIntensity = 0.9;
        const ambient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].ambientColor, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].ambientIntensity);
        this.scene.add(ambient);
        const keyLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].keyColor, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].keyIntensity);
        keyLight.position.copy(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].keyPos);
        this.scene.add(keyLight);
        const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].rimColor, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].rimIntensity);
        rimLight.position.copy(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].rimPos);
        this.scene.add(rimLight);
        this.glintLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0);
        this.glintLight.position.set(-5, 1, 3);
        this.scene.add(this.glintLight);
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].fov, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].aspect, 0.1, 50);
        this.camera.position.copy(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO_CONFIG"].canCamPos);
        this.camera.zoom = 1 / OVERSCAN;
        this.camera.updateProjectionMatrix();
        // Set styling on renderer domElement
        const el = this.renderer.domElement;
        el.style.position = "absolute";
        el.style.top = "50%";
        el.style.left = "50%";
        el.style.transform = "translate(-50%, -50%)";
        el.style.width = `${100 * OVERSCAN}%`;
        el.style.height = `${100 * OVERSCAN}%`;
        el.style.pointerEvents = "none";
    }
    warm(flavour = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0]) {
        this.init();
        if (!this.canCache.has(flavour.id)) {
            const can = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCan"])(flavour);
            this.canCache.set(flavour.id, can);
            if (this.renderer && this.scene && this.camera) {
                this.scene.add(can.root);
                this.renderer.render(this.scene, this.camera);
                this.scene.remove(can.root);
            }
        }
    }
    getCan(flavour) {
        if (!this.canCache.has(flavour.id)) {
            this.canCache.set(flavour.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCan"])(flavour));
        }
        return this.canCache.get(flavour.id);
    }
    getIsTurning() {
        return this.isTurning;
    }
    turn(hostEl, flavour, toBack, callbacks) {
        if (this.isTurning) return false;
        this.init();
        if (!this.renderer || !this.scene || !this.camera) return false;
        this.isTurning = true;
        this.currentHost = hostEl;
        // Attach canvas to host
        const dom = this.renderer.domElement;
        if (dom.parentElement !== hostEl) {
            hostEl.appendChild(dom);
        }
        dom.style.display = "block";
        // Prepare can
        if (this.currentCan && this.currentCan.root.parent === this.scene) {
            this.scene.remove(this.currentCan.root);
        }
        const can = this.getCan(flavour);
        this.currentCan = can;
        this.scene.add(can.root);
        const startPose = toBack ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_POSE"].front : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_POSE"].back;
        const targetPose = toBack ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_POSE"].back : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_POSE"].front;
        // Base spin: always at least 1.5 turns forward (3*PI)
        const startRy = startPose.y;
        // Always advance forward
        const baseDelta = 3 * Math.PI;
        const targetRy = startRy + baseDelta + (targetPose.y - (startRy + baseDelta) % (2 * Math.PI));
        const state = {
            y: 0,
            sy: 1,
            rx: 0,
            ry: startRy,
            rz: startPose.z,
            sweep: 0
        };
        const applyTransform = ()=>{
            const sy = state.sy;
            const sxz = 1 / Math.sqrt(Math.max(0.001, sy));
            can.root.scale.set(sxz, sy, sxz);
            // Anchored at base: y - (1 - sy) * CAN.H / 2
            can.root.position.set(0, state.y - (1 - sy) * (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN"].H / 2), 0);
            can.root.rotation.set(state.rx, state.ry, state.rz);
            // Glint light
            if (this.glintLight) {
                const sweep = state.sweep;
                this.glintLight.position.x = -5 + sweep * 10;
                this.glintLight.intensity = Math.sin(Math.PI * sweep) * 2.6;
            }
            if (this.renderer && this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera);
            }
        };
        // Kill any existing timeline
        if (this.animTimeline) {
            this.animTimeline.kill();
        }
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
            onUpdate: applyTransform,
            onComplete: ()=>{
                // Double rAF to release
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        if (dom.parentElement) {
                            dom.style.display = "none";
                        }
                        if (this.currentCan && this.scene) {
                            this.scene.remove(this.currentCan.root);
                        }
                        this.isTurning = false;
                        callbacks?.onComplete?.();
                    });
                });
            }
        });
        this.animTimeline = tl;
        // 0.00 squash: sy .92, rz +.1 (.18 s power2.out)
        tl.to(state, {
            sy: 0.92,
            rz: startPose.z + 0.1,
            duration: 0.18,
            ease: "power2.out"
        }, 0.0);
        // 0.12 whip spin: ry -> target pose (1.15 s power3.inOut)
        tl.to(state, {
            ry: targetRy,
            duration: 1.15,
            ease: "power3.inOut"
        }, 0.12);
        // 0.16 lift + stretch: y .26, sy 1.05 (.45 s power2.out)
        tl.to(state, {
            y: 0.26,
            sy: 1.05,
            duration: 0.45,
            ease: "power2.out",
            onStart: ()=>callbacks?.onLift?.()
        }, 0.16);
        // 0.20 lean: rz -.2, rx .14 (.42 s sine.inOut)
        tl.to(state, {
            rz: -0.2,
            rx: 0.14,
            duration: 0.42,
            ease: "sine.inOut"
        }, 0.2);
        // 0.62 lean back: rz .16, rx -.08 (.3 s sine.inOut)
        tl.to(state, {
            rz: 0.16,
            rx: -0.08,
            duration: 0.3,
            ease: "sine.inOut"
        }, 0.62);
        // 0.20 travelling light glint: sweep 0 -> 1 over 1 s
        tl.to(state, {
            sweep: 1,
            duration: 1.0,
            ease: "none",
            onUpdate: ()=>callbacks?.onUpdateSweep?.(state.sweep)
        }, 0.2);
        // 0.92 drop: y 0, sy .93 (.3 s power2.in)
        tl.to(state, {
            y: 0,
            sy: 0.93,
            duration: 0.3,
            ease: "power2.in",
            onStart: ()=>callbacks?.onDrop?.()
        }, 0.92);
        // 1.22 land: sy 1 (.55 s elastic.out(1.1, .4))
        tl.to(state, {
            sy: 1.0,
            duration: 0.55,
            ease: "elastic.out(1.1, 0.4)"
        }, 1.22);
        // 1.12 settle rz/rx to target pose (.6 s elastic.out(1, .5))
        tl.to(state, {
            rz: targetPose.z,
            rx: 0,
            duration: 0.6,
            ease: "elastic.out(1.0, 0.5)"
        }, 1.12);
        return true;
    }
}
const turntableManager = new TurntableManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "cn",
    ()=>cn,
    "easeInOut",
    ()=>easeInOut,
    "easeInOutQuint",
    ()=>easeInOutQuint,
    "easeOut",
    ()=>easeOut,
    "lerp",
    ()=>lerp,
    "pad",
    ()=>pad,
    "seg",
    ()=>seg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function clamp(v, a = 0, b = 1) {
    return Math.max(a, Math.min(b, v));
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function seg(p, a, b) {
    if (b === a) return 0;
    return clamp((p - a) / (b - a), 0, 1);
}
function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
}
function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}
function pad(n) {
    return n < 10 ? `0${n}` : `${n}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1c9yf1um7m9wz._.js.map