(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/components/3d/CorrugatedPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CorrugatedPanel",
    ()=>CorrugatedPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/three/corrugated.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CorrugatedPanel({ width, height, plies = 3, flute = "B", explodeRef, gap = 0.12, faceMap = null, detailed = true }) {
    _s();
    const { amp } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUTE"][flute];
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fluteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const kraftTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrugatedPanel.useMemo[kraftTex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKraftTexture"])()
    }["CorrugatedPanel.useMemo[kraftTex]"], []);
    const roughTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrugatedPanel.useMemo[roughTex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoughnessTexture"])()
    }["CorrugatedPanel.useMemo[roughTex]"], []);
    const linerMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrugatedPanel.useMemo[linerMat]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: faceMap || kraftTex,
                roughnessMap: roughTex,
                color: faceMap ? 0xffffff : 0xefdcbb,
                roughness: 0.9,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            });
        }
    }["CorrugatedPanel.useMemo[linerMat]"], [
        faceMap,
        kraftTex,
        roughTex
    ]);
    const mediumMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrugatedPanel.useMemo[mediumMat]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: kraftTex,
                roughnessMap: roughTex,
                color: 0xdfc49a,
                roughness: 0.94,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            });
        }
    }["CorrugatedPanel.useMemo[mediumMat]"], [
        kraftTex,
        roughTex
    ]);
    const fluteGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CorrugatedPanel.useMemo[fluteGeom]": ()=>{
            if (!detailed) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeFluteGeometry"])(width, height, flute);
        }
    }["CorrugatedPanel.useMemo[fluteGeom]"], [
        width,
        height,
        flute,
        detailed
    ]);
    const innerZ = -(amp + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINER_T"] / 2);
    const outerZ = +(amp + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINER_T"] / 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "CorrugatedPanel.useFrame": ()=>{
            const explode = explodeRef?.current ?? 0;
            if (detailed && innerRef.current && outerRef.current && fluteRef.current) {
                innerRef.current.position.z = innerZ - explode * gap;
                outerRef.current.position.z = outerZ + explode * gap;
                fluteRef.current.position.z = 0;
            }
        }
    }["CorrugatedPanel.useFrame"]);
    if (!detailed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    outerZ
                ],
                material: linerMat,
                castShadow: true,
                receiveShadow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        width,
                        height,
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINER_T"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/3d/CorrugatedPanel.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: innerRef,
                position: [
                    0,
                    0,
                    innerZ
                ],
                material: linerMat,
                castShadow: true,
                receiveShadow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        width,
                        height,
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINER_T"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            fluteGeom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: fluteRef,
                position: [
                    0,
                    0,
                    0
                ],
                geometry: fluteGeom,
                material: mediumMat,
                castShadow: true,
                receiveShadow: true
            }, void 0, false, {
                fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: outerRef,
                position: [
                    0,
                    0,
                    outerZ
                ],
                material: linerMat,
                castShadow: true,
                receiveShadow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        width,
                        height,
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINER_T"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/CorrugatedPanel.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/3d/CorrugatedPanel.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(CorrugatedPanel, "VsmyzFU1jEtVqXEEFFfF9+f7Mmc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CorrugatedPanel;
var _c;
__turbopack_context__.k.register(_c, "CorrugatedPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/3d/PackagingBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PackagingBox",
    ()=>PackagingBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/3d/CorrugatedPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/three/corrugated.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FLAP_OPEN = 112 * Math.PI / 180; // 112 degrees
function PackagingBox({ w, h, d, plies = 3, flute = "B", detailed = true, stateRef }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Flap hinge refs
    const frontFlapHingeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const backFlapHingeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftFlapHingeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightFlapHingeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Tape mesh ref
    const tapeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tapeMatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Smooth local values for easing
    const currentOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(stateRef.current?.open ?? 0);
    const kraftTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PackagingBox.useMemo[kraftTex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKraftTexture"])()
    }["PackagingBox.useMemo[kraftTex]"], []);
    const roughTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PackagingBox.useMemo[roughTex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoughnessTexture"])()
    }["PackagingBox.useMemo[roughTex]"], []);
    const plainKraftMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PackagingBox.useMemo[plainKraftMat]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: kraftTex,
                roughnessMap: roughTex,
                color: 0xefdcbb,
                roughness: 0.9,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            });
        }
    }["PackagingBox.useMemo[plainKraftMat]"], [
        kraftTex,
        roughTex
    ]);
    const tapeMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PackagingBox.useMemo[tapeMat]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0x2f4a3c,
                roughness: 0.6,
                transparent: true,
                opacity: 0.92,
                depthWrite: false
            });
        }
    }["PackagingBox.useMemo[tapeMat]"], []);
    const bThick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boardThickness"])(plies, flute);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "PackagingBox.useFrame": (_, delta)=>{
            const targetOpen = stateRef.current?.open ?? 0;
            const dt = Math.min(delta, 0.05);
            const k = 1 - Math.pow(0.0008, dt);
            currentOpen.current += (targetOpen - currentOpen.current) * k;
            const openVal = currentOpen.current;
            // Front/Back major flaps open around X by FLAP_OPEN * smoothstep(open, .35, 1)
            const majorStep = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(openVal, 0.35, 1.0);
            const majorAngle = FLAP_OPEN * majorStep;
            if (frontFlapHingeRef.current) {
                frontFlapHingeRef.current.rotation.x = majorAngle;
            }
            if (backFlapHingeRef.current) {
                backFlapHingeRef.current.rotation.x = -majorAngle;
            }
            // Left/Right minor flaps open around Z by FLAP_OPEN * smoothstep(open, 0, .6)
            const minorStep = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(openVal, 0.0, 0.6);
            const minorAngle = FLAP_OPEN * minorStep;
            if (leftFlapHingeRef.current) {
                leftFlapHingeRef.current.rotation.z = -minorAngle;
            }
            if (rightFlapHingeRef.current) {
                rightFlapHingeRef.current.rotation.z = minorAngle;
            }
            // Tape opacity .92 * (1 - smoothstep(open, 0, .25)), hidden when fully open
            if (tapeRef.current && tapeMatRef.current) {
                const tapeStep = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(openVal, 0.0, 0.25);
                const opacity = 0.92 * (1 - tapeStep);
                tapeMatRef.current.opacity = opacity;
                tapeRef.current.visible = opacity > 0.005;
            }
        }
    }["PackagingBox.useFrame"]);
    const halfW = w / 2;
    const halfH = h / 2;
    const halfD = d / 2;
    const majorFlapDepth = d / 2;
    const minorFlapWidth = w / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0,
                    halfD
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorrugatedPanel"], {
                    width: w,
                    height: h,
                    plies: plies,
                    flute: flute,
                    detailed: detailed
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0,
                    -halfD
                ],
                rotation: [
                    0,
                    Math.PI,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorrugatedPanel"], {
                    width: w,
                    height: h,
                    plies: plies,
                    flute: flute,
                    detailed: detailed
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    -halfW,
                    0,
                    0
                ],
                rotation: [
                    0,
                    -Math.PI / 2,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorrugatedPanel"], {
                    width: d,
                    height: h,
                    plies: plies,
                    flute: flute,
                    detailed: detailed
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    halfW,
                    0,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorrugatedPanel"], {
                    width: d,
                    height: h,
                    plies: plies,
                    flute: flute,
                    detailed: detailed
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    -halfH,
                    0
                ],
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$CorrugatedPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CorrugatedPanel"], {
                    width: w,
                    height: d,
                    plies: plies,
                    flute: flute,
                    detailed: false
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: frontFlapHingeRef,
                position: [
                    0,
                    halfH,
                    halfD
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        0,
                        -majorFlapDepth / 2
                    ],
                    rotation: [
                        Math.PI / 2,
                        0,
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        material: plainKraftMat,
                        castShadow: true,
                        receiveShadow: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                w,
                                majorFlapDepth,
                                bThick
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/3d/PackagingBox.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: backFlapHingeRef,
                position: [
                    0,
                    halfH,
                    -halfD
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        0,
                        majorFlapDepth / 2
                    ],
                    rotation: [
                        -Math.PI / 2,
                        0,
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        material: plainKraftMat,
                        castShadow: true,
                        receiveShadow: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                w,
                                majorFlapDepth,
                                bThick
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/3d/PackagingBox.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: leftFlapHingeRef,
                position: [
                    -halfW,
                    halfH,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        minorFlapWidth / 2,
                        0,
                        0
                    ],
                    rotation: [
                        0,
                        0,
                        -Math.PI / 2
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        material: plainKraftMat,
                        castShadow: true,
                        receiveShadow: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                bThick,
                                minorFlapWidth,
                                d - 0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/3d/PackagingBox.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: rightFlapHingeRef,
                position: [
                    halfW,
                    halfH,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        -minorFlapWidth / 2,
                        0,
                        0
                    ],
                    rotation: [
                        0,
                        0,
                        Math.PI / 2
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        material: plainKraftMat,
                        castShadow: true,
                        receiveShadow: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                bThick,
                                minorFlapWidth,
                                d - 0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/3d/PackagingBox.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/3d/PackagingBox.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: tapeRef,
                position: [
                    0,
                    halfH + bThick + 0.002,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                material: tapeMat,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            0.16,
                            d + 0.14
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                        object: tapeMat,
                        ref: tapeMatRef,
                        attach: "material"
                    }, void 0, false, {
                        fileName: "[project]/components/3d/PackagingBox.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/3d/PackagingBox.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/3d/PackagingBox.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(PackagingBox, "WxTLBNRgsTboMal9R8WifkDNkmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = PackagingBox;
var _c;
__turbopack_context__.k.register(_c, "PackagingBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sip/story/StoryScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryScene",
    ()=>StoryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Lightformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$carton$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/carton.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/three/corrugated.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$PackagingBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/3d/PackagingBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
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
;
;
;
const PITCH = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN"].R * 2 + 0.03;
const BOARD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$three$2f$corrugated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boardThickness"])(3, "B");
const CRATE = {
    w: PITCH * 3 + BOARD * 2 + 0.02,
    d: PITCH * 2 + BOARD * 2 + 0.02,
    h: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN"].H + BOARD + 0.05
};
function easeIn(t) {
    return t * t * t;
}
// Contact shadow texture for crate
let shadowTexture = null;
function getContactShadowTexture() {
    if (shadowTexture) return shadowTexture;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, "rgba(23, 21, 18, 0.55)");
    grad.addColorStop(1, "rgba(23, 21, 18, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    shadowTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    return shadowTexture;
}
function SceneRig({ progressRef, entranceRef, pointerRef, tier, isMobile }) {
    _s();
    const { camera, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Root hierarchy nodes
    const coconutGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tiltZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bowl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coconutObjRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroCanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const crateGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroSlotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const crateShadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boxState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        open: 1
    });
    // Filler cans loaded progressively
    const [fillerCans, setFillerCans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Smooth pointer
    const px = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const py = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const spinAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const frameCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Build models
    const coconut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SceneRig.useMemo[coconut]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoconut"])()
    }["SceneRig.useMemo[coconut]"], []);
    const heroCan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SceneRig.useMemo[heroCan]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCan"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"][0])
    }["SceneRig.useMemo[heroCan]"], []);
    const cartonTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SceneRig.useMemo[cartonTex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$carton$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartonTextures"])(CRATE.w, CRATE.h, CRATE.d)
    }["SceneRig.useMemo[cartonTex]"], []);
    const contactTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SceneRig.useMemo[contactTex]": ()=>getContactShadowTexture()
    }["SceneRig.useMemo[contactTex]"], []);
    // Build filler cans in idle callback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneRig.useEffect": ()=>{
            let cancelled = false;
            const fillerFlavours = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flavours"].slice(1); // 5 flavours
            const build = {
                "SceneRig.useEffect.build": ()=>{
                    if (cancelled) return;
                    const cans = fillerFlavours.map({
                        "SceneRig.useEffect.build.cans": (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCan"])(f)
                    }["SceneRig.useEffect.build.cans"]);
                    setFillerCans(cans);
                }
            }["SceneRig.useEffect.build"];
            if ("requestIdleCallback" in window) {
                const handle = window.requestIdleCallback(build, {
                    timeout: 2500
                });
                return ({
                    "SceneRig.useEffect": ()=>{
                        cancelled = true;
                        window.cancelIdleCallback(handle);
                    }
                })["SceneRig.useEffect"];
            } else {
                const timer = setTimeout(build, 1200);
                return ({
                    "SceneRig.useEffect": ()=>{
                        cancelled = true;
                        clearTimeout(timer);
                    }
                })["SceneRig.useEffect"];
            }
        }
    }["SceneRig.useEffect"], []);
    // Set initial coconut model
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneRig.useEffect": ()=>{
            coconutObjRef.current = coconut;
            heroCanRef.current = heroCan;
        }
    }["SceneRig.useEffect"], [
        coconut,
        heroCan
    ]);
    const crateX = isMobile ? 0 : 0.62;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "SceneRig.useFrame": (_, dt)=>{
            const p = progressRef.current ?? 0;
            const entRaw = entranceRef.current ?? 1;
            const rawPointer = pointerRef.current ?? {
                x: 0,
                y: 0
            };
            frameCount.current++;
            if (frameCount.current === 3) {
                window.dispatchEvent(new CustomEvent("sip:scene-ready"));
            }
            const d = Math.min(dt, 0.05);
            const k = 1 - Math.pow(0.0015, d);
            if (prefersReducedMotion) {
                px.current = 0;
                py.current = 0;
            } else {
                px.current += (rawPointer.x - px.current) * (k * 0.5);
                py.current += (rawPointer.y - py.current) * (k * 0.5);
            }
            const b = {
                "SceneRig.useFrame.b": (beat)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, beat.start, beat.end)
            }["SceneRig.useFrame.b"];
            const split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].close)));
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].turnSide));
            const crack = b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crack);
            const emerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].emerge));
            const fly = easeIn(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].fly));
            const grow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canGrow));
            const upright = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canUpright));
            const turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].turn));
            const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].canLift));
            const drop = b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].drop);
            const rise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateRise));
            const seal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].seal));
            const crateTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateTurn));
            const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].cover));
            const statsHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].statsIn)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].statsOut)));
            const ent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(entRaw);
            const time = performance.now() * 0.001;
            // ==========================================
            // 1. COCONUT RIG
            // ==========================================
            if (coconutGroup.current && coconutObjRef.current) {
                const isCoconutVisible = p < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].fly.end + 0.005;
                coconutGroup.current.visible = isCoconutVisible;
                if (isCoconutVisible) {
                    spinAngle.current += d * (0.32 * (1 - side) + 0.12 * split);
                    // Shake during crack: sin(70t) * .012 * sin(crack * PI)
                    let shake = 0;
                    if (crack > 0 && crack < 1) {
                        shake = Math.sin(70 * time) * 0.012 * Math.sin(crack * Math.PI);
                    }
                    const heroDrop = isMobile ? -0.18 * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].heroOut))) : 0;
                    coconutGroup.current.position.set(shake, heroDrop + (1 - ent) * -0.35 + Math.sin(0.8 * time) * 0.025 * (1 - side), 0);
                    const baseScale = isMobile ? 0.7 : 0.72;
                    const scaleVal = (0.55 + 0.45 * ent) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(baseScale, 1.0, split) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(1.0, 1.08, side);
                    coconutGroup.current.scale.set(scaleVal, scaleVal, scaleVal);
                    if (tiltZ.current) {
                        tiltZ.current.rotation.z = side * 1.35 - emerge * 1.0 + px.current * 0.05;
                    }
                    if (bowl.current) {
                        bowl.current.rotation.x = split * 0.95 - py.current * 0.05;
                    }
                    if (spin.current) {
                        spin.current.rotation.y = spinAngle.current + (1 - ent) * -2.4;
                    }
                    // Halves separation
                    const gap = crack * 0.035 + emerge * 1.0 + fly * 3.4;
                    const topHalf = coconutObjRef.current.top;
                    const bottomHalf = coconutObjRef.current.bottom;
                    topHalf.position.set(0, split * 3.1 + gap, split * -0.6);
                    topHalf.rotation.set(-split * 0.6, 0, split * 0.4);
                    bottomHalf.position.set(0, -gap - split * 0.08, 0);
                }
            }
            // ==========================================
            // 2. HERO CAN RIG
            // ==========================================
            if (heroCanRef.current) {
                const isCanVisible = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crack.end - 0.004;
                heroCanRef.current.root.visible = isCanVisible;
                if (isCanVisible) {
                    // Rotation: Euler ZYX: z = (side * 1.35 - emerge) * (1 - upright)
                    const rotZ = (side * 1.35 - emerge) * (1 - upright);
                    const idle = Math.sin(0.55 * time) * 0.18 * (1 - turn) * (1 - lift);
                    const rotY = idle + px.current * 0.2 + turn * Math.PI + lift * Math.PI;
                    const canScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0.3, 1.08, grow) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(1.0, 1 / 1.08, lift);
                    heroCanRef.current.root.scale.set(canScale, canScale, canScale);
                    // Position: lerped toward hover point (crateX, 1.4, .15) by lift
                    const baseCanY = Math.sin(0.9 * time) * 0.03 * (1 - lift);
                    const hoverX = crateX;
                    const hoverY = 1.4;
                    const hoverZ = 0.15;
                    const posX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0, hoverX, lift);
                    const posY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(baseCanY, hoverY, lift);
                    const posZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0, hoverZ, lift);
                    if (drop <= 0) {
                        heroCanRef.current.root.position.set(posX, posY, posZ);
                        heroCanRef.current.root.rotation.set(0, rotY, rotZ);
                    } else {
                        // During drop: read hero slot's world position/quaternion
                        let slotWorldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](crateX, -0.55 + 0.1, PITCH / 2);
                        let slotWorldQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, -0.62 + crateTurn * 1.05, 0));
                        if (heroSlotRef.current) {
                            heroSlotRef.current.getWorldPosition(slotWorldPos);
                            heroSlotRef.current.getWorldQuaternion(slotWorldQuat);
                        }
                        const across = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(drop, 0, 0.45));
                        const down = 0.85 * easeIn((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(drop, 0.2, 1.0)) + 0.15 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(drop, 0.2, 1.0));
                        const curX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(hoverX, slotWorldPos.x, across);
                        const curZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(hoverZ, slotWorldPos.z, across);
                        const curY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(hoverY, slotWorldPos.y, down);
                        heroCanRef.current.root.position.set(curX, curY, curZ);
                        const startQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromEuler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, rotY, rotZ));
                        const dropQuatT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(drop, 0, 0.7));
                        startQuat.slerp(slotWorldQuat, dropQuatT);
                        heroCanRef.current.root.quaternion.copy(startQuat);
                    }
                }
            }
            // ==========================================
            // 3. CRATE RIG
            // ==========================================
            if (crateGroup.current) {
                const isCrateVisible = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateRise.start - 0.01;
                crateGroup.current.visible = isCrateVisible;
                if (isCrateVisible) {
                    crateGroup.current.position.x = crateX;
                    crateGroup.current.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(-6.2, -0.55, rise) - cover * 0.9;
                    crateGroup.current.rotation.y = -0.62 + (1 - rise) * -0.5 + crateTurn * 1.05 + px.current * 0.06;
                    boxState.current.open = 1 - seal;
                    // Shadow under crate
                    if (crateShadowRef.current) {
                        const riseEnd = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateRise.end;
                        const shadowOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, riseEnd - 0.02, riseEnd + 0.02)) * (1 - cover) * 0.8;
                        const shadowMat = crateShadowRef.current.material;
                        if (shadowMat && typeof shadowMat.opacity === "number") {
                            shadowMat.opacity = shadowOp;
                        }
                    }
                }
            }
            // ==========================================
            // 4. CAMERA RIG
            // ==========================================
            const pCam = camera;
            const fovRad = pCam.fov * Math.PI / 180;
            const aspect = pCam.aspect;
            const fit = {
                "SceneRig.useFrame.fit": (w, h)=>{
                    return Math.max(h / (2 * Math.tan(fovRad / 2)), w / (2 * Math.tan(fovRad / 2) * aspect));
                }
            }["SceneRig.useFrame.fit"];
            const dHero = fit(isMobile ? 2.1 : 2.3, isMobile ? 3.4 : 2.75);
            const dCan = fit(1.6, isMobile ? 3.5 : 2.3);
            const dPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(fit(isMobile ? 3.6 : 4.9, isMobile ? 5.6 : 5.2), fit(isMobile ? 3.3 : 4.1, isMobile ? 4.6 : 4.1), crateTurn);
            const toCan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, 0.42, 0.5));
            const packIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateRise.start, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].crateRise.end + 0.01));
            const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(dHero, dCan, toCan), dPack, packIn) * (1 - statsHold * 0.06);
            const camY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0.18, 2.4, packIn) - crateTurn * 1.35;
            const lookX = packIn * crateX * (isMobile ? 1.0 : 0.9);
            const lookY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0, -0.12, packIn) - crateTurn * 0.38 - cover * 0.35;
            const targetPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](lookX * 0.55 + px.current * 0.28, camY + py.current * 0.16, dist);
            pCam.position.lerp(targetPos, k);
            pCam.lookAt(lookX + px.current * 0.04, lookY, 0);
        }
    }["SceneRig.useFrame"]);
    // Filler can slot positions: (-P, -P/2), (0, -P/2), (P, -P/2), (-P, P/2), (P, P/2)
    const slotY = -CRATE.h / 2 + BOARD + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN"].H / 2 + 0.005;
    const fillerSlots = [
        [
            -PITCH,
            slotY,
            -PITCH / 2
        ],
        [
            0,
            slotY,
            -PITCH / 2
        ],
        [
            PITCH,
            slotY,
            -PITCH / 2
        ],
        [
            -PITCH,
            slotY,
            PITCH / 2
        ],
        [
            PITCH,
            slotY,
            PITCH / 2
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                color: "#fff7ea",
                intensity: 0.55
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -3.5,
                    5,
                    4.5
                ],
                color: "#fff2df",
                intensity: 2.3,
                castShadow: true,
                "shadow-mapSize": [
                    1024,
                    1024
                ],
                "shadow-camera-near": 0.5,
                "shadow-camera-far": 25,
                "shadow-camera-left": -4,
                "shadow-camera-right": 4,
                "shadow-camera-top": 4,
                "shadow-camera-bottom": -4,
                "shadow-bias": -0.0005
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    4.5,
                    2.2,
                    -3.5
                ],
                color: "#e3ebf2",
                intensity: 1.4
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    0.5,
                    -2.5,
                    3
                ],
                color: "#f1e6d2",
                intensity: 0.35
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                resolution: tier === 2 ? 256 : 128,
                frames: 1,
                background: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        form: "rect",
                        color: "#fffaf1",
                        intensity: 2.2,
                        position: [
                            0,
                            5,
                            1
                        ],
                        scale: [
                            9,
                            6,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        form: "rect",
                        color: "#fff4e4",
                        intensity: 3,
                        position: [
                            -4,
                            2,
                            3
                        ],
                        rotation: [
                            0,
                            Math.PI / 3,
                            0
                        ],
                        scale: [
                            2.2,
                            6,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        form: "rect",
                        color: "#eef3f8",
                        intensity: 2.2,
                        position: [
                            4.5,
                            1.5,
                            1
                        ],
                        rotation: [
                            0,
                            -Math.PI / 2.4,
                            0
                        ],
                        scale: [
                            1.4,
                            6,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        form: "rect",
                        color: "#c9d6c4",
                        intensity: 0.8,
                        position: [
                            0,
                            -3,
                            2
                        ],
                        scale: [
                            8,
                            4,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: coconutGroup,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: tiltZ,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: bowl,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                            ref: spin,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                                object: coconut.root
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StoryScene.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sip/story/StoryScene.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: heroCan.root
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: crateGroup,
                position: [
                    crateX,
                    -6.2,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$3d$2f$PackagingBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PackagingBox"], {
                        w: CRATE.w,
                        h: CRATE.h,
                        d: CRATE.d,
                        plies: 3,
                        flute: "B",
                        detailed: tier > 0,
                        stateRef: boxState
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            CRATE.d / 2 + BOARD / 2 + 0.0025
                        ],
                        material: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            map: cartonTex.front,
                            roughness: 0.82,
                            polygonOffset: true,
                            polygonOffsetFactor: -2,
                            polygonOffsetUnits: -2
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                CRATE.w,
                                CRATE.h
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            -(CRATE.d / 2 + BOARD / 2 + 0.0025)
                        ],
                        rotation: [
                            0,
                            Math.PI,
                            0
                        ],
                        material: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            map: cartonTex.back,
                            roughness: 0.82,
                            polygonOffset: true,
                            polygonOffsetFactor: -2,
                            polygonOffsetUnits: -2
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                CRATE.w,
                                CRATE.h
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -(CRATE.w / 2 + BOARD / 2 + 0.0025),
                            0,
                            0
                        ],
                        rotation: [
                            0,
                            -Math.PI / 2,
                            0
                        ],
                        material: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            map: cartonTex.side,
                            roughness: 0.82,
                            polygonOffset: true,
                            polygonOffsetFactor: -2,
                            polygonOffsetUnits: -2
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                CRATE.d,
                                CRATE.h
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            CRATE.w / 2 + BOARD / 2 + 0.0025,
                            0,
                            0
                        ],
                        rotation: [
                            0,
                            Math.PI / 2,
                            0
                        ],
                        material: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            map: cartonTex.side,
                            roughness: 0.82,
                            polygonOffset: true,
                            polygonOffsetFactor: -2,
                            polygonOffsetUnits: -2
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                CRATE.d,
                                CRATE.h
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: heroSlotRef,
                        position: [
                            0,
                            slotY,
                            PITCH / 2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this),
                    fillerCans.map((can, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                            object: can.root,
                            position: fillerSlots[idx]
                        }, can.flavour.id, false, {
                            fileName: "[project]/components/sip/story/StoryScene.tsx",
                            lineNumber: 553,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        ref: crateShadowRef,
                        position: [
                            0,
                            -CRATE.h / 2 - 0.005,
                            0
                        ],
                        rotation: [
                            -Math.PI / 2,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    2.1,
                                    2.6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StoryScene.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                map: contactTex,
                                transparent: true,
                                opacity: 0,
                                depthWrite: false
                            }, void 0, false, {
                                fileName: "[project]/components/sip/story/StoryScene.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sip/story/StoryScene.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sip/story/StoryScene.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_s(SceneRig, "oV2azUyLnsWg1HLWUn/uDbOQMi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = SceneRig;
function StoryScene({ progressRef, entranceRef, pointerRef }) {
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQualityTier"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryScene.useEffect": ()=>{
            setMounted(true);
        }
    }["StoryScene.useEffect"], []);
    if (!mounted) return null;
    const dpr = [
        1,
        tier === 2 ? 1.75 : tier === 1 ? 1.5 : 1.25
    ];
    const fov = isMobile ? 32 : 28;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: dpr,
            camera: {
                fov,
                position: [
                    0,
                    0.2,
                    7
                ],
                near: 0.1,
                far: 60
            },
            gl: {
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"],
                toneMappingExposure: 1.0
            },
            shadows: true,
            "aria-hidden": "true",
            className: "w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneRig, {
                progressRef: progressRef,
                entranceRef: entranceRef,
                pointerRef: pointerRef,
                tier: tier,
                isMobile: isMobile
            }, void 0, false, {
                fileName: "[project]/components/sip/story/StoryScene.tsx",
                lineNumber: 618,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sip/story/StoryScene.tsx",
            lineNumber: 599,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sip/story/StoryScene.tsx",
        lineNumber: 598,
        columnNumber: 5
    }, this);
}
_s1(StoryScene, "+zTLaI/dssYjcXNjOTwR8IToido=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQualityTier"]
    ];
});
_c1 = StoryScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "SceneRig");
__turbopack_context__.k.register(_c1, "StoryScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sip/carton.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCartonTextures",
    ()=>getCartonTextures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/sip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sip/textures.ts [app-client] (ecmascript)");
;
;
;
let cachedCartonTextures = null;
function getCartonTextures(crateW, crateH, crateD) {
    if (cachedCartonTextures) return cachedCartonTextures;
    const pxPerUnit = 560;
    const frontW = Math.round(crateW * pxPerUnit);
    const frontH = Math.round(crateH * pxPerUnit);
    const sideW = Math.round(crateD * pxPerUnit);
    const sideH = Math.round(crateH * pxPerUnit);
    const INK = "#1d1a16";
    const IVORY = "#f5f3ee";
    const MOSS = "#2f4a3c";
    function makeKraftBase(canvas, seed) {
        const ctx = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        const imgData = ctx.createImageData(w, h);
        const data = imgData.data;
        const rnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(seed);
        for(let i = 0; i < data.length; i += 4){
            const d = (rnd() - 0.5) * 14;
            data[i] = Math.min(255, Math.max(0, 214 + d));
            data[i + 1] = Math.min(255, Math.max(0, 180 + d));
            data[i + 2] = Math.min(255, Math.max(0, 132 + d));
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        ctx.strokeStyle = "rgba(130, 95, 55, 0.12)";
        const fibres = Math.round(w * h / 1000);
        for(let i = 0; i < fibres; i++){
            const x = rnd() * w;
            const y = rnd() * h;
            const len = 3 + rnd() * 10;
            const ang = rnd() * Math.PI * 2;
            ctx.lineWidth = 0.5 + rnd() * 0.8;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
            ctx.stroke();
        }
    }
    // Draw SipMark on canvas
    function drawSipMarkCanvas(ctx, cx, cy, scale) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);
        ctx.translate(-16, -18);
        // Draw top half
        const topPath = new Path2D("M3 20 L7 16.5 L11 20.5 L15 16 L19 20.5 L23 16.5 L27 20.5 L29 18.5 A14 14 0 0 0 3 20 Z");
        ctx.fill(topPath);
        // Draw bottom half
        const btmPath = new Path2D("M3 23 L7 19.5 L11 23.5 L15 19 L19 23.5 L23 19.5 L27 23.5 L29 21.5 A14 14 0 0 1 3 23 Z");
        ctx.fill(btmPath);
        ctx.restore();
    }
    // Draw PackerMark on canvas
    function drawPackerMarkCanvas(ctx, cx, cy, scale) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);
        ctx.translate(-20, -16);
        ctx.lineWidth = 3.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        // liners
        ctx.moveTo(3, 5);
        ctx.lineTo(37, 5);
        ctx.moveTo(3, 27);
        ctx.lineTo(37, 27);
        // flute
        ctx.moveTo(3, 16);
        ctx.bezierCurveTo(5.55, 1.33, 8.95, 1.33, 11.5, 16);
        ctx.bezierCurveTo(14.05, 30.67, 17.45, 30.67, 20, 16);
        ctx.bezierCurveTo(22.55, 1.33, 25.95, 1.33, 28.5, 16);
        ctx.bezierCurveTo(31.05, 30.67, 34.45, 30.67, 37, 16);
        ctx.stroke();
        ctx.restore();
    }
    // Corner registration ticks
    function drawCornerTicks(ctx, w, h, margin = 24, size = 18) {
        ctx.save();
        ctx.lineWidth = 1.5;
        const corners = [
            [
                margin,
                margin
            ],
            [
                w - margin,
                margin
            ],
            [
                margin,
                h - margin
            ],
            [
                w - margin,
                h - margin
            ]
        ];
        for (const [cx, cy] of corners){
            ctx.beginPath();
            ctx.moveTo(cx - size, cy);
            ctx.lineTo(cx + size, cy);
            ctx.moveTo(cx, cy - size);
            ctx.lineTo(cx, cy + size);
            ctx.stroke();
        }
        ctx.restore();
    }
    // ==========================================
    // FRONT CANVAS
    // ==========================================
    const frontCanvas = document.createElement("canvas");
    frontCanvas.width = frontW;
    frontCanvas.height = frontH;
    makeKraftBase(frontCanvas, 101);
    const fctx = frontCanvas.getContext("2d");
    // Ivory rounded panel: margin 8% of width, r 18
    const fMargin = frontW * 0.08;
    const pW = frontW - 2 * fMargin;
    const pH = frontH - 2 * fMargin;
    const pX = fMargin;
    const pY = fMargin;
    const r = 18;
    fctx.save();
    fctx.beginPath();
    fctx.roundRect(pX, pY, pW, pH, r);
    fctx.fillStyle = IVORY;
    fctx.fill();
    fctx.clip();
    // Moss band: 15% of height at its foot
    const bandH = pH * 0.15;
    const bandY = pY + pH - bandH;
    fctx.fillStyle = MOSS;
    fctx.fillRect(pX, bandY, pW, bandH);
    // In the band: ivory mono 22px "PACKED IN A FLUTEWORKS CARTON · MADE IN INDIA"
    fctx.fillStyle = IVORY;
    fctx.font = '500 22px "JetBrains Mono", monospace';
    fctx.textAlign = "center";
    fctx.fillText("PACKED IN A FLUTEWORKS CARTON · MADE IN INDIA", pX + pW / 2, bandY + bandH * 0.62);
    // SipMark at scale 4.2 near top
    fctx.fillStyle = MOSS;
    drawSipMarkCanvas(fctx, pX + pW / 2, pY + pH * 0.18, 4.2);
    // Wordmark "BR-NARIO" (display 600, up to 150 px, fitted to panel)
    fctx.fillStyle = INK;
    fctx.textAlign = "center";
    let wmFontSize = Math.min(150, pW * 0.22);
    fctx.font = `600 ${wmFontSize}px "Inter Tight", sans-serif`;
    let measuredW = fctx.measureText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark).width;
    if (measuredW > pW * 0.85) {
        wmFontSize *= pW * 0.85 / measuredW;
        fctx.font = `600 ${wmFontSize}px "Inter Tight", sans-serif`;
    }
    fctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipBrand"].wordmark, pX + pW / 2, pY + pH * 0.44);
    // mono 24px "TENDER COCONUT WATER · NOT FROM CONCENTRATE"
    fctx.font = '500 24px "JetBrains Mono", monospace';
    fctx.fillText("TENDER COCONUT WATER · NOT FROM CONCENTRATE", pX + pW / 2, pY + pH * 0.54);
    // display 500 50px "6 × 250 ml cans"
    fctx.font = '500 50px "Inter Tight", sans-serif';
    fctx.fillText("6 × 250 ml cans", pX + pW / 2, pY + pH * 0.68);
    fctx.restore();
    // Corner registration ticks
    fctx.strokeStyle = INK;
    drawCornerTicks(fctx, frontW, frontH, 20, 16);
    // ==========================================
    // SIDES CANVAS
    // ==========================================
    const sideCanvas = document.createElement("canvas");
    sideCanvas.width = sideW;
    sideCanvas.height = sideH;
    makeKraftBase(sideCanvas, 202);
    const sctx = sideCanvas.getContext("2d");
    // Full-bleed moss with faint kraft texture showing through (8%)
    sctx.save();
    sctx.fillStyle = MOSS;
    sctx.globalAlpha = 0.92;
    sctx.fillRect(0, 0, sideW, sideH);
    sctx.restore();
    // Ivory rules top and bottom
    sctx.fillStyle = IVORY;
    sctx.fillRect(24, 24, sideW - 48, 4);
    sctx.fillRect(24, sideH - 28, sideW - 48, 4);
    // Two "this way up" arrows
    sctx.strokeStyle = IVORY;
    sctx.lineWidth = 3;
    function drawArrow(x, y) {
        sctx.beginPath();
        sctx.moveTo(x, y + 36);
        sctx.lineTo(x, y);
        sctx.lineTo(x - 12, y + 14);
        sctx.moveTo(x, y);
        sctx.lineTo(x + 12, y + 14);
        sctx.stroke();
    }
    drawArrow(55, 50);
    drawArrow(95, 50);
    // Recycling mark
    sctx.save();
    sctx.translate(sideW - 140, 68);
    sctx.strokeStyle = IVORY;
    sctx.lineWidth = 2.5;
    sctx.beginPath();
    sctx.arc(0, 0, 18, 0, Math.PI * 2);
    sctx.stroke();
    sctx.font = '600 13px "Inter Tight", sans-serif';
    sctx.fillStyle = IVORY;
    sctx.textAlign = "center";
    sctx.fillText("PAP", 0, 4);
    sctx.restore();
    // PackerMark at scale 3.4 top right
    sctx.strokeStyle = IVORY;
    drawPackerMarkCanvas(sctx, sideW - 60, 68, 3.4);
    // Vertical wordmark "FLUTEWORKS" (display 700, up to 190 px, fitted)
    sctx.save();
    sctx.translate(sideW / 2 + 10, sideH / 2);
    sctx.rotate(-Math.PI / 2);
    sctx.fillStyle = IVORY;
    sctx.textAlign = "center";
    let fwFontSize = Math.min(190, sideH * 0.22);
    sctx.font = `700 ${fwFontSize}px "Inter Tight", sans-serif`;
    let fwW = sctx.measureText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].wordmark).width;
    if (fwW > sideH * 0.72) {
        fwFontSize *= sideH * 0.72 / fwW;
        sctx.font = `700 ${fwFontSize}px "Inter Tight", sans-serif`;
    }
    sctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].wordmark, 0, 0);
    sctx.restore();
    // Vertical mono line "3-PLY · B-FLUTE · RSC · THIS WAY UP"
    sctx.save();
    sctx.translate(sideW / 2 - 80, sideH / 2);
    sctx.rotate(-Math.PI / 2);
    sctx.font = '500 20px "JetBrains Mono", monospace';
    sctx.fillStyle = IVORY;
    sctx.textAlign = "center";
    sctx.fillText("3-PLY · B-FLUTE · RSC · THIS WAY UP", 0, 0);
    sctx.restore();
    // ==========================================
    // BACK CANVAS
    // ==========================================
    const backCanvas = document.createElement("canvas");
    backCanvas.width = frontW;
    backCanvas.height = frontH;
    makeKraftBase(backCanvas, 303);
    const bctx = backCanvas.getContext("2d");
    // Kraft, ink at 88%
    bctx.save();
    bctx.fillStyle = INK;
    bctx.strokeStyle = INK;
    bctx.globalAlpha = 0.88;
    // PackerMark near top
    drawPackerMarkCanvas(bctx, frontW / 2, 100, 3.6);
    // "FLUTEWORKS PACKAGING" (display 600 54px)
    bctx.font = '600 54px "Inter Tight", sans-serif';
    bctx.textAlign = "center";
    bctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$sip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sipPacker"].name.toUpperCase(), frontW / 2, 180);
    // Mono lines
    bctx.font = '500 24px "JetBrains Mono", monospace';
    bctx.fillText("CORRUGATED BOXES & MONO CARTONS", frontW / 2, 235);
    bctx.fillText("CONTENTS: 6 × 250 ML · BR-NARIO", frontW / 2, 290);
    bctx.fillText("BOARD: 3-PLY CORRUGATED · B-FLUTE", frontW / 2, 345);
    bctx.fillText("MADE IN INDIA", frontW / 2, 400);
    // Seeded barcode with "8 901234 600025"
    const bcW = 340;
    const bcH = 100;
    const bcX = (frontW - bcW) / 2;
    const bcY = 470;
    const brnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sip$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(888);
    let curBx = bcX;
    while(curBx < bcX + bcW){
        const bw = 2 + Math.floor(brnd() * 4);
        if (brnd() > 0.4) {
            bctx.fillRect(curBx, bcY, bw, bcH);
        }
        curBx += bw + 2;
    }
    bctx.font = '500 20px "JetBrains Mono", monospace';
    bctx.fillText("8 901234 600025", frontW / 2, bcY + bcH + 28);
    // "KEEP DRY · HANDLE WITH CARE · STACK MAX 6" above a moss rule
    bctx.font = '500 22px "JetBrains Mono", monospace';
    bctx.fillText("KEEP DRY · HANDLE WITH CARE · STACK MAX 6", frontW / 2, frontH - 95);
    bctx.fillStyle = MOSS;
    bctx.fillRect(frontW * 0.1, frontH - 70, frontW * 0.8, 6);
    drawCornerTicks(bctx, frontW, frontH, 20, 16);
    bctx.restore();
    // Create textures
    const frontTex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](frontCanvas);
    frontTex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    frontTex.anisotropy = 8;
    const backTex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](backCanvas);
    backTex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    backTex.anisotropy = 8;
    const sideTex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](sideCanvas);
    sideTex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    sideTex.anisotropy = 8;
    cachedCartonTextures = {
        front: frontTex,
        back: backTex,
        side: sideTex
    };
    return cachedCartonTextures;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/three/corrugated.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FLUTE",
    ()=>FLUTE,
    "LINER_T",
    ()=>LINER_T,
    "MEDIUM_T",
    ()=>MEDIUM_T,
    "boardThickness",
    ()=>boardThickness,
    "getKraftTexture",
    ()=>getKraftTexture,
    "getRoughnessTexture",
    ()=>getRoughnessTexture,
    "makeFluteGeometry",
    ()=>makeFluteGeometry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const FLUTE = {
    B: {
        amp: 0.011,
        wavelength: 0.05
    },
    E: {
        amp: 0.006,
        wavelength: 0.026
    },
    F: {
        amp: 0.0035,
        wavelength: 0.016
    }
};
const LINER_T = 0.004;
const MEDIUM_T = 0.0035;
function boardThickness(plies, flute = "B") {
    const { amp } = FLUTE[flute];
    if (plies === 3) {
        return 2 * amp + LINER_T + 2 * LINER_T;
    }
    return 2 * (2 * amp + LINER_T) + 3 * LINER_T;
}
let cachedKraftTexture = null;
let cachedRoughnessTexture = null;
function getKraftTexture() {
    if (cachedKraftTexture) return cachedKraftTexture;
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        // Noise canvas around rgb(214, 180, 132) (+-7)
        const imgData = ctx.createImageData(size, size);
        const data = imgData.data;
        // Seeded random for reproducible texture
        let s = 12345;
        const rnd = ()=>{
            s = s * 16807 % 2147483647;
            return (s - 1) / 2147483646;
        };
        for(let i = 0; i < data.length; i += 4){
            const d = (rnd() - 0.5) * 14;
            data[i] = Math.min(255, Math.max(0, 214 + d));
            data[i + 1] = Math.min(255, Math.max(0, 180 + d));
            data[i + 2] = Math.min(255, Math.max(0, 132 + d));
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        // 900 faint fibres
        ctx.strokeStyle = "rgba(140, 105, 65, 0.12)";
        for(let i = 0; i < 900; i++){
            const x = rnd() * size;
            const y = rnd() * size;
            const len = 4 + rnd() * 12;
            const ang = rnd() * Math.PI * 2;
            ctx.lineWidth = 0.5 + rnd() * 0.8;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
            ctx.stroke();
        }
    }
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.repeat.set(2, 2);
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    cachedKraftTexture = texture;
    return texture;
}
function getRoughnessTexture() {
    if (cachedRoughnessTexture) return cachedRoughnessTexture;
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const imgData = ctx.createImageData(size, size);
        const data = imgData.data;
        let s = 98765;
        const rnd = ()=>{
            s = s * 16807 % 2147483647;
            return (s - 1) / 2147483646;
        };
        for(let i = 0; i < data.length; i += 4){
            const val = 180 + (rnd() - 0.5) * 50;
            data[i] = val;
            data[i + 1] = val;
            data[i + 2] = val;
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
    }
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    texture.repeat.set(3, 3);
    cachedRoughnessTexture = texture;
    return texture;
}
function makeFluteGeometry(width, height, fluteType = "B") {
    const { amp, wavelength } = FLUTE[fluteType];
    const waves = Math.max(4, Math.round(width / wavelength));
    const samplesPerWave = 12;
    const totalSamples = waves * samplesPerWave;
    // We build a closed ribbon shape in the XY plane: top edge along sine wave, bottom edge offset by MEDIUM_T
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    const halfW = width / 2;
    const k = Math.PI * 2 / (width / waves);
    // Top profile
    for(let i = 0; i <= totalSamples; i++){
        const t = i / totalSamples;
        const x = -halfW + t * width;
        const y = Math.sin(x * k) * amp;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
    }
    // Bottom profile (offset by MEDIUM_T in y)
    for(let i = totalSamples; i >= 0; i--){
        const t = i / totalSamples;
        const x = -halfW + t * width;
        const y = Math.sin(x * k) * amp - MEDIUM_T;
        shape.lineTo(x, y);
    }
    shape.closePath();
    const extrudeSettings = {
        depth: height,
        bevelEnabled: false,
        steps: 1
    };
    const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, extrudeSettings);
    // Center along depth (extrude depth is along Z) and rotate so flute displacement is along Z and height is along Y
    geom.center();
    // Rotate around X axis so extruded depth aligns with Y axis
    geom.rotateX(Math.PI / 2);
    geom.computeVertexNormals();
    return geom;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/components/sip/story/StoryScene.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/sip/story/StoryScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1lav2tsy9-rk1._.js.map