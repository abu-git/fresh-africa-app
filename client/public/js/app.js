! function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 1)
}([function (t, e, i) {}, function (t, e, i) {
    "use strict";
    i.r(e);
    i(0);

    function n(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var s = function () {
        function t() {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, i, s;
        return e = t, (i = [{
            key: "init",
            value: function () {
                this.group = new THREE.Object3D, this.bgColor = window.getComputedStyle(document.body, null).getPropertyValue("background-color"), this.gridSize = 40, this.buildings = [], this.fogConfig = {
                    color: "#353c3c",
                    near: 1,
                    far: 208
                }, this.width = window.innerWidth, this.height = window.innerHeight, this.createScene(), this.createCamera(), this.addCameraControls(), this.addFloor(), this.addBackgroundShape(), this.loadModels("obj/buildings.obj", this.onLoadModelsComplete.bind(this)), this.animate(), this.pointLightObj3 = {
                    color: "#d3263a",
                    intensity: 8.2,
                    position: {
                        x: 16,
                        y: 100,
                        z: -68
                    }
                }, this.addPointLight(this.pointLightObj3)
            }
        }, {
            key: "createScene",
            value: function () {
                this.scene = new THREE.Scene, this.renderer = new THREE.WebGLRenderer({
                    antialias: !0,
                    alpha: !0
                }), this.renderer.setSize(this.width, this.height), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, document.body.querySelector(".canvas-wrapper").appendChild(this.renderer.domElement), this.scene.fog = new THREE.Fog(this.fogConfig.color, this.fogConfig.near, this.fogConfig.far)
            }
        }, {
            key: "createCamera",
            value: function () {
                this.camera = new THREE.PerspectiveCamera(20, this.width / this.height, 1, 1e3), this.camera.position.set(3, 50, 155), this.scene.add(this.camera)
            }
        }, {
            key: "addCameraControls",
            value: function () {
                this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement), this.controls.enabled = !1
            }
        }, {
            key: "addSpotLight",
            value: function () {
                var t = "#ff0000",
                    e = 641,
                    i = -462,
                    n = 509,
                    o = new THREE.SpotLight(t, 1);
                o.position.set(e, i, n), o.castShadow = !0, this.scene.add(o)
            }
        }, {
            key: "addAmbientLight",
            value: function () {
                var t = new THREE.AmbientLight("#a00a0a");
                this.scene.add(t)
            }
        }, {
            key: "addBackgroundShape",
            value: function () {
                var t = this,
                    e = new THREE.PlaneGeometry(400, 100),
                    i = new THREE.MeshPhysicalMaterial({
                        color: "#fff"
                    });
                this.backgroundShape = new THREE.Mesh(e, i), this.backgroundShape.position.y = 10, this.backgroundShape.position.z = -150, this.scene.add(this.backgroundShape), this.mouseX = 3, this.lastMouseX = 3, this.lastMouseY = 65, this.lastScale = 155, this.tiltFx = {
                    body: document.body,
                    docEl: document.documentElement,
                    getMousePos: function (t, e) {
                        var i = 0,
                            n = 0;
                        return t || (t = window.event), t.pageX || t.pageY ? (i = t.pageX, n = t.pageY) : (t.clientX || t.clientY) && (i = t.clientX + e.left, n = t.clientY + e.top), {
                            x: i,
                            y: n
                        }
                    },
                    lerp: function (t, e, i) {
                        return (1 - i) * t + i * e
                    },
                    lineEq: function (t, e, i, n, o) {
                        var s = (t - e) / (i - n);
                        return s * o + (e - s * n)
                    }
                }, this.docheight = Math.max(this.tiltFx.body.scrollHeight, this.tiltFx.body.offsetHeight, this.tiltFx.docEl.clientHeight, this.tiltFx.docEl.scrollHeight, this.tiltFx.docEl.offsetHeight), this.requestId = requestAnimationFrame(function () {
                    return t.tilt()
                }), window.addEventListener("mousemove", function (e) {
                    var i = {
                            left: t.tiltFx.body.scrollLeft + t.tiltFx.docEl.scrollLeft,
                            top: t.tiltFx.body.scrollTop + t.tiltFx.docEl.scrollTop
                        },
                        n = t.tiltFx.getMousePos(e, i);
                    t.mouseX = n.x - i.left
                }), window.addEventListener("resize", function () {
                    return t.docheight = Math.max(t.tiltFx.body.scrollHeight, t.tiltFx.body.offsetHeight, t.tiltFx.docEl.clientHeight, t.tiltFx.docEl.scrollHeight, t.tiltFx.docEl.offsetHeight)
                }), window.onbeforeunload = function () {
                    window.cancelAnimationFrame(t.requestId), window.scrollTo(0, 0)
                }
            }
        }, {
            key: "tilt",
            value: function () {
                var t = this;
                this.lastMouseX = this.tiltFx.lerp(this.lastMouseX, this.tiltFx.lineEq(6, 0, this.width, 0, this.mouseX), .05);
                var e = window.pageYOffset;
                this.lastMouseY = this.tiltFx.lerp(this.lastMouseY, this.tiltFx.lineEq(0, 65, this.docheight, 0, e), .05), this.lastScale = this.tiltFx.lerp(this.lastScale, this.tiltFx.lineEq(0, 158, this.docheight, 0, e), .05), this.camera.position.set(this.lastMouseX, this.lastMouseY, this.lastScale), this.requestId = requestAnimationFrame(function () {
                    return t.tilt()
                })
            }
        }, {
            key: "addFloor",
            value: function () {
                var t = new THREE.PlaneGeometry(200, 200),
                    e = new THREE.MeshStandardMaterial({
                        color: "#000000",
                        metalness: 0,
                        emissive: "#000000",
                        roughness: 0
                    }),
                    i = new THREE.Mesh(t, e);
                t.rotateX(-Math.PI / 2), i.position.y = 0, this.scene.add(i)
            }
        }, {
            key: "addPointLight",
            value: function (t) {
                var e = new THREE.PointLight(t.color, t.intensity);
                e.position.set(t.position.x, t.position.y, t.position.z), this.scene.add(e)
            }
        }, {
            key: "getRandomBuiding",
            value: function () {
                return this.models[Math.floor(Math.random() * Math.floor(this.models.length))]
            }
        }, {
            key: "onLoadModelsComplete",
            value: function (t) {
                var e = this;
                this.models = n(t.children).map(function (t) {
                    return t.scale.set(.01, .01, .01), t.position.set(0, -14, 0), t.receiveShadow = !0, t.castShadow = !0, t
                }), this.draw(), setTimeout(function () {
                    e.removeLoader(), e.showBuildings()
                }, 3000), window.addEventListener("resize", this.onResize.bind(this))
            }
        }, {
            key: "removeLoader",
            value: function () {
                document.querySelector(".loader").classList.add("loader--done")
            }
        }, {
            key: "showBuildings",
            value: function () {
                this.sortBuildingsByDistance(), this.buildings.forEach(function (t, e) {
                    TweenMax.to(t.position, .6 + e / 4e3, {
                        y: 1,
                        ease: Quint.easeOut,
                        delay: e / 4e3
                    })
                })
            }
        }, {
            key: "sortBuildingsByDistance",
            value: function () {
                this.buildings.sort(function (t, e) {
                    return t.position.z > e.position.z ? 1 : t.position.z < e.position.z ? -1 : 0
                }).reverse()
            }
        }, {
            key: "loadModels",
            value: function (t, e) {
                (new THREE.OBJLoader).load(t, e)
            }
        }, {
            key: "draw",
            value: function () {
                for (var t = new THREE.MeshPhysicalMaterial({
                        color: "#000",
                        metalness: 0,
                        emissive: "#000",
                        roughness: .77
                    }), e = 0; e < this.gridSize; e++)
                    for (var i = 0; i < this.gridSize; i++) {
                        var n = this.getRandomBuiding().clone();
                        n.material = t, n.scale.y = Math.random() * (.008 + .01), n.position.x = 3 * e, n.position.z = 3 * i, this.group.add(n), this.buildings.push(n)
                    }
                this.scene.add(this.group), this.group.position.set(-this.gridSize - 10, 1, -this.gridSize - 10)
            }
        }, {
            key: "onResize",
            value: function () {
                this.width = window.innerWidth, this.height = window.innerHeight, this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height)
            }
        }, {
            key: "animate",
            value: function () {
                this.controls.update(), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.animate.bind(this))
            }
        }]) && o(e.prototype, i), s && o(e, s), t
    }();
    document.addEventListener("DOMContentLoaded", function () {
        (new s).init()
    })
}]);
