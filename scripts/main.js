"use strict";
window.g_awH = class {
    constructor(c, a) {
        this.g_awI = c, this.g_awJ = a, this.g_awK = !1, this.g_agm = () => this.g_Jv()
    }
    g_awL() {}
    g_awM(e, a, b, c) {
        this.g_awI.g_awN(this.g_awJ, e, a, !!b, c)
    }
    g_awO(e, a, b, c) {
        return this.g_awI.g_awP(this.g_awJ, e, a, !!b, c)
    }
    g_awQ(d, a, b) {
        this.g_awI.g_awR() ? this.g_awM(d, a, b) : this.g_awI.g_awS()._OnMessageFromDOM({
            type: "event",
            component: this.g_awJ,
            handler: d,
            dispatchRuntimeEvent: b,
            data: a,
            responseId: null
        })
    }
    g_awT(c, a) {
        this.g_awI.g_awU(this.g_awJ, c, a)
    }
    g_awV(d) {
        for (const [a, b] of d) this.g_awT(a, b)
    }
    g_awW() {
        return this.g_awI
    }
    g_awX() {
        return this.g_awJ
    }
    g_Yp() {
        this.g_awK || (this.g_awI.g_awY(this.g_agm), this.g_awK = !0)
    }
    g_Yc() {
        this.g_awK && (this.g_awI.g_awZ(this.g_agm), this.g_awK = !1)
    }
    g_Jv() {}
}, "use strict", window.g_aw_ = class extends g_awH {
    constructor(c, a) {
        super(c, a), this.g_aw$ = new Map, this.g_axa = !0, this.g_awT("create", b => this.g_axb(b)), this.g_awT("destroy", b => this.g_axc(b)), this.g_awT("set-visible", b => this.g_axd(b)), this.g_awT("update-position", b => this.g_axe(b)), this.g_awT("update-state", b => this.g_axf(b)), this.g_awT("focus", b => this.g_axg(b)), this.g_awT("set-css-style", b => this.g_axh(b))
    }
    g_axi(b) {
        this.g_axa = !!b
    }
    g_axj(c, e) {
        this.g_awT(c, b => {
            const a = b.elementId,
                c = this.g_aw$.get(a);
            return e(c, b)
        })
    }
    g_axb(d) {
        const a = d.elementId,
            b = this.g_YP(a, d);
        this.g_aw$.set(a, b), this.g_axa && document.body.appendChild(b)
    }
    g_YP() {
        throw new Error("required override")
    }
    g_axk() {}
    g_axc(d) {
        const a = d.elementId,
            b = this.g_aw$.get(a);
        this.g_axk(b), this.g_axa && b.parentElement.removeChild(b), this.g_aw$.delete(a)
    }
    g_axl(d, a, b) {
        b || (b = {}), b.elementId = a, this.g_awM(d, b)
    }
    g_axm(d, a, b) {
        b || (b = {}), b.elementId = a, this.g_awQ(d, b)
    }
    g_axd(c) {
        if (this.g_axa) {
            const a = this.g_aw$.get(c.elementId);
            a.style.display = c.isVisible ? "" : "none"
        }
    }
    g_axe(d) {
        if (this.g_axa) {
            const a = this.g_aw$.get(d.elementId);
            a.style.left = d.left + "px", a.style.top = d.top + "px", a.style.width = d.width + "px", a.style.height = d.height + "px";
            const b = d.fontSize;
            null !== b && (a.style.fontSize = b + "em")
        }
    }
    g_axf(c) {
        const a = this.g_aw$.get(c.elementId);
        this.g_axn(a, c)
    }
    g_axn() {
        throw new Error("required override")
    }
    g_axg(c) {
        const a = this.g_aw$.get(c.elementId);
        c.focus ? a.focus() : a.blur()
    }
    g_axh(c) {
        const a = this.g_aw$.get(c.elementId);
        a.style[c.prop] = c.val
    }
    g_axo(b) {
        return this.g_aw$.get(b)
    }
}, "use strict"; {
    function q(e) {
        return new Promise((a, b) => {
            const c = document.createElement("script");
            c.onload = a, c.onerror = b, c.async = !1, c.src = e, document.head.appendChild(c)
        })
    }
    async function r(c) {
        const a = await s(c),
            b = new TextDecoder("utf-8");
        return b.decode(a)
    }

    function s(e) {
        return new Promise((f, b) => {
            const a = new FileReader;
            a.onload = b => f(b.target.result), a.onerror = c => b(c), a.readAsArrayBuffer(e)
        })
    }

    function b() {
        if (!e) return l;
        const f = document.createElement("canvas"),
            a = f.getContext("webgl2", {
                alpha: !0,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            });
        if (!a) return l;
        const b = a.getExtension("WEBGL_debug_renderer_info");
        if (!b) return l;
        const c = a.getParameter(b.UNMASKED_RENDERER_WEBGL);
        for (const b of m)
            if (c.toLowerCase().includes(b.toLowerCase())) return console.warn(`[Construct 3] This device appears to support WebGL 2, but it is disabled due to GPU driver bugs that make it unusable. (Renderer '${c}' matches blacklist entry '${b}'.) See crbug.com/934823`), 1;
        return l
    }
    const a = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
        e = /android/i.test(navigator.userAgent);
    let c = new Audio;
    const d = {
        "audio/webm; codecs=opus": !!c.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!c.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!c.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!c.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!c.canPlayType("audio/mp4"),
        "audio/mpeg": !!c.canPlayType("audio/mpeg")
    };
    c = null;
    const f = [];
    let g = 0;
    const h = [],
        i = new Map,
        j = new Map;
    let k = 0;
    const l = 2,
        m = ["Mali"];
    window.g_axp = class c {
        constructor(b) {
            this.g_axq = b.g_axr, this.g_axs = null, this.g_afo = "", this.g_axt = b.g_axu, this.g_axv = {}, this.g_axw = null, this.g_axx = null, this.g_axy = [], this.g_axz = null, this.g_ado = null, this.g_ag$ = null, this.g_adX = -1, this.g_axA = () => this.g_axB(), this.g_axC = [], this.g_aft = b.g_axD, "cordova" === this.g_aft && this.g_axq && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."), this.g_axq = !1), this.g_axE = !1, this.g_axF = null, ("html5" === this.g_aft || "playable-ad" === this.g_aft) && "file" === location.protocol.substr(0, 4) && alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"), this.g_awU("runtime", "cordova-fetch-local-file", b => this.g_axG(b)), this.g_awU("runtime", "create-job-worker", b => this.g_axH(b)), "cordova" === this.g_aft ? document.addEventListener("deviceready", () => this.g_Xi(b)) : this.g_Xi(b)
        }
        g_eN() {
            this.g_axI(), this.g_axs && (this.g_axs.onmessage = null, this.g_axs = null), this.g_axw && (this.g_axw.terminate(), this.g_axw = null), this.g_axx && (this.g_axx.g_eN(), this.g_axx = null), this.g_ado && (this.g_ado.parentElement.removeChild(this.g_ado), this.g_ado = null)
        }
        g_axJ() {
            return this.g_ado
        }
        g_fE() {
            return this.g_afo
        }
        g_awR() {
            return this.g_axq
        }
        g_AD() {
            return this.g_aft
        }
        g_ahr() {
            return "cordova" === this.g_aft && a
        }
        g_axK() {
            if (!this.g_ahr()) return !1;
            const d = window.devicePixelRatio,
                a = window.screen.width * d,
                b = window.screen.height * d;
            return 1125 == a && 2436 == b
        }
        async g_Xi(d) {
            if ("playable-ad" === this.g_aft) {
                this.g_axF = self.c3_base64files, await this.g_axL();
                for (let a = 0, b = d.g_axM.length; a < b; ++a) {
                    const b = d.g_axM[a].toLowerCase();
                    this.g_axF.hasOwnProperty(b) && (d.g_axM[a] = URL.createObjectURL(this.g_axF[b]))
                }
            }
            if (d.g_axN) this.g_afo = d.g_axN;
            else {
                const c = location.origin;
                this.g_afo = ("null" === c ? "file:///" : c) + location.pathname;
                const a = this.g_afo.lastIndexOf("/"); - 1 !== a && (this.g_afo = this.g_afo.substr(0, a + 1))
            }
            if (d.g_axO)
                for (const [a, b] of Object.entries(d.g_axO)) this.g_axv[a] = URL.createObjectURL(b);
            const a = new MessageChannel;
            this.g_axs = a.port1, this.g_axs.onmessage = b => this._OnMessageFromRuntime(b.data), window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(b => this.g_axP(b)), this.g_ag$ = new self.g_axQ(this), await this.g_ag$.g_aaM(), this.g_axR(), "object" == typeof window.StatusBar && window.StatusBar.hide(), await this.g_axS(), this.g_axq ? await this.g_axT(d, a.port2) : await this.g_axU(d, a.port2)
        }
        g_axV(b) {
            return this.g_axv.hasOwnProperty(b) ? this.g_axv[b] : b.endsWith("/workerMain.js") && this.g_axv.hasOwnProperty("workerMain.js") ? this.g_axv["workerMain.js"] : "playable-ad" === this.g_aft && this.g_axF.hasOwnProperty(b.toLowerCase()) ? URL.createObjectURL(this.g_axF[b.toLowerCase()]) : b
        }
        async g_axW(f, a, g) {
            if (f.startsWith("blob:")) return new Worker(f, g);
            if (this.g_ahr()) {
                const a = await this.g_Az(this.g_axt + f),
                    b = new Blob([a], {
                        type: "application/javascript"
                    });
                return new Worker(URL.createObjectURL(b), g)
            }
            const c = new URL(f, a),
                b = location.origin !== c.origin;
            if (b) {
                const d = await fetch(c);
                if (!d.ok) throw new Error("failed to fetch worker script");
                const a = await d.blob();
                return new Worker(URL.createObjectURL(a), g)
            }
            return new Worker(c, g)
        }
        g_axR() {
            if (this.g_axK()) {
                const d = window.innerWidth > window.innerHeight,
                    a = document.documentElement.style,
                    b = document.body.style;
                d ? (b.height = a.height = "375px", b.width = a.width = "812px") : (b.width = a.width = "375px", b.height = a.height = "812px")
            }
        }
        g_axX(e) {
            return {
                baseUrl: this.g_afo,
                windowInnerWidth: window.innerWidth,
                windowInnerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: c.g_aez(),
                maxWebGLVersion: b(),
                projectData: e.g_axY,
                previewImageBlobs: window.cr_previewImageBlobs || this.g_axF,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                shaders: self.C3_Shaders,
                exportType: e.g_axD,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.g_axZ,
                jobScheduler: this.g_ag$.g_ax_(),
                supportedAudioFormats: d,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.g_axt + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.g_axt + "opus.wasm.wasm",
                isWKWebView: this.g_ahr(),
                isFBInstantAvailable: "undefined" != typeof self.FBInstant
            }
        }
        async g_axT(e, a) {
            const b = this.g_axV(e.g_ax$);
            this.g_axw = await this.g_axW(b, this.g_afo, {
                name: "Runtime"
            }), this.g_ado = document.createElement("canvas"), this.g_ado.style.display = "none";
            const c = this.g_ado.transferControlToOffscreen();
            document.body.appendChild(this.g_ado), window.c3canvas = this.g_ado, this.g_axw.postMessage(Object.assign(this.g_axX(e), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: a,
                canvas: c,
                workerDependencyScripts: e.g_aya || [],
                engineScripts: e.g_axM
            }), [a, c, ...this.g_ag$.g_ayb()]), this.g_axy = h.map(b => new b(this)), this.g_ayc()
        }
        async g_axU(a, b) {
            this.g_ado = document.createElement("canvas"), this.g_ado.style.display = "none", document.body.appendChild(this.g_ado), window.c3canvas = this.g_ado, this.g_axy = h.map(b => new b(this)), this.g_ayc();
            const c = a.g_axM.map(b => new URL(b, this.g_afo).toString());
            await Promise.all(c.map(a => q(a)));
            const d = Object.assign(this.g_axX(a), {
                isInWorker: !1,
                messagePort: b,
                canvas: this.g_ado
            });
            this.g_axx = self.C3_CreateRuntime(d), await self.C3_InitRuntime(this.g_axx, d)
        }
        async g_axH() {
            const b = await this.g_ag$.g_ayd();
            return {
                outputPort: b,
                transferables: [b]
            }
        }
        g_awS() {
            if (this.g_axq) throw new Error("not available in worker mode");
            return this.g_axx
        }
        g_awN(f, a, b, c, d) {
            this.g_axs.postMessage({
                type: "event",
                component: f,
                handler: a,
                dispatchRuntimeEvent: c,
                data: b,
                responseId: null
            }, this.g_axE ? void 0 : d)
        }
        g_awP(h, a, b, c, d) {
            const e = k++,
                f = new Promise((c, a) => {
                    j.set(e, {
                        resolve: c,
                        reject: a
                    })
                });
            return this.g_axs.postMessage({
                type: "event",
                component: h,
                handler: a,
                dispatchRuntimeEvent: c,
                data: b,
                responseId: e
            }, this.g_axE ? void 0 : d), f
        }["_OnMessageFromRuntime"](c) {
            const a = c.type;
            if ("event" === a) this.g_aye(c);
            else if ("result" === a) this.g_ayf(c);
            else if ("runtime-ready" === a) this.g_ayg();
            else throw new Error(`unknown message '${a}'`)
        }
        g_aye(j) {
            const k = j.component,
                b = j.handler,
                a = j.data,
                c = j.responseId,
                d = i.get(k);
            if (!d) return void console.warn(`[DOM] No event handlers for component '${k}'`);
            const e = d.get(b);
            if (!e) return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);
            let f = null;
            try {
                f = e(a)
            } catch (d) {
                return console.error(`Exception in '${k}' handler '${b}':`, d), void(null !== c && this.g_ayh(c, !1, d.toString()))
            }
            null !== c && (f && f.then ? f.then(b => this.g_ayh(c, !0, b)).catch(d => {
                console.error(`Rejection from '${k}' handler '${b}':`, d), this.g_ayh(c, !1, d.toString())
            }) : this.g_ayh(c, !0, f))
        }
        g_ayh(e, a, b) {
            let c;
            b && b.transferables && (c = b.transferables), this.g_axs.postMessage({
                type: "result",
                responseId: e,
                isOk: a,
                result: b
            }, c)
        }
        g_ayf(f) {
            const a = f.responseId,
                b = f.isOk,
                c = f.result,
                d = j.get(a);
            b ? d.resolve(c) : d.reject(c), j.delete(a)
        }
        g_awU(e, a, b) {
            let c = i.get(e);
            if (c || (c = new Map, i.set(e, c)), c.has(a)) throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);
            c.set(a, b)
        }
        static g_ayi(b) {
            if (h.includes(b)) throw new Error("DOM handler already added");
            h.push(b)
        }
        g_ayc() {
            for (const b of this.g_axy)
                if ("runtime" === b.g_awX()) return void(this.g_axz = b);
            throw new Error("cannot find runtime DOM handler")
        }
        g_axP(b) {
            this.g_awN("debugger", "message", b)
        }
        g_ayg() {
            for (const b of this.g_axy) b.g_awL()
        }
        static g_aez() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        async g_ayj() {
            return await this.g_awP("runtime", "get-remote-preview-status-info")
        }
        g_awY(b) {
            this.g_axC.push(b), this.g_ayk()
        }
        g_awZ(c) {
            const a = this.g_axC.indexOf(c);
            if (-1 === a) throw new Error("invalid callback");
            this.g_axC.splice(a, 1), this.g_axC.length || this.g_axI()
        }
        g_ayk() {
            -1 === this.g_adX && this.g_axC.length && (this.g_adX = requestAnimationFrame(this.g_axA))
        }
        g_axI() {
            -1 !== this.g_adX && (cancelAnimationFrame(this.g_adX), this.g_adX = -1)
        }
        g_axB() {
            this.g_adX = -1;
            for (const b of this.g_axC) b();
            this.g_ayk()
        }
        g_ayl(b) {
            this.g_axz.g_ayl(b)
        }
        g_aym(b) {
            this.g_axz.g_aym(b)
        }
        g_ayn() {
            this.g_axz.g_ayn()
        }
        g_ayo(b) {
            this.g_axz.g_ayo(b)
        }
        g_AV(b) {
            return !!d[b]
        }
        async g_ahc(c) {
            const a = await this.g_awP("runtime", "opus-decode", {
                arrayBuffer: c
            }, !1, [c]);
            return new Float32Array(a)
        }
        g_gp(b) {
            return /^(?:[a-z]+:)?\/\//.test(b) || "data:" === b.substr(0, 5) || "blob:" === b.substr(0, 5)
        }
        g_gq(b) {
            return !this.g_gp(b)
        }
        async g_axG(c) {
            const a = c.filename;
            switch (c.as) {
                case "text":
                    return await this.g_Ax(a);
                case "buffer":
                    return await this.g_Az(a);
                default:
                    throw new Error("unsupported type");
            }
        }
        g_ayp(c) {
            const d = window.cordova.file.applicationDirectory + "www/" + c;
            return new Promise((e, a) => {
                window.resolveLocalFileSystemURL(d, c => {
                    c.file(e, a)
                }, a)
            })
        }
        async g_Ax(b) {
            const a = await this.g_ayp(b);
            return await r(a)
        }
        g_ayq() {
            if (f.length && !(8 <= g)) {
                g++;
                const b = f.shift();
                this.g_ayr(b.filename, b.g_ays, b.g_ayt)
            }
        }
        g_Az(d) {
            return new Promise((e, b) => {
                f.push({
                    filename: d,
                    g_ays: b => {
                        g--, this.g_ayq(), e(b)
                    },
                    g_ayt: c => {
                        g--, this.g_ayq(), b(c)
                    }
                }), this.g_ayq()
            })
        }
        async g_ayr(c, a, b) {
            try {
                const b = await this.g_ayp(c),
                    d = await s(b);
                a(d)
            } catch (c) {
                b(c)
            }
        }
        async g_axL() {
            const d = [];
            for (const [a, b] of Object.entries(this.g_axF)) d.push(this.g_ayu(a, b));
            await Promise.all(d)
        }
        async g_ayu(e, a) {
            if ("object" == typeof a) this.g_axF[e] = new Blob([a.str], {
                type: a.type
            });
            else {
                const b = await fetch(a),
                    c = await b.blob();
                this.g_axF[e] = c
            }
        }
        g_axS() {
            let e = null;
            const f = new Promise(a => e = a),
                b = new ArrayBuffer(1),
                c = new MessageChannel;
            return c.port2.onmessage = a => {
                a.data && a.data.arrayBuffer || (this.g_axE = !0, console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")), e()
            }, c.port1.postMessage({
                arrayBuffer: b
            }, [b]), f
        }
    }
} {
    function g(b) {
        return b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents || b.originalEvent && b.originalEvent.sourceCapabilities && b.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function a(e) {
        return new Promise((a, b) => {
            const c = new Image;
            c.onload = () => a(c), c.onerror = c => b(c), c.src = e
        })
    }
    async function h(b) {
        const d = URL.createObjectURL(b);
        try {
            return await a(d)
        } finally {
            URL.revokeObjectURL(d)
        }
    }

    function b() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (b) {
            return !1
        }
    }
    self.C3_RasterSvgImage = async function(f, a, b) {
        const c = document.createElement("canvas");
        c.width = a, c.height = b;
        const d = c.getContext("2d");
        return d.drawImage(f, 0, 0, a, b), c
    };
    let c = !1;
    document.addEventListener("pause", () => c = !0), document.addEventListener("resume", () => c = !1);
    const d = class extends g_awH {
        constructor(c) {
            super(c, "runtime"), this.g_ayv = !0, this.g_ayw = "any", this.g_ayx = !1, this.g_ayy = !1, this.g_ayz = null, c.g_awU("canvas", "update-size", b => this.g_ayA(b)), c.g_awU("runtime", "invoke-download", b => this.g_ayB(b)), c.g_awU("runtime", "raster-svg-image", b => this.g_ayC(b)), c.g_awU("runtime", "set-target-orientation", b => this.g_ayD(b)), c.g_awU("runtime", "register-sw", () => this.g_ayE()), c.g_awU("runtime", "post-to-debugger", b => this.g_ayF(b)), c.g_awU("runtime", "before-start-ticking", () => this.g_ayG()), c.g_awU("runtime", "debug-highlight", b => this.g_ayH(b)), c.g_awU("runtime", "enable-device-orientation", () => this.g_ayI()), c.g_awU("runtime", "enable-device-motion", () => this.g_ayJ());
            const a = c.g_axJ();
            a.addEventListener("contextmenu", b => b.preventDefault()), a.addEventListener("selectstart", b => b.preventDefault()), a.addEventListener("gesturehold", b => b.preventDefault()), a.addEventListener("touchstart", b => b.preventDefault()), window.addEventListener("mousedown", b => {
                1 === b.button && b.preventDefault()
            }), window.addEventListener("resize", () => this.g_aem()), this.g_ayK = new Set, this.g_ayL = new WeakSet, this.g_ayM = !1
        }
        g_ayG() {
            return document.addEventListener("visibilitychange", () => this.g_ahb(document.hidden)), document.addEventListener("pause", () => this.g_ahb(!0)), document.addEventListener("resume", () => this.g_ahb(!1)), {
                isSuspended: !!(document.hidden || c)
            }
        }
        g_awL() {
            window.addEventListener("focus", () => this.g_ayN("window-focus")), window.addEventListener("blur", () => this.g_ayN("window-blur", {
                parentHasFocus: b()
            })), window.addEventListener("fullscreenchange", () => this.g_aen()), window.addEventListener("webkitfullscreenchange", () => this.g_aen()), window.addEventListener("mozfullscreenchange", () => this.g_aen()), window.addEventListener("fullscreenerror", b => this.g_aeo(b)), window.addEventListener("webkitfullscreenerror", b => this.g_aeo(b)), window.addEventListener("mozfullscreenerror", b => this.g_aeo(b)), window.addEventListener("keydown", b => this.g_ayO("keydown", b)), window.addEventListener("keyup", b => this.g_ayO("keyup", b)), window.addEventListener("mousemove", b => this.g_ayP("mousemove", b)), window.addEventListener("mousedown", b => this.g_ayP("mousedown", b)), window.addEventListener("mouseup", b => this.g_ayP("mouseup", b)), window.addEventListener("dblclick", b => this.g_ayP("dblclick", b)), window.addEventListener("wheel", b => this.g_ayQ("wheel", b)), "undefined" == typeof PointerEvent ? (window.addEventListener("touchstart", b => this.g_ayR("pointerdown", b)), window.addEventListener("touchmove", b => this.g_ayR("pointermove", b)), window.addEventListener("touchend", b => this.g_ayR("pointerup", b)), window.addEventListener("touchcancel", b => this.g_ayR("pointercancel", b))) : (window.addEventListener("pointerdown", b => this.g_ayS("pointerdown", b)), window.addEventListener("pointermove", b => this.g_ayS("pointermove", b)), window.addEventListener("pointerup", b => this.g_ayS("pointerup", b)), window.addEventListener("pointercancel", b => this.g_ayS("pointercancel", b)));
            const c = () => this.g_ayn();
            window.addEventListener("pointerup", c, !0), window.addEventListener("touchend", c, !0), window.addEventListener("click", c, !0), window.addEventListener("keydown", c, !0), window.addEventListener("gamepadconnected", c, !0)
        }
        g_ayI() {
            this.g_ayx || (this.g_ayx = !0, window.addEventListener("deviceorientation", b => this.g_aos(b)))
        }
        g_ayJ() {
            this.g_ayy || (this.g_ayy = !0, window.addEventListener("devicemotion", b => this.g_aot(b)))
        }
        g_ayN(c, a) {
            this.g_awM(c, a || null, !0)
        }
        g_aem() {
            this.g_awM("window-resize", {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio
            }, !0)
        }
        g_ayD(b) {
            this.g_ayw = b.targetOrientation
        }
        g_ayT() {
            const c = this.g_ayw;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(c).catch(b => console.warn("[Construct 3] Failed to lock orientation: ", b));
            else try {
                let a = !1;
                screen.lockOrientation ? a = screen.lockOrientation(c) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(c) : screen.mozLockOrientation ? a = screen.mozLockOrientation(c) : screen.msLockOrientation && (a = screen.msLockOrientation(c)), a || console.warn("[Construct 3] Failed to lock orientation")
            } catch (b) {
                console.warn("[Construct 3] Failed to lock orientation: ", b)
            }
        }
        g_aen() {
            const b = g_axp.g_aez();
            b && "any" !== this.g_ayw && this.g_ayT(), this.g_awM("fullscreenchange", {
                isFullscreen: b,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        g_aeo(b) {
            console.warn("[Construct 3] Fullscreen request failed: ", b), this.g_awM("fullscreenerror", {
                isFullscreen: g_axp.g_aez(),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        g_ahb(b) {
            b ? this.g_awI.g_axI() : this.g_awI.g_ayk(), this.g_awM("visibilitychange", {
                hidden: b
            })
        }
        g_ayO(c, a) {
            this.g_awQ(c, {
                code: a.code,
                key: a.key,
                which: a.which,
                repeat: a.repeat,
                altKey: a.altKey,
                ctrlKey: a.ctrlKey,
                metaKey: a.metaKey,
                shiftKey: a.shiftKey,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_ayP(a, b) {
            g(b) || ("mousedown" === a && window !== window.top && window.focus(), this.g_awQ(a, {
                button: b.button,
                clientX: b.clientX,
                clientY: b.clientY,
                timeStamp: b.timeStamp
            }, !0))
        }
        g_ayQ(c, a) {
            this.g_awM(c, {
                clientX: a.clientX,
                clientY: a.clientY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_ayS(c, a) {
            "pointerdown" === c && window !== window.top && window.focus(), this.g_awQ(c, {
                pointerId: a.pointerId,
                pointerType: a.pointerType,
                clientX: a.clientX,
                clientY: a.clientY,
                width: a.width || 0,
                height: a.height || 0,
                pressure: a.pressure || 0,
                tangentialPressure: a.tangentialPressure || 0,
                tiltX: a.tiltX || 0,
                tiltY: a.tiltY || 0,
                twist: a.twist || 0,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_ayR(e, a) {
            "pointerdown" === e && window !== window.top && window.focus();
            for (let b = 0, c = a.changedTouches.length; b < c; ++b) {
                const c = a.changedTouches[b];
                this.g_awQ(e, {
                    pointerId: c.identifier,
                    pointerType: "touch",
                    clientX: c.clientX,
                    clientY: c.clientY,
                    width: 2 * (c.radiusX || c.webkitRadiusX || c.mozRadiusX || c.msRadiusX || 0),
                    height: 2 * (c.radiusY || c.webkitRadiusY || c.mozRadiusY || c.msRadiusY || 0),
                    pressure: c.force || c.webkitForce || c.mozForce || c.msForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: c.rotationAngle || 0,
                    timeStamp: a.timeStamp
                }, !0)
            }
        }
        g_aos(b) {
            this.g_awM("deviceorientation", {
                alpha: b.alpha || 0,
                beta: b.beta || 0,
                gamma: b.gamma || 0,
                timeStamp: b.timeStamp
            }, !0)
        }
        g_aot(j) {
            let a = 0,
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0;
            const p = j.accelerationIncludingGravity;
            p && (a = p.x || 0, k = p.y || 0, l = p.z || 0);
            const h = j.acceleration;
            h && (m = h.x || 0, n = h.y || 0, o = h.z || 0), this.g_awM("devicemotion", {
                acceleration: {
                    x: m,
                    y: n,
                    z: o
                },
                accelerationWithG: {
                    x: a,
                    y: k,
                    z: l
                },
                timeStamp: j.timeStamp
            }, !0)
        }
        g_ayA(d) {
            const a = this.g_awW(),
                b = a.g_axJ();
            b.style.width = d.styleWidth + "px", b.style.height = d.styleHeight + "px", b.style.marginLeft = d.marginLeft + "px", b.style.marginTop = d.marginTop + "px", a.g_axR(), this.g_ayv && (b.style.display = "", this.g_ayv = !1)
        }
        g_ayB(f) {
            const b = f.url,
                c = f.filename,
                d = document.createElement("a"),
                e = document.body;
            d.textContent = c, d.href = b, d.download = c, e.appendChild(d), d.click(), e.removeChild(d)
        }
        async g_ayC(c) {
            const a = c.blob,
                b = c.width,
                d = c.height,
                e = await h(a),
                f = await self.C3_RasterSvgImage(e, b, d);
            return await createImageBitmap(f)
        }
        g_ayn() {
            const c = [...this.g_ayK];
            if (this.g_ayK.clear(), !this.g_ayM)
                for (const d of c) {
                    const b = d.play();
                    b && b.catch(() => {
                        this.g_ayL.has(d) || this.g_ayK.add(d)
                    })
                }
        }
        g_ayl(c) {
            if ("function" != typeof c.play) throw new Error("missing play function");
            this.g_ayL.delete(c);
            let a;
            try {
                a = c.play()
            } catch (a) {
                return void this.g_ayK.add(c)
            }
            a && a.catch(() => {
                this.g_ayL.has(c) || this.g_ayK.add(c)
            })
        }
        g_aym(b) {
            this.g_ayK.delete(b), this.g_ayL.add(b)
        }
        g_ayo(b) {
            this.g_ayM = !!b
        }
        g_ayH(d) {
            const a = d.show;
            if (!a) return void(this.g_ayz && (this.g_ayz.style.display = "none"));
            this.g_ayz || (this.g_ayz = document.createElement("div"), this.g_ayz.id = "inspectOutline", document.body.appendChild(this.g_ayz));
            const b = this.g_ayz;
            b.style.display = "", b.style.left = d.left - 1 + "px", b.style.top = d.top - 1 + "px", b.style.width = d.width + 2 + "px", b.style.height = d.height + 2 + "px", b.textContent = d.name
        }
        g_ayE() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        g_ayF(b) {
            window.c3_postToMessagePort && (b.from = "runtime", window.c3_postToMessagePort(b))
        }
    };
    g_axp.g_ayi(d)
} {
    const c = document.currentScript.src;
    self.g_axQ = class {
        constructor(a) {
            this.g_ayU = a, this.g_afo = c ? c.substr(0, c.lastIndexOf("/") + 1) : a.g_fE(), this.g_aji = Math.min(navigator.hardwareConcurrency || 2, 16), this.g_ayV = null, this.g_ayW = [], this.g_ajg = null, this.g_ayX = null
        }
        async g_aaM() {
            if (this.g_ayY) throw new Error("already initialised");
            this.g_ayY = !0;
            const c = this.g_ayU.g_axV("dispatchWorker.js");
            this.g_ayV = await this.g_ayU.g_axW(c, this.g_afo, {
                name: "DispatchWorker"
            });
            const a = new MessageChannel;
            this.g_ajg = a.port1, this.g_ayV.postMessage({
                type: "_init",
                "in-port": a.port2
            }, [a.port2]), this.g_ayX = await this.g_ayd()
        }
        async g_ayd() {
            const f = this.g_ayW.length,
                a = this.g_ayU.g_axV("jobWorker.js"),
                b = await this.g_ayU.g_axW(a, this.g_afo, {
                    name: "JobWorker" + f
                }),
                c = new MessageChannel,
                d = new MessageChannel;
            return this.g_ayV.postMessage({
                type: "_addJobWorker",
                port: c.port1
            }, [c.port1]), b.postMessage({
                type: "init",
                number: f,
                "dispatch-port": c.port2,
                "output-port": d.port2
            }, [c.port2, d.port2]), this.g_ayW.push(b), d.port1
        }
        g_ax_() {
            return {
                inputPort: this.g_ajg,
                outputPort: this.g_ayX,
                maxNumWorkers: this.g_aji
            }
        }
        g_ayb() {
            return [this.g_ajg, this.g_ayX]
        }
    }
}
if ("use strict", window.C3_IsSupported) {
    "undefined" != typeof OffscreenCanvas;
    window.c3_runtimeInterface = new g_axp({
        g_axr: !1,
        g_ax$: "workerMain.js",
        g_axM: ["scripts/c3runtime.js"],
        g_axu: "scripts/",
        g_axD: "instant-games"
    })
} {
    const b = class extends g_awH {
        constructor(b) {
            super(b, "mouse"), this.g_awT("cursor", b => this.g_ayZ(b))
        }
        g_ayZ(b) {
            document.body.style.cursor = b
        }
    };
    g_axp.g_ayi(b)
} {
    function c(c) {
        return new Promise(a => setTimeout(a, c))
    }
    const a = class extends g_awH {
        constructor(b) {
            super(b, "instant-games"), this.g_ay_ = !1, this.g_atr = !1, this.g_ay$ = null, this.g_aza = null, this.g_azb = null, this.g_awV([
                ["load", b => this.g_azc(b)],
                ["loading-progress", b => this.g_atI(b)],
                ["start-game", () => this.g_azd()],
                ["quit", () => this.g_aze()],
                ["set-player-data", b => this.g_azf(b)],
                ["load-player-data", () => this.g_azg()],
                ["share", b => this.g_azh(b)],
                ["custom-update", b => this.g_azi(b)],
                ["switch-game", b => this.g_azj(b)],
                ["change-context", b => this.g_azk(b)],
                ["log-event", b => this.g_azl(b)],
                ["load-connected-players", () => this.g_azm()],
                ["set-score", b => this.g_azn(b)],
                ["load-player-score", b => this.g_azo(b)],
                ["share-leaderboard-update", b => this.g_azp(b)],
                ["load-leaderboard", b => this.g_azq(b)],
                ["create-shortcut", () => this.g_azr()],
                ["subscribe-bot", () => this.g_azs()],
                ["load-ad", b => this.g_azt(b)],
                ["show-ad", b => this.g_azu(b)]
            ])
        }
        async g_azc(a) {
            return "instant-games" === a.exportType ? (this.g_ay$ = window.FBInstant, !!this.g_ay$) && (await Promise.race([this.g_azv(), c(4e3)]), this.g_atr = this.g_ay_, this.g_atr ? console.info("[Instant Games] Initialized OK") : console.warn("[Instant Games] Initialization timed out after 4 seconds. Continuing with Instant Games disabled."), this.g_atr) : (console.warn("[Instant Games] Project has not been exported with the 'Instant Games' export option, so Instant Games features will be unavailable"), !1)
        }
        async g_azv() {
            try {
                await this.g_ay$.initializeAsync(), this.g_ay_ = !0
            } catch (b) {
                console.error("[Instant Games] Failed to initialize: ", b)
            }
        }
        g_atI(b) {
            this.g_atr && this.g_ay$.setLoadingProgress(b.progress)
        }
        async g_azd() {
            if (!this.g_atr) return null;
            const f = this.g_ay$;
            await f.startGameAsync(), f.onPause(() => this.g_awM("pause"));
            const a = f.context,
                b = f.player,
                c = f.getEntryPointData();
            let d = "";
            return c && c.hasOwnProperty("data") && (d = c.data), {
                locale: f.getLocale(),
                platform: f.getPlatform(),
                sdkVersion: f.getSDKVersion(),
                contextId: a.getID(),
                contextType: a.getType(),
                playerName: b.getName(),
                playerPhoto: b.getPhoto(),
                playerId: b.getID(),
                entryPointData: d,
                supportedApis: f.getSupportedAPIs()
            }
        }
        g_azw() {
            this.g_awM("error")
        }
        g_aze() {
            this.g_atr && this.g_ay$.quit()
        }
        async g_azf(b) {
            if (this.g_atr) try {
                await this.g_ay$.player.setDataAsync({
                    data: b.data
                })
            } catch (b) {
                console.error("[Instant Games] Failed to set player data: ", b), this.g_azw()
            }
        }
        async g_azg() {
            if (!this.g_atr) return "";
            try {
                const b = await this.g_ay$.player.getDataAsync(["data"]);
                if (b && b.hasOwnProperty("data")) return b.data
            } catch (b) {
                console.error("[Instant Games] Failed to load player data: ", b), this.g_azw()
            }
            return ""
        }
        async g_azh(b) {
            if (this.g_atr) try {
                await this.g_ay$.shareAsync({
                    intent: b.intent,
                    image: b.image,
                    text: b.text,
                    data: {
                        data: b.data
                    }
                })
            } catch (b) {
                console.error("[Instant Games] Failed to share: ", b), this.g_azw()
            }
        }
        async g_azi(d) {
            if (this.g_atr) try {
                const a = {
                        action: "CUSTOM",
                        template: d.templateId,
                        image: d.image,
                        text: d.text,
                        data: {
                            data: d.data
                        },
                        strategy: d.strategy,
                        notification: d.notification
                    },
                    b = d.cta;
                b && (a.cta = b), await this.g_ay$.updateAsync(a)
            } catch (b) {
                console.error("[Instant Games] Error posting custom update: ", b)
            }
        }
        async g_azj(b) {
            if (this.g_atr) try {
                await this.g_ay$.switchGameAsync(b.appId, {
                    data: b.data
                })
            } catch (b) {
                console.error("[Instant Games] Failed to switch game: ", b), this.g_azw()
            }
        }
        async g_azk(g) {
            if (!this.g_atr) return {
                isOk: !1
            };
            try {
                const a = {},
                    b = g.filter;
                1 === b ? a.filters = ["NEW_CONTEXT_ONLY"] : 2 === b ? a.filters = ["INCLUDE_EXISTING_CHALLENGES"] : 3 === b && (a.filters = ["NEW_PLAYERS_ONLY"]);
                const c = g.minSize,
                    d = g.maxSize;
                0 <= c && (a.minSize = c), 0 <= d && (a.maxSize = d);
                const e = this.g_ay$.context;
                return await e.chooseAsync(a), {
                    isOk: !0,
                    newContextId: e.getID(),
                    newContextType: e.getType()
                }
            } catch (b) {
                return "USER_INPUT" === b.code ? {
                    isOk: !1,
                    cancelled: !0
                } : (console.warn("[Instant Games] Failed to change context: ", b), {
                    isOk: !1
                })
            }
        }
        g_azl(b) {
            this.g_atr && this.g_ay$.logEvent(b.name, b.valueToSum)
        }
        async g_azm() {
            if (!this.g_atr) return {
                isOk: !1
            };
            try {
                const b = await this.g_ay$.player.getConnectedPlayersAsync();
                return {
                    isOk: !0,
                    connectedPlayers: b.map(b => ({
                        id: b.getID(),
                        name: b.getName(),
                        photo: b.getPhoto()
                    }))
                }
            } catch (b) {
                return console.error("[Instant Games] Failed to share: ", b), this.g_azw(), {
                    isOk: !1
                }
            }
        }
        async g_azn(c) {
            if (!this.g_atr) return !1;
            try {
                const a = await this.g_ay$.getLeaderboardAsync(c.leaderboardId);
                return await a.setScoreAsync(c.score), !0
            } catch (b) {
                return console.error("[Instant Games] Failed to set score: ", b), this.g_azw(), !1
            }
        }
        async g_azo(d) {
            if (!this.g_atr) return {
                isOk: !1
            };
            try {
                const a = await this.g_ay$.getLeaderboardAsync(d.leaderboardId),
                    b = await a.getPlayerEntryAsync();
                return {
                    isOk: !0,
                    score: b.getScore(),
                    rank: b.getRank()
                }
            } catch (b) {
                return console.error("[Instant Games] Failed to load player score: ", b), this.g_azw(), {
                    isOk: !1
                }
            }
        }
        async g_azp(b) {
            if (this.g_atr) try {
                await this.g_ay$.updateAsync({
                    action: "LEADERBOARD",
                    name: b.leaderboardId
                })
            } catch (b) {
                console.error("[Instant Games] Failed to share leaderboard update: ", b)
            }
        }
        async g_azq(f) {
            if (!this.g_atr) return {
                isOk: !1
            };
            const a = f.count,
                b = f.offset;
            try {
                const c = await this.g_ay$.getLeaderboardAsync(f.leaderboardId);
                let d;
                return d = 0 === f.results ? await c.getEntriesAsync(a, b) : await c.getConnectedPlayerEntriesAsync(a, b), {
                    isOk: !0,
                    leaderboardEntries: d.map(b => ({
                        score: b.getScore(),
                        rank: b.getRank(),
                        playerName: b.getPlayer().getName(),
                        playerPhoto: b.getPlayer().getPhoto()
                    }))
                }
            } catch (b) {
                return console.error("[Instant Games] Failed to load leaderboard: ", b), this.g_azw(), {
                    isOk: !1
                }
            }
        }
        async g_azr() {
            if (!this.g_atr) return !1;
            try {
                const b = await this.g_ay$.canCreateShortcutAsync();
                return !!b && (await this.g_ay$.createShortcutAsync(), !0)
            } catch (b) {
                return console.error("[Instant Games] Failed to create shortcut: ", b), !1
            }
        }
        async g_azs() {
            if (this.g_atr) {
                const c = this.g_ay$.player;
                try {
                    const a = await c.canSubscribeBotAsync();
                    if (!a) throw new Error("not allowed by canSubscribeBotAsync()");
                    await c.subscribeBotAsync(), console.log("[Instant Games] Successfully subscribed to bot")
                } catch (b) {
                    console.error("[Instant Games] Failed to subscribe bot: ", b)
                }
            }
        }
        async g_azt(e) {
            if (!this.g_atr) return !1;
            const a = e.placementId;
            try {
                const b = 0 === e.type;
                let c;
                return c = b ? await this.g_ay$.getInterstitialAdAsync(a) : await this.g_ay$.getRewardedVideoAsync(a), await c.loadAsync(), b ? this.g_aza = c : this.g_azb = c, !0
            } catch (b) {
                return console.error("[Instant Games] Failed to load ad: ", b), !1
            }
        }
        async g_azu(c) {
            if (!this.g_atr) return !1;
            const a = 0 === c.type ? this.g_aza : this.g_azb;
            if (!a) return !1;
            try {
                return await a.showAsync(), !0
            } catch (b) {
                return console.error("[Instant Games] Failed to show ad: ", b), !1
            }
        }
    };
    g_axp.g_ayi(a)
} {
    const b = class extends g_awH {
        constructor(b) {
            super(b, "browser"), this.g_aft = "", this.g_awT("get-initial-state", b => this.g_azx(b)), this.g_awT("ready-for-sw-messages", () => this.g_azy()), this.g_awT("alert", b => this.g_azz(b)), this.g_awT("close", () => this.g_azA()), this.g_awT("set-focus", b => this.g_axg(b)), this.g_awT("vibrate", b => this.g_azB(b)), this.g_awT("lock-orientation", b => this.g_azC(b)), this.g_awT("unlock-orientation", () => this.g_azD()), this.g_awT("navigate", b => this.g_azE(b)), this.g_awT("request-fullscreen", () => this.g_azF()), this.g_awT("exit-fullscreen", () => this.g_azG()), window.addEventListener("online", () => this.g_auY(!0)), window.addEventListener("offline", () => this.g_auY(!1)), document.addEventListener("backbutton", () => this.g_azH()), "undefined" != typeof Windows && Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", b => this.g_azI(b))
        }
        g_azx(b) {
            return this.g_aft = b.exportType, {
                location: location.toString(),
                isOnline: !!navigator.onLine,
                referrer: document.referrer,
                title: document.title,
                isCookieEnabled: !!navigator.cookieEnabled,
                screenWidth: screen.width,
                screenHeight: screen.height,
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                isScirraArcade: "undefined" != typeof window.is_scirra_arcade
            }
        }
        g_azy() {
            window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(b => this.g_awM("sw-message", b.data))
        }
        g_auY(b) {
            this.g_awM("online-state", {
                isOnline: b
            })
        }
        g_azH() {
            this.g_awM("backbutton")
        }
        g_azI(b) {
            b.handled = !0, this.g_awM("backbutton")
        }
        g_azJ() {
            return "nwjs" === this.g_aft ? nw.Window.get() : null
        }
        g_azz(b) {
            alert(b.message)
        }
        g_azA() {
            navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
        }
        g_axg(c) {
            const d = c.isFocus;
            if ("nwjs" === this.g_aft) {
                const b = this.g_azJ();
                d ? b.focus() : b.blur()
            } else d ? window.focus() : window.blur()
        }
        g_azB(b) {
            navigator.vibrate && navigator.vibrate(b.pattern)
        }
        g_azC(c) {
            const d = c.orientation;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(d).catch(b => console.warn("[Construct 3] Failed to lock orientation: ", b));
            else try {
                let b = !1;
                screen.lockOrientation ? b = screen.lockOrientation(d) : screen.webkitLockOrientation ? b = screen.webkitLockOrientation(d) : screen.mozLockOrientation ? b = screen.mozLockOrientation(d) : screen.msLockOrientation && (b = screen.msLockOrientation(d)), b || console.warn("[Construct 3] Failed to lock orientation")
            } catch (b) {
                console.warn("[Construct 3] Failed to lock orientation: ", b)
            }
        }
        g_azD() {
            try {
                screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
            } catch (b) {}
        }
        g_azE(e) {
            const a = e.type;
            if ("back" === a) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
            else if ("forward" === a) window.forward();
            else if ("home" === a) window.g_azK();
            else if ("reload" === a) location.reload();
            else if ("url" === a) {
                const a = e.url,
                    b = e.target,
                    c = e.exportType;
                "windows-uwp" === c && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(a, {
                    openExternal: !0
                }) : "cordova" === c ? window.open(a, "_system") : "preview" === c ? window.open(a, "_blank") : !this.g_auX && (2 === b ? window.top.location = a : 1 === b ? window.parent.location = a : window.location = a)
            } else if ("new-window" === a) {
                const a = e.url,
                    b = e.tag,
                    c = e.exportType;
                "windows-uwp" === c && "undefined" != typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(a, {
                    openExternal: !0
                }) : "cordova" === c ? window.open(a, "_system") : window.open(a, b)
            }
        }
        g_azF() {
            const b = document.documentElement;
            b.requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.webkitRequestFullScreen && ("undefined" == typeof Element.ALLOW_KEYBOARD_INPUT ? b.webkitRequestFullScreen() : b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))
        }
        g_azG() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
    };
    g_axp.g_ayi(b)
}