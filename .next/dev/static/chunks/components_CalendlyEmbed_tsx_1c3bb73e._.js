(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CalendlyEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendlyEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CalendlyEmbed({ url, height = 720 }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendlyEmbed.useEffect": ()=>{
            // load Calendly script once
            const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existing) return;
            const s = document.createElement("script");
            s.src = "https://assets.calendly.com/assets/external/widget.js";
            s.async = true;
            document.body.appendChild(s);
        }
    }["CalendlyEmbed.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        style: {
            marginTop: 16,
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(15,23,42,0.10)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "calendly-inline-widget",
            "data-url": url,
            style: {
                minWidth: "320px",
                height
            }
        }, void 0, false, {
            fileName: "[project]/components/CalendlyEmbed.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CalendlyEmbed.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(CalendlyEmbed, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CalendlyEmbed;
var _c;
__turbopack_context__.k.register(_c, "CalendlyEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_CalendlyEmbed_tsx_1c3bb73e._.js.map