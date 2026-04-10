var Fh = (e) => {
	throw TypeError(e);
};
var xu = (e, t, n) => t.has(e) || Fh("Cannot " + n);
var M = (e, t, n) => (
		xu(e, t, "read from private field"), n ? n.call(e) : t.get(e)
	),
	ne = (e, t, n) =>
		t.has(e)
			? Fh("Cannot add the same private member more than once")
			: t instanceof WeakSet
			? t.add(e)
			: t.set(e, n),
	q = (e, t, n, r) => (
		xu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
	),
	$e = (e, t, n) => (xu(e, t, "access private method"), n);
var Qo = (e, t, n, r) => ({
	set _(i) {
		q(e, t, i, n);
	},
	get _() {
		return M(e, t, r);
	},
});
function f5() {
	import.meta.url,
		import("_").catch(() => 1),
		(async function* () {})().next();
}
function F1(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const s = Object.getOwnPropertyDescriptor(r, i);
					s &&
						Object.defineProperty(
							e,
							i,
							s.get ? s : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
		r(i);
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === "childList")
				for (const o of s.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const s = {};
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (s.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = n(i);
		fetch(i.href, s);
	}
})();
function ey(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var ty = { exports: {} },
	Fl = {},
	ny = { exports: {} },
	ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = Symbol.for("react.element"),
	V1 = Symbol.for("react.portal"),
	_1 = Symbol.for("react.fragment"),
	B1 = Symbol.for("react.strict_mode"),
	U1 = Symbol.for("react.profiler"),
	$1 = Symbol.for("react.provider"),
	z1 = Symbol.for("react.context"),
	H1 = Symbol.for("react.forward_ref"),
	G1 = Symbol.for("react.suspense"),
	W1 = Symbol.for("react.memo"),
	K1 = Symbol.for("react.lazy"),
	Vh = Symbol.iterator;
function Y1(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Vh && e[Vh]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var ry = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	iy = Object.assign,
	sy = {};
function ms(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = sy),
		(this.updater = n || ry);
}
ms.prototype.isReactComponent = {};
ms.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
ms.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oy() {}
oy.prototype = ms.prototype;
function Wd(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = sy),
		(this.updater = n || ry);
}
var Kd = (Wd.prototype = new oy());
Kd.constructor = Wd;
iy(Kd, ms.prototype);
Kd.isPureReactComponent = !0;
var _h = Array.isArray,
	ay = Object.prototype.hasOwnProperty,
	Yd = { current: null },
	ly = { key: !0, ref: !0, __self: !0, __source: !0 };
function uy(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (s = "" + t.key),
		t))
			ay.call(t, r) && !ly.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		i.children = l;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: Oo,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: Yd.current,
	};
}
function Q1(e, t) {
	return {
		$$typeof: Oo,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Qd(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function X1(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Bh = /\/+/g;
function wu(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? X1("" + e.key)
		: t.toString(36);
}
function Ca(e, t, n, r, i) {
	var s = typeof e;
	(s === "undefined" || s === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (s) {
			case "string":
			case "number":
				o = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Oo:
					case V1:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === "" ? "." + wu(o, 0) : r),
			_h(i)
				? ((n = ""),
				  e != null && (n = e.replace(Bh, "$&/") + "/"),
				  Ca(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (Qd(i) &&
						(i = Q1(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ""
									: ("" + i.key).replace(Bh, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((o = 0), (r = r === "" ? "." : r + ":"), _h(e)))
		for (var a = 0; a < e.length; a++) {
			s = e[a];
			var l = r + wu(s, a);
			o += Ca(s, t, n, l, i);
		}
	else if (((l = Y1(e)), typeof l == "function"))
		for (e = l.call(e), a = 0; !(s = e.next()).done; )
			(s = s.value), (l = r + wu(s, a++)), (o += Ca(s, t, n, l, i));
	else if (s === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return o;
}
function Xo(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Ca(e, r, "", "", function (s) {
			return t.call(n, s, i++);
		}),
		r
	);
}
function q1(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var et = { current: null },
	Aa = { transition: null },
	Z1 = {
		ReactCurrentDispatcher: et,
		ReactCurrentBatchConfig: Aa,
		ReactCurrentOwner: Yd,
	};
function cy() {
	throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
	map: Xo,
	forEach: function (e, t, n) {
		Xo(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Xo(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Xo(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Qd(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
ee.Component = ms;
ee.Fragment = _1;
ee.Profiler = U1;
ee.PureComponent = Wd;
ee.StrictMode = B1;
ee.Suspense = G1;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z1;
ee.act = cy;
ee.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = iy({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((s = t.ref), (o = Yd.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (l in t)
			ay.call(t, l) &&
				!ly.hasOwnProperty(l) &&
				(r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: Oo, type: e.type, key: i, ref: s, props: r, _owner: o };
};
ee.createContext = function (e) {
	return (
		(e = {
			$$typeof: z1,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: $1, _context: e }),
		(e.Consumer = e)
	);
};
ee.createElement = uy;
ee.createFactory = function (e) {
	var t = uy.bind(null, e);
	return (t.type = e), t;
};
ee.createRef = function () {
	return { current: null };
};
ee.forwardRef = function (e) {
	return { $$typeof: H1, render: e };
};
ee.isValidElement = Qd;
ee.lazy = function (e) {
	return { $$typeof: K1, _payload: { _status: -1, _result: e }, _init: q1 };
};
ee.memo = function (e, t) {
	return { $$typeof: W1, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
	var t = Aa.transition;
	Aa.transition = {};
	try {
		e();
	} finally {
		Aa.transition = t;
	}
};
ee.unstable_act = cy;
ee.useCallback = function (e, t) {
	return et.current.useCallback(e, t);
};
ee.useContext = function (e) {
	return et.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
	return et.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
	return et.current.useEffect(e, t);
};
ee.useId = function () {
	return et.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
	return et.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
	return et.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
	return et.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
	return et.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
	return et.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
	return et.current.useRef(e);
};
ee.useState = function (e) {
	return et.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
	return et.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
	return et.current.useTransition();
};
ee.version = "18.3.1";
ny.exports = ee;
var b = ny.exports;
const V = ey(b),
	J1 = F1({ __proto__: null, default: V }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eb = b,
	tb = Symbol.for("react.element"),
	nb = Symbol.for("react.fragment"),
	rb = Object.prototype.hasOwnProperty,
	ib =
		eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	sb = { key: !0, ref: !0, __self: !0, __source: !0 };
function dy(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = "" + n),
		t.key !== void 0 && (s = "" + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) rb.call(t, r) && !sb.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: tb,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: ib.current,
	};
}
Fl.Fragment = nb;
Fl.jsx = dy;
Fl.jsxs = dy;
ty.exports = Fl;
var w = ty.exports,
	fy = { exports: {} },
	Tt = {},
	hy = { exports: {} },
	py = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(k, R) {
		var L = k.length;
		k.push(R);
		e: for (; 0 < L; ) {
			var H = (L - 1) >>> 1,
				z = k[H];
			if (0 < i(z, R)) (k[H] = R), (k[L] = z), (L = H);
			else break e;
		}
	}
	function n(k) {
		return k.length === 0 ? null : k[0];
	}
	function r(k) {
		if (k.length === 0) return null;
		var R = k[0],
			L = k.pop();
		if (L !== R) {
			k[0] = L;
			e: for (var H = 0, z = k.length, G = z >>> 1; H < G; ) {
				var Q = 2 * (H + 1) - 1,
					se = k[Q],
					je = Q + 1,
					J = k[je];
				if (0 > i(se, L))
					je < z && 0 > i(J, se)
						? ((k[H] = J), (k[je] = L), (H = je))
						: ((k[H] = se), (k[Q] = L), (H = Q));
				else if (je < z && 0 > i(J, L))
					(k[H] = J), (k[je] = L), (H = je);
				else break e;
			}
		}
		return R;
	}
	function i(k, R) {
		var L = k.sortIndex - R.sortIndex;
		return L !== 0 ? L : k.id - R.id;
	}
	if (
		typeof performance == "object" &&
		typeof performance.now == "function"
	) {
		var s = performance;
		e.unstable_now = function () {
			return s.now();
		};
	} else {
		var o = Date,
			a = o.now();
		e.unstable_now = function () {
			return o.now() - a;
		};
	}
	var l = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		h = !1,
		g = !1,
		y = !1,
		x = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(k) {
		for (var R = n(u); R !== null; ) {
			if (R.callback === null) r(u);
			else if (R.startTime <= k)
				r(u), (R.sortIndex = R.expirationTime), t(l, R);
			else break;
			R = n(u);
		}
	}
	function S(k) {
		if (((y = !1), v(k), !g))
			if (n(l) !== null) (g = !0), U(T);
			else {
				var R = n(u);
				R !== null && Y(S, R.startTime - k);
			}
	}
	function T(k, R) {
		(g = !1), y && ((y = !1), m(C), (C = -1)), (h = !0);
		var L = f;
		try {
			for (
				v(R), d = n(l);
				d !== null && (!(d.expirationTime > R) || (k && !F()));

			) {
				var H = d.callback;
				if (typeof H == "function") {
					(d.callback = null), (f = d.priorityLevel);
					var z = H(d.expirationTime <= R);
					(R = e.unstable_now()),
						typeof z == "function"
							? (d.callback = z)
							: d === n(l) && r(l),
						v(R);
				} else r(l);
				d = n(l);
			}
			if (d !== null) var G = !0;
			else {
				var Q = n(u);
				Q !== null && Y(S, Q.startTime - R), (G = !1);
			}
			return G;
		} finally {
			(d = null), (f = L), (h = !1);
		}
	}
	var E = !1,
		A = null,
		C = -1,
		N = 5,
		P = -1;
	function F() {
		return !(e.unstable_now() - P < N);
	}
	function I() {
		if (A !== null) {
			var k = e.unstable_now();
			P = k;
			var R = !0;
			try {
				R = A(!0, k);
			} finally {
				R ? $() : ((E = !1), (A = null));
			}
		} else E = !1;
	}
	var $;
	if (typeof p == "function")
		$ = function () {
			p(I);
		};
	else if (typeof MessageChannel < "u") {
		var D = new MessageChannel(),
			K = D.port2;
		(D.port1.onmessage = I),
			($ = function () {
				K.postMessage(null);
			});
	} else
		$ = function () {
			x(I, 0);
		};
	function U(k) {
		(A = k), E || ((E = !0), $());
	}
	function Y(k, R) {
		C = x(function () {
			k(e.unstable_now());
		}, R);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (k) {
			k.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			g || h || ((g = !0), U(T));
		}),
		(e.unstable_forceFrameRate = function (k) {
			0 > k || 125 < k
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (N = 0 < k ? Math.floor(1e3 / k) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(l);
		}),
		(e.unstable_next = function (k) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var R = 3;
					break;
				default:
					R = f;
			}
			var L = f;
			f = R;
			try {
				return k();
			} finally {
				f = L;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (k, R) {
			switch (k) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					k = 3;
			}
			var L = f;
			f = k;
			try {
				return R();
			} finally {
				f = L;
			}
		}),
		(e.unstable_scheduleCallback = function (k, R, L) {
			var H = e.unstable_now();
			switch (
				(typeof L == "object" && L !== null
					? ((L = L.delay),
					  (L = typeof L == "number" && 0 < L ? H + L : H))
					: (L = H),
				k)
			) {
				case 1:
					var z = -1;
					break;
				case 2:
					z = 250;
					break;
				case 5:
					z = 1073741823;
					break;
				case 4:
					z = 1e4;
					break;
				default:
					z = 5e3;
			}
			return (
				(z = L + z),
				(k = {
					id: c++,
					callback: R,
					priorityLevel: k,
					startTime: L,
					expirationTime: z,
					sortIndex: -1,
				}),
				L > H
					? ((k.sortIndex = L),
					  t(u, k),
					  n(l) === null &&
							k === n(u) &&
							(y ? (m(C), (C = -1)) : (y = !0), Y(S, L - H)))
					: ((k.sortIndex = z), t(l, k), g || h || ((g = !0), U(T))),
				k
			);
		}),
		(e.unstable_shouldYield = F),
		(e.unstable_wrapCallback = function (k) {
			var R = f;
			return function () {
				var L = f;
				f = R;
				try {
					return k.apply(this, arguments);
				} finally {
					f = L;
				}
			};
		});
})(py);
hy.exports = py;
var ob = hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ab = b,
	St = ob;
function O(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var my = new Set(),
	lo = {};
function di(e, t) {
	rs(e, t), rs(e + "Capture", t);
}
function rs(e, t) {
	for (lo[e] = t, e = 0; e < t.length; e++) my.add(t[e]);
}
var Ln = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	mc = Object.prototype.hasOwnProperty,
	lb =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Uh = {},
	$h = {};
function ub(e) {
	return mc.call($h, e)
		? !0
		: mc.call(Uh, e)
		? !1
		: lb.test(e)
		? ($h[e] = !0)
		: ((Uh[e] = !0), !1);
}
function cb(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)),
				  e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function db(e, t, n, r) {
	if (t === null || typeof t > "u" || cb(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function tt(e, t, n, r, i, s, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = s),
		(this.removeEmptyString = o);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		Be[e] = new tt(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	Be[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	Be[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	Be[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		Be[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	Be[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	Be[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	Be[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	Be[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xd = /[\-:]([a-z])/g;
function qd(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Xd, qd);
		Be[t] = new tt(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Xd, qd);
		Be[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Xd, qd);
	Be[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	Be[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new tt(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	Be[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zd(e, t, n, r) {
	var i = Be.hasOwnProperty(t) ? Be[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(db(t, n, i, r) && (n = null),
		r || i === null
			? ub(t) &&
			  (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	qo = Symbol.for("react.element"),
	Ai = Symbol.for("react.portal"),
	Pi = Symbol.for("react.fragment"),
	Jd = Symbol.for("react.strict_mode"),
	gc = Symbol.for("react.profiler"),
	gy = Symbol.for("react.provider"),
	yy = Symbol.for("react.context"),
	ef = Symbol.for("react.forward_ref"),
	yc = Symbol.for("react.suspense"),
	vc = Symbol.for("react.suspense_list"),
	tf = Symbol.for("react.memo"),
	tr = Symbol.for("react.lazy"),
	vy = Symbol.for("react.offscreen"),
	zh = Symbol.iterator;
function As(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (zh && e[zh]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var ye = Object.assign,
	bu;
function Bs(e) {
	if (bu === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			bu = (t && t[1]) || "";
		}
	return "\n" + bu + e;
}
var Su = !1;
function Tu(e, t) {
	if (!e || Su) return "";
	Su = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split("\n"),
					s = r.stack.split("\n"),
					o = i.length - 1,
					a = s.length - 1;
				1 <= o && 0 <= a && i[o] !== s[a];

			)
				a--;
			for (; 1 <= o && 0 <= a; o--, a--)
				if (i[o] !== s[a]) {
					if (o !== 1 || a !== 1)
						do
							if ((o--, a--, 0 > a || i[o] !== s[a])) {
								var l = "\n" + i[o].replace(" at new ", " at ");
								return (
									e.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace(
											"<anonymous>",
											e.displayName
										)),
									l
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(Su = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? Bs(e) : "";
}
function fb(e) {
	switch (e.tag) {
		case 5:
			return Bs(e.type);
		case 16:
			return Bs("Lazy");
		case 13:
			return Bs("Suspense");
		case 19:
			return Bs("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Tu(e.type, !1)), e;
		case 11:
			return (e = Tu(e.type.render, !1)), e;
		case 1:
			return (e = Tu(e.type, !0)), e;
		default:
			return "";
	}
}
function xc(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Pi:
			return "Fragment";
		case Ai:
			return "Portal";
		case gc:
			return "Profiler";
		case Jd:
			return "StrictMode";
		case yc:
			return "Suspense";
		case vc:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case yy:
				return (e.displayName || "Context") + ".Consumer";
			case gy:
				return (e._context.displayName || "Context") + ".Provider";
			case ef:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case tf:
				return (
					(t = e.displayName || null),
					t !== null ? t : xc(e.type) || "Memo"
				);
			case tr:
				(t = e._payload), (e = e._init);
				try {
					return xc(e(t));
				} catch (n) {}
		}
	return null;
}
function hb(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName ||
					(e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return xc(t);
		case 8:
			return t === Jd ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function br(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function xy(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function pb(e) {
	var t = xy(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			s = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (o) {
					(r = "" + o), s.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = "" + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Zo(e) {
	e._valueTracker || (e._valueTracker = pb(e));
}
function wy(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = xy(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ja(e) {
	if (
		((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
	)
		return null;
	try {
		return e.activeElement || e.body;
	} catch (t) {
		return e.body;
	}
}
function wc(e, t) {
	var n = t.checked;
	return ye({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n != null ? n : e._wrapperState.initialChecked,
	});
}
function Hh(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = br(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function by(e, t) {
	(t = t.checked), t != null && Zd(e, "checked", t, !1);
}
function bc(e, t) {
	by(e, t);
	var n = br(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) &&
			  (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Sc(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Sc(e, t.type, br(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Gh(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Sc(e, t, n) {
	(t !== "number" || Ja(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Us = Array.isArray;
function Ui(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + br(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Tc(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
	return ye({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Wh(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(O(92));
			if (Us(n)) {
				if (1 < n.length) throw Error(O(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: br(n) };
}
function Sy(e, t) {
	var n = br(t.value),
		r = br(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Kh(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t);
}
function Ty(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ec(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Ty(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var Jo,
	Ey = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				Jo = Jo || document.createElement("div"),
					Jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = Jo.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function uo(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ws = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	mb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ws).forEach(function (e) {
	mb.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ws[t] = Ws[e]);
	});
});
function Cy(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
		  typeof t != "number" ||
		  t === 0 ||
		  (Ws.hasOwnProperty(e) && Ws[e])
		? ("" + t).trim()
		: t + "px";
}
function Ay(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Cy(n, t[n], r);
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var gb = ye(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function Cc(e, t) {
	if (t) {
		if (gb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(O(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(O(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(O(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(O(62));
	}
}
function Ac(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var Pc = null;
function nf(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var kc = null,
	$i = null,
	zi = null;
function Yh(e) {
	if ((e = _o(e))) {
		if (typeof kc != "function") throw Error(O(280));
		var t = e.stateNode;
		t && ((t = $l(t)), kc(e.stateNode, e.type, t));
	}
}
function Py(e) {
	$i ? (zi ? zi.push(e) : (zi = [e])) : ($i = e);
}
function ky() {
	if ($i) {
		var e = $i,
			t = zi;
		if (((zi = $i = null), Yh(e), t))
			for (e = 0; e < t.length; e++) Yh(t[e]);
	}
}
function Ry(e, t) {
	return e(t);
}
function My() {}
var Eu = !1;
function Ny(e, t, n) {
	if (Eu) return e(t, n);
	Eu = !0;
	try {
		return Ry(e, t, n);
	} finally {
		(Eu = !1), ($i !== null || zi !== null) && (My(), ky());
	}
}
function co(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = $l(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(O(231, t, typeof n));
	return n;
}
var Rc = !1;
if (Ln)
	try {
		var Ps = {};
		Object.defineProperty(Ps, "passive", {
			get: function () {
				Rc = !0;
			},
		}),
			window.addEventListener("test", Ps, Ps),
			window.removeEventListener("test", Ps, Ps);
	} catch (e) {
		Rc = !1;
	}
function yb(e, t, n, r, i, s, o, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var Ks = !1,
	el = null,
	tl = !1,
	Mc = null,
	vb = {
		onError: function (e) {
			(Ks = !0), (el = e);
		},
	};
function xb(e, t, n, r, i, s, o, a, l) {
	(Ks = !1), (el = null), yb.apply(vb, arguments);
}
function wb(e, t, n, r, i, s, o, a, l) {
	if ((xb.apply(this, arguments), Ks)) {
		if (Ks) {
			var u = el;
			(Ks = !1), (el = null);
		} else throw Error(O(198));
		tl || ((tl = !0), (Mc = u));
	}
}
function fi(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function jy(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null &&
				((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Qh(e) {
	if (fi(e) !== e) throw Error(O(188));
}
function bb(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = fi(e)), t === null)) throw Error(O(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var s = i.alternate;
		if (s === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === s.child) {
			for (s = i.child; s; ) {
				if (s === n) return Qh(i), e;
				if (s === r) return Qh(i), t;
				s = s.sibling;
			}
			throw Error(O(188));
		}
		if (n.return !== r.return) (n = i), (r = s);
		else {
			for (var o = !1, a = i.child; a; ) {
				if (a === n) {
					(o = !0), (n = i), (r = s);
					break;
				}
				if (a === r) {
					(o = !0), (r = i), (n = s);
					break;
				}
				a = a.sibling;
			}
			if (!o) {
				for (a = s.child; a; ) {
					if (a === n) {
						(o = !0), (n = s), (r = i);
						break;
					}
					if (a === r) {
						(o = !0), (r = s), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!o) throw Error(O(189));
			}
		}
		if (n.alternate !== r) throw Error(O(190));
	}
	if (n.tag !== 3) throw Error(O(188));
	return n.stateNode.current === n ? e : t;
}
function Ly(e) {
	return (e = bb(e)), e !== null ? Dy(e) : null;
}
function Dy(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Dy(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Iy = St.unstable_scheduleCallback,
	Xh = St.unstable_cancelCallback,
	Sb = St.unstable_shouldYield,
	Tb = St.unstable_requestPaint,
	Se = St.unstable_now,
	Eb = St.unstable_getCurrentPriorityLevel,
	rf = St.unstable_ImmediatePriority,
	Oy = St.unstable_UserBlockingPriority,
	nl = St.unstable_NormalPriority,
	Cb = St.unstable_LowPriority,
	Fy = St.unstable_IdlePriority,
	Vl = null,
	gn = null;
function Ab(e) {
	if (gn && typeof gn.onCommitFiberRoot == "function")
		try {
			gn.onCommitFiberRoot(
				Vl,
				e,
				void 0,
				(e.current.flags & 128) === 128
			);
		} catch (t) {}
}
var Zt = Math.clz32 ? Math.clz32 : Rb,
	Pb = Math.log,
	kb = Math.LN2;
function Rb(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Pb(e) / kb) | 0)) | 0;
}
var ea = 64,
	ta = 4194304;
function $s(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function rl(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		s = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~i;
		a !== 0 ? (r = $s(a)) : ((s &= o), s !== 0 && (r = $s(s)));
	} else (o = n & ~i), o !== 0 ? (r = $s(o)) : s !== 0 && (r = $s(s));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r),
		(s = t & -t),
		i >= s || (i === 16 && (s & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Mb(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Nb(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			s = e.pendingLanes;
		0 < s;

	) {
		var o = 31 - Zt(s),
			a = 1 << o,
			l = i[o];
		l === -1
			? (!(a & n) || a & r) && (i[o] = Mb(a, t))
			: l <= t && (e.expiredLanes |= a),
			(s &= ~a);
	}
}
function Nc(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Vy() {
	var e = ea;
	return (ea <<= 1), !(ea & 4194240) && (ea = 64), e;
}
function Cu(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Fo(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Zt(t)),
		(e[t] = n);
}
function jb(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Zt(n),
			s = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
	}
}
function sf(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Zt(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var re = 0;
function _y(e) {
	return (
		(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
	);
}
var By,
	of,
	Uy,
	$y,
	zy,
	jc = !1,
	na = [],
	hr = null,
	pr = null,
	mr = null,
	fo = new Map(),
	ho = new Map(),
	rr = [],
	Lb =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function qh(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			hr = null;
			break;
		case "dragenter":
		case "dragleave":
			pr = null;
			break;
		case "mouseover":
		case "mouseout":
			mr = null;
			break;
		case "pointerover":
		case "pointerout":
			fo.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			ho.delete(t.pointerId);
	}
}
function ks(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i],
		  }),
		  t !== null && ((t = _o(t)), t !== null && of(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function Db(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (hr = ks(hr, e, t, n, r, i)), !0;
		case "dragenter":
			return (pr = ks(pr, e, t, n, r, i)), !0;
		case "mouseover":
			return (mr = ks(mr, e, t, n, r, i)), !0;
		case "pointerover":
			var s = i.pointerId;
			return fo.set(s, ks(fo.get(s) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(s = i.pointerId),
				ho.set(s, ks(ho.get(s) || null, e, t, n, r, i)),
				!0
			);
	}
	return !1;
}
function Hy(e) {
	var t = Hr(e.target);
	if (t !== null) {
		var n = fi(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = jy(n)), t !== null)) {
					(e.blockedOn = t),
						zy(e.priority, function () {
							Uy(n);
						});
					return;
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Pa(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Pc = r), n.target.dispatchEvent(r), (Pc = null);
		} else return (t = _o(n)), t !== null && of(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Zh(e, t, n) {
	Pa(e) && n.delete(t);
}
function Ib() {
	(jc = !1),
		hr !== null && Pa(hr) && (hr = null),
		pr !== null && Pa(pr) && (pr = null),
		mr !== null && Pa(mr) && (mr = null),
		fo.forEach(Zh),
		ho.forEach(Zh);
}
function Rs(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		jc ||
			((jc = !0),
			St.unstable_scheduleCallback(St.unstable_NormalPriority, Ib)));
}
function po(e) {
	function t(i) {
		return Rs(i, e);
	}
	if (0 < na.length) {
		Rs(na[0], e);
		for (var n = 1; n < na.length; n++) {
			var r = na[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		hr !== null && Rs(hr, e),
			pr !== null && Rs(pr, e),
			mr !== null && Rs(mr, e),
			fo.forEach(t),
			ho.forEach(t),
			n = 0;
		n < rr.length;
		n++
	)
		(r = rr[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < rr.length && ((n = rr[0]), n.blockedOn === null); )
		Hy(n), n.blockedOn === null && rr.shift();
}
var Hi = _n.ReactCurrentBatchConfig,
	il = !0;
function Ob(e, t, n, r) {
	var i = re,
		s = Hi.transition;
	Hi.transition = null;
	try {
		(re = 1), af(e, t, n, r);
	} finally {
		(re = i), (Hi.transition = s);
	}
}
function Fb(e, t, n, r) {
	var i = re,
		s = Hi.transition;
	Hi.transition = null;
	try {
		(re = 4), af(e, t, n, r);
	} finally {
		(re = i), (Hi.transition = s);
	}
}
function af(e, t, n, r) {
	if (il) {
		var i = Lc(e, t, n, r);
		if (i === null) Iu(e, t, r, sl, n), qh(e, r);
		else if (Db(i, e, t, n, r)) r.stopPropagation();
		else if ((qh(e, r), t & 4 && -1 < Lb.indexOf(e))) {
			for (; i !== null; ) {
				var s = _o(i);
				if (
					(s !== null && By(s),
					(s = Lc(e, t, n, r)),
					s === null && Iu(e, t, r, sl, n),
					s === i)
				)
					break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else Iu(e, t, r, null, n);
	}
}
var sl = null;
function Lc(e, t, n, r) {
	if (((sl = null), (e = nf(r)), (e = Hr(e)), e !== null))
		if (((t = fi(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = jy(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (sl = e), null;
}
function Gy(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Eb()) {
				case rf:
					return 1;
				case Oy:
					return 4;
				case nl:
				case Cb:
					return 16;
				case Fy:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var cr = null,
	lf = null,
	ka = null;
function Wy() {
	if (ka) return ka;
	var e,
		t = lf,
		n = t.length,
		r,
		i = "value" in cr ? cr.value : cr.textContent,
		s = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
	return (ka = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ra(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ra() {
	return !0;
}
function Jh() {
	return !1;
}
function Et(e) {
	function t(n, r, i, s, o) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = o),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null
					? s.defaultPrevented
					: s.returnValue === !1
			)
				? ra
				: Jh),
			(this.isPropagationStopped = Jh),
			this
		);
	}
	return (
		ye(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = ra));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = ra));
			},
			persist: function () {},
			isPersistent: ra,
		}),
		t
	);
}
var gs = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	uf = Et(gs),
	Vo = ye({}, gs, { view: 0, detail: 0 }),
	Vb = Et(Vo),
	Au,
	Pu,
	Ms,
	_l = ye({}, Vo, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: cf,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Ms &&
						(Ms && e.type === "mousemove"
							? ((Au = e.screenX - Ms.screenX),
							  (Pu = e.screenY - Ms.screenY))
							: (Pu = Au = 0),
						(Ms = e)),
				  Au);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Pu;
		},
	}),
	ep = Et(_l),
	_b = ye({}, _l, { dataTransfer: 0 }),
	Bb = Et(_b),
	Ub = ye({}, Vo, { relatedTarget: 0 }),
	ku = Et(Ub),
	$b = ye({}, gs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	zb = Et($b),
	Hb = ye({}, gs, {
		clipboardData: function (e) {
			return "clipboardData" in e
				? e.clipboardData
				: window.clipboardData;
		},
	}),
	Gb = Et(Hb),
	Wb = ye({}, gs, { data: 0 }),
	tp = Et(Wb),
	Kb = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Yb = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Qb = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Xb(e) {
	var t = this.nativeEvent;
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Qb[e])
		? !!t[e]
		: !1;
}
function cf() {
	return Xb;
}
var qb = ye({}, Vo, {
		key: function (e) {
			if (e.key) {
				var t = Kb[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Yb[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: cf,
		charCode: function (e) {
			return e.type === "keypress" ? Ra(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Ra(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	Zb = Et(qb),
	Jb = ye({}, _l, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	np = Et(Jb),
	eS = ye({}, Vo, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: cf,
	}),
	tS = Et(eS),
	nS = ye({}, gs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	rS = Et(nS),
	iS = ye({}, _l, {
		deltaX: function (e) {
			return "deltaX" in e
				? e.deltaX
				: "wheelDeltaX" in e
				? -e.wheelDeltaX
				: 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	sS = Et(iS),
	oS = [9, 13, 27, 32],
	df = Ln && "CompositionEvent" in window,
	Ys = null;
Ln && "documentMode" in document && (Ys = document.documentMode);
var aS = Ln && "TextEvent" in window && !Ys,
	Ky = Ln && (!df || (Ys && 8 < Ys && 11 >= Ys)),
	rp = " ",
	ip = !1;
function Yy(e, t) {
	switch (e) {
		case "keyup":
			return oS.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Qy(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ki = !1;
function lS(e, t) {
	switch (e) {
		case "compositionend":
			return Qy(t);
		case "keypress":
			return t.which !== 32 ? null : ((ip = !0), rp);
		case "textInput":
			return (e = t.data), e === rp && ip ? null : e;
		default:
			return null;
	}
}
function uS(e, t) {
	if (ki)
		return e === "compositionend" || (!df && Yy(e, t))
			? ((e = Wy()), (ka = lf = cr = null), (ki = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Ky && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var cS = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function sp(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!cS[e.type] : t === "textarea";
}
function Xy(e, t, n, r) {
	Py(r),
		(t = ol(t, "onChange")),
		0 < t.length &&
			((n = new uf("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Qs = null,
	mo = null;
function dS(e) {
	a0(e, 0);
}
function Bl(e) {
	var t = Ni(e);
	if (wy(t)) return e;
}
function fS(e, t) {
	if (e === "change") return t;
}
var qy = !1;
if (Ln) {
	var Ru;
	if (Ln) {
		var Mu = "oninput" in document;
		if (!Mu) {
			var op = document.createElement("div");
			op.setAttribute("oninput", "return;"),
				(Mu = typeof op.oninput == "function");
		}
		Ru = Mu;
	} else Ru = !1;
	qy = Ru && (!document.documentMode || 9 < document.documentMode);
}
function ap() {
	Qs && (Qs.detachEvent("onpropertychange", Zy), (mo = Qs = null));
}
function Zy(e) {
	if (e.propertyName === "value" && Bl(mo)) {
		var t = [];
		Xy(t, mo, e, nf(e)), Ny(dS, t);
	}
}
function hS(e, t, n) {
	e === "focusin"
		? (ap(), (Qs = t), (mo = n), Qs.attachEvent("onpropertychange", Zy))
		: e === "focusout" && ap();
}
function pS(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Bl(mo);
}
function mS(e, t) {
	if (e === "click") return Bl(t);
}
function gS(e, t) {
	if (e === "input" || e === "change") return Bl(t);
}
function yS(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tn = typeof Object.is == "function" ? Object.is : yS;
function go(e, t) {
	if (tn(e, t)) return !0;
	if (
		typeof e != "object" ||
		e === null ||
		typeof t != "object" ||
		t === null
	)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!mc.call(t, i) || !tn(e[i], t[i])) return !1;
	}
	return !0;
}
function lp(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function up(e, t) {
	var n = lp(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = lp(n);
	}
}
function Jy(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Jy(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function e0() {
	for (var e = window, t = Ja(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch (r) {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ja(e.document);
	}
	return t;
}
function ff(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function vS(e) {
	var t = e0(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Jy(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && ff(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e =
					((t = n.ownerDocument || document) && t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!e.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = up(n, s));
				var o = up(n, r);
				i &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					s > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (
			typeof n.focus == "function" && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var xS = Ln && "documentMode" in document && 11 >= document.documentMode,
	Ri = null,
	Dc = null,
	Xs = null,
	Ic = !1;
function cp(e, t, n) {
	var r =
		n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ic ||
		Ri == null ||
		Ri !== Ja(r) ||
		((r = Ri),
		"selectionStart" in r && ff(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Xs && go(Xs, r)) ||
			((Xs = r),
			(r = ol(Dc, "onSelect")),
			0 < r.length &&
				((t = new uf("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Ri))));
}
function ia(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Mi = {
		animationend: ia("Animation", "AnimationEnd"),
		animationiteration: ia("Animation", "AnimationIteration"),
		animationstart: ia("Animation", "AnimationStart"),
		transitionend: ia("Transition", "TransitionEnd"),
	},
	Nu = {},
	t0 = {};
Ln &&
	((t0 = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Mi.animationend.animation,
		delete Mi.animationiteration.animation,
		delete Mi.animationstart.animation),
	"TransitionEvent" in window || delete Mi.transitionend.transition);
function Ul(e) {
	if (Nu[e]) return Nu[e];
	if (!Mi[e]) return e;
	var t = Mi[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in t0) return (Nu[e] = t[n]);
	return e;
}
var n0 = Ul("animationend"),
	r0 = Ul("animationiteration"),
	i0 = Ul("animationstart"),
	s0 = Ul("transitionend"),
	o0 = new Map(),
	dp =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Rr(e, t) {
	o0.set(e, t), di(t, [e]);
}
for (var ju = 0; ju < dp.length; ju++) {
	var Lu = dp[ju],
		wS = Lu.toLowerCase(),
		bS = Lu[0].toUpperCase() + Lu.slice(1);
	Rr(wS, "on" + bS);
}
Rr(n0, "onAnimationEnd");
Rr(r0, "onAnimationIteration");
Rr(i0, "onAnimationStart");
Rr("dblclick", "onDoubleClick");
Rr("focusin", "onFocus");
Rr("focusout", "onBlur");
Rr(s0, "onTransitionEnd");
rs("onMouseEnter", ["mouseout", "mouseover"]);
rs("onMouseLeave", ["mouseout", "mouseover"]);
rs("onPointerEnter", ["pointerout", "pointerover"]);
rs("onPointerLeave", ["pointerout", "pointerover"]);
di(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
);
di(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
di("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
di(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
di(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
di(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zs =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	SS = new Set(
		"cancel close invalid load scroll toggle".split(" ").concat(zs)
	);
function fp(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), wb(r, t, void 0, e), (e.currentTarget = null);
}
function a0(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						l = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), l !== s && i.isPropagationStopped()))
						break e;
					fp(i, a, u), (s = l);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(l = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						l !== s && i.isPropagationStopped())
					)
						break e;
					fp(i, a, u), (s = l);
				}
		}
	}
	if (tl) throw ((e = Mc), (tl = !1), (Mc = null), e);
}
function ue(e, t) {
	var n = t[Bc];
	n === void 0 && (n = t[Bc] = new Set());
	var r = e + "__bubble";
	n.has(r) || (l0(t, e, 2, !1), n.add(r));
}
function Du(e, t, n) {
	var r = 0;
	t && (r |= 4), l0(n, e, r, t);
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function yo(e) {
	if (!e[sa]) {
		(e[sa] = !0),
			my.forEach(function (n) {
				n !== "selectionchange" &&
					(SS.has(n) || Du(n, !1, e), Du(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[sa] || ((t[sa] = !0), Du("selectionchange", !1, t));
	}
}
function l0(e, t, n, r) {
	switch (Gy(t)) {
		case 1:
			var i = Ob;
			break;
		case 4:
			i = Fb;
			break;
		default:
			i = af;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Rc ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function Iu(e, t, n, r, i) {
	var s = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var l = o.tag;
						if (
							(l === 3 || l === 4) &&
							((l = o.stateNode.containerInfo),
							l === i || (l.nodeType === 8 && l.parentNode === i))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = Hr(a)), o === null)) return;
					if (((l = o.tag), l === 5 || l === 6)) {
						r = s = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Ny(function () {
		var u = s,
			c = nf(n),
			d = [];
		e: {
			var f = o0.get(e);
			if (f !== void 0) {
				var h = uf,
					g = e;
				switch (e) {
					case "keypress":
						if (Ra(n) === 0) break e;
					case "keydown":
					case "keyup":
						h = Zb;
						break;
					case "focusin":
						(g = "focus"), (h = ku);
						break;
					case "focusout":
						(g = "blur"), (h = ku);
						break;
					case "beforeblur":
					case "afterblur":
						h = ku;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						h = ep;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						h = Bb;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						h = tS;
						break;
					case n0:
					case r0:
					case i0:
						h = zb;
						break;
					case s0:
						h = rS;
						break;
					case "scroll":
						h = Vb;
						break;
					case "wheel":
						h = sS;
						break;
					case "copy":
					case "cut":
					case "paste":
						h = Gb;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						h = np;
				}
				var y = (t & 4) !== 0,
					x = !y && e === "scroll",
					m = y ? (f !== null ? f + "Capture" : null) : f;
				y = [];
				for (var p = u, v; p !== null; ) {
					v = p;
					var S = v.stateNode;
					if (
						(v.tag === 5 &&
							S !== null &&
							((v = S),
							m !== null &&
								((S = co(p, m)),
								S != null && y.push(vo(p, S, v)))),
						x)
					)
						break;
					p = p.return;
				}
				0 < y.length &&
					((f = new h(f, g, null, n, c)),
					d.push({ event: f, listeners: y }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === "mouseover" || e === "pointerover"),
					(h = e === "mouseout" || e === "pointerout"),
					f &&
						n !== Pc &&
						(g = n.relatedTarget || n.fromElement) &&
						(Hr(g) || g[Dn]))
				)
					break e;
				if (
					(h || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
							? f.defaultView || f.parentWindow
							: window),
					h
						? ((g = n.relatedTarget || n.toElement),
						  (h = u),
						  (g = g ? Hr(g) : null),
						  g !== null &&
								((x = fi(g)),
								g !== x || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((h = null), (g = u)),
					h !== g)
				) {
					if (
						((y = ep),
						(S = "onMouseLeave"),
						(m = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((y = np),
							(S = "onPointerLeave"),
							(m = "onPointerEnter"),
							(p = "pointer")),
						(x = h == null ? f : Ni(h)),
						(v = g == null ? f : Ni(g)),
						(f = new y(S, p + "leave", h, n, c)),
						(f.target = x),
						(f.relatedTarget = v),
						(S = null),
						Hr(c) === u &&
							((y = new y(m, p + "enter", g, n, c)),
							(y.target = v),
							(y.relatedTarget = x),
							(S = y)),
						(x = S),
						h && g)
					)
						t: {
							for (y = h, m = g, p = 0, v = y; v; v = wi(v)) p++;
							for (v = 0, S = m; S; S = wi(S)) v++;
							for (; 0 < p - v; ) (y = wi(y)), p--;
							for (; 0 < v - p; ) (m = wi(m)), v--;
							for (; p--; ) {
								if (
									y === m ||
									(m !== null && y === m.alternate)
								)
									break t;
								(y = wi(y)), (m = wi(m));
							}
							y = null;
						}
					else y = null;
					h !== null && hp(d, f, h, y, !1),
						g !== null && x !== null && hp(d, x, g, y, !0);
				}
			}
			e: {
				if (
					((f = u ? Ni(u) : window),
					(h = f.nodeName && f.nodeName.toLowerCase()),
					h === "select" || (h === "input" && f.type === "file"))
				)
					var T = fS;
				else if (sp(f))
					if (qy) T = gS;
					else {
						T = pS;
						var E = hS;
					}
				else
					(h = f.nodeName) &&
						h.toLowerCase() === "input" &&
						(f.type === "checkbox" || f.type === "radio") &&
						(T = mS);
				if (T && (T = T(e, u))) {
					Xy(d, T, n, c);
					break e;
				}
				E && E(e, f, u),
					e === "focusout" &&
						(E = f._wrapperState) &&
						E.controlled &&
						f.type === "number" &&
						Sc(f, "number", f.value);
			}
			switch (((E = u ? Ni(u) : window), e)) {
				case "focusin":
					(sp(E) || E.contentEditable === "true") &&
						((Ri = E), (Dc = u), (Xs = null));
					break;
				case "focusout":
					Xs = Dc = Ri = null;
					break;
				case "mousedown":
					Ic = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Ic = !1), cp(d, n, c);
					break;
				case "selectionchange":
					if (xS) break;
				case "keydown":
				case "keyup":
					cp(d, n, c);
			}
			var A;
			if (df)
				e: {
					switch (e) {
						case "compositionstart":
							var C = "onCompositionStart";
							break e;
						case "compositionend":
							C = "onCompositionEnd";
							break e;
						case "compositionupdate":
							C = "onCompositionUpdate";
							break e;
					}
					C = void 0;
				}
			else
				ki
					? Yy(e, n) && (C = "onCompositionEnd")
					: e === "keydown" &&
					  n.keyCode === 229 &&
					  (C = "onCompositionStart");
			C &&
				(Ky &&
					n.locale !== "ko" &&
					(ki || C !== "onCompositionStart"
						? C === "onCompositionEnd" && ki && (A = Wy())
						: ((cr = c),
						  (lf = "value" in cr ? cr.value : cr.textContent),
						  (ki = !0))),
				(E = ol(u, C)),
				0 < E.length &&
					((C = new tp(C, e, null, n, c)),
					d.push({ event: C, listeners: E }),
					A
						? (C.data = A)
						: ((A = Qy(n)), A !== null && (C.data = A)))),
				(A = aS ? lS(e, n) : uS(e, n)) &&
					((u = ol(u, "onBeforeInput")),
					0 < u.length &&
						((c = new tp(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							c
						)),
						d.push({ event: c, listeners: u }),
						(c.data = A)));
		}
		a0(d, t);
	});
}
function vo(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = co(e, n)),
			s != null && r.unshift(vo(e, s, i)),
			(s = co(e, t)),
			s != null && r.push(vo(e, s, i))),
			(e = e.return);
	}
	return r;
}
function wi(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function hp(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((l = co(n, s)), l != null && o.unshift(vo(n, l, a)))
				: i || ((l = co(n, s)), l != null && o.push(vo(n, l, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var TS = /\r\n?/g,
	ES = /\u0000|\uFFFD/g;
function pp(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(TS, "\n")
		.replace(ES, "");
}
function oa(e, t, n) {
	if (((t = pp(t)), pp(e) !== t && n)) throw Error(O(425));
}
function al() {}
var Oc = null,
	Fc = null;
function Vc(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var _c = typeof setTimeout == "function" ? setTimeout : void 0,
	CS = typeof clearTimeout == "function" ? clearTimeout : void 0,
	mp = typeof Promise == "function" ? Promise : void 0,
	AS =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof mp < "u"
			? function (e) {
					return mp.resolve(null).then(e).catch(PS);
			  }
			: _c;
function PS(e) {
	setTimeout(function () {
		throw e;
	});
}
function Ou(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), po(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	po(t);
}
function gr(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function gp(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var ys = Math.random().toString(36).slice(2),
	pn = "__reactFiber$" + ys,
	xo = "__reactProps$" + ys,
	Dn = "__reactContainer$" + ys,
	Bc = "__reactEvents$" + ys,
	kS = "__reactListeners$" + ys,
	RS = "__reactHandles$" + ys;
function Hr(e) {
	var t = e[pn];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Dn] || n[pn])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = gp(e); e !== null; ) {
					if ((n = e[pn])) return n;
					e = gp(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function _o(e) {
	return (
		(e = e[pn] || e[Dn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	);
}
function Ni(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(O(33));
}
function $l(e) {
	return e[xo] || null;
}
var Uc = [],
	ji = -1;
function Mr(e) {
	return { current: e };
}
function de(e) {
	0 > ji || ((e.current = Uc[ji]), (Uc[ji] = null), ji--);
}
function ae(e, t) {
	ji++, (Uc[ji] = e.current), (e.current = t);
}
var Sr = {},
	Ke = Mr(Sr),
	ct = Mr(!1),
	si = Sr;
function is(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Sr;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		s;
	for (s in n) i[s] = t[s];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function dt(e) {
	return (e = e.childContextTypes), e != null;
}
function ll() {
	de(ct), de(Ke);
}
function yp(e, t, n) {
	if (Ke.current !== Sr) throw Error(O(168));
	ae(Ke, t), ae(ct, n);
}
function u0(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(O(108, hb(e) || "Unknown", i));
	return ye({}, n, r);
}
function ul(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			Sr),
		(si = Ke.current),
		ae(Ke, e),
		ae(ct, ct.current),
		!0
	);
}
function vp(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(O(169));
	n
		? ((e = u0(e, t, si)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  de(ct),
		  de(Ke),
		  ae(Ke, e))
		: de(ct),
		ae(ct, n);
}
var kn = null,
	zl = !1,
	Fu = !1;
function c0(e) {
	kn === null ? (kn = [e]) : kn.push(e);
}
function MS(e) {
	(zl = !0), c0(e);
}
function Nr() {
	if (!Fu && kn !== null) {
		Fu = !0;
		var e = 0,
			t = re;
		try {
			var n = kn;
			for (re = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(kn = null), (zl = !1);
		} catch (i) {
			throw (kn !== null && (kn = kn.slice(e + 1)), Iy(rf, Nr), i);
		} finally {
			(re = t), (Fu = !1);
		}
	}
	return null;
}
var Li = [],
	Di = 0,
	cl = null,
	dl = 0,
	At = [],
	Pt = 0,
	oi = null,
	Mn = 1,
	Nn = "";
function Ur(e, t) {
	(Li[Di++] = dl), (Li[Di++] = cl), (cl = e), (dl = t);
}
function d0(e, t, n) {
	(At[Pt++] = Mn), (At[Pt++] = Nn), (At[Pt++] = oi), (oi = e);
	var r = Mn;
	e = Nn;
	var i = 32 - Zt(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var s = 32 - Zt(t) + i;
	if (30 < s) {
		var o = i - (i % 5);
		(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(Mn = (1 << (32 - Zt(t) + i)) | (n << i) | r),
			(Nn = s + e);
	} else (Mn = (1 << s) | (n << i) | r), (Nn = e);
}
function hf(e) {
	e.return !== null && (Ur(e, 1), d0(e, 1, 0));
}
function pf(e) {
	for (; e === cl; )
		(cl = Li[--Di]), (Li[Di] = null), (dl = Li[--Di]), (Li[Di] = null);
	for (; e === oi; )
		(oi = At[--Pt]),
			(At[Pt] = null),
			(Nn = At[--Pt]),
			(At[Pt] = null),
			(Mn = At[--Pt]),
			(At[Pt] = null);
}
var wt = null,
	xt = null,
	he = !1,
	Xt = null;
function f0(e, t) {
	var n = kt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xp(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (wt = e), (xt = gr(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (wt = e), (xt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = oi !== null ? { id: Mn, overflow: Nn } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = kt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (wt = e),
					  (xt = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function $c(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zc(e) {
	if (he) {
		var t = xt;
		if (t) {
			var n = t;
			if (!xp(e, t)) {
				if ($c(e)) throw Error(O(418));
				t = gr(n.nextSibling);
				var r = wt;
				t && xp(e, t)
					? f0(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (he = !1), (wt = e));
			}
		} else {
			if ($c(e)) throw Error(O(418));
			(e.flags = (e.flags & -4097) | 2), (he = !1), (wt = e);
		}
	}
}
function wp(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return;
	wt = e;
}
function aa(e) {
	if (e !== wt) return !1;
	if (!he) return wp(e), (he = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps))),
		t && (t = xt))
	) {
		if ($c(e)) throw (h0(), Error(O(418)));
		for (; t; ) f0(e, t), (t = gr(t.nextSibling));
	}
	if ((wp(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(O(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							xt = gr(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			xt = null;
		}
	} else xt = wt ? gr(e.stateNode.nextSibling) : null;
	return !0;
}
function h0() {
	for (var e = xt; e; ) e = gr(e.nextSibling);
}
function ss() {
	(xt = wt = null), (he = !1);
}
function mf(e) {
	Xt === null ? (Xt = [e]) : Xt.push(e);
}
var NS = _n.ReactCurrentBatchConfig;
function Ns(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(O(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(O(147, e));
			var i = r,
				s = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === s
				? t.ref
				: ((t = function (o) {
						var a = i.refs;
						o === null ? delete a[s] : (a[s] = o);
				  }),
				  (t._stringRef = s),
				  t);
		}
		if (typeof e != "string") throw Error(O(284));
		if (!n._owner) throw Error(O(290, e));
	}
	return e;
}
function la(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			O(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function bp(e) {
	var t = e._init;
	return t(e._payload);
}
function p0(e) {
	function t(m, p) {
		if (e) {
			var v = m.deletions;
			v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
		}
	}
	function n(m, p) {
		if (!e) return null;
		for (; p !== null; ) t(m, p), (p = p.sibling);
		return null;
	}
	function r(m, p) {
		for (m = new Map(); p !== null; )
			p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
				(p = p.sibling);
		return m;
	}
	function i(m, p) {
		return (m = wr(m, p)), (m.index = 0), (m.sibling = null), m;
	}
	function s(m, p, v) {
		return (
			(m.index = v),
			e
				? ((v = m.alternate),
				  v !== null
						? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
						: ((m.flags |= 2), p))
				: ((m.flags |= 1048576), p)
		);
	}
	function o(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, p, v, S) {
		return p === null || p.tag !== 6
			? ((p = Hu(v, m.mode, S)), (p.return = m), p)
			: ((p = i(p, v)), (p.return = m), p);
	}
	function l(m, p, v, S) {
		var T = v.type;
		return T === Pi
			? c(m, p, v.props.children, S, v.key)
			: p !== null &&
			  (p.elementType === T ||
					(typeof T == "object" &&
						T !== null &&
						T.$$typeof === tr &&
						bp(T) === p.type))
			? ((S = i(p, v.props)), (S.ref = Ns(m, p, v)), (S.return = m), S)
			: ((S = Oa(v.type, v.key, v.props, null, m.mode, S)),
			  (S.ref = Ns(m, p, v)),
			  (S.return = m),
			  S);
	}
	function u(m, p, v, S) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== v.containerInfo ||
			p.stateNode.implementation !== v.implementation
			? ((p = Gu(v, m.mode, S)), (p.return = m), p)
			: ((p = i(p, v.children || [])), (p.return = m), p);
	}
	function c(m, p, v, S, T) {
		return p === null || p.tag !== 7
			? ((p = ni(v, m.mode, S, T)), (p.return = m), p)
			: ((p = i(p, v)), (p.return = m), p);
	}
	function d(m, p, v) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = Hu("" + p, m.mode, v)), (p.return = m), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case qo:
					return (
						(v = Oa(p.type, p.key, p.props, null, m.mode, v)),
						(v.ref = Ns(m, null, p)),
						(v.return = m),
						v
					);
				case Ai:
					return (p = Gu(p, m.mode, v)), (p.return = m), p;
				case tr:
					var S = p._init;
					return d(m, S(p._payload), v);
			}
			if (Us(p) || As(p))
				return (p = ni(p, m.mode, v, null)), (p.return = m), p;
			la(m, p);
		}
		return null;
	}
	function f(m, p, v, S) {
		var T = p !== null ? p.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return T !== null ? null : a(m, p, "" + v, S);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case qo:
					return v.key === T ? l(m, p, v, S) : null;
				case Ai:
					return v.key === T ? u(m, p, v, S) : null;
				case tr:
					return (T = v._init), f(m, p, T(v._payload), S);
			}
			if (Us(v) || As(v)) return T !== null ? null : c(m, p, v, S, null);
			la(m, v);
		}
		return null;
	}
	function h(m, p, v, S, T) {
		if ((typeof S == "string" && S !== "") || typeof S == "number")
			return (m = m.get(v) || null), a(p, m, "" + S, T);
		if (typeof S == "object" && S !== null) {
			switch (S.$$typeof) {
				case qo:
					return (
						(m = m.get(S.key === null ? v : S.key) || null),
						l(p, m, S, T)
					);
				case Ai:
					return (
						(m = m.get(S.key === null ? v : S.key) || null),
						u(p, m, S, T)
					);
				case tr:
					var E = S._init;
					return h(m, p, v, E(S._payload), T);
			}
			if (Us(S) || As(S))
				return (m = m.get(v) || null), c(p, m, S, T, null);
			la(p, S);
		}
		return null;
	}
	function g(m, p, v, S) {
		for (
			var T = null, E = null, A = p, C = (p = 0), N = null;
			A !== null && C < v.length;
			C++
		) {
			A.index > C ? ((N = A), (A = null)) : (N = A.sibling);
			var P = f(m, A, v[C], S);
			if (P === null) {
				A === null && (A = N);
				break;
			}
			e && A && P.alternate === null && t(m, A),
				(p = s(P, p, C)),
				E === null ? (T = P) : (E.sibling = P),
				(E = P),
				(A = N);
		}
		if (C === v.length) return n(m, A), he && Ur(m, C), T;
		if (A === null) {
			for (; C < v.length; C++)
				(A = d(m, v[C], S)),
					A !== null &&
						((p = s(A, p, C)),
						E === null ? (T = A) : (E.sibling = A),
						(E = A));
			return he && Ur(m, C), T;
		}
		for (A = r(m, A); C < v.length; C++)
			(N = h(A, m, C, v[C], S)),
				N !== null &&
					(e &&
						N.alternate !== null &&
						A.delete(N.key === null ? C : N.key),
					(p = s(N, p, C)),
					E === null ? (T = N) : (E.sibling = N),
					(E = N));
		return (
			e &&
				A.forEach(function (F) {
					return t(m, F);
				}),
			he && Ur(m, C),
			T
		);
	}
	function y(m, p, v, S) {
		var T = As(v);
		if (typeof T != "function") throw Error(O(150));
		if (((v = T.call(v)), v == null)) throw Error(O(151));
		for (
			var E = (T = null), A = p, C = (p = 0), N = null, P = v.next();
			A !== null && !P.done;
			C++, P = v.next()
		) {
			A.index > C ? ((N = A), (A = null)) : (N = A.sibling);
			var F = f(m, A, P.value, S);
			if (F === null) {
				A === null && (A = N);
				break;
			}
			e && A && F.alternate === null && t(m, A),
				(p = s(F, p, C)),
				E === null ? (T = F) : (E.sibling = F),
				(E = F),
				(A = N);
		}
		if (P.done) return n(m, A), he && Ur(m, C), T;
		if (A === null) {
			for (; !P.done; C++, P = v.next())
				(P = d(m, P.value, S)),
					P !== null &&
						((p = s(P, p, C)),
						E === null ? (T = P) : (E.sibling = P),
						(E = P));
			return he && Ur(m, C), T;
		}
		for (A = r(m, A); !P.done; C++, P = v.next())
			(P = h(A, m, C, P.value, S)),
				P !== null &&
					(e &&
						P.alternate !== null &&
						A.delete(P.key === null ? C : P.key),
					(p = s(P, p, C)),
					E === null ? (T = P) : (E.sibling = P),
					(E = P));
		return (
			e &&
				A.forEach(function (I) {
					return t(m, I);
				}),
			he && Ur(m, C),
			T
		);
	}
	function x(m, p, v, S) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === Pi &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case qo:
					e: {
						for (var T = v.key, E = p; E !== null; ) {
							if (E.key === T) {
								if (((T = v.type), T === Pi)) {
									if (E.tag === 7) {
										n(m, E.sibling),
											(p = i(E, v.props.children)),
											(p.return = m),
											(m = p);
										break e;
									}
								} else if (
									E.elementType === T ||
									(typeof T == "object" &&
										T !== null &&
										T.$$typeof === tr &&
										bp(T) === E.type)
								) {
									n(m, E.sibling),
										(p = i(E, v.props)),
										(p.ref = Ns(m, E, v)),
										(p.return = m),
										(m = p);
									break e;
								}
								n(m, E);
								break;
							} else t(m, E);
							E = E.sibling;
						}
						v.type === Pi
							? ((p = ni(v.props.children, m.mode, S, v.key)),
							  (p.return = m),
							  (m = p))
							: ((S = Oa(
									v.type,
									v.key,
									v.props,
									null,
									m.mode,
									S
							  )),
							  (S.ref = Ns(m, p, v)),
							  (S.return = m),
							  (m = S));
					}
					return o(m);
				case Ai:
					e: {
						for (E = v.key; p !== null; ) {
							if (p.key === E)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo ===
										v.containerInfo &&
									p.stateNode.implementation ===
										v.implementation
								) {
									n(m, p.sibling),
										(p = i(p, v.children || [])),
										(p.return = m),
										(m = p);
									break e;
								} else {
									n(m, p);
									break;
								}
							else t(m, p);
							p = p.sibling;
						}
						(p = Gu(v, m.mode, S)), (p.return = m), (m = p);
					}
					return o(m);
				case tr:
					return (E = v._init), x(m, p, E(v._payload), S);
			}
			if (Us(v)) return g(m, p, v, S);
			if (As(v)) return y(m, p, v, S);
			la(m, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  p !== null && p.tag === 6
					? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
					: (n(m, p),
					  (p = Hu(v, m.mode, S)),
					  (p.return = m),
					  (m = p)),
			  o(m))
			: n(m, p);
	}
	return x;
}
var os = p0(!0),
	m0 = p0(!1),
	fl = Mr(null),
	hl = null,
	Ii = null,
	gf = null;
function yf() {
	gf = Ii = hl = null;
}
function vf(e) {
	var t = fl.current;
	de(fl), (e._currentValue = t);
}
function Hc(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Gi(e, t) {
	(hl = e),
		(gf = Ii = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (ut = !0), (e.firstContext = null));
}
function jt(e) {
	var t = e._currentValue;
	if (gf !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Ii === null)) {
			if (hl === null) throw Error(O(308));
			(Ii = e), (hl.dependencies = { lanes: 0, firstContext: e });
		} else Ii = Ii.next = e;
	return t;
}
var Gr = null;
function xf(e) {
	Gr === null ? (Gr = [e]) : Gr.push(e);
}
function g0(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), xf(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		In(e, r)
	);
}
function In(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var nr = !1;
function wf(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function y0(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function jn(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function yr(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), te & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			In(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), xf(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		In(e, n)
	);
}
function Ma(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), sf(e, n);
	}
}
function Sp(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			s = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
			} while (n !== null);
			s === null ? (i = s = t) : (s = s.next = t);
		} else i = s = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function pl(e, t, n, r) {
	var i = e.updateQueue;
	nr = !1;
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var l = a,
			u = l.next;
		(l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== o &&
				(a === null ? (c.firstBaseUpdate = u) : (a.next = u),
				(c.lastBaseUpdate = l)));
	}
	if (s !== null) {
		var d = i.baseState;
		(o = 0), (c = u = l = null), (a = s);
		do {
			var f = a.lane,
				h = a.eventTime;
			if ((r & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: h,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var g = e,
						y = a;
					switch (((f = t), (h = n), y.tag)) {
						case 1:
							if (((g = y.payload), typeof g == "function")) {
								d = g.call(h, d, f);
								break e;
							}
							d = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = y.payload),
								(f =
									typeof g == "function"
										? g.call(h, d, f)
										: g),
								f == null)
							)
								break e;
							d = ye({}, d, f);
							break e;
						case 2:
							nr = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [a]) : f.push(a));
			} else
				(h = {
					eventTime: h,
					lane: f,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
					(o |= f);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(f = a),
					(a = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (l = d),
			(i.baseState = l),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (o |= i.lane), (i = i.next);
			while (i !== t);
		} else s === null && (i.shared.lanes = 0);
		(li |= o), (e.lanes = o), (e.memoizedState = d);
	}
}
function Tp(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(O(191, i));
				i.call(r);
			}
		}
}
var Bo = {},
	yn = Mr(Bo),
	wo = Mr(Bo),
	bo = Mr(Bo);
function Wr(e) {
	if (e === Bo) throw Error(O(174));
	return e;
}
function bf(e, t) {
	switch ((ae(bo, t), ae(wo, e), ae(yn, Bo), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ec(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ec(t, e));
	}
	de(yn), ae(yn, t);
}
function as() {
	de(yn), de(wo), de(bo);
}
function v0(e) {
	Wr(bo.current);
	var t = Wr(yn.current),
		n = Ec(t, e.type);
	t !== n && (ae(wo, e), ae(yn, n));
}
function Sf(e) {
	wo.current === e && (de(yn), de(wo));
}
var me = Mr(0);
function ml(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Vu = [];
function Tf() {
	for (var e = 0; e < Vu.length; e++)
		Vu[e]._workInProgressVersionPrimary = null;
	Vu.length = 0;
}
var Na = _n.ReactCurrentDispatcher,
	_u = _n.ReactCurrentBatchConfig,
	ai = 0,
	ge = null,
	Re = null,
	De = null,
	gl = !1,
	qs = !1,
	So = 0,
	jS = 0;
function ze() {
	throw Error(O(321));
}
function Ef(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!tn(e[n], t[n])) return !1;
	return !0;
}
function Cf(e, t, n, r, i, s) {
	if (
		((ai = s),
		(ge = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Na.current = e === null || e.memoizedState === null ? OS : FS),
		(e = n(r, i)),
		qs)
	) {
		s = 0;
		do {
			if (((qs = !1), (So = 0), 25 <= s)) throw Error(O(301));
			(s += 1),
				(De = Re = null),
				(t.updateQueue = null),
				(Na.current = VS),
				(e = n(r, i));
		} while (qs);
	}
	if (
		((Na.current = yl),
		(t = Re !== null && Re.next !== null),
		(ai = 0),
		(De = Re = ge = null),
		(gl = !1),
		t)
	)
		throw Error(O(300));
	return e;
}
function Af() {
	var e = So !== 0;
	return (So = 0), e;
}
function ln() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return De === null ? (ge.memoizedState = De = e) : (De = De.next = e), De;
}
function Lt() {
	if (Re === null) {
		var e = ge.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Re.next;
	var t = De === null ? ge.memoizedState : De.next;
	if (t !== null) (De = t), (Re = e);
	else {
		if (e === null) throw Error(O(310));
		(Re = e),
			(e = {
				memoizedState: Re.memoizedState,
				baseState: Re.baseState,
				baseQueue: Re.baseQueue,
				queue: Re.queue,
				next: null,
			}),
			De === null ? (ge.memoizedState = De = e) : (De = De.next = e);
	}
	return De;
}
function To(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Bu(e) {
	var t = Lt(),
		n = t.queue;
	if (n === null) throw Error(O(311));
	n.lastRenderedReducer = e;
	var r = Re,
		i = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (i !== null) {
			var o = i.next;
			(i.next = s.next), (s.next = o);
		}
		(r.baseQueue = i = s), (n.pending = null);
	}
	if (i !== null) {
		(s = i.next), (r = r.baseState);
		var a = (o = null),
			l = null,
			u = s;
		do {
			var c = u.lane;
			if ((ai & c) === c)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
					(ge.lanes |= c),
					(li |= c);
			}
			u = u.next;
		} while (u !== null && u !== s);
		l === null ? (o = r) : (l.next = a),
			tn(r, t.memoizedState) || (ut = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = l),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (s = i.lane), (ge.lanes |= s), (li |= s), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Uu(e) {
	var t = Lt(),
		n = t.queue;
	if (n === null) throw Error(O(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		s = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = (i = i.next);
		do (s = e(s, o.action)), (o = o.next);
		while (o !== i);
		tn(s, t.memoizedState) || (ut = !0),
			(t.memoizedState = s),
			t.baseQueue === null && (t.baseState = s),
			(n.lastRenderedState = s);
	}
	return [s, r];
}
function x0() {}
function w0(e, t) {
	var n = ge,
		r = Lt(),
		i = t(),
		s = !tn(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (ut = !0)),
		(r = r.queue),
		Pf(T0.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || s || (De !== null && De.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Eo(9, S0.bind(null, n, r, i, t), void 0, null),
			Ie === null)
		)
			throw Error(O(349));
		ai & 30 || b0(n, t, i);
	}
	return i;
}
function b0(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ge.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function S0(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), E0(t) && C0(e);
}
function T0(e, t, n) {
	return n(function () {
		E0(t) && C0(e);
	});
}
function E0(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !tn(e, n);
	} catch (r) {
		return !0;
	}
}
function C0(e) {
	var t = In(e, 1);
	t !== null && Jt(t, e, 1, -1);
}
function Ep(e) {
	var t = ln();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: To,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = IS.bind(null, ge, e)),
		[t.memoizedState, e]
	);
}
function Eo(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ge.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
					  (n.next = e),
					  (e.next = r),
					  (t.lastEffect = e))),
		e
	);
}
function A0() {
	return Lt().memoizedState;
}
function ja(e, t, n, r) {
	var i = ln();
	(ge.flags |= e),
		(i.memoizedState = Eo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hl(e, t, n, r) {
	var i = Lt();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (Re !== null) {
		var o = Re.memoizedState;
		if (((s = o.destroy), r !== null && Ef(r, o.deps))) {
			i.memoizedState = Eo(t, n, s, r);
			return;
		}
	}
	(ge.flags |= e), (i.memoizedState = Eo(1 | t, n, s, r));
}
function Cp(e, t) {
	return ja(8390656, 8, e, t);
}
function Pf(e, t) {
	return Hl(2048, 8, e, t);
}
function P0(e, t) {
	return Hl(4, 2, e, t);
}
function k0(e, t) {
	return Hl(4, 4, e, t);
}
function R0(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function M0(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Hl(4, 4, R0.bind(null, t, e), n)
	);
}
function kf() {}
function N0(e, t) {
	var n = Lt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ef(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function j0(e, t) {
	var n = Lt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ef(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function L0(e, t, n) {
	return ai & 21
		? (tn(n, t) ||
				((n = Vy()), (ge.lanes |= n), (li |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (ut = !0)),
		  (e.memoizedState = n));
}
function LS(e, t) {
	var n = re;
	(re = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = _u.transition;
	_u.transition = {};
	try {
		e(!1), t();
	} finally {
		(re = n), (_u.transition = r);
	}
}
function D0() {
	return Lt().memoizedState;
}
function DS(e, t, n) {
	var r = xr(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		I0(e))
	)
		O0(t, n);
	else if (((n = g0(e, t, n, r)), n !== null)) {
		var i = Je();
		Jt(n, e, r, i), F0(n, t, r);
	}
}
function IS(e, t, n) {
	var r = xr(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
	if (I0(e)) O0(t, i);
	else {
		var s = e.alternate;
		if (
			e.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = t.lastRenderedReducer), s !== null)
		)
			try {
				var o = t.lastRenderedState,
					a = s(o, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), tn(a, o))) {
					var l = t.interleaved;
					l === null
						? ((i.next = i), xf(t))
						: ((i.next = l.next), (l.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch (u) {
			} finally {
			}
		(n = g0(e, t, i, r)),
			n !== null && ((i = Je()), Jt(n, e, r, i), F0(n, t, r));
	}
}
function I0(e) {
	var t = e.alternate;
	return e === ge || (t !== null && t === ge);
}
function O0(e, t) {
	qs = gl = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function F0(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), sf(e, n);
	}
}
var yl = {
		readContext: jt,
		useCallback: ze,
		useContext: ze,
		useEffect: ze,
		useImperativeHandle: ze,
		useInsertionEffect: ze,
		useLayoutEffect: ze,
		useMemo: ze,
		useReducer: ze,
		useRef: ze,
		useState: ze,
		useDebugValue: ze,
		useDeferredValue: ze,
		useTransition: ze,
		useMutableSource: ze,
		useSyncExternalStore: ze,
		useId: ze,
		unstable_isNewReconciler: !1,
	},
	OS = {
		readContext: jt,
		useCallback: function (e, t) {
			return (ln().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: jt,
		useEffect: Cp,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				ja(4194308, 4, R0.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return ja(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return ja(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = ln();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = ln();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = DS.bind(null, ge, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = ln();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ep,
		useDebugValue: kf,
		useDeferredValue: function (e) {
			return (ln().memoizedState = e);
		},
		useTransition: function () {
			var e = Ep(!1),
				t = e[0];
			return (e = LS.bind(null, e[1])), (ln().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ge,
				i = ln();
			if (he) {
				if (n === void 0) throw Error(O(407));
				n = n();
			} else {
				if (((n = t()), Ie === null)) throw Error(O(349));
				ai & 30 || b0(r, t, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: t };
			return (
				(i.queue = s),
				Cp(T0.bind(null, r, s, e), [e]),
				(r.flags |= 2048),
				Eo(9, S0.bind(null, r, s, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = ln(),
				t = Ie.identifierPrefix;
			if (he) {
				var n = Nn,
					r = Mn;
				(n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = So++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = jS++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	FS = {
		readContext: jt,
		useCallback: N0,
		useContext: jt,
		useEffect: Pf,
		useImperativeHandle: M0,
		useInsertionEffect: P0,
		useLayoutEffect: k0,
		useMemo: j0,
		useReducer: Bu,
		useRef: A0,
		useState: function () {
			return Bu(To);
		},
		useDebugValue: kf,
		useDeferredValue: function (e) {
			var t = Lt();
			return L0(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Bu(To)[0],
				t = Lt().memoizedState;
			return [e, t];
		},
		useMutableSource: x0,
		useSyncExternalStore: w0,
		useId: D0,
		unstable_isNewReconciler: !1,
	},
	VS = {
		readContext: jt,
		useCallback: N0,
		useContext: jt,
		useEffect: Pf,
		useImperativeHandle: M0,
		useInsertionEffect: P0,
		useLayoutEffect: k0,
		useMemo: j0,
		useReducer: Uu,
		useRef: A0,
		useState: function () {
			return Uu(To);
		},
		useDebugValue: kf,
		useDeferredValue: function (e) {
			var t = Lt();
			return Re === null
				? (t.memoizedState = e)
				: L0(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Uu(To)[0],
				t = Lt().memoizedState;
			return [e, t];
		},
		useMutableSource: x0,
		useSyncExternalStore: w0,
		useId: D0,
		unstable_isNewReconciler: !1,
	};
function Ht(e, t) {
	if (e && e.defaultProps) {
		(t = ye({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function Gc(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ye({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? fi(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Je(),
			i = xr(e),
			s = jn(r, i);
		(s.payload = t),
			n != null && (s.callback = n),
			(t = yr(e, s, i)),
			t !== null && (Jt(t, e, i, r), Ma(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Je(),
			i = xr(e),
			s = jn(r, i);
		(s.tag = 1),
			(s.payload = t),
			n != null && (s.callback = n),
			(t = yr(e, s, i)),
			t !== null && (Jt(t, e, i, r), Ma(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Je(),
			r = xr(e),
			i = jn(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = yr(e, i, r)),
			t !== null && (Jt(t, e, r, n), Ma(t, e, r));
	},
};
function Ap(e, t, n, r, i, s, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, s, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !go(n, r) || !go(i, s)
			: !0
	);
}
function V0(e, t, n) {
	var r = !1,
		i = Sr,
		s = t.contextType;
	return (
		typeof s == "object" && s !== null
			? (s = jt(s))
			: ((i = dt(t) ? si : Ke.current),
			  (r = t.contextTypes),
			  (s = (r = r != null) ? is(e, i) : Sr)),
		(t = new t(n, s)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Gl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = s)),
		t
	);
}
function Pp(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function Wc(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = {}), wf(e);
	var s = t.contextType;
	typeof s == "object" && s !== null
		? (i.context = jt(s))
		: ((s = dt(t) ? si : Ke.current), (i.context = is(e, s))),
		(i.state = e.memoizedState),
		(s = t.getDerivedStateFromProps),
		typeof s == "function" && (Gc(e, t, s, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Gl.enqueueReplaceState(i, i.state, null),
			pl(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ls(e, t) {
	try {
		var n = "",
			r = t;
		do (n += fb(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (s) {
		i = "\nError generating stack: " + s.message + "\n" + s.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function $u(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n != null ? n : null,
		digest: t != null ? t : null,
	};
}
function Kc(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var _S = typeof WeakMap == "function" ? WeakMap : Map;
function _0(e, t, n) {
	(n = jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			xl || ((xl = !0), (rd = r)), Kc(e, t);
		}),
		n
	);
}
function B0(e, t, n) {
	(n = jn(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Kc(e, t);
			});
	}
	var s = e.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == "function" &&
			(n.callback = function () {
				Kc(e, t),
					typeof r != "function" &&
						(vr === null ? (vr = new Set([this])) : vr.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : "",
				});
			}),
		n
	);
}
function kp(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new _S();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = JS.bind(null, e, t, n)), t.then(e, e));
}
function Rp(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Mp(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = jn(-1, 1)), (t.tag = 2), yr(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var BS = _n.ReactCurrentOwner,
	ut = !1;
function Qe(e, t, n, r) {
	t.child = e === null ? m0(t, null, n, r) : os(t, e.child, n, r);
}
function Np(e, t, n, r, i) {
	n = n.render;
	var s = t.ref;
	return (
		Gi(t, i),
		(r = Cf(e, t, n, r, s, i)),
		(n = Af()),
		e !== null && !ut
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  On(e, t, i))
			: (he && n && hf(t), (t.flags |= 1), Qe(e, t, r, i), t.child)
	);
}
function jp(e, t, n, r, i) {
	if (e === null) {
		var s = n.type;
		return typeof s == "function" &&
			!Of(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = s), U0(e, t, s, r, i))
			: ((e = Oa(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((s = e.child), !(e.lanes & i))) {
		var o = s.memoizedProps;
		if (
			((n = n.compare),
			(n = n !== null ? n : go),
			n(o, r) && e.ref === t.ref)
		)
			return On(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = wr(s, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function U0(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (go(s, r) && e.ref === t.ref)
			if (((ut = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
				e.flags & 131072 && (ut = !0);
			else return (t.lanes = e.lanes), On(e, t, i);
	}
	return Yc(e, t, n, r, i);
}
function $0(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				ae(Fi, yt),
				(yt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = s !== null ? s.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					ae(Fi, yt),
					(yt |= e),
					null
				);
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = s !== null ? s.baseLanes : n),
				ae(Fi, yt),
				(yt |= r);
		}
	else
		s !== null
			? ((r = s.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			ae(Fi, yt),
			(yt |= r);
	return Qe(e, t, i, n), t.child;
}
function z0(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Yc(e, t, n, r, i) {
	var s = dt(n) ? si : Ke.current;
	return (
		(s = is(t, s)),
		Gi(t, i),
		(n = Cf(e, t, n, r, s, i)),
		(r = Af()),
		e !== null && !ut
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  On(e, t, i))
			: (he && r && hf(t), (t.flags |= 1), Qe(e, t, n, i), t.child)
	);
}
function Lp(e, t, n, r, i) {
	if (dt(n)) {
		var s = !0;
		ul(t);
	} else s = !1;
	if ((Gi(t, i), t.stateNode === null))
		La(e, t), V0(t, n, r), Wc(t, n, r, i), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var l = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = jt(u))
			: ((u = dt(n) ? si : Ke.current), (u = is(t, u)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((a !== r || l !== u) && Pp(t, o, r, u)),
			(nr = !1);
		var f = t.memoizedState;
		(o.state = f),
			pl(t, r, o, i),
			(l = t.memoizedState),
			a !== r || f !== l || ct.current || nr
				? (typeof c == "function" &&
						(Gc(t, n, c, r), (l = t.memoizedState)),
				  (a = nr || Ap(t, n, a, r, f, l, u))
						? (d ||
								(typeof o.UNSAFE_componentWillMount !=
									"function" &&
									typeof o.componentWillMount !=
										"function") ||
								(typeof o.componentWillMount == "function" &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount ==
									"function" &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof o.componentDidMount == "function" &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = l)),
				  (o.props = r),
				  (o.state = l),
				  (o.context = u),
				  (r = a))
				: (typeof o.componentDidMount == "function" &&
						(t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			y0(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Ht(t.type, a)),
			(o.props = u),
			(d = t.pendingProps),
			(f = o.context),
			(l = n.contextType),
			typeof l == "object" && l !== null
				? (l = jt(l))
				: ((l = dt(n) ? si : Ke.current), (l = is(t, l)));
		var h = n.getDerivedStateFromProps;
		(c =
			typeof h == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function") ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((a !== d || f !== l) && Pp(t, o, r, l)),
			(nr = !1),
			(f = t.memoizedState),
			(o.state = f),
			pl(t, r, o, i);
		var g = t.memoizedState;
		a !== d || f !== g || ct.current || nr
			? (typeof h == "function" &&
					(Gc(t, n, h, r), (g = t.memoizedState)),
			  (u = nr || Ap(t, n, u, r, f, g, l) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof o.componentWillUpdate != "function") ||
							(typeof o.componentWillUpdate == "function" &&
								o.componentWillUpdate(r, g, l),
							typeof o.UNSAFE_componentWillUpdate == "function" &&
								o.UNSAFE_componentWillUpdate(r, g, l)),
					  typeof o.componentDidUpdate == "function" &&
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == "function" &&
							(t.flags |= 1024))
					: (typeof o.componentDidUpdate != "function" ||
							(a === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = g)),
			  (o.props = r),
			  (o.state = g),
			  (o.context = l),
			  (r = u))
			: (typeof o.componentDidUpdate != "function" ||
					(a === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Qc(e, t, n, r, s, i);
}
function Qc(e, t, n, r, i, s) {
	z0(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && vp(t, n, !1), On(e, t, s);
	(r = t.stateNode), (BS.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != "function"
			? null
			: r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = os(t, e.child, null, s)),
			  (t.child = os(t, null, a, s)))
			: Qe(e, t, a, s),
		(t.memoizedState = r.state),
		i && vp(t, n, !0),
		t.child
	);
}
function H0(e) {
	var t = e.stateNode;
	t.pendingContext
		? yp(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && yp(e, t.context, !1),
		bf(e, t.containerInfo);
}
function Dp(e, t, n, r, i) {
	return ss(), mf(i), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function qc(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function G0(e, t, n) {
	var r = t.pendingProps,
		i = me.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		a;
	if (
		((a = o) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((s = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		ae(me, i & 1),
		e === null)
	)
		return (
			zc(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  s
						? ((r = t.mode),
						  (s = t.child),
						  (o = { mode: "hidden", children: o }),
						  !(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = o))
								: (s = Yl(o, r, 0, null)),
						  (e = ni(e, r, n, null)),
						  (s.return = t),
						  (e.return = t),
						  (s.sibling = e),
						  (t.child = s),
						  (t.child.memoizedState = qc(n)),
						  (t.memoizedState = Xc),
						  e)
						: Rf(t, o))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return US(e, t, o, r, a, i, n);
	if (s) {
		(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
		var l = { mode: "hidden", children: r.children };
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = l),
				  (t.deletions = null))
				: ((r = wr(i, l)),
				  (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null
				? (s = wr(a, s))
				: ((s = ni(s, o, n, null)), (s.flags |= 2)),
			(s.return = t),
			(r.return = t),
			(r.sibling = s),
			(t.child = r),
			(r = s),
			(s = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? qc(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(s.memoizedState = o),
			(s.childLanes = e.childLanes & ~n),
			(t.memoizedState = Xc),
			r
		);
	}
	return (
		(s = e.child),
		(e = s.sibling),
		(r = wr(s, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Rf(e, t) {
	return (
		(t = Yl({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ua(e, t, n, r) {
	return (
		r !== null && mf(r),
		os(t, e.child, null, n),
		(e = Rf(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function US(e, t, n, r, i, s, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = $u(Error(O(422)))), ua(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((s = r.fallback),
			  (i = t.mode),
			  (r = Yl({ mode: "visible", children: r.children }, i, 0, null)),
			  (s = ni(s, i, o, null)),
			  (s.flags |= 2),
			  (r.return = t),
			  (s.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  t.mode & 1 && os(t, e.child, null, o),
			  (t.child.memoizedState = qc(o)),
			  (t.memoizedState = Xc),
			  s);
	if (!(t.mode & 1)) return ua(e, t, o, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (
			(r = a), (s = Error(O(419))), (r = $u(s, r, void 0)), ua(e, t, o, r)
		);
	}
	if (((a = (o & e.childLanes) !== 0), ut || a)) {
		if (((r = Ie), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== s.retryLane &&
					((s.retryLane = i), In(e, i), Jt(r, e, i, -1));
		}
		return If(), (r = $u(Error(O(421)))), ua(e, t, o, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = eT.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = s.treeContext),
		  (xt = gr(i.nextSibling)),
		  (wt = t),
		  (he = !0),
		  (Xt = null),
		  e !== null &&
				((At[Pt++] = Mn),
				(At[Pt++] = Nn),
				(At[Pt++] = oi),
				(Mn = e.id),
				(Nn = e.overflow),
				(oi = t)),
		  (t = Rf(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Ip(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Hc(e.return, t, n);
}
function zu(e, t, n, r, i) {
	var s = e.memoizedState;
	s === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((s.isBackwards = t),
		  (s.rendering = null),
		  (s.renderingStartTime = 0),
		  (s.last = r),
		  (s.tail = n),
		  (s.tailMode = i));
}
function W0(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((Qe(e, t, r.children, n), (r = me.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Ip(e, n, t);
				else if (e.tag === 19) Ip(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((ae(me, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && ml(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					zu(t, !1, i, n, s);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && ml(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				zu(t, !0, n, null, s);
				break;
			case "together":
				zu(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function La(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function On(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(li |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(O(153));
	if (t.child !== null) {
		for (
			e = t.child, n = wr(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = wr(e, e.pendingProps)),
				(n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function $S(e, t, n) {
	switch (t.tag) {
		case 3:
			H0(t), ss();
			break;
		case 5:
			v0(t);
			break;
		case 1:
			dt(t.type) && ul(t);
			break;
		case 4:
			bf(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			ae(fl, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (ae(me, me.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? G0(e, t, n)
					: (ae(me, me.current & 1),
					  (e = On(e, t, n)),
					  e !== null ? e.sibling : null);
			ae(me, me.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return W0(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null),
					(i.tail = null),
					(i.lastEffect = null)),
				ae(me, me.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), $0(e, t, n);
	}
	return On(e, t, n);
}
var K0, Zc, Y0, Q0;
K0 = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Zc = function () {};
Y0 = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Wr(yn.current);
		var s = null;
		switch (n) {
			case "input":
				(i = wc(e, i)), (r = wc(e, r)), (s = []);
				break;
			case "select":
				(i = ye({}, i, { value: void 0 })),
					(r = ye({}, r, { value: void 0 })),
					(s = []);
				break;
			case "textarea":
				(i = Tc(e, i)), (r = Tc(e, r)), (s = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = al);
		}
		Cc(n, r);
		var o;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (o in a)
						a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(lo.hasOwnProperty(u)
							? s || (s = [])
							: (s = s || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && l !== a && (l != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(l && l.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ""));
						for (o in l)
							l.hasOwnProperty(o) &&
								a[o] !== l[o] &&
								(n || (n = {}), (n[o] = l[o]));
					} else n || (s || (s = []), s.push(u, n)), (n = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (a = a ? a.__html : void 0),
						  l != null && a !== l && (s = s || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (s = s || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (lo.hasOwnProperty(u)
								? (l != null &&
										u === "onScroll" &&
										ue("scroll", e),
								  s || a === l || (s = []))
								: (s = s || []).push(u, l));
		}
		n && (s = s || []).push("style", n);
		var u = s;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Q0 = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function js(e, t) {
	if (!he)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function He(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zS(e, t, n) {
	var r = t.pendingProps;
	switch ((pf(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return He(t), null;
		case 1:
			return dt(t.type) && ll(), He(t), null;
		case 3:
			return (
				(r = t.stateNode),
				as(),
				de(ct),
				de(Ke),
				Tf(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(aa(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  Xt !== null && (od(Xt), (Xt = null)))),
				Zc(e, t),
				He(t),
				null
			);
		case 5:
			Sf(t);
			var i = Wr(bo.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Y0(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(O(166));
					return He(t), null;
				}
				if (((e = Wr(yn.current)), aa(t))) {
					(r = t.stateNode), (n = t.type);
					var s = t.memoizedProps;
					switch (
						((r[pn] = t), (r[xo] = s), (e = (t.mode & 1) !== 0), n)
					) {
						case "dialog":
							ue("cancel", r), ue("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							ue("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < zs.length; i++) ue(zs[i], r);
							break;
						case "source":
							ue("error", r);
							break;
						case "img":
						case "image":
						case "link":
							ue("error", r), ue("load", r);
							break;
						case "details":
							ue("toggle", r);
							break;
						case "input":
							Hh(r, s), ue("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								ue("invalid", r);
							break;
						case "textarea":
							Wh(r, s), ue("invalid", r);
					}
					Cc(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var a = s[o];
							o === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (s.suppressHydrationWarning !== !0 &&
											oa(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (s.suppressHydrationWarning !== !0 &&
											oa(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: lo.hasOwnProperty(o) &&
								  a != null &&
								  o === "onScroll" &&
								  ue("scroll", r);
						}
					switch (n) {
						case "input":
							Zo(r), Gh(r, s, !0);
							break;
						case "textarea":
							Zo(r), Kh(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof s.onClick == "function" && (r.onclick = al);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Ty(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = o.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === "select" &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[pn] = t),
						(e[xo] = r),
						K0(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Ac(n, r)), n)) {
							case "dialog":
								ue("cancel", e), ue("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								ue("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < zs.length; i++) ue(zs[i], e);
								i = r;
								break;
							case "source":
								ue("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								ue("error", e), ue("load", e), (i = r);
								break;
							case "details":
								ue("toggle", e), (i = r);
								break;
							case "input":
								Hh(e, r), (i = wc(e, r)), ue("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(i = ye({}, r, { value: void 0 })),
									ue("invalid", e);
								break;
							case "textarea":
								Wh(e, r), (i = Tc(e, r)), ue("invalid", e);
								break;
							default:
								i = r;
						}
						Cc(n, i), (a = i);
						for (s in a)
							if (a.hasOwnProperty(s)) {
								var l = a[s];
								s === "style"
									? Ay(e, l)
									: s === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0),
									  l != null && Ey(e, l))
									: s === "children"
									? typeof l == "string"
										? (n !== "textarea" || l !== "") &&
										  uo(e, l)
										: typeof l == "number" && uo(e, "" + l)
									: s !== "suppressContentEditableWarning" &&
									  s !== "suppressHydrationWarning" &&
									  s !== "autoFocus" &&
									  (lo.hasOwnProperty(s)
											? l != null &&
											  s === "onScroll" &&
											  ue("scroll", e)
											: l != null && Zd(e, s, l, o));
							}
						switch (n) {
							case "input":
								Zo(e), Gh(e, r, !1);
								break;
							case "textarea":
								Zo(e), Kh(e);
								break;
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + br(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? Ui(e, !!r.multiple, s, !1)
										: r.defaultValue != null &&
										  Ui(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  );
								break;
							default:
								typeof i.onClick == "function" &&
									(e.onclick = al);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return He(t), null;
		case 6:
			if (e && t.stateNode != null) Q0(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(O(166));
				if (((n = Wr(bo.current)), Wr(yn.current), aa(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[pn] = t),
						(s = r.nodeValue !== n) && ((e = wt), e !== null))
					)
						switch (e.tag) {
							case 3:
								oa(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 &&
									oa(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					s && (t.flags |= 4);
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[pn] = t),
						(t.stateNode = r);
			}
			return He(t), null;
		case 13:
			if (
				(de(me),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (he && xt !== null && t.mode & 1 && !(t.flags & 128))
					h0(), ss(), (t.flags |= 98560), (s = !1);
				else if (((s = aa(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!s) throw Error(O(318));
						if (
							((s = t.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(O(317));
						s[pn] = t;
					} else
						ss(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4);
					He(t), (s = !1);
				} else Xt !== null && (od(Xt), (Xt = null)), (s = !0);
				if (!s) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || me.current & 1
								? Ne === 0 && (Ne = 3)
								: If())),
				  t.updateQueue !== null && (t.flags |= 4),
				  He(t),
				  null);
		case 4:
			return (
				as(),
				Zc(e, t),
				e === null && yo(t.stateNode.containerInfo),
				He(t),
				null
			);
		case 10:
			return vf(t.type._context), He(t), null;
		case 17:
			return dt(t.type) && ll(), He(t), null;
		case 19:
			if ((de(me), (s = t.memoizedState), s === null)) return He(t), null;
			if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) js(s, !1);
				else {
					if (Ne !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = ml(e)), o !== null)) {
								for (
									t.flags |= 128,
										js(s, !1),
										r = o.updateQueue,
										r !== null &&
											((t.updateQueue = r),
											(t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(s = n),
										(e = r),
										(s.flags &= 14680066),
										(o = s.alternate),
										o === null
											? ((s.childLanes = 0),
											  (s.lanes = e),
											  (s.child = null),
											  (s.subtreeFlags = 0),
											  (s.memoizedProps = null),
											  (s.memoizedState = null),
											  (s.updateQueue = null),
											  (s.dependencies = null),
											  (s.stateNode = null))
											: ((s.childLanes = o.childLanes),
											  (s.lanes = o.lanes),
											  (s.child = o.child),
											  (s.subtreeFlags = 0),
											  (s.deletions = null),
											  (s.memoizedProps =
													o.memoizedProps),
											  (s.memoizedState =
													o.memoizedState),
											  (s.updateQueue = o.updateQueue),
											  (s.type = o.type),
											  (e = o.dependencies),
											  (s.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling);
								return ae(me, (me.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					s.tail !== null &&
						Se() > us &&
						((t.flags |= 128),
						(r = !0),
						js(s, !1),
						(t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = ml(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							js(s, !0),
							s.tail === null &&
								s.tailMode === "hidden" &&
								!o.alternate &&
								!he)
						)
							return He(t), null;
					} else
						2 * Se() - s.renderingStartTime > us &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							js(s, !1),
							(t.lanes = 4194304));
				s.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = s.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (s.last = o));
			}
			return s.tail !== null
				? ((t = s.tail),
				  (s.rendering = t),
				  (s.tail = t.sibling),
				  (s.renderingStartTime = Se()),
				  (t.sibling = null),
				  (n = me.current),
				  ae(me, r ? (n & 1) | 2 : n & 1),
				  t)
				: (He(t), null);
		case 22:
		case 23:
			return (
				Df(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? yt & 1073741824 &&
					  (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: He(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(O(156, t.tag));
}
function HS(e, t) {
	switch ((pf(t), t.tag)) {
		case 1:
			return (
				dt(t.type) && ll(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				as(),
				de(ct),
				de(Ke),
				Tf(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return Sf(t), null;
		case 13:
			if (
				(de(me),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(O(340));
				ss();
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return de(me), null;
		case 4:
			return as(), null;
		case 10:
			return vf(t.type._context), null;
		case 22:
		case 23:
			return Df(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ca = !1,
	We = !1,
	GS = typeof WeakSet == "function" ? WeakSet : Set,
	_ = null;
function Oi(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				be(e, t, r);
			}
		else n.current = null;
}
function Jc(e, t, n) {
	try {
		n();
	} catch (r) {
		be(e, t, r);
	}
}
var Op = !1;
function WS(e, t) {
	if (((Oc = il), (e = e0()), ff(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						s = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, s.nodeType;
					} catch (S) {
						n = null;
						break e;
					}
					var o = 0,
						a = -1,
						l = -1,
						u = 0,
						c = 0,
						d = e,
						f = null;
					t: for (;;) {
						for (
							var h;
							d !== n ||
								(i !== 0 && d.nodeType !== 3) ||
								(a = o + i),
								d !== s ||
									(r !== 0 && d.nodeType !== 3) ||
									(l = o + r),
								d.nodeType === 3 && (o += d.nodeValue.length),
								(h = d.firstChild) !== null;

						)
							(f = d), (d = h);
						for (;;) {
							if (d === e) break t;
							if (
								(f === n && ++u === i && (a = o),
								f === s && ++c === r && (l = o),
								(h = d.nextSibling) !== null)
							)
								break;
							(d = f), (f = d.parentNode);
						}
						d = h;
					}
					n = a === -1 || l === -1 ? null : { start: a, end: l };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (
		Fc = { focusedElem: e, selectionRange: n }, il = !1, _ = t;
		_ !== null;

	)
		if (
			((t = _),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (_ = e);
		else
			for (; _ !== null; ) {
				t = _;
				try {
					var g = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var y = g.memoizedProps,
										x = g.memoizedState,
										m = t.stateNode,
										p = m.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? y
												: Ht(t.type, y),
											x
										);
									m.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(O(163));
						}
				} catch (S) {
					be(t, t.return, S);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (_ = e);
					break;
				}
				_ = t.return;
			}
	return (g = Op), (Op = !1), g;
}
function Zs(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && Jc(t, n, s);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Wl(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function ed(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function X0(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), X0(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[pn],
				delete t[xo],
				delete t[Bc],
				delete t[kS],
				delete t[RS])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function q0(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fp(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || q0(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function td(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = al));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (td(e, t, n), e = e.sibling; e !== null; )
			td(e, t, n), (e = e.sibling);
}
function nd(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (nd(e, t, n), e = e.sibling; e !== null; )
			nd(e, t, n), (e = e.sibling);
}
var Oe = null,
	Yt = !1;
function Gn(e, t, n) {
	for (n = n.child; n !== null; ) Z0(e, t, n), (n = n.sibling);
}
function Z0(e, t, n) {
	if (gn && typeof gn.onCommitFiberUnmount == "function")
		try {
			gn.onCommitFiberUnmount(Vl, n);
		} catch (a) {}
	switch (n.tag) {
		case 5:
			We || Oi(n, t);
		case 6:
			var r = Oe,
				i = Yt;
			(Oe = null),
				Gn(e, t, n),
				(Oe = r),
				(Yt = i),
				Oe !== null &&
					(Yt
						? ((e = Oe),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: Oe.removeChild(n.stateNode));
			break;
		case 18:
			Oe !== null &&
				(Yt
					? ((e = Oe),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Ou(e.parentNode, n)
							: e.nodeType === 1 && Ou(e, n),
					  po(e))
					: Ou(Oe, n.stateNode));
			break;
		case 4:
			(r = Oe),
				(i = Yt),
				(Oe = n.stateNode.containerInfo),
				(Yt = !0),
				Gn(e, t, n),
				(Oe = r),
				(Yt = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!We &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && Jc(n, t, o),
						(i = i.next);
				} while (i !== r);
			}
			Gn(e, t, n);
			break;
		case 1:
			if (
				!We &&
				(Oi(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					be(n, t, a);
				}
			Gn(e, t, n);
			break;
		case 21:
			Gn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((We = (r = We) || n.memoizedState !== null),
				  Gn(e, t, n),
				  (We = r))
				: Gn(e, t, n);
			break;
		default:
			Gn(e, t, n);
	}
}
function Vp(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new GS()),
			t.forEach(function (r) {
				var i = tT.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Bt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var s = e,
					o = t,
					a = o;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Oe = a.stateNode), (Yt = !1);
							break e;
						case 3:
							(Oe = a.stateNode.containerInfo), (Yt = !0);
							break e;
						case 4:
							(Oe = a.stateNode.containerInfo), (Yt = !0);
							break e;
					}
					a = a.return;
				}
				if (Oe === null) throw Error(O(160));
				Z0(s, o, i), (Oe = null), (Yt = !1);
				var l = i.alternate;
				l !== null && (l.return = null), (i.return = null);
			} catch (u) {
				be(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) J0(t, e), (t = t.sibling);
}
function J0(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Bt(t, e), an(e), r & 4)) {
				try {
					Zs(3, e, e.return), Wl(3, e);
				} catch (y) {
					be(e, e.return, y);
				}
				try {
					Zs(5, e, e.return);
				} catch (y) {
					be(e, e.return, y);
				}
			}
			break;
		case 1:
			Bt(t, e), an(e), r & 512 && n !== null && Oi(n, n.return);
			break;
		case 5:
			if (
				(Bt(t, e),
				an(e),
				r & 512 && n !== null && Oi(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					uo(i, "");
				} catch (y) {
					be(e, e.return, y);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var s = e.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					a = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						a === "input" &&
							s.type === "radio" &&
							s.name != null &&
							by(i, s),
							Ac(a, o);
						var u = Ac(a, s);
						for (o = 0; o < l.length; o += 2) {
							var c = l[o],
								d = l[o + 1];
							c === "style"
								? Ay(i, d)
								: c === "dangerouslySetInnerHTML"
								? Ey(i, d)
								: c === "children"
								? uo(i, d)
								: Zd(i, c, d, u);
						}
						switch (a) {
							case "input":
								bc(i, s);
								break;
							case "textarea":
								Sy(i, s);
								break;
							case "select":
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!s.multiple;
								var h = s.value;
								h != null
									? Ui(i, !!s.multiple, h, !1)
									: f !== !!s.multiple &&
									  (s.defaultValue != null
											? Ui(
													i,
													!!s.multiple,
													s.defaultValue,
													!0
											  )
											: Ui(
													i,
													!!s.multiple,
													s.multiple ? [] : "",
													!1
											  ));
						}
						i[xo] = s;
					} catch (y) {
						be(e, e.return, y);
					}
			}
			break;
		case 6:
			if ((Bt(t, e), an(e), r & 4)) {
				if (e.stateNode === null) throw Error(O(162));
				(i = e.stateNode), (s = e.memoizedProps);
				try {
					i.nodeValue = s;
				} catch (y) {
					be(e, e.return, y);
				}
			}
			break;
		case 3:
			if (
				(Bt(t, e),
				an(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					po(t.containerInfo);
				} catch (y) {
					be(e, e.return, y);
				}
			break;
		case 4:
			Bt(t, e), an(e);
			break;
		case 13:
			Bt(t, e),
				an(e),
				(i = e.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null &&
							i.alternate.memoizedState !== null) ||
						(jf = Se())),
				r & 4 && Vp(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((We = (u = We) || c), Bt(t, e), (We = u))
					: Bt(t, e),
				an(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (_ = e, c = e.child; c !== null; ) {
						for (d = _ = c; _ !== null; ) {
							switch (((f = _), (h = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Zs(4, f, f.return);
									break;
								case 1:
									Oi(f, f.return);
									var g = f.stateNode;
									if (
										typeof g.componentWillUnmount ==
										"function"
									) {
										(r = f), (n = f.return);
										try {
											(t = r),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount();
										} catch (y) {
											be(r, n, y);
										}
									}
									break;
								case 5:
									Oi(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Bp(d);
										continue;
									}
							}
							h !== null ? ((h.return = f), (_ = h)) : Bp(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									u
										? ((s = i.style),
										  typeof s.setProperty == "function"
												? s.setProperty(
														"display",
														"none",
														"important"
												  )
												: (s.display = "none"))
										: ((a = d.stateNode),
										  (l = d.memoizedProps.style),
										  (o =
												l != null &&
												l.hasOwnProperty("display")
													? l.display
													: null),
										  (a.style.display = Cy("display", o)));
							} catch (y) {
								be(e, e.return, y);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u
									? ""
									: d.memoizedProps;
							} catch (y) {
								be(e, e.return, y);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null),
						(d.sibling.return = d.return),
						(d = d.sibling);
				}
			}
			break;
		case 19:
			Bt(t, e), an(e), r & 4 && Vp(e);
			break;
		case 21:
			break;
		default:
			Bt(t, e), an(e);
	}
}
function an(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (q0(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(O(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (uo(i, ""), (r.flags &= -33));
					var s = Fp(e);
					nd(e, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = Fp(e);
					td(e, a, o);
					break;
				default:
					throw Error(O(161));
			}
		} catch (l) {
			be(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function KS(e, t, n) {
	(_ = e), ev(e);
}
function ev(e, t, n) {
	for (var r = (e.mode & 1) !== 0; _ !== null; ) {
		var i = _,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || ca;
			if (!o) {
				var a = i.alternate,
					l = (a !== null && a.memoizedState !== null) || We;
				a = ca;
				var u = We;
				if (((ca = o), (We = l) && !u))
					for (_ = i; _ !== null; )
						(o = _),
							(l = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Up(i)
								: l !== null
								? ((l.return = o), (_ = l))
								: Up(i);
				for (; s !== null; ) (_ = s), ev(s), (s = s.sibling);
				(_ = i), (ca = a), (We = u);
			}
			_p(e);
		} else
			i.subtreeFlags & 8772 && s !== null
				? ((s.return = i), (_ = s))
				: _p(e);
	}
}
function _p(e) {
	for (; _ !== null; ) {
		var t = _;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							We || Wl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !We)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Ht(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var s = t.updateQueue;
							s !== null && Tp(t, s, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Tp(t, o, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img":
										l.src && (n.src = l.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && po(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(O(163));
					}
				We || (t.flags & 512 && ed(t));
			} catch (f) {
				be(t, t.return, f);
			}
		}
		if (t === e) {
			_ = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (_ = n);
			break;
		}
		_ = t.return;
	}
}
function Bp(e) {
	for (; _ !== null; ) {
		var t = _;
		if (t === e) {
			_ = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (_ = n);
			break;
		}
		_ = t.return;
	}
}
function Up(e) {
	for (; _ !== null; ) {
		var t = _;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Wl(4, t);
					} catch (l) {
						be(t, n, l);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (l) {
							be(t, i, l);
						}
					}
					var s = t.return;
					try {
						ed(t);
					} catch (l) {
						be(t, s, l);
					}
					break;
				case 5:
					var o = t.return;
					try {
						ed(t);
					} catch (l) {
						be(t, o, l);
					}
			}
		} catch (l) {
			be(t, t.return, l);
		}
		if (t === e) {
			_ = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (_ = a);
			break;
		}
		_ = t.return;
	}
}
var YS = Math.ceil,
	vl = _n.ReactCurrentDispatcher,
	Mf = _n.ReactCurrentOwner,
	Mt = _n.ReactCurrentBatchConfig,
	te = 0,
	Ie = null,
	Ae = null,
	_e = 0,
	yt = 0,
	Fi = Mr(0),
	Ne = 0,
	Co = null,
	li = 0,
	Kl = 0,
	Nf = 0,
	Js = null,
	lt = null,
	jf = 0,
	us = 1 / 0,
	Pn = null,
	xl = !1,
	rd = null,
	vr = null,
	da = !1,
	dr = null,
	wl = 0,
	eo = 0,
	id = null,
	Da = -1,
	Ia = 0;
function Je() {
	return te & 6 ? Se() : Da !== -1 ? Da : (Da = Se());
}
function xr(e) {
	return e.mode & 1
		? te & 2 && _e !== 0
			? _e & -_e
			: NS.transition !== null
			? (Ia === 0 && (Ia = Vy()), Ia)
			: ((e = re),
			  e !== 0 ||
					((e = window.event), (e = e === void 0 ? 16 : Gy(e.type))),
			  e)
		: 1;
}
function Jt(e, t, n, r) {
	if (50 < eo) throw ((eo = 0), (id = null), Error(O(185)));
	Fo(e, n, r),
		(!(te & 2) || e !== Ie) &&
			(e === Ie && (!(te & 2) && (Kl |= n), Ne === 4 && ir(e, _e)),
			ft(e, r),
			n === 1 &&
				te === 0 &&
				!(t.mode & 1) &&
				((us = Se() + 500), zl && Nr()));
}
function ft(e, t) {
	var n = e.callbackNode;
	Nb(e, t);
	var r = rl(e, e === Ie ? _e : 0);
	if (r === 0)
		n !== null && Xh(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Xh(n), t === 1))
			e.tag === 0 ? MS($p.bind(null, e)) : c0($p.bind(null, e)),
				AS(function () {
					!(te & 6) && Nr();
				}),
				(n = null);
		else {
			switch (_y(r)) {
				case 1:
					n = rf;
					break;
				case 4:
					n = Oy;
					break;
				case 16:
					n = nl;
					break;
				case 536870912:
					n = Fy;
					break;
				default:
					n = nl;
			}
			n = lv(n, tv.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function tv(e, t) {
	if (((Da = -1), (Ia = 0), te & 6)) throw Error(O(327));
	var n = e.callbackNode;
	if (Wi() && e.callbackNode !== n) return null;
	var r = rl(e, e === Ie ? _e : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = bl(e, r);
	else {
		t = r;
		var i = te;
		te |= 2;
		var s = rv();
		(Ie !== e || _e !== t) && ((Pn = null), (us = Se() + 500), ti(e, t));
		do
			try {
				qS();
				break;
			} catch (a) {
				nv(e, a);
			}
		while (!0);
		yf(),
			(vl.current = s),
			(te = i),
			Ae !== null ? (t = 0) : ((Ie = null), (_e = 0), (t = Ne));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Nc(e)), i !== 0 && ((r = i), (t = sd(e, i)))),
			t === 1)
		)
			throw ((n = Co), ti(e, 0), ir(e, r), ft(e, Se()), n);
		if (t === 6) ir(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!QS(i) &&
					((t = bl(e, r)),
					t === 2 &&
						((s = Nc(e)), s !== 0 && ((r = s), (t = sd(e, s)))),
					t === 1))
			)
				throw ((n = Co), ti(e, 0), ir(e, r), ft(e, Se()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(O(345));
				case 2:
					$r(e, lt, Pn);
					break;
				case 3:
					if (
						(ir(e, r),
						(r & 130023424) === r &&
							((t = jf + 500 - Se()), 10 < t))
					) {
						if (rl(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Je(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = _c($r.bind(null, e, lt, Pn), t);
						break;
					}
					$r(e, lt, Pn);
					break;
				case 4:
					if ((ir(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - Zt(r);
						(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
					}
					if (
						((r = i),
						(r = Se() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * YS(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = _c($r.bind(null, e, lt, Pn), r);
						break;
					}
					$r(e, lt, Pn);
					break;
				case 5:
					$r(e, lt, Pn);
					break;
				default:
					throw Error(O(329));
			}
		}
	}
	return ft(e, Se()), e.callbackNode === n ? tv.bind(null, e) : null;
}
function sd(e, t) {
	var n = Js;
	return (
		e.current.memoizedState.isDehydrated && (ti(e, t).flags |= 256),
		(e = bl(e, t)),
		e !== 2 && ((t = lt), (lt = n), t !== null && od(t)),
		e
	);
}
function od(e) {
	lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function QS(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!tn(s(), i)) return !1;
					} catch (o) {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function ir(e, t) {
	for (
		t &= ~Nf,
			t &= ~Kl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Zt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function $p(e) {
	if (te & 6) throw Error(O(327));
	Wi();
	var t = rl(e, 0);
	if (!(t & 1)) return ft(e, Se()), null;
	var n = bl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Nc(e);
		r !== 0 && ((t = r), (n = sd(e, r)));
	}
	if (n === 1) throw ((n = Co), ti(e, 0), ir(e, t), ft(e, Se()), n);
	if (n === 6) throw Error(O(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		$r(e, lt, Pn),
		ft(e, Se()),
		null
	);
}
function Lf(e, t) {
	var n = te;
	te |= 1;
	try {
		return e(t);
	} finally {
		(te = n), te === 0 && ((us = Se() + 500), zl && Nr());
	}
}
function ui(e) {
	dr !== null && dr.tag === 0 && !(te & 6) && Wi();
	var t = te;
	te |= 1;
	var n = Mt.transition,
		r = re;
	try {
		if (((Mt.transition = null), (re = 1), e)) return e();
	} finally {
		(re = r), (Mt.transition = n), (te = t), !(te & 6) && Nr();
	}
}
function Df() {
	(yt = Fi.current), de(Fi);
}
function ti(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), CS(n)), Ae !== null))
		for (n = Ae.return; n !== null; ) {
			var r = n;
			switch ((pf(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ll();
					break;
				case 3:
					as(), de(ct), de(Ke), Tf();
					break;
				case 5:
					Sf(r);
					break;
				case 4:
					as();
					break;
				case 13:
					de(me);
					break;
				case 19:
					de(me);
					break;
				case 10:
					vf(r.type._context);
					break;
				case 22:
				case 23:
					Df();
			}
			n = n.return;
		}
	if (
		((Ie = e),
		(Ae = e = wr(e.current, null)),
		(_e = yt = t),
		(Ne = 0),
		(Co = null),
		(Nf = Kl = li = 0),
		(lt = Js = null),
		Gr !== null)
	) {
		for (t = 0; t < Gr.length; t++)
			if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					(s.next = i), (r.next = o);
				}
				n.pending = r;
			}
		Gr = null;
	}
	return e;
}
function nv(e, t) {
	do {
		var n = Ae;
		try {
			if ((yf(), (Na.current = yl), gl)) {
				for (var r = ge.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				gl = !1;
			}
			if (
				((ai = 0),
				(De = Re = ge = null),
				(qs = !1),
				(So = 0),
				(Mf.current = null),
				n === null || n.return === null)
			) {
				(Ne = 1), (Co = t), (Ae = null);
				break;
			}
			e: {
				var s = e,
					o = n.return,
					a = n,
					l = t;
				if (
					((t = _e),
					(a.flags |= 32768),
					l !== null &&
						typeof l == "object" &&
						typeof l.then == "function")
				) {
					var u = l,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f
							? ((c.updateQueue = f.updateQueue),
							  (c.memoizedState = f.memoizedState),
							  (c.lanes = f.lanes))
							: ((c.updateQueue = null),
							  (c.memoizedState = null));
					}
					var h = Rp(o);
					if (h !== null) {
						(h.flags &= -257),
							Mp(h, o, a, s, t),
							h.mode & 1 && kp(s, u, t),
							(t = h),
							(l = u);
						var g = t.updateQueue;
						if (g === null) {
							var y = new Set();
							y.add(l), (t.updateQueue = y);
						} else g.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							kp(s, u, t), If();
							break e;
						}
						l = Error(O(426));
					}
				} else if (he && a.mode & 1) {
					var x = Rp(o);
					if (x !== null) {
						!(x.flags & 65536) && (x.flags |= 256),
							Mp(x, o, a, s, t),
							mf(ls(l, a));
						break e;
					}
				}
				(s = l = ls(l, a)),
					Ne !== 4 && (Ne = 2),
					Js === null ? (Js = [s]) : Js.push(s),
					(s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (t &= -t), (s.lanes |= t);
							var m = _0(s, l, t);
							Sp(s, m);
							break e;
						case 1:
							a = l;
							var p = s.type,
								v = s.stateNode;
							if (
								!(s.flags & 128) &&
								(typeof p.getDerivedStateFromError ==
									"function" ||
									(v !== null &&
										typeof v.componentDidCatch ==
											"function" &&
										(vr === null || !vr.has(v))))
							) {
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var S = B0(s, a, t);
								Sp(s, S);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			sv(n);
		} catch (T) {
			(t = T), Ae === n && n !== null && (Ae = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function rv() {
	var e = vl.current;
	return (vl.current = yl), e === null ? yl : e;
}
function If() {
	(Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
		Ie === null || (!(li & 268435455) && !(Kl & 268435455)) || ir(Ie, _e);
}
function bl(e, t) {
	var n = te;
	te |= 2;
	var r = rv();
	(Ie !== e || _e !== t) && ((Pn = null), ti(e, t));
	do
		try {
			XS();
			break;
		} catch (i) {
			nv(e, i);
		}
	while (!0);
	if ((yf(), (te = n), (vl.current = r), Ae !== null)) throw Error(O(261));
	return (Ie = null), (_e = 0), Ne;
}
function XS() {
	for (; Ae !== null; ) iv(Ae);
}
function qS() {
	for (; Ae !== null && !Sb(); ) iv(Ae);
}
function iv(e) {
	var t = av(e.alternate, e, yt);
	(e.memoizedProps = e.pendingProps),
		t === null ? sv(e) : (Ae = t),
		(Mf.current = null);
}
function sv(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = HS(n, t)), n !== null)) {
				(n.flags &= 32767), (Ae = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Ne = 6), (Ae = null);
				return;
			}
		} else if (((n = zS(n, t, yt)), n !== null)) {
			Ae = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Ae = t;
			return;
		}
		Ae = t = e;
	} while (t !== null);
	Ne === 0 && (Ne = 5);
}
function $r(e, t, n) {
	var r = re,
		i = Mt.transition;
	try {
		(Mt.transition = null), (re = 1), ZS(e, t, n, r);
	} finally {
		(Mt.transition = i), (re = r);
	}
	return null;
}
function ZS(e, t, n, r) {
	do Wi();
	while (dr !== null);
	if (te & 6) throw Error(O(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(O(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(jb(e, s),
		e === Ie && ((Ae = Ie = null), (_e = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			da ||
			((da = !0),
			lv(nl, function () {
				return Wi(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = Mt.transition), (Mt.transition = null);
		var o = re;
		re = 1;
		var a = te;
		(te |= 4),
			(Mf.current = null),
			WS(e, n),
			J0(n, e),
			vS(Fc),
			(il = !!Oc),
			(Fc = Oc = null),
			(e.current = n),
			KS(n),
			Tb(),
			(te = a),
			(re = o),
			(Mt.transition = s);
	} else e.current = n;
	if (
		(da && ((da = !1), (dr = e), (wl = i)),
		(s = e.pendingLanes),
		s === 0 && (vr = null),
		Ab(n.stateNode),
		ft(e, Se()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]),
				r(i.value, { componentStack: i.stack, digest: i.digest });
	if (xl) throw ((xl = !1), (e = rd), (rd = null), e);
	return (
		wl & 1 && e.tag !== 0 && Wi(),
		(s = e.pendingLanes),
		s & 1 ? (e === id ? eo++ : ((eo = 0), (id = e))) : (eo = 0),
		Nr(),
		null
	);
}
function Wi() {
	if (dr !== null) {
		var e = _y(wl),
			t = Mt.transition,
			n = re;
		try {
			if (((Mt.transition = null), (re = 16 > e ? 16 : e), dr === null))
				var r = !1;
			else {
				if (((e = dr), (dr = null), (wl = 0), te & 6))
					throw Error(O(331));
				var i = te;
				for (te |= 4, _ = e.current; _ !== null; ) {
					var s = _,
						o = s.child;
					if (_.flags & 16) {
						var a = s.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (_ = u; _ !== null; ) {
									var c = _;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Zs(8, c, s);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (_ = d);
									else
										for (; _ !== null; ) {
											c = _;
											var f = c.sibling,
												h = c.return;
											if ((X0(c), c === u)) {
												_ = null;
												break;
											}
											if (f !== null) {
												(f.return = h), (_ = f);
												break;
											}
											_ = h;
										}
								}
							}
							var g = s.alternate;
							if (g !== null) {
								var y = g.child;
								if (y !== null) {
									g.child = null;
									do {
										var x = y.sibling;
										(y.sibling = null), (y = x);
									} while (y !== null);
								}
							}
							_ = s;
						}
					}
					if (s.subtreeFlags & 2064 && o !== null)
						(o.return = s), (_ = o);
					else
						e: for (; _ !== null; ) {
							if (((s = _), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										Zs(9, s, s.return);
								}
							var m = s.sibling;
							if (m !== null) {
								(m.return = s.return), (_ = m);
								break e;
							}
							_ = s.return;
						}
				}
				var p = e.current;
				for (_ = p; _ !== null; ) {
					o = _;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null)
						(v.return = o), (_ = v);
					else
						e: for (o = p; _ !== null; ) {
							if (((a = _), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Wl(9, a);
									}
								} catch (T) {
									be(a, a.return, T);
								}
							if (a === o) {
								_ = null;
								break e;
							}
							var S = a.sibling;
							if (S !== null) {
								(S.return = a.return), (_ = S);
								break e;
							}
							_ = a.return;
						}
				}
				if (
					((te = i),
					Nr(),
					gn && typeof gn.onPostCommitFiberRoot == "function")
				)
					try {
						gn.onPostCommitFiberRoot(Vl, e);
					} catch (T) {}
				r = !0;
			}
			return r;
		} finally {
			(re = n), (Mt.transition = t);
		}
	}
	return !1;
}
function zp(e, t, n) {
	(t = ls(n, t)),
		(t = _0(e, t, 1)),
		(e = yr(e, t, 1)),
		(t = Je()),
		e !== null && (Fo(e, 1, t), ft(e, t));
}
function be(e, t, n) {
	if (e.tag === 3) zp(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				zp(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(vr === null || !vr.has(r)))
				) {
					(e = ls(n, e)),
						(e = B0(t, e, 1)),
						(t = yr(t, e, 1)),
						(e = Je()),
						t !== null && (Fo(t, 1, e), ft(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function JS(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Je()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Ie === e &&
			(_e & n) === n &&
			(Ne === 4 ||
			(Ne === 3 && (_e & 130023424) === _e && 500 > Se() - jf)
				? ti(e, 0)
				: (Nf |= n)),
		ft(e, t);
}
function ov(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = ta), (ta <<= 1), !(ta & 130023424) && (ta = 4194304))
			: (t = 1));
	var n = Je();
	(e = In(e, t)), e !== null && (Fo(e, t, n), ft(e, n));
}
function eT(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), ov(e, n);
}
function tT(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(O(314));
	}
	r !== null && r.delete(t), ov(e, n);
}
var av;
av = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (ut = !1), $S(e, t, n);
			ut = !!(e.flags & 131072);
		}
	else (ut = !1), he && t.flags & 1048576 && d0(t, dl, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			La(e, t), (e = t.pendingProps);
			var i = is(t, Ke.current);
			Gi(t, n), (i = Cf(null, t, r, e, i, n));
			var s = Af();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  dt(r) ? ((s = !0), ul(t)) : (s = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0
								? i.state
								: null),
					  wf(t),
					  (i.updater = Gl),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Wc(t, r, e, n),
					  (t = Qc(null, t, r, !0, s, n)))
					: ((t.tag = 0),
					  he && s && hf(t),
					  Qe(null, t, i, n),
					  (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(La(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = rT(r)),
					(e = Ht(r, e)),
					i)
				) {
					case 0:
						t = Yc(null, t, r, e, n);
						break e;
					case 1:
						t = Lp(null, t, r, e, n);
						break e;
					case 11:
						t = Np(null, t, r, e, n);
						break e;
					case 14:
						t = jp(null, t, r, Ht(r.type, e), n);
						break e;
				}
				throw Error(O(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ht(r, i)),
				Yc(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ht(r, i)),
				Lp(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((H0(t), e === null)) throw Error(O(387));
				(r = t.pendingProps),
					(s = t.memoizedState),
					(i = s.element),
					y0(e, t),
					pl(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries:
								o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = s),
						(t.memoizedState = s),
						t.flags & 256)
					) {
						(i = ls(Error(O(423)), t)), (t = Dp(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = ls(Error(O(424)), t)), (t = Dp(e, t, r, n, i));
						break e;
					} else
						for (
							xt = gr(t.stateNode.containerInfo.firstChild),
								wt = t,
								he = !0,
								Xt = null,
								n = m0(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((ss(), r === i)) {
						t = On(e, t, n);
						break e;
					}
					Qe(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				v0(t),
				e === null && zc(t),
				(r = t.type),
				(i = t.pendingProps),
				(s = e !== null ? e.memoizedProps : null),
				(o = i.children),
				Vc(r, i)
					? (o = null)
					: s !== null && Vc(r, s) && (t.flags |= 32),
				z0(e, t),
				Qe(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && zc(t), null;
		case 13:
			return G0(e, t, n);
		case 4:
			return (
				bf(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = os(t, null, r, n)) : Qe(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ht(r, i)),
				Np(e, t, r, i, n)
			);
		case 7:
			return Qe(e, t, t.pendingProps, n), t.child;
		case 8:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(s = t.memoizedProps),
					(o = i.value),
					ae(fl, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (tn(s.value, o)) {
						if (s.children === i.children && !ct.current) {
							t = On(e, t, n);
							break e;
						}
					} else
						for (
							s = t.child, s !== null && (s.return = t);
							s !== null;

						) {
							var a = s.dependencies;
							if (a !== null) {
								o = s.child;
								for (var l = a.firstContext; l !== null; ) {
									if (l.context === r) {
										if (s.tag === 1) {
											(l = jn(-1, n & -n)), (l.tag = 2);
											var u = s.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (l.next = l)
													: ((l.next = c.next),
													  (c.next = l)),
													(u.pending = l);
											}
										}
										(s.lanes |= n),
											(l = s.alternate),
											l !== null && (l.lanes |= n),
											Hc(s.return, n, t),
											(a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (s.tag === 10)
								o = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null))
									throw Error(O(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									Hc(o, n, t),
									(o = s.sibling);
							} else o = s.child;
							if (o !== null) o.return = s;
							else
								for (o = s; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((s = o.sibling), s !== null)) {
										(s.return = o.return), (o = s);
										break;
									}
									o = o.return;
								}
							s = o;
						}
				Qe(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Gi(t, n),
				(i = jt(i)),
				(r = r(i)),
				(t.flags |= 1),
				Qe(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Ht(r, t.pendingProps)),
				(i = Ht(r.type, i)),
				jp(e, t, r, i, n)
			);
		case 15:
			return U0(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ht(r, i)),
				La(e, t),
				(t.tag = 1),
				dt(r) ? ((e = !0), ul(t)) : (e = !1),
				Gi(t, n),
				V0(t, r, i),
				Wc(t, r, i, n),
				Qc(null, t, r, !0, e, n)
			);
		case 19:
			return W0(e, t, n);
		case 22:
			return $0(e, t, n);
	}
	throw Error(O(156, t.tag));
};
function lv(e, t) {
	return Iy(e, t);
}
function nT(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function kt(e, t, n, r) {
	return new nT(e, t, n, r);
}
function Of(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rT(e) {
	if (typeof e == "function") return Of(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === ef)) return 11;
		if (e === tf) return 14;
	}
	return 2;
}
function wr(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = kt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Oa(e, t, n, r, i, s) {
	var o = 2;
	if (((r = e), typeof e == "function")) Of(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else
		e: switch (e) {
			case Pi:
				return ni(n.children, i, s, t);
			case Jd:
				(o = 8), (i |= 8);
				break;
			case gc:
				return (
					(e = kt(12, n, t, i | 2)),
					(e.elementType = gc),
					(e.lanes = s),
					e
				);
			case yc:
				return (
					(e = kt(13, n, t, i)),
					(e.elementType = yc),
					(e.lanes = s),
					e
				);
			case vc:
				return (
					(e = kt(19, n, t, i)),
					(e.elementType = vc),
					(e.lanes = s),
					e
				);
			case vy:
				return Yl(n, i, s, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case gy:
							o = 10;
							break e;
						case yy:
							o = 9;
							break e;
						case ef:
							o = 11;
							break e;
						case tf:
							o = 14;
							break e;
						case tr:
							(o = 16), (r = null);
							break e;
					}
				throw Error(O(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = kt(o, n, t, i)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = s),
		t
	);
}
function ni(e, t, n, r) {
	return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Yl(e, t, n, r) {
	return (
		(e = kt(22, e, r, t)),
		(e.elementType = vy),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Hu(e, t, n) {
	return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function Gu(e, t, n) {
	return (
		(t = kt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function iT(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Cu(0)),
		(this.expirationTimes = Cu(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Cu(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Ff(e, t, n, r, i, s, o, a, l) {
	return (
		(e = new iT(e, t, n, a, l)),
		t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
		(s = kt(3, null, null, t)),
		(e.current = s),
		(s.stateNode = e),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		wf(s),
		e
	);
}
function sT(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Ai,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function uv(e) {
	if (!e) return Sr;
	e = e._reactInternals;
	e: {
		if (fi(e) !== e || e.tag !== 1) throw Error(O(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (dt(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(O(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (dt(n)) return u0(e, n, t);
	}
	return t;
}
function cv(e, t, n, r, i, s, o, a, l) {
	return (
		(e = Ff(n, r, !0, e, i, s, o, a, l)),
		(e.context = uv(null)),
		(n = e.current),
		(r = Je()),
		(i = xr(n)),
		(s = jn(r, i)),
		(s.callback = t != null ? t : null),
		yr(n, s, i),
		(e.current.lanes = i),
		Fo(e, i, r),
		ft(e, r),
		e
	);
}
function Ql(e, t, n, r) {
	var i = t.current,
		s = Je(),
		o = xr(i);
	return (
		(n = uv(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = jn(s, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = yr(i, t, o)),
		e !== null && (Jt(e, i, o, s), Ma(e, i, o)),
		o
	);
}
function Sl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Hp(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Vf(e, t) {
	Hp(e, t), (e = e.alternate) && Hp(e, t);
}
function oT() {
	return null;
}
var dv =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function _f(e) {
	this._internalRoot = e;
}
Xl.prototype.render = _f.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(O(409));
	Ql(e, t, null, null);
};
Xl.prototype.unmount = _f.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		ui(function () {
			Ql(null, e, null, null);
		}),
			(t[Dn] = null);
	}
};
function Xl(e) {
	this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = $y();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < rr.length && t !== 0 && t < rr[n].priority; n++);
		rr.splice(n, 0, e), n === 0 && Hy(e);
	}
};
function Bf(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ql(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Gp() {}
function aT(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var s = r;
			r = function () {
				var u = Sl(o);
				s.call(u);
			};
		}
		var o = cv(t, r, e, 0, null, !1, !1, "", Gp);
		return (
			(e._reactRootContainer = o),
			(e[Dn] = o.current),
			yo(e.nodeType === 8 ? e.parentNode : e),
			ui(),
			o
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = Sl(l);
			a.call(u);
		};
	}
	var l = Ff(e, 0, !1, null, null, !1, !1, "", Gp);
	return (
		(e._reactRootContainer = l),
		(e[Dn] = l.current),
		yo(e.nodeType === 8 ? e.parentNode : e),
		ui(function () {
			Ql(t, l, n, r);
		}),
		l
	);
}
function Zl(e, t, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var l = Sl(o);
				a.call(l);
			};
		}
		Ql(t, o, e, i);
	} else o = aT(n, t, e, i, r);
	return Sl(o);
}
By = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = $s(t.pendingLanes);
				n !== 0 &&
					(sf(t, n | 1),
					ft(t, Se()),
					!(te & 6) && ((us = Se() + 500), Nr()));
			}
			break;
		case 13:
			ui(function () {
				var r = In(e, 1);
				if (r !== null) {
					var i = Je();
					Jt(r, e, 1, i);
				}
			}),
				Vf(e, 1);
	}
};
of = function (e) {
	if (e.tag === 13) {
		var t = In(e, 134217728);
		if (t !== null) {
			var n = Je();
			Jt(t, e, 134217728, n);
		}
		Vf(e, 134217728);
	}
};
Uy = function (e) {
	if (e.tag === 13) {
		var t = xr(e),
			n = In(e, t);
		if (n !== null) {
			var r = Je();
			Jt(n, e, t, r);
		}
		Vf(e, t);
	}
};
$y = function () {
	return re;
};
zy = function (e, t) {
	var n = re;
	try {
		return (re = e), t();
	} finally {
		re = n;
	}
};
kc = function (e, t, n) {
	switch (t) {
		case "input":
			if ((bc(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" +
							JSON.stringify("" + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = $l(r);
						if (!i) throw Error(O(90));
						wy(r), bc(r, i);
					}
				}
			}
			break;
		case "textarea":
			Sy(e, n);
			break;
		case "select":
			(t = n.value), t != null && Ui(e, !!n.multiple, t, !1);
	}
};
Ry = Lf;
My = ui;
var lT = { usingClientEntryPoint: !1, Events: [_o, Ni, $l, Py, ky, Lf] },
	Ls = {
		findFiberByHostInstance: Hr,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	uT = {
		bundleType: Ls.bundleType,
		version: Ls.version,
		rendererPackageName: Ls.rendererPackageName,
		rendererConfig: Ls.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: _n.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Ly(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Ls.findFiberByHostInstance || oT,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!fa.isDisabled && fa.supportsFiber)
		try {
			(Vl = fa.inject(uT)), (gn = fa);
		} catch (e) {}
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lT;
Tt.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Bf(t)) throw Error(O(200));
	return sT(e, t, null, n);
};
Tt.createRoot = function (e, t) {
	if (!Bf(e)) throw Error(O(299));
	var n = !1,
		r = "",
		i = dv;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Ff(e, 1, !1, null, null, n, !1, r, i)),
		(e[Dn] = t.current),
		yo(e.nodeType === 8 ? e.parentNode : e),
		new _f(t)
	);
};
Tt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(O(188))
			: ((e = Object.keys(e).join(",")), Error(O(268, e)));
	return (e = Ly(t)), (e = e === null ? null : e.stateNode), e;
};
Tt.flushSync = function (e) {
	return ui(e);
};
Tt.hydrate = function (e, t, n) {
	if (!ql(t)) throw Error(O(200));
	return Zl(null, e, t, !0, n);
};
Tt.hydrateRoot = function (e, t, n) {
	if (!Bf(e)) throw Error(O(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = "",
		o = dv;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = cv(t, null, e, 1, n != null ? n : null, i, !1, s, o)),
		(e[Dn] = t.current),
		yo(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new Xl(t);
};
Tt.render = function (e, t, n) {
	if (!ql(t)) throw Error(O(200));
	return Zl(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function (e) {
	if (!ql(e)) throw Error(O(40));
	return e._reactRootContainer
		? (ui(function () {
				Zl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Dn] = null);
				});
		  }),
		  !0)
		: !1;
};
Tt.unstable_batchedUpdates = Lf;
Tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!ql(n)) throw Error(O(200));
	if (e == null || e._reactInternals === void 0) throw Error(O(38));
	return Zl(e, t, n, !1, r);
};
Tt.version = "18.3.1-next-f1338f8080-20240426";
function fv() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv);
		} catch (e) {
			console.error(e);
		}
}
fv(), (fy.exports = Tt);
var Uo = fy.exports;
const hv = ey(Uo);
var pv,
	Wp = Uo;
(pv = Wp.createRoot), Wp.hydrateRoot;
var Jl = class {
		constructor() {
			(this.listeners = new Set()),
				(this.subscribe = this.subscribe.bind(this));
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					this.listeners.delete(e), this.onUnsubscribe();
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	eu = typeof window > "u" || "Deno" in globalThis;
function Gt() {}
function cT(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function dT(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function fT(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function ad(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function hT(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Kp(e, t) {
	const {
		type: n = "all",
		exact: r,
		fetchStatus: i,
		predicate: s,
		queryKey: o,
		stale: a,
	} = e;
	if (o) {
		if (r) {
			if (t.queryHash !== Uf(o, t.options)) return !1;
		} else if (!Po(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		const l = t.isActive();
		if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
	}
	return !(
		(typeof a == "boolean" && t.isStale() !== a) ||
		(i && i !== t.state.fetchStatus) ||
		(s && !s(t))
	);
}
function Yp(e, t) {
	const { exact: n, status: r, predicate: i, mutationKey: s } = e;
	if (s) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Ao(t.options.mutationKey) !== Ao(s)) return !1;
		} else if (!Po(t.options.mutationKey, s)) return !1;
	}
	return !((r && t.state.status !== r) || (i && !i(t)));
}
function Uf(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || Ao)(e);
}
function Ao(e) {
	return JSON.stringify(e, (t, n) =>
		ld(n)
			? Object.keys(n)
					.sort()
					.reduce((r, i) => ((r[i] = n[i]), r), {})
			: n
	);
}
function Po(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
		? !1
		: e && t && typeof e == "object" && typeof t == "object"
		? Object.keys(t).every((n) => Po(e[n], t[n]))
		: !1;
}
function mv(e, t) {
	if (e === t) return e;
	const n = Qp(e) && Qp(t);
	if (n || (ld(e) && ld(t))) {
		const r = n ? e : Object.keys(e),
			i = r.length,
			s = n ? t : Object.keys(t),
			o = s.length,
			a = n ? [] : {},
			l = new Set(r);
		let u = 0;
		for (let c = 0; c < o; c++) {
			const d = n ? c : s[c];
			((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
				? ((a[d] = void 0), u++)
				: ((a[d] = mv(e[d], t[d])),
				  a[d] === e[d] && e[d] !== void 0 && u++);
		}
		return i === o && u === i ? e : a;
	}
	return t;
}
function Qp(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ld(e) {
	if (!Xp(e)) return !1;
	const t = e.constructor;
	if (t === void 0) return !0;
	const n = t.prototype;
	return !(
		!Xp(n) ||
		!n.hasOwnProperty("isPrototypeOf") ||
		Object.getPrototypeOf(e) !== Object.prototype
	);
}
function Xp(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function pT(e) {
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
function mT(e, t, n) {
	return typeof n.structuralSharing == "function"
		? n.structuralSharing(e, t)
		: n.structuralSharing !== !1
		? mv(e, t)
		: t;
}
function gT(e, t, n = 0) {
	const r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function yT(e, t, n = 0) {
	const r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var $f = Symbol();
function gv(e, t) {
	return !e.queryFn && t != null && t.initialPromise
		? () => t.initialPromise
		: !e.queryFn || e.queryFn === $f
		? () =>
				Promise.reject(
					new Error("Missing queryFn: '".concat(e.queryHash, "'"))
				)
		: e.queryFn;
}
var Qr,
	sr,
	Qi,
	Wg,
	vT =
		((Wg = class extends Jl {
			constructor() {
				super();
				ne(this, Qr);
				ne(this, sr);
				ne(this, Qi);
				q(this, Qi, (t) => {
					if (!eu && window.addEventListener) {
						const n = () => t();
						return (
							window.addEventListener("visibilitychange", n, !1),
							() => {
								window.removeEventListener(
									"visibilitychange",
									n
								);
							}
						);
					}
				});
			}
			onSubscribe() {
				M(this, sr) || this.setEventListener(M(this, Qi));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() ||
					((t = M(this, sr)) == null || t.call(this),
					q(this, sr, void 0));
			}
			setEventListener(t) {
				var n;
				q(this, Qi, t),
					(n = M(this, sr)) == null || n.call(this),
					q(
						this,
						sr,
						t((r) => {
							typeof r == "boolean"
								? this.setFocused(r)
								: this.onFocus();
						})
					);
			}
			setFocused(t) {
				M(this, Qr) !== t && (q(this, Qr, t), this.onFocus());
			}
			onFocus() {
				const t = this.isFocused();
				this.listeners.forEach((n) => {
					n(t);
				});
			}
			isFocused() {
				var t;
				return typeof M(this, Qr) == "boolean"
					? M(this, Qr)
					: ((t = globalThis.document) == null
							? void 0
							: t.visibilityState) !== "hidden";
			}
		}),
		(Qr = new WeakMap()),
		(sr = new WeakMap()),
		(Qi = new WeakMap()),
		Wg),
	yv = new vT(),
	Xi,
	or,
	qi,
	Kg,
	xT =
		((Kg = class extends Jl {
			constructor() {
				super();
				ne(this, Xi, !0);
				ne(this, or);
				ne(this, qi);
				q(this, qi, (t) => {
					if (!eu && window.addEventListener) {
						const n = () => t(!0),
							r = () => t(!1);
						return (
							window.addEventListener("online", n, !1),
							window.addEventListener("offline", r, !1),
							() => {
								window.removeEventListener("online", n),
									window.removeEventListener("offline", r);
							}
						);
					}
				});
			}
			onSubscribe() {
				M(this, or) || this.setEventListener(M(this, qi));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() ||
					((t = M(this, or)) == null || t.call(this),
					q(this, or, void 0));
			}
			setEventListener(t) {
				var n;
				q(this, qi, t),
					(n = M(this, or)) == null || n.call(this),
					q(this, or, t(this.setOnline.bind(this)));
			}
			setOnline(t) {
				M(this, Xi) !== t &&
					(q(this, Xi, t),
					this.listeners.forEach((r) => {
						r(t);
					}));
			}
			isOnline() {
				return M(this, Xi);
			}
		}),
		(Xi = new WeakMap()),
		(or = new WeakMap()),
		(qi = new WeakMap()),
		Kg),
	Tl = new xT();
function wT() {
	let e, t;
	const n = new Promise((i, s) => {
		(e = i), (t = s);
	});
	(n.status = "pending"), n.catch(() => {});
	function r(i) {
		Object.assign(n, i), delete n.resolve, delete n.reject;
	}
	return (
		(n.resolve = (i) => {
			r({ status: "fulfilled", value: i }), e(i);
		}),
		(n.reject = (i) => {
			r({ status: "rejected", reason: i }), t(i);
		}),
		n
	);
}
function bT(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function vv(e) {
	return (e != null ? e : "online") === "online" ? Tl.isOnline() : !0;
}
var xv = class extends Error {
	constructor(e) {
		super("CancelledError"),
			(this.revert = e == null ? void 0 : e.revert),
			(this.silent = e == null ? void 0 : e.silent);
	}
};
function Wu(e) {
	return e instanceof xv;
}
function wv(e) {
	let t = !1,
		n = 0,
		r = !1,
		i;
	const s = wT(),
		o = (y) => {
			var x;
			r || (f(new xv(y)), (x = e.abort) == null || x.call(e));
		},
		a = () => {
			t = !0;
		},
		l = () => {
			t = !1;
		},
		u = () =>
			yv.isFocused() &&
			(e.networkMode === "always" || Tl.isOnline()) &&
			e.canRun(),
		c = () => vv(e.networkMode) && e.canRun(),
		d = (y) => {
			var x;
			r ||
				((r = !0),
				(x = e.onSuccess) == null || x.call(e, y),
				i == null || i(),
				s.resolve(y));
		},
		f = (y) => {
			var x;
			r ||
				((r = !0),
				(x = e.onError) == null || x.call(e, y),
				i == null || i(),
				s.reject(y));
		},
		h = () =>
			new Promise((y) => {
				var x;
				(i = (m) => {
					(r || u()) && y(m);
				}),
					(x = e.onPause) == null || x.call(e);
			}).then(() => {
				var y;
				(i = void 0), r || (y = e.onContinue) == null || y.call(e);
			}),
		g = () => {
			if (r) return;
			let y;
			const x = n === 0 ? e.initialPromise : void 0;
			try {
				y = x != null ? x : e.fn();
			} catch (m) {
				y = Promise.reject(m);
			}
			Promise.resolve(y)
				.then(d)
				.catch((m) => {
					var E, A, C;
					if (r) return;
					const p = (E = e.retry) != null ? E : eu ? 0 : 3,
						v = (A = e.retryDelay) != null ? A : bT,
						S = typeof v == "function" ? v(n, m) : v,
						T =
							p === !0 ||
							(typeof p == "number" && n < p) ||
							(typeof p == "function" && p(n, m));
					if (t || !T) {
						f(m);
						return;
					}
					n++,
						(C = e.onFail) == null || C.call(e, n, m),
						pT(S)
							.then(() => (u() ? void 0 : h()))
							.then(() => {
								t ? f(m) : g();
							});
				});
		};
	return {
		promise: s,
		cancel: o,
		continue: () => (i == null || i(), s),
		cancelRetry: a,
		continueRetry: l,
		canStart: c,
		start: () => (c() ? g() : h().then(g), s),
	};
}
var ST = (e) => setTimeout(e, 0);
function TT() {
	let e = [],
		t = 0,
		n = (a) => {
			a();
		},
		r = (a) => {
			a();
		},
		i = ST;
	const s = (a) => {
			t
				? e.push(a)
				: i(() => {
						n(a);
				  });
		},
		o = () => {
			const a = e;
			(e = []),
				a.length &&
					i(() => {
						r(() => {
							a.forEach((l) => {
								n(l);
							});
						});
					});
		};
	return {
		batch: (a) => {
			let l;
			t++;
			try {
				l = a();
			} finally {
				t--, t || o();
			}
			return l;
		},
		batchCalls:
			(a) =>
			(...l) => {
				s(() => {
					a(...l);
				});
			},
		schedule: s,
		setNotifyFunction: (a) => {
			n = a;
		},
		setBatchNotifyFunction: (a) => {
			r = a;
		},
		setScheduler: (a) => {
			i = a;
		},
	};
}
var Xe = TT(),
	Xr,
	Yg,
	bv =
		((Yg = class {
			constructor() {
				ne(this, Xr);
			}
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout(),
					dT(this.gcTime) &&
						q(
							this,
							Xr,
							setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime)
						);
			}
			updateGcTime(e) {
				this.gcTime = Math.max(
					this.gcTime || 0,
					e != null ? e : eu ? 1 / 0 : 5 * 60 * 1e3
				);
			}
			clearGcTimeout() {
				M(this, Xr) && (clearTimeout(M(this, Xr)), q(this, Xr, void 0));
			}
		}),
		(Xr = new WeakMap()),
		Yg),
	Zi,
	qr,
	Ct,
	Zr,
	Ge,
	Do,
	Jr,
	Wt,
	An,
	Qg,
	ET =
		((Qg = class extends bv {
			constructor(t) {
				var n;
				super();
				ne(this, Wt);
				ne(this, Zi);
				ne(this, qr);
				ne(this, Ct);
				ne(this, Zr);
				ne(this, Ge);
				ne(this, Do);
				ne(this, Jr);
				q(this, Jr, !1),
					q(this, Do, t.defaultOptions),
					this.setOptions(t.options),
					(this.observers = []),
					q(this, Zr, t.client),
					q(this, Ct, M(this, Zr).getQueryCache()),
					(this.queryKey = t.queryKey),
					(this.queryHash = t.queryHash),
					q(this, Zi, AT(this.options)),
					(this.state = (n = t.state) != null ? n : M(this, Zi)),
					this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				var t;
				return (t = M(this, Ge)) == null ? void 0 : t.promise;
			}
			setOptions(t) {
				(this.options = { ...M(this, Do), ...t }),
					this.updateGcTime(this.options.gcTime);
			}
			optionalRemove() {
				!this.observers.length &&
					this.state.fetchStatus === "idle" &&
					M(this, Ct).remove(this);
			}
			setData(t, n) {
				const r = mT(this.state.data, t, this.options);
				return (
					$e(this, Wt, An).call(this, {
						data: r,
						type: "success",
						dataUpdatedAt: n == null ? void 0 : n.updatedAt,
						manual: n == null ? void 0 : n.manual,
					}),
					r
				);
			}
			setState(t, n) {
				$e(this, Wt, An).call(this, {
					type: "setState",
					state: t,
					setStateOptions: n,
				});
			}
			cancel(t) {
				var r, i;
				const n = (r = M(this, Ge)) == null ? void 0 : r.promise;
				return (
					(i = M(this, Ge)) == null || i.cancel(t),
					n ? n.then(Gt).catch(Gt) : Promise.resolve()
				);
			}
			destroy() {
				super.destroy(), this.cancel({ silent: !0 });
			}
			reset() {
				this.destroy(), this.setState(M(this, Zi));
			}
			isActive() {
				return this.observers.some(
					(t) => hT(t.options.enabled, this) !== !1
				);
			}
			isDisabled() {
				return this.getObserversCount() > 0
					? !this.isActive()
					: this.options.queryFn === $f ||
							this.state.dataUpdateCount +
								this.state.errorUpdateCount ===
								0;
			}
			isStatic() {
				return this.getObserversCount() > 0
					? this.observers.some(
							(t) => ad(t.options.staleTime, this) === "static"
					  )
					: !1;
			}
			isStale() {
				return this.getObserversCount() > 0
					? this.observers.some((t) => t.getCurrentResult().isStale)
					: this.state.data === void 0 || this.state.isInvalidated;
			}
			isStaleByTime(t = 0) {
				return this.state.data === void 0
					? !0
					: t === "static"
					? !1
					: this.state.isInvalidated
					? !0
					: !fT(this.state.dataUpdatedAt, t);
			}
			onFocus() {
				var n;
				const t = this.observers.find((r) =>
					r.shouldFetchOnWindowFocus()
				);
				t == null || t.refetch({ cancelRefetch: !1 }),
					(n = M(this, Ge)) == null || n.continue();
			}
			onOnline() {
				var n;
				const t = this.observers.find((r) =>
					r.shouldFetchOnReconnect()
				);
				t == null || t.refetch({ cancelRefetch: !1 }),
					(n = M(this, Ge)) == null || n.continue();
			}
			addObserver(t) {
				this.observers.includes(t) ||
					(this.observers.push(t),
					this.clearGcTimeout(),
					M(this, Ct).notify({
						type: "observerAdded",
						query: this,
						observer: t,
					}));
			}
			removeObserver(t) {
				this.observers.includes(t) &&
					((this.observers = this.observers.filter((n) => n !== t)),
					this.observers.length ||
						(M(this, Ge) &&
							(M(this, Jr)
								? M(this, Ge).cancel({ revert: !0 })
								: M(this, Ge).cancelRetry()),
						this.scheduleGc()),
					M(this, Ct).notify({
						type: "observerRemoved",
						query: this,
						observer: t,
					}));
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				this.state.isInvalidated ||
					$e(this, Wt, An).call(this, { type: "invalidate" });
			}
			fetch(t, n) {
				var u, c, d;
				if (this.state.fetchStatus !== "idle") {
					if (
						this.state.data !== void 0 &&
						n != null &&
						n.cancelRefetch
					)
						this.cancel({ silent: !0 });
					else if (M(this, Ge))
						return M(this, Ge).continueRetry(), M(this, Ge).promise;
				}
				if ((t && this.setOptions(t), !this.options.queryFn)) {
					const f = this.observers.find((h) => h.options.queryFn);
					f && this.setOptions(f.options);
				}
				const r = new AbortController(),
					i = (f) => {
						Object.defineProperty(f, "signal", {
							enumerable: !0,
							get: () => (q(this, Jr, !0), r.signal),
						});
					},
					s = () => {
						const f = gv(this.options, n),
							g = (() => {
								const y = {
									client: M(this, Zr),
									queryKey: this.queryKey,
									meta: this.meta,
								};
								return i(y), y;
							})();
						return (
							q(this, Jr, !1),
							this.options.persister
								? this.options.persister(f, g, this)
								: f(g)
						);
					},
					a = (() => {
						const f = {
							fetchOptions: n,
							options: this.options,
							queryKey: this.queryKey,
							client: M(this, Zr),
							state: this.state,
							fetchFn: s,
						};
						return i(f), f;
					})();
				(u = this.options.behavior) == null || u.onFetch(a, this),
					q(this, qr, this.state),
					(this.state.fetchStatus === "idle" ||
						this.state.fetchMeta !==
							((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
						$e(this, Wt, An).call(this, {
							type: "fetch",
							meta:
								(d = a.fetchOptions) == null ? void 0 : d.meta,
						});
				const l = (f) => {
					var h, g, y, x;
					(Wu(f) && f.silent) ||
						$e(this, Wt, An).call(this, {
							type: "error",
							error: f,
						}),
						Wu(f) ||
							((g = (h = M(this, Ct).config).onError) == null ||
								g.call(h, f, this),
							(x = (y = M(this, Ct).config).onSettled) == null ||
								x.call(y, this.state.data, f, this)),
						this.scheduleGc();
				};
				return (
					q(
						this,
						Ge,
						wv({
							initialPromise:
								n == null ? void 0 : n.initialPromise,
							fn: a.fetchFn,
							abort: r.abort.bind(r),
							onSuccess: (f) => {
								var h, g, y, x;
								if (f === void 0) {
									l(
										new Error(
											"".concat(
												this.queryHash,
												" data is undefined"
											)
										)
									);
									return;
								}
								try {
									this.setData(f);
								} catch (m) {
									l(m);
									return;
								}
								(g = (h = M(this, Ct).config).onSuccess) ==
									null || g.call(h, f, this),
									(x = (y = M(this, Ct).config).onSettled) ==
										null ||
										x.call(y, f, this.state.error, this),
									this.scheduleGc();
							},
							onError: l,
							onFail: (f, h) => {
								$e(this, Wt, An).call(this, {
									type: "failed",
									failureCount: f,
									error: h,
								});
							},
							onPause: () => {
								$e(this, Wt, An).call(this, { type: "pause" });
							},
							onContinue: () => {
								$e(this, Wt, An).call(this, {
									type: "continue",
								});
							},
							retry: a.options.retry,
							retryDelay: a.options.retryDelay,
							networkMode: a.options.networkMode,
							canRun: () => !0,
						})
					),
					M(this, Ge).start()
				);
			}
		}),
		(Zi = new WeakMap()),
		(qr = new WeakMap()),
		(Ct = new WeakMap()),
		(Zr = new WeakMap()),
		(Ge = new WeakMap()),
		(Do = new WeakMap()),
		(Jr = new WeakMap()),
		(Wt = new WeakSet()),
		(An = function (t) {
			const n = (r) => {
				var i, s;
				switch (t.type) {
					case "failed":
						return {
							...r,
							fetchFailureCount: t.failureCount,
							fetchFailureReason: t.error,
						};
					case "pause":
						return { ...r, fetchStatus: "paused" };
					case "continue":
						return { ...r, fetchStatus: "fetching" };
					case "fetch":
						return {
							...r,
							...CT(r.data, this.options),
							fetchMeta: (i = t.meta) != null ? i : null,
						};
					case "success":
						return (
							q(this, qr, void 0),
							{
								...r,
								data: t.data,
								dataUpdateCount: r.dataUpdateCount + 1,
								dataUpdatedAt:
									(s = t.dataUpdatedAt) != null
										? s
										: Date.now(),
								error: null,
								isInvalidated: !1,
								status: "success",
								...(!t.manual && {
									fetchStatus: "idle",
									fetchFailureCount: 0,
									fetchFailureReason: null,
								}),
							}
						);
					case "error":
						const o = t.error;
						return Wu(o) && o.revert && M(this, qr)
							? { ...M(this, qr), fetchStatus: "idle" }
							: {
									...r,
									error: o,
									errorUpdateCount: r.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: r.fetchFailureCount + 1,
									fetchFailureReason: o,
									fetchStatus: "idle",
									status: "error",
							  };
					case "invalidate":
						return { ...r, isInvalidated: !0 };
					case "setState":
						return { ...r, ...t.state };
				}
			};
			(this.state = n(this.state)),
				Xe.batch(() => {
					this.observers.forEach((r) => {
						r.onQueryUpdate();
					}),
						M(this, Ct).notify({
							query: this,
							type: "updated",
							action: t,
						});
				});
		}),
		Qg);
function CT(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: vv(t.networkMode) ? "fetching" : "paused",
		...(e === void 0 && { error: null, status: "pending" }),
	};
}
function AT(e) {
	const t =
			typeof e.initialData == "function"
				? e.initialData()
				: e.initialData,
		n = t !== void 0,
		r = n
			? typeof e.initialDataUpdatedAt == "function"
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? (r != null ? r : Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle",
	};
}
var cn,
	Xg,
	PT =
		((Xg = class extends Jl {
			constructor(t = {}) {
				super();
				ne(this, cn);
				(this.config = t), q(this, cn, new Map());
			}
			build(t, n, r) {
				var a;
				const i = n.queryKey,
					s = (a = n.queryHash) != null ? a : Uf(i, n);
				let o = this.get(s);
				return (
					o ||
						((o = new ET({
							client: t,
							queryKey: i,
							queryHash: s,
							options: t.defaultQueryOptions(n),
							state: r,
							defaultOptions: t.getQueryDefaults(i),
						})),
						this.add(o)),
					o
				);
			}
			add(t) {
				M(this, cn).has(t.queryHash) ||
					(M(this, cn).set(t.queryHash, t),
					this.notify({ type: "added", query: t }));
			}
			remove(t) {
				const n = M(this, cn).get(t.queryHash);
				n &&
					(t.destroy(),
					n === t && M(this, cn).delete(t.queryHash),
					this.notify({ type: "removed", query: t }));
			}
			clear() {
				Xe.batch(() => {
					this.getAll().forEach((t) => {
						this.remove(t);
					});
				});
			}
			get(t) {
				return M(this, cn).get(t);
			}
			getAll() {
				return [...M(this, cn).values()];
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find((r) => Kp(n, r));
			}
			findAll(t = {}) {
				const n = this.getAll();
				return Object.keys(t).length > 0
					? n.filter((r) => Kp(t, r))
					: n;
			}
			notify(t) {
				Xe.batch(() => {
					this.listeners.forEach((n) => {
						n(t);
					});
				});
			}
			onFocus() {
				Xe.batch(() => {
					this.getAll().forEach((t) => {
						t.onFocus();
					});
				});
			}
			onOnline() {
				Xe.batch(() => {
					this.getAll().forEach((t) => {
						t.onOnline();
					});
				});
			}
		}),
		(cn = new WeakMap()),
		Xg),
	dn,
	Ye,
	ei,
	fn,
	Qn,
	qg,
	kT =
		((qg = class extends bv {
			constructor(t) {
				super();
				ne(this, fn);
				ne(this, dn);
				ne(this, Ye);
				ne(this, ei);
				(this.mutationId = t.mutationId),
					q(this, Ye, t.mutationCache),
					q(this, dn, []),
					(this.state = t.state || RT()),
					this.setOptions(t.options),
					this.scheduleGc();
			}
			setOptions(t) {
				(this.options = t), this.updateGcTime(this.options.gcTime);
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(t) {
				M(this, dn).includes(t) ||
					(M(this, dn).push(t),
					this.clearGcTimeout(),
					M(this, Ye).notify({
						type: "observerAdded",
						mutation: this,
						observer: t,
					}));
			}
			removeObserver(t) {
				q(
					this,
					dn,
					M(this, dn).filter((n) => n !== t)
				),
					this.scheduleGc(),
					M(this, Ye).notify({
						type: "observerRemoved",
						mutation: this,
						observer: t,
					});
			}
			optionalRemove() {
				M(this, dn).length ||
					(this.state.status === "pending"
						? this.scheduleGc()
						: M(this, Ye).remove(this));
			}
			continue() {
				var t, n;
				return (n =
					(t = M(this, ei)) == null ? void 0 : t.continue()) != null
					? n
					: this.execute(this.state.variables);
			}
			async execute(t) {
				var s,
					o,
					a,
					l,
					u,
					c,
					d,
					f,
					h,
					g,
					y,
					x,
					m,
					p,
					v,
					S,
					T,
					E,
					A,
					C,
					N;
				const n = () => {
					$e(this, fn, Qn).call(this, { type: "continue" });
				};
				q(
					this,
					ei,
					wv({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t)
								: Promise.reject(
										new Error("No mutationFn found")
								  ),
						onFail: (P, F) => {
							$e(this, fn, Qn).call(this, {
								type: "failed",
								failureCount: P,
								error: F,
							});
						},
						onPause: () => {
							$e(this, fn, Qn).call(this, { type: "pause" });
						},
						onContinue: n,
						retry: (s = this.options.retry) != null ? s : 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => M(this, Ye).canRun(this),
					})
				);
				const r = this.state.status === "pending",
					i = !M(this, ei).canStart();
				try {
					if (r) n();
					else {
						$e(this, fn, Qn).call(this, {
							type: "pending",
							variables: t,
							isPaused: i,
						}),
							await ((a = (o = M(this, Ye).config).onMutate) ==
							null
								? void 0
								: a.call(o, t, this));
						const F = await ((u = (l = this.options).onMutate) ==
						null
							? void 0
							: u.call(l, t));
						F !== this.state.context &&
							$e(this, fn, Qn).call(this, {
								type: "pending",
								context: F,
								variables: t,
								isPaused: i,
							});
					}
					const P = await M(this, ei).start();
					return (
						await ((d = (c = M(this, Ye).config).onSuccess) == null
							? void 0
							: d.call(c, P, t, this.state.context, this)),
						await ((h = (f = this.options).onSuccess) == null
							? void 0
							: h.call(f, P, t, this.state.context)),
						await ((y = (g = M(this, Ye).config).onSettled) == null
							? void 0
							: y.call(
									g,
									P,
									null,
									this.state.variables,
									this.state.context,
									this
							  )),
						await ((m = (x = this.options).onSettled) == null
							? void 0
							: m.call(x, P, null, t, this.state.context)),
						$e(this, fn, Qn).call(this, {
							type: "success",
							data: P,
						}),
						P
					);
				} catch (P) {
					try {
						throw (
							(await ((v = (p = M(this, Ye).config).onError) ==
							null
								? void 0
								: v.call(p, P, t, this.state.context, this)),
							await ((T = (S = this.options).onError) == null
								? void 0
								: T.call(S, P, t, this.state.context)),
							await ((A = (E = M(this, Ye).config).onSettled) ==
							null
								? void 0
								: A.call(
										E,
										void 0,
										P,
										this.state.variables,
										this.state.context,
										this
								  )),
							await ((N = (C = this.options).onSettled) == null
								? void 0
								: N.call(C, void 0, P, t, this.state.context)),
							P)
						);
					} finally {
						$e(this, fn, Qn).call(this, {
							type: "error",
							error: P,
						});
					}
				} finally {
					M(this, Ye).runNext(this);
				}
			}
		}),
		(dn = new WeakMap()),
		(Ye = new WeakMap()),
		(ei = new WeakMap()),
		(fn = new WeakSet()),
		(Qn = function (t) {
			const n = (r) => {
				switch (t.type) {
					case "failed":
						return {
							...r,
							failureCount: t.failureCount,
							failureReason: t.error,
						};
					case "pause":
						return { ...r, isPaused: !0 };
					case "continue":
						return { ...r, isPaused: !1 };
					case "pending":
						return {
							...r,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: t.isPaused,
							status: "pending",
							variables: t.variables,
							submittedAt: Date.now(),
						};
					case "success":
						return {
							...r,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: !1,
						};
					case "error":
						return {
							...r,
							data: void 0,
							error: t.error,
							failureCount: r.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: "error",
						};
				}
			};
			(this.state = n(this.state)),
				Xe.batch(() => {
					M(this, dn).forEach((r) => {
						r.onMutationUpdate(t);
					}),
						M(this, Ye).notify({
							mutation: this,
							type: "updated",
							action: t,
						});
				});
		}),
		qg);
function RT() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0,
	};
}
var Rn,
	Kt,
	Io,
	Zg,
	MT =
		((Zg = class extends Jl {
			constructor(t = {}) {
				super();
				ne(this, Rn);
				ne(this, Kt);
				ne(this, Io);
				(this.config = t),
					q(this, Rn, new Set()),
					q(this, Kt, new Map()),
					q(this, Io, 0);
			}
			build(t, n, r) {
				const i = new kT({
					mutationCache: this,
					mutationId: ++Qo(this, Io)._,
					options: t.defaultMutationOptions(n),
					state: r,
				});
				return this.add(i), i;
			}
			add(t) {
				M(this, Rn).add(t);
				const n = ha(t);
				if (typeof n == "string") {
					const r = M(this, Kt).get(n);
					r ? r.push(t) : M(this, Kt).set(n, [t]);
				}
				this.notify({ type: "added", mutation: t });
			}
			remove(t) {
				if (M(this, Rn).delete(t)) {
					const n = ha(t);
					if (typeof n == "string") {
						const r = M(this, Kt).get(n);
						if (r)
							if (r.length > 1) {
								const i = r.indexOf(t);
								i !== -1 && r.splice(i, 1);
							} else r[0] === t && M(this, Kt).delete(n);
					}
				}
				this.notify({ type: "removed", mutation: t });
			}
			canRun(t) {
				const n = ha(t);
				if (typeof n == "string") {
					const r = M(this, Kt).get(n),
						i =
							r == null
								? void 0
								: r.find((s) => s.state.status === "pending");
					return !i || i === t;
				} else return !0;
			}
			runNext(t) {
				var r, i;
				const n = ha(t);
				if (typeof n == "string") {
					const s =
						(r = M(this, Kt).get(n)) == null
							? void 0
							: r.find((o) => o !== t && o.state.isPaused);
					return (i = s == null ? void 0 : s.continue()) != null
						? i
						: Promise.resolve();
				} else return Promise.resolve();
			}
			clear() {
				Xe.batch(() => {
					M(this, Rn).forEach((t) => {
						this.notify({ type: "removed", mutation: t });
					}),
						M(this, Rn).clear(),
						M(this, Kt).clear();
				});
			}
			getAll() {
				return Array.from(M(this, Rn));
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find((r) => Yp(n, r));
			}
			findAll(t = {}) {
				return this.getAll().filter((n) => Yp(t, n));
			}
			notify(t) {
				Xe.batch(() => {
					this.listeners.forEach((n) => {
						n(t);
					});
				});
			}
			resumePausedMutations() {
				const t = this.getAll().filter((n) => n.state.isPaused);
				return Xe.batch(() =>
					Promise.all(t.map((n) => n.continue().catch(Gt)))
				);
			}
		}),
		(Rn = new WeakMap()),
		(Kt = new WeakMap()),
		(Io = new WeakMap()),
		Zg);
function ha(e) {
	var t;
	return (t = e.options.scope) == null ? void 0 : t.id;
}
function qp(e) {
	return {
		onFetch: (t, n) => {
			var c, d, f, h, g;
			const r = t.options,
				i =
					(f =
						(d = (c = t.fetchOptions) == null ? void 0 : c.meta) ==
						null
							? void 0
							: d.fetchMore) == null
						? void 0
						: f.direction,
				s = ((h = t.state.data) == null ? void 0 : h.pages) || [],
				o = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
			let a = { pages: [], pageParams: [] },
				l = 0;
			const u = async () => {
				var v;
				let y = !1;
				const x = (S) => {
						Object.defineProperty(S, "signal", {
							enumerable: !0,
							get: () => (
								t.signal.aborted
									? (y = !0)
									: t.signal.addEventListener("abort", () => {
											y = !0;
									  }),
								t.signal
							),
						});
					},
					m = gv(t.options, t.fetchOptions),
					p = async (S, T, E) => {
						if (y) return Promise.reject();
						if (T == null && S.pages.length)
							return Promise.resolve(S);
						const C = (() => {
								const I = {
									client: t.client,
									queryKey: t.queryKey,
									pageParam: T,
									direction: E ? "backward" : "forward",
									meta: t.options.meta,
								};
								return x(I), I;
							})(),
							N = await m(C),
							{ maxPages: P } = t.options,
							F = E ? yT : gT;
						return {
							pages: F(S.pages, N, P),
							pageParams: F(S.pageParams, T, P),
						};
					};
				if (i && s.length) {
					const S = i === "backward",
						T = S ? NT : Zp,
						E = { pages: s, pageParams: o },
						A = T(r, E);
					a = await p(E, A, S);
				} else {
					const S = e != null ? e : s.length;
					do {
						const T =
							l === 0
								? (v = o[0]) != null
									? v
									: r.initialPageParam
								: Zp(r, a);
						if (l > 0 && T == null) break;
						(a = await p(a, T)), l++;
					} while (l < S);
				}
				return a;
			};
			t.options.persister
				? (t.fetchFn = () => {
						var y, x;
						return (x = (y = t.options).persister) == null
							? void 0
							: x.call(
									y,
									u,
									{
										client: t.client,
										queryKey: t.queryKey,
										meta: t.options.meta,
										signal: t.signal,
									},
									n
							  );
				  })
				: (t.fetchFn = u);
		},
	};
}
function Zp(e, { pages: t, pageParams: n }) {
	const r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function NT(e, { pages: t, pageParams: n }) {
	var r;
	return t.length > 0
		? (r = e.getPreviousPageParam) == null
			? void 0
			: r.call(e, t[0], t, n[0], n)
		: void 0;
}
var xe,
	ar,
	lr,
	Ji,
	es,
	ur,
	ts,
	ns,
	Jg,
	jT =
		((Jg = class {
			constructor(e = {}) {
				ne(this, xe);
				ne(this, ar);
				ne(this, lr);
				ne(this, Ji);
				ne(this, es);
				ne(this, ur);
				ne(this, ts);
				ne(this, ns);
				q(this, xe, e.queryCache || new PT()),
					q(this, ar, e.mutationCache || new MT()),
					q(this, lr, e.defaultOptions || {}),
					q(this, Ji, new Map()),
					q(this, es, new Map()),
					q(this, ur, 0);
			}
			mount() {
				Qo(this, ur)._++,
					M(this, ur) === 1 &&
						(q(
							this,
							ts,
							yv.subscribe(async (e) => {
								e &&
									(await this.resumePausedMutations(),
									M(this, xe).onFocus());
							})
						),
						q(
							this,
							ns,
							Tl.subscribe(async (e) => {
								e &&
									(await this.resumePausedMutations(),
									M(this, xe).onOnline());
							})
						));
			}
			unmount() {
				var e, t;
				Qo(this, ur)._--,
					M(this, ur) === 0 &&
						((e = M(this, ts)) == null || e.call(this),
						q(this, ts, void 0),
						(t = M(this, ns)) == null || t.call(this),
						q(this, ns, void 0));
			}
			isFetching(e) {
				return M(this, xe).findAll({ ...e, fetchStatus: "fetching" })
					.length;
			}
			isMutating(e) {
				return M(this, ar).findAll({ ...e, status: "pending" }).length;
			}
			getQueryData(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = M(this, xe).get(t.queryHash)) == null
					? void 0
					: n.state.data;
			}
			ensureQueryData(e) {
				const t = this.defaultQueryOptions(e),
					n = M(this, xe).build(this, t),
					r = n.state.data;
				return r === void 0
					? this.fetchQuery(e)
					: (e.revalidateIfStale &&
							n.isStaleByTime(ad(t.staleTime, n)) &&
							this.prefetchQuery(t),
					  Promise.resolve(r));
			}
			getQueriesData(e) {
				return M(this, xe)
					.findAll(e)
					.map(({ queryKey: t, state: n }) => {
						const r = n.data;
						return [t, r];
					});
			}
			setQueryData(e, t, n) {
				const r = this.defaultQueryOptions({ queryKey: e }),
					i = M(this, xe).get(r.queryHash),
					s = i == null ? void 0 : i.state.data,
					o = cT(t, s);
				if (o !== void 0)
					return M(this, xe)
						.build(this, r)
						.setData(o, { ...n, manual: !0 });
			}
			setQueriesData(e, t, n) {
				return Xe.batch(() =>
					M(this, xe)
						.findAll(e)
						.map(({ queryKey: r }) => [
							r,
							this.setQueryData(r, t, n),
						])
				);
			}
			getQueryState(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = M(this, xe).get(t.queryHash)) == null
					? void 0
					: n.state;
			}
			removeQueries(e) {
				const t = M(this, xe);
				Xe.batch(() => {
					t.findAll(e).forEach((n) => {
						t.remove(n);
					});
				});
			}
			resetQueries(e, t) {
				const n = M(this, xe);
				return Xe.batch(
					() => (
						n.findAll(e).forEach((r) => {
							r.reset();
						}),
						this.refetchQueries({ type: "active", ...e }, t)
					)
				);
			}
			cancelQueries(e, t = {}) {
				const n = { revert: !0, ...t },
					r = Xe.batch(() =>
						M(this, xe)
							.findAll(e)
							.map((i) => i.cancel(n))
					);
				return Promise.all(r).then(Gt).catch(Gt);
			}
			invalidateQueries(e, t = {}) {
				return Xe.batch(() => {
					var n, r;
					return (
						M(this, xe)
							.findAll(e)
							.forEach((i) => {
								i.invalidate();
							}),
						(e == null ? void 0 : e.refetchType) === "none"
							? Promise.resolve()
							: this.refetchQueries(
									{
										...e,
										type:
											(r =
												(n =
													e == null
														? void 0
														: e.refetchType) != null
													? n
													: e == null
													? void 0
													: e.type) != null
												? r
												: "active",
									},
									t
							  )
					);
				});
			}
			refetchQueries(e, t = {}) {
				var i;
				const n = {
						...t,
						cancelRefetch: (i = t.cancelRefetch) != null ? i : !0,
					},
					r = Xe.batch(() =>
						M(this, xe)
							.findAll(e)
							.filter((s) => !s.isDisabled() && !s.isStatic())
							.map((s) => {
								let o = s.fetch(void 0, n);
								return (
									n.throwOnError || (o = o.catch(Gt)),
									s.state.fetchStatus === "paused"
										? Promise.resolve()
										: o
								);
							})
					);
				return Promise.all(r).then(Gt);
			}
			fetchQuery(e) {
				const t = this.defaultQueryOptions(e);
				t.retry === void 0 && (t.retry = !1);
				const n = M(this, xe).build(this, t);
				return n.isStaleByTime(ad(t.staleTime, n))
					? n.fetch(t)
					: Promise.resolve(n.state.data);
			}
			prefetchQuery(e) {
				return this.fetchQuery(e).then(Gt).catch(Gt);
			}
			fetchInfiniteQuery(e) {
				return (e.behavior = qp(e.pages)), this.fetchQuery(e);
			}
			prefetchInfiniteQuery(e) {
				return this.fetchInfiniteQuery(e).then(Gt).catch(Gt);
			}
			ensureInfiniteQueryData(e) {
				return (e.behavior = qp(e.pages)), this.ensureQueryData(e);
			}
			resumePausedMutations() {
				return Tl.isOnline()
					? M(this, ar).resumePausedMutations()
					: Promise.resolve();
			}
			getQueryCache() {
				return M(this, xe);
			}
			getMutationCache() {
				return M(this, ar);
			}
			getDefaultOptions() {
				return M(this, lr);
			}
			setDefaultOptions(e) {
				q(this, lr, e);
			}
			setQueryDefaults(e, t) {
				M(this, Ji).set(Ao(e), { queryKey: e, defaultOptions: t });
			}
			getQueryDefaults(e) {
				const t = [...M(this, Ji).values()],
					n = {};
				return (
					t.forEach((r) => {
						Po(e, r.queryKey) && Object.assign(n, r.defaultOptions);
					}),
					n
				);
			}
			setMutationDefaults(e, t) {
				M(this, es).set(Ao(e), { mutationKey: e, defaultOptions: t });
			}
			getMutationDefaults(e) {
				const t = [...M(this, es).values()],
					n = {};
				return (
					t.forEach((r) => {
						Po(e, r.mutationKey) &&
							Object.assign(n, r.defaultOptions);
					}),
					n
				);
			}
			defaultQueryOptions(e) {
				if (e._defaulted) return e;
				const t = {
					...M(this, lr).queries,
					...this.getQueryDefaults(e.queryKey),
					...e,
					_defaulted: !0,
				};
				return (
					t.queryHash || (t.queryHash = Uf(t.queryKey, t)),
					t.refetchOnReconnect === void 0 &&
						(t.refetchOnReconnect = t.networkMode !== "always"),
					t.throwOnError === void 0 &&
						(t.throwOnError = !!t.suspense),
					!t.networkMode &&
						t.persister &&
						(t.networkMode = "offlineFirst"),
					t.queryFn === $f && (t.enabled = !1),
					t
				);
			}
			defaultMutationOptions(e) {
				return e != null && e._defaulted
					? e
					: {
							...M(this, lr).mutations,
							...((e == null ? void 0 : e.mutationKey) &&
								this.getMutationDefaults(e.mutationKey)),
							...e,
							_defaulted: !0,
					  };
			}
			clear() {
				M(this, xe).clear(), M(this, ar).clear();
			}
		}),
		(xe = new WeakMap()),
		(ar = new WeakMap()),
		(lr = new WeakMap()),
		(Ji = new WeakMap()),
		(es = new WeakMap()),
		(ur = new WeakMap()),
		(ts = new WeakMap()),
		(ns = new WeakMap()),
		Jg),
	LT = b.createContext(void 0),
	DT = ({ client: e, children: t }) => (
		b.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e]
		),
		w.jsx(LT.Provider, { value: e, children: t })
	),
	Jp = ["light", "dark"],
	IT = "(prefers-color-scheme: dark)",
	OT = b.createContext(void 0),
	FT = { setTheme: (e) => {}, themes: [] },
	VT = () => {
		var e;
		return (e = b.useContext(OT)) != null ? e : FT;
	};
b.memo(
	({
		forcedTheme: e,
		storageKey: t,
		attribute: n,
		enableSystem: r,
		enableColorScheme: i,
		defaultTheme: s,
		value: o,
		attrs: a,
		nonce: l,
	}) => {
		let u = s === "system",
			c =
				n === "class"
					? "var d=document.documentElement,c=d.classList;".concat(
							"c.remove(".concat(
								a.map((g) => "'".concat(g, "'")).join(","),
								")"
							),
							";"
					  )
					: "var d=document.documentElement,n='".concat(
							n,
							"',s='setAttribute';"
					  ),
			d = i
				? Jp.includes(s) && s
					? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
							s,
							"'"
					  )
					: "if(e==='light'||e==='dark')d.style.colorScheme=e"
				: "",
			f = (g, y = !1, x = !0) => {
				let m = o ? o[g] : g,
					p = y ? g + "|| ''" : "'".concat(m, "'"),
					v = "";
				return (
					i &&
						x &&
						!y &&
						Jp.includes(g) &&
						(v += "d.style.colorScheme = '".concat(g, "';")),
					n === "class"
						? y || m
							? (v += "c.add(".concat(p, ")"))
							: (v += "null")
						: m && (v += "d[s](n,".concat(p, ")")),
					v
				);
			},
			h = e
				? "!function(){".concat(c).concat(f(e), "}()")
				: r
				? "!function(){try{"
						.concat(c, "var e=localStorage.getItem('")
						.concat(t, "');if('system'===e||(!e&&")
						.concat(u, ")){var t='")
						.concat(
							IT,
							"',m=window.matchMedia(t);if(m.media!==t||m.matches){"
						)
						.concat(f("dark"), "}else{")
						.concat(f("light"), "}}else if(e){")
						.concat(
							o ? "var x=".concat(JSON.stringify(o), ";") : ""
						)
						.concat(f(o ? "x[e]" : "e", !0), "}")
						.concat(u ? "" : "else{" + f(s, !1, !1) + "}")
						.concat(d, "}catch(e){}}()")
				: "!function(){try{"
						.concat(c, "var e=localStorage.getItem('")
						.concat(t, "');if(e){")
						.concat(
							o ? "var x=".concat(JSON.stringify(o), ";") : ""
						)
						.concat(f(o ? "x[e]" : "e", !0), "}else{")
						.concat(f(s, !1, !1), ";}")
						.concat(d, "}catch(t){}}();");
		return b.createElement("script", {
			nonce: l,
			dangerouslySetInnerHTML: { __html: h },
		});
	}
);
var _T = (e) => {
		switch (e) {
			case "success":
				return $T;
			case "info":
				return HT;
			case "warning":
				return zT;
			case "error":
				return GT;
			default:
				return null;
		}
	},
	BT = Array(12).fill(0),
	UT = ({ visible: e, className: t }) =>
		V.createElement(
			"div",
			{
				className: ["sonner-loading-wrapper", t]
					.filter(Boolean)
					.join(" "),
				"data-visible": e,
			},
			V.createElement(
				"div",
				{ className: "sonner-spinner" },
				BT.map((n, r) =>
					V.createElement("div", {
						className: "sonner-loading-bar",
						key: "spinner-bar-".concat(r),
					})
				)
			)
		),
	$T = V.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		V.createElement("path", {
			fillRule: "evenodd",
			d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
			clipRule: "evenodd",
		})
	),
	zT = V.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		V.createElement("path", {
			fillRule: "evenodd",
			d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
			clipRule: "evenodd",
		})
	),
	HT = V.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		V.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
			clipRule: "evenodd",
		})
	),
	GT = V.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		V.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
			clipRule: "evenodd",
		})
	),
	WT = V.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			width: "12",
			height: "12",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		V.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
		V.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
	),
	KT = () => {
		let [e, t] = V.useState(document.hidden);
		return (
			V.useEffect(() => {
				let n = () => {
					t(document.hidden);
				};
				return (
					document.addEventListener("visibilitychange", n),
					() => window.removeEventListener("visibilitychange", n)
				);
			}, []),
			e
		);
	},
	ud = 1,
	YT = class {
		constructor() {
			(this.subscribe = (e) => (
				this.subscribers.push(e),
				() => {
					let t = this.subscribers.indexOf(e);
					this.subscribers.splice(t, 1);
				}
			)),
				(this.publish = (e) => {
					this.subscribers.forEach((t) => t(e));
				}),
				(this.addToast = (e) => {
					this.publish(e), (this.toasts = [...this.toasts, e]);
				}),
				(this.create = (e) => {
					var t;
					let { message: n, ...r } = e,
						i =
							typeof (e == null ? void 0 : e.id) == "number" ||
							((t = e.id) == null ? void 0 : t.length) > 0
								? e.id
								: ud++,
						s = this.toasts.find((a) => a.id === i),
						o = e.dismissible === void 0 ? !0 : e.dismissible;
					return (
						this.dismissedToasts.has(i) &&
							this.dismissedToasts.delete(i),
						s
							? (this.toasts = this.toasts.map((a) =>
									a.id === i
										? (this.publish({
												...a,
												...e,
												id: i,
												title: n,
										  }),
										  {
												...a,
												...e,
												id: i,
												dismissible: o,
												title: n,
										  })
										: a
							  ))
							: this.addToast({
									title: n,
									...r,
									dismissible: o,
									id: i,
							  }),
						i
					);
				}),
				(this.dismiss = (e) => (
					this.dismissedToasts.add(e),
					e ||
						this.toasts.forEach((t) => {
							this.subscribers.forEach((n) =>
								n({ id: t.id, dismiss: !0 })
							);
						}),
					this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
					e
				)),
				(this.message = (e, t) => this.create({ ...t, message: e })),
				(this.error = (e, t) =>
					this.create({ ...t, message: e, type: "error" })),
				(this.success = (e, t) =>
					this.create({ ...t, type: "success", message: e })),
				(this.info = (e, t) =>
					this.create({ ...t, type: "info", message: e })),
				(this.warning = (e, t) =>
					this.create({ ...t, type: "warning", message: e })),
				(this.loading = (e, t) =>
					this.create({ ...t, type: "loading", message: e })),
				(this.promise = (e, t) => {
					if (!t) return;
					let n;
					t.loading !== void 0 &&
						(n = this.create({
							...t,
							promise: e,
							type: "loading",
							message: t.loading,
							description:
								typeof t.description != "function"
									? t.description
									: void 0,
						}));
					let r = e instanceof Promise ? e : e(),
						i = n !== void 0,
						s,
						o = r
							.then(async (l) => {
								if (((s = ["resolve", l]), V.isValidElement(l)))
									(i = !1),
										this.create({
											id: n,
											type: "default",
											message: l,
										});
								else if (XT(l) && !l.ok) {
									i = !1;
									let u =
											typeof t.error == "function"
												? await t.error(
														"HTTP error! status: ".concat(
															l.status
														)
												  )
												: t.error,
										c =
											typeof t.description == "function"
												? await t.description(
														"HTTP error! status: ".concat(
															l.status
														)
												  )
												: t.description;
									this.create({
										id: n,
										type: "error",
										message: u,
										description: c,
									});
								} else if (t.success !== void 0) {
									i = !1;
									let u =
											typeof t.success == "function"
												? await t.success(l)
												: t.success,
										c =
											typeof t.description == "function"
												? await t.description(l)
												: t.description;
									this.create({
										id: n,
										type: "success",
										message: u,
										description: c,
									});
								}
							})
							.catch(async (l) => {
								if (((s = ["reject", l]), t.error !== void 0)) {
									i = !1;
									let u =
											typeof t.error == "function"
												? await t.error(l)
												: t.error,
										c =
											typeof t.description == "function"
												? await t.description(l)
												: t.description;
									this.create({
										id: n,
										type: "error",
										message: u,
										description: c,
									});
								}
							})
							.finally(() => {
								var l;
								i && (this.dismiss(n), (n = void 0)),
									(l = t.finally) == null || l.call(t);
							}),
						a = () =>
							new Promise((l, u) =>
								o
									.then(() =>
										s[0] === "reject" ? u(s[1]) : l(s[1])
									)
									.catch(u)
							);
					return typeof n != "string" && typeof n != "number"
						? { unwrap: a }
						: Object.assign(n, { unwrap: a });
				}),
				(this.custom = (e, t) => {
					let n = (t == null ? void 0 : t.id) || ud++;
					return this.create({ jsx: e(n), id: n, ...t }), n;
				}),
				(this.getActiveToasts = () =>
					this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
				(this.subscribers = []),
				(this.toasts = []),
				(this.dismissedToasts = new Set());
		}
	},
	ot = new YT(),
	QT = (e, t) => {
		let n = (t == null ? void 0 : t.id) || ud++;
		return ot.addToast({ title: e, ...t, id: n }), n;
	},
	XT = (e) =>
		e &&
		typeof e == "object" &&
		"ok" in e &&
		typeof e.ok == "boolean" &&
		"status" in e &&
		typeof e.status == "number",
	qT = QT,
	ZT = () => ot.toasts,
	JT = () => ot.getActiveToasts(),
	we = Object.assign(
		qT,
		{
			success: ot.success,
			info: ot.info,
			warning: ot.warning,
			error: ot.error,
			custom: ot.custom,
			message: ot.message,
			promise: ot.promise,
			dismiss: ot.dismiss,
			loading: ot.loading,
		},
		{ getHistory: ZT, getToasts: JT }
	);
function eE(e, { insertAt: t } = {}) {
	if (typeof document > "u") return;
	let n = document.head || document.getElementsByTagName("head")[0],
		r = document.createElement("style");
	(r.type = "text/css"),
		t === "top" && n.firstChild
			? n.insertBefore(r, n.firstChild)
			: n.appendChild(r),
		r.styleSheet
			? (r.styleSheet.cssText = e)
			: r.appendChild(document.createTextNode(e));
}
eE(
	':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
);
function pa(e) {
	return e.label !== void 0;
}
var tE = 3,
	nE = "32px",
	rE = "16px",
	em = 4e3,
	iE = 356,
	sE = 14,
	oE = 20,
	aE = 200;
function Ut(...e) {
	return e.filter(Boolean).join(" ");
}
function lE(e) {
	let [t, n] = e.split("-"),
		r = [];
	return t && r.push(t), n && r.push(n), r;
}
var uE = (e) => {
	var t, n, r, i, s, o, a, l, u, c, d;
	let {
			invert: f,
			toast: h,
			unstyled: g,
			interacting: y,
			setHeights: x,
			visibleToasts: m,
			heights: p,
			index: v,
			toasts: S,
			expanded: T,
			removeToast: E,
			defaultRichColors: A,
			closeButton: C,
			style: N,
			cancelButtonStyle: P,
			actionButtonStyle: F,
			className: I = "",
			descriptionClassName: $ = "",
			duration: D,
			position: K,
			gap: U,
			loadingIcon: Y,
			expandByDefault: k,
			classNames: R,
			icons: L,
			closeButtonAriaLabel: H = "Close toast",
			pauseWhenPageIsHidden: z,
		} = e,
		[G, Q] = V.useState(null),
		[se, je] = V.useState(null),
		[J, Dt] = V.useState(!1),
		[Le, nt] = V.useState(!1),
		[It, rt] = V.useState(!1),
		[Ot, pi] = V.useState(!1),
		[Ue, Bn] = V.useState(!1),
		[mi, Un] = V.useState(0),
		[Es, gi] = V.useState(0),
		mt = V.useRef(h.duration || D || em),
		Yo = V.useRef(null),
		Tn = V.useRef(null),
		gu = v === 0,
		j = v + 1 <= m,
		W = h.type,
		ve = h.dismissible !== !1,
		Te = h.className || "",
		gt = h.descriptionClassName || "",
		yi = V.useMemo(
			() => p.findIndex((X) => X.toastId === h.id) || 0,
			[p, h.id]
		),
		yu = V.useMemo(() => {
			var X;
			return (X = h.closeButton) != null ? X : C;
		}, [h.closeButton, C]),
		vi = V.useMemo(() => h.duration || D || em, [h.duration, D]),
		Cs = V.useRef(0),
		it = V.useRef(0),
		Dh = V.useRef(0),
		xi = V.useRef(null),
		[L1, D1] = K.split("-"),
		Ih = V.useMemo(
			() => p.reduce((X, ie, fe) => (fe >= yi ? X : X + ie.height), 0),
			[p, yi]
		),
		Oh = KT(),
		I1 = h.invert || f,
		vu = W === "loading";
	(it.current = V.useMemo(() => yi * U + Ih, [yi, Ih])),
		V.useEffect(() => {
			mt.current = vi;
		}, [vi]),
		V.useEffect(() => {
			Dt(!0);
		}, []),
		V.useEffect(() => {
			let X = Tn.current;
			if (X) {
				let ie = X.getBoundingClientRect().height;
				return (
					gi(ie),
					x((fe) => [
						{ toastId: h.id, height: ie, position: h.position },
						...fe,
					]),
					() => x((fe) => fe.filter((Ft) => Ft.toastId !== h.id))
				);
			}
		}, [x, h.id]),
		V.useLayoutEffect(() => {
			if (!J) return;
			let X = Tn.current,
				ie = X.style.height;
			X.style.height = "auto";
			let fe = X.getBoundingClientRect().height;
			(X.style.height = ie),
				gi(fe),
				x((Ft) =>
					Ft.find((Vt) => Vt.toastId === h.id)
						? Ft.map((Vt) =>
								Vt.toastId === h.id ? { ...Vt, height: fe } : Vt
						  )
						: [
								{
									toastId: h.id,
									height: fe,
									position: h.position,
								},
								...Ft,
						  ]
				);
		}, [J, h.title, h.description, x, h.id]);
	let $n = V.useCallback(() => {
		nt(!0),
			Un(it.current),
			x((X) => X.filter((ie) => ie.toastId !== h.id)),
			setTimeout(() => {
				E(h);
			}, aE);
	}, [h, E, x, it]);
	V.useEffect(() => {
		if (
			(h.promise && W === "loading") ||
			h.duration === 1 / 0 ||
			h.type === "loading"
		)
			return;
		let X;
		return (
			T || y || (z && Oh)
				? (() => {
						if (Dh.current < Cs.current) {
							let ie = new Date().getTime() - Cs.current;
							mt.current = mt.current - ie;
						}
						Dh.current = new Date().getTime();
				  })()
				: mt.current !== 1 / 0 &&
				  ((Cs.current = new Date().getTime()),
				  (X = setTimeout(() => {
						var ie;
						(ie = h.onAutoClose) == null || ie.call(h, h), $n();
				  }, mt.current))),
			() => clearTimeout(X)
		);
	}, [T, y, h, W, z, Oh, $n]),
		V.useEffect(() => {
			h.delete && $n();
		}, [$n, h.delete]);
	function O1() {
		var X, ie, fe;
		return L != null && L.loading
			? V.createElement(
					"div",
					{
						className: Ut(
							R == null ? void 0 : R.loader,
							(X = h == null ? void 0 : h.classNames) == null
								? void 0
								: X.loader,
							"sonner-loader"
						),
						"data-visible": W === "loading",
					},
					L.loading
			  )
			: Y
			? V.createElement(
					"div",
					{
						className: Ut(
							R == null ? void 0 : R.loader,
							(ie = h == null ? void 0 : h.classNames) == null
								? void 0
								: ie.loader,
							"sonner-loader"
						),
						"data-visible": W === "loading",
					},
					Y
			  )
			: V.createElement(UT, {
					className: Ut(
						R == null ? void 0 : R.loader,
						(fe = h == null ? void 0 : h.classNames) == null
							? void 0
							: fe.loader
					),
					visible: W === "loading",
			  });
	}
	return V.createElement(
		"li",
		{
			tabIndex: 0,
			ref: Tn,
			className: Ut(
				I,
				Te,
				R == null ? void 0 : R.toast,
				(t = h == null ? void 0 : h.classNames) == null
					? void 0
					: t.toast,
				R == null ? void 0 : R.default,
				R == null ? void 0 : R[W],
				(n = h == null ? void 0 : h.classNames) == null ? void 0 : n[W]
			),
			"data-sonner-toast": "",
			"data-rich-colors": (r = h.richColors) != null ? r : A,
			"data-styled": !(h.jsx || h.unstyled || g),
			"data-mounted": J,
			"data-promise": !!h.promise,
			"data-swiped": Ue,
			"data-removed": Le,
			"data-visible": j,
			"data-y-position": L1,
			"data-x-position": D1,
			"data-index": v,
			"data-front": gu,
			"data-swiping": It,
			"data-dismissible": ve,
			"data-type": W,
			"data-invert": I1,
			"data-swipe-out": Ot,
			"data-swipe-direction": se,
			"data-expanded": !!(T || (k && J)),
			style: {
				"--index": v,
				"--toasts-before": v,
				"--z-index": S.length - v,
				"--offset": "".concat(Le ? mi : it.current, "px"),
				"--initial-height": k ? "auto" : "".concat(Es, "px"),
				...N,
				...h.style,
			},
			onDragEnd: () => {
				rt(!1), Q(null), (xi.current = null);
			},
			onPointerDown: (X) => {
				vu ||
					!ve ||
					((Yo.current = new Date()),
					Un(it.current),
					X.target.setPointerCapture(X.pointerId),
					X.target.tagName !== "BUTTON" &&
						(rt(!0),
						(xi.current = { x: X.clientX, y: X.clientY })));
			},
			onPointerUp: () => {
				var X, ie, fe, Ft;
				if (Ot || !ve) return;
				xi.current = null;
				let Vt = Number(
						((X = Tn.current) == null
							? void 0
							: X.style
									.getPropertyValue("--swipe-amount-x")
									.replace("px", "")) || 0
					),
					zn = Number(
						((ie = Tn.current) == null
							? void 0
							: ie.style
									.getPropertyValue("--swipe-amount-y")
									.replace("px", "")) || 0
					),
					Lr =
						new Date().getTime() -
						((fe = Yo.current) == null ? void 0 : fe.getTime()),
					_t = G === "x" ? Vt : zn,
					Hn = Math.abs(_t) / Lr;
				if (Math.abs(_t) >= oE || Hn > 0.11) {
					Un(it.current),
						(Ft = h.onDismiss) == null || Ft.call(h, h),
						je(
							G === "x"
								? Vt > 0
									? "right"
									: "left"
								: zn > 0
								? "down"
								: "up"
						),
						$n(),
						pi(!0),
						Bn(!1);
					return;
				}
				rt(!1), Q(null);
			},
			onPointerMove: (X) => {
				var ie, fe, Ft, Vt;
				if (
					!xi.current ||
					!ve ||
					((ie = window.getSelection()) == null
						? void 0
						: ie.toString().length) > 0
				)
					return;
				let zn = X.clientY - xi.current.y,
					Lr = X.clientX - xi.current.x,
					_t = (fe = e.swipeDirections) != null ? fe : lE(K);
				!G &&
					(Math.abs(Lr) > 1 || Math.abs(zn) > 1) &&
					Q(Math.abs(Lr) > Math.abs(zn) ? "x" : "y");
				let Hn = { x: 0, y: 0 };
				G === "y"
					? (_t.includes("top") || _t.includes("bottom")) &&
					  ((_t.includes("top") && zn < 0) ||
							(_t.includes("bottom") && zn > 0)) &&
					  (Hn.y = zn)
					: G === "x" &&
					  (_t.includes("left") || _t.includes("right")) &&
					  ((_t.includes("left") && Lr < 0) ||
							(_t.includes("right") && Lr > 0)) &&
					  (Hn.x = Lr),
					(Math.abs(Hn.x) > 0 || Math.abs(Hn.y) > 0) && Bn(!0),
					(Ft = Tn.current) == null ||
						Ft.style.setProperty(
							"--swipe-amount-x",
							"".concat(Hn.x, "px")
						),
					(Vt = Tn.current) == null ||
						Vt.style.setProperty(
							"--swipe-amount-y",
							"".concat(Hn.y, "px")
						);
			},
		},
		yu && !h.jsx
			? V.createElement(
					"button",
					{
						"aria-label": H,
						"data-disabled": vu,
						"data-close-button": !0,
						onClick:
							vu || !ve
								? () => {}
								: () => {
										var X;
										$n(),
											(X = h.onDismiss) == null ||
												X.call(h, h);
								  },
						className: Ut(
							R == null ? void 0 : R.closeButton,
							(i = h == null ? void 0 : h.classNames) == null
								? void 0
								: i.closeButton
						),
					},
					(s = L == null ? void 0 : L.close) != null ? s : WT
			  )
			: null,
		h.jsx || b.isValidElement(h.title)
			? h.jsx
				? h.jsx
				: typeof h.title == "function"
				? h.title()
				: h.title
			: V.createElement(
					V.Fragment,
					null,
					W || h.icon || h.promise
						? V.createElement(
								"div",
								{
									"data-icon": "",
									className: Ut(
										R == null ? void 0 : R.icon,
										(o =
											h == null
												? void 0
												: h.classNames) == null
											? void 0
											: o.icon
									),
								},
								h.promise || (h.type === "loading" && !h.icon)
									? h.icon || O1()
									: null,
								h.type !== "loading"
									? h.icon ||
											(L == null ? void 0 : L[W]) ||
											_T(W)
									: null
						  )
						: null,
					V.createElement(
						"div",
						{
							"data-content": "",
							className: Ut(
								R == null ? void 0 : R.content,
								(a = h == null ? void 0 : h.classNames) == null
									? void 0
									: a.content
							),
						},
						V.createElement(
							"div",
							{
								"data-title": "",
								className: Ut(
									R == null ? void 0 : R.title,
									(l = h == null ? void 0 : h.classNames) ==
										null
										? void 0
										: l.title
								),
							},
							typeof h.title == "function" ? h.title() : h.title
						),
						h.description
							? V.createElement(
									"div",
									{
										"data-description": "",
										className: Ut(
											$,
											gt,
											R == null ? void 0 : R.description,
											(u =
												h == null
													? void 0
													: h.classNames) == null
												? void 0
												: u.description
										),
									},
									typeof h.description == "function"
										? h.description()
										: h.description
							  )
							: null
					),
					b.isValidElement(h.cancel)
						? h.cancel
						: h.cancel && pa(h.cancel)
						? V.createElement(
								"button",
								{
									"data-button": !0,
									"data-cancel": !0,
									style: h.cancelButtonStyle || P,
									onClick: (X) => {
										var ie, fe;
										pa(h.cancel) &&
											ve &&
											((fe = (ie = h.cancel).onClick) ==
												null || fe.call(ie, X),
											$n());
									},
									className: Ut(
										R == null ? void 0 : R.cancelButton,
										(c =
											h == null
												? void 0
												: h.classNames) == null
											? void 0
											: c.cancelButton
									),
								},
								h.cancel.label
						  )
						: null,
					b.isValidElement(h.action)
						? h.action
						: h.action && pa(h.action)
						? V.createElement(
								"button",
								{
									"data-button": !0,
									"data-action": !0,
									style: h.actionButtonStyle || F,
									onClick: (X) => {
										var ie, fe;
										pa(h.action) &&
											((fe = (ie = h.action).onClick) ==
												null || fe.call(ie, X),
											!X.defaultPrevented && $n());
									},
									className: Ut(
										R == null ? void 0 : R.actionButton,
										(d =
											h == null
												? void 0
												: h.classNames) == null
											? void 0
											: d.actionButton
									),
								},
								h.action.label
						  )
						: null
			  )
	);
};
function tm() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e
		? window.getComputedStyle(document.documentElement).direction
		: e;
}
function cE(e, t) {
	let n = {};
	return (
		[e, t].forEach((r, i) => {
			let s = i === 1,
				o = s ? "--mobile-offset" : "--offset",
				a = s ? rE : nE;
			function l(u) {
				["top", "right", "bottom", "left"].forEach((c) => {
					n["".concat(o, "-").concat(c)] =
						typeof u == "number" ? "".concat(u, "px") : u;
				});
			}
			typeof r == "number" || typeof r == "string"
				? l(r)
				: typeof r == "object"
				? ["top", "right", "bottom", "left"].forEach((u) => {
						r[u] === void 0
							? (n["".concat(o, "-").concat(u)] = a)
							: (n["".concat(o, "-").concat(u)] =
									typeof r[u] == "number"
										? "".concat(r[u], "px")
										: r[u]);
				  })
				: l(a);
		}),
		n
	);
}
var dE = b.forwardRef(function (e, t) {
	let {
			invert: n,
			position: r = "bottom-right",
			hotkey: i = ["altKey", "KeyT"],
			expand: s,
			closeButton: o,
			className: a,
			offset: l,
			mobileOffset: u,
			theme: c = "light",
			richColors: d,
			duration: f,
			style: h,
			visibleToasts: g = tE,
			toastOptions: y,
			dir: x = tm(),
			gap: m = sE,
			loadingIcon: p,
			icons: v,
			containerAriaLabel: S = "Notifications",
			pauseWhenPageIsHidden: T,
		} = e,
		[E, A] = V.useState([]),
		C = V.useMemo(
			() =>
				Array.from(
					new Set(
						[r].concat(
							E.filter((z) => z.position).map((z) => z.position)
						)
					)
				),
			[E, r]
		),
		[N, P] = V.useState([]),
		[F, I] = V.useState(!1),
		[$, D] = V.useState(!1),
		[K, U] = V.useState(
			c !== "system"
				? c
				: typeof window < "u" &&
				  window.matchMedia &&
				  window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
		),
		Y = V.useRef(null),
		k = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
		R = V.useRef(null),
		L = V.useRef(!1),
		H = V.useCallback((z) => {
			A((G) => {
				var Q;
				return (
					((Q = G.find((se) => se.id === z.id)) != null &&
						Q.delete) ||
						ot.dismiss(z.id),
					G.filter(({ id: se }) => se !== z.id)
				);
			});
		}, []);
	return (
		V.useEffect(
			() =>
				ot.subscribe((z) => {
					if (z.dismiss) {
						A((G) =>
							G.map((Q) =>
								Q.id === z.id ? { ...Q, delete: !0 } : Q
							)
						);
						return;
					}
					setTimeout(() => {
						hv.flushSync(() => {
							A((G) => {
								let Q = G.findIndex((se) => se.id === z.id);
								return Q !== -1
									? [
											...G.slice(0, Q),
											{ ...G[Q], ...z },
											...G.slice(Q + 1),
									  ]
									: [z, ...G];
							});
						});
					});
				}),
			[]
		),
		V.useEffect(() => {
			if (c !== "system") {
				U(c);
				return;
			}
			if (
				(c === "system" &&
					(window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? U("dark")
						: U("light")),
				typeof window > "u")
			)
				return;
			let z = window.matchMedia("(prefers-color-scheme: dark)");
			try {
				z.addEventListener("change", ({ matches: G }) => {
					U(G ? "dark" : "light");
				});
			} catch (G) {
				z.addListener(({ matches: Q }) => {
					try {
						U(Q ? "dark" : "light");
					} catch (se) {
						console.error(se);
					}
				});
			}
		}, [c]),
		V.useEffect(() => {
			E.length <= 1 && I(!1);
		}, [E]),
		V.useEffect(() => {
			let z = (G) => {
				var Q, se;
				i.every((je) => G[je] || G.code === je) &&
					(I(!0), (Q = Y.current) == null || Q.focus()),
					G.code === "Escape" &&
						(document.activeElement === Y.current ||
							((se = Y.current) != null &&
								se.contains(document.activeElement))) &&
						I(!1);
			};
			return (
				document.addEventListener("keydown", z),
				() => document.removeEventListener("keydown", z)
			);
		}, [i]),
		V.useEffect(() => {
			if (Y.current)
				return () => {
					R.current &&
						(R.current.focus({ preventScroll: !0 }),
						(R.current = null),
						(L.current = !1));
				};
		}, [Y.current]),
		V.createElement(
			"section",
			{
				ref: t,
				"aria-label": "".concat(S, " ").concat(k),
				tabIndex: -1,
				"aria-live": "polite",
				"aria-relevant": "additions text",
				"aria-atomic": "false",
				suppressHydrationWarning: !0,
			},
			C.map((z, G) => {
				var Q;
				let [se, je] = z.split("-");
				return E.length
					? V.createElement(
							"ol",
							{
								key: z,
								dir: x === "auto" ? tm() : x,
								tabIndex: -1,
								ref: Y,
								className: a,
								"data-sonner-toaster": !0,
								"data-theme": K,
								"data-y-position": se,
								"data-lifted": F && E.length > 1 && !s,
								"data-x-position": je,
								style: {
									"--front-toast-height": "".concat(
										((Q = N[0]) == null
											? void 0
											: Q.height) || 0,
										"px"
									),
									"--width": "".concat(iE, "px"),
									"--gap": "".concat(m, "px"),
									...h,
									...cE(l, u),
								},
								onBlur: (J) => {
									L.current &&
										!J.currentTarget.contains(
											J.relatedTarget
										) &&
										((L.current = !1),
										R.current &&
											(R.current.focus({
												preventScroll: !0,
											}),
											(R.current = null)));
								},
								onFocus: (J) => {
									(J.target instanceof HTMLElement &&
										J.target.dataset.dismissible ===
											"false") ||
										L.current ||
										((L.current = !0),
										(R.current = J.relatedTarget));
								},
								onMouseEnter: () => I(!0),
								onMouseMove: () => I(!0),
								onMouseLeave: () => {
									$ || I(!1);
								},
								onDragEnd: () => I(!1),
								onPointerDown: (J) => {
									(J.target instanceof HTMLElement &&
										J.target.dataset.dismissible ===
											"false") ||
										D(!0);
								},
								onPointerUp: () => D(!1),
							},
							E.filter(
								(J) =>
									(!J.position && G === 0) || J.position === z
							).map((J, Dt) => {
								var Le, nt;
								return V.createElement(uE, {
									key: J.id,
									icons: v,
									index: Dt,
									toast: J,
									defaultRichColors: d,
									duration:
										(Le =
											y == null ? void 0 : y.duration) !=
										null
											? Le
											: f,
									className: y == null ? void 0 : y.className,
									descriptionClassName:
										y == null
											? void 0
											: y.descriptionClassName,
									invert: n,
									visibleToasts: g,
									closeButton:
										(nt =
											y == null
												? void 0
												: y.closeButton) != null
											? nt
											: o,
									interacting: $,
									position: z,
									style: y == null ? void 0 : y.style,
									unstyled: y == null ? void 0 : y.unstyled,
									classNames:
										y == null ? void 0 : y.classNames,
									cancelButtonStyle:
										y == null
											? void 0
											: y.cancelButtonStyle,
									actionButtonStyle:
										y == null
											? void 0
											: y.actionButtonStyle,
									removeToast: H,
									toasts: E.filter(
										(It) => It.position == J.position
									),
									heights: N.filter(
										(It) => It.position == J.position
									),
									setHeights: P,
									expandByDefault: s,
									gap: m,
									loadingIcon: p,
									expanded: F,
									pauseWhenPageIsHidden: T,
									swipeDirections: e.swipeDirections,
								});
							})
					  )
					: null;
			})
		)
	);
});
const fE = ({ ...e }) => {
		const { theme: t = "system" } = VT();
		return w.jsx(dE, {
			theme: t,
			className: "toaster group",
			toastOptions: {
				classNames: {
					toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-muted-foreground",
					actionButton:
						"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
					cancelButton:
						"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
				},
			},
			...e,
		});
	},
	hE = 1,
	pE = 1e6;
let Ku = 0;
function mE() {
	return (Ku = (Ku + 1) % Number.MAX_SAFE_INTEGER), Ku.toString();
}
const Yu = new Map(),
	nm = (e) => {
		if (Yu.has(e)) return;
		const t = setTimeout(() => {
			Yu.delete(e), to({ type: "REMOVE_TOAST", toastId: e });
		}, pE);
		Yu.set(e, t);
	},
	gE = (e, t) => {
		switch (t.type) {
			case "ADD_TOAST":
				return { ...e, toasts: [t.toast, ...e.toasts].slice(0, hE) };
			case "UPDATE_TOAST":
				return {
					...e,
					toasts: e.toasts.map((n) =>
						n.id === t.toast.id ? { ...n, ...t.toast } : n
					),
				};
			case "DISMISS_TOAST": {
				const { toastId: n } = t;
				return (
					n
						? nm(n)
						: e.toasts.forEach((r) => {
								nm(r.id);
						  }),
					{
						...e,
						toasts: e.toasts.map((r) =>
							r.id === n || n === void 0 ? { ...r, open: !1 } : r
						),
					}
				);
			}
			case "REMOVE_TOAST":
				return t.toastId === void 0
					? { ...e, toasts: [] }
					: {
							...e,
							toasts: e.toasts.filter((n) => n.id !== t.toastId),
					  };
		}
	},
	Fa = [];
let Va = { toasts: [] };
function to(e) {
	(Va = gE(Va, e)),
		Fa.forEach((t) => {
			t(Va);
		});
}
function yE({ ...e }) {
	const t = mE(),
		n = (i) => to({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
		r = () => to({ type: "DISMISS_TOAST", toastId: t });
	return (
		to({
			type: "ADD_TOAST",
			toast: {
				...e,
				id: t,
				open: !0,
				onOpenChange: (i) => {
					i || r();
				},
			},
		}),
		{ id: t, dismiss: r, update: n }
	);
}
function vE() {
	const [e, t] = b.useState(Va);
	return (
		b.useEffect(
			() => (
				Fa.push(t),
				() => {
					const n = Fa.indexOf(t);
					n > -1 && Fa.splice(n, 1);
				}
			),
			[e]
		),
		{
			...e,
			toast: yE,
			dismiss: (n) => to({ type: "DISMISS_TOAST", toastId: n }),
		}
	);
}
function Me(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function (i) {
		if ((e == null || e(i), n === !1 || !i.defaultPrevented))
			return t == null ? void 0 : t(i);
	};
}
function rm(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Sv(...e) {
	return (t) => {
		let n = !1;
		const r = e.map((i) => {
			const s = rm(i, t);
			return !n && typeof s == "function" && (n = !0), s;
		});
		if (n)
			return () => {
				for (let i = 0; i < r.length; i++) {
					const s = r[i];
					typeof s == "function" ? s() : rm(e[i], null);
				}
			};
	};
}
function nn(...e) {
	return b.useCallback(Sv(...e), e);
}
function tu(e, t = []) {
	let n = [];
	function r(s, o) {
		const a = b.createContext(o),
			l = n.length;
		n = [...n, o];
		const u = (d) => {
			var m;
			const { scope: f, children: h, ...g } = d,
				y =
					((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) ||
					a,
				x = b.useMemo(() => g, Object.values(g));
			return w.jsx(y.Provider, { value: x, children: h });
		};
		u.displayName = s + "Provider";
		function c(d, f) {
			var y;
			const h =
					((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) ||
					a,
				g = b.useContext(h);
			if (g) return g;
			if (o !== void 0) return o;
			throw new Error(
				"`".concat(d, "` must be used within `").concat(s, "`")
			);
		}
		return [u, c];
	}
	const i = () => {
		const s = n.map((o) => b.createContext(o));
		return function (a) {
			const l = (a == null ? void 0 : a[e]) || s;
			return b.useMemo(
				() => ({ ["__scope".concat(e)]: { ...a, [e]: l } }),
				[a, l]
			);
		};
	};
	return (i.scopeName = e), [r, xE(i, ...t)];
}
function xE(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
		return function (s) {
			const o = r.reduce((a, { useScope: l, scopeName: u }) => {
				const d = l(s)["__scope".concat(u)];
				return { ...a, ...d };
			}, {});
			return b.useMemo(
				() => ({ ["__scope".concat(t.scopeName)]: o }),
				[o]
			);
		};
	};
	return (n.scopeName = t.scopeName), n;
}
function cd(e) {
	const t = wE(e),
		n = b.forwardRef((r, i) => {
			const { children: s, ...o } = r,
				a = b.Children.toArray(s),
				l = a.find(SE);
			if (l) {
				const u = l.props.children,
					c = a.map((d) =>
						d === l
							? b.Children.count(u) > 1
								? b.Children.only(null)
								: b.isValidElement(u)
								? u.props.children
								: null
							: d
					);
				return w.jsx(t, {
					...o,
					ref: i,
					children: b.isValidElement(u)
						? b.cloneElement(u, void 0, c)
						: null,
				});
			}
			return w.jsx(t, { ...o, ref: i, children: s });
		});
	return (n.displayName = "".concat(e, ".Slot")), n;
}
function wE(e) {
	const t = b.forwardRef((n, r) => {
		const { children: i, ...s } = n;
		if (b.isValidElement(i)) {
			const o = EE(i),
				a = TE(s, i.props);
			return (
				i.type !== b.Fragment && (a.ref = r ? Sv(r, o) : o),
				b.cloneElement(i, a)
			);
		}
		return b.Children.count(i) > 1 ? b.Children.only(null) : null;
	});
	return (t.displayName = "".concat(e, ".SlotClone")), t;
}
var Tv = Symbol("radix.slottable");
function bE(e) {
	const t = ({ children: n }) => w.jsx(w.Fragment, { children: n });
	return (t.displayName = "".concat(e, ".Slottable")), (t.__radixId = Tv), t;
}
function SE(e) {
	return (
		b.isValidElement(e) &&
		typeof e.type == "function" &&
		"__radixId" in e.type &&
		e.type.__radixId === Tv
	);
}
function TE(e, t) {
	const n = { ...t };
	for (const r in t) {
		const i = e[r],
			s = t[r];
		/^on[A-Z]/.test(r)
			? i && s
				? (n[r] = (...a) => {
						const l = s(...a);
						return i(...a), l;
				  })
				: i && (n[r] = i)
			: r === "style"
			? (n[r] = { ...i, ...s })
			: r === "className" && (n[r] = [i, s].filter(Boolean).join(" "));
	}
	return { ...e, ...n };
}
function EE(e) {
	var r, i;
	let t =
			(r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
				? void 0
				: r.get,
		n = t && "isReactWarning" in t && t.isReactWarning;
	return n
		? e.ref
		: ((t =
				(i = Object.getOwnPropertyDescriptor(e, "ref")) == null
					? void 0
					: i.get),
		  (n = t && "isReactWarning" in t && t.isReactWarning),
		  n ? e.props.ref : e.props.ref || e.ref);
}
function CE(e) {
	const t = e + "CollectionProvider",
		[n, r] = tu(t),
		[i, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
		o = (y) => {
			const { scope: x, children: m } = y,
				p = V.useRef(null),
				v = V.useRef(new Map()).current;
			return w.jsx(i, {
				scope: x,
				itemMap: v,
				collectionRef: p,
				children: m,
			});
		};
	o.displayName = t;
	const a = e + "CollectionSlot",
		l = cd(a),
		u = V.forwardRef((y, x) => {
			const { scope: m, children: p } = y,
				v = s(a, m),
				S = nn(x, v.collectionRef);
			return w.jsx(l, { ref: S, children: p });
		});
	u.displayName = a;
	const c = e + "CollectionItemSlot",
		d = "data-radix-collection-item",
		f = cd(c),
		h = V.forwardRef((y, x) => {
			const { scope: m, children: p, ...v } = y,
				S = V.useRef(null),
				T = nn(x, S),
				E = s(c, m);
			return (
				V.useEffect(
					() => (
						E.itemMap.set(S, { ref: S, ...v }),
						() => void E.itemMap.delete(S)
					)
				),
				w.jsx(f, { [d]: "", ref: T, children: p })
			);
		});
	h.displayName = c;
	function g(y) {
		const x = s(e + "CollectionConsumer", y);
		return V.useCallback(() => {
			const p = x.collectionRef.current;
			if (!p) return [];
			const v = Array.from(p.querySelectorAll("[".concat(d, "]")));
			return Array.from(x.itemMap.values()).sort(
				(E, A) => v.indexOf(E.ref.current) - v.indexOf(A.ref.current)
			);
		}, [x.collectionRef, x.itemMap]);
	}
	return [{ Provider: o, Slot: u, ItemSlot: h }, g, r];
}
var AE = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul",
	],
	pt = AE.reduce((e, t) => {
		const n = cd("Primitive.".concat(t)),
			r = b.forwardRef((i, s) => {
				const { asChild: o, ...a } = i,
					l = o ? n : t;
				return (
					typeof window < "u" &&
						(window[Symbol.for("radix-ui")] = !0),
					w.jsx(l, { ...a, ref: s })
				);
			});
		return (r.displayName = "Primitive.".concat(t)), { ...e, [t]: r };
	}, {});
function Ev(e, t) {
	e && Uo.flushSync(() => e.dispatchEvent(t));
}
function Tr(e) {
	const t = b.useRef(e);
	return (
		b.useEffect(() => {
			t.current = e;
		}),
		b.useMemo(
			() =>
				(...n) => {
					var r;
					return (r = t.current) == null ? void 0 : r.call(t, ...n);
				},
			[]
		)
	);
}
function PE(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Tr(e);
	b.useEffect(() => {
		const r = (i) => {
			i.key === "Escape" && n(i);
		};
		return (
			t.addEventListener("keydown", r, { capture: !0 }),
			() => t.removeEventListener("keydown", r, { capture: !0 })
		);
	}, [n, t]);
}
var kE = "DismissableLayer",
	dd = "dismissableLayer.update",
	RE = "dismissableLayer.pointerDownOutside",
	ME = "dismissableLayer.focusOutside",
	im,
	Cv = b.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	zf = b.forwardRef((e, t) => {
		var A;
		const {
				disableOutsidePointerEvents: n = !1,
				onEscapeKeyDown: r,
				onPointerDownOutside: i,
				onFocusOutside: s,
				onInteractOutside: o,
				onDismiss: a,
				...l
			} = e,
			u = b.useContext(Cv),
			[c, d] = b.useState(null),
			f =
				(A = c == null ? void 0 : c.ownerDocument) != null
					? A
					: globalThis == null
					? void 0
					: globalThis.document,
			[, h] = b.useState({}),
			g = nn(t, (C) => d(C)),
			y = Array.from(u.layers),
			[x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
			m = y.indexOf(x),
			p = c ? y.indexOf(c) : -1,
			v = u.layersWithOutsidePointerEventsDisabled.size > 0,
			S = p >= m,
			T = jE((C) => {
				const N = C.target,
					P = [...u.branches].some((F) => F.contains(N));
				!S ||
					P ||
					(i == null || i(C),
					o == null || o(C),
					C.defaultPrevented || a == null || a());
			}, f),
			E = LE((C) => {
				const N = C.target;
				[...u.branches].some((F) => F.contains(N)) ||
					(s == null || s(C),
					o == null || o(C),
					C.defaultPrevented || a == null || a());
			}, f);
		return (
			PE((C) => {
				p === u.layers.size - 1 &&
					(r == null || r(C),
					!C.defaultPrevented && a && (C.preventDefault(), a()));
			}, f),
			b.useEffect(() => {
				if (c)
					return (
						n &&
							(u.layersWithOutsidePointerEventsDisabled.size ===
								0 &&
								((im = f.body.style.pointerEvents),
								(f.body.style.pointerEvents = "none")),
							u.layersWithOutsidePointerEventsDisabled.add(c)),
						u.layers.add(c),
						sm(),
						() => {
							n &&
								u.layersWithOutsidePointerEventsDisabled
									.size === 1 &&
								(f.body.style.pointerEvents = im);
						}
					);
			}, [c, f, n, u]),
			b.useEffect(
				() => () => {
					c &&
						(u.layers.delete(c),
						u.layersWithOutsidePointerEventsDisabled.delete(c),
						sm());
				},
				[c, u]
			),
			b.useEffect(() => {
				const C = () => h({});
				return (
					document.addEventListener(dd, C),
					() => document.removeEventListener(dd, C)
				);
			}, []),
			w.jsx(pt.div, {
				...l,
				ref: g,
				style: {
					pointerEvents: v ? (S ? "auto" : "none") : void 0,
					...e.style,
				},
				onFocusCapture: Me(e.onFocusCapture, E.onFocusCapture),
				onBlurCapture: Me(e.onBlurCapture, E.onBlurCapture),
				onPointerDownCapture: Me(
					e.onPointerDownCapture,
					T.onPointerDownCapture
				),
			})
		);
	});
zf.displayName = kE;
var NE = "DismissableLayerBranch",
	Av = b.forwardRef((e, t) => {
		const n = b.useContext(Cv),
			r = b.useRef(null),
			i = nn(t, r);
		return (
			b.useEffect(() => {
				const s = r.current;
				if (s)
					return (
						n.branches.add(s),
						() => {
							n.branches.delete(s);
						}
					);
			}, [n.branches]),
			w.jsx(pt.div, { ...e, ref: i })
		);
	});
Av.displayName = NE;
function jE(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Tr(e),
		r = b.useRef(!1),
		i = b.useRef(() => {});
	return (
		b.useEffect(() => {
			const s = (a) => {
					if (a.target && !r.current) {
						let l = function () {
							Pv(RE, n, u, { discrete: !0 });
						};
						const u = { originalEvent: a };
						a.pointerType === "touch"
							? (t.removeEventListener("click", i.current),
							  (i.current = l),
							  t.addEventListener("click", i.current, {
									once: !0,
							  }))
							: l();
					} else t.removeEventListener("click", i.current);
					r.current = !1;
				},
				o = window.setTimeout(() => {
					t.addEventListener("pointerdown", s);
				}, 0);
			return () => {
				window.clearTimeout(o),
					t.removeEventListener("pointerdown", s),
					t.removeEventListener("click", i.current);
			};
		}, [t, n]),
		{ onPointerDownCapture: () => (r.current = !0) }
	);
}
function LE(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Tr(e),
		r = b.useRef(!1);
	return (
		b.useEffect(() => {
			const i = (s) => {
				s.target &&
					!r.current &&
					Pv(ME, n, { originalEvent: s }, { discrete: !1 });
			};
			return (
				t.addEventListener("focusin", i),
				() => t.removeEventListener("focusin", i)
			);
		}, [t, n]),
		{
			onFocusCapture: () => (r.current = !0),
			onBlurCapture: () => (r.current = !1),
		}
	);
}
function sm() {
	const e = new CustomEvent(dd);
	document.dispatchEvent(e);
}
function Pv(e, t, n, { discrete: r }) {
	const i = n.originalEvent.target,
		s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
	t && i.addEventListener(e, t, { once: !0 }),
		r ? Ev(i, s) : i.dispatchEvent(s);
}
var DE = zf,
	IE = Av,
	Er =
		globalThis != null && globalThis.document
			? b.useLayoutEffect
			: () => {},
	OE = "Portal",
	kv = b.forwardRef((e, t) => {
		var a;
		const { container: n, ...r } = e,
			[i, s] = b.useState(!1);
		Er(() => s(!0), []);
		const o =
			n ||
			(i &&
				((a = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: a.body));
		return o ? hv.createPortal(w.jsx(pt.div, { ...r, ref: t }), o) : null;
	});
kv.displayName = OE;
function FE(e, t) {
	return b.useReducer((n, r) => {
		const i = t[n][r];
		return i != null ? i : n;
	}, e);
}
var Hf = (e) => {
	const { present: t, children: n } = e,
		r = VE(t),
		i =
			typeof n == "function"
				? n({ present: r.isPresent })
				: b.Children.only(n),
		s = nn(r.ref, _E(i));
	return typeof n == "function" || r.isPresent
		? b.cloneElement(i, { ref: s })
		: null;
};
Hf.displayName = "Presence";
function VE(e) {
	const [t, n] = b.useState(),
		r = b.useRef(null),
		i = b.useRef(e),
		s = b.useRef("none"),
		o = e ? "mounted" : "unmounted",
		[a, l] = FE(o, {
			mounted: {
				UNMOUNT: "unmounted",
				ANIMATION_OUT: "unmountSuspended",
			},
			unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
			unmounted: { MOUNT: "mounted" },
		});
	return (
		b.useEffect(() => {
			const u = ma(r.current);
			s.current = a === "mounted" ? u : "none";
		}, [a]),
		Er(() => {
			const u = r.current,
				c = i.current;
			if (c !== e) {
				const f = s.current,
					h = ma(u);
				e
					? l("MOUNT")
					: h === "none" ||
					  (u == null ? void 0 : u.display) === "none"
					? l("UNMOUNT")
					: l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
					(i.current = e);
			}
		}, [e, l]),
		Er(() => {
			var u;
			if (t) {
				let c;
				const d =
						(u = t.ownerDocument.defaultView) != null ? u : window,
					f = (g) => {
						const x = ma(r.current).includes(g.animationName);
						if (
							g.target === t &&
							x &&
							(l("ANIMATION_END"), !i.current)
						) {
							const m = t.style.animationFillMode;
							(t.style.animationFillMode = "forwards"),
								(c = d.setTimeout(() => {
									t.style.animationFillMode === "forwards" &&
										(t.style.animationFillMode = m);
								}));
						}
					},
					h = (g) => {
						g.target === t && (s.current = ma(r.current));
					};
				return (
					t.addEventListener("animationstart", h),
					t.addEventListener("animationcancel", f),
					t.addEventListener("animationend", f),
					() => {
						d.clearTimeout(c),
							t.removeEventListener("animationstart", h),
							t.removeEventListener("animationcancel", f),
							t.removeEventListener("animationend", f);
					}
				);
			} else l("ANIMATION_END");
		}, [t, l]),
		{
			isPresent: ["mounted", "unmountSuspended"].includes(a),
			ref: b.useCallback((u) => {
				(r.current = u ? getComputedStyle(u) : null), n(u);
			}, []),
		}
	);
}
function ma(e) {
	return (e == null ? void 0 : e.animationName) || "none";
}
function _E(e) {
	var r, i;
	let t =
			(r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
				? void 0
				: r.get,
		n = t && "isReactWarning" in t && t.isReactWarning;
	return n
		? e.ref
		: ((t =
				(i = Object.getOwnPropertyDescriptor(e, "ref")) == null
					? void 0
					: i.get),
		  (n = t && "isReactWarning" in t && t.isReactWarning),
		  n ? e.props.ref : e.props.ref || e.ref);
}
var BE = J1[" useInsertionEffect ".trim().toString()] || Er;
function UE({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	const [i, s, o] = $E({ defaultProp: t, onChange: n }),
		a = e !== void 0,
		l = a ? e : i;
	{
		const c = b.useRef(e !== void 0);
		b.useEffect(() => {
			const d = c.current;
			if (d !== a) {
				const f = d ? "controlled" : "uncontrolled",
					h = a ? "controlled" : "uncontrolled";
				console.warn(
					""
						.concat(r, " is changing from ")
						.concat(f, " to ")
						.concat(
							h,
							". Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component."
						)
				);
			}
			c.current = a;
		}, [a, r]);
	}
	const u = b.useCallback(
		(c) => {
			var d;
			if (a) {
				const f = zE(c) ? c(e) : c;
				f !== e && ((d = o.current) == null || d.call(o, f));
			} else s(c);
		},
		[a, e, s, o]
	);
	return [l, u];
}
function $E({ defaultProp: e, onChange: t }) {
	const [n, r] = b.useState(e),
		i = b.useRef(n),
		s = b.useRef(t);
	return (
		BE(() => {
			s.current = t;
		}, [t]),
		b.useEffect(() => {
			var o;
			i.current !== n &&
				((o = s.current) == null || o.call(s, n), (i.current = n));
		}, [n, i]),
		[n, r, s]
	);
}
function zE(e) {
	return typeof e == "function";
}
var HE = Object.freeze({
		position: "absolute",
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		wordWrap: "normal",
	}),
	GE = "VisuallyHidden",
	nu = b.forwardRef((e, t) =>
		w.jsx(pt.span, { ...e, ref: t, style: { ...HE, ...e.style } })
	);
nu.displayName = GE;
var WE = nu,
	Gf = "ToastProvider",
	[Wf, KE, YE] = CE("Toast"),
	[Rv, h5] = tu("Toast", [YE]),
	[QE, ru] = Rv(Gf),
	Mv = (e) => {
		const {
				__scopeToast: t,
				label: n = "Notification",
				duration: r = 5e3,
				swipeDirection: i = "right",
				swipeThreshold: s = 50,
				children: o,
			} = e,
			[a, l] = b.useState(null),
			[u, c] = b.useState(0),
			d = b.useRef(!1),
			f = b.useRef(!1);
		return (
			n.trim() ||
				console.error(
					"Invalid prop `label` supplied to `".concat(
						Gf,
						"`. Expected non-empty `string`."
					)
				),
			w.jsx(Wf.Provider, {
				scope: t,
				children: w.jsx(QE, {
					scope: t,
					label: n,
					duration: r,
					swipeDirection: i,
					swipeThreshold: s,
					toastCount: u,
					viewport: a,
					onViewportChange: l,
					onToastAdd: b.useCallback(() => c((h) => h + 1), []),
					onToastRemove: b.useCallback(() => c((h) => h - 1), []),
					isFocusedToastEscapeKeyDownRef: d,
					isClosePausedRef: f,
					children: o,
				}),
			})
		);
	};
Mv.displayName = Gf;
var Nv = "ToastViewport",
	XE = ["F8"],
	fd = "toast.viewportPause",
	hd = "toast.viewportResume",
	jv = b.forwardRef((e, t) => {
		const {
				__scopeToast: n,
				hotkey: r = XE,
				label: i = "Notifications ({hotkey})",
				...s
			} = e,
			o = ru(Nv, n),
			a = KE(n),
			l = b.useRef(null),
			u = b.useRef(null),
			c = b.useRef(null),
			d = b.useRef(null),
			f = nn(t, d, o.onViewportChange),
			h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
			g = o.toastCount > 0;
		b.useEffect(() => {
			const x = (m) => {
				var v;
				r.length !== 0 &&
					r.every((S) => m[S] || m.code === S) &&
					((v = d.current) == null || v.focus());
			};
			return (
				document.addEventListener("keydown", x),
				() => document.removeEventListener("keydown", x)
			);
		}, [r]),
			b.useEffect(() => {
				const x = l.current,
					m = d.current;
				if (g && x && m) {
					const p = () => {
							if (!o.isClosePausedRef.current) {
								const E = new CustomEvent(fd);
								m.dispatchEvent(E),
									(o.isClosePausedRef.current = !0);
							}
						},
						v = () => {
							if (o.isClosePausedRef.current) {
								const E = new CustomEvent(hd);
								m.dispatchEvent(E),
									(o.isClosePausedRef.current = !1);
							}
						},
						S = (E) => {
							!x.contains(E.relatedTarget) && v();
						},
						T = () => {
							x.contains(document.activeElement) || v();
						};
					return (
						x.addEventListener("focusin", p),
						x.addEventListener("focusout", S),
						x.addEventListener("pointermove", p),
						x.addEventListener("pointerleave", T),
						window.addEventListener("blur", p),
						window.addEventListener("focus", v),
						() => {
							x.removeEventListener("focusin", p),
								x.removeEventListener("focusout", S),
								x.removeEventListener("pointermove", p),
								x.removeEventListener("pointerleave", T),
								window.removeEventListener("blur", p),
								window.removeEventListener("focus", v);
						}
					);
				}
			}, [g, o.isClosePausedRef]);
		const y = b.useCallback(
			({ tabbingDirection: x }) => {
				const p = a().map((v) => {
					const S = v.ref.current,
						T = [S, ...uC(S)];
					return x === "forwards" ? T : T.reverse();
				});
				return (x === "forwards" ? p.reverse() : p).flat();
			},
			[a]
		);
		return (
			b.useEffect(() => {
				const x = d.current;
				if (x) {
					const m = (p) => {
						var T, E, A;
						const v = p.altKey || p.ctrlKey || p.metaKey;
						if (p.key === "Tab" && !v) {
							const C = document.activeElement,
								N = p.shiftKey;
							if (p.target === x && N) {
								(T = u.current) == null || T.focus();
								return;
							}
							const I = y({
									tabbingDirection: N
										? "backwards"
										: "forwards",
								}),
								$ = I.findIndex((D) => D === C);
							Qu(I.slice($ + 1))
								? p.preventDefault()
								: N
								? (E = u.current) == null || E.focus()
								: (A = c.current) == null || A.focus();
						}
					};
					return (
						x.addEventListener("keydown", m),
						() => x.removeEventListener("keydown", m)
					);
				}
			}, [a, y]),
			w.jsxs(IE, {
				ref: l,
				role: "region",
				"aria-label": i.replace("{hotkey}", h),
				tabIndex: -1,
				style: { pointerEvents: g ? void 0 : "none" },
				children: [
					g &&
						w.jsx(pd, {
							ref: u,
							onFocusFromOutsideViewport: () => {
								const x = y({ tabbingDirection: "forwards" });
								Qu(x);
							},
						}),
					w.jsx(Wf.Slot, {
						scope: n,
						children: w.jsx(pt.ol, { tabIndex: -1, ...s, ref: f }),
					}),
					g &&
						w.jsx(pd, {
							ref: c,
							onFocusFromOutsideViewport: () => {
								const x = y({ tabbingDirection: "backwards" });
								Qu(x);
							},
						}),
				],
			})
		);
	});
jv.displayName = Nv;
var Lv = "ToastFocusProxy",
	pd = b.forwardRef((e, t) => {
		const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
			s = ru(Lv, n);
		return w.jsx(nu, {
			"aria-hidden": !0,
			tabIndex: 0,
			...i,
			ref: t,
			style: { position: "fixed" },
			onFocus: (o) => {
				var u;
				const a = o.relatedTarget;
				!((u = s.viewport) != null && u.contains(a)) && r();
			},
		});
	});
pd.displayName = Lv;
var $o = "Toast",
	qE = "toast.swipeStart",
	ZE = "toast.swipeMove",
	JE = "toast.swipeCancel",
	eC = "toast.swipeEnd",
	Dv = b.forwardRef((e, t) => {
		const {
				forceMount: n,
				open: r,
				defaultOpen: i,
				onOpenChange: s,
				...o
			} = e,
			[a, l] = UE({
				prop: r,
				defaultProp: i != null ? i : !0,
				onChange: s,
				caller: $o,
			});
		return w.jsx(Hf, {
			present: n || a,
			children: w.jsx(rC, {
				open: a,
				...o,
				ref: t,
				onClose: () => l(!1),
				onPause: Tr(e.onPause),
				onResume: Tr(e.onResume),
				onSwipeStart: Me(e.onSwipeStart, (u) => {
					u.currentTarget.setAttribute("data-swipe", "start");
				}),
				onSwipeMove: Me(e.onSwipeMove, (u) => {
					const { x: c, y: d } = u.detail.delta;
					u.currentTarget.setAttribute("data-swipe", "move"),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-move-x",
							"".concat(c, "px")
						),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-move-y",
							"".concat(d, "px")
						);
				}),
				onSwipeCancel: Me(e.onSwipeCancel, (u) => {
					u.currentTarget.setAttribute("data-swipe", "cancel"),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-move-x"
						),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-move-y"
						),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-end-x"
						),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-end-y"
						);
				}),
				onSwipeEnd: Me(e.onSwipeEnd, (u) => {
					const { x: c, y: d } = u.detail.delta;
					u.currentTarget.setAttribute("data-swipe", "end"),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-move-x"
						),
						u.currentTarget.style.removeProperty(
							"--radix-toast-swipe-move-y"
						),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-end-x",
							"".concat(c, "px")
						),
						u.currentTarget.style.setProperty(
							"--radix-toast-swipe-end-y",
							"".concat(d, "px")
						),
						l(!1);
				}),
			}),
		});
	});
Dv.displayName = $o;
var [tC, nC] = Rv($o, { onClose() {} }),
	rC = b.forwardRef((e, t) => {
		const {
				__scopeToast: n,
				type: r = "foreground",
				duration: i,
				open: s,
				onClose: o,
				onEscapeKeyDown: a,
				onPause: l,
				onResume: u,
				onSwipeStart: c,
				onSwipeMove: d,
				onSwipeCancel: f,
				onSwipeEnd: h,
				...g
			} = e,
			y = ru($o, n),
			[x, m] = b.useState(null),
			p = nn(t, (D) => m(D)),
			v = b.useRef(null),
			S = b.useRef(null),
			T = i || y.duration,
			E = b.useRef(0),
			A = b.useRef(T),
			C = b.useRef(0),
			{ onToastAdd: N, onToastRemove: P } = y,
			F = Tr(() => {
				var K;
				(x == null ? void 0 : x.contains(document.activeElement)) &&
					((K = y.viewport) == null || K.focus()),
					o();
			}),
			I = b.useCallback(
				(D) => {
					!D ||
						D === 1 / 0 ||
						(window.clearTimeout(C.current),
						(E.current = new Date().getTime()),
						(C.current = window.setTimeout(F, D)));
				},
				[F]
			);
		b.useEffect(() => {
			const D = y.viewport;
			if (D) {
				const K = () => {
						I(A.current), u == null || u();
					},
					U = () => {
						const Y = new Date().getTime() - E.current;
						(A.current = A.current - Y),
							window.clearTimeout(C.current),
							l == null || l();
					};
				return (
					D.addEventListener(fd, U),
					D.addEventListener(hd, K),
					() => {
						D.removeEventListener(fd, U),
							D.removeEventListener(hd, K);
					}
				);
			}
		}, [y.viewport, T, l, u, I]),
			b.useEffect(() => {
				s && !y.isClosePausedRef.current && I(T);
			}, [s, T, y.isClosePausedRef, I]),
			b.useEffect(() => (N(), () => P()), [N, P]);
		const $ = b.useMemo(() => (x ? Uv(x) : null), [x]);
		return y.viewport
			? w.jsxs(w.Fragment, {
					children: [
						$ &&
							w.jsx(iC, {
								__scopeToast: n,
								role: "status",
								"aria-live":
									r === "foreground" ? "assertive" : "polite",
								"aria-atomic": !0,
								children: $,
							}),
						w.jsx(tC, {
							scope: n,
							onClose: F,
							children: Uo.createPortal(
								w.jsx(Wf.ItemSlot, {
									scope: n,
									children: w.jsx(DE, {
										asChild: !0,
										onEscapeKeyDown: Me(a, () => {
											y.isFocusedToastEscapeKeyDownRef
												.current || F(),
												(y.isFocusedToastEscapeKeyDownRef.current =
													!1);
										}),
										children: w.jsx(pt.li, {
											role: "status",
											"aria-live": "off",
											"aria-atomic": !0,
											tabIndex: 0,
											"data-state": s ? "open" : "closed",
											"data-swipe-direction":
												y.swipeDirection,
											...g,
											ref: p,
											style: {
												userSelect: "none",
												touchAction: "none",
												...e.style,
											},
											onKeyDown: Me(e.onKeyDown, (D) => {
												D.key === "Escape" &&
													(a == null ||
														a(D.nativeEvent),
													D.nativeEvent
														.defaultPrevented ||
														((y.isFocusedToastEscapeKeyDownRef.current =
															!0),
														F()));
											}),
											onPointerDown: Me(
												e.onPointerDown,
												(D) => {
													D.button === 0 &&
														(v.current = {
															x: D.clientX,
															y: D.clientY,
														});
												}
											),
											onPointerMove: Me(
												e.onPointerMove,
												(D) => {
													if (!v.current) return;
													const K =
															D.clientX -
															v.current.x,
														U =
															D.clientY -
															v.current.y,
														Y = !!S.current,
														k = [
															"left",
															"right",
														].includes(
															y.swipeDirection
														),
														R = [
															"left",
															"up",
														].includes(
															y.swipeDirection
														)
															? Math.min
															: Math.max,
														L = k ? R(0, K) : 0,
														H = k ? 0 : R(0, U),
														z =
															D.pointerType ===
															"touch"
																? 10
																: 2,
														G = { x: L, y: H },
														Q = {
															originalEvent: D,
															delta: G,
														};
													Y
														? ((S.current = G),
														  ga(ZE, d, Q, {
																discrete: !1,
														  }))
														: om(
																G,
																y.swipeDirection,
																z
														  )
														? ((S.current = G),
														  ga(qE, c, Q, {
																discrete: !1,
														  }),
														  D.target.setPointerCapture(
																D.pointerId
														  ))
														: (Math.abs(K) > z ||
																Math.abs(U) >
																	z) &&
														  (v.current = null);
												}
											),
											onPointerUp: Me(
												e.onPointerUp,
												(D) => {
													const K = S.current,
														U = D.target;
													if (
														(U.hasPointerCapture(
															D.pointerId
														) &&
															U.releasePointerCapture(
																D.pointerId
															),
														(S.current = null),
														(v.current = null),
														K)
													) {
														const Y =
																D.currentTarget,
															k = {
																originalEvent:
																	D,
																delta: K,
															};
														om(
															K,
															y.swipeDirection,
															y.swipeThreshold
														)
															? ga(eC, h, k, {
																	discrete:
																		!0,
															  })
															: ga(JE, f, k, {
																	discrete:
																		!0,
															  }),
															Y.addEventListener(
																"click",
																(R) =>
																	R.preventDefault(),
																{ once: !0 }
															);
													}
												}
											),
										}),
									}),
								}),
								y.viewport
							),
						}),
					],
			  })
			: null;
	}),
	iC = (e) => {
		const { __scopeToast: t, children: n, ...r } = e,
			i = ru($o, t),
			[s, o] = b.useState(!1),
			[a, l] = b.useState(!1);
		return (
			aC(() => o(!0)),
			b.useEffect(() => {
				const u = window.setTimeout(() => l(!0), 1e3);
				return () => window.clearTimeout(u);
			}, []),
			a
				? null
				: w.jsx(kv, {
						asChild: !0,
						children: w.jsx(nu, {
							...r,
							children:
								s &&
								w.jsxs(w.Fragment, {
									children: [i.label, " ", n],
								}),
						}),
				  })
		);
	},
	sC = "ToastTitle",
	Iv = b.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return w.jsx(pt.div, { ...r, ref: t });
	});
Iv.displayName = sC;
var oC = "ToastDescription",
	Ov = b.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return w.jsx(pt.div, { ...r, ref: t });
	});
Ov.displayName = oC;
var Fv = "ToastAction",
	Vv = b.forwardRef((e, t) => {
		const { altText: n, ...r } = e;
		return n.trim()
			? w.jsx(Bv, {
					altText: n,
					asChild: !0,
					children: w.jsx(Kf, { ...r, ref: t }),
			  })
			: (console.error(
					"Invalid prop `altText` supplied to `".concat(
						Fv,
						"`. Expected non-empty `string`."
					)
			  ),
			  null);
	});
Vv.displayName = Fv;
var _v = "ToastClose",
	Kf = b.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e,
			i = nC(_v, n);
		return w.jsx(Bv, {
			asChild: !0,
			children: w.jsx(pt.button, {
				type: "button",
				...r,
				ref: t,
				onClick: Me(e.onClick, i.onClose),
			}),
		});
	});
Kf.displayName = _v;
var Bv = b.forwardRef((e, t) => {
	const { __scopeToast: n, altText: r, ...i } = e;
	return w.jsx(pt.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": r || void 0,
		...i,
		ref: t,
	});
});
function Uv(e) {
	const t = [];
	return (
		Array.from(e.childNodes).forEach((r) => {
			if (
				(r.nodeType === r.TEXT_NODE &&
					r.textContent &&
					t.push(r.textContent),
				lC(r))
			) {
				const i =
						r.ariaHidden || r.hidden || r.style.display === "none",
					s = r.dataset.radixToastAnnounceExclude === "";
				if (!i)
					if (s) {
						const o = r.dataset.radixToastAnnounceAlt;
						o && t.push(o);
					} else t.push(...Uv(r));
			}
		}),
		t
	);
}
function ga(e, t, n, { discrete: r }) {
	const i = n.originalEvent.currentTarget,
		s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
	t && i.addEventListener(e, t, { once: !0 }),
		r ? Ev(i, s) : i.dispatchEvent(s);
}
var om = (e, t, n = 0) => {
	const r = Math.abs(e.x),
		i = Math.abs(e.y),
		s = r > i;
	return t === "left" || t === "right" ? s && r > n : !s && i > n;
};
function aC(e = () => {}) {
	const t = Tr(e);
	Er(() => {
		let n = 0,
			r = 0;
		return (
			(n = window.requestAnimationFrame(
				() => (r = window.requestAnimationFrame(t))
			)),
			() => {
				window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
			}
		);
	}, [t]);
}
function lC(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
function uC(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const i = r.tagName === "INPUT" && r.type === "hidden";
				return r.disabled || r.hidden || i
					? NodeFilter.FILTER_SKIP
					: r.tabIndex >= 0
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function Qu(e) {
	const t = document.activeElement;
	return e.some((n) =>
		n === t ? !0 : (n.focus(), document.activeElement !== t)
	);
}
var cC = Mv,
	$v = jv,
	zv = Dv,
	Hv = Iv,
	Gv = Ov,
	Wv = Vv,
	Kv = Kf;
function Yv(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++)
				e[t] && (n = Yv(e[t])) && (r && (r += " "), (r += n));
		} else for (n in e) e[n] && (r && (r += " "), (r += n));
	return r;
}
function Qv() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
		(e = arguments[n]) && (t = Yv(e)) && (r && (r += " "), (r += t));
	return r;
}
const am = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
	lm = Qv,
	dC = (e, t) => (n) => {
		var r;
		if ((t == null ? void 0 : t.variants) == null)
			return lm(
				e,
				n == null ? void 0 : n.class,
				n == null ? void 0 : n.className
			);
		const { variants: i, defaultVariants: s } = t,
			o = Object.keys(i).map((u) => {
				const c = n == null ? void 0 : n[u],
					d = s == null ? void 0 : s[u];
				if (c === null) return null;
				const f = am(c) || am(d);
				return i[u][f];
			}),
			a =
				n &&
				Object.entries(n).reduce((u, c) => {
					let [d, f] = c;
					return f === void 0 || (u[d] = f), u;
				}, {}),
			l =
				t == null || (r = t.compoundVariants) === null || r === void 0
					? void 0
					: r.reduce((u, c) => {
							let { class: d, className: f, ...h } = c;
							return Object.entries(h).every((g) => {
								let [y, x] = g;
								return Array.isArray(x)
									? x.includes({ ...s, ...a }[y])
									: { ...s, ...a }[y] === x;
							})
								? [...u, d, f]
								: u;
					  }, []);
		return lm(
			e,
			o,
			l,
			n == null ? void 0 : n.class,
			n == null ? void 0 : n.className
		);
	};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
	Xv = (...e) =>
		e
			.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
			.join(" ")
			.trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var hC = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pC = b.forwardRef(
	(
		{
			color: e = "currentColor",
			size: t = 24,
			strokeWidth: n = 2,
			absoluteStrokeWidth: r,
			className: i = "",
			children: s,
			iconNode: o,
			...a
		},
		l
	) =>
		b.createElement(
			"svg",
			{
				ref: l,
				...hC,
				width: t,
				height: t,
				stroke: e,
				strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
				className: Xv("lucide", i),
				...a,
			},
			[
				...o.map(([u, c]) => b.createElement(u, c)),
				...(Array.isArray(s) ? s : [s]),
			]
		)
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const on = (e, t) => {
	const n = b.forwardRef(({ className: r, ...i }, s) =>
		b.createElement(pC, {
			ref: s,
			iconNode: t,
			className: Xv("lucide-".concat(fC(e)), r),
			...i,
		})
	);
	return (n.displayName = "".concat(e)), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mC = on("Calculator", [
	[
		"rect",
		{ width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
	],
	["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
	["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
	["path", { d: "M16 10h.01", key: "1m94wz" }],
	["path", { d: "M12 10h.01", key: "1nrarc" }],
	["path", { d: "M8 10h.01", key: "19clt8" }],
	["path", { d: "M12 14h.01", key: "1etili" }],
	["path", { d: "M8 14h.01", key: "6423bh" }],
	["path", { d: "M12 18h.01", key: "mhygvu" }],
	["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gC = on("ChevronDown", [
	["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yC = on("Copy", [
	[
		"rect",
		{
			width: "14",
			height: "14",
			x: "8",
			y: "8",
			rx: "2",
			ry: "2",
			key: "17jyea",
		},
	],
	[
		"path",
		{
			d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
			key: "zix9uf",
		},
	],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vC = on("FileCheck", [
	[
		"path",
		{
			d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
			key: "1rqfz7",
		},
	],
	["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
	["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qv = on("GraduationCap", [
	[
		"path",
		{
			d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
			key: "j76jl0",
		},
	],
	["path", { d: "M22 10v6", key: "1lu8f3" }],
	["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _a = on("Info", [
	["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
	["path", { d: "M12 16v-4", key: "1dtifu" }],
	["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xC = on("Plus", [
	["path", { d: "M5 12h14", key: "1ays0h" }],
	["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wC = on("RotateCcw", [
	[
		"path",
		{
			d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
			key: "1357e3",
		},
	],
	["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bC = on("Save", [
	[
		"path",
		{
			d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
			key: "1c8476",
		},
	],
	["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
	["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SC = on("Trash2", [
	["path", { d: "M3 6h18", key: "d0wm0j" }],
	["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
	["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
	["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
	["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TC = on("X", [
		["path", { d: "M18 6 6 18", key: "1bl5f8" }],
		["path", { d: "m6 6 12 12", key: "d8bk6v" }],
	]),
	Yf = "-",
	EC = (e) => {
		const t = AC(e),
			{ conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
				e;
		return {
			getClassGroupId: (o) => {
				const a = o.split(Yf);
				return (
					a[0] === "" && a.length !== 1 && a.shift(),
					Zv(a, t) || CC(o)
				);
			},
			getConflictingClassGroupIds: (o, a) => {
				const l = n[o] || [];
				return a && r[o] ? [...l, ...r[o]] : l;
			},
		};
	},
	Zv = (e, t) => {
		var o;
		if (e.length === 0) return t.classGroupId;
		const n = e[0],
			r = t.nextPart.get(n),
			i = r ? Zv(e.slice(1), r) : void 0;
		if (i) return i;
		if (t.validators.length === 0) return;
		const s = e.join(Yf);
		return (o = t.validators.find(({ validator: a }) => a(s))) == null
			? void 0
			: o.classGroupId;
	},
	um = /^\[(.+)\]$/,
	CC = (e) => {
		if (um.test(e)) {
			const t = um.exec(e)[1],
				n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
			if (n) return "arbitrary.." + n;
		}
	},
	AC = (e) => {
		const { theme: t, prefix: n } = e,
			r = { nextPart: new Map(), validators: [] };
		return (
			kC(Object.entries(e.classGroups), n).forEach(([s, o]) => {
				md(o, r, s, t);
			}),
			r
		);
	},
	md = (e, t, n, r) => {
		e.forEach((i) => {
			if (typeof i == "string") {
				const s = i === "" ? t : cm(t, i);
				s.classGroupId = n;
				return;
			}
			if (typeof i == "function") {
				if (PC(i)) {
					md(i(r), t, n, r);
					return;
				}
				t.validators.push({ validator: i, classGroupId: n });
				return;
			}
			Object.entries(i).forEach(([s, o]) => {
				md(o, cm(t, s), n, r);
			});
		});
	},
	cm = (e, t) => {
		let n = e;
		return (
			t.split(Yf).forEach((r) => {
				n.nextPart.has(r) ||
					n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
					(n = n.nextPart.get(r));
			}),
			n
		);
	},
	PC = (e) => e.isThemeGetter,
	kC = (e, t) =>
		t
			? e.map(([n, r]) => {
					const i = r.map((s) =>
						typeof s == "string"
							? t + s
							: typeof s == "object"
							? Object.fromEntries(
									Object.entries(s).map(([o, a]) => [
										t + o,
										a,
									])
							  )
							: s
					);
					return [n, i];
			  })
			: e,
	RC = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let t = 0,
			n = new Map(),
			r = new Map();
		const i = (s, o) => {
			n.set(s, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
		};
		return {
			get(s) {
				let o = n.get(s);
				if (o !== void 0) return o;
				if ((o = r.get(s)) !== void 0) return i(s, o), o;
			},
			set(s, o) {
				n.has(s) ? n.set(s, o) : i(s, o);
			},
		};
	},
	Jv = "!",
	MC = (e) => {
		const { separator: t, experimentalParseClassName: n } = e,
			r = t.length === 1,
			i = t[0],
			s = t.length,
			o = (a) => {
				const l = [];
				let u = 0,
					c = 0,
					d;
				for (let x = 0; x < a.length; x++) {
					let m = a[x];
					if (u === 0) {
						if (m === i && (r || a.slice(x, x + s) === t)) {
							l.push(a.slice(c, x)), (c = x + s);
							continue;
						}
						if (m === "/") {
							d = x;
							continue;
						}
					}
					m === "[" ? u++ : m === "]" && u--;
				}
				const f = l.length === 0 ? a : a.substring(c),
					h = f.startsWith(Jv),
					g = h ? f.substring(1) : f,
					y = d && d > c ? d - c : void 0;
				return {
					modifiers: l,
					hasImportantModifier: h,
					baseClassName: g,
					maybePostfixModifierPosition: y,
				};
			};
		return n ? (a) => n({ className: a, parseClassName: o }) : o;
	},
	NC = (e) => {
		if (e.length <= 1) return e;
		const t = [];
		let n = [];
		return (
			e.forEach((r) => {
				r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
			}),
			t.push(...n.sort()),
			t
		);
	},
	jC = (e) => ({ cache: RC(e.cacheSize), parseClassName: MC(e), ...EC(e) }),
	LC = /\s+/,
	DC = (e, t) => {
		const {
				parseClassName: n,
				getClassGroupId: r,
				getConflictingClassGroupIds: i,
			} = t,
			s = [],
			o = e.trim().split(LC);
		let a = "";
		for (let l = o.length - 1; l >= 0; l -= 1) {
			const u = o[l],
				{
					modifiers: c,
					hasImportantModifier: d,
					baseClassName: f,
					maybePostfixModifierPosition: h,
				} = n(u);
			let g = !!h,
				y = r(g ? f.substring(0, h) : f);
			if (!y) {
				if (!g) {
					a = u + (a.length > 0 ? " " + a : a);
					continue;
				}
				if (((y = r(f)), !y)) {
					a = u + (a.length > 0 ? " " + a : a);
					continue;
				}
				g = !1;
			}
			const x = NC(c).join(":"),
				m = d ? x + Jv : x,
				p = m + y;
			if (s.includes(p)) continue;
			s.push(p);
			const v = i(y, g);
			for (let S = 0; S < v.length; ++S) {
				const T = v[S];
				s.push(m + T);
			}
			a = u + (a.length > 0 ? " " + a : a);
		}
		return a;
	};
function IC() {
	let e = 0,
		t,
		n,
		r = "";
	for (; e < arguments.length; )
		(t = arguments[e++]) && (n = ex(t)) && (r && (r += " "), (r += n));
	return r;
}
const ex = (e) => {
	if (typeof e == "string") return e;
	let t,
		n = "";
	for (let r = 0; r < e.length; r++)
		e[r] && (t = ex(e[r])) && (n && (n += " "), (n += t));
	return n;
};
function OC(e, ...t) {
	let n,
		r,
		i,
		s = o;
	function o(l) {
		const u = t.reduce((c, d) => d(c), e());
		return (n = jC(u)), (r = n.cache.get), (i = n.cache.set), (s = a), a(l);
	}
	function a(l) {
		const u = r(l);
		if (u) return u;
		const c = DC(l, n);
		return i(l, c), c;
	}
	return function () {
		return s(IC.apply(null, arguments));
	};
}
const le = (e) => {
		const t = (n) => n[e] || [];
		return (t.isThemeGetter = !0), t;
	},
	tx = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	FC = /^\d+\/\d+$/,
	VC = new Set(["px", "full", "screen"]),
	_C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	BC =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	UC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	$C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	zC =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	En = (e) => Ki(e) || VC.has(e) || FC.test(e),
	Wn = (e) => vs(e, "length", qC),
	Ki = (e) => !!e && !Number.isNaN(Number(e)),
	Xu = (e) => vs(e, "number", Ki),
	Ds = (e) => !!e && Number.isInteger(Number(e)),
	HC = (e) => e.endsWith("%") && Ki(e.slice(0, -1)),
	Z = (e) => tx.test(e),
	Kn = (e) => _C.test(e),
	GC = new Set(["length", "size", "percentage"]),
	WC = (e) => vs(e, GC, nx),
	KC = (e) => vs(e, "position", nx),
	YC = new Set(["image", "url"]),
	QC = (e) => vs(e, YC, JC),
	XC = (e) => vs(e, "", ZC),
	Is = () => !0,
	vs = (e, t, n) => {
		const r = tx.exec(e);
		return r
			? r[1]
				? typeof t == "string"
					? r[1] === t
					: t.has(r[1])
				: n(r[2])
			: !1;
	},
	qC = (e) => BC.test(e) && !UC.test(e),
	nx = () => !1,
	ZC = (e) => $C.test(e),
	JC = (e) => zC.test(e),
	eA = () => {
		const e = le("colors"),
			t = le("spacing"),
			n = le("blur"),
			r = le("brightness"),
			i = le("borderColor"),
			s = le("borderRadius"),
			o = le("borderSpacing"),
			a = le("borderWidth"),
			l = le("contrast"),
			u = le("grayscale"),
			c = le("hueRotate"),
			d = le("invert"),
			f = le("gap"),
			h = le("gradientColorStops"),
			g = le("gradientColorStopPositions"),
			y = le("inset"),
			x = le("margin"),
			m = le("opacity"),
			p = le("padding"),
			v = le("saturate"),
			S = le("scale"),
			T = le("sepia"),
			E = le("skew"),
			A = le("space"),
			C = le("translate"),
			N = () => ["auto", "contain", "none"],
			P = () => ["auto", "hidden", "clip", "visible", "scroll"],
			F = () => ["auto", Z, t],
			I = () => [Z, t],
			$ = () => ["", En, Wn],
			D = () => ["auto", Ki, Z],
			K = () => [
				"bottom",
				"center",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top",
				"top",
			],
			U = () => ["solid", "dashed", "dotted", "double", "none"],
			Y = () => [
				"normal",
				"multiply",
				"screen",
				"overlay",
				"darken",
				"lighten",
				"color-dodge",
				"color-burn",
				"hard-light",
				"soft-light",
				"difference",
				"exclusion",
				"hue",
				"saturation",
				"color",
				"luminosity",
			],
			k = () => [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
			],
			R = () => ["", "0", Z],
			L = () => [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			],
			H = () => [Ki, Z];
		return {
			cacheSize: 500,
			separator: ":",
			theme: {
				colors: [Is],
				spacing: [En, Wn],
				blur: ["none", "", Kn, Z],
				brightness: H(),
				borderColor: [e],
				borderRadius: ["none", "", "full", Kn, Z],
				borderSpacing: I(),
				borderWidth: $(),
				contrast: H(),
				grayscale: R(),
				hueRotate: H(),
				invert: R(),
				gap: I(),
				gradientColorStops: [e],
				gradientColorStopPositions: [HC, Wn],
				inset: F(),
				margin: F(),
				opacity: H(),
				padding: I(),
				saturate: H(),
				scale: H(),
				sepia: R(),
				skew: H(),
				space: I(),
				translate: I(),
			},
			classGroups: {
				aspect: [{ aspect: ["auto", "square", "video", Z] }],
				container: ["container"],
				columns: [{ columns: [Kn] }],
				"break-after": [{ "break-after": L() }],
				"break-before": [{ "break-before": L() }],
				"break-inside": [
					{
						"break-inside": [
							"auto",
							"avoid",
							"avoid-page",
							"avoid-column",
						],
					},
				],
				"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
				box: [{ box: ["border", "content"] }],
				display: [
					"block",
					"inline-block",
					"inline",
					"flex",
					"inline-flex",
					"table",
					"inline-table",
					"table-caption",
					"table-cell",
					"table-column",
					"table-column-group",
					"table-footer-group",
					"table-header-group",
					"table-row-group",
					"table-row",
					"flow-root",
					"grid",
					"inline-grid",
					"contents",
					"list-item",
					"hidden",
				],
				float: [{ float: ["right", "left", "none", "start", "end"] }],
				clear: [
					{
						clear: [
							"left",
							"right",
							"both",
							"none",
							"start",
							"end",
						],
					},
				],
				isolation: ["isolate", "isolation-auto"],
				"object-fit": [
					{
						object: [
							"contain",
							"cover",
							"fill",
							"none",
							"scale-down",
						],
					},
				],
				"object-position": [{ object: [...K(), Z] }],
				overflow: [{ overflow: P() }],
				"overflow-x": [{ "overflow-x": P() }],
				"overflow-y": [{ "overflow-y": P() }],
				overscroll: [{ overscroll: N() }],
				"overscroll-x": [{ "overscroll-x": N() }],
				"overscroll-y": [{ "overscroll-y": N() }],
				position: ["static", "fixed", "absolute", "relative", "sticky"],
				inset: [{ inset: [y] }],
				"inset-x": [{ "inset-x": [y] }],
				"inset-y": [{ "inset-y": [y] }],
				start: [{ start: [y] }],
				end: [{ end: [y] }],
				top: [{ top: [y] }],
				right: [{ right: [y] }],
				bottom: [{ bottom: [y] }],
				left: [{ left: [y] }],
				visibility: ["visible", "invisible", "collapse"],
				z: [{ z: ["auto", Ds, Z] }],
				basis: [{ basis: F() }],
				"flex-direction": [
					{ flex: ["row", "row-reverse", "col", "col-reverse"] },
				],
				"flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
				flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
				grow: [{ grow: R() }],
				shrink: [{ shrink: R() }],
				order: [{ order: ["first", "last", "none", Ds, Z] }],
				"grid-cols": [{ "grid-cols": [Is] }],
				"col-start-end": [
					{ col: ["auto", { span: ["full", Ds, Z] }, Z] },
				],
				"col-start": [{ "col-start": D() }],
				"col-end": [{ "col-end": D() }],
				"grid-rows": [{ "grid-rows": [Is] }],
				"row-start-end": [{ row: ["auto", { span: [Ds, Z] }, Z] }],
				"row-start": [{ "row-start": D() }],
				"row-end": [{ "row-end": D() }],
				"grid-flow": [
					{
						"grid-flow": [
							"row",
							"col",
							"dense",
							"row-dense",
							"col-dense",
						],
					},
				],
				"auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
				"auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
				gap: [{ gap: [f] }],
				"gap-x": [{ "gap-x": [f] }],
				"gap-y": [{ "gap-y": [f] }],
				"justify-content": [{ justify: ["normal", ...k()] }],
				"justify-items": [
					{ "justify-items": ["start", "end", "center", "stretch"] },
				],
				"justify-self": [
					{
						"justify-self": [
							"auto",
							"start",
							"end",
							"center",
							"stretch",
						],
					},
				],
				"align-content": [{ content: ["normal", ...k(), "baseline"] }],
				"align-items": [
					{
						items: [
							"start",
							"end",
							"center",
							"baseline",
							"stretch",
						],
					},
				],
				"align-self": [
					{
						self: [
							"auto",
							"start",
							"end",
							"center",
							"stretch",
							"baseline",
						],
					},
				],
				"place-content": [{ "place-content": [...k(), "baseline"] }],
				"place-items": [
					{
						"place-items": [
							"start",
							"end",
							"center",
							"baseline",
							"stretch",
						],
					},
				],
				"place-self": [
					{
						"place-self": [
							"auto",
							"start",
							"end",
							"center",
							"stretch",
						],
					},
				],
				p: [{ p: [p] }],
				px: [{ px: [p] }],
				py: [{ py: [p] }],
				ps: [{ ps: [p] }],
				pe: [{ pe: [p] }],
				pt: [{ pt: [p] }],
				pr: [{ pr: [p] }],
				pb: [{ pb: [p] }],
				pl: [{ pl: [p] }],
				m: [{ m: [x] }],
				mx: [{ mx: [x] }],
				my: [{ my: [x] }],
				ms: [{ ms: [x] }],
				me: [{ me: [x] }],
				mt: [{ mt: [x] }],
				mr: [{ mr: [x] }],
				mb: [{ mb: [x] }],
				ml: [{ ml: [x] }],
				"space-x": [{ "space-x": [A] }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": [A] }],
				"space-y-reverse": ["space-y-reverse"],
				w: [
					{
						w: [
							"auto",
							"min",
							"max",
							"fit",
							"svw",
							"lvw",
							"dvw",
							Z,
							t,
						],
					},
				],
				"min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
				"max-w": [
					{
						"max-w": [
							Z,
							t,
							"none",
							"full",
							"min",
							"max",
							"fit",
							"prose",
							{ screen: [Kn] },
							Kn,
						],
					},
				],
				h: [
					{
						h: [
							Z,
							t,
							"auto",
							"min",
							"max",
							"fit",
							"svh",
							"lvh",
							"dvh",
						],
					},
				],
				"min-h": [
					{
						"min-h": [
							Z,
							t,
							"min",
							"max",
							"fit",
							"svh",
							"lvh",
							"dvh",
						],
					},
				],
				"max-h": [
					{
						"max-h": [
							Z,
							t,
							"min",
							"max",
							"fit",
							"svh",
							"lvh",
							"dvh",
						],
					},
				],
				size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
				"font-size": [{ text: ["base", Kn, Wn] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [
					{
						font: [
							"thin",
							"extralight",
							"light",
							"normal",
							"medium",
							"semibold",
							"bold",
							"extrabold",
							"black",
							Xu,
						],
					},
				],
				"font-family": [{ font: [Is] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [
					{
						tracking: [
							"tighter",
							"tight",
							"normal",
							"wide",
							"wider",
							"widest",
							Z,
						],
					},
				],
				"line-clamp": [{ "line-clamp": ["none", Ki, Xu] }],
				leading: [
					{
						leading: [
							"none",
							"tight",
							"snug",
							"normal",
							"relaxed",
							"loose",
							En,
							Z,
						],
					},
				],
				"list-image": [{ "list-image": ["none", Z] }],
				"list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"placeholder-color": [{ placeholder: [e] }],
				"placeholder-opacity": [{ "placeholder-opacity": [m] }],
				"text-alignment": [
					{
						text: [
							"left",
							"center",
							"right",
							"justify",
							"start",
							"end",
						],
					},
				],
				"text-color": [{ text: [e] }],
				"text-opacity": [{ "text-opacity": [m] }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline",
				],
				"text-decoration-style": [{ decoration: [...U(), "wavy"] }],
				"text-decoration-thickness": [
					{ decoration: ["auto", "from-font", En, Wn] },
				],
				"underline-offset": [{ "underline-offset": ["auto", En, Z] }],
				"text-decoration-color": [{ decoration: [e] }],
				"text-transform": [
					"uppercase",
					"lowercase",
					"capitalize",
					"normal-case",
				],
				"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
				"text-wrap": [
					{ text: ["wrap", "nowrap", "balance", "pretty"] },
				],
				indent: [{ indent: I() }],
				"vertical-align": [
					{
						align: [
							"baseline",
							"top",
							"middle",
							"bottom",
							"text-top",
							"text-bottom",
							"sub",
							"super",
							Z,
						],
					},
				],
				whitespace: [
					{
						whitespace: [
							"normal",
							"nowrap",
							"pre",
							"pre-line",
							"pre-wrap",
							"break-spaces",
						],
					},
				],
				break: [{ break: ["normal", "words", "all", "keep"] }],
				hyphens: [{ hyphens: ["none", "manual", "auto"] }],
				content: [{ content: ["none", Z] }],
				"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
				"bg-clip": [
					{ "bg-clip": ["border", "padding", "content", "text"] },
				],
				"bg-opacity": [{ "bg-opacity": [m] }],
				"bg-origin": [
					{ "bg-origin": ["border", "padding", "content"] },
				],
				"bg-position": [{ bg: [...K(), KC] }],
				"bg-repeat": [
					{
						bg: [
							"no-repeat",
							{ repeat: ["", "x", "y", "round", "space"] },
						],
					},
				],
				"bg-size": [{ bg: ["auto", "cover", "contain", WC] }],
				"bg-image": [
					{
						bg: [
							"none",
							{
								"gradient-to": [
									"t",
									"tr",
									"r",
									"br",
									"b",
									"bl",
									"l",
									"tl",
								],
							},
							QC,
						],
					},
				],
				"bg-color": [{ bg: [e] }],
				"gradient-from-pos": [{ from: [g] }],
				"gradient-via-pos": [{ via: [g] }],
				"gradient-to-pos": [{ to: [g] }],
				"gradient-from": [{ from: [h] }],
				"gradient-via": [{ via: [h] }],
				"gradient-to": [{ to: [h] }],
				rounded: [{ rounded: [s] }],
				"rounded-s": [{ "rounded-s": [s] }],
				"rounded-e": [{ "rounded-e": [s] }],
				"rounded-t": [{ "rounded-t": [s] }],
				"rounded-r": [{ "rounded-r": [s] }],
				"rounded-b": [{ "rounded-b": [s] }],
				"rounded-l": [{ "rounded-l": [s] }],
				"rounded-ss": [{ "rounded-ss": [s] }],
				"rounded-se": [{ "rounded-se": [s] }],
				"rounded-ee": [{ "rounded-ee": [s] }],
				"rounded-es": [{ "rounded-es": [s] }],
				"rounded-tl": [{ "rounded-tl": [s] }],
				"rounded-tr": [{ "rounded-tr": [s] }],
				"rounded-br": [{ "rounded-br": [s] }],
				"rounded-bl": [{ "rounded-bl": [s] }],
				"border-w": [{ border: [a] }],
				"border-w-x": [{ "border-x": [a] }],
				"border-w-y": [{ "border-y": [a] }],
				"border-w-s": [{ "border-s": [a] }],
				"border-w-e": [{ "border-e": [a] }],
				"border-w-t": [{ "border-t": [a] }],
				"border-w-r": [{ "border-r": [a] }],
				"border-w-b": [{ "border-b": [a] }],
				"border-w-l": [{ "border-l": [a] }],
				"border-opacity": [{ "border-opacity": [m] }],
				"border-style": [{ border: [...U(), "hidden"] }],
				"divide-x": [{ "divide-x": [a] }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": [a] }],
				"divide-y-reverse": ["divide-y-reverse"],
				"divide-opacity": [{ "divide-opacity": [m] }],
				"divide-style": [{ divide: U() }],
				"border-color": [{ border: [i] }],
				"border-color-x": [{ "border-x": [i] }],
				"border-color-y": [{ "border-y": [i] }],
				"border-color-s": [{ "border-s": [i] }],
				"border-color-e": [{ "border-e": [i] }],
				"border-color-t": [{ "border-t": [i] }],
				"border-color-r": [{ "border-r": [i] }],
				"border-color-b": [{ "border-b": [i] }],
				"border-color-l": [{ "border-l": [i] }],
				"divide-color": [{ divide: [i] }],
				"outline-style": [{ outline: ["", ...U()] }],
				"outline-offset": [{ "outline-offset": [En, Z] }],
				"outline-w": [{ outline: [En, Wn] }],
				"outline-color": [{ outline: [e] }],
				"ring-w": [{ ring: $() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: [e] }],
				"ring-opacity": [{ "ring-opacity": [m] }],
				"ring-offset-w": [{ "ring-offset": [En, Wn] }],
				"ring-offset-color": [{ "ring-offset": [e] }],
				shadow: [{ shadow: ["", "inner", "none", Kn, XC] }],
				"shadow-color": [{ shadow: [Is] }],
				opacity: [{ opacity: [m] }],
				"mix-blend": [
					{ "mix-blend": [...Y(), "plus-lighter", "plus-darker"] },
				],
				"bg-blend": [{ "bg-blend": Y() }],
				filter: [{ filter: ["", "none"] }],
				blur: [{ blur: [n] }],
				brightness: [{ brightness: [r] }],
				contrast: [{ contrast: [l] }],
				"drop-shadow": [{ "drop-shadow": ["", "none", Kn, Z] }],
				grayscale: [{ grayscale: [u] }],
				"hue-rotate": [{ "hue-rotate": [c] }],
				invert: [{ invert: [d] }],
				saturate: [{ saturate: [v] }],
				sepia: [{ sepia: [T] }],
				"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
				"backdrop-blur": [{ "backdrop-blur": [n] }],
				"backdrop-brightness": [{ "backdrop-brightness": [r] }],
				"backdrop-contrast": [{ "backdrop-contrast": [l] }],
				"backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
				"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
				"backdrop-invert": [{ "backdrop-invert": [d] }],
				"backdrop-opacity": [{ "backdrop-opacity": [m] }],
				"backdrop-saturate": [{ "backdrop-saturate": [v] }],
				"backdrop-sepia": [{ "backdrop-sepia": [T] }],
				"border-collapse": [{ border: ["collapse", "separate"] }],
				"border-spacing": [{ "border-spacing": [o] }],
				"border-spacing-x": [{ "border-spacing-x": [o] }],
				"border-spacing-y": [{ "border-spacing-y": [o] }],
				"table-layout": [{ table: ["auto", "fixed"] }],
				caption: [{ caption: ["top", "bottom"] }],
				transition: [
					{
						transition: [
							"none",
							"all",
							"",
							"colors",
							"opacity",
							"shadow",
							"transform",
							Z,
						],
					},
				],
				duration: [{ duration: H() }],
				ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
				delay: [{ delay: H() }],
				animate: [
					{ animate: ["none", "spin", "ping", "pulse", "bounce", Z] },
				],
				transform: [{ transform: ["", "gpu", "none"] }],
				scale: [{ scale: [S] }],
				"scale-x": [{ "scale-x": [S] }],
				"scale-y": [{ "scale-y": [S] }],
				rotate: [{ rotate: [Ds, Z] }],
				"translate-x": [{ "translate-x": [C] }],
				"translate-y": [{ "translate-y": [C] }],
				"skew-x": [{ "skew-x": [E] }],
				"skew-y": [{ "skew-y": [E] }],
				"transform-origin": [
					{
						origin: [
							"center",
							"top",
							"top-right",
							"right",
							"bottom-right",
							"bottom",
							"bottom-left",
							"left",
							"top-left",
							Z,
						],
					},
				],
				accent: [{ accent: ["auto", e] }],
				appearance: [{ appearance: ["none", "auto"] }],
				cursor: [
					{
						cursor: [
							"auto",
							"default",
							"pointer",
							"wait",
							"text",
							"move",
							"help",
							"not-allowed",
							"none",
							"context-menu",
							"progress",
							"cell",
							"crosshair",
							"vertical-text",
							"alias",
							"copy",
							"no-drop",
							"grab",
							"grabbing",
							"all-scroll",
							"col-resize",
							"row-resize",
							"n-resize",
							"e-resize",
							"s-resize",
							"w-resize",
							"ne-resize",
							"nw-resize",
							"se-resize",
							"sw-resize",
							"ew-resize",
							"ns-resize",
							"nesw-resize",
							"nwse-resize",
							"zoom-in",
							"zoom-out",
							Z,
						],
					},
				],
				"caret-color": [{ caret: [e] }],
				"pointer-events": [{ "pointer-events": ["none", "auto"] }],
				resize: [{ resize: ["none", "y", "x", ""] }],
				"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
				"scroll-m": [{ "scroll-m": I() }],
				"scroll-mx": [{ "scroll-mx": I() }],
				"scroll-my": [{ "scroll-my": I() }],
				"scroll-ms": [{ "scroll-ms": I() }],
				"scroll-me": [{ "scroll-me": I() }],
				"scroll-mt": [{ "scroll-mt": I() }],
				"scroll-mr": [{ "scroll-mr": I() }],
				"scroll-mb": [{ "scroll-mb": I() }],
				"scroll-ml": [{ "scroll-ml": I() }],
				"scroll-p": [{ "scroll-p": I() }],
				"scroll-px": [{ "scroll-px": I() }],
				"scroll-py": [{ "scroll-py": I() }],
				"scroll-ps": [{ "scroll-ps": I() }],
				"scroll-pe": [{ "scroll-pe": I() }],
				"scroll-pt": [{ "scroll-pt": I() }],
				"scroll-pr": [{ "scroll-pr": I() }],
				"scroll-pb": [{ "scroll-pb": I() }],
				"scroll-pl": [{ "scroll-pl": I() }],
				"snap-align": [
					{ snap: ["start", "end", "center", "align-none"] },
				],
				"snap-stop": [{ snap: ["normal", "always"] }],
				"snap-type": [{ snap: ["none", "x", "y", "both"] }],
				"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
				touch: [{ touch: ["auto", "none", "manipulation"] }],
				"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
				"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
				"touch-pz": ["touch-pinch-zoom"],
				select: [{ select: ["none", "text", "all", "auto"] }],
				"will-change": [
					{
						"will-change": [
							"auto",
							"scroll",
							"contents",
							"transform",
							Z,
						],
					},
				],
				fill: [{ fill: [e, "none"] }],
				"stroke-w": [{ stroke: [En, Wn, Xu] }],
				stroke: [{ stroke: [e, "none"] }],
				sr: ["sr-only", "not-sr-only"],
				"forced-color-adjust": [
					{ "forced-color-adjust": ["auto", "none"] },
				],
			},
			conflictingClassGroups: {
				overflow: ["overflow-x", "overflow-y"],
				overscroll: ["overscroll-x", "overscroll-y"],
				inset: [
					"inset-x",
					"inset-y",
					"start",
					"end",
					"top",
					"right",
					"bottom",
					"left",
				],
				"inset-x": ["right", "left"],
				"inset-y": ["top", "bottom"],
				flex: ["basis", "grow", "shrink"],
				gap: ["gap-x", "gap-y"],
				p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
				px: ["pr", "pl"],
				py: ["pt", "pb"],
				m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
				mx: ["mr", "ml"],
				my: ["mt", "mb"],
				size: ["w", "h"],
				"font-size": ["leading"],
				"fvn-normal": [
					"fvn-ordinal",
					"fvn-slashed-zero",
					"fvn-figure",
					"fvn-spacing",
					"fvn-fraction",
				],
				"fvn-ordinal": ["fvn-normal"],
				"fvn-slashed-zero": ["fvn-normal"],
				"fvn-figure": ["fvn-normal"],
				"fvn-spacing": ["fvn-normal"],
				"fvn-fraction": ["fvn-normal"],
				"line-clamp": ["display", "overflow"],
				rounded: [
					"rounded-s",
					"rounded-e",
					"rounded-t",
					"rounded-r",
					"rounded-b",
					"rounded-l",
					"rounded-ss",
					"rounded-se",
					"rounded-ee",
					"rounded-es",
					"rounded-tl",
					"rounded-tr",
					"rounded-br",
					"rounded-bl",
				],
				"rounded-s": ["rounded-ss", "rounded-es"],
				"rounded-e": ["rounded-se", "rounded-ee"],
				"rounded-t": ["rounded-tl", "rounded-tr"],
				"rounded-r": ["rounded-tr", "rounded-br"],
				"rounded-b": ["rounded-br", "rounded-bl"],
				"rounded-l": ["rounded-tl", "rounded-bl"],
				"border-spacing": ["border-spacing-x", "border-spacing-y"],
				"border-w": [
					"border-w-s",
					"border-w-e",
					"border-w-t",
					"border-w-r",
					"border-w-b",
					"border-w-l",
				],
				"border-w-x": ["border-w-r", "border-w-l"],
				"border-w-y": ["border-w-t", "border-w-b"],
				"border-color": [
					"border-color-s",
					"border-color-e",
					"border-color-t",
					"border-color-r",
					"border-color-b",
					"border-color-l",
				],
				"border-color-x": ["border-color-r", "border-color-l"],
				"border-color-y": ["border-color-t", "border-color-b"],
				"scroll-m": [
					"scroll-mx",
					"scroll-my",
					"scroll-ms",
					"scroll-me",
					"scroll-mt",
					"scroll-mr",
					"scroll-mb",
					"scroll-ml",
				],
				"scroll-mx": ["scroll-mr", "scroll-ml"],
				"scroll-my": ["scroll-mt", "scroll-mb"],
				"scroll-p": [
					"scroll-px",
					"scroll-py",
					"scroll-ps",
					"scroll-pe",
					"scroll-pt",
					"scroll-pr",
					"scroll-pb",
					"scroll-pl",
				],
				"scroll-px": ["scroll-pr", "scroll-pl"],
				"scroll-py": ["scroll-pt", "scroll-pb"],
				touch: ["touch-x", "touch-y", "touch-pz"],
				"touch-x": ["touch"],
				"touch-y": ["touch"],
				"touch-pz": ["touch"],
			},
			conflictingClassGroupModifiers: { "font-size": ["leading"] },
		};
	},
	tA = OC(eA);
function hi(...e) {
	return tA(Qv(e));
}
const nA = cC,
	rx = b.forwardRef(({ className: e, ...t }, n) =>
		w.jsx($v, {
			ref: n,
			className: hi(
				"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
				e
			),
			...t,
		})
	);
rx.displayName = $v.displayName;
const rA = dC(
		"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
		{
			variants: {
				variant: {
					default: "border bg-background text-foreground",
					destructive:
						"destructive group border-destructive bg-destructive text-destructive-foreground",
				},
			},
			defaultVariants: { variant: "default" },
		}
	),
	ix = b.forwardRef(({ className: e, variant: t, ...n }, r) =>
		w.jsx(zv, { ref: r, className: hi(rA({ variant: t }), e), ...n })
	);
ix.displayName = zv.displayName;
const iA = b.forwardRef(({ className: e, ...t }, n) =>
	w.jsx(Wv, {
		ref: n,
		className: hi(
			"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
			e
		),
		...t,
	})
);
iA.displayName = Wv.displayName;
const sx = b.forwardRef(({ className: e, ...t }, n) =>
	w.jsx(Kv, {
		ref: n,
		className: hi(
			"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
			e
		),
		"toast-close": "",
		...t,
		children: w.jsx(TC, { className: "h-4 w-4" }),
	})
);
sx.displayName = Kv.displayName;
const ox = b.forwardRef(({ className: e, ...t }, n) =>
	w.jsx(Hv, { ref: n, className: hi("text-sm font-semibold", e), ...t })
);
ox.displayName = Hv.displayName;
const ax = b.forwardRef(({ className: e, ...t }, n) =>
	w.jsx(Gv, { ref: n, className: hi("text-sm opacity-90", e), ...t })
);
ax.displayName = Gv.displayName;
function sA() {
	const { toasts: e } = vE();
	return w.jsxs(nA, {
		children: [
			e.map(function ({
				id: t,
				title: n,
				description: r,
				action: i,
				...s
			}) {
				return w.jsxs(
					ix,
					{
						...s,
						children: [
							w.jsxs("div", {
								className: "grid gap-1",
								children: [
									n && w.jsx(ox, { children: n }),
									r && w.jsx(ax, { children: r }),
								],
							}),
							i,
							w.jsx(sx, {}),
						],
					},
					t
				);
			}),
			w.jsx(rx, {}),
		],
	});
}
const oA = ["top", "right", "bottom", "left"],
	Cr = Math.min,
	vt = Math.max,
	El = Math.round,
	ya = Math.floor,
	vn = (e) => ({ x: e, y: e }),
	aA = { left: "right", right: "left", bottom: "top", top: "bottom" },
	lA = { start: "end", end: "start" };
function gd(e, t, n) {
	return vt(e, Cr(t, n));
}
function Fn(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
	return e.split("-")[0];
}
function xs(e) {
	return e.split("-")[1];
}
function Qf(e) {
	return e === "x" ? "y" : "x";
}
function Xf(e) {
	return e === "y" ? "height" : "width";
}
const uA = new Set(["top", "bottom"]);
function mn(e) {
	return uA.has(Vn(e)) ? "y" : "x";
}
function qf(e) {
	return Qf(mn(e));
}
function cA(e, t, n) {
	n === void 0 && (n = !1);
	const r = xs(e),
		i = qf(e),
		s = Xf(i);
	let o =
		i === "x"
			? r === (n ? "end" : "start")
				? "right"
				: "left"
			: r === "start"
			? "bottom"
			: "top";
	return t.reference[s] > t.floating[s] && (o = Cl(o)), [o, Cl(o)];
}
function dA(e) {
	const t = Cl(e);
	return [yd(e), t, yd(t)];
}
function yd(e) {
	return e.replace(/start|end/g, (t) => lA[t]);
}
const dm = ["left", "right"],
	fm = ["right", "left"],
	fA = ["top", "bottom"],
	hA = ["bottom", "top"];
function pA(e, t, n) {
	switch (e) {
		case "top":
		case "bottom":
			return n ? (t ? fm : dm) : t ? dm : fm;
		case "left":
		case "right":
			return t ? fA : hA;
		default:
			return [];
	}
}
function mA(e, t, n, r) {
	const i = xs(e);
	let s = pA(Vn(e), n === "start", r);
	return (
		i && ((s = s.map((o) => o + "-" + i)), t && (s = s.concat(s.map(yd)))),
		s
	);
}
function Cl(e) {
	return e.replace(/left|right|bottom|top/g, (t) => aA[t]);
}
function gA(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function lx(e) {
	return typeof e != "number"
		? gA(e)
		: { top: e, right: e, bottom: e, left: e };
}
function Al(e) {
	const { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n,
	};
}
function hm(e, t, n) {
	let { reference: r, floating: i } = e;
	const s = mn(t),
		o = qf(t),
		a = Xf(o),
		l = Vn(t),
		u = s === "y",
		c = r.x + r.width / 2 - i.width / 2,
		d = r.y + r.height / 2 - i.height / 2,
		f = r[a] / 2 - i[a] / 2;
	let h;
	switch (l) {
		case "top":
			h = { x: c, y: r.y - i.height };
			break;
		case "bottom":
			h = { x: c, y: r.y + r.height };
			break;
		case "right":
			h = { x: r.x + r.width, y: d };
			break;
		case "left":
			h = { x: r.x - i.width, y: d };
			break;
		default:
			h = { x: r.x, y: r.y };
	}
	switch (xs(t)) {
		case "start":
			h[o] -= f * (n && u ? -1 : 1);
			break;
		case "end":
			h[o] += f * (n && u ? -1 : 1);
			break;
	}
	return h;
}
const yA = async (e, t, n) => {
	const {
			placement: r = "bottom",
			strategy: i = "absolute",
			middleware: s = [],
			platform: o,
		} = n,
		a = s.filter(Boolean),
		l = await (o.isRTL == null ? void 0 : o.isRTL(t));
	let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
		{ x: c, y: d } = hm(u, r, l),
		f = r,
		h = {},
		g = 0;
	for (let y = 0; y < a.length; y++) {
		const { name: x, fn: m } = a[y],
			{
				x: p,
				y: v,
				data: S,
				reset: T,
			} = await m({
				x: c,
				y: d,
				initialPlacement: r,
				placement: f,
				strategy: i,
				middlewareData: h,
				rects: u,
				platform: o,
				elements: { reference: e, floating: t },
			});
		(c = p != null ? p : c),
			(d = v != null ? v : d),
			(h = { ...h, [x]: { ...h[x], ...S } }),
			T &&
				g <= 50 &&
				(g++,
				typeof T == "object" &&
					(T.placement && (f = T.placement),
					T.rects &&
						(u =
							T.rects === !0
								? await o.getElementRects({
										reference: e,
										floating: t,
										strategy: i,
								  })
								: T.rects),
					({ x: c, y: d } = hm(u, f, l))),
				(y = -1));
	}
	return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function ko(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: i, platform: s, rects: o, elements: a, strategy: l } = e,
		{
			boundary: u = "clippingAncestors",
			rootBoundary: c = "viewport",
			elementContext: d = "floating",
			altBoundary: f = !1,
			padding: h = 0,
		} = Fn(t, e),
		g = lx(h),
		x = a[f ? (d === "floating" ? "reference" : "floating") : d],
		m = Al(
			await s.getClippingRect({
				element:
					(n = await (s.isElement == null
						? void 0
						: s.isElement(x))) == null || n
						? x
						: x.contextElement ||
						  (await (s.getDocumentElement == null
								? void 0
								: s.getDocumentElement(a.floating))),
				boundary: u,
				rootBoundary: c,
				strategy: l,
			})
		),
		p =
			d === "floating"
				? {
						x: r,
						y: i,
						width: o.floating.width,
						height: o.floating.height,
				  }
				: o.reference,
		v = await (s.getOffsetParent == null
			? void 0
			: s.getOffsetParent(a.floating)),
		S = (await (s.isElement == null ? void 0 : s.isElement(v)))
			? (await (s.getScale == null ? void 0 : s.getScale(v))) || {
					x: 1,
					y: 1,
			  }
			: { x: 1, y: 1 },
		T = Al(
			s.convertOffsetParentRelativeRectToViewportRelativeRect
				? await s.convertOffsetParentRelativeRectToViewportRelativeRect(
						{ elements: a, rect: p, offsetParent: v, strategy: l }
				  )
				: p
		);
	return {
		top: (m.top - T.top + g.top) / S.y,
		bottom: (T.bottom - m.bottom + g.bottom) / S.y,
		left: (m.left - T.left + g.left) / S.x,
		right: (T.right - m.right + g.right) / S.x,
	};
}
const vA = (e) => ({
		name: "arrow",
		options: e,
		async fn(t) {
			const {
					x: n,
					y: r,
					placement: i,
					rects: s,
					platform: o,
					elements: a,
					middlewareData: l,
				} = t,
				{ element: u, padding: c = 0 } = Fn(e, t) || {};
			if (u == null) return {};
			const d = lx(c),
				f = { x: n, y: r },
				h = qf(i),
				g = Xf(h),
				y = await o.getDimensions(u),
				x = h === "y",
				m = x ? "top" : "left",
				p = x ? "bottom" : "right",
				v = x ? "clientHeight" : "clientWidth",
				S = s.reference[g] + s.reference[h] - f[h] - s.floating[g],
				T = f[h] - s.reference[h],
				E = await (o.getOffsetParent == null
					? void 0
					: o.getOffsetParent(u));
			let A = E ? E[v] : 0;
			(!A || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
				(A = a.floating[v] || s.floating[g]);
			const C = S / 2 - T / 2,
				N = A / 2 - y[g] / 2 - 1,
				P = Cr(d[m], N),
				F = Cr(d[p], N),
				I = P,
				$ = A - y[g] - F,
				D = A / 2 - y[g] / 2 + C,
				K = gd(I, D, $),
				U =
					!l.arrow &&
					xs(i) != null &&
					D !== K &&
					s.reference[g] / 2 - (D < I ? P : F) - y[g] / 2 < 0,
				Y = U ? (D < I ? D - I : D - $) : 0;
			return {
				[h]: f[h] + Y,
				data: {
					[h]: K,
					centerOffset: D - K - Y,
					...(U && { alignmentOffset: Y }),
				},
				reset: U,
			};
		},
	}),
	xA = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "flip",
				options: e,
				async fn(t) {
					var n, r;
					const {
							placement: i,
							middlewareData: s,
							rects: o,
							initialPlacement: a,
							platform: l,
							elements: u,
						} = t,
						{
							mainAxis: c = !0,
							crossAxis: d = !0,
							fallbackPlacements: f,
							fallbackStrategy: h = "bestFit",
							fallbackAxisSideDirection: g = "none",
							flipAlignment: y = !0,
							...x
						} = Fn(e, t);
					if ((n = s.arrow) != null && n.alignmentOffset) return {};
					const m = Vn(i),
						p = mn(a),
						v = Vn(a) === a,
						S = await (l.isRTL == null
							? void 0
							: l.isRTL(u.floating)),
						T = f || (v || !y ? [Cl(a)] : dA(a)),
						E = g !== "none";
					!f && E && T.push(...mA(a, y, g, S));
					const A = [a, ...T],
						C = await ko(t, x),
						N = [];
					let P = ((r = s.flip) == null ? void 0 : r.overflows) || [];
					if ((c && N.push(C[m]), d)) {
						const D = cA(i, o, S);
						N.push(C[D[0]], C[D[1]]);
					}
					if (
						((P = [...P, { placement: i, overflows: N }]),
						!N.every((D) => D <= 0))
					) {
						var F, I;
						const D =
								(((F = s.flip) == null ? void 0 : F.index) ||
									0) + 1,
							K = A[D];
						if (
							K &&
							(!(d === "alignment" ? p !== mn(K) : !1) ||
								P.every(
									(k) =>
										k.overflows[0] > 0 &&
										mn(k.placement) === p
								))
						)
							return {
								data: { index: D, overflows: P },
								reset: { placement: K },
							};
						let U =
							(I = P.filter((Y) => Y.overflows[0] <= 0).sort(
								(Y, k) => Y.overflows[1] - k.overflows[1]
							)[0]) == null
								? void 0
								: I.placement;
						if (!U)
							switch (h) {
								case "bestFit": {
									var $;
									const Y =
										($ = P.filter((k) => {
											if (E) {
												const R = mn(k.placement);
												return R === p || R === "y";
											}
											return !0;
										})
											.map((k) => [
												k.placement,
												k.overflows
													.filter((R) => R > 0)
													.reduce((R, L) => R + L, 0),
											])
											.sort((k, R) => k[1] - R[1])[0]) ==
										null
											? void 0
											: $[0];
									Y && (U = Y);
									break;
								}
								case "initialPlacement":
									U = a;
									break;
							}
						if (i !== U) return { reset: { placement: U } };
					}
					return {};
				},
			}
		);
	};
function pm(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width,
	};
}
function mm(e) {
	return oA.some((t) => e[t] >= 0);
}
const wA = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "hide",
				options: e,
				async fn(t) {
					const { rects: n } = t,
						{ strategy: r = "referenceHidden", ...i } = Fn(e, t);
					switch (r) {
						case "referenceHidden": {
							const s = await ko(t, {
									...i,
									elementContext: "reference",
								}),
								o = pm(s, n.reference);
							return {
								data: {
									referenceHiddenOffsets: o,
									referenceHidden: mm(o),
								},
							};
						}
						case "escaped": {
							const s = await ko(t, { ...i, altBoundary: !0 }),
								o = pm(s, n.floating);
							return {
								data: { escapedOffsets: o, escaped: mm(o) },
							};
						}
						default:
							return {};
					}
				},
			}
		);
	},
	ux = new Set(["left", "top"]);
async function bA(e, t) {
	const { placement: n, platform: r, elements: i } = e,
		s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
		o = Vn(n),
		a = xs(n),
		l = mn(n) === "y",
		u = ux.has(o) ? -1 : 1,
		c = s && l ? -1 : 1,
		d = Fn(t, e);
	let {
		mainAxis: f,
		crossAxis: h,
		alignmentAxis: g,
	} = typeof d == "number"
		? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
		: {
				mainAxis: d.mainAxis || 0,
				crossAxis: d.crossAxis || 0,
				alignmentAxis: d.alignmentAxis,
		  };
	return (
		a && typeof g == "number" && (h = a === "end" ? g * -1 : g),
		l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
	);
}
const SA = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: "offset",
				options: e,
				async fn(t) {
					var n, r;
					const { x: i, y: s, placement: o, middlewareData: a } = t,
						l = await bA(t, e);
					return o ===
						((n = a.offset) == null ? void 0 : n.placement) &&
						(r = a.arrow) != null &&
						r.alignmentOffset
						? {}
						: {
								x: i + l.x,
								y: s + l.y,
								data: { ...l, placement: o },
						  };
				},
			}
		);
	},
	TA = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "shift",
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: i } = t,
						{
							mainAxis: s = !0,
							crossAxis: o = !1,
							limiter: a = {
								fn: (x) => {
									let { x: m, y: p } = x;
									return { x: m, y: p };
								},
							},
							...l
						} = Fn(e, t),
						u = { x: n, y: r },
						c = await ko(t, l),
						d = mn(Vn(i)),
						f = Qf(d);
					let h = u[f],
						g = u[d];
					if (s) {
						const x = f === "y" ? "top" : "left",
							m = f === "y" ? "bottom" : "right",
							p = h + c[x],
							v = h - c[m];
						h = gd(p, h, v);
					}
					if (o) {
						const x = d === "y" ? "top" : "left",
							m = d === "y" ? "bottom" : "right",
							p = g + c[x],
							v = g - c[m];
						g = gd(p, g, v);
					}
					const y = a.fn({ ...t, [f]: h, [d]: g });
					return {
						...y,
						data: {
							x: y.x - n,
							y: y.y - r,
							enabled: { [f]: s, [d]: o },
						},
					};
				},
			}
		);
	},
	EA = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const {
							x: n,
							y: r,
							placement: i,
							rects: s,
							middlewareData: o,
						} = t,
						{
							offset: a = 0,
							mainAxis: l = !0,
							crossAxis: u = !0,
						} = Fn(e, t),
						c = { x: n, y: r },
						d = mn(i),
						f = Qf(d);
					let h = c[f],
						g = c[d];
					const y = Fn(a, t),
						x =
							typeof y == "number"
								? { mainAxis: y, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...y };
					if (l) {
						const v = f === "y" ? "height" : "width",
							S = s.reference[f] - s.floating[v] + x.mainAxis,
							T = s.reference[f] + s.reference[v] - x.mainAxis;
						h < S ? (h = S) : h > T && (h = T);
					}
					if (u) {
						var m, p;
						const v = f === "y" ? "width" : "height",
							S = ux.has(Vn(i)),
							T =
								s.reference[d] -
								s.floating[v] +
								((S &&
									((m = o.offset) == null ? void 0 : m[d])) ||
									0) +
								(S ? 0 : x.crossAxis),
							E =
								s.reference[d] +
								s.reference[v] +
								(S
									? 0
									: ((p = o.offset) == null
											? void 0
											: p[d]) || 0) -
								(S ? x.crossAxis : 0);
						g < T ? (g = T) : g > E && (g = E);
					}
					return { [f]: h, [d]: g };
				},
			}
		);
	},
	CA = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "size",
				options: e,
				async fn(t) {
					var n, r;
					const {
							placement: i,
							rects: s,
							platform: o,
							elements: a,
						} = t,
						{ apply: l = () => {}, ...u } = Fn(e, t),
						c = await ko(t, u),
						d = Vn(i),
						f = xs(i),
						h = mn(i) === "y",
						{ width: g, height: y } = s.floating;
					let x, m;
					d === "top" || d === "bottom"
						? ((x = d),
						  (m =
								f ===
								((await (o.isRTL == null
									? void 0
									: o.isRTL(a.floating)))
									? "start"
									: "end")
									? "left"
									: "right"))
						: ((m = d), (x = f === "end" ? "top" : "bottom"));
					const p = y - c.top - c.bottom,
						v = g - c.left - c.right,
						S = Cr(y - c[x], p),
						T = Cr(g - c[m], v),
						E = !t.middlewareData.shift;
					let A = S,
						C = T;
					if (
						((n = t.middlewareData.shift) != null &&
							n.enabled.x &&
							(C = v),
						(r = t.middlewareData.shift) != null &&
							r.enabled.y &&
							(A = p),
						E && !f)
					) {
						const P = vt(c.left, 0),
							F = vt(c.right, 0),
							I = vt(c.top, 0),
							$ = vt(c.bottom, 0);
						h
							? (C =
									g -
									2 *
										(P !== 0 || F !== 0
											? P + F
											: vt(c.left, c.right)))
							: (A =
									y -
									2 *
										(I !== 0 || $ !== 0
											? I + $
											: vt(c.top, c.bottom)));
					}
					await l({ ...t, availableWidth: C, availableHeight: A });
					const N = await o.getDimensions(a.floating);
					return g !== N.width || y !== N.height
						? { reset: { rects: !0 } }
						: {};
				},
			}
		);
	};
function iu() {
	return typeof window < "u";
}
function ws(e) {
	return cx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
	var t;
	return (
		(e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
		window
	);
}
function Sn(e) {
	var t;
	return (t = (cx(e) ? e.ownerDocument : e.document) || window.document) ==
		null
		? void 0
		: t.documentElement;
}
function cx(e) {
	return iu() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function rn(e) {
	return iu() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function wn(e) {
	return iu()
		? e instanceof HTMLElement || e instanceof bt(e).HTMLElement
		: !1;
}
function gm(e) {
	return !iu() || typeof ShadowRoot > "u"
		? !1
		: e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
const AA = new Set(["inline", "contents"]);
function zo(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: i } = sn(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !AA.has(i);
}
const PA = new Set(["table", "td", "th"]);
function kA(e) {
	return PA.has(ws(e));
}
const RA = [":popover-open", ":modal"];
function su(e) {
	return RA.some((t) => {
		try {
			return e.matches(t);
		} catch (n) {
			return !1;
		}
	});
}
const MA = ["transform", "translate", "scale", "rotate", "perspective"],
	NA = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
	jA = ["paint", "layout", "strict", "content"];
function Zf(e) {
	const t = Jf(),
		n = rn(e) ? sn(e) : e;
	return (
		MA.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
		(n.containerType ? n.containerType !== "normal" : !1) ||
		(!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
		(!t && (n.filter ? n.filter !== "none" : !1)) ||
		NA.some((r) => (n.willChange || "").includes(r)) ||
		jA.some((r) => (n.contain || "").includes(r))
	);
}
function LA(e) {
	let t = Ar(e);
	for (; wn(t) && !cs(t); ) {
		if (Zf(t)) return t;
		if (su(t)) return null;
		t = Ar(t);
	}
	return null;
}
function Jf() {
	return typeof CSS > "u" || !CSS.supports
		? !1
		: CSS.supports("-webkit-backdrop-filter", "none");
}
const DA = new Set(["html", "body", "#document"]);
function cs(e) {
	return DA.has(ws(e));
}
function sn(e) {
	return bt(e).getComputedStyle(e);
}
function ou(e) {
	return rn(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ar(e) {
	if (ws(e) === "html") return e;
	const t = e.assignedSlot || e.parentNode || (gm(e) && e.host) || Sn(e);
	return gm(t) ? t.host : t;
}
function dx(e) {
	const t = Ar(e);
	return cs(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: wn(t) && zo(t)
		? t
		: dx(t);
}
function Ro(e, t, n) {
	var r;
	t === void 0 && (t = []), n === void 0 && (n = !0);
	const i = dx(e),
		s = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
		o = bt(i);
	if (s) {
		const a = vd(o);
		return t.concat(
			o,
			o.visualViewport || [],
			zo(i) ? i : [],
			a && n ? Ro(a) : []
		);
	}
	return t.concat(i, Ro(i, [], n));
}
function vd(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fx(e) {
	const t = sn(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const i = wn(e),
		s = i ? e.offsetWidth : n,
		o = i ? e.offsetHeight : r,
		a = El(n) !== s || El(r) !== o;
	return a && ((n = s), (r = o)), { width: n, height: r, $: a };
}
function eh(e) {
	return rn(e) ? e : e.contextElement;
}
function Yi(e) {
	const t = eh(e);
	if (!wn(t)) return vn(1);
	const n = t.getBoundingClientRect(),
		{ width: r, height: i, $: s } = fx(t);
	let o = (s ? El(n.width) : n.width) / r,
		a = (s ? El(n.height) : n.height) / i;
	return (
		(!o || !Number.isFinite(o)) && (o = 1),
		(!a || !Number.isFinite(a)) && (a = 1),
		{ x: o, y: a }
	);
}
const IA = vn(0);
function hx(e) {
	const t = bt(e);
	return !Jf() || !t.visualViewport
		? IA
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function OA(e, t, n) {
	return t === void 0 && (t = !1), !n || (t && n !== bt(e)) ? !1 : t;
}
function ci(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const i = e.getBoundingClientRect(),
		s = eh(e);
	let o = vn(1);
	t && (r ? rn(r) && (o = Yi(r)) : (o = Yi(e)));
	const a = OA(s, n, r) ? hx(s) : vn(0);
	let l = (i.left + a.x) / o.x,
		u = (i.top + a.y) / o.y,
		c = i.width / o.x,
		d = i.height / o.y;
	if (s) {
		const f = bt(s),
			h = r && rn(r) ? bt(r) : r;
		let g = f,
			y = vd(g);
		for (; y && r && h !== g; ) {
			const x = Yi(y),
				m = y.getBoundingClientRect(),
				p = sn(y),
				v = m.left + (y.clientLeft + parseFloat(p.paddingLeft)) * x.x,
				S = m.top + (y.clientTop + parseFloat(p.paddingTop)) * x.y;
			(l *= x.x),
				(u *= x.y),
				(c *= x.x),
				(d *= x.y),
				(l += v),
				(u += S),
				(g = bt(y)),
				(y = vd(g));
		}
	}
	return Al({ width: c, height: d, x: l, y: u });
}
function th(e, t) {
	const n = ou(e).scrollLeft;
	return t ? t.left + n : ci(Sn(e)).left + n;
}
function px(e, t, n) {
	n === void 0 && (n = !1);
	const r = e.getBoundingClientRect(),
		i = r.left + t.scrollLeft - (n ? 0 : th(e, r)),
		s = r.top + t.scrollTop;
	return { x: i, y: s };
}
function FA(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
	const s = i === "fixed",
		o = Sn(r),
		a = t ? su(t.floating) : !1;
	if (r === o || (a && s)) return n;
	let l = { scrollLeft: 0, scrollTop: 0 },
		u = vn(1);
	const c = vn(0),
		d = wn(r);
	if (
		(d || (!d && !s)) &&
		((ws(r) !== "body" || zo(o)) && (l = ou(r)), wn(r))
	) {
		const h = ci(r);
		(u = Yi(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
	}
	const f = o && !d && !s ? px(o, l, !0) : vn(0);
	return {
		width: n.width * u.x,
		height: n.height * u.y,
		x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
		y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
	};
}
function VA(e) {
	return Array.from(e.getClientRects());
}
function _A(e) {
	const t = Sn(e),
		n = ou(e),
		r = e.ownerDocument.body,
		i = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		s = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let o = -n.scrollLeft + th(e);
	const a = -n.scrollTop;
	return (
		sn(r).direction === "rtl" &&
			(o += vt(t.clientWidth, r.clientWidth) - i),
		{ width: i, height: s, x: o, y: a }
	);
}
function BA(e, t) {
	const n = bt(e),
		r = Sn(e),
		i = n.visualViewport;
	let s = r.clientWidth,
		o = r.clientHeight,
		a = 0,
		l = 0;
	if (i) {
		(s = i.width), (o = i.height);
		const u = Jf();
		(!u || (u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
	}
	return { width: s, height: o, x: a, y: l };
}
const UA = new Set(["absolute", "fixed"]);
function $A(e, t) {
	const n = ci(e, !0, t === "fixed"),
		r = n.top + e.clientTop,
		i = n.left + e.clientLeft,
		s = wn(e) ? Yi(e) : vn(1),
		o = e.clientWidth * s.x,
		a = e.clientHeight * s.y,
		l = i * s.x,
		u = r * s.y;
	return { width: o, height: a, x: l, y: u };
}
function ym(e, t, n) {
	let r;
	if (t === "viewport") r = BA(e, n);
	else if (t === "document") r = _A(Sn(e));
	else if (rn(t)) r = $A(t, n);
	else {
		const i = hx(e);
		r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
	}
	return Al(r);
}
function mx(e, t) {
	const n = Ar(e);
	return n === t || !rn(n) || cs(n)
		? !1
		: sn(n).position === "fixed" || mx(n, t);
}
function zA(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = Ro(e, [], !1).filter((a) => rn(a) && ws(a) !== "body"),
		i = null;
	const s = sn(e).position === "fixed";
	let o = s ? Ar(e) : e;
	for (; rn(o) && !cs(o); ) {
		const a = sn(o),
			l = Zf(o);
		!l && a.position === "fixed" && (i = null),
			(
				s
					? !l && !i
					: (!l &&
							a.position === "static" &&
							!!i &&
							UA.has(i.position)) ||
					  (zo(o) && !l && mx(e, o))
			)
				? (r = r.filter((c) => c !== o))
				: (i = a),
			(o = Ar(o));
	}
	return t.set(e, r), r;
}
function HA(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
	const o = [
			...(n === "clippingAncestors"
				? su(t)
					? []
					: zA(t, this._c)
				: [].concat(n)),
			r,
		],
		a = o[0],
		l = o.reduce((u, c) => {
			const d = ym(t, c, i);
			return (
				(u.top = vt(d.top, u.top)),
				(u.right = Cr(d.right, u.right)),
				(u.bottom = Cr(d.bottom, u.bottom)),
				(u.left = vt(d.left, u.left)),
				u
			);
		}, ym(t, a, i));
	return {
		width: l.right - l.left,
		height: l.bottom - l.top,
		x: l.left,
		y: l.top,
	};
}
function GA(e) {
	const { width: t, height: n } = fx(e);
	return { width: t, height: n };
}
function WA(e, t, n) {
	const r = wn(t),
		i = Sn(t),
		s = n === "fixed",
		o = ci(e, !0, s, t);
	let a = { scrollLeft: 0, scrollTop: 0 };
	const l = vn(0);
	function u() {
		l.x = th(i);
	}
	if (r || (!r && !s))
		if (((ws(t) !== "body" || zo(i)) && (a = ou(t)), r)) {
			const h = ci(t, !0, s, t);
			(l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
		} else i && u();
	s && !r && i && u();
	const c = i && !r && !s ? px(i, a) : vn(0),
		d = o.left + a.scrollLeft - l.x - c.x,
		f = o.top + a.scrollTop - l.y - c.y;
	return { x: d, y: f, width: o.width, height: o.height };
}
function qu(e) {
	return sn(e).position === "static";
}
function vm(e, t) {
	if (!wn(e) || sn(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Sn(e) === n && (n = n.ownerDocument.body), n;
}
function gx(e, t) {
	const n = bt(e);
	if (su(e)) return n;
	if (!wn(e)) {
		let i = Ar(e);
		for (; i && !cs(i); ) {
			if (rn(i) && !qu(i)) return i;
			i = Ar(i);
		}
		return n;
	}
	let r = vm(e, t);
	for (; r && kA(r) && qu(r); ) r = vm(r, t);
	return r && cs(r) && qu(r) && !Zf(r) ? n : r || LA(e) || n;
}
const KA = async function (e) {
	const t = this.getOffsetParent || gx,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: WA(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: r.width, height: r.height },
	};
};
function YA(e) {
	return sn(e).direction === "rtl";
}
const QA = {
	convertOffsetParentRelativeRectToViewportRelativeRect: FA,
	getDocumentElement: Sn,
	getClippingRect: HA,
	getOffsetParent: gx,
	getElementRects: KA,
	getClientRects: VA,
	getDimensions: GA,
	getScale: Yi,
	isElement: rn,
	isRTL: YA,
};
function yx(e, t) {
	return (
		e.x === t.x &&
		e.y === t.y &&
		e.width === t.width &&
		e.height === t.height
	);
}
function XA(e, t) {
	let n = null,
		r;
	const i = Sn(e);
	function s() {
		var a;
		clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
	}
	function o(a, l) {
		a === void 0 && (a = !1), l === void 0 && (l = 1), s();
		const u = e.getBoundingClientRect(),
			{ left: c, top: d, width: f, height: h } = u;
		if ((a || t(), !f || !h)) return;
		const g = ya(d),
			y = ya(i.clientWidth - (c + f)),
			x = ya(i.clientHeight - (d + h)),
			m = ya(c),
			v = {
				rootMargin: -g + "px " + -y + "px " + -x + "px " + -m + "px",
				threshold: vt(0, Cr(1, l)) || 1,
			};
		let S = !0;
		function T(E) {
			const A = E[0].intersectionRatio;
			if (A !== l) {
				if (!S) return o();
				A
					? o(!1, A)
					: (r = setTimeout(() => {
							o(!1, 1e-7);
					  }, 1e3));
			}
			A === 1 && !yx(u, e.getBoundingClientRect()) && o(), (S = !1);
		}
		try {
			n = new IntersectionObserver(T, { ...v, root: i.ownerDocument });
		} catch (E) {
			n = new IntersectionObserver(T, v);
		}
		n.observe(e);
	}
	return o(!0), s;
}
function qA(e, t, n, r) {
	r === void 0 && (r = {});
	const {
			ancestorScroll: i = !0,
			ancestorResize: s = !0,
			elementResize: o = typeof ResizeObserver == "function",
			layoutShift: a = typeof IntersectionObserver == "function",
			animationFrame: l = !1,
		} = r,
		u = eh(e),
		c = i || s ? [...(u ? Ro(u) : []), ...Ro(t)] : [];
	c.forEach((m) => {
		i && m.addEventListener("scroll", n, { passive: !0 }),
			s && m.addEventListener("resize", n);
	});
	const d = u && a ? XA(u, n) : null;
	let f = -1,
		h = null;
	o &&
		((h = new ResizeObserver((m) => {
			let [p] = m;
			p &&
				p.target === u &&
				h &&
				(h.unobserve(t),
				cancelAnimationFrame(f),
				(f = requestAnimationFrame(() => {
					var v;
					(v = h) == null || v.observe(t);
				}))),
				n();
		})),
		u && !l && h.observe(u),
		h.observe(t));
	let g,
		y = l ? ci(e) : null;
	l && x();
	function x() {
		const m = ci(e);
		y && !yx(y, m) && n(), (y = m), (g = requestAnimationFrame(x));
	}
	return (
		n(),
		() => {
			var m;
			c.forEach((p) => {
				i && p.removeEventListener("scroll", n),
					s && p.removeEventListener("resize", n);
			}),
				d == null || d(),
				(m = h) == null || m.disconnect(),
				(h = null),
				l && cancelAnimationFrame(g);
		}
	);
}
const ZA = SA,
	JA = TA,
	eP = xA,
	tP = CA,
	nP = wA,
	xm = vA,
	rP = EA,
	iP = (e, t, n) => {
		const r = new Map(),
			i = { platform: QA, ...n },
			s = { ...i.platform, _c: r };
		return yA(e, t, { ...i, platform: s });
	};
var sP = typeof document < "u",
	oP = function () {},
	Ba = sP ? b.useLayoutEffect : oP;
function Pl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (((n = e.length), n !== t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!Pl(e[r], t[r])) return !1;
			return !0;
		}
		if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
			return !1;
		for (r = n; r-- !== 0; )
			if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0; ) {
			const s = i[r];
			if (!(s === "_owner" && e.$$typeof) && !Pl(e[s], t[s])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function vx(e) {
	return typeof window > "u"
		? 1
		: (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wm(e, t) {
	const n = vx(e);
	return Math.round(t * n) / n;
}
function Zu(e) {
	const t = b.useRef(e);
	return (
		Ba(() => {
			t.current = e;
		}),
		t
	);
}
function aP(e) {
	e === void 0 && (e = {});
	const {
			placement: t = "bottom",
			strategy: n = "absolute",
			middleware: r = [],
			platform: i,
			elements: { reference: s, floating: o } = {},
			transform: a = !0,
			whileElementsMounted: l,
			open: u,
		} = e,
		[c, d] = b.useState({
			x: 0,
			y: 0,
			strategy: n,
			placement: t,
			middlewareData: {},
			isPositioned: !1,
		}),
		[f, h] = b.useState(r);
	Pl(f, r) || h(r);
	const [g, y] = b.useState(null),
		[x, m] = b.useState(null),
		p = b.useCallback((k) => {
			k !== E.current && ((E.current = k), y(k));
		}, []),
		v = b.useCallback((k) => {
			k !== A.current && ((A.current = k), m(k));
		}, []),
		S = s || g,
		T = o || x,
		E = b.useRef(null),
		A = b.useRef(null),
		C = b.useRef(c),
		N = l != null,
		P = Zu(l),
		F = Zu(i),
		I = Zu(u),
		$ = b.useCallback(() => {
			if (!E.current || !A.current) return;
			const k = { placement: t, strategy: n, middleware: f };
			F.current && (k.platform = F.current),
				iP(E.current, A.current, k).then((R) => {
					const L = { ...R, isPositioned: I.current !== !1 };
					D.current &&
						!Pl(C.current, L) &&
						((C.current = L),
						Uo.flushSync(() => {
							d(L);
						}));
				});
		}, [f, t, n, F, I]);
	Ba(() => {
		u === !1 &&
			C.current.isPositioned &&
			((C.current.isPositioned = !1),
			d((k) => ({ ...k, isPositioned: !1 })));
	}, [u]);
	const D = b.useRef(!1);
	Ba(
		() => (
			(D.current = !0),
			() => {
				D.current = !1;
			}
		),
		[]
	),
		Ba(() => {
			if ((S && (E.current = S), T && (A.current = T), S && T)) {
				if (P.current) return P.current(S, T, $);
				$();
			}
		}, [S, T, $, P, N]);
	const K = b.useMemo(
			() => ({
				reference: E,
				floating: A,
				setReference: p,
				setFloating: v,
			}),
			[p, v]
		),
		U = b.useMemo(() => ({ reference: S, floating: T }), [S, T]),
		Y = b.useMemo(() => {
			const k = { position: n, left: 0, top: 0 };
			if (!U.floating) return k;
			const R = wm(U.floating, c.x),
				L = wm(U.floating, c.y);
			return a
				? {
						...k,
						transform: "translate(" + R + "px, " + L + "px)",
						...(vx(U.floating) >= 1.5 && {
							willChange: "transform",
						}),
				  }
				: { position: n, left: R, top: L };
		}, [n, a, U.floating, c.x, c.y]);
	return b.useMemo(
		() => ({ ...c, update: $, refs: K, elements: U, floatingStyles: Y }),
		[c, $, K, U, Y]
	);
}
const lP = (e) => {
		function t(n) {
			return {}.hasOwnProperty.call(n, "current");
		}
		return {
			name: "arrow",
			options: e,
			fn(n) {
				const { element: r, padding: i } =
					typeof e == "function" ? e(n) : e;
				return r && t(r)
					? r.current != null
						? xm({ element: r.current, padding: i }).fn(n)
						: {}
					: r
					? xm({ element: r, padding: i }).fn(n)
					: {};
			},
		};
	},
	uP = (e, t) => ({ ...ZA(e), options: [e, t] }),
	cP = (e, t) => ({ ...JA(e), options: [e, t] }),
	dP = (e, t) => ({ ...rP(e), options: [e, t] }),
	fP = (e, t) => ({ ...eP(e), options: [e, t] }),
	hP = (e, t) => ({ ...tP(e), options: [e, t] }),
	pP = (e, t) => ({ ...nP(e), options: [e, t] }),
	mP = (e, t) => ({ ...lP(e), options: [e, t] });
var gP = "Arrow",
	xx = b.forwardRef((e, t) => {
		const { children: n, width: r = 10, height: i = 5, ...s } = e;
		return w.jsx(pt.svg, {
			...s,
			ref: t,
			width: r,
			height: i,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: e.asChild
				? n
				: w.jsx("polygon", { points: "0,0 30,0 15,10" }),
		});
	});
xx.displayName = gP;
var yP = xx;
function vP(e) {
	const [t, n] = b.useState(void 0);
	return (
		Er(() => {
			if (e) {
				n({ width: e.offsetWidth, height: e.offsetHeight });
				const r = new ResizeObserver((i) => {
					if (!Array.isArray(i) || !i.length) return;
					const s = i[0];
					let o, a;
					if ("borderBoxSize" in s) {
						const l = s.borderBoxSize,
							u = Array.isArray(l) ? l[0] : l;
						(o = u.inlineSize), (a = u.blockSize);
					} else (o = e.offsetWidth), (a = e.offsetHeight);
					n({ width: o, height: a });
				});
				return (
					r.observe(e, { box: "border-box" }), () => r.unobserve(e)
				);
			} else n(void 0);
		}, [e]),
		t
	);
}
var wx = "Popper",
	[bx, Sx] = tu(wx),
	[p5, Tx] = bx(wx),
	Ex = "PopperAnchor",
	Cx = b.forwardRef((e, t) => {
		const { __scopePopper: n, virtualRef: r, ...i } = e,
			s = Tx(Ex, n),
			o = b.useRef(null),
			a = nn(t, o);
		return (
			b.useEffect(() => {
				s.onAnchorChange((r == null ? void 0 : r.current) || o.current);
			}),
			r ? null : w.jsx(pt.div, { ...i, ref: a })
		);
	});
Cx.displayName = Ex;
var nh = "PopperContent",
	[xP, wP] = bx(nh),
	Ax = b.forwardRef((e, t) => {
		var J, Dt, Le, nt, It, rt, Ot, pi;
		const {
				__scopePopper: n,
				side: r = "bottom",
				sideOffset: i = 0,
				align: s = "center",
				alignOffset: o = 0,
				arrowPadding: a = 0,
				avoidCollisions: l = !0,
				collisionBoundary: u = [],
				collisionPadding: c = 0,
				sticky: d = "partial",
				hideWhenDetached: f = !1,
				updatePositionStrategy: h = "optimized",
				onPlaced: g,
				...y
			} = e,
			x = Tx(nh, n),
			[m, p] = b.useState(null),
			v = nn(t, (Ue) => p(Ue)),
			[S, T] = b.useState(null),
			E = vP(S),
			A = (J = E == null ? void 0 : E.width) != null ? J : 0,
			C = (Dt = E == null ? void 0 : E.height) != null ? Dt : 0,
			N = r + (s !== "center" ? "-" + s : ""),
			P =
				typeof c == "number"
					? c
					: { top: 0, right: 0, bottom: 0, left: 0, ...c },
			F = Array.isArray(u) ? u : [u],
			I = F.length > 0,
			$ = { padding: P, boundary: F.filter(SP), altBoundary: I },
			{
				refs: D,
				floatingStyles: K,
				placement: U,
				isPositioned: Y,
				middlewareData: k,
			} = aP({
				strategy: "fixed",
				placement: N,
				whileElementsMounted: (...Ue) =>
					qA(...Ue, { animationFrame: h === "always" }),
				elements: { reference: x.anchor },
				middleware: [
					uP({ mainAxis: i + C, alignmentAxis: o }),
					l &&
						cP({
							mainAxis: !0,
							crossAxis: !1,
							limiter: d === "partial" ? dP() : void 0,
							...$,
						}),
					l && fP({ ...$ }),
					hP({
						...$,
						apply: ({
							elements: Ue,
							rects: Bn,
							availableWidth: mi,
							availableHeight: Un,
						}) => {
							const { width: Es, height: gi } = Bn.reference,
								mt = Ue.floating.style;
							mt.setProperty(
								"--radix-popper-available-width",
								"".concat(mi, "px")
							),
								mt.setProperty(
									"--radix-popper-available-height",
									"".concat(Un, "px")
								),
								mt.setProperty(
									"--radix-popper-anchor-width",
									"".concat(Es, "px")
								),
								mt.setProperty(
									"--radix-popper-anchor-height",
									"".concat(gi, "px")
								);
						},
					}),
					S && mP({ element: S, padding: a }),
					TP({ arrowWidth: A, arrowHeight: C }),
					f && pP({ strategy: "referenceHidden", ...$ }),
				],
			}),
			[R, L] = Rx(U),
			H = Tr(g);
		Er(() => {
			Y && (H == null || H());
		}, [Y, H]);
		const z = (Le = k.arrow) == null ? void 0 : Le.x,
			G = (nt = k.arrow) == null ? void 0 : nt.y,
			Q = ((It = k.arrow) == null ? void 0 : It.centerOffset) !== 0,
			[se, je] = b.useState();
		return (
			Er(() => {
				m && je(window.getComputedStyle(m).zIndex);
			}, [m]),
			w.jsx("div", {
				ref: D.setFloating,
				"data-radix-popper-content-wrapper": "",
				style: {
					...K,
					transform: Y ? K.transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: se,
					"--radix-popper-transform-origin": [
						(rt = k.transformOrigin) == null ? void 0 : rt.x,
						(Ot = k.transformOrigin) == null ? void 0 : Ot.y,
					].join(" "),
					...(((pi = k.hide) == null
						? void 0
						: pi.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none",
					}),
				},
				dir: e.dir,
				children: w.jsx(xP, {
					scope: n,
					placedSide: R,
					onArrowChange: T,
					arrowX: z,
					arrowY: G,
					shouldHideArrow: Q,
					children: w.jsx(pt.div, {
						"data-side": R,
						"data-align": L,
						...y,
						ref: v,
						style: { ...y.style, animation: Y ? void 0 : "none" },
					}),
				}),
			})
		);
	});
Ax.displayName = nh;
var Px = "PopperArrow",
	bP = { top: "bottom", right: "left", bottom: "top", left: "right" },
	kx = b.forwardRef(function (t, n) {
		const { __scopePopper: r, ...i } = t,
			s = wP(Px, r),
			o = bP[s.placedSide];
		return w.jsx("span", {
			ref: s.onArrowChange,
			style: {
				position: "absolute",
				left: s.arrowX,
				top: s.arrowY,
				[o]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0",
				}[s.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[s.placedSide],
				visibility: s.shouldHideArrow ? "hidden" : void 0,
			},
			children: w.jsx(yP, {
				...i,
				ref: n,
				style: { ...i.style, display: "block" },
			}),
		});
	});
kx.displayName = Px;
function SP(e) {
	return e !== null;
}
var TP = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		var x, m, p, v, S;
		const { placement: n, rects: r, middlewareData: i } = t,
			o = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0,
			a = o ? 0 : e.arrowWidth,
			l = o ? 0 : e.arrowHeight,
			[u, c] = Rx(n),
			d = { start: "0%", center: "50%", end: "100%" }[c],
			f =
				((p = (m = i.arrow) == null ? void 0 : m.x) != null ? p : 0) +
				a / 2,
			h =
				((S = (v = i.arrow) == null ? void 0 : v.y) != null ? S : 0) +
				l / 2;
		let g = "",
			y = "";
		return (
			u === "bottom"
				? ((g = o ? d : "".concat(f, "px")), (y = "".concat(-l, "px")))
				: u === "top"
				? ((g = o ? d : "".concat(f, "px")),
				  (y = "".concat(r.floating.height + l, "px")))
				: u === "right"
				? ((g = "".concat(-l, "px")), (y = o ? d : "".concat(h, "px")))
				: u === "left" &&
				  ((g = "".concat(r.floating.width + l, "px")),
				  (y = o ? d : "".concat(h, "px"))),
			{ data: { x: g, y } }
		);
	},
});
function Rx(e) {
	const [t, n = "center"] = e.split("-");
	return [t, n];
}
var EP = Cx,
	CP = Ax,
	AP = kx,
	[au, m5] = tu("Tooltip", [Sx]),
	rh = Sx(),
	Mx = "TooltipProvider",
	PP = 700,
	bm = "tooltip.open",
	[kP, Nx] = au(Mx),
	jx = (e) => {
		const {
				__scopeTooltip: t,
				delayDuration: n = PP,
				skipDelayDuration: r = 300,
				disableHoverableContent: i = !1,
				children: s,
			} = e,
			o = b.useRef(!0),
			a = b.useRef(!1),
			l = b.useRef(0);
		return (
			b.useEffect(() => {
				const u = l.current;
				return () => window.clearTimeout(u);
			}, []),
			w.jsx(kP, {
				scope: t,
				isOpenDelayedRef: o,
				delayDuration: n,
				onOpen: b.useCallback(() => {
					window.clearTimeout(l.current), (o.current = !1);
				}, []),
				onClose: b.useCallback(() => {
					window.clearTimeout(l.current),
						(l.current = window.setTimeout(
							() => (o.current = !0),
							r
						));
				}, [r]),
				isPointerInTransitRef: a,
				onPointerInTransitChange: b.useCallback((u) => {
					a.current = u;
				}, []),
				disableHoverableContent: i,
				children: s,
			})
		);
	};
jx.displayName = Mx;
var Lx = "Tooltip",
	[g5, lu] = au(Lx),
	xd = "TooltipTrigger",
	RP = b.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			i = lu(xd, n),
			s = Nx(xd, n),
			o = rh(n),
			a = b.useRef(null),
			l = nn(t, a, i.onTriggerChange),
			u = b.useRef(!1),
			c = b.useRef(!1),
			d = b.useCallback(() => (u.current = !1), []);
		return (
			b.useEffect(
				() => () => document.removeEventListener("pointerup", d),
				[d]
			),
			w.jsx(EP, {
				asChild: !0,
				...o,
				children: w.jsx(pt.button, {
					"aria-describedby": i.open ? i.contentId : void 0,
					"data-state": i.stateAttribute,
					...r,
					ref: l,
					onPointerMove: Me(e.onPointerMove, (f) => {
						f.pointerType !== "touch" &&
							!c.current &&
							!s.isPointerInTransitRef.current &&
							(i.onTriggerEnter(), (c.current = !0));
					}),
					onPointerLeave: Me(e.onPointerLeave, () => {
						i.onTriggerLeave(), (c.current = !1);
					}),
					onPointerDown: Me(e.onPointerDown, () => {
						i.open && i.onClose(),
							(u.current = !0),
							document.addEventListener("pointerup", d, {
								once: !0,
							});
					}),
					onFocus: Me(e.onFocus, () => {
						u.current || i.onOpen();
					}),
					onBlur: Me(e.onBlur, i.onClose),
					onClick: Me(e.onClick, i.onClose),
				}),
			})
		);
	});
RP.displayName = xd;
var MP = "TooltipPortal",
	[y5, NP] = au(MP, { forceMount: void 0 }),
	ds = "TooltipContent",
	Dx = b.forwardRef((e, t) => {
		const n = NP(ds, e.__scopeTooltip),
			{ forceMount: r = n.forceMount, side: i = "top", ...s } = e,
			o = lu(ds, e.__scopeTooltip);
		return w.jsx(Hf, {
			present: r || o.open,
			children: o.disableHoverableContent
				? w.jsx(Ix, { side: i, ...s, ref: t })
				: w.jsx(jP, { side: i, ...s, ref: t }),
		});
	}),
	jP = b.forwardRef((e, t) => {
		const n = lu(ds, e.__scopeTooltip),
			r = Nx(ds, e.__scopeTooltip),
			i = b.useRef(null),
			s = nn(t, i),
			[o, a] = b.useState(null),
			{ trigger: l, onClose: u } = n,
			c = i.current,
			{ onPointerInTransitChange: d } = r,
			f = b.useCallback(() => {
				a(null), d(!1);
			}, [d]),
			h = b.useCallback(
				(g, y) => {
					const x = g.currentTarget,
						m = { x: g.clientX, y: g.clientY },
						p = FP(m, x.getBoundingClientRect()),
						v = VP(m, p),
						S = _P(y.getBoundingClientRect()),
						T = UP([...v, ...S]);
					a(T), d(!0);
				},
				[d]
			);
		return (
			b.useEffect(() => () => f(), [f]),
			b.useEffect(() => {
				if (l && c) {
					const g = (x) => h(x, c),
						y = (x) => h(x, l);
					return (
						l.addEventListener("pointerleave", g),
						c.addEventListener("pointerleave", y),
						() => {
							l.removeEventListener("pointerleave", g),
								c.removeEventListener("pointerleave", y);
						}
					);
				}
			}, [l, c, h, f]),
			b.useEffect(() => {
				if (o) {
					const g = (y) => {
						const x = y.target,
							m = { x: y.clientX, y: y.clientY },
							p =
								(l == null ? void 0 : l.contains(x)) ||
								(c == null ? void 0 : c.contains(x)),
							v = !BP(m, o);
						p ? f() : v && (f(), u());
					};
					return (
						document.addEventListener("pointermove", g),
						() => document.removeEventListener("pointermove", g)
					);
				}
			}, [l, c, o, u, f]),
			w.jsx(Ix, { ...e, ref: s })
		);
	}),
	[LP, DP] = au(Lx, { isInside: !1 }),
	IP = bE("TooltipContent"),
	Ix = b.forwardRef((e, t) => {
		const {
				__scopeTooltip: n,
				children: r,
				"aria-label": i,
				onEscapeKeyDown: s,
				onPointerDownOutside: o,
				...a
			} = e,
			l = lu(ds, n),
			u = rh(n),
			{ onClose: c } = l;
		return (
			b.useEffect(
				() => (
					document.addEventListener(bm, c),
					() => document.removeEventListener(bm, c)
				),
				[c]
			),
			b.useEffect(() => {
				if (l.trigger) {
					const d = (f) => {
						const h = f.target;
						h != null && h.contains(l.trigger) && c();
					};
					return (
						window.addEventListener("scroll", d, { capture: !0 }),
						() =>
							window.removeEventListener("scroll", d, {
								capture: !0,
							})
					);
				}
			}, [l.trigger, c]),
			w.jsx(zf, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: s,
				onPointerDownOutside: o,
				onFocusOutside: (d) => d.preventDefault(),
				onDismiss: c,
				children: w.jsxs(CP, {
					"data-state": l.stateAttribute,
					...u,
					...a,
					ref: t,
					style: {
						...a.style,
						"--radix-tooltip-content-transform-origin":
							"var(--radix-popper-transform-origin)",
						"--radix-tooltip-content-available-width":
							"var(--radix-popper-available-width)",
						"--radix-tooltip-content-available-height":
							"var(--radix-popper-available-height)",
						"--radix-tooltip-trigger-width":
							"var(--radix-popper-anchor-width)",
						"--radix-tooltip-trigger-height":
							"var(--radix-popper-anchor-height)",
					},
					children: [
						w.jsx(IP, { children: r }),
						w.jsx(LP, {
							scope: n,
							isInside: !0,
							children: w.jsx(WE, {
								id: l.contentId,
								role: "tooltip",
								children: i || r,
							}),
						}),
					],
				}),
			})
		);
	});
Dx.displayName = ds;
var Ox = "TooltipArrow",
	OP = b.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			i = rh(n);
		return DP(Ox, n).isInside ? null : w.jsx(AP, { ...i, ...r, ref: t });
	});
OP.displayName = Ox;
function FP(e, t) {
	const n = Math.abs(t.top - e.y),
		r = Math.abs(t.bottom - e.y),
		i = Math.abs(t.right - e.x),
		s = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, s)) {
		case s:
			return "left";
		case i:
			return "right";
		case n:
			return "top";
		case r:
			return "bottom";
		default:
			throw new Error("unreachable");
	}
}
function VP(e, t, n = 5) {
	const r = [];
	switch (t) {
		case "top":
			r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
			break;
		case "bottom":
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
			break;
		case "left":
			r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
			break;
		case "right":
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
			break;
	}
	return r;
}
function _P(e) {
	const { top: t, right: n, bottom: r, left: i } = e;
	return [
		{ x: i, y: t },
		{ x: n, y: t },
		{ x: n, y: r },
		{ x: i, y: r },
	];
}
function BP(e, t) {
	const { x: n, y: r } = e;
	let i = !1;
	for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
		const a = t[s],
			l = t[o],
			u = a.x,
			c = a.y,
			d = l.x,
			f = l.y;
		c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (i = !i);
	}
	return i;
}
function UP(e) {
	const t = e.slice();
	return (
		t.sort((n, r) =>
			n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
		),
		$P(t)
	);
}
function $P(e) {
	if (e.length <= 1) return e.slice();
	const t = [];
	for (let r = 0; r < e.length; r++) {
		const i = e[r];
		for (; t.length >= 2; ) {
			const s = t[t.length - 1],
				o = t[t.length - 2];
			if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) t.pop();
			else break;
		}
		t.push(i);
	}
	t.pop();
	const n = [];
	for (let r = e.length - 1; r >= 0; r--) {
		const i = e[r];
		for (; n.length >= 2; ) {
			const s = n[n.length - 1],
				o = n[n.length - 2];
			if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) n.pop();
			else break;
		}
		n.push(i);
	}
	return (
		n.pop(),
		t.length === 1 &&
		n.length === 1 &&
		t[0].x === n[0].x &&
		t[0].y === n[0].y
			? t
			: t.concat(n)
	);
}
var zP = jx,
	Fx = Dx;
const HP = zP,
	GP = b.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
		w.jsx(Fx, {
			ref: r,
			sideOffset: t,
			className: hi(
				"z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				e
			),
			...n,
		})
	);
GP.displayName = Fx.displayName;
const ih = b.createContext({});
function sh(e) {
	const t = b.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const WP = typeof window < "u",
	Vx = WP ? b.useLayoutEffect : b.useEffect,
	uu = b.createContext(null);
function oh(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function kl(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
const bn = (e, t, n) => (n > t ? t : n < e ? e : n);
let cu = () => {},
	fs = () => {};
const Pr = {},
	_x = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Bx(e) {
	return typeof e == "object" && e !== null;
}
const Ux = (e) => /^0[^.\s]+$/u.test(e);
function $x(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const Nt = (e) => e,
	KP = (e, t) => (n) => t(e(n)),
	Ho = (...e) => e.reduce(KP),
	Mo = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	};
class ah {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return oh(this.subscriptions, t), () => kl(this.subscriptions, t);
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let s = 0; s < i; s++) {
					const o = this.subscriptions[s];
					o && o(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const ht = (e) => e * 1e3,
	Rt = (e) => e / 1e3;
function zx(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const Hx = (e, t, n) =>
		(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	YP = 1e-7,
	QP = 12;
function XP(e, t, n, r, i) {
	let s,
		o,
		a = 0;
	do (o = t + (n - t) / 2), (s = Hx(o, r, i) - e), s > 0 ? (n = o) : (t = o);
	while (Math.abs(s) > YP && ++a < QP);
	return o;
}
function Go(e, t, n, r) {
	if (e === t && n === r) return Nt;
	const i = (s) => XP(s, 0, 1, e, n);
	return (s) => (s === 0 || s === 1 ? s : Hx(i(s), t, r));
}
const Gx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	Wx = (e) => (t) => 1 - e(1 - t),
	Kx = Go(0.33, 1.53, 0.69, 0.99),
	lh = Wx(Kx),
	Yx = Gx(lh),
	Qx = (e) =>
		e >= 1
			? 1
			: (e *= 2) < 1
			? 0.5 * lh(e)
			: 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	uh = (e) => 1 - Math.sin(Math.acos(e)),
	Xx = Wx(uh),
	qx = Gx(uh),
	qP = Go(0.42, 0, 1, 1),
	ZP = Go(0, 0, 0.58, 1),
	Zx = Go(0.42, 0, 0.58, 1),
	JP = (e) => Array.isArray(e) && typeof e[0] != "number",
	Jx = (e) => Array.isArray(e) && typeof e[0] == "number",
	Sm = {
		linear: Nt,
		easeIn: qP,
		easeInOut: Zx,
		easeOut: ZP,
		circIn: uh,
		circInOut: qx,
		circOut: Xx,
		backIn: lh,
		backInOut: Yx,
		backOut: Kx,
		anticipate: Qx,
	},
	e2 = (e) => typeof e == "string",
	Tm = (e) => {
		if (Jx(e)) {
			fs(
				e.length === 4,
				"Cubic bezier arrays must contain four numerical values.",
				"cubic-bezier-length"
			);
			const [t, n, r, i] = e;
			return Go(t, n, r, i);
		} else if (e2(e))
			return (
				fs(
					Sm[e] !== void 0,
					"Invalid easing type '".concat(e, "'"),
					"invalid-easing-type"
				),
				Sm[e]
			);
		return e;
	},
	va = [
		"setup",
		"read",
		"resolveKeyframes",
		"preUpdate",
		"update",
		"preRender",
		"render",
		"postRender",
	],
	Em = { value: null, addProjectionMetrics: null };
function t2(e, t) {
	let n = new Set(),
		r = new Set(),
		i = !1,
		s = !1;
	const o = new WeakSet();
	let a = { delta: 0, timestamp: 0, isProcessing: !1 },
		l = 0;
	function u(d) {
		o.has(d) && (c.schedule(d), e()), l++, d(a);
	}
	const c = {
		schedule: (d, f = !1, h = !1) => {
			const y = h && i ? n : r;
			return f && o.add(d), y.add(d), d;
		},
		cancel: (d) => {
			r.delete(d), o.delete(d);
		},
		process: (d) => {
			if (((a = d), i)) {
				s = !0;
				return;
			}
			i = !0;
			const f = n;
			(n = r),
				(r = f),
				n.forEach(u),
				t && Em.value && Em.value.frameloop[t].push(l),
				(l = 0),
				n.clear(),
				(i = !1),
				s && ((s = !1), c.process(d));
		},
	};
	return c;
}
const n2 = 40;
function ew(e, t) {
	let n = !1,
		r = !0;
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		s = () => (n = !0),
		o = va.reduce((v, S) => ((v[S] = t2(s, t ? S : void 0)), v), {}),
		{
			setup: a,
			read: l,
			resolveKeyframes: u,
			preUpdate: c,
			update: d,
			preRender: f,
			render: h,
			postRender: g,
		} = o,
		y = () => {
			const v = Pr.useManualTiming,
				S = v ? i.timestamp : performance.now();
			(n = !1),
				v ||
					(i.delta = r
						? 1e3 / 60
						: Math.max(Math.min(S - i.timestamp, n2), 1)),
				(i.timestamp = S),
				(i.isProcessing = !0),
				a.process(i),
				l.process(i),
				u.process(i),
				c.process(i),
				d.process(i),
				f.process(i),
				h.process(i),
				g.process(i),
				(i.isProcessing = !1),
				n && t && ((r = !1), e(y));
		},
		x = () => {
			(n = !0), (r = !0), i.isProcessing || e(y);
		};
	return {
		schedule: va.reduce((v, S) => {
			const T = o[S];
			return (
				(v[S] = (E, A = !1, C = !1) => (n || x(), T.schedule(E, A, C))),
				v
			);
		}, {}),
		cancel: (v) => {
			for (let S = 0; S < va.length; S++) o[va[S]].cancel(v);
		},
		state: i,
		steps: o,
	};
}
const {
	schedule: oe,
	cancel: kr,
	state: Fe,
	steps: Ju,
} = ew(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Nt, !0);
let Ua;
function r2() {
	Ua = void 0;
}
const qe = {
		now: () => (
			Ua === void 0 &&
				qe.set(
					Fe.isProcessing || Pr.useManualTiming
						? Fe.timestamp
						: performance.now()
				),
			Ua
		),
		set: (e) => {
			(Ua = e), queueMicrotask(r2);
		},
	},
	tw = (e) => (t) => typeof t == "string" && t.startsWith(e),
	nw = tw("--"),
	i2 = tw("var(--"),
	ch = (e) => (i2(e) ? s2.test(e.split("/*")[0].trim()) : !1),
	s2 =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Cm(e) {
	return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const bs = {
		test: (e) => typeof e == "number",
		parse: parseFloat,
		transform: (e) => e,
	},
	No = { ...bs, transform: (e) => bn(0, 1, e) },
	xa = { ...bs, default: 1 },
	no = (e) => Math.round(e * 1e5) / 1e5,
	dh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function o2(e) {
	return e == null;
}
const a2 =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	fh = (e, t) => (n) =>
		!!(
			(typeof n == "string" && a2.test(n) && n.startsWith(e)) ||
			(t && !o2(n) && Object.prototype.hasOwnProperty.call(n, t))
		),
	rw = (e, t, n) => (r) => {
		if (typeof r != "string") return r;
		const [i, s, o, a] = r.match(dh);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(s),
			[n]: parseFloat(o),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	l2 = (e) => bn(0, 255, e),
	ec = { ...bs, transform: (e) => Math.round(l2(e)) },
	Kr = {
		test: fh("rgb", "red"),
		parse: rw("red", "green", "blue"),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			"rgba(" +
			ec.transform(e) +
			", " +
			ec.transform(t) +
			", " +
			ec.transform(n) +
			", " +
			no(No.transform(r)) +
			")",
	};
function u2(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const wd = { test: fh("#"), parse: u2, transform: Kr.transform },
	Wo = (e) => ({
		test: (t) =>
			typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: (t) => "".concat(t).concat(e),
	}),
	Xn = Wo("deg"),
	xn = Wo("%"),
	B = Wo("px"),
	c2 = Wo("vh"),
	d2 = Wo("vw"),
	Am = {
		...xn,
		parse: (e) => xn.parse(e) / 100,
		transform: (e) => xn.transform(e * 100),
	},
	Vi = {
		test: fh("hsl", "hue"),
		parse: rw("hue", "saturation", "lightness"),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			"hsla(" +
			Math.round(e) +
			", " +
			xn.transform(no(t)) +
			", " +
			xn.transform(no(n)) +
			", " +
			no(No.transform(r)) +
			")",
	},
	Ee = {
		test: (e) => Kr.test(e) || wd.test(e) || Vi.test(e),
		parse: (e) =>
			Kr.test(e) ? Kr.parse(e) : Vi.test(e) ? Vi.parse(e) : wd.parse(e),
		transform: (e) =>
			typeof e == "string"
				? e
				: e.hasOwnProperty("red")
				? Kr.transform(e)
				: Vi.transform(e),
		getAnimatableNone: (e) => {
			const t = Ee.parse(e);
			return (t.alpha = 0), Ee.transform(t);
		},
	},
	f2 =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function h2(e) {
	var t, n;
	return (
		isNaN(e) &&
		typeof e == "string" &&
		(((t = e.match(dh)) == null ? void 0 : t.length) || 0) +
			(((n = e.match(f2)) == null ? void 0 : n.length) || 0) >
			0
	);
}
const iw = "number",
	sw = "color",
	p2 = "var",
	m2 = "var(",
	Pm = "${}",
	g2 =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hs(e) {
	const t = e.toString(),
		n = [],
		r = { color: [], number: [], var: [] },
		i = [];
	let s = 0;
	const a = t
		.replace(
			g2,
			(l) => (
				Ee.test(l)
					? (r.color.push(s), i.push(sw), n.push(Ee.parse(l)))
					: l.startsWith(m2)
					? (r.var.push(s), i.push(p2), n.push(l))
					: (r.number.push(s), i.push(iw), n.push(parseFloat(l))),
				++s,
				Pm
			)
		)
		.split(Pm);
	return { values: n, split: a, indexes: r, types: i };
}
function y2(e) {
	return hs(e).values;
}
function ow({ split: e, types: t }) {
	const n = e.length;
	return (r) => {
		let i = "";
		for (let s = 0; s < n; s++)
			if (((i += e[s]), r[s] !== void 0)) {
				const o = t[s];
				o === iw
					? (i += no(r[s]))
					: o === sw
					? (i += Ee.transform(r[s]))
					: (i += r[s]);
			}
		return i;
	};
}
function v2(e) {
	return ow(hs(e));
}
const x2 = (e) =>
		typeof e == "number" ? 0 : Ee.test(e) ? Ee.getAnimatableNone(e) : e,
	w2 = (e, t) =>
		typeof e == "number"
			? t != null && t.trim().endsWith("/")
				? e
				: 0
			: x2(e);
function b2(e) {
	const t = hs(e);
	return ow(t)(t.values.map((r, i) => w2(r, t.split[i])));
}
const en = {
	test: h2,
	parse: y2,
	createTransformer: v2,
	getAnimatableNone: b2,
};
function tc(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	);
}
function S2({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let i = 0,
		s = 0,
		o = 0;
	if (!t) i = s = o = n;
	else {
		const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - a;
		(i = tc(l, a, e + 1 / 3)), (s = tc(l, a, e)), (o = tc(l, a, e - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(s * 255),
		blue: Math.round(o * 255),
		alpha: r,
	};
}
function Rl(e, t) {
	return (n) => (n > 0 ? t : e);
}
const ce = (e, t, n) => e + (t - e) * n,
	nc = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i);
	},
	T2 = [wd, Kr, Vi],
	E2 = (e) => T2.find((t) => t.test(e));
function km(e) {
	const t = E2(e);
	if (
		(cu(
			!!t,
			"'".concat(
				e,
				"' is not an animatable color. Use the equivalent color code instead."
			),
			"color-not-animatable"
		),
		!t)
	)
		return !1;
	let n = t.parse(e);
	return t === Vi && (n = S2(n)), n;
}
const Rm = (e, t) => {
		const n = km(e),
			r = km(t);
		if (!n || !r) return Rl(e, t);
		const i = { ...n };
		return (s) => (
			(i.red = nc(n.red, r.red, s)),
			(i.green = nc(n.green, r.green, s)),
			(i.blue = nc(n.blue, r.blue, s)),
			(i.alpha = ce(n.alpha, r.alpha, s)),
			Kr.transform(i)
		);
	},
	bd = new Set(["none", "hidden"]);
function C2(e, t) {
	return bd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function A2(e, t) {
	return (n) => ce(e, t, n);
}
function hh(e) {
	return typeof e == "number"
		? A2
		: typeof e == "string"
		? ch(e)
			? Rl
			: Ee.test(e)
			? Rm
			: R2
		: Array.isArray(e)
		? aw
		: typeof e == "object"
		? Ee.test(e)
			? Rm
			: P2
		: Rl;
}
function aw(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((s, o) => hh(s)(s, t[o]));
	return (s) => {
		for (let o = 0; o < r; o++) n[o] = i[o](s);
		return n;
	};
}
function P2(e, t) {
	const n = { ...e, ...t },
		r = {};
	for (const i in n)
		e[i] !== void 0 && t[i] !== void 0 && (r[i] = hh(e[i])(e[i], t[i]));
	return (i) => {
		for (const s in r) n[s] = r[s](i);
		return n;
	};
}
function k2(e, t) {
	var i;
	const n = [],
		r = { color: 0, var: 0, number: 0 };
	for (let s = 0; s < t.values.length; s++) {
		const o = t.types[s],
			a = e.indexes[o][r[o]],
			l = (i = e.values[a]) != null ? i : 0;
		(n[s] = l), r[o]++;
	}
	return n;
}
const R2 = (e, t) => {
	const n = en.createTransformer(t),
		r = hs(e),
		i = hs(t);
	return r.indexes.var.length === i.indexes.var.length &&
		r.indexes.color.length === i.indexes.color.length &&
		r.indexes.number.length >= i.indexes.number.length
		? (bd.has(e) && !i.values.length) || (bd.has(t) && !r.values.length)
			? C2(e, t)
			: Ho(aw(k2(r, i), i.values), n)
		: (cu(
				!0,
				"Complex values '"
					.concat(e, "' and '")
					.concat(
						t,
						"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
					),
				"complex-values-different"
		  ),
		  Rl(e, t));
};
function lw(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number"
		? ce(e, t, n)
		: hh(e)(e, t);
}
const M2 = (e) => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: (n = !0) => oe.update(t, n),
			stop: () => kr(t),
			now: () => (Fe.isProcessing ? Fe.timestamp : qe.now()),
		};
	},
	uw = (e, t, n = 10) => {
		let r = "";
		const i = Math.max(Math.round(t / n), 2);
		for (let s = 0; s < i; s++)
			r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
		return "linear(".concat(r.substring(0, r.length - 2), ")");
	},
	Ml = 2e4;
function ph(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Ml; ) (t += n), (r = e.next(t));
	return t >= Ml ? 1 / 0 : t;
}
function N2(e, t = 100, n) {
	const r = n({ ...e, keyframes: [0, t] }),
		i = Math.min(ph(r), Ml);
	return {
		type: "keyframes",
		ease: (s) => r.next(i * s).value / t,
		duration: Rt(i),
	};
}
const pe = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: 0.3,
	visualDuration: 0.3,
	restSpeed: { granular: 0.01, default: 2 },
	restDelta: { granular: 0.005, default: 0.5 },
	minDuration: 0.01,
	maxDuration: 10,
	minDamping: 0.05,
	maxDamping: 1,
};
function Sd(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const j2 = 12;
function L2(e, t, n) {
	let r = n;
	for (let i = 1; i < j2; i++) r = r - e(r) / t(r);
	return r;
}
const rc = 0.001;
function D2({
	duration: e = pe.duration,
	bounce: t = pe.bounce,
	velocity: n = pe.velocity,
	mass: r = pe.mass,
}) {
	let i, s;
	cu(
		e <= ht(pe.maxDuration),
		"Spring duration must be 10 seconds or less",
		"spring-duration-limit"
	);
	let o = 1 - t;
	(o = bn(pe.minDamping, pe.maxDamping, o)),
		(e = bn(pe.minDuration, pe.maxDuration, Rt(e))),
		o < 1
			? ((i = (u) => {
					const c = u * o,
						d = c * e,
						f = c - n,
						h = Sd(u, o),
						g = Math.exp(-d);
					return rc - (f / h) * g;
			  }),
			  (s = (u) => {
					const d = u * o * e,
						f = d * n + n,
						h = Math.pow(o, 2) * Math.pow(u, 2) * e,
						g = Math.exp(-d),
						y = Sd(Math.pow(u, 2), o);
					return ((-i(u) + rc > 0 ? -1 : 1) * ((f - h) * g)) / y;
			  }))
			: ((i = (u) => {
					const c = Math.exp(-u * e),
						d = (u - n) * e + 1;
					return -rc + c * d;
			  }),
			  (s = (u) => {
					const c = Math.exp(-u * e),
						d = (n - u) * (e * e);
					return c * d;
			  }));
	const a = 5 / e,
		l = L2(i, s, a);
	if (((e = ht(e)), isNaN(l)))
		return { stiffness: pe.stiffness, damping: pe.damping, duration: e };
	{
		const u = Math.pow(l, 2) * r;
		return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
	}
}
const I2 = ["duration", "bounce"],
	O2 = ["stiffness", "damping", "mass"];
function Mm(e, t) {
	return t.some((n) => e[n] !== void 0);
}
function F2(e) {
	let t = {
		velocity: pe.velocity,
		stiffness: pe.stiffness,
		damping: pe.damping,
		mass: pe.mass,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!Mm(e, O2) && Mm(e, I2))
		if (((t.velocity = 0), e.visualDuration)) {
			const n = e.visualDuration,
				r = (2 * Math.PI) / (n * 1.2),
				i = r * r,
				s = 2 * bn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = { ...t, mass: pe.mass, stiffness: i, damping: s };
		} else {
			const n = D2({ ...e, velocity: 0 });
			(t = { ...t, ...n, mass: pe.mass }),
				(t.isResolvedFromDuration = !0);
		}
	return t;
}
function Nl(e = pe.visualDuration, t = pe.bounce) {
	const n =
		typeof e != "object"
			? { visualDuration: e, keyframes: [0, 1], bounce: t }
			: e;
	let { restSpeed: r, restDelta: i } = n;
	const s = n.keyframes[0],
		o = n.keyframes[n.keyframes.length - 1],
		a = { done: !1, value: s },
		{
			stiffness: l,
			damping: u,
			mass: c,
			duration: d,
			velocity: f,
			isResolvedFromDuration: h,
		} = F2({ ...n, velocity: -Rt(n.velocity || 0) }),
		g = f || 0,
		y = u / (2 * Math.sqrt(l * c)),
		x = o - s,
		m = Rt(Math.sqrt(l / c)),
		p = Math.abs(x) < 5;
	r || (r = p ? pe.restSpeed.granular : pe.restSpeed.default),
		i || (i = p ? pe.restDelta.granular : pe.restDelta.default);
	let v, S, T, E, A, C;
	if (y < 1)
		(T = Sd(m, y)),
			(E = (g + y * m * x) / T),
			(v = (P) => {
				const F = Math.exp(-y * m * P);
				return o - F * (E * Math.sin(T * P) + x * Math.cos(T * P));
			}),
			(A = y * m * E + x * T),
			(C = y * m * x - E * T),
			(S = (P) =>
				Math.exp(-y * m * P) *
				(A * Math.sin(T * P) + C * Math.cos(T * P)));
	else if (y === 1) {
		v = (F) => o - Math.exp(-m * F) * (x + (g + m * x) * F);
		const P = g + m * x;
		S = (F) => Math.exp(-m * F) * (m * P * F - g);
	} else {
		const P = m * Math.sqrt(y * y - 1);
		v = (D) => {
			const K = Math.exp(-y * m * D),
				U = Math.min(P * D, 300);
			return (
				o -
				(K * ((g + y * m * x) * Math.sinh(U) + P * x * Math.cosh(U))) /
					P
			);
		};
		const F = (g + y * m * x) / P,
			I = y * m * F - x * P,
			$ = y * m * x - F * P;
		S = (D) => {
			const K = Math.exp(-y * m * D),
				U = Math.min(P * D, 300);
			return K * (I * Math.sinh(U) + $ * Math.cosh(U));
		};
	}
	const N = {
		calculatedDuration: (h && d) || null,
		velocity: (P) => ht(S(P)),
		next: (P) => {
			if (!h && y < 1) {
				const I = Math.exp(-y * m * P),
					$ = Math.sin(T * P),
					D = Math.cos(T * P),
					K = o - I * (E * $ + x * D),
					U = ht(I * (A * $ + C * D));
				return (
					(a.done = Math.abs(U) <= r && Math.abs(o - K) <= i),
					(a.value = a.done ? o : K),
					a
				);
			}
			const F = v(P);
			if (h) a.done = P >= d;
			else {
				const I = ht(S(P));
				a.done = Math.abs(I) <= r && Math.abs(o - F) <= i;
			}
			return (a.value = a.done ? o : F), a;
		},
		toString: () => {
			const P = Math.min(ph(N), Ml),
				F = uw((I) => N.next(P * I).value, P, 30);
			return P + "ms " + F;
		},
		toTransition: () => {},
	};
	return N;
}
Nl.applyToOptions = (e) => {
	const t = N2(e, 100, Nl);
	return (
		(e.ease = t.ease),
		(e.duration = ht(t.duration)),
		(e.type = "keyframes"),
		e
	);
};
const V2 = 5;
function cw(e, t, n) {
	const r = Math.max(t - V2, 0);
	return zx(n - e(r), t - r);
}
function Td({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: s = 500,
	modifyTarget: o,
	min: a,
	max: l,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const d = e[0],
		f = { done: !1, value: d },
		h = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
		g = (C) =>
			a === void 0
				? l
				: l === void 0 || Math.abs(a - C) < Math.abs(l - C)
				? a
				: l;
	let y = n * t;
	const x = d + y,
		m = o === void 0 ? x : o(x);
	m !== x && (y = m - d);
	const p = (C) => -y * Math.exp(-C / r),
		v = (C) => m + p(C),
		S = (C) => {
			const N = p(C),
				P = v(C);
			(f.done = Math.abs(N) <= u), (f.value = f.done ? m : P);
		};
	let T, E;
	const A = (C) => {
		h(f.value) &&
			((T = C),
			(E = Nl({
				keyframes: [f.value, g(f.value)],
				velocity: cw(v, C, f.value),
				damping: i,
				stiffness: s,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		A(0),
		{
			calculatedDuration: null,
			next: (C) => {
				let N = !1;
				return (
					!E && T === void 0 && ((N = !0), S(C), A(C)),
					T !== void 0 && C >= T ? E.next(C - T) : (!N && S(C), f)
				);
			},
		}
	);
}
function _2(e, t, n) {
	const r = [],
		i = n || Pr.mix || lw,
		s = e.length - 1;
	for (let o = 0; o < s; o++) {
		let a = i(e[o], e[o + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[o] || Nt : t;
			a = Ho(l, a);
		}
		r.push(a);
	}
	return r;
}
function B2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const s = e.length;
	if (
		(fs(
			s === t.length,
			"Both input and output ranges must be the same length",
			"range-length"
		),
		s === 1)
	)
		return () => t[0];
	if (s === 2 && t[0] === t[1]) return () => t[1];
	const o = e[0] === e[1];
	e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const a = _2(t, r, i),
		l = a.length,
		u = (c) => {
			if (o && c < e[0]) return t[0];
			let d = 0;
			if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
			const f = Mo(e[d], e[d + 1], c);
			return a[d](f);
		};
	return n ? (c) => u(bn(e[0], e[s - 1], c)) : u;
}
function U2(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = Mo(0, t, r);
		e.push(ce(n, 1, i));
	}
}
function $2(e) {
	const t = [0];
	return U2(t, e.length - 1), t;
}
function z2(e, t) {
	return e.map((n) => n * t);
}
function H2(e, t) {
	return e.map(() => t || Zx).splice(0, e.length - 1);
}
function ro({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut",
}) {
	const i = JP(r) ? r.map(Tm) : Tm(r),
		s = { done: !1, value: t[0] },
		o = z2(n && n.length === t.length ? n : $2(t), e),
		a = B2(o, t, { ease: Array.isArray(i) ? i : H2(t, i) });
	return {
		calculatedDuration: e,
		next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
	};
}
const G2 = (e) => e !== null;
function du(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	const s = e.filter(G2),
		a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
	return !a || r === void 0 ? s[a] : r;
}
const W2 = { decay: Td, inertia: Td, tween: ro, keyframes: ro, spring: Nl };
function dw(e) {
	typeof e.type == "string" && (e.type = W2[e.type]);
}
class mh {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((t) => {
			this.resolve = t;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(t, n) {
		return this.finished.then(t, n);
	}
}
const K2 = (e) => e / 100;
class jl extends mh {
	constructor(t) {
		super(),
			(this.state = "idle"),
			(this.startTime = null),
			(this.isStopped = !1),
			(this.currentTime = 0),
			(this.holdTime = null),
			(this.playbackSpeed = 1),
			(this.delayState = { done: !1, value: void 0 }),
			(this.stop = () => {
				var r, i;
				const { motionValue: n } = this.options;
				n && n.updatedAt !== qe.now() && this.tick(qe.now()),
					(this.isStopped = !0),
					this.state !== "idle" &&
						(this.teardown(),
						(i = (r = this.options).onStop) == null || i.call(r));
			}),
			(this.options = t),
			this.initAnimation(),
			this.play(),
			t.autoplay === !1 && this.pause();
	}
	initAnimation() {
		const { options: t } = this;
		dw(t);
		const {
			type: n = ro,
			repeat: r = 0,
			repeatDelay: i = 0,
			repeatType: s,
			velocity: o = 0,
		} = t;
		let { keyframes: a } = t;
		const l = n || ro;
		l !== ro &&
			typeof a[0] != "number" &&
			((this.mixKeyframes = Ho(K2, lw(a[0], a[1]))), (a = [0, 100]));
		const u = l({ ...t, keyframes: a });
		s === "mirror" &&
			(this.mirroredGenerator = l({
				...t,
				keyframes: [...a].reverse(),
				velocity: -o,
			})),
			u.calculatedDuration === null && (u.calculatedDuration = ph(u));
		const { calculatedDuration: c } = u;
		(this.calculatedDuration = c),
			(this.resolvedDuration = c + i),
			(this.totalDuration = this.resolvedDuration * (r + 1) - i),
			(this.generator = u);
	}
	updateTime(t) {
		const n = Math.round(t - this.startTime) * this.playbackSpeed;
		this.holdTime !== null
			? (this.currentTime = this.holdTime)
			: (this.currentTime = n);
	}
	tick(t, n = !1) {
		const {
			generator: r,
			totalDuration: i,
			mixKeyframes: s,
			mirroredGenerator: o,
			resolvedDuration: a,
			calculatedDuration: l,
		} = this;
		if (this.startTime === null) return r.next(0);
		const {
			delay: u = 0,
			keyframes: c,
			repeat: d,
			repeatType: f,
			repeatDelay: h,
			type: g,
			onUpdate: y,
			finalKeyframe: x,
		} = this.options;
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 &&
			  (this.startTime = Math.min(t - i / this.speed, this.startTime)),
			n ? (this.currentTime = t) : this.updateTime(t);
		const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
			p = this.playbackSpeed >= 0 ? m < 0 : m > i;
		(this.currentTime = Math.max(m, 0)),
			this.state === "finished" &&
				this.holdTime === null &&
				(this.currentTime = i);
		let v = this.currentTime,
			S = r;
		if (d) {
			const C = Math.min(this.currentTime, i) / a;
			let N = Math.floor(C),
				P = C % 1;
			!P && C >= 1 && (P = 1),
				P === 1 && N--,
				(N = Math.min(N, d + 1)),
				!!(N % 2) &&
					(f === "reverse"
						? ((P = 1 - P), h && (P -= h / a))
						: f === "mirror" && (S = o)),
				(v = bn(0, 1, P) * a);
		}
		let T;
		p
			? ((this.delayState.value = c[0]), (T = this.delayState))
			: (T = S.next(v)),
			s && !p && (T.value = s(T.value));
		let { done: E } = T;
		!p &&
			l !== null &&
			(E =
				this.playbackSpeed >= 0
					? this.currentTime >= i
					: this.currentTime <= 0);
		const A =
			this.holdTime === null &&
			(this.state === "finished" || (this.state === "running" && E));
		return (
			A && g !== Td && (T.value = du(c, this.options, x, this.speed)),
			y && y(T.value),
			A && this.finish(),
			T
		);
	}
	then(t, n) {
		return this.finished.then(t, n);
	}
	get duration() {
		return Rt(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay: t = 0 } = this.options || {};
		return this.duration + Rt(t);
	}
	get time() {
		return Rt(this.currentTime);
	}
	set time(t) {
		(t = ht(t)),
			(this.currentTime = t),
			this.startTime === null ||
			this.holdTime !== null ||
			this.playbackSpeed === 0
				? (this.holdTime = t)
				: this.driver &&
				  (this.startTime = this.driver.now() - t / this.playbackSpeed),
			this.driver
				? this.driver.start(!1)
				: ((this.startTime = 0),
				  (this.state = "paused"),
				  (this.holdTime = t),
				  this.tick(t));
	}
	getGeneratorVelocity() {
		const t = this.currentTime;
		if (t <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(t);
		const n = this.generator.next(t).value;
		return cw((r) => this.generator.next(r).value, t, n);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(t) {
		const n = this.playbackSpeed !== t;
		n && this.driver && this.updateTime(qe.now()),
			(this.playbackSpeed = t),
			n && this.driver && (this.time = Rt(this.currentTime));
	}
	play() {
		var i, s;
		if (this.isStopped) return;
		const { driver: t = M2, startTime: n } = this.options;
		this.driver || (this.driver = t((o) => this.tick(o))),
			(s = (i = this.options).onPlay) == null || s.call(i);
		const r = this.driver.now();
		this.state === "finished"
			? (this.updateFinished(), (this.startTime = r))
			: this.holdTime !== null
			? (this.startTime = r - this.holdTime)
			: this.startTime || (this.startTime = n != null ? n : r),
			this.state === "finished" &&
				this.speed < 0 &&
				(this.startTime += this.calculatedDuration),
			(this.holdTime = null),
			(this.state = "running"),
			this.driver.start();
	}
	pause() {
		(this.state = "paused"),
			this.updateTime(qe.now()),
			(this.holdTime = this.currentTime);
	}
	complete() {
		this.state !== "running" && this.play(),
			(this.state = "finished"),
			(this.holdTime = null);
	}
	finish() {
		var t, n;
		this.notifyFinished(),
			this.teardown(),
			(this.state = "finished"),
			(n = (t = this.options).onComplete) == null || n.call(t);
	}
	cancel() {
		var t, n;
		(this.holdTime = null),
			(this.startTime = 0),
			this.tick(0),
			this.teardown(),
			(n = (t = this.options).onCancel) == null || n.call(t);
	}
	teardown() {
		(this.state = "idle"),
			this.stopDriver(),
			(this.startTime = this.holdTime = null);
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0));
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0);
	}
	attachTimeline(t) {
		var n;
		return (
			this.options.allowFlatten &&
				((this.options.type = "keyframes"),
				(this.options.ease = "linear"),
				this.initAnimation()),
			(n = this.driver) == null || n.stop(),
			t.observe(this)
		);
	}
}
function Y2(e) {
	var t;
	for (let n = 1; n < e.length; n++) (t = e[n]) != null || (e[n] = e[n - 1]);
}
const Yr = (e) => (e * 180) / Math.PI,
	Ed = (e) => {
		const t = Yr(Math.atan2(e[1], e[0]));
		return Cd(t);
	},
	Q2 = {
		x: 4,
		y: 5,
		translateX: 4,
		translateY: 5,
		scaleX: 0,
		scaleY: 3,
		scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
		rotate: Ed,
		rotateZ: Ed,
		skewX: (e) => Yr(Math.atan(e[1])),
		skewY: (e) => Yr(Math.atan(e[2])),
		skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
	},
	Cd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
	Nm = Ed,
	jm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
	Lm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
	X2 = {
		x: 12,
		y: 13,
		z: 14,
		translateX: 12,
		translateY: 13,
		translateZ: 14,
		scaleX: jm,
		scaleY: Lm,
		scale: (e) => (jm(e) + Lm(e)) / 2,
		rotateX: (e) => Cd(Yr(Math.atan2(e[6], e[5]))),
		rotateY: (e) => Cd(Yr(Math.atan2(-e[2], e[0]))),
		rotateZ: Nm,
		rotate: Nm,
		skewX: (e) => Yr(Math.atan(e[4])),
		skewY: (e) => Yr(Math.atan(e[1])),
		skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
	};
function Ad(e) {
	return e.includes("scale") ? 1 : 0;
}
function Pd(e, t) {
	if (!e || e === "none") return Ad(t);
	const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let r, i;
	if (n) (r = X2), (i = n);
	else {
		const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		(r = Q2), (i = a);
	}
	if (!i) return Ad(t);
	const s = r[t],
		o = i[1].split(",").map(Z2);
	return typeof s == "function" ? s(o) : o[s];
}
const q2 = (e, t) => {
	const { transform: n = "none" } = getComputedStyle(e);
	return Pd(n, t);
};
function Z2(e) {
	return parseFloat(e.trim());
}
const Ss = [
		"transformPerspective",
		"x",
		"y",
		"z",
		"translateX",
		"translateY",
		"translateZ",
		"scale",
		"scaleX",
		"scaleY",
		"rotate",
		"rotateX",
		"rotateY",
		"rotateZ",
		"skew",
		"skewX",
		"skewY",
	],
	Ts = new Set(Ss),
	Dm = (e) => e === bs || e === B,
	J2 = new Set(["x", "y", "z"]),
	ek = Ss.filter((e) => !J2.has(e));
function tk(e) {
	const t = [];
	return (
		ek.forEach((n) => {
			const r = e.getValue(n);
			r !== void 0 &&
				(t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
		}),
		t
	);
}
const fr = {
	width: (
		{ x: e },
		{ paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }
	) => {
		const i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: (
		{ y: e },
		{ paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }
	) => {
		const i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Pd(t, "x"),
	y: (e, { transform: t }) => Pd(t, "y"),
};
fr.translateX = fr.x;
fr.translateY = fr.y;
const ri = new Set();
let kd = !1,
	Rd = !1,
	Md = !1;
function fw() {
	if (Rd) {
		const e = Array.from(ri).filter((r) => r.needsMeasurement),
			t = new Set(e.map((r) => r.element)),
			n = new Map();
		t.forEach((r) => {
			const i = tk(r);
			i.length && (n.set(r, i), r.render());
		}),
			e.forEach((r) => r.measureInitialState()),
			t.forEach((r) => {
				r.render();
				const i = n.get(r);
				i &&
					i.forEach(([s, o]) => {
						var a;
						(a = r.getValue(s)) == null || a.set(o);
					});
			}),
			e.forEach((r) => r.measureEndState()),
			e.forEach((r) => {
				r.suspendedScrollY !== void 0 &&
					window.scrollTo(0, r.suspendedScrollY);
			});
	}
	(Rd = !1), (kd = !1), ri.forEach((e) => e.complete(Md)), ri.clear();
}
function hw() {
	ri.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Rd = !0);
	});
}
function nk() {
	(Md = !0), hw(), fw(), (Md = !1);
}
class gh {
	constructor(t, n, r, i, s, o = !1) {
		(this.state = "pending"),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = n),
			(this.name = r),
			(this.motionValue = i),
			(this.element = s),
			(this.isAsync = o);
	}
	scheduleResolve() {
		(this.state = "scheduled"),
			this.isAsync
				? (ri.add(this),
				  kd || ((kd = !0), oe.read(hw), oe.resolveKeyframes(fw)))
				: (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i,
		} = this;
		if (t[0] === null) {
			const s = i == null ? void 0 : i.get(),
				o = t[t.length - 1];
			if (s !== void 0) t[0] = s;
			else if (r && n) {
				const a = r.readValue(n, o);
				a != null && (t[0] = a);
			}
			t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
		}
		Y2(t);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(t = !1) {
		(this.state = "complete"),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
			ri.delete(this);
	}
	cancel() {
		this.state === "scheduled" &&
			(ri.delete(this), (this.state = "pending"));
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}
const rk = (e) => e.startsWith("--");
function pw(e, t, n) {
	rk(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const ik = {};
function mw(e, t) {
	const n = $x(e);
	return () => {
		var r;
		return (r = ik[t]) != null ? r : n();
	};
}
const sk = mw(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
	gw = mw(() => {
		try {
			document
				.createElement("div")
				.animate({ opacity: 0 }, { easing: "linear(0, 1)" });
		} catch (e) {
			return !1;
		}
		return !0;
	}, "linearEasing"),
	Hs = ([e, t, n, r]) =>
		"cubic-bezier("
			.concat(e, ", ")
			.concat(t, ", ")
			.concat(n, ", ")
			.concat(r, ")"),
	Im = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: Hs([0, 0.65, 0.55, 1]),
		circOut: Hs([0.55, 0, 1, 0.45]),
		backIn: Hs([0.31, 0.01, 0.66, -0.59]),
		backOut: Hs([0.33, 1.53, 0.69, 0.99]),
	};
function yw(e, t) {
	if (e)
		return typeof e == "function"
			? gw()
				? uw(e, t)
				: "ease-out"
			: Jx(e)
			? Hs(e)
			: Array.isArray(e)
			? e.map((n) => yw(n, t) || Im.easeOut)
			: Im[e];
}
function ok(
	e,
	t,
	n,
	{
		delay: r = 0,
		duration: i = 300,
		repeat: s = 0,
		repeatType: o = "loop",
		ease: a = "easeOut",
		times: l,
	} = {},
	u = void 0
) {
	const c = { [t]: n };
	l && (c.offset = l);
	const d = yw(a, i);
	Array.isArray(d) && (c.easing = d);
	const f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: s + 1,
		direction: o === "reverse" ? "alternate" : "normal",
	};
	return u && (f.pseudoElement = u), e.animate(c, f);
}
function vw(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
function ak({ type: e, ...t }) {
	var n, r;
	return vw(e) && gw()
		? e.applyToOptions(t)
		: ((n = t.duration) != null || (t.duration = 300),
		  (r = t.ease) != null || (t.ease = "easeOut"),
		  t);
}
class xw extends mh {
	constructor(t) {
		if (
			(super(),
			(this.finishedTime = null),
			(this.isStopped = !1),
			(this.manualStartTime = null),
			!t)
		)
			return;
		const {
			element: n,
			name: r,
			keyframes: i,
			pseudoElement: s,
			allowFlatten: o = !1,
			finalKeyframe: a,
			onComplete: l,
		} = t;
		(this.isPseudoElement = !!s),
			(this.allowFlatten = o),
			(this.options = t),
			fs(
				typeof t.type != "string",
				'Mini animate() doesn\'t support "type" as a string.',
				"mini-spring"
			);
		const u = ak(t);
		(this.animation = ok(n, r, i, u, s)),
			u.autoplay === !1 && this.animation.pause(),
			(this.animation.onfinish = () => {
				if (((this.finishedTime = this.time), !s)) {
					const c = du(i, this.options, a, this.speed);
					this.updateMotionValue && this.updateMotionValue(c),
						pw(n, r, c),
						this.animation.cancel();
				}
				l == null || l(), this.notifyFinished();
			});
	}
	play() {
		this.isStopped ||
			((this.manualStartTime = null),
			this.animation.play(),
			this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		var t, n;
		(n = (t = this.animation).finish) == null || n.call(t);
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (t) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		const { state: t } = this;
		t === "idle" ||
			t === "finished" ||
			(this.updateMotionValue
				? this.updateMotionValue()
				: this.commitStyles(),
			this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		var n, r, i;
		const t = (n = this.options) == null ? void 0 : n.element;
		!this.isPseudoElement &&
			t != null &&
			t.isConnected &&
			((i = (r = this.animation).commitStyles) == null || i.call(r));
	}
	get duration() {
		var n, r;
		const t =
			((r =
				(n = this.animation.effect) == null
					? void 0
					: n.getComputedTiming) == null
				? void 0
				: r.call(n).duration) || 0;
		return Rt(Number(t));
	}
	get iterationDuration() {
		const { delay: t = 0 } = this.options || {};
		return this.duration + Rt(t);
	}
	get time() {
		return Rt(Number(this.animation.currentTime) || 0);
	}
	set time(t) {
		const n = this.finishedTime !== null;
		(this.manualStartTime = null),
			(this.finishedTime = null),
			(this.animation.currentTime = ht(t)),
			n && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(t) {
		t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
	}
	get state() {
		return this.finishedTime !== null
			? "finished"
			: this.animation.playState;
	}
	get startTime() {
		var t;
		return (t = this.manualStartTime) != null
			? t
			: Number(this.animation.startTime);
	}
	set startTime(t) {
		this.manualStartTime = this.animation.startTime = t;
	}
	attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
		var s;
		return (
			this.allowFlatten &&
				((s = this.animation.effect) == null ||
					s.updateTiming({ easing: "linear" })),
			(this.animation.onfinish = null),
			t && sk()
				? ((this.animation.timeline = t),
				  n && (this.animation.rangeStart = n),
				  r && (this.animation.rangeEnd = r),
				  Nt)
				: i(this)
		);
	}
}
const ww = { anticipate: Qx, backInOut: Yx, circInOut: qx };
function lk(e) {
	return e in ww;
}
function uk(e) {
	typeof e.ease == "string" && lk(e.ease) && (e.ease = ww[e.ease]);
}
const ic = 10;
class ck extends xw {
	constructor(t) {
		uk(t),
			dw(t),
			super(t),
			t.startTime !== void 0 &&
				t.autoplay !== !1 &&
				(this.startTime = t.startTime),
			(this.options = t);
	}
	updateMotionValue(t) {
		const {
			motionValue: n,
			onUpdate: r,
			onComplete: i,
			element: s,
			...o
		} = this.options;
		if (!n) return;
		if (t !== void 0) {
			n.set(t);
			return;
		}
		const a = new jl({ ...o, autoplay: !1 }),
			l = Math.max(ic, qe.now() - this.startTime),
			u = bn(0, ic, l - ic),
			c = a.sample(l).value,
			{ name: d } = this.options;
		s && d && pw(s, d, c),
			n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
			a.stop();
	}
}
const Om = (e, t) =>
	t === "zIndex"
		? !1
		: !!(
				typeof e == "number" ||
				Array.isArray(e) ||
				(typeof e == "string" &&
					(en.test(e) || e === "0") &&
					!e.startsWith("url("))
		  );
function dk(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function fk(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	const s = e[e.length - 1],
		o = Om(i, t),
		a = Om(s, t);
	return (
		cu(
			o === a,
			"You are trying to animate "
				.concat(t, ' from "')
				.concat(i, '" to "')
				.concat(s, '". "')
				.concat(o ? s : i, '" is not an animatable value.'),
			"value-not-animatable"
		),
		!o || !a ? !1 : dk(e) || ((n === "spring" || vw(n)) && r)
	);
}
function Nd(e) {
	(e.duration = 0), (e.type = "keyframes");
}
const bw = new Set(["opacity", "clipPath", "filter", "transform"]),
	hk = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function pk(e) {
	for (let t = 0; t < e.length; t++)
		if (typeof e[t] == "string" && hk.test(e[t])) return !0;
	return !1;
}
const mk = new Set([
		"color",
		"backgroundColor",
		"outlineColor",
		"fill",
		"stroke",
		"borderColor",
		"borderTopColor",
		"borderRightColor",
		"borderBottomColor",
		"borderLeftColor",
	]),
	gk = $x(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function yk(e) {
	var d;
	const {
		motionValue: t,
		name: n,
		repeatDelay: r,
		repeatType: i,
		damping: s,
		type: o,
		keyframes: a,
	} = e;
	if (
		!(
			((d = t == null ? void 0 : t.owner) == null
				? void 0
				: d.current) instanceof HTMLElement
		)
	)
		return !1;
	const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
	return (
		gk() &&
		n &&
		(bw.has(n) || (mk.has(n) && pk(a))) &&
		(n !== "transform" || !c) &&
		!u &&
		!r &&
		i !== "mirror" &&
		s !== 0 &&
		o !== "inertia"
	);
}
const vk = 40;
class xk extends mh {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = "keyframes",
		repeat: i = 0,
		repeatDelay: s = 0,
		repeatType: o = "loop",
		keyframes: a,
		name: l,
		motionValue: u,
		element: c,
		...d
	}) {
		var g;
		super(),
			(this.stop = () => {
				var y, x;
				this._animation &&
					(this._animation.stop(),
					(y = this.stopTimeline) == null || y.call(this)),
					(x = this.keyframeResolver) == null || x.cancel();
			}),
			(this.createdAt = qe.now());
		const f = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: s,
				repeatType: o,
				name: l,
				motionValue: u,
				element: c,
				...d,
			},
			h = (c == null ? void 0 : c.KeyframeResolver) || gh;
		(this.keyframeResolver = new h(
			a,
			(y, x, m) => this.onKeyframesResolved(y, x, f, !m),
			l,
			u,
			c
		)),
			(g = this.keyframeResolver) == null || g.scheduleResolve();
	}
	onKeyframesResolved(t, n, r, i) {
		var m, p;
		this.keyframeResolver = void 0;
		const {
			name: s,
			type: o,
			velocity: a,
			delay: l,
			isHandoff: u,
			onUpdate: c,
		} = r;
		this.resolvedAt = qe.now();
		let d = !0;
		fk(t, s, o, a) ||
			((d = !1),
			(Pr.instantAnimations || !l) && (c == null || c(du(t, r, n))),
			(t[0] = t[t.length - 1]),
			Nd(r),
			(r.repeat = 0));
		const h = {
				startTime: i
					? this.resolvedAt
						? this.resolvedAt - this.createdAt > vk
							? this.resolvedAt
							: this.createdAt
						: this.createdAt
					: void 0,
				finalKeyframe: n,
				...r,
				keyframes: t,
			},
			g = d && !u && yk(h),
			y =
				(p = (m = h.motionValue) == null ? void 0 : m.owner) == null
					? void 0
					: p.current;
		let x;
		if (g)
			try {
				x = new ck({ ...h, element: y });
			} catch (v) {
				x = new jl(h);
			}
		else x = new jl(h);
		x.finished
			.then(() => {
				this.notifyFinished();
			})
			.catch(Nt),
			this.pendingTimeline &&
				((this.stopTimeline = x.attachTimeline(this.pendingTimeline)),
				(this.pendingTimeline = void 0)),
			(this._animation = x);
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(t, n) {
		return this.finished.finally(t).then(() => {});
	}
	get animation() {
		var t;
		return (
			this._animation ||
				((t = this.keyframeResolver) == null || t.resume(), nk()),
			this._animation
		);
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(t) {
		this.animation.time = t;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(t) {
		this.animation.speed = t;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(t) {
		return (
			this._animation
				? (this.stopTimeline = this.animation.attachTimeline(t))
				: (this.pendingTimeline = t),
			() => this.stop()
		);
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		var t;
		this._animation && this.animation.cancel(),
			(t = this.keyframeResolver) == null || t.cancel();
	}
}
function Sw(e, t, n, r = 0, i = 1) {
	const s = Array.from(e)
			.sort((u, c) => u.sortNodePosition(c))
			.indexOf(t),
		o = e.size,
		a = (o - 1) * r;
	return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const wk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function bk(e) {
	const t = wk.exec(e);
	if (!t) return [,];
	const [, n, r, i] = t;
	return ["--".concat(n != null ? n : r), i];
}
const Sk = 4;
function Tw(e, t, n = 1) {
	fs(
		n <= Sk,
		'Max CSS variable fallback depth detected in property "'.concat(
			e,
			'". This may indicate a circular fallback dependency.'
		),
		"max-css-var-depth"
	);
	const [r, i] = bk(e);
	if (!r) return;
	const s = window.getComputedStyle(t).getPropertyValue(r);
	if (s) {
		const o = s.trim();
		return _x(o) ? parseFloat(o) : o;
	}
	return ch(i) ? Tw(i, t, n + 1) : i;
}
const Tk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	Ek = (e) => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	Ck = { type: "keyframes", duration: 0.8 },
	Ak = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Pk = (e, { keyframes: t }) =>
		t.length > 2
			? Ck
			: Ts.has(e)
			? e.startsWith("scale")
				? Ek(t[1])
				: Tk
			: Ak;
function Ew(e, t) {
	if (e != null && e.inherit && t) {
		const { inherit: n, ...r } = e;
		return { ...t, ...r };
	}
	return e;
}
function yh(e, t) {
	var r, i;
	const n =
		(i =
			(r = e == null ? void 0 : e[t]) != null
				? r
				: e == null
				? void 0
				: e.default) != null
			? i
			: e;
	return n !== e ? Ew(n, e) : n;
}
const kk = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed",
]);
function Rk(e) {
	for (const t in e) if (!kk.has(t)) return !0;
	return !1;
}
const vh =
	(e, t, n, r = {}, i, s) =>
	(o) => {
		const a = yh(r, e) || {},
			l = a.delay || r.delay || 0;
		let { elapsed: u = 0 } = r;
		u = u - ht(l);
		const c = {
			keyframes: Array.isArray(n) ? n : [null, n],
			ease: "easeOut",
			velocity: t.getVelocity(),
			...a,
			delay: -u,
			onUpdate: (f) => {
				t.set(f), a.onUpdate && a.onUpdate(f);
			},
			onComplete: () => {
				o(), a.onComplete && a.onComplete();
			},
			name: e,
			motionValue: t,
			element: s ? void 0 : i,
		};
		Rk(a) || Object.assign(c, Pk(e, c)),
			c.duration && (c.duration = ht(c.duration)),
			c.repeatDelay && (c.repeatDelay = ht(c.repeatDelay)),
			c.from !== void 0 && (c.keyframes[0] = c.from);
		let d = !1;
		if (
			((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
				(Nd(c), c.delay === 0 && (d = !0)),
			(Pr.instantAnimations ||
				Pr.skipAnimations ||
				(i != null && i.shouldSkipAnimations)) &&
				((d = !0), Nd(c), (c.delay = 0)),
			(c.allowFlatten = !a.type && !a.ease),
			d && !s && t.get() !== void 0)
		) {
			const f = du(c.keyframes, a);
			if (f !== void 0) {
				oe.update(() => {
					c.onUpdate(f), c.onComplete();
				});
				return;
			}
		}
		return a.isSync ? new jl(c) : new xk(c);
	};
function Fm(e) {
	const t = [{}, {}];
	return (
		e == null ||
			e.values.forEach((n, r) => {
				(t[0][r] = n.get()), (t[1][r] = n.getVelocity());
			}),
		t
	);
}
function xh(e, t, n, r) {
	if (typeof t == "function") {
		const [i, s] = Fm(r);
		t = t(n !== void 0 ? n : e.custom, i, s);
	}
	if (
		(typeof t == "string" && (t = e.variants && e.variants[t]),
		typeof t == "function")
	) {
		const [i, s] = Fm(r);
		t = t(n !== void 0 ? n : e.custom, i, s);
	}
	return t;
}
function ii(e, t, n) {
	const r = e.getProps();
	return xh(r, t, n !== void 0 ? n : r.custom, e);
}
const Cw = new Set([
		"width",
		"height",
		"top",
		"left",
		"right",
		"bottom",
		...Ss,
	]),
	Vm = 30,
	Mk = (e) => !isNaN(parseFloat(e));
class Nk {
	constructor(t, n = {}) {
		(this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (r) => {
				var s;
				const i = qe.now();
				if (
					(this.updatedAt !== i && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(r),
					this.current !== this.prev &&
						((s = this.events.change) == null ||
							s.notify(this.current),
						this.dependents))
				)
					for (const o of this.dependents) o.dirty();
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.owner = n.owner);
	}
	setCurrent(t) {
		(this.current = t),
			(this.updatedAt = qe.now()),
			this.canTrackVelocity === null &&
				t !== void 0 &&
				(this.canTrackVelocity = Mk(this.current));
	}
	setPrevFrameValue(t = this.current) {
		(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
	}
	onChange(t) {
		return this.on("change", t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new ah());
		const r = this.events[t].add(n);
		return t === "change"
			? () => {
					r(),
						oe.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t) {
		this.passiveEffect
			? this.passiveEffect(t, this.updateAndNotify)
			: this.updateAndNotify(t);
	}
	setWithVelocity(t, n, r) {
		this.set(n),
			(this.prev = void 0),
			(this.prevFrameValue = t),
			(this.prevUpdatedAt = this.updatedAt - r);
	}
	jump(t, n = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			n && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		var t;
		(t = this.events.change) == null || t.notify(this.current);
	}
	addDependent(t) {
		this.dependents || (this.dependents = new Set()),
			this.dependents.add(t);
	}
	removeDependent(t) {
		this.dependents && this.dependents.delete(t);
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		const t = qe.now();
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			t - this.updatedAt > Vm
		)
			return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, Vm);
		return zx(
			parseFloat(this.current) - parseFloat(this.prevFrameValue),
			n
		);
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart &&
						this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete &&
					this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel &&
				this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		var t, n;
		(t = this.dependents) == null || t.clear(),
			(n = this.events.destroy) == null || n.notify(),
			this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function ps(e, t) {
	return new Nk(e, t);
}
const jd = (e) => Array.isArray(e);
function jk(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ps(n));
}
function Lk(e) {
	return jd(e) ? e[e.length - 1] || 0 : e;
}
function Dk(e, t) {
	const n = ii(e, t);
	let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
	s = { ...s, ...r };
	for (const o in s) {
		const a = Lk(s[o]);
		jk(e, o, a);
	}
}
const Ve = (e) => !!(e && e.getVelocity);
function Ik(e) {
	return !!(Ve(e) && e.add);
}
function Ld(e, t) {
	const n = e.getValue("willChange");
	if (Ik(n)) return n.add(t);
	if (!n && Pr.WillChange) {
		const r = new Pr.WillChange("auto");
		e.addValue("willChange", r), r.add(t);
	}
}
function wh(e) {
	return e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase()));
}
const Ok = "framerAppearId",
	Aw = "data-" + wh(Ok);
function Pw(e) {
	return e.props[Aw];
}
function Fk({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function kw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	var f;
	let { transition: s, transitionEnd: o, ...a } = t;
	const l = e.getDefaultTransition();
	s = s ? Ew(s, l) : l;
	const u = s == null ? void 0 : s.reduceMotion;
	r && (s = r);
	const c = [],
		d = i && e.animationState && e.animationState.getState()[i];
	for (const h in a) {
		const g = e.getValue(h, (f = e.latestValues[h]) != null ? f : null),
			y = a[h];
		if (y === void 0 || (d && Fk(d, h))) continue;
		const x = { delay: n, ...yh(s || {}, h) },
			m = g.get();
		if (
			m !== void 0 &&
			!g.isAnimating() &&
			!Array.isArray(y) &&
			y === m &&
			!x.velocity
		) {
			oe.update(() => g.set(y));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			const T = Pw(e);
			if (T) {
				const E = window.MotionHandoffAnimation(T, h, oe);
				E !== null && ((x.startTime = E), (p = !0));
			}
		}
		Ld(e, h);
		const v = u != null ? u : e.shouldReduceMotion;
		g.start(vh(h, g, y, v && Cw.has(h) ? { type: !1 } : x, e, p));
		const S = g.animation;
		S && c.push(S);
	}
	if (o) {
		const h = () =>
			oe.update(() => {
				o && Dk(e, o);
			});
		c.length ? Promise.all(c).then(h) : h();
	}
	return c;
}
function Dd(e, t, n = {}) {
	var l;
	const r = ii(
		e,
		t,
		n.type === "exit"
			? (l = e.presenceContext) == null
				? void 0
				: l.custom
			: void 0
	);
	let { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	const s = r ? () => Promise.all(kw(e, r, n)) : () => Promise.resolve(),
		o =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: d,
							staggerDirection: f,
						} = i;
						return Vk(e, t, u, c, d, f, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = i;
	if (a) {
		const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
		return u().then(() => c());
	} else return Promise.all([s(), o(n.delay)]);
}
function Vk(e, t, n = 0, r = 0, i = 0, s = 1, o) {
	const a = [];
	for (const l of e.variantChildren)
		l.notify("AnimationStart", t),
			a.push(
				Dd(l, t, {
					...o,
					delay:
						n +
						(typeof r == "function" ? 0 : r) +
						Sw(e.variantChildren, l, r, i, s),
				}).then(() => l.notify("AnimationComplete", t))
			);
	return Promise.all(a);
}
function _k(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map((s) => Dd(e, s, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Dd(e, t, n);
	else {
		const i = typeof t == "function" ? ii(e, t, n.custom) : t;
		r = Promise.all(kw(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
const Bk = { test: (e) => e === "auto", parse: (e) => e },
	Rw = (e) => (t) => t.test(e),
	Mw = [bs, B, xn, Xn, d2, c2, Bk],
	_m = (e) => Mw.find(Rw(e));
function Uk(e) {
	return typeof e == "number"
		? e === 0
		: e !== null
		? e === "none" || e === "0" || Ux(e)
		: !0;
}
const $k = new Set(["brightness", "contrast", "saturate", "opacity"]);
function zk(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(dh) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let s = $k.has(t) ? 1 : 0;
	return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const Hk = /\b([a-z-]*)\(.*?\)/gu,
	Id = {
		...en,
		getAnimatableNone: (e) => {
			const t = e.match(Hk);
			return t ? t.map(zk).join(" ") : e;
		},
	},
	Od = {
		...en,
		getAnimatableNone: (e) => {
			const t = en.parse(e);
			return en.createTransformer(e)(
				t.map((r) =>
					typeof r == "number"
						? 0
						: typeof r == "object"
						? { ...r, alpha: 1 }
						: r
				)
			);
		},
	},
	Bm = { ...bs, transform: Math.round },
	Gk = {
		rotate: Xn,
		rotateX: Xn,
		rotateY: Xn,
		rotateZ: Xn,
		scale: xa,
		scaleX: xa,
		scaleY: xa,
		scaleZ: xa,
		skew: Xn,
		skewX: Xn,
		skewY: Xn,
		distance: B,
		translateX: B,
		translateY: B,
		translateZ: B,
		x: B,
		y: B,
		z: B,
		perspective: B,
		transformPerspective: B,
		opacity: No,
		originX: Am,
		originY: Am,
		originZ: B,
	},
	bh = {
		borderWidth: B,
		borderTopWidth: B,
		borderRightWidth: B,
		borderBottomWidth: B,
		borderLeftWidth: B,
		borderRadius: B,
		borderTopLeftRadius: B,
		borderTopRightRadius: B,
		borderBottomRightRadius: B,
		borderBottomLeftRadius: B,
		width: B,
		maxWidth: B,
		height: B,
		maxHeight: B,
		top: B,
		right: B,
		bottom: B,
		left: B,
		inset: B,
		insetBlock: B,
		insetBlockStart: B,
		insetBlockEnd: B,
		insetInline: B,
		insetInlineStart: B,
		insetInlineEnd: B,
		padding: B,
		paddingTop: B,
		paddingRight: B,
		paddingBottom: B,
		paddingLeft: B,
		paddingBlock: B,
		paddingBlockStart: B,
		paddingBlockEnd: B,
		paddingInline: B,
		paddingInlineStart: B,
		paddingInlineEnd: B,
		margin: B,
		marginTop: B,
		marginRight: B,
		marginBottom: B,
		marginLeft: B,
		marginBlock: B,
		marginBlockStart: B,
		marginBlockEnd: B,
		marginInline: B,
		marginInlineStart: B,
		marginInlineEnd: B,
		fontSize: B,
		backgroundPositionX: B,
		backgroundPositionY: B,
		...Gk,
		zIndex: Bm,
		fillOpacity: No,
		strokeOpacity: No,
		numOctaves: Bm,
	},
	Wk = {
		...bh,
		color: Ee,
		backgroundColor: Ee,
		outlineColor: Ee,
		fill: Ee,
		stroke: Ee,
		borderColor: Ee,
		borderTopColor: Ee,
		borderRightColor: Ee,
		borderBottomColor: Ee,
		borderLeftColor: Ee,
		filter: Id,
		WebkitFilter: Id,
		mask: Od,
		WebkitMask: Od,
	},
	Nw = (e) => Wk[e],
	Kk = new Set([Id, Od]);
function jw(e, t) {
	let n = Nw(e);
	return (
		Kk.has(n) || (n = en),
		n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	);
}
const Yk = new Set(["auto", "none", "0"]);
function Qk(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i; ) {
		const s = e[r];
		typeof s == "string" && !Yk.has(s) && hs(s).values.length && (i = e[r]),
			r++;
	}
	if (i && n) for (const s of t) e[s] = jw(n, i);
}
class Xk extends gh {
	constructor(t, n, r, i, s) {
		super(t, n, r, i, s, !0);
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: n, name: r } = this;
		if (!n || !n.current) return;
		super.readKeyframes();
		for (let c = 0; c < t.length; c++) {
			let d = t[c];
			if (typeof d == "string" && ((d = d.trim()), ch(d))) {
				const f = Tw(d, n.current);
				f !== void 0 && (t[c] = f),
					c === t.length - 1 && (this.finalKeyframe = d);
			}
		}
		if ((this.resolveNoneKeyframes(), !Cw.has(r) || t.length !== 2)) return;
		const [i, s] = t,
			o = _m(i),
			a = _m(s),
			l = Cm(i),
			u = Cm(s);
		if (l !== u && fr[r]) {
			this.needsMeasurement = !0;
			return;
		}
		if (o !== a)
			if (Dm(o) && Dm(a))
				for (let c = 0; c < t.length; c++) {
					const d = t[c];
					typeof d == "string" && (t[c] = parseFloat(d));
				}
			else fr[r] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: n } = this,
			r = [];
		for (let i = 0; i < t.length; i++)
			(t[i] === null || Uk(t[i])) && r.push(i);
		r.length && Qk(t, r, n);
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: n, name: r } = this;
		if (!t || !t.current) return;
		r === "height" && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = fr[r](
				t.measureViewportBox(),
				window.getComputedStyle(t.current)
			)),
			(n[0] = this.measuredOrigin);
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1);
	}
	measureEndState() {
		var a;
		const { element: t, name: n, unresolvedKeyframes: r } = this;
		if (!t || !t.current) return;
		const i = t.getValue(n);
		i && i.jump(this.measuredOrigin, !1);
		const s = r.length - 1,
			o = r[s];
		(r[s] = fr[n](
			t.measureViewportBox(),
			window.getComputedStyle(t.current)
		)),
			o !== null &&
				this.finalKeyframe === void 0 &&
				(this.finalKeyframe = o),
			(a = this.removedTransforms) != null &&
				a.length &&
				this.removedTransforms.forEach(([l, u]) => {
					t.getValue(l).set(u);
				}),
			this.resolveNoneKeyframes();
	}
}
function Lw(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		const i = document.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((r) => r != null);
}
const Dw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function $a(e) {
	return Bx(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Sh, cancel: v5 } = ew(queueMicrotask, !1),
	zt = { x: !1, y: !1 };
function Iw() {
	return zt.x || zt.y;
}
function qk(e) {
	return e === "x" || e === "y"
		? zt[e]
			? null
			: ((zt[e] = !0),
			  () => {
					zt[e] = !1;
			  })
		: zt.x || zt.y
		? null
		: ((zt.x = zt.y = !0),
		  () => {
				zt.x = zt.y = !1;
		  });
}
function Ow(e, t) {
	const n = Lw(e),
		r = new AbortController(),
		i = { passive: !0, ...t, signal: r.signal };
	return [n, i, () => r.abort()];
}
function Zk(e) {
	return !(e.pointerType === "touch" || Iw());
}
function Jk(e, t, n = {}) {
	const [r, i, s] = Ow(e, n);
	return (
		r.forEach((o) => {
			let a = !1,
				l = !1,
				u;
			const c = () => {
					o.removeEventListener("pointerleave", g);
				},
				d = (x) => {
					u && (u(x), (u = void 0)), c();
				},
				f = (x) => {
					(a = !1),
						window.removeEventListener("pointerup", f),
						window.removeEventListener("pointercancel", f),
						l && ((l = !1), d(x));
				},
				h = () => {
					(a = !0),
						window.addEventListener("pointerup", f, i),
						window.addEventListener("pointercancel", f, i);
				},
				g = (x) => {
					if (x.pointerType !== "touch") {
						if (a) {
							l = !0;
							return;
						}
						d(x);
					}
				},
				y = (x) => {
					if (!Zk(x)) return;
					l = !1;
					const m = t(o, x);
					typeof m == "function" &&
						((u = m), o.addEventListener("pointerleave", g, i));
				};
			o.addEventListener("pointerenter", y, i),
				o.addEventListener("pointerdown", h, i);
		}),
		s
	);
}
const Fw = (e, t) => (t ? (e === t ? !0 : Fw(e, t.parentElement)) : !1),
	Th = (e) =>
		e.pointerType === "mouse"
			? typeof e.button != "number" || e.button <= 0
			: e.isPrimary !== !1,
	eR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function tR(e) {
	return eR.has(e.tagName) || e.isContentEditable === !0;
}
const nR = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function rR(e) {
	return nR.has(e.tagName) || e.isContentEditable === !0;
}
const za = new WeakSet();
function Um(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function sc(e, t) {
	e.dispatchEvent(
		new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
	);
}
const iR = (e, t) => {
	const n = e.currentTarget;
	if (!n) return;
	const r = Um(() => {
		if (za.has(n)) return;
		sc(n, "down");
		const i = Um(() => {
				sc(n, "up");
			}),
			s = () => sc(n, "cancel");
		n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
	});
	n.addEventListener("keydown", r, t),
		n.addEventListener(
			"blur",
			() => n.removeEventListener("keydown", r),
			t
		);
};
function $m(e) {
	return Th(e) && !Iw();
}
const zm = new WeakSet();
function sR(e, t, n = {}) {
	const [r, i, s] = Ow(e, n),
		o = (a) => {
			const l = a.currentTarget;
			if (!$m(a) || zm.has(a)) return;
			za.add(l), n.stopPropagation && zm.add(a);
			const u = t(l, a),
				c = (h, g) => {
					window.removeEventListener("pointerup", d),
						window.removeEventListener("pointercancel", f),
						za.has(l) && za.delete(l),
						$m(h) && typeof u == "function" && u(h, { success: g });
				},
				d = (h) => {
					c(
						h,
						l === window ||
							l === document ||
							n.useGlobalTarget ||
							Fw(l, h.target)
					);
				},
				f = (h) => {
					c(h, !1);
				};
			window.addEventListener("pointerup", d, i),
				window.addEventListener("pointercancel", f, i);
		};
	return (
		r.forEach((a) => {
			(n.useGlobalTarget ? window : a).addEventListener(
				"pointerdown",
				o,
				i
			),
				$a(a) &&
					(a.addEventListener("focus", (u) => iR(u, i)),
					!tR(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
		}),
		s
	);
}
function Eh(e) {
	return Bx(e) && "ownerSVGElement" in e;
}
const Ha = new WeakMap();
let qn;
const Vw = (e, t, n) => (r, i) =>
		i && i[0]
			? i[0][e + "Size"]
			: Eh(r) && "getBBox" in r
			? r.getBBox()[t]
			: r[n],
	oR = Vw("inline", "width", "offsetWidth"),
	aR = Vw("block", "height", "offsetHeight");
function lR({ target: e, borderBoxSize: t }) {
	var n;
	(n = Ha.get(e)) == null ||
		n.forEach((r) => {
			r(e, {
				get width() {
					return oR(e, t);
				},
				get height() {
					return aR(e, t);
				},
			});
		});
}
function uR(e) {
	e.forEach(lR);
}
function cR() {
	typeof ResizeObserver > "u" || (qn = new ResizeObserver(uR));
}
function dR(e, t) {
	qn || cR();
	const n = Lw(e);
	return (
		n.forEach((r) => {
			let i = Ha.get(r);
			i || ((i = new Set()), Ha.set(r, i)),
				i.add(t),
				qn == null || qn.observe(r);
		}),
		() => {
			n.forEach((r) => {
				const i = Ha.get(r);
				i == null || i.delete(t),
					(i != null && i.size) || qn == null || qn.unobserve(r);
			});
		}
	);
}
const Ga = new Set();
let _i;
function fR() {
	(_i = () => {
		const e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			},
		};
		Ga.forEach((t) => t(e));
	}),
		window.addEventListener("resize", _i);
}
function hR(e) {
	return (
		Ga.add(e),
		_i || fR(),
		() => {
			Ga.delete(e),
				!Ga.size &&
					typeof _i == "function" &&
					(window.removeEventListener("resize", _i), (_i = void 0));
		}
	);
}
function Hm(e, t) {
	return typeof e == "function" ? hR(e) : dR(e, t);
}
function pR(e) {
	return Eh(e) && e.tagName === "svg";
}
const mR = [...Mw, Ee, en],
	gR = (e) => mR.find(Rw(e)),
	Gm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Bi = () => ({ x: Gm(), y: Gm() }),
	Wm = () => ({ min: 0, max: 0 }),
	ke = () => ({ x: Wm(), y: Wm() }),
	yR = new WeakMap();
function fu(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function";
}
function jo(e) {
	return typeof e == "string" || Array.isArray(e);
}
const Ch = [
		"animate",
		"whileInView",
		"whileFocus",
		"whileHover",
		"whileTap",
		"whileDrag",
		"exit",
	],
	Ah = ["initial", ...Ch];
function hu(e) {
	return fu(e.animate) || Ah.some((t) => jo(e[t]));
}
function _w(e) {
	return !!(hu(e) || e.variants);
}
function vR(e, t, n) {
	for (const r in t) {
		const i = t[r],
			s = n[r];
		if (Ve(i)) e.addValue(r, i);
		else if (Ve(s)) e.addValue(r, ps(i, { owner: e }));
		else if (s !== i)
			if (e.hasValue(r)) {
				const o = e.getValue(r);
				o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
			} else {
				const o = e.getStaticValue(r);
				e.addValue(r, ps(o !== void 0 ? o : i, { owner: e }));
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
const Fd = { current: null },
	Bw = { current: !1 },
	xR = typeof window < "u";
function wR() {
	if (((Bw.current = !0), !!xR))
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => (Fd.current = e.matches);
			e.addEventListener("change", t), t();
		} else Fd.current = !1;
}
const Km = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete",
];
let Ll = {};
function Uw(e) {
	Ll = e;
}
function bR() {
	return Ll;
}
class SR {
	scrapeMotionValuesFromProps(t, n, r) {
		return {};
	}
	constructor(
		{
			parent: t,
			props: n,
			presenceContext: r,
			reducedMotionConfig: i,
			skipAnimations: s,
			blockInitialAnimation: o,
			visualState: a,
		},
		l = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.shouldSkipAnimations = !1),
			(this.values = new Map()),
			(this.KeyframeResolver = gh),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.hasBeenMounted = !1),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () =>
				this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.renderScheduledAt = 0),
			(this.scheduleRender = () => {
				const h = qe.now();
				this.renderScheduledAt < h &&
					((this.renderScheduledAt = h),
					oe.render(this.render, !1, !0));
			});
		const { latestValues: u, renderState: c } = a;
		(this.latestValues = u),
			(this.baseTarget = { ...u }),
			(this.initialValues = n.initial ? { ...u } : {}),
			(this.renderState = c),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.skipAnimationsConfig = s),
			(this.options = l),
			(this.blockInitialAnimation = !!o),
			(this.isControllingVariants = hu(n)),
			(this.isVariantNode = _w(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
			n,
			{},
			this
		);
		for (const h in f) {
			const g = f[h];
			u[h] !== void 0 && Ve(g) && g.set(u[h]);
		}
	}
	mount(t) {
		var n, r, i;
		if (this.hasBeenMounted)
			for (const s in this.initialValues)
				(n = this.values.get(s)) == null ||
					n.jump(this.initialValues[s]),
					(this.latestValues[s] = this.initialValues[s]);
		(this.current = t),
			yR.set(t, this),
			this.projection &&
				!this.projection.instance &&
				this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree =
					this.parent.addVariantChild(this)),
			this.values.forEach((s, o) => this.bindToMotionValue(o, s)),
			this.reducedMotionConfig === "never"
				? (this.shouldReduceMotion = !1)
				: this.reducedMotionConfig === "always"
				? (this.shouldReduceMotion = !0)
				: (Bw.current || wR(), (this.shouldReduceMotion = Fd.current)),
			(this.shouldSkipAnimations =
				(r = this.skipAnimationsConfig) != null ? r : !1),
			(i = this.parent) == null || i.addChild(this),
			this.update(this.props, this.presenceContext),
			(this.hasBeenMounted = !0);
	}
	unmount() {
		var t;
		this.projection && this.projection.unmount(),
			kr(this.notifyUpdate),
			kr(this.render),
			this.valueSubscriptions.forEach((n) => n()),
			this.valueSubscriptions.clear(),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			(t = this.parent) == null || t.removeChild(this);
		for (const n in this.events) this.events[n].clear();
		for (const n in this.features) {
			const r = this.features[n];
			r && (r.unmount(), (r.isMounted = !1));
		}
		this.current = null;
	}
	addChild(t) {
		var n;
		this.children.add(t),
			(n = this.enteringChildren) != null ||
				(this.enteringChildren = new Set()),
			this.enteringChildren.add(t);
	}
	removeChild(t) {
		this.children.delete(t),
			this.enteringChildren && this.enteringChildren.delete(t);
	}
	bindToMotionValue(t, n) {
		if (
			(this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
			n.accelerate && bw.has(t) && this.current instanceof HTMLElement)
		) {
			const {
					factory: o,
					keyframes: a,
					times: l,
					ease: u,
					duration: c,
				} = n.accelerate,
				d = new xw({
					element: this.current,
					name: t,
					keyframes: a,
					times: l,
					ease: u,
					duration: ht(c),
				}),
				f = o(d);
			this.valueSubscriptions.set(t, () => {
				f(), d.cancel();
			});
			return;
		}
		const r = Ts.has(t);
		r && this.onBindTransform && this.onBindTransform();
		const i = n.on("change", (o) => {
			(this.latestValues[t] = o),
				this.props.onUpdate && oe.preRender(this.notifyUpdate),
				r && this.projection && (this.projection.isTransformDirty = !0),
				this.scheduleRender();
		});
		let s;
		typeof window < "u" &&
			window.MotionCheckAppearSync &&
			(s = window.MotionCheckAppearSync(this, t, n)),
			this.valueSubscriptions.set(t, () => {
				i(), s && s(), n.owner && n.stop();
			});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	updateFeatures() {
		let t = "animation";
		for (t in Ll) {
			const n = Ll[t];
			if (!n) continue;
			const { isEnabled: r, Feature: i } = n;
			if (
				(!this.features[t] &&
					i &&
					r(this.props) &&
					(this.features[t] = new i(this)),
				this.features[t])
			) {
				const s = this.features[t];
				s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: ke();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < Km.length; r++) {
			const i = Km[r];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](),
				delete this.propEventSubscriptions[i]);
			const s = "on" + i,
				o = t[s];
			o && (this.propEventSubscriptions[i] = this.on(i, o));
		}
		(this.prevMotionValues = vR(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n)
			return (
				n.variantChildren && n.variantChildren.add(t),
				() => n.variantChildren.delete(t)
			);
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r &&
			(r && this.removeValue(t),
			this.bindToMotionValue(t, n),
			this.values.set(t, n),
			(this.latestValues[t] = n.get()));
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t])
			return this.props.values[t];
		let r = this.values.get(t);
		return (
			r === void 0 &&
				n !== void 0 &&
				((r = ps(n === null ? void 0 : n, { owner: this })),
				this.addValue(t, r)),
			r
		);
	}
	readValue(t, n) {
		var i;
		let r =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (i = this.getBaseTargetFromProps(this.props, t)) != null
				? i
				: this.readValueFromInstance(this.current, t, this.options);
		return (
			r != null &&
				(typeof r == "string" && (_x(r) || Ux(r))
					? (r = parseFloat(r))
					: !gR(r) && en.test(n) && (r = jw(t, n)),
				this.setBaseTarget(t, Ve(r) ? r.get() : r)),
			Ve(r) ? r.get() : r
		);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var s;
		const { initial: n } = this.props;
		let r;
		if (typeof n == "string" || typeof n == "object") {
			const o = xh(
				this.props,
				n,
				(s = this.presenceContext) == null ? void 0 : s.custom
			);
			o && (r = o[t]);
		}
		if (n && r !== void 0) return r;
		const i = this.getBaseTargetFromProps(this.props, t);
		return i !== void 0 && !Ve(i)
			? i
			: this.initialValues[t] !== void 0 && r === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return (
			this.events[t] || (this.events[t] = new ah()), this.events[t].add(n)
		);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
	scheduleRenderMicrotask() {
		Sh.render(this.render);
	}
}
class $w extends SR {
	constructor() {
		super(...arguments), (this.KeyframeResolver = Xk);
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		const r = t.style;
		return r ? r[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		Ve(t) &&
			(this.childSubscription = t.on("change", (n) => {
				this.current && (this.current.textContent = "".concat(n));
			}));
	}
}
class jr {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function zw({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function TR({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ER(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function oc(e) {
	return e === void 0 || e === 1;
}
function Vd({ scale: e, scaleX: t, scaleY: n }) {
	return !oc(e) || !oc(t) || !oc(n);
}
function zr(e) {
	return (
		Vd(e) ||
		Hw(e) ||
		e.z ||
		e.rotate ||
		e.rotateX ||
		e.rotateY ||
		e.skewX ||
		e.skewY
	);
}
function Hw(e) {
	return Ym(e.x) || Ym(e.y);
}
function Ym(e) {
	return e && e !== "0%";
}
function Dl(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i;
}
function Qm(e, t, n, r, i) {
	return i !== void 0 && (e = Dl(e, i, r)), Dl(e, n, r) + t;
}
function _d(e, t = 0, n = 1, r, i) {
	(e.min = Qm(e.min, t, n, r, i)), (e.max = Qm(e.max, t, n, r, i));
}
function Gw(e, { x: t, y: n }) {
	_d(e.x, t.translate, t.scale, t.originPoint),
		_d(e.y, n.translate, n.scale, n.originPoint);
}
const Xm = 0.999999999999,
	qm = 1.0000000000001;
function CR(e, t, n, r = !1) {
	var a;
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let s, o;
	for (let l = 0; l < i; l++) {
		(s = n[l]), (o = s.projectionDelta);
		const { visualElement: u } = s.options;
		(u && u.props.style && u.props.style.display === "contents") ||
			(r &&
				s.options.layoutScroll &&
				s.scroll &&
				s !== s.root &&
				(hn(e.x, -s.scroll.offset.x), hn(e.y, -s.scroll.offset.y)),
			o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Gw(e, o)),
			r &&
				zr(s.latestValues) &&
				Wa(
					e,
					s.latestValues,
					(a = s.layout) == null ? void 0 : a.layoutBox
				));
	}
	t.x < qm && t.x > Xm && (t.x = 1), t.y < qm && t.y > Xm && (t.y = 1);
}
function hn(e, t) {
	(e.min += t), (e.max += t);
}
function Zm(e, t, n, r, i = 0.5) {
	const s = ce(e.min, e.max, i);
	_d(e, t, n, s, r);
}
function Jm(e, t) {
	return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Wa(e, t, n) {
	const r = n != null ? n : e;
	Zm(e.x, Jm(t.x, r.x), t.scaleX, t.scale, t.originX),
		Zm(e.y, Jm(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Ww(e, t) {
	return zw(ER(e.getBoundingClientRect(), t));
}
function AR(e, t, n) {
	const r = Ww(e, n),
		{ scroll: i } = t;
	return i && (hn(r.x, i.offset.x), hn(r.y, i.offset.y)), r;
}
const PR = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective",
	},
	kR = Ss.length;
function RR(e, t, n) {
	let r = "",
		i = !0;
	for (let s = 0; s < kR; s++) {
		const o = Ss[s],
			a = e[o];
		if (a === void 0) continue;
		let l = !0;
		if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
		else {
			const u = parseFloat(a);
			l = o.startsWith("scale") ? u === 1 : u === 0;
		}
		if (!l || n) {
			const u = Dw(a, bh[o]);
			if (!l) {
				i = !1;
				const c = PR[o] || o;
				r += "".concat(c, "(").concat(u, ") ");
			}
			n && (t[o] = u);
		}
	}
	return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Ph(e, t, n) {
	const { style: r, vars: i, transformOrigin: s } = e;
	let o = !1,
		a = !1;
	for (const l in t) {
		const u = t[l];
		if (Ts.has(l)) {
			o = !0;
			continue;
		} else if (nw(l)) {
			i[l] = u;
			continue;
		} else {
			const c = Dw(u, bh[l]);
			l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
		}
	}
	if (
		(t.transform ||
			(o || n
				? (r.transform = RR(t, e.transform, n))
				: r.transform && (r.transform = "none")),
		a)
	) {
		const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
		r.transformOrigin = "".concat(l, " ").concat(u, " ").concat(c);
	}
}
function Kw(e, { style: t, vars: n }, r, i) {
	const s = e.style;
	let o;
	for (o in t) s[o] = t[o];
	i == null || i.applyProjectionStyles(s, r);
	for (o in n) s.setProperty(o, n[o]);
}
function eg(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Os = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (B.test(e)) e = parseFloat(e);
				else return e;
			const n = eg(e, t.target.x),
				r = eg(e, t.target.y);
			return "".concat(n, "% ").concat(r, "%");
		},
	},
	MR = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = en.parse(e);
			if (i.length > 5) return r;
			const s = en.createTransformer(e),
				o = typeof i[0] != "number" ? 1 : 0,
				a = n.x.scale * t.x,
				l = n.y.scale * t.y;
			(i[0 + o] /= a), (i[1 + o] /= l);
			const u = ce(a, l, 0.5);
			return (
				typeof i[2 + o] == "number" && (i[2 + o] /= u),
				typeof i[3 + o] == "number" && (i[3 + o] /= u),
				s(i)
			);
		},
	},
	Bd = {
		borderRadius: {
			...Os,
			applyTo: [
				"borderTopLeftRadius",
				"borderTopRightRadius",
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
			],
		},
		borderTopLeftRadius: Os,
		borderTopRightRadius: Os,
		borderBottomLeftRadius: Os,
		borderBottomRightRadius: Os,
		boxShadow: MR,
	};
function Yw(e, { layout: t, layoutId: n }) {
	return (
		Ts.has(e) ||
		e.startsWith("origin") ||
		((t || n !== void 0) && (!!Bd[e] || e === "opacity"))
	);
}
function kh(e, t, n) {
	var o;
	const r = e.style,
		i = t == null ? void 0 : t.style,
		s = {};
	if (!r) return s;
	for (const a in r)
		(Ve(r[a]) ||
			(i && Ve(i[a])) ||
			Yw(a, e) ||
			((o = n == null ? void 0 : n.getValue(a)) == null
				? void 0
				: o.liveStyle) !== void 0) &&
			(s[a] = r[a]);
	return s;
}
function NR(e) {
	return window.getComputedStyle(e);
}
class jR extends $w {
	constructor() {
		super(...arguments), (this.type = "html"), (this.renderInstance = Kw);
	}
	readValueFromInstance(t, n) {
		var r;
		if (Ts.has(n))
			return (r = this.projection) != null && r.isProjecting
				? Ad(n)
				: q2(t, n);
		{
			const i = NR(t),
				s = (nw(n) ? i.getPropertyValue(n) : i[n]) || 0;
			return typeof s == "string" ? s.trim() : s;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Ww(t, n);
	}
	build(t, n, r) {
		Ph(t, n, r.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return kh(t, n, r);
	}
}
const LR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	DR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function IR(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const s = i ? LR : DR;
	(e[s.offset] = "".concat(-r)), (e[s.array] = "".concat(t, " ").concat(n));
}
const OR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Qw(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		pathLength: i,
		pathSpacing: s = 1,
		pathOffset: o = 0,
		...a
	},
	l,
	u,
	c
) {
	var h, g;
	if ((Ph(e, a, u), l)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: d, style: f } = e;
	d.transform && ((f.transform = d.transform), delete d.transform),
		(f.transform || d.transformOrigin) &&
			((f.transformOrigin =
				(h = d.transformOrigin) != null ? h : "50% 50%"),
			delete d.transformOrigin),
		f.transform &&
			((f.transformBox =
				(g = c == null ? void 0 : c.transformBox) != null
					? g
					: "fill-box"),
			delete d.transformBox);
	for (const y of OR) d[y] !== void 0 && ((f[y] = d[y]), delete d[y]);
	t !== void 0 && (d.x = t),
		n !== void 0 && (d.y = n),
		r !== void 0 && (d.scale = r),
		i !== void 0 && IR(d, i, s, o, !1);
}
const Xw = new Set([
		"baseFrequency",
		"diffuseConstant",
		"kernelMatrix",
		"kernelUnitLength",
		"keySplines",
		"keyTimes",
		"limitingConeAngle",
		"markerHeight",
		"markerWidth",
		"numOctaves",
		"targetX",
		"targetY",
		"surfaceScale",
		"specularConstant",
		"specularExponent",
		"stdDeviation",
		"tableValues",
		"viewBox",
		"gradientTransform",
		"pathLength",
		"startOffset",
		"textLength",
		"lengthAdjust",
	]),
	qw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function FR(e, t, n, r) {
	Kw(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(Xw.has(i) ? i : wh(i), t.attrs[i]);
}
function Zw(e, t, n) {
	const r = kh(e, t, n);
	for (const i in e)
		if (Ve(e[i]) || Ve(t[i])) {
			const s =
				Ss.indexOf(i) !== -1
					? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
					: i;
			r[s] = e[i];
		}
	return r;
}
class VR extends $w {
	constructor() {
		super(...arguments),
			(this.type = "svg"),
			(this.isSVGTag = !1),
			(this.measureInstanceViewportBox = ke);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (Ts.has(n)) {
			const r = Nw(n);
			return (r && r.default) || 0;
		}
		return (n = Xw.has(n) ? n : wh(n)), t.getAttribute(n);
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Zw(t, n, r);
	}
	build(t, n, r) {
		Qw(t, n, this.isSVGTag, r.transformTemplate, r.style);
	}
	renderInstance(t, n, r, i) {
		FR(t, n, r, i);
	}
	mount(t) {
		(this.isSVGTag = qw(t.tagName)), super.mount(t);
	}
}
const _R = Ah.length;
function Jw(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const n = e.parent ? Jw(e.parent) || {} : {};
		return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
	}
	const t = {};
	for (let n = 0; n < _R; n++) {
		const r = Ah[n],
			i = e.props[r];
		(jo(i) || i === !1) && (t[r] = i);
	}
	return t;
}
function e1(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
const BR = [...Ch].reverse(),
	UR = Ch.length;
function $R(e) {
	return (t) =>
		Promise.all(t.map(({ animation: n, options: r }) => _k(e, n, r)));
}
function zR(e) {
	let t = $R(e),
		n = tg(),
		r = !0,
		i = !1;
	const s = (u) => (c, d) => {
		var h;
		const f = ii(
			e,
			d,
			u === "exit"
				? (h = e.presenceContext) == null
					? void 0
					: h.custom
				: void 0
		);
		if (f) {
			const { transition: g, transitionEnd: y, ...x } = f;
			c = { ...c, ...x, ...y };
		}
		return c;
	};
	function o(u) {
		t = u(e);
	}
	function a(u) {
		const { props: c } = e,
			d = Jw(e.parent) || {},
			f = [],
			h = new Set();
		let g = {},
			y = 1 / 0;
		for (let m = 0; m < UR; m++) {
			const p = BR[m],
				v = n[p],
				S = c[p] !== void 0 ? c[p] : d[p],
				T = jo(S),
				E = p === u ? v.isActive : null;
			E === !1 && (y = m);
			let A = S === d[p] && S !== c[p] && T;
			if (
				(A && (r || i) && e.manuallyAnimateOnMount && (A = !1),
				(v.protectedKeys = { ...g }),
				(!v.isActive && E === null) ||
					(!S && !v.prevProp) ||
					fu(S) ||
					typeof S == "boolean")
			)
				continue;
			if (p === "exit" && v.isActive && E !== !0) {
				v.prevResolvedValues && (g = { ...g, ...v.prevResolvedValues });
				continue;
			}
			const C = HR(v.prevProp, S);
			let N = C || (p === u && v.isActive && !A && T) || (m > y && T),
				P = !1;
			const F = Array.isArray(S) ? S : [S];
			let I = F.reduce(s(p), {});
			E === !1 && (I = {});
			const { prevResolvedValues: $ = {} } = v,
				D = { ...$, ...I },
				K = (k) => {
					(N = !0),
						h.has(k) && ((P = !0), h.delete(k)),
						(v.needsAnimating[k] = !0);
					const R = e.getValue(k);
					R && (R.liveStyle = !1);
				};
			for (const k in D) {
				const R = I[k],
					L = $[k];
				if (g.hasOwnProperty(k)) continue;
				let H = !1;
				jd(R) && jd(L) ? (H = !e1(R, L)) : (H = R !== L),
					H
						? R != null
							? K(k)
							: h.add(k)
						: R !== void 0 && h.has(k)
						? K(k)
						: (v.protectedKeys[k] = !0);
			}
			(v.prevProp = S),
				(v.prevResolvedValues = I),
				v.isActive && (g = { ...g, ...I }),
				(r || i) && e.blockInitialAnimation && (N = !1);
			const U = A && C;
			N &&
				(!U || P) &&
				f.push(
					...F.map((k) => {
						const R = { type: p };
						if (
							typeof k == "string" &&
							(r || i) &&
							!U &&
							e.manuallyAnimateOnMount &&
							e.parent
						) {
							const { parent: L } = e,
								H = ii(L, k);
							if (L.enteringChildren && H) {
								const { delayChildren: z } = H.transition || {};
								R.delay = Sw(L.enteringChildren, e, z);
							}
						}
						return { animation: k, options: R };
					})
				);
		}
		if (h.size) {
			const m = {};
			if (typeof c.initial != "boolean") {
				const p = ii(
					e,
					Array.isArray(c.initial) ? c.initial[0] : c.initial
				);
				p && p.transition && (m.transition = p.transition);
			}
			h.forEach((p) => {
				const v = e.getBaseTarget(p),
					S = e.getValue(p);
				S && (S.liveStyle = !0), (m[p] = v != null ? v : null);
			}),
				f.push({ animation: m });
		}
		let x = !!f.length;
		return (
			r &&
				(c.initial === !1 || c.initial === c.animate) &&
				!e.manuallyAnimateOnMount &&
				(x = !1),
			(r = !1),
			(i = !1),
			x ? t(f) : Promise.resolve()
		);
	}
	function l(u, c) {
		var f;
		if (n[u].isActive === c) return Promise.resolve();
		(f = e.variantChildren) == null ||
			f.forEach((h) => {
				var g;
				return (g = h.animationState) == null
					? void 0
					: g.setActive(u, c);
			}),
			(n[u].isActive = c);
		const d = a(u);
		for (const h in n) n[h].protectedKeys = {};
		return d;
	}
	return {
		animateChanges: a,
		setActive: l,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			(n = tg()), (i = !0);
		},
	};
}
function HR(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !e1(t, e) : !1;
}
function Dr(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	};
}
function tg() {
	return {
		animate: Dr(!0),
		whileInView: Dr(),
		whileHover: Dr(),
		whileTap: Dr(),
		whileDrag: Dr(),
		whileFocus: Dr(),
		exit: Dr(),
	};
}
function Ud(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function $t(e, t) {
	Ud(e.x, t.x), Ud(e.y, t.y);
}
function ng(e, t) {
	(e.translate = t.translate),
		(e.scale = t.scale),
		(e.originPoint = t.originPoint),
		(e.origin = t.origin);
}
const t1 = 1e-4,
	GR = 1 - t1,
	WR = 1 + t1,
	n1 = 0.01,
	KR = 0 - n1,
	YR = 0 + n1;
function Ze(e) {
	return e.max - e.min;
}
function QR(e, t, n) {
	return Math.abs(e - t) <= n;
}
function rg(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = ce(t.min, t.max, e.origin)),
		(e.scale = Ze(n) / Ze(t)),
		(e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
		((e.scale >= GR && e.scale <= WR) || isNaN(e.scale)) && (e.scale = 1),
		((e.translate >= KR && e.translate <= YR) || isNaN(e.translate)) &&
			(e.translate = 0);
}
function io(e, t, n, r) {
	rg(e.x, t.x, n.x, r ? r.originX : void 0),
		rg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ig(e, t, n, r = 0) {
	const i = r ? ce(n.min, n.max, r) : n.min;
	(e.min = i + t.min), (e.max = e.min + Ze(t));
}
function XR(e, t, n, r) {
	ig(e.x, t.x, n.x, r == null ? void 0 : r.x),
		ig(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function sg(e, t, n, r = 0) {
	const i = r ? ce(n.min, n.max, r) : n.min;
	(e.min = t.min - i), (e.max = e.min + Ze(t));
}
function Il(e, t, n, r) {
	sg(e.x, t.x, n.x, r == null ? void 0 : r.x),
		sg(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function og(e, t, n, r, i) {
	return (
		(e -= t),
		(e = Dl(e, 1 / n, r)),
		i !== void 0 && (e = Dl(e, 1 / i, r)),
		e
	);
}
function qR(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
	if (
		(xn.test(t) &&
			((t = parseFloat(t)), (t = ce(o.min, o.max, t / 100) - o.min)),
		typeof t != "number")
	)
		return;
	let a = ce(s.min, s.max, r);
	e === s && (a -= t),
		(e.min = og(e.min, t, n, a, i)),
		(e.max = og(e.max, t, n, a, i));
}
function ag(e, t, [n, r, i], s, o) {
	qR(e, t[n], t[r], t[i], t.scale, s, o);
}
const ZR = ["x", "scaleX", "originX"],
	JR = ["y", "scaleY", "originY"];
function lg(e, t, n, r) {
	ag(e.x, t, ZR, n ? n.x : void 0, r ? r.x : void 0),
		ag(e.y, t, JR, n ? n.y : void 0, r ? r.y : void 0);
}
function ug(e) {
	return e.translate === 0 && e.scale === 1;
}
function r1(e) {
	return ug(e.x) && ug(e.y);
}
function cg(e, t) {
	return e.min === t.min && e.max === t.max;
}
function eM(e, t) {
	return cg(e.x, t.x) && cg(e.y, t.y);
}
function dg(e, t) {
	return (
		Math.round(e.min) === Math.round(t.min) &&
		Math.round(e.max) === Math.round(t.max)
	);
}
function i1(e, t) {
	return dg(e.x, t.x) && dg(e.y, t.y);
}
function fg(e) {
	return Ze(e.x) / Ze(e.y);
}
function hg(e, t) {
	return (
		e.translate === t.translate &&
		e.scale === t.scale &&
		e.originPoint === t.originPoint
	);
}
function un(e) {
	return [e("x"), e("y")];
}
function tM(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		s = e.y.translate / t.y,
		o = (n == null ? void 0 : n.z) || 0;
	if (
		((i || s || o) &&
			(r = "translate3d("
				.concat(i, "px, ")
				.concat(s, "px, ")
				.concat(o, "px) ")),
		(t.x !== 1 || t.y !== 1) &&
			(r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
		n)
	) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: d,
			rotateY: f,
			skewX: h,
			skewY: g,
		} = n;
		u && (r = "perspective(".concat(u, "px) ").concat(r)),
			c && (r += "rotate(".concat(c, "deg) ")),
			d && (r += "rotateX(".concat(d, "deg) ")),
			f && (r += "rotateY(".concat(f, "deg) ")),
			h && (r += "skewX(".concat(h, "deg) ")),
			g && (r += "skewY(".concat(g, "deg) "));
	}
	const a = e.x.scale * t.x,
		l = e.y.scale * t.y;
	return (
		(a !== 1 || l !== 1) && (r += "scale(".concat(a, ", ").concat(l, ")")),
		r || "none"
	);
}
const s1 = [
		"borderTopLeftRadius",
		"borderTopRightRadius",
		"borderBottomLeftRadius",
		"borderBottomRightRadius",
	],
	nM = s1.length,
	pg = (e) => (typeof e == "string" ? parseFloat(e) : e),
	mg = (e) => typeof e == "number" || B.test(e);
function rM(e, t, n, r, i, s) {
	var o, a, l, u;
	i
		? ((e.opacity = ce(0, (o = n.opacity) != null ? o : 1, iM(r))),
		  (e.opacityExit = ce((a = t.opacity) != null ? a : 1, 0, sM(r))))
		: s &&
		  (e.opacity = ce(
				(l = t.opacity) != null ? l : 1,
				(u = n.opacity) != null ? u : 1,
				r
		  ));
	for (let c = 0; c < nM; c++) {
		const d = s1[c];
		let f = gg(t, d),
			h = gg(n, d);
		if (f === void 0 && h === void 0) continue;
		f || (f = 0),
			h || (h = 0),
			f === 0 || h === 0 || mg(f) === mg(h)
				? ((e[d] = Math.max(ce(pg(f), pg(h), r), 0)),
				  (xn.test(h) || xn.test(f)) && (e[d] += "%"))
				: (e[d] = h);
	}
	(t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function gg(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const iM = o1(0, 0.5, Xx),
	sM = o1(0.5, 0.95, Nt);
function o1(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(Mo(e, t, r)));
}
function oM(e, t, n) {
	const r = Ve(e) ? e : ps(e);
	return r.start(vh("", r, t, n)), r.animation;
}
function Lo(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const aM = (e, t) => e.depth - t.depth;
class lM {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		oh(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		kl(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(aM),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
function uM(e, t) {
	const n = qe.now(),
		r = ({ timestamp: i }) => {
			const s = i - n;
			s >= t && (kr(r), e(s - t));
		};
	return oe.setup(r, !0), () => kr(r);
}
function Ka(e) {
	return Ve(e) ? e.get() : e;
}
class cM {
	constructor() {
		this.members = [];
	}
	add(t) {
		oh(this.members, t);
		for (let n = this.members.length - 1; n >= 0; n--) {
			const r = this.members[n];
			if (r === t || r === this.lead || r === this.prevLead) continue;
			const i = r.instance;
			(!i || i.isConnected === !1) &&
				!r.snapshot &&
				(kl(this.members, r), r.unmount());
		}
		t.scheduleRender();
	}
	remove(t) {
		if (
			(kl(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		var n;
		for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
			const i = this.members[r];
			if (
				i.isPresent !== !1 &&
				((n = i.instance) == null ? void 0 : n.isConnected) !== !1
			)
				return this.promote(i), !0;
		}
		return !1;
	}
	promote(t, n) {
		var i;
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.updateSnapshot(), t.scheduleRender();
			const { layoutDependency: s } = r.options,
				{ layoutDependency: o } = t.options;
			(s === void 0 || s !== o) &&
				((t.resumeFrom = r),
				n && (r.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues =
						r.animationValues || r.latestValues)),
				(i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
				t.options.crossfade === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			var n, r, i, s, o;
			(r = (n = t.options).onExitComplete) == null || r.call(n),
				(o =
					(i = t.resumingFrom) == null
						? void 0
						: (s = i.options).onExitComplete) == null || o.call(s);
		});
	}
	scheduleRender() {
		this.members.forEach((t) => t.instance && t.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		var t;
		(t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
	}
}
const Ya = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
	ac = ["", "X", "Y", "Z"],
	dM = 1e3;
let fM = 0;
function lc(e, t, n, r) {
	const { latestValues: i } = t;
	i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function a1(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
	const { visualElement: t } = e.options;
	if (!t) return;
	const n = Pw(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		const { layout: i, layoutId: s } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", oe, !(i || s));
	}
	const { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && a1(r);
}
function l1({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(o = {}, a = t == null ? void 0 : t()) {
			(this.id = fM++),
				(this.animationId = 0),
				(this.animationCommitId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.layoutVersion = 0),
				(this.updateScheduled = !1),
				(this.scheduleUpdate = () => this.update()),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating &&
						((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(this.projectionUpdateScheduled = !1),
						this.nodes.forEach(mM),
						this.nodes.forEach(bM),
						this.nodes.forEach(SM),
						this.nodes.forEach(gM);
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.linkedParentVersion = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = o),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0);
			for (let l = 0; l < this.path.length; l++)
				this.path[l].shouldResetTransform = !0;
			this.root === this && (this.nodes = new lM());
		}
		addEventListener(o, a) {
			return (
				this.eventHandlers.has(o) ||
					this.eventHandlers.set(o, new ah()),
				this.eventHandlers.get(o).add(a)
			);
		}
		notifyListeners(o, ...a) {
			const l = this.eventHandlers.get(o);
			l && l.notify(...a);
		}
		hasListeners(o) {
			return this.eventHandlers.has(o);
		}
		mount(o) {
			if (this.instance) return;
			(this.isSVG = Eh(o) && !pR(o)), (this.instance = o);
			const { layoutId: a, layout: l, visualElement: u } = this.options;
			if (
				(u && !u.current && u.mount(o),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				this.root.hasTreeAnimated &&
					(l || a) &&
					(this.isLayoutDirty = !0),
				e)
			) {
				let c,
					d = 0;
				const f = () => (this.root.updateBlockedByResize = !1);
				oe.read(() => {
					d = window.innerWidth;
				}),
					e(o, () => {
						const h = window.innerWidth;
						h !== d &&
							((d = h),
							(this.root.updateBlockedByResize = !0),
							c && c(),
							(c = uM(f, 250)),
							Ya.hasAnimatedSinceResize &&
								((Ya.hasAnimatedSinceResize = !1),
								this.nodes.forEach(xg)));
					});
			}
			a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					u &&
					(a || l) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: c,
							hasLayoutChanged: d,
							hasRelativeLayoutChanged: f,
							layout: h,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0),
									(this.relativeTarget = void 0);
								return;
							}
							const g =
									this.options.transition ||
									u.getDefaultTransition() ||
									PM,
								{
									onLayoutAnimationStart: y,
									onLayoutAnimationComplete: x,
								} = u.getProps(),
								m =
									!this.targetLayout ||
									!i1(this.targetLayout, h),
								p = !d && f;
							if (
								this.options.layoutRoot ||
								this.resumeFrom ||
								p ||
								(d && (m || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0));
								const v = {
									...yh(g, "layout"),
									onPlay: y,
									onComplete: x,
								};
								(u.shouldReduceMotion ||
									this.options.layoutRoot) &&
									((v.delay = 0), (v.type = !1)),
									this.startAnimation(v),
									this.setAnimationOrigin(c, p);
							} else
								d || xg(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = h;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(),
				this.root.nodes.remove(this);
			const o = this.getStack();
			o && o.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				this.eventHandlers.clear(),
				kr(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(TM),
				this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: o } = this.options;
			return o && o.getProps().transformTemplate;
		}
		willUpdate(o = !0) {
			if (
				((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
			) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(window.MotionCancelOptimisedAnimation &&
					!this.hasCheckedOptimisedAppear &&
					a1(this),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c];
				(d.shouldResetTransform = !0),
					(typeof d.latestValues.x == "string" ||
						typeof d.latestValues.y == "string") &&
						(d.isLayoutDirty = !0),
					d.updateScroll("snapshot"),
					d.options.layoutRoot && d.willUpdate(!1);
			}
			const { layoutId: a, layout: l } = this.options;
			if (a === void 0 && !l) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u
				? u(this.latestValues, "")
				: void 0),
				this.updateSnapshot(),
				o && this.notifyListeners("willUpdate");
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				const l = this.updateBlockedByResize;
				this.unblockUpdate(),
					(this.updateBlockedByResize = !1),
					this.clearAllSnapshots(),
					l && this.nodes.forEach(vM),
					this.nodes.forEach(yg);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(vg);
				return;
			}
			(this.animationCommitId = this.animationId),
				this.isUpdating
					? ((this.isUpdating = !1),
					  this.nodes.forEach(xM),
					  this.nodes.forEach(wM),
					  this.nodes.forEach(hM),
					  this.nodes.forEach(pM))
					: this.nodes.forEach(vg),
				this.clearAllSnapshots();
			const a = qe.now();
			(Fe.delta = bn(0, 1e3 / 60, a - Fe.timestamp)),
				(Fe.timestamp = a),
				(Fe.isProcessing = !0),
				Ju.update.process(Fe),
				Ju.preRender.process(Fe),
				Ju.render.process(Fe),
				(Fe.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), Sh.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(yM), this.sharedNodes.forEach(EM);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				oe.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			oe.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot ||
				!this.instance ||
				((this.snapshot = this.measure()),
				this.snapshot &&
					!Ze(this.snapshot.measuredBox.x) &&
					!Ze(this.snapshot.measuredBox.y) &&
					(this.snapshot = void 0));
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++)
					this.path[l].updateScroll();
			const o = this.layout;
			(this.layout = this.measure(!1)),
				this.layoutVersion++,
				this.layoutCorrected || (this.layoutCorrected = ke()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement: a } = this.options;
			a &&
				a.notify(
					"LayoutMeasure",
					this.layout.layoutBox,
					o ? o.layoutBox : void 0
				);
		}
		updateScroll(o = "measure") {
			let a = !!(this.options.layoutScroll && this.instance);
			if (
				(this.scroll &&
					this.scroll.animationId === this.root.animationId &&
					this.scroll.phase === o &&
					(a = !1),
				a && this.instance)
			) {
				const l = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: o,
					isRoot: l,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : l,
				};
			}
		}
		resetTransform() {
			if (!i) return;
			const o =
					this.isLayoutDirty ||
					this.shouldResetTransform ||
					this.options.alwaysMeasureLayout,
				a = this.projectionDelta && !r1(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			o &&
				this.instance &&
				(a || zr(this.latestValues) || c) &&
				(i(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(o = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return (
				o && (l = this.removeTransform(l)),
				kM(l),
				{
					animationId: this.root.animationId,
					measuredBox: a,
					layoutBox: l,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			var u;
			const { visualElement: o } = this.options;
			if (!o) return ke();
			const a = o.measureViewportBox();
			if (
				!(
					((u = this.scroll) == null ? void 0 : u.wasRoot) ||
					this.path.some(RM)
				)
			) {
				const { scroll: c } = this.root;
				c && (hn(a.x, c.offset.x), hn(a.y, c.offset.y));
			}
			return a;
		}
		removeElementScroll(o) {
			var l;
			const a = ke();
			if (($t(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u],
					{ scroll: d, options: f } = c;
				c !== this.root &&
					d &&
					f.layoutScroll &&
					(d.wasRoot && $t(a, o),
					hn(a.x, d.offset.x),
					hn(a.y, d.offset.y));
			}
			return a;
		}
		applyTransform(o, a = !1, l) {
			var c, d;
			const u = l || ke();
			$t(u, o);
			for (let f = 0; f < this.path.length; f++) {
				const h = this.path[f];
				!a &&
					h.options.layoutScroll &&
					h.scroll &&
					h !== h.root &&
					(hn(u.x, -h.scroll.offset.x), hn(u.y, -h.scroll.offset.y)),
					zr(h.latestValues) &&
						Wa(
							u,
							h.latestValues,
							(c = h.layout) == null ? void 0 : c.layoutBox
						);
			}
			return (
				zr(this.latestValues) &&
					Wa(
						u,
						this.latestValues,
						(d = this.layout) == null ? void 0 : d.layoutBox
					),
				u
			);
		}
		removeTransform(o) {
			var l;
			const a = ke();
			$t(a, o);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				if (!zr(c.latestValues)) continue;
				let d;
				c.instance &&
					(Vd(c.latestValues) && c.updateSnapshot(),
					(d = ke()),
					$t(d, c.measurePageBox())),
					lg(
						a,
						c.latestValues,
						(l = c.snapshot) == null ? void 0 : l.layoutBox,
						d
					);
			}
			return zr(this.latestValues) && lg(a, this.latestValues), a;
		}
		setTargetDelta(o) {
			(this.targetDelta = o),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(o) {
			this.options = {
				...this.options,
				...o,
				crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(o = !1) {
			var h;
			const a = this.getLead();
			this.isProjectionDirty ||
				(this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty ||
					(this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const l = !!this.resumingFrom || this !== a;
			if (
				!(
					o ||
					(l && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					((h = this.parent) != null && h.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return;
			const { layout: c, layoutId: d } = this.options;
			if (!this.layout || !(c || d)) return;
			this.resolvedRelativeTargetAt = Fe.timestamp;
			const f = this.getClosestProjectingParent();
			f &&
				this.linkedParentVersion !== f.layoutVersion &&
				!f.options.layoutRoot &&
				this.removeRelativeTarget(),
				!this.targetDelta &&
					!this.relativeTarget &&
					(this.options.layoutAnchor !== !1 && f && f.layout
						? this.createRelativeTarget(
								f,
								this.layout.layoutBox,
								f.layout.layoutBox
						  )
						: this.removeRelativeTarget()),
				!(!this.relativeTarget && !this.targetDelta) &&
					(this.target ||
						((this.target = ke()),
						(this.targetWithTransforms = ke())),
					this.relativeTarget &&
					this.relativeTargetOrigin &&
					this.relativeParent &&
					this.relativeParent.target
						? (this.forceRelativeParentToResolveTarget(),
						  XR(
								this.target,
								this.relativeTarget,
								this.relativeParent.target,
								this.options.layoutAnchor || void 0
						  ))
						: this.targetDelta
						? (this.resumingFrom
								? this.applyTransform(
										this.layout.layoutBox,
										!1,
										this.target
								  )
								: $t(this.target, this.layout.layoutBox),
						  Gw(this.target, this.targetDelta))
						: $t(this.target, this.layout.layoutBox),
					this.attemptToResolveRelativeTarget &&
						((this.attemptToResolveRelativeTarget = !1),
						this.options.layoutAnchor !== !1 &&
						f &&
						!!f.resumingFrom == !!this.resumingFrom &&
						!f.options.layoutScroll &&
						f.target &&
						this.animationProgress !== 1
							? this.createRelativeTarget(
									f,
									this.target,
									f.target
							  )
							: (this.relativeParent = this.relativeTarget =
									void 0)));
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					Vd(this.parent.latestValues) ||
					Hw(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget ||
					this.targetDelta ||
					this.options.layoutRoot) &&
				this.layout
			);
		}
		createRelativeTarget(o, a, l) {
			(this.relativeParent = o),
				(this.linkedParentVersion = o.layoutVersion),
				this.forceRelativeParentToResolveTarget(),
				(this.relativeTarget = ke()),
				(this.relativeTargetOrigin = ke()),
				Il(
					this.relativeTargetOrigin,
					a,
					l,
					this.options.layoutAnchor || void 0
				),
				$t(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			var g;
			const o = this.getLead(),
				a = !!this.resumingFrom || this !== o;
			let l = !0;
			if (
				((this.isProjectionDirty ||
					((g = this.parent) != null && g.isProjectionDirty)) &&
					(l = !1),
				a &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(l = !1),
				this.resolvedRelativeTargetAt === Fe.timestamp && (l = !1),
				l)
			)
				return;
			const { layout: u, layoutId: c } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(u || c))
			)
				return;
			$t(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				f = this.treeScale.y;
			CR(this.layoutCorrected, this.treeScale, this.path, a),
				o.layout &&
					!o.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((o.target = o.layout.layoutBox),
					(o.targetWithTransforms = ke()));
			const { target: h } = o;
			if (!h) {
				this.prevProjectionDelta &&
					(this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (ng(this.prevProjectionDelta.x, this.projectionDelta.x),
				  ng(this.prevProjectionDelta.y, this.projectionDelta.y)),
				io(
					this.projectionDelta,
					this.layoutCorrected,
					h,
					this.latestValues
				),
				(this.treeScale.x !== d ||
					this.treeScale.y !== f ||
					!hg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!hg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", h));
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(o = !0) {
			var a;
			if (
				((a = this.options.visualElement) == null || a.scheduleRender(),
				o)
			) {
				const l = this.getStack();
				l && l.scheduleRender();
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			(this.prevProjectionDelta = Bi()),
				(this.projectionDelta = Bi()),
				(this.projectionDeltaWithTransform = Bi());
		}
		setAnimationOrigin(o, a = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				c = { ...this.latestValues },
				d = Bi();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const f = ke(),
				h = l ? l.source : void 0,
				g = this.layout ? this.layout.source : void 0,
				y = h !== g,
				x = this.getStack(),
				m = !x || x.members.length <= 1,
				p = !!(
					y &&
					!m &&
					this.options.crossfade === !0 &&
					!this.path.some(AM)
				);
			this.animationProgress = 0;
			let v;
			(this.mixTargetDelta = (S) => {
				const T = S / 1e3;
				wg(d.x, o.x, T),
					wg(d.y, o.y, T),
					this.setTargetDelta(d),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Il(
							f,
							this.layout.layoutBox,
							this.relativeParent.layout.layoutBox,
							this.options.layoutAnchor || void 0
						),
						CM(
							this.relativeTarget,
							this.relativeTargetOrigin,
							f,
							T
						),
						v &&
							eM(this.relativeTarget, v) &&
							(this.isProjectionDirty = !1),
						v || (v = ke()),
						$t(v, this.relativeTarget)),
					y &&
						((this.animationValues = c),
						rM(c, u, this.latestValues, T, p, m)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = T);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(o) {
			var a, l, u;
			this.notifyListeners("animationStart"),
				(a = this.currentAnimation) == null || a.stop(),
				(u =
					(l = this.resumingFrom) == null
						? void 0
						: l.currentAnimation) == null || u.stop(),
				this.pendingAnimation &&
					(kr(this.pendingAnimation),
					(this.pendingAnimation = void 0)),
				(this.pendingAnimation = oe.update(() => {
					(Ya.hasAnimatedSinceResize = !0),
						this.motionValue || (this.motionValue = ps(0)),
						this.motionValue.jump(0, !1),
						(this.currentAnimation = oM(
							this.motionValue,
							[0, 1e3],
							{
								...o,
								velocity: 0,
								isSync: !0,
								onUpdate: (c) => {
									this.mixTargetDelta(c),
										o.onUpdate && o.onUpdate(c);
								},
								onStop: () => {},
								onComplete: () => {
									o.onComplete && o.onComplete(),
										this.completeAnimation();
								},
							}
						)),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation =
								this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const o = this.getStack();
			o && o.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(dM),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const o = this.getLead();
			let {
				targetWithTransforms: a,
				target: l,
				layout: u,
				latestValues: c,
			} = o;
			if (!(!a || !l || !u)) {
				if (
					this !== o &&
					this.layout &&
					u &&
					u1(
						this.options.animationType,
						this.layout.layoutBox,
						u.layoutBox
					)
				) {
					l = this.target || ke();
					const d = Ze(this.layout.layoutBox.x);
					(l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
					const f = Ze(this.layout.layoutBox.y);
					(l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
				}
				$t(a, l),
					Wa(a, c),
					io(
						this.projectionDeltaWithTransform,
						this.layoutCorrected,
						a,
						c
					);
			}
		}
		registerSharedNode(o, a) {
			this.sharedNodes.has(o) || this.sharedNodes.set(o, new cM()),
				this.sharedNodes.get(o).add(a);
			const u = a.options.initialPromotionConfig;
			a.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(a)
						: void 0,
			});
		}
		isLead() {
			const o = this.getStack();
			return o ? o.lead === this : !0;
		}
		getLead() {
			var a;
			const { layoutId: o } = this.options;
			return o
				? ((a = this.getStack()) == null ? void 0 : a.lead) || this
				: this;
		}
		getPrevLead() {
			var a;
			const { layoutId: o } = this.options;
			return o
				? (a = this.getStack()) == null
					? void 0
					: a.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: o } = this.options;
			if (o) return this.root.sharedNodes.get(o);
		}
		promote({
			needsReset: o,
			transition: a,
			preserveFollowOpacity: l,
		} = {}) {
			const u = this.getStack();
			u && u.promote(this, l),
				o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				a && this.setOptions({ transition: a });
		}
		relegate() {
			const o = this.getStack();
			return o ? o.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			const { visualElement: o } = this.options;
			if (!o) return;
			let a = !1;
			const { latestValues: l } = o;
			if (
				((l.z ||
					l.rotate ||
					l.rotateX ||
					l.rotateY ||
					l.rotateZ ||
					l.skewX ||
					l.skewY) &&
					(a = !0),
				!a)
			)
				return;
			const u = {};
			l.z && lc("z", o, u, this.animationValues);
			for (let c = 0; c < ac.length; c++)
				lc("rotate".concat(ac[c]), o, u, this.animationValues),
					lc("skew".concat(ac[c]), o, u, this.animationValues);
			o.render();
			for (const c in u)
				o.setStaticValue(c, u[c]),
					this.animationValues && (this.animationValues[c] = u[c]);
			o.scheduleRender();
		}
		applyProjectionStyles(o, a) {
			var g, y;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				o.visibility = "hidden";
				return;
			}
			const l = this.getTransformTemplate();
			if (this.needsReset) {
				(this.needsReset = !1),
					(o.visibility = ""),
					(o.opacity = ""),
					(o.pointerEvents =
						Ka(a == null ? void 0 : a.pointerEvents) || ""),
					(o.transform = l ? l(this.latestValues, "") : "none");
				return;
			}
			const u = this.getLead();
			if (!this.projectionDelta || !this.layout || !u.target) {
				this.options.layoutId &&
					((o.opacity =
						this.latestValues.opacity !== void 0
							? this.latestValues.opacity
							: 1),
					(o.pointerEvents =
						Ka(a == null ? void 0 : a.pointerEvents) || "")),
					this.hasProjected &&
						!zr(this.latestValues) &&
						((o.transform = l ? l({}, "") : "none"),
						(this.hasProjected = !1));
				return;
			}
			o.visibility = "";
			const c = u.animationValues || u.latestValues;
			this.applyTransformsToTarget();
			let d = tM(this.projectionDeltaWithTransform, this.treeScale, c);
			l && (d = l(c, d)), (o.transform = d);
			const { x: f, y: h } = this.projectionDelta;
			(o.transformOrigin = ""
				.concat(f.origin * 100, "% ")
				.concat(h.origin * 100, "% 0")),
				u.animationValues
					? (o.opacity =
							u === this
								? (y =
										(g = c.opacity) != null
											? g
											: this.latestValues.opacity) != null
									? y
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: c.opacityExit)
					: (o.opacity =
							u === this
								? c.opacity !== void 0
									? c.opacity
									: ""
								: c.opacityExit !== void 0
								? c.opacityExit
								: 0);
			for (const x in Bd) {
				if (c[x] === void 0) continue;
				const { correct: m, applyTo: p, isCSSVariable: v } = Bd[x],
					S = d === "none" ? c[x] : m(c[x], u);
				if (p) {
					const T = p.length;
					for (let E = 0; E < T; E++) o[p[E]] = S;
				} else
					v
						? (this.options.visualElement.renderState.vars[x] = S)
						: (o[x] = S);
			}
			this.options.layoutId &&
				(o.pointerEvents =
					u === this
						? Ka(a == null ? void 0 : a.pointerEvents) || ""
						: "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((o) => {
				var a;
				return (a = o.currentAnimation) == null ? void 0 : a.stop();
			}),
				this.root.nodes.forEach(yg),
				this.root.sharedNodes.clear();
		}
	};
}
function hM(e) {
	e.updateLayout();
}
function pM(e) {
	var n;
	const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: s } = e.options,
			o = t.source !== e.layout.source;
		if (s === "size")
			un((d) => {
				const f = o ? t.measuredBox[d] : t.layoutBox[d],
					h = Ze(f);
				(f.min = r[d].min), (f.max = f.min + h);
			});
		else if (s === "x" || s === "y") {
			const d = s === "x" ? "y" : "x";
			Ud(o ? t.measuredBox[d] : t.layoutBox[d], r[d]);
		} else
			u1(s, t.layoutBox, r) &&
				un((d) => {
					const f = o ? t.measuredBox[d] : t.layoutBox[d],
						h = Ze(r[d]);
					(f.max = f.min + h),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[d].max =
								e.relativeTarget[d].min + h));
				});
		const a = Bi();
		io(a, r, t.layoutBox);
		const l = Bi();
		o
			? io(l, e.applyTransform(i, !0), t.measuredBox)
			: io(l, r, t.layoutBox);
		const u = !r1(a);
		let c = !1;
		if (!e.resumeFrom) {
			const d = e.getClosestProjectingParent();
			if (d && !d.resumeFrom) {
				const { snapshot: f, layout: h } = d;
				if (f && h) {
					const g = e.options.layoutAnchor || void 0,
						y = ke();
					Il(y, t.layoutBox, f.layoutBox, g);
					const x = ke();
					Il(x, r, h.layoutBox, g),
						i1(y, x) || (c = !0),
						d.options.layoutRoot &&
							((e.relativeTarget = x),
							(e.relativeTargetOrigin = y),
							(e.relativeParent = d));
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: t,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: u,
			hasRelativeLayoutChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function mM(e) {
	e.parent &&
		(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
		e.isSharedProjectionDirty ||
			(e.isSharedProjectionDirty = !!(
				e.isProjectionDirty ||
				e.parent.isProjectionDirty ||
				e.parent.isSharedProjectionDirty
			)),
		e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function gM(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yM(e) {
	e.clearSnapshot();
}
function yg(e) {
	e.clearMeasurements();
}
function vM(e) {
	(e.isLayoutDirty = !0), e.updateLayout();
}
function vg(e) {
	e.isLayoutDirty = !1;
}
function xM(e) {
	e.isAnimationBlocked &&
		e.layout &&
		!e.isLayoutDirty &&
		((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function wM(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
		e.resetTransform();
}
function xg(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function bM(e) {
	e.resolveTargetDelta();
}
function SM(e) {
	e.calcProjection();
}
function TM(e) {
	e.resetSkewAndRotation();
}
function EM(e) {
	e.removeLeadSnapshot();
}
function wg(e, t, n) {
	(e.translate = ce(t.translate, 0, n)),
		(e.scale = ce(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function bg(e, t, n, r) {
	(e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r));
}
function CM(e, t, n, r) {
	bg(e.x, t.x, n.x, r), bg(e.y, t.y, n.y, r);
}
function AM(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const PM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Sg = (e) =>
		typeof navigator < "u" &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(e),
	Tg = Sg("applewebkit/") && !Sg("chrome/") ? Math.round : Nt;
function Eg(e) {
	(e.min = Tg(e.min)), (e.max = Tg(e.max));
}
function kM(e) {
	Eg(e.x), Eg(e.y);
}
function u1(e, t, n) {
	return (
		e === "position" || (e === "preserve-aspect" && !QR(fg(t), fg(n), 0.2))
	);
}
function RM(e) {
	var t;
	return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const MM = l1({
		attachResizeListener: (e, t) => Lo(e, "resize", t),
		measureScroll: () => {
			var e, t;
			return {
				x:
					document.documentElement.scrollLeft ||
					((e = document.body) == null ? void 0 : e.scrollLeft) ||
					0,
				y:
					document.documentElement.scrollTop ||
					((t = document.body) == null ? void 0 : t.scrollTop) ||
					0,
			};
		},
		checkIsScrollRoot: () => !0,
	}),
	uc = { current: void 0 },
	c1 = l1({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!uc.current) {
				const e = new MM({});
				e.mount(window),
					e.setOptions({ layoutScroll: !0 }),
					(uc.current = e);
			}
			return uc.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none";
		},
		checkIsScrollRoot: (e) =>
			window.getComputedStyle(e).position === "fixed",
	}),
	Rh = b.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: "never",
	});
function Cg(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function NM(...e) {
	return (t) => {
		let n = !1;
		const r = e.map((i) => {
			const s = Cg(i, t);
			return !n && typeof s == "function" && (n = !0), s;
		});
		if (n)
			return () => {
				for (let i = 0; i < r.length; i++) {
					const s = r[i];
					typeof s == "function" ? s() : Cg(e[i], null);
				}
			};
	};
}
function jM(...e) {
	return b.useCallback(NM(...e), e);
}
class LM extends b.Component {
	getSnapshotBeforeUpdate(t) {
		const n = this.props.childRef.current;
		if (
			$a(n) &&
			t.isPresent &&
			!this.props.isPresent &&
			this.props.pop !== !1
		) {
			const r = n.offsetParent,
				i = ($a(r) && r.offsetWidth) || 0,
				s = ($a(r) && r.offsetHeight) || 0,
				o = getComputedStyle(n),
				a = this.props.sizeRef.current;
			(a.height = parseFloat(o.height)),
				(a.width = parseFloat(o.width)),
				(a.top = n.offsetTop),
				(a.left = n.offsetLeft),
				(a.right = i - a.width - a.left),
				(a.bottom = s - a.height - a.top);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function DM({
	children: e,
	isPresent: t,
	anchorX: n,
	anchorY: r,
	root: i,
	pop: s,
}) {
	var f, h;
	const o = b.useId(),
		a = b.useRef(null),
		l = b.useRef({
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		}),
		{ nonce: u } = b.useContext(Rh),
		c =
			(h = (f = e.props) == null ? void 0 : f.ref) != null
				? h
				: e == null
				? void 0
				: e.ref,
		d = jM(a, c);
	return (
		b.useInsertionEffect(() => {
			const {
				width: g,
				height: y,
				top: x,
				left: m,
				right: p,
				bottom: v,
			} = l.current;
			if (t || s === !1 || !a.current || !g || !y) return;
			const S = n === "left" ? "left: ".concat(m) : "right: ".concat(p),
				T = r === "bottom" ? "bottom: ".concat(v) : "top: ".concat(x);
			a.current.dataset.motionPopId = o;
			const E = document.createElement("style");
			u && (E.nonce = u);
			const A = i != null ? i : document.head;
			return (
				A.appendChild(E),
				E.sheet &&
					E.sheet.insertRule(
						'\n          [data-motion-pop-id="'
							.concat(
								o,
								'"] {\n            position: absolute !important;\n            width: '
							)
							.concat(g, "px !important;\n            height: ")
							.concat(y, "px !important;\n            ")
							.concat(S, "px !important;\n            ")
							.concat(T, "px !important;\n          }\n        ")
					),
				() => {
					var C;
					(C = a.current) == null ||
						C.removeAttribute("data-motion-pop-id"),
						A.contains(E) && A.removeChild(E);
				}
			);
		}, [t]),
		w.jsx(LM, {
			isPresent: t,
			childRef: a,
			sizeRef: l,
			pop: s,
			children: s === !1 ? e : b.cloneElement(e, { ref: d }),
		})
	);
}
const IM = ({
	children: e,
	initial: t,
	isPresent: n,
	onExitComplete: r,
	custom: i,
	presenceAffectsLayout: s,
	mode: o,
	anchorX: a,
	anchorY: l,
	root: u,
}) => {
	const c = sh(OM),
		d = b.useId();
	let f = !0,
		h = b.useMemo(
			() => (
				(f = !1),
				{
					id: d,
					initial: t,
					isPresent: n,
					custom: i,
					onExitComplete: (g) => {
						c.set(g, !0);
						for (const y of c.values()) if (!y) return;
						r && r();
					},
					register: (g) => (c.set(g, !1), () => c.delete(g)),
				}
			),
			[n, c, r]
		);
	return (
		s && f && (h = { ...h }),
		b.useMemo(() => {
			c.forEach((g, y) => c.set(y, !1));
		}, [n]),
		b.useEffect(() => {
			!n && !c.size && r && r();
		}, [n]),
		(e = w.jsx(DM, {
			pop: o === "popLayout",
			isPresent: n,
			anchorX: a,
			anchorY: l,
			root: u,
			children: e,
		})),
		w.jsx(uu.Provider, { value: h, children: e })
	);
};
function OM() {
	return new Map();
}
function d1(e = !0) {
	const t = b.useContext(uu);
	if (t === null) return [!0, null];
	const { isPresent: n, onExitComplete: r, register: i } = t,
		s = b.useId();
	b.useEffect(() => {
		if (e) return i(s);
	}, [e]);
	const o = b.useCallback(() => e && r && r(s), [s, r, e]);
	return !n && r ? [!1, o] : [!0];
}
const wa = (e) => e.key || "";
function Ag(e) {
	const t = [];
	return (
		b.Children.forEach(e, (n) => {
			b.isValidElement(n) && t.push(n);
		}),
		t
	);
}
const at = ({
		children: e,
		custom: t,
		initial: n = !0,
		onExitComplete: r,
		presenceAffectsLayout: i = !0,
		mode: s = "sync",
		propagate: o = !1,
		anchorX: a = "left",
		anchorY: l = "top",
		root: u,
	}) => {
		const [c, d] = d1(o),
			f = b.useMemo(() => Ag(e), [e]),
			h = o && !c ? [] : f.map(wa),
			g = b.useRef(!0),
			y = b.useRef(f),
			x = sh(() => new Map()),
			m = b.useRef(new Set()),
			[p, v] = b.useState(f),
			[S, T] = b.useState(f);
		Vx(() => {
			(g.current = !1), (y.current = f);
			for (let C = 0; C < S.length; C++) {
				const N = wa(S[C]);
				h.includes(N)
					? (x.delete(N), m.current.delete(N))
					: x.get(N) !== !0 && x.set(N, !1);
			}
		}, [S, h.length, h.join("-")]);
		const E = [];
		if (f !== p) {
			let C = [...f];
			for (let N = 0; N < S.length; N++) {
				const P = S[N],
					F = wa(P);
				h.includes(F) || (C.splice(N, 0, P), E.push(P));
			}
			return s === "wait" && E.length && (C = E), T(Ag(C)), v(f), null;
		}
		const { forceRender: A } = b.useContext(ih);
		return w.jsx(w.Fragment, {
			children: S.map((C) => {
				const N = wa(C),
					P = o && !c ? !1 : f === S || h.includes(N),
					F = () => {
						if (m.current.has(N)) return;
						if (x.has(N)) m.current.add(N), x.set(N, !0);
						else return;
						let I = !0;
						x.forEach(($) => {
							$ || (I = !1);
						}),
							I &&
								(A == null || A(),
								T(y.current),
								o && (d == null || d()),
								r && r());
					};
				return w.jsx(
					IM,
					{
						isPresent: P,
						initial: !g.current || n ? void 0 : !1,
						custom: t,
						presenceAffectsLayout: i,
						mode: s,
						root: u,
						onExitComplete: P ? void 0 : F,
						anchorX: a,
						anchorY: l,
						children: C,
					},
					N
				);
			}),
		});
	},
	f1 = b.createContext({ strict: !1 }),
	Pg = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag",
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"],
	};
let kg = !1;
function FM() {
	if (kg) return;
	const e = {};
	for (const t in Pg) e[t] = { isEnabled: (n) => Pg[t].some((r) => !!n[r]) };
	Uw(e), (kg = !0);
}
function h1() {
	return FM(), bR();
}
function VM(e) {
	const t = h1();
	for (const n in e) t[n] = { ...t[n], ...e[n] };
	Uw(t);
}
const _M = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport",
]);
function Ol(e) {
	return (
		e.startsWith("while") ||
		(e.startsWith("drag") && e !== "draggable") ||
		e.startsWith("layout") ||
		e.startsWith("onTap") ||
		e.startsWith("onPan") ||
		e.startsWith("onLayout") ||
		_M.has(e)
	);
}
let p1 = (e) => !Ol(e);
function BM(e) {
	typeof e == "function" &&
		(p1 = (t) => (t.startsWith("on") ? !Ol(t) : e(t)));
}
try {
	BM(require("@emotion/is-prop-valid").default);
} catch (e) {}
function UM(e, t, n) {
	const r = {};
	for (const i in e)
		(i === "values" && typeof e.values == "object") ||
			Ve(e[i]) ||
			((p1(i) ||
				(n === !0 && Ol(i)) ||
				(!t && !Ol(i)) ||
				(e.draggable && i.startsWith("onDrag"))) &&
				(r[i] = e[i]));
	return r;
}
const pu = b.createContext({});
function $M(e, t) {
	if (hu(e)) {
		const { initial: n, animate: r } = e;
		return {
			initial: n === !1 || jo(n) ? n : void 0,
			animate: jo(r) ? r : void 0,
		};
	}
	return e.inherit !== !1 ? t : {};
}
function zM(e) {
	const { initial: t, animate: n } = $M(e, b.useContext(pu));
	return b.useMemo(() => ({ initial: t, animate: n }), [Rg(t), Rg(n)]);
}
function Rg(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
const Mh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function m1(e, t, n) {
	for (const r in t) !Ve(t[r]) && !Yw(r, n) && (e[r] = t[r]);
}
function HM({ transformTemplate: e }, t) {
	return b.useMemo(() => {
		const n = Mh();
		return Ph(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function GM(e, t) {
	const n = e.style || {},
		r = {};
	return m1(r, n, e), Object.assign(r, HM(e, t)), r;
}
function WM(e, t) {
	const n = {},
		r = GM(e, t);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
			(r.touchAction =
				e.drag === !0
					? "none"
					: "pan-".concat(e.drag === "x" ? "y" : "x"))),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(n.tabIndex = 0),
		(n.style = r),
		n
	);
}
const g1 = () => ({ ...Mh(), attrs: {} });
function KM(e, t, n, r) {
	const i = b.useMemo(() => {
		const s = g1();
		return (
			Qw(s, t, qw(r), e.transformTemplate, e.style),
			{ ...s.attrs, style: { ...s.style } }
		);
	}, [t]);
	if (e.style) {
		const s = {};
		m1(s, e.style, e), (i.style = { ...s, ...i.style });
	}
	return i;
}
const YM = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view",
];
function Nh(e) {
	return typeof e != "string" || e.includes("-")
		? !1
		: !!(YM.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function QM(e, t, n, { latestValues: r }, i, s = !1, o) {
	const l = ((o != null ? o : Nh(e)) ? KM : WM)(t, r, i, e),
		u = UM(t, typeof e == "string", s),
		c = e !== b.Fragment ? { ...u, ...l, ref: n } : {},
		{ children: d } = t,
		f = b.useMemo(() => (Ve(d) ? d.get() : d), [d]);
	return b.createElement(e, { ...c, children: f });
}
function XM({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return { latestValues: qM(n, r, i, e), renderState: t() };
}
function qM(e, t, n, r) {
	const i = {},
		s = r(e, {});
	for (const f in s) i[f] = Ka(s[f]);
	let { initial: o, animate: a } = e;
	const l = hu(e),
		u = _w(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || o === !1;
	const d = c ? a : o;
	if (d && typeof d != "boolean" && !fu(d)) {
		const f = Array.isArray(d) ? d : [d];
		for (let h = 0; h < f.length; h++) {
			const g = xh(e, f[h]);
			if (g) {
				const { transitionEnd: y, transition: x, ...m } = g;
				for (const p in m) {
					let v = m[p];
					if (Array.isArray(v)) {
						const S = c ? v.length - 1 : 0;
						v = v[S];
					}
					v !== null && (i[p] = v);
				}
				for (const p in y) i[p] = y[p];
			}
		}
	}
	return i;
}
const y1 = (e) => (t, n) => {
		const r = b.useContext(pu),
			i = b.useContext(uu),
			s = () => XM(e, t, r, i);
		return n ? s() : sh(s);
	},
	ZM = y1({ scrapeMotionValuesFromProps: kh, createRenderState: Mh }),
	JM = y1({ scrapeMotionValuesFromProps: Zw, createRenderState: g1 }),
	eN = Symbol.for("motionComponentSymbol");
function tN(e, t, n) {
	const r = b.useRef(n);
	b.useInsertionEffect(() => {
		r.current = n;
	});
	const i = b.useRef(null);
	return b.useCallback(
		(s) => {
			var a;
			s && ((a = e.onMount) == null || a.call(e, s));
			const o = r.current;
			if (typeof o == "function")
				if (s) {
					const l = o(s);
					typeof l == "function" && (i.current = l);
				} else i.current ? (i.current(), (i.current = null)) : o(s);
			else o && (o.current = s);
			t && (s ? t.mount(s) : t.unmount());
		},
		[t]
	);
}
const v1 = b.createContext({});
function Ci(e) {
	return (
		e &&
		typeof e == "object" &&
		Object.prototype.hasOwnProperty.call(e, "current")
	);
}
function nN(e, t, n, r, i, s) {
	var v, S;
	const { visualElement: o } = b.useContext(pu),
		a = b.useContext(f1),
		l = b.useContext(uu),
		u = b.useContext(Rh),
		c = u.reducedMotion,
		d = u.skipAnimations,
		f = b.useRef(null),
		h = b.useRef(!1);
	(r = r || a.renderer),
		!f.current &&
			r &&
			((f.current = r(e, {
				visualState: t,
				parent: o,
				props: n,
				presenceContext: l,
				blockInitialAnimation: l ? l.initial === !1 : !1,
				reducedMotionConfig: c,
				skipAnimations: d,
				isSVG: s,
			})),
			h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	const g = f.current,
		y = b.useContext(v1);
	g &&
		!g.projection &&
		i &&
		(g.type === "html" || g.type === "svg") &&
		rN(f.current, n, i, y);
	const x = b.useRef(!1);
	b.useInsertionEffect(() => {
		g && x.current && g.update(n, l);
	});
	const m = n[Aw],
		p = b.useRef(
			!!m &&
				typeof window < "u" &&
				!(
					(v = window.MotionHandoffIsComplete) != null &&
					v.call(window, m)
				) &&
				((S = window.MotionHasOptimisedAnimation) == null
					? void 0
					: S.call(window, m))
		);
	return (
		Vx(() => {
			(h.current = !0),
				g &&
					((x.current = !0),
					(window.MotionIsMounted = !0),
					g.updateFeatures(),
					g.scheduleRenderMicrotask(),
					p.current &&
						g.animationState &&
						g.animationState.animateChanges());
		}),
		b.useEffect(() => {
			g &&
				(!p.current &&
					g.animationState &&
					g.animationState.animateChanges(),
				p.current &&
					(queueMicrotask(() => {
						var T;
						(T = window.MotionHandoffMarkAsComplete) == null ||
							T.call(window, m);
					}),
					(p.current = !1)),
				(g.enteringChildren = void 0));
		}),
		g
	);
}
function rN(e, t, n, r) {
	const {
		layoutId: i,
		layout: s,
		drag: o,
		dragConstraints: a,
		layoutScroll: l,
		layoutRoot: u,
		layoutAnchor: c,
		layoutCrossfade: d,
	} = t;
	(e.projection = new n(
		e.latestValues,
		t["data-framer-portal-id"] ? void 0 : x1(e.parent)
	)),
		e.projection.setOptions({
			layoutId: i,
			layout: s,
			alwaysMeasureLayout: !!o || (a && Ci(a)),
			visualElement: e,
			animationType: typeof s == "string" ? s : "both",
			initialPromotionConfig: r,
			crossfade: d,
			layoutScroll: l,
			layoutRoot: u,
			layoutAnchor: c,
		});
}
function x1(e) {
	if (e)
		return e.options.allowProjection !== !1 ? e.projection : x1(e.parent);
}
function cc(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	var u, c;
	r && VM(r);
	const s = n ? n === "svg" : Nh(e),
		o = s ? JM : ZM;
	function a(d, f) {
		let h;
		const g = { ...b.useContext(Rh), ...d, layoutId: iN(d) },
			{ isStatic: y } = g,
			x = zM(d),
			m = o(d, y);
		if (!y && typeof window < "u") {
			sN();
			const p = oN(g);
			(h = p.MeasureLayout),
				(x.visualElement = nN(e, m, g, i, p.ProjectionNode, s));
		}
		return w.jsxs(pu.Provider, {
			value: x,
			children: [
				h && x.visualElement
					? w.jsx(h, { visualElement: x.visualElement, ...g })
					: null,
				QM(e, d, tN(m, x.visualElement, f), m, y, t, s),
			],
		});
	}
	a.displayName = "motion.".concat(
		typeof e == "string"
			? e
			: "create(".concat(
					(c = (u = e.displayName) != null ? u : e.name) != null
						? c
						: "",
					")"
			  )
	);
	const l = b.forwardRef(a);
	return (l[eN] = e), l;
}
function iN({ layoutId: e }) {
	const t = b.useContext(ih).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function sN(e, t) {
	b.useContext(f1).strict;
}
function oN(e) {
	const t = h1(),
		{ drag: n, layout: r } = t;
	if (!n && !r) return {};
	const i = { ...n, ...r };
	return {
		MeasureLayout:
			(n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
				? i.MeasureLayout
				: void 0,
		ProjectionNode: i.ProjectionNode,
	};
}
function aN(e, t) {
	if (typeof Proxy > "u") return cc;
	const n = new Map(),
		r = (s, o) => cc(s, o, e, t),
		i = (s, o) => r(s, o);
	return new Proxy(i, {
		get: (s, o) =>
			o === "create"
				? r
				: (n.has(o) || n.set(o, cc(o, void 0, e, t)), n.get(o)),
	});
}
const lN = (e, t) => {
	var r;
	return ((r = t.isSVG) != null ? r : Nh(e))
		? new VR(t)
		: new jR(t, { allowProjection: e !== b.Fragment });
};
class uN extends jr {
	constructor(t) {
		super(t), t.animationState || (t.animationState = zR(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		fu(t) && (this.unmountControls = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {
		var t;
		this.node.animationState.reset(),
			(t = this.unmountControls) == null || t.call(this);
	}
}
let cN = 0;
class dN extends jr {
	constructor() {
		super(...arguments), (this.id = cN++), (this.isExitComplete = !1);
	}
	update() {
		var s;
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
			{ isPresent: r } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		if (t && r === !1) {
			if (this.isExitComplete) {
				const { initial: o, custom: a } = this.node.getProps();
				if (typeof o == "string") {
					const l = ii(this.node, o, a);
					if (l) {
						const { transition: u, transitionEnd: c, ...d } = l;
						for (const f in d)
							(s = this.node.getValue(f)) == null || s.jump(d[f]);
					}
				}
				this.node.animationState.reset(),
					this.node.animationState.animateChanges();
			} else this.node.animationState.setActive("exit", !1);
			this.isExitComplete = !1;
			return;
		}
		const i = this.node.animationState.setActive("exit", !t);
		n &&
			!t &&
			i.then(() => {
				(this.isExitComplete = !0), n(this.id);
			});
	}
	mount() {
		const { register: t, onExitComplete: n } =
			this.node.presenceContext || {};
		n && n(this.id), t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const fN = { animation: { Feature: uN }, exit: { Feature: dN } };
function Ko(e) {
	return { point: { x: e.pageX, y: e.pageY } };
}
const hN = (e) => (t) => Th(t) && e(t, Ko(t));
function so(e, t, n, r) {
	return Lo(e, t, hN(n), r);
}
const w1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	Mg = (e, t) => Math.abs(e - t);
function pN(e, t) {
	const n = Mg(e.x, t.x),
		r = Mg(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
const Ng = new Set(["auto", "scroll"]);
class b1 {
	constructor(
		t,
		n,
		{
			transformPagePoint: r,
			contextWindow: i = window,
			dragSnapToOrigin: s = !1,
			distanceThreshold: o = 3,
			element: a,
		} = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.lastRawMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.scrollPositions = new Map()),
			(this.removeScrollListeners = null),
			(this.onElementScroll = (h) => {
				this.handleScroll(h.target);
			}),
			(this.onWindowScroll = () => {
				this.handleScroll(window);
			}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				this.lastRawMoveEventInfo &&
					(this.lastMoveEventInfo = ba(
						this.lastRawMoveEventInfo,
						this.transformPagePoint
					));
				const h = dc(this.lastMoveEventInfo, this.history),
					g = this.startEvent !== null,
					y = pN(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
				if (!g && !y) return;
				const { point: x } = h,
					{ timestamp: m } = Fe;
				this.history.push({ ...x, timestamp: m });
				const { onStart: p, onMove: v } = this.handlers;
				g ||
					(p && p(this.lastMoveEvent, h),
					(this.startEvent = this.lastMoveEvent)),
					v && v(this.lastMoveEvent, h);
			}),
			(this.handlePointerMove = (h, g) => {
				(this.lastMoveEvent = h),
					(this.lastRawMoveEventInfo = g),
					(this.lastMoveEventInfo = ba(g, this.transformPagePoint)),
					oe.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (h, g) => {
				this.end();
				const {
					onEnd: y,
					onSessionEnd: x,
					resumeAnimation: m,
				} = this.handlers;
				if (
					((this.dragSnapToOrigin || !this.startEvent) && m && m(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return;
				const p = dc(
					h.type === "pointercancel"
						? this.lastMoveEventInfo
						: ba(g, this.transformPagePoint),
					this.history
				);
				this.startEvent && y && y(h, p), x && x(h, p);
			}),
			!Th(t))
		)
			return;
		(this.dragSnapToOrigin = s),
			(this.handlers = n),
			(this.transformPagePoint = r),
			(this.distanceThreshold = o),
			(this.contextWindow = i || window);
		const l = Ko(t),
			u = ba(l, this.transformPagePoint),
			{ point: c } = u,
			{ timestamp: d } = Fe;
		this.history = [{ ...c, timestamp: d }];
		const { onSessionStart: f } = n;
		f && f(t, dc(u, this.history)),
			(this.removeListeners = Ho(
				so(this.contextWindow, "pointermove", this.handlePointerMove),
				so(this.contextWindow, "pointerup", this.handlePointerUp),
				so(this.contextWindow, "pointercancel", this.handlePointerUp)
			)),
			a && this.startScrollTracking(a);
	}
	startScrollTracking(t) {
		let n = t.parentElement;
		for (; n; ) {
			const r = getComputedStyle(n);
			(Ng.has(r.overflowX) || Ng.has(r.overflowY)) &&
				this.scrollPositions.set(n, {
					x: n.scrollLeft,
					y: n.scrollTop,
				}),
				(n = n.parentElement);
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY,
		}),
			window.addEventListener("scroll", this.onElementScroll, {
				capture: !0,
			}),
			window.addEventListener("scroll", this.onWindowScroll),
			(this.removeScrollListeners = () => {
				window.removeEventListener("scroll", this.onElementScroll, {
					capture: !0,
				}),
					window.removeEventListener("scroll", this.onWindowScroll);
			});
	}
	handleScroll(t) {
		const n = this.scrollPositions.get(t);
		if (!n) return;
		const r = t === window,
			i = r
				? { x: window.scrollX, y: window.scrollY }
				: { x: t.scrollLeft, y: t.scrollTop },
			s = { x: i.x - n.x, y: i.y - n.y };
		(s.x === 0 && s.y === 0) ||
			(r
				? this.lastMoveEventInfo &&
				  ((this.lastMoveEventInfo.point.x += s.x),
				  (this.lastMoveEventInfo.point.y += s.y))
				: this.history.length > 0 &&
				  ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
			this.scrollPositions.set(t, i),
			oe.update(this.updatePoint, !0));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(),
			this.removeScrollListeners && this.removeScrollListeners(),
			this.scrollPositions.clear(),
			kr(this.updatePoint);
	}
}
function ba(e, t) {
	return t ? { point: t(e.point) } : e;
}
function jg(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function dc({ point: e }, t) {
	return {
		point: e,
		delta: jg(e, S1(t)),
		offset: jg(e, mN(t)),
		velocity: gN(t, 0.1),
	};
}
function mN(e) {
	return e[0];
}
function S1(e) {
	return e[e.length - 1];
}
function gN(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const i = S1(e);
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ht(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	r === e[0] &&
		e.length > 2 &&
		i.timestamp - r.timestamp > ht(t) * 2 &&
		(r = e[1]);
	const s = Rt(i.timestamp - r.timestamp);
	if (s === 0) return { x: 0, y: 0 };
	const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
	return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function yN(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? ce(t, e, r.min) : Math.max(e, t))
			: n !== void 0 &&
			  e > n &&
			  (e = r ? ce(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function Lg(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function vN(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: Lg(e.x, n, i), y: Lg(e.y, t, r) };
}
function Dg(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return (
		t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
	);
}
function xN(e, t) {
	return { x: Dg(e.x, t.x), y: Dg(e.y, t.y) };
}
function wN(e, t) {
	let n = 0.5;
	const r = Ze(e),
		i = Ze(t);
	return (
		i > r
			? (n = Mo(t.min, t.max - r, e.min))
			: r > i && (n = Mo(e.min, e.max - i, t.min)),
		bn(0, 1, n)
	);
}
function bN(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min),
		t.max !== void 0 && (n.max = t.max - e.min),
		n
	);
}
const $d = 0.35;
function SN(e = $d) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = $d),
		{ x: Ig(e, "left", "right"), y: Ig(e, "top", "bottom") }
	);
}
function Ig(e, t, n) {
	return { min: Og(e, t), max: Og(e, n) };
}
function Og(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
const TN = new WeakMap();
class EN {
	constructor(t) {
		(this.openDragLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = ke()),
			(this.latestPointerEvent = null),
			(this.latestPanInfo = null),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
		const { presenceContext: i } = this.visualElement;
		if (i && i.isPresent === !1) return;
		const s = (d) => {
				n && this.snapToCursor(Ko(d).point), this.stopAnimation();
			},
			o = (d, f) => {
				const {
					drag: h,
					dragPropagation: g,
					onDragStart: y,
				} = this.getProps();
				if (
					h &&
					!g &&
					(this.openDragLock && this.openDragLock(),
					(this.openDragLock = qk(h)),
					!this.openDragLock)
				)
					return;
				(this.latestPointerEvent = d),
					(this.latestPanInfo = f),
					(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked =
							!0),
						(this.visualElement.projection.target = void 0)),
					un((m) => {
						let p = this.getAxisMotionValue(m).get() || 0;
						if (xn.test(p)) {
							const { projection: v } = this.visualElement;
							if (v && v.layout) {
								const S = v.layout.layoutBox[m];
								S && (p = Ze(S) * (parseFloat(p) / 100));
							}
						}
						this.originPoint[m] = p;
					}),
					y && oe.update(() => y(d, f), !1, !0),
					Ld(this.visualElement, "transform");
				const { animationState: x } = this.visualElement;
				x && x.setActive("whileDrag", !0);
			},
			a = (d, f) => {
				(this.latestPointerEvent = d), (this.latestPanInfo = f);
				const {
					dragPropagation: h,
					dragDirectionLock: g,
					onDirectionLock: y,
					onDrag: x,
				} = this.getProps();
				if (!h && !this.openDragLock) return;
				const { offset: m } = f;
				if (g && this.currentDirection === null) {
					(this.currentDirection = AN(m)),
						this.currentDirection !== null &&
							y &&
							y(this.currentDirection);
					return;
				}
				this.updateAxis("x", f.point, m),
					this.updateAxis("y", f.point, m),
					this.visualElement.render(),
					x && oe.update(() => x(d, f), !1, !0);
			},
			l = (d, f) => {
				(this.latestPointerEvent = d),
					(this.latestPanInfo = f),
					this.stop(d, f),
					(this.latestPointerEvent = null),
					(this.latestPanInfo = null);
			},
			u = () => {
				const { dragSnapToOrigin: d } = this.getProps();
				(d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
			},
			{ dragSnapToOrigin: c } = this.getProps();
		this.panSession = new b1(
			t,
			{
				onSessionStart: s,
				onStart: o,
				onMove: a,
				onSessionEnd: l,
				resumeAnimation: u,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: c,
				distanceThreshold: r,
				contextWindow: w1(this.visualElement),
				element: this.visualElement.current,
			}
		);
	}
	stop(t, n) {
		const r = t || this.latestPointerEvent,
			i = n || this.latestPanInfo,
			s = this.isDragging;
		if ((this.cancel(), !s || !i || !r)) return;
		const { velocity: o } = i;
		this.startAnimation(o);
		const { onDragEnd: a } = this.getProps();
		a && oe.postRender(() => a(r, i));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1), this.endPanSession();
		const { dragPropagation: r } = this.getProps();
		!r &&
			this.openDragLock &&
			(this.openDragLock(), (this.openDragLock = null)),
			n && n.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), (this.panSession = void 0);
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps();
		if (!r || !Sa(t, i, this.currentDirection)) return;
		const s = this.getAxisMotionValue(t);
		let o = this.originPoint[t] + r[t];
		this.constraints &&
			this.constraints[t] &&
			(o = yN(o, this.constraints[t], this.elastic[t])),
			s.set(o);
	}
	resolveConstraints() {
		var s;
		const { dragConstraints: t, dragElastic: n } = this.getProps(),
			r =
				this.visualElement.projection &&
				!this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (s = this.visualElement.projection) == null
					? void 0
					: s.layout,
			i = this.constraints;
		t && Ci(t)
			? this.constraints ||
			  (this.constraints = this.resolveRefConstraints())
			: t && r
			? (this.constraints = vN(r.layoutBox, t))
			: (this.constraints = !1),
			(this.elastic = SN(n)),
			i !== this.constraints &&
				!Ci(t) &&
				r &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				un((o) => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(o) &&
						(this.constraints[o] = bN(
							r.layoutBox[o],
							this.constraints[o]
						));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } =
			this.getProps();
		if (!t || !Ci(t)) return !1;
		const r = t.current;
		fs(
			r !== null,
			"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
			"drag-constraints-ref"
		);
		const { projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const s = AR(r, i.root, this.visualElement.getTransformPagePoint());
		let o = xN(i.layout.layoutBox, s);
		if (n) {
			const a = n(TR(o));
			(this.hasMutatedConstraints = !!a), a && (o = zw(a));
		}
		return o;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: s,
				dragSnapToOrigin: o,
				onDragTransitionEnd: a,
			} = this.getProps(),
			l = this.constraints || {},
			u = un((c) => {
				if (!Sa(c, n, this.currentDirection)) return;
				let d = (l && l[c]) || {};
				(o === !0 || o === c) && (d = { min: 0, max: 0 });
				const f = i ? 200 : 1e6,
					h = i ? 40 : 1e7,
					g = {
						type: "inertia",
						velocity: r ? t[c] : 0,
						bounceStiffness: f,
						bounceDamping: h,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...s,
						...d,
					};
				return this.startAxisValueAnimation(c, g);
			});
		return Promise.all(u).then(a);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return (
			Ld(this.visualElement, t),
			r.start(vh(t, r, 0, n, this.visualElement, !1))
		);
	}
	stopAnimation() {
		un((t) => this.getAxisMotionValue(t).stop());
	}
	getAxisMotionValue(t) {
		const n = "_drag".concat(t.toUpperCase()),
			r = this.visualElement.getProps(),
			i = r[n];
		return (
			i ||
			this.visualElement.getValue(
				t,
				(r.initial ? r.initial[t] : void 0) || 0
			)
		);
	}
	snapToCursor(t) {
		un((n) => {
			const { drag: r } = this.getProps();
			if (!Sa(n, r, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				s = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: o, max: a } = i.layout.layoutBox[n],
					l = s.get() || 0;
				s.set(t[n] - ce(o, a, 0.5) + l);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!Ci(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		un((o) => {
			const a = this.getAxisMotionValue(o);
			if (a && this.constraints !== !1) {
				const l = a.get();
				i[o] = wN({ min: l, max: l }, this.constraints[o]);
			}
		});
		const { transformTemplate: s } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = s ? s({}, "") : "none"),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			(this.constraints = !1),
			this.resolveConstraints(),
			un((o) => {
				if (!Sa(o, t, null)) return;
				const a = this.getAxisMotionValue(o),
					{ min: l, max: u } = this.constraints[o];
				a.set(ce(l, u, i[o]));
			}),
			this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		TN.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = so(t, "pointerdown", (u) => {
				const { drag: c, dragListener: d = !0 } = this.getProps(),
					f = u.target,
					h = f !== t && rR(f);
				c && d && !h && this.start(u);
			});
		let r;
		const i = () => {
				const { dragConstraints: u } = this.getProps();
				Ci(u) &&
					u.current &&
					((this.constraints = this.resolveRefConstraints()),
					r ||
						(r = CN(t, u.current, () =>
							this.scalePositionWithinConstraints()
						)));
			},
			{ projection: s } = this.visualElement,
			o = s.addEventListener("measure", i);
		s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
			oe.read(i);
		const a = Lo(window, "resize", () =>
				this.scalePositionWithinConstraints()
			),
			l = s.addEventListener(
				"didUpdate",
				({ delta: u, hasLayoutChanged: c }) => {
					this.isDragging &&
						c &&
						(un((d) => {
							const f = this.getAxisMotionValue(d);
							f &&
								((this.originPoint[d] += u[d].translate),
								f.set(f.get() + u[d].translate));
						}),
						this.visualElement.render());
				}
			);
		return () => {
			a(), n(), o(), l && l(), r && r();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: s = !1,
				dragElastic: o = $d,
				dragMomentum: a = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: s,
			dragElastic: o,
			dragMomentum: a,
		};
	}
}
function Fg(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function CN(e, t, n) {
	const r = Hm(e, Fg(n)),
		i = Hm(t, Fg(n));
	return () => {
		r(), i();
	};
}
function Sa(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function AN(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class PN extends jr {
	constructor(t) {
		super(t),
			(this.removeGroupControls = Nt),
			(this.removeListeners = Nt),
			(this.controls = new EN(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || Nt);
	}
	update() {
		const { dragControls: t } = this.node.getProps(),
			{ dragControls: n } = this.node.prevProps || {};
		t !== n &&
			(this.removeGroupControls(),
			t && (this.removeGroupControls = t.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(),
			this.removeListeners(),
			this.controls.isDragging || this.controls.endPanSession();
	}
}
const fc = (e) => (t, n) => {
	e && oe.update(() => e(t, n), !1, !0);
};
class kN extends jr {
	constructor() {
		super(...arguments), (this.removePointerDownListener = Nt);
	}
	onPointerDown(t) {
		this.session = new b1(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: w1(this.node),
		});
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i,
		} = this.node.getProps();
		return {
			onSessionStart: fc(t),
			onStart: fc(n),
			onMove: fc(r),
			onEnd: (s, o) => {
				delete this.session, i && oe.postRender(() => i(s, o));
			},
		};
	}
	mount() {
		this.removePointerDownListener = so(
			this.node.current,
			"pointerdown",
			(t) => this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
let hc = !1;
class RN extends b.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i,
			} = this.props,
			{ projection: s } = t;
		s &&
			(n.group && n.group.add(s),
			r && r.register && i && r.register(s),
			hc && s.root.didUpdate(),
			s.addEventListener("animationComplete", () => {
				this.safeToRemove();
			}),
			s.setOptions({
				...s.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove(),
			})),
			(Ya.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: s,
			} = this.props,
			{ projection: o } = r;
		return (
			o &&
				((o.isPresent = s),
				t.layoutDependency !== n &&
					o.setOptions({ ...o.options, layoutDependency: n }),
				(hc = !0),
				i ||
				t.layoutDependency !== n ||
				n === void 0 ||
				t.isPresent !== s
					? o.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== s &&
					(s
						? o.promote()
						: o.relegate() ||
						  oe.postRender(() => {
								const a = o.getStack();
								(!a || !a.members.length) &&
									this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { visualElement: t, layoutAnchor: n } = this.props,
			{ projection: r } = t;
		r &&
			((r.options.layoutAnchor = n),
			r.root.didUpdate(),
			Sh.postRender(() => {
				!r.currentAnimation && r.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
			} = this.props,
			{ projection: i } = t;
		(hc = !0),
			i &&
				(i.scheduleCheckAfterUnmount(),
				n && n.group && n.group.remove(i),
				r && r.deregister && r.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function T1(e) {
	const [t, n] = d1(),
		r = b.useContext(ih);
	return w.jsx(RN, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: b.useContext(v1),
		isPresent: t,
		safeToRemove: n,
	});
}
const MN = {
	pan: { Feature: kN },
	drag: { Feature: PN, ProjectionNode: c1, MeasureLayout: T1 },
};
function Vg(e, t, n) {
	const { props: r } = e;
	e.animationState &&
		r.whileHover &&
		e.animationState.setActive("whileHover", n === "Start");
	const i = "onHover" + n,
		s = r[i];
	s && oe.postRender(() => s(t, Ko(t)));
}
class NN extends jr {
	mount() {
		const { current: t } = this.node;
		t &&
			(this.unmount = Jk(
				t,
				(n, r) => (
					Vg(this.node, r, "Start"), (i) => Vg(this.node, i, "End")
				)
			));
	}
	unmount() {}
}
class jN extends jr {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible");
		} catch (n) {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0),
			(this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1),
			(this.isActive = !1));
	}
	mount() {
		this.unmount = Ho(
			Lo(this.node.current, "focus", () => this.onFocus()),
			Lo(this.node.current, "blur", () => this.onBlur())
		);
	}
	unmount() {}
}
function _g(e, t, n) {
	const { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState &&
		r.whileTap &&
		e.animationState.setActive("whileTap", n === "Start");
	const i = "onTap" + (n === "End" ? "" : n),
		s = r[i];
	s && oe.postRender(() => s(t, Ko(t)));
}
class LN extends jr {
	mount() {
		const { current: t } = this.node;
		if (!t) return;
		const { globalTapTarget: n, propagate: r } = this.node.props;
		this.unmount = sR(
			t,
			(i, s) => (
				_g(this.node, s, "Start"),
				(o, { success: a }) => _g(this.node, o, a ? "End" : "Cancel")
			),
			{
				useGlobalTarget: n,
				stopPropagation: (r == null ? void 0 : r.tap) === !1,
			}
		);
	}
	unmount() {}
}
const zd = new WeakMap(),
	pc = new WeakMap(),
	DN = (e) => {
		const t = zd.get(e.target);
		t && t(e);
	},
	IN = (e) => {
		e.forEach(DN);
	};
function ON({ root: e, ...t }) {
	const n = e || document;
	pc.has(n) || pc.set(n, {});
	const r = pc.get(n),
		i = JSON.stringify(t);
	return (
		r[i] || (r[i] = new IntersectionObserver(IN, { root: e, ...t })), r[i]
	);
}
function FN(e, t, n) {
	const r = ON(t);
	return (
		zd.set(e, n),
		r.observe(e),
		() => {
			zd.delete(e), r.unobserve(e);
		}
	);
}
const VN = { some: 0, all: 1 };
class _N extends jr {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		var l;
		(l = this.stopObserver) == null || l.call(this);
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = "some", once: s } = t,
			o = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == "number" ? i : VN[i],
			},
			a = (u) => {
				const { isIntersecting: c } = u;
				if (
					this.isInView === c ||
					((this.isInView = c), s && !c && this.hasEnteredView)
				)
					return;
				c && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", c);
				const { onViewportEnter: d, onViewportLeave: f } =
						this.node.getProps(),
					h = c ? d : f;
				h && h(u);
			};
		this.stopObserver = FN(this.node.current, o, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const { props: t, prevProps: n } = this.node;
		["amount", "margin", "root"].some(BN(t, n)) && this.startObserver();
	}
	unmount() {
		var t;
		(t = this.stopObserver) == null || t.call(this),
			(this.hasEnteredView = !1),
			(this.isInView = !1);
	}
}
function BN({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
const UN = {
		inView: { Feature: _N },
		tap: { Feature: LN },
		focus: { Feature: jN },
		hover: { Feature: NN },
	},
	$N = { layout: { ProjectionNode: c1, MeasureLayout: T1 } },
	zN = { ...fN, ...UN, ...MN, ...$N },
	Ce = aN(zN, lN),
	qt = (e, t) => {
		t === void 0 && (t = 0);
		let n = !1,
			r = e;
		r < 0 && ((n = !0), (r = r * -1));
		const i = Math.pow(10, t);
		(r = parseFloat((r * i).toFixed(11))), (r = Math.round(r) / i);
		let s = parseFloat(r.toFixed(t));
		return n && (s = parseFloat((s * -1).toFixed(t))), s;
	},
	jh = () => new Date().getFullYear(),
	HN = (e, t) => qt(0.52 * ((810004 * e - 10004746) / 1e5 + t), 2),
	GN = (e, t) => qt(0.52 * ((810004 * e - 10004746) / 1e5 + t), 2),
	WN = (e, t) =>
		e * 0.300037023286799 + t * 0.405979413383785 + 434.194011398824,
	KN = (e) =>
		e <= 94.22
			? (1185 / 962) * e - 9429 / 962
			: (880 / 481) * e - 31805 / 481,
	Bg = (e, t) => {
		const r = 3.963 * (e / 10) - 20.0621,
			i = 0.032073 * t + 0.3672,
			s = 0.3 * r + 0.7 * i;
		return Math.floor((1.2235 * s - 4.4598 + 5e-4) * 1e3) / 1e3;
	},
	Ug = (e, t) => {
		const r = 3.9261 * (e / 10) - 15.9285,
			i = 0.032073 * t + 0.3672,
			s = 0.5 * r + 0.5 * i;
		return Math.floor((1.2422 * s - 4.7609 + 5e-4) * 1e3) / 1e3;
	},
	YN = (e, t) => {
		const r = 3.6201 * (e / 10) - 12.1296,
			i = 0.032073 * t + 0.3672,
			s = 0.5 * r + 0.5 * i;
		return Math.floor((1.2422 * s - 4.7609 + 5e-4) * 1e3) / 1e3;
	},
	QN = (e, t) =>
		Math.floor((0.01992054 * t + 0.338350436 * e - 20.390012) * 1e3) / 1e3,
	XN = (e, t) =>
		Math.floor((0.01992054 * t + 0.338350436 * e - 20.390012) * 1e3) / 1e3,
	qN = (e, t) =>
		Math.floor((0.01992054 * t + 0.241061332 * e - 13.36083693) * 1e3) /
		1e3,
	ZN = (e) => Math.floor((0.0392413155 * e - 4.0105308) * 1e3) / 1e3,
	JN = (e, t) =>
		Math.floor((0.027468921 * t + 0.81822786 * e - 7.920677745) * 1e3) /
		1e3,
	$g = (e, t) => {
		const n = 0.0286 * t + 20.1149;
		return Math.floor((0.6 * n + 0.4 * e + 5e-4) * 1e3) / 1e3;
	},
	ej = (e, t) => 0.5 * e + 0.075 * t - 19,
	tj = (e, t, n) => 0.5 * qt((n + e) / 2, 2) + 0.075 * t - 19,
	E1 = (e, t) => Math.floor(e * 0.33 + t * 0.67),
	zg = {
		11: { math: null, english: 305 },
		12: { math: 255, english: 325 },
		13: { math: 285, english: 350 },
		14: { math: 325, english: 375 },
		15: { math: 360, english: 395 },
		16: { math: 385, english: 415 },
		17: { math: 410, english: 435 },
		18: { math: 440, english: 450 },
		19: { math: 465, english: 465 },
		20: { math: 485, english: 485 },
		21: { math: 505, english: 505 },
		22: { math: 525, english: 520 },
		23: { math: 545, english: 535 },
		24: { math: 560, english: 555 },
		25: { math: 575, english: 575 },
		26: { math: 595, english: 595 },
		27: { math: 615, english: 615 },
		28: { math: 635, english: 635 },
		29: { math: 655, english: 660 },
		30: { math: 675, english: 685 },
		31: { math: 700, english: 705 },
		32: { math: 725, english: 725 },
		33: { math: 750, english: 745 },
		34: { math: 775, english: 770 },
		35: { math: 790, english: 790 },
		36: { math: 800, english: 800 },
	},
	nj = (e, t) => {
		var n, r, i, s;
		return E1(
			(r = (n = zg[e]) == null ? void 0 : n.english) != null ? r : 0,
			(s = (i = zg[t]) == null ? void 0 : i.math) != null ? s : 0
		);
	},
	rj = (e, t, n) => {
		const r = jh();
		return n <= r && n >= r - 6
			? ((e * 10 - 330) * 3 + t * 7) / 10
			: n <= r - 7 && n >= r - 10
			? ((e * 10 - 330) * 3 + t * 17) / 20
			: (n < r - 10, t);
	},
	ij = (e, t) => ((e * 1.1 * 10 - 330) * 1 + t * 1) / 2,
	sj = (e, t) => qt((e + t) / 2, 0),
	oj = (e, t) => Math.floor(((6.666 * e + t) / 2) * 10) / 10,
	aj = (e, t, n) => {
		const r = qt(0.3 * e + 0.55 * t + 0.15 * n, 2);
		if (r >= 150 && r < 177) return qt(r * 0.68 + 48, 0);
		if (r >= 177 && r < 224) return qt(r * 1.34 - 68.2, 0);
		if (r >= 224 && r <= 250) return qt(r * 0.72 + 70, 0);
	},
	lj = (e) => e * 1.3,
	oo = {
		TAU: {
			eng: { min: 120 },
			heb: { min: 105 },
			math: { min: '4 יח"ל ציון עובר+' },
			BAGRUT: {
				avg: { min: 55, max: 117, round: 2 },
				psycho: { min: 700 },
			},
			PREP: { avg: { min: 90, max: 100 }, psycho: { min: 700 } },
			PD: { avg: { min: 80 }, psycho: { min: 700 } },
			FD: { avg: { min: 80 }, psycho: { min: 700 } },
			FINAL: {
				cognitive: { min: 200, max: 800 },
				ishiuti: { min: 150, max: 250, threshold: 150 },
			},
		},
		HUJI: {
			eng: { min: 120 },
			heb: { min: 105 },
			math: { min: '4 יח"ל ציון 80+ או 5 יח"ל ציון 70+ או קורס בשנה א' },
			BAGRUT: {
				avg: { min: 60, max: 127, round: 1 },
				psycho: { min: 700 },
			},
			PREP: { avg: { min: 60, max: 113 }, psycho: { min: 700 } },
			PD: { avg: { min: 60 }, psycho: { min: 700 } },
			FD: { avg: { min: 60 }, psycho: { min: 700 } },
			HUL: {
				prep: { min: 65, max: 107 },
				psycho: { min: 700 },
				french: { min: 7, max: 20 },
			},
			FINAL: {
				cognitive: { min: 16, max: 30 },
				ishiuti: { min: 150, max: 250, threshold: 175 },
			},
		},
		TECH: {
			eng: { min: 120 },
			heb: { min: 121 },
			math: { min: '5 יח"ל ציון 70+ או 4+ יח"ל ובחינת סיווג ציון 70+' },
			BAGRUT: {
				avg: { min: 0, max: 119, round: 2 },
				psycho: { min: 200 },
			},
			PREP: { avg: { min: 0, max: 119 }, psycho: { min: 200 } },
			PD: {
				avg: { min: 80 },
				psycho: { min: 700 },
				cognitive: { min: 90, max: 100 },
			},
			FD: { avg: { min: 80 }, psycho: { min: 700 } },
			SAT: { eng: { min: 600 } },
			ACT: { math: { min: 12 }, eng: { min: 11 } },
			FINAL: {
				cognitive: { min: 0, max: 100.5 },
				ishiuti: { min: 150, max: 250, threshold: 190 },
			},
		},
		BGU: {
			eng: { min: 120 },
			heb: { min: 116 },
			math: { min: "כל ציון" },
			BAGRUT: {
				avg: { min: 0, max: 120, round: 2 },
				psycho: { min: 680 },
			},
			PREP: { avg: { min: 0, max: 100 }, psycho: { min: 680 } },
			PD: { avg: { min: 95 }, psycho: { min: 660 } },
			FD: { avg: { min: 90 }, psycho: { min: 660 } },
		},
		BIU: {
			eng: { min: 120 },
			heb: { min: 120 },
			math: { min: '4 יח"ל ציון 85+ או 5 יח"ל ציון 80+' },
			BAGRUT: {
				avg: { min: 101, max: 126, round: 2 },
				psycho: { min: 680 },
			},
			PREP: { avg: { min: 101, max: 114 }, psycho: { min: 680 } },
			FINAL: { ishiuti: { min: 200, max: 800, threshold: 200 } },
		},
		HAIFA: {
			eng: { min: 120 },
			heb: { min: 120 },
			math: { min: '4 יח"ל ציון 80+ או 5 יח"ל ציון 70+' },
			BAGRUT: {
				avg: { min: 101, max: 125, round: 2 },
				psycho: { min: 680 },
			},
			PREP: { avg: { min: 90, max: 100 }, psycho: { min: 680 } },
			FD: { avg: { min: 85 }, psycho: { min: 680 } },
			SAT: { eng: { min: 600 } },
		},
		ARIEL: {
			eng: { min: 50 },
			heb: { min: 50 },
			math: { min: "?" },
			BAGRUT: {
				avg: { min: 0, max: 126, round: 2 },
				psycho: { min: 200 },
			},
			FINAL: {
				cognitive: { min: 0, max: 1 },
				ishiuti: { min: 150, max: 250, threshold: 150 },
			},
		},
		TZAMERET: {
			eng: { min: 120 },
			heb: { min: 105 },
			math: { min: '4 יח"ל ציון 80+ או 5 יח"ל ציון 70+ או קורס בשנה א' },
			BAGRUT: {
				avg: { min: 60, max: 127, round: 1 },
				psycho: { min: 675 },
			},
			PREP: { avg: { min: 60, max: 113 }, psycho: { min: 675 } },
			FINAL: {
				cognitive: { min: 16, max: 30 },
				ishiuti: { min: 150, max: 250, threshold: 175 },
			},
		},
	},
	uj = ["BAGRUT", "PREP", "PD", "FD", "ALT", "TZAMERET"],
	C1 = {
		BAGRUT: "בגרויות",
		PREP: "מכינה אקדמית",
		PD: "רקע אקדמי חלקי",
		FD: "רקע אקדמי מלא",
		ALT: 'חלופות לציונים מחו"ל',
		TZAMERET: "צמרת",
	},
	cj = ["FINAL", "MORKAM"],
	A1 = { FINAL: "חישוב סכם קבלה", MORKAM: "חישוב ציון אישיותי" },
	dj = { ...C1, ...A1, SAT: "SAT" },
	fj = {
		BAGRUT: ["TAU", "HUJI", "TECH", "BGU", "BIU", "HAIFA", "ARIEL"],
		PREP: ["TAU", "HUJI", "TECH", "BGU", "BIU", "HAIFA"],
		PD: ["TAU", "HUJI", "TECH", "BGU"],
		FD: ["TAU", "HUJI", "TECH", "BGU", "HAIFA"],
		ALT: ["HUJI", "TECH", "HAIFA"],
		TZAMERET: ["TZAMERET"],
	},
	hj = {
		HUJI: [
			{ id: "HUJI-HUL-PREP", label: "מכינת רוטברג" },
			{ id: "HUJI-HUL-PSYCHO", label: "פסיכומטרי בלבד" },
			{ id: "HUJI-HUL-FRENCH", label: "Baccalauréat Général" },
		],
		TECH: [
			{ id: "TECH-SAT", label: "SAT" },
			{ id: "TECH-ACT", label: "ACT" },
		],
		HAIFA: [{ id: "HAIFA-SAT", label: "SAT" }],
	},
	pj = { FINAL: ["TAU", "HUJI", "TECH", "ARIEL", "TZAMERET"] },
	mj = [
		{ id: "TECH-BP-FINAL", label: "בגרויות/מכינה" },
		{ id: "TECH-DEG-FINAL", label: "רקע אקדמי חלקי/מלא" },
	],
	gj = [
		{ id: "HUJI-PREP-NEW", label: 'העברית תשפ"א ואילך' },
		{ id: "HUJI-PREP-OLD", label: 'העברית עד תש"ף ואחרות' },
	],
	yj = [
		{ id: "BGU-PREP-ONLY", label: "מכינה בלבד" },
		{ id: "BGU-PREP-BAGRUT", label: "מכינה + בגרות" },
	],
	vj = [
		{ id: "BGU-PD-3", label: "בדיוק 3 סמסטרים" },
		{ id: "BGU-PD-4+", label: "4+ סמסטרים" },
	],
	Ta = {
		TAU: "תל אביב",
		HUJI: "העברית",
		TECH: "טכניון",
		BGU: "בן גוריון",
		BIU: "בר אילן",
		HAIFA: "חיפה",
		ARIEL: "אריאל",
		TZAMERET: "צמרת",
	},
	xj = "אין חישוב סכם למסלול זה – קיימים תנאי סף בלבד";
function Ir(e) {
	return {
		sechem: void 0,
		label: e,
		isValid: !0,
		errors: [],
		details: xj,
		thresholdOnly: !0,
	};
}
const wj = 5e3,
	bj = "HttpTimeoutError",
	Sj = "HttpUnexpectedError";
async function Lh(e, t = {}, n = wj) {
	const r = new AbortController(),
		i = window.setTimeout(() => r.abort(), n);
	try {
		const s = await fetch(e, { ...t, signal: r.signal });
		if (s.status !== 200) throw new Error(Sj);
		return await s.text();
	} catch (s) {
		throw s.name === "AbortError" ? new Error(bj) : s;
	} finally {
		window.clearTimeout(i);
	}
}
async function P1(e, t) {
	var o, a, l;
	const r = await Lh("https://go.tau.ac.il/graphql", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				operationName: "getLastScore",
				variables: {
					scoresData: {
						prog: "calctziun",
						out: "json",
						reali10: 1,
						psicho: t,
						bagrut: e,
					},
				},
				query: "query getLastScore($scoresData: JSON!) {\n  getLastScore(scoresData: $scoresData) {\n    body\n    __typename\n  }\n}\n",
			}),
		}),
		i = JSON.parse(r),
		s =
			(l =
				(a =
					(o = i == null ? void 0 : i.data) == null
						? void 0
						: o.getLastScore) == null
					? void 0
					: a.body) == null
				? void 0
				: l.hatama_refua;
	return Number.parseFloat(String(s));
}
async function Tj(e, t) {
	try {
		const n = await P1(e, t);
		return Number.isFinite(n) ? n : null;
	} catch (n) {
		return null;
	}
}
async function Ej(e, t) {
	try {
		const n = KN(e),
			r = await P1(n, t);
		return Number.isFinite(r) ? r : null;
	} catch (n) {
		return null;
	}
}
async function k1(e, t) {
	var n;
	try {
		const r =
				"https://bgucr4u.bgu.ac.il/ords/sc/calculators/GetSekem?p_bagrut_average="
					.concat(qt(e, 2), "&p_psychometry=")
					.concat(t, "&"),
			i = await Lh(r, {
				method: "GET",
				headers: {
					"Content-type": "application/x-www-form-urlencoded",
				},
			}),
			s = (n = JSON.parse(i)) == null ? void 0 : n.p_final_sekem,
			o = Number.parseFloat(String(s));
		return Number.isFinite(o) ? o : null;
	} catch (r) {
		return null;
	}
}
async function R1(e, t) {
	var n;
	try {
		const r =
				"https://bgucr4u.bgu.ac.il/ords/sc/calculators/GetSekemPrep/?p_prep_average="
					.concat(e, "&p_prep_psychometry=")
					.concat(t, "&"),
			i = await Lh(r, {
				method: "GET",
				headers: {
					"Content-type": "application/x-www-form-urlencoded",
				},
			}),
			s = (n = JSON.parse(i)) == null ? void 0 : n.p_sekem_prep,
			o = Number.parseFloat(String(s));
		return Number.isFinite(o) ? o : null;
	} catch (r) {
		return null;
	}
}
async function Cj(e, t, n) {
	const r = lj(e),
		i = await k1(r, t),
		s = await R1(e, t);
	return i == null || s == null ? null : Math.floor((i + s) / 2);
}
function Pe(e, t, n) {
	if (!e) return "undefined";
	const r = e(...t);
	return n != null ? qt(r, n).toString() : r.toString();
}
async function Aj(e, t, n) {
	var u, c;
	if (t === "MORKAM") {
		const { topValue: d, bottomValue: f, extValue: h } = n,
			g = d,
			y = h != null ? h : 0,
			x = f,
			m = [];
		if (
			((g < 150 || g > 250) &&
				m.push("ציון ביוגרפי חייב להיות בין 150-250"),
			(y < 150 || y > 250) && m.push("ציון תחנות חייב להיות בין 150-250"),
			(x < 150 || x > 250) && m.push("ציון שאו״ל חייב להיות בין 150-250"),
			Number.isInteger(g) || m.push("ציון ביוגרפי חייב להיות מספר שלם"),
			Number.isInteger(y) || m.push("ציון תחנות חייב להיות מספר שלם"),
			Number.isInteger(x) || m.push("ציון שאו״ל חייב להיות מספר שלם"),
			m.length)
		)
			return { sechem: void 0, label: 'מרק"ם', isValid: !1, errors: m };
		const p = aj(g, y, x);
		return {
			sechem: p,
			label: 'ציון מרק"ם',
			isValid: p !== void 0,
			errors: p === void 0 ? ["הציון מחוץ לטווח הנורמליזציה"] : [],
		};
	}
	const r = oo[e];
	if (!r)
		return {
			sechem: void 0,
			label: "",
			isValid: !1,
			errors: ["אוניברסיטה לא נמצאה"],
		};
	const i = [],
		{ topValue: s, bottomValue: o, extValue: a, subChannel: l } = n;
	switch (t) {
		case "BAGRUT": {
			const d = r.BAGRUT;
			if (!d)
				return {
					sechem: void 0,
					label: "סכם ראשוני",
					isValid: !1,
					errors: ["אפיק לא נתמך"],
				};
			d.avg &&
				s < d.avg.min &&
				i.push(
					"ממוצע בגרות נמוך מהמינימום הנדרש (".concat(d.avg.min, ")")
				),
				(u = d.avg) != null &&
					u.max &&
					s > d.avg.max &&
					i.push(
						"ממוצע בגרות גבוה מהמקסימום (".concat(d.avg.max, ")")
					);
			const f = [];
			if (
				(d.psycho &&
					o < d.psycho.min &&
					f.push(
						"ציון פסיכומטרי נמוך מהמינימום הנדרש לקבלה (".concat(
							d.psycho.min,
							")"
						)
					),
				(o < 200 || o > 800) &&
					i.push("ציון פסיכומטרי חייב להיות בין 200-800"),
				Number.isInteger(o) ||
					i.push("ציון פסיכומטרי חייב להיות מספר שלם"),
				i.length)
			)
				return {
					sechem: void 0,
					label: "סכם ראשוני",
					isValid: !1,
					errors: i,
				};
			let h;
			switch (e) {
				case "TAU":
					return (
						(h = await Tj(s, o)),
						h != null
							? {
									sechem: h,
									label: "סכם ראשוני",
									isValid: !0,
									errors: [],
									warnings: f,
									isApiResult: !0,
							  }
							: {
									sechem: void 0,
									label: "סכם ראשוני",
									isValid: !1,
									errors: ["שגיאה בחיבור לשרת תל אביב"],
							  }
					);
				case "HUJI":
					return (
						(h = Pe(Bg, [s, o], 3)),
						{
							sechem: parseFloat(h),
							label: "סכם ראשוני",
							isValid: !0,
							errors: [],
							warnings: f,
						}
					);
				case "TECH":
					return (
						(h = Pe(ej, [s, o], 3)),
						{
							sechem: parseFloat(h),
							label: "סכם ראשוני",
							isValid: !0,
							errors: [],
							warnings: f,
						}
					);
				case "BGU":
					return (
						(h = await k1(s, o)),
						h != null
							? {
									sechem: h,
									label: "סכם ראשוני",
									isValid: !0,
									errors: [],
									warnings: f,
									isApiResult: !0,
							  }
							: {
									sechem: void 0,
									label: "סכם ראשוני",
									isValid: !1,
									errors: ["שגיאה בחיבור לשרת בן גוריון"],
							  }
					);
				case "BIU":
					return Ir("סכם ראשוני");
				case "HAIFA": {
					const g = a != null ? a : jh();
					return g < 1928
						? {
								sechem: void 0,
								label: "סכם ראשוני",
								isValid: !1,
								errors: ["יש להזין שנת זכאות לבגרות תקינה"],
						  }
						: ((h = Pe(rj, [s, o, g], 0)),
						  {
								sechem: parseFloat(h),
								label: "סכם ראשוני",
								isValid: !0,
								errors: [],
								warnings: f,
						  });
				}
				case "ARIEL":
					return (
						(h = Pe(oj, [s, o], 1)),
						{
							sechem: parseFloat(h),
							label: "סכם ראשוני",
							isValid: !0,
							errors: [],
							warnings: f,
						}
					);
				case "TZAMERET":
					return (
						(h = Pe(Bg, [s, o], 3)),
						{
							sechem: parseFloat(h),
							label: "סכם ראשוני",
							isValid: !0,
							errors: [],
							warnings: f,
						}
					);
				default:
					return {
						sechem: void 0,
						label: "סכם ראשוני",
						isValid: !1,
						errors: ["נוסחה לא נמצאה"],
					};
			}
		}
		case "PREP": {
			const d = r.PREP;
			if (!d)
				return {
					sechem: void 0,
					label: "סכם מכינה",
					isValid: !1,
					errors: ["אפיק לא נתמך"],
				};
			if (
				(d.avg &&
					s < d.avg.min &&
					i.push(
						"ממוצע מכינה נמוך מהמינימום (".concat(d.avg.min, ")")
					),
				(c = d.avg) != null &&
					c.max &&
					s > d.avg.max &&
					i.push(
						"ממוצע מכינה גבוה מהמקסימום (".concat(d.avg.max, ")")
					),
				d.psycho && o < d.psycho.min,
				(o < 200 || o > 800) &&
					i.push("ציון פסיכומטרי חייב להיות בין 200-800"),
				Number.isInteger(o) ||
					i.push("ציון פסיכומטרי חייב להיות מספר שלם"),
				i.length)
			)
				return {
					sechem: void 0,
					label: "סכם מכינה",
					isValid: !1,
					errors: i,
				};
			let f;
			switch (e) {
				case "TAU":
					return (
						(f = await Ej(s, o)),
						f != null
							? {
									sechem: f,
									label: "סכם מכינה",
									isValid: !0,
									errors: [],
									isApiResult: !0,
							  }
							: {
									sechem: void 0,
									label: "סכם מכינה",
									isValid: !1,
									errors: ["שגיאה בחיבור לשרת תל אביב"],
							  }
					);
				case "HUJI": {
					const g = (l != null ? l : "new") === "old" ? YN : Ug;
					return (
						(f = Pe(g, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם מכינה",
							isValid: !0,
							errors: [],
						}
					);
				}
				case "TECH": {
					const h = a != null ? a : 0;
					return (
						(f = Pe(tj, [s, o, h], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם מכינה",
							isValid: !0,
							errors: [],
						}
					);
				}
				case "BGU":
					return (
						(l != null ? l : "only") === "bagrut"
							? (f = await Cj(s, o))
							: (f = await R1(s, o)),
						f != null
							? {
									sechem: f,
									label: "סכם מכינה",
									isValid: !0,
									errors: [],
									isApiResult: !0,
							  }
							: {
									sechem: void 0,
									label: "סכם מכינה",
									isValid: !1,
									errors: ["שגיאה בחיבור לשרת בן גוריון"],
							  }
					);
				case "BIU":
					return Ir("סכם מכינה");
				case "HAIFA":
					return Ir("סכם מכינה");
				case "TZAMERET":
					return (
						(f = Pe(Ug, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם מכינה",
							isValid: !0,
							errors: [],
						}
					);
				default:
					return {
						sechem: void 0,
						label: "סכם מכינה",
						isValid: !1,
						errors: ["נוסחה לא נמצאה"],
					};
			}
		}
		case "PD": {
			const d = r.PD;
			if (!d)
				return {
					sechem: void 0,
					label: "סכם תואר חלקי",
					isValid: !1,
					errors: ["אפיק לא נתמך"],
				};
			if (
				(d.avg &&
					s < d.avg.min &&
					i.push(
						"ממוצע אקדמי נמוך מהמינימום (".concat(d.avg.min, ")")
					),
				s > 100 && i.push("ממוצע אקדמי מקסימלי: 100"),
				d.psycho && o < d.psycho.min,
				(o < 200 || o > 800) &&
					i.push("ציון פסיכומטרי חייב להיות בין 200-800"),
				Number.isInteger(o) ||
					i.push("ציון פסיכומטרי חייב להיות מספר שלם"),
				i.length)
			)
				return {
					sechem: void 0,
					label: "סכם תואר חלקי",
					isValid: !1,
					errors: i,
				};
			let f;
			switch (e) {
				case "TAU":
					return (
						(f = Pe(HN, [s, o], 2)),
						{
							sechem: parseFloat(f),
							label: "סכם תואר חלקי",
							isValid: !0,
							errors: [],
						}
					);
				case "HUJI":
					return (
						(f = Pe(QN, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם תואר חלקי",
							isValid: !0,
							errors: [],
						}
					);
				case "BGU":
					return Ir("סכם תואר חלקי");
				default:
					return {
						sechem: void 0,
						label: "סכם תואר חלקי",
						isValid: !1,
						errors: ["נוסחה לא נמצאה"],
					};
			}
		}
		case "FD": {
			const d = r.FD;
			if (!d)
				return {
					sechem: void 0,
					label: "סכם תואר מלא",
					isValid: !1,
					errors: ["אפיק לא נתמך"],
				};
			if (
				(d.avg &&
					s < d.avg.min &&
					i.push(
						"ממוצע אקדמי נמוך מהמינימום (".concat(d.avg.min, ")")
					),
				s > 100 && i.push("ממוצע אקדמי מקסימלי: 100"),
				d.psycho && o < d.psycho.min,
				(o < 200 || o > 800) &&
					i.push("ציון פסיכומטרי חייב להיות בין 200-800"),
				Number.isInteger(o) ||
					i.push("ציון פסיכומטרי חייב להיות מספר שלם"),
				i.length)
			)
				return {
					sechem: void 0,
					label: "סכם תואר מלא",
					isValid: !1,
					errors: i,
				};
			let f;
			switch (e) {
				case "TAU":
					return (
						(f = Pe(GN, [s, o], 2)),
						{
							sechem: parseFloat(f),
							label: "סכם תואר מלא",
							isValid: !0,
							errors: [],
						}
					);
				case "HUJI":
					return (
						(f = Pe(XN, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם תואר מלא",
							isValid: !0,
							errors: [],
						}
					);
				case "HAIFA":
					return (
						(f = Pe(ij, [s, o], 0)),
						{
							sechem: parseFloat(f),
							label: "סכם תואר מלא",
							isValid: !0,
							errors: [],
						}
					);
				case "BGU":
					return Ir("סכם תואר מלא");
				default:
					return {
						sechem: void 0,
						label: "סכם תואר מלא",
						isValid: !1,
						errors: ["נוסחה לא נמצאה"],
					};
			}
		}
		case "FINAL": {
			const d = r.FINAL;
			if (!d)
				return {
					sechem: void 0,
					label: "סכם סופי",
					isValid: !1,
					errors: ["אפיק לא נתמך"],
				};
			if (
				(d.cognitive &&
					(s < d.cognitive.min &&
						i.push(
							"סכם קוגניטיבי נמוך מהמינימום (".concat(
								d.cognitive.min,
								")"
							)
						),
					s > d.cognitive.max &&
						i.push(
							"סכם קוגניטיבי גבוה מהמקסימום (".concat(
								d.cognitive.max,
								")"
							)
						)),
				d.ishiuti &&
					(o < d.ishiuti.min &&
						i.push(
							"ציון אישיותי נמוך מהמינימום (".concat(
								d.ishiuti.min,
								")"
							)
						),
					o > d.ishiuti.max &&
						i.push(
							"ציון אישיותי גבוה מהמקסימום (".concat(
								d.ishiuti.max,
								")"
							)
						),
					Number.isInteger(o) ||
						i.push("ציון אישיותי חייב להיות מספר שלם"),
					d.ishiuti.threshold &&
						o < d.ishiuti.threshold &&
						i.push(
							"ציון אישיותי נמוך מהסף המינימלי (".concat(
								d.ishiuti.threshold,
								")"
							)
						)),
				i.length)
			)
				return {
					sechem: void 0,
					label: "סכם סופי",
					isValid: !1,
					errors: i,
				};
			let f;
			switch (e) {
				case "TAU":
					return (
						(f = Pe(WN, [s, o], 2)),
						{
							sechem: parseFloat(f),
							label: "סכם סופי",
							isValid: !0,
							errors: [],
						}
					);
				case "HUJI":
					return (
						(f = Pe($g, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם סופי",
							isValid: !0,
							errors: [],
						}
					);
				case "TECH":
					return Ir("סכם סופי");
				case "ARIEL":
					return Ir("סכם סופי");
				case "TZAMERET":
					return (
						(f = Pe($g, [s, o], 3)),
						{
							sechem: parseFloat(f),
							label: "סכם סופי",
							isValid: !0,
							errors: [],
						}
					);
				case "BIU":
					return {
						sechem: o,
						label: "סכם סופי",
						isValid: !0,
						errors: [],
					};
				default:
					return {
						sechem: void 0,
						label: "סכם סופי",
						isValid: !1,
						errors: ["נוסחה לא נמצאה"],
					};
			}
		}
		case "ALT": {
			if (l === "HUJI-HUL-PREP") {
				const d = Pe(qN, [s, o], 3);
				return {
					sechem: parseFloat(d),
					label: "סכם קוגניטיבי",
					isValid: !0,
					errors: [],
				};
			}
			if (l === "HUJI-HUL-PSYCHO") {
				const d = Pe(ZN, [o], 3);
				return {
					sechem: parseFloat(d),
					label: "סכם קוגניטיבי",
					isValid: !0,
					errors: [],
				};
			}
			if (l === "HUJI-HUL-FRENCH") {
				const d = Pe(JN, [s, o], 3);
				return {
					sechem: parseFloat(d),
					label: "סכם קוגניטיבי",
					isValid: !0,
					errors: [],
				};
			}
			return {
				sechem: void 0,
				label: "חלופי",
				isValid: !1,
				errors: ["יש לבחור אפיק חלופי"],
			};
		}
		case "SAT": {
			const d = s,
				f = o;
			if (
				((d < 200 || d > 800) &&
					i.push("ציון SAT אנגלית חייב להיות בין 200-800"),
				(f < 200 || f > 800) &&
					i.push("ציון SAT מתמטיקה חייב להיות בין 200-800"),
				i.length)
			)
				return {
					sechem: void 0,
					label: "ציון פסיכומטרי משוקלל",
					isValid: !1,
					errors: i,
				};
			let h;
			if (e === "TECH") h = E1(d, f);
			else if (e === "HAIFA") h = sj(d, f);
			else
				return {
					sechem: void 0,
					label: "ציון פסיכומטרי משוקלל",
					isValid: !1,
					errors: ["אוניברסיטה לא תומכת ב-SAT"],
				};
			return {
				sechem: h,
				label: "ציון פסיכומטרי משוקלל",
				isValid: !0,
				errors: [],
			};
		}
		case "ACT": {
			const d = s,
				f = o;
			return (
				(d < 11 || d > 36) &&
					i.push("ציון ACT אנגלית חייב להיות בין 11-36"),
				(f < 12 || f > 36) &&
					i.push("ציון ACT מתמטיקה חייב להיות בין 12-36"),
				Number.isInteger(d) ||
					i.push("ציון ACT אנגלית חייב להיות מספר שלם"),
				Number.isInteger(f) ||
					i.push("ציון ACT מתמטיקה חייב להיות מספר שלם"),
				i.length
					? {
							sechem: void 0,
							label: "ציון פסיכומטרי משוקלל",
							isValid: !1,
							errors: i,
					  }
					: {
							sechem: nj(d, f),
							label: "ציון פסיכומטרי משוקלל (ACT)",
							isValid: !0,
							errors: [],
					  }
			);
		}
		default:
			return {
				sechem: void 0,
				label: "",
				isValid: !1,
				errors: ["אפיק קבלה לא נתמך"],
			};
	}
}
function Pj(e) {
	var r;
	const t = oo[e];
	return t &&
		(r = {
			TAU: {
				title: "תל אביב – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://go.tau.ac.il/he/ba/how-to-calculate",
			},
			HUJI: {
				title: "העברית – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://info.huji.ac.il/reception-components",
			},
			TECH: {
				title: "טכניון – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://admissions.technion.ac.il/",
			},
			BGU: {
				title: "בן גוריון – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://www.bgu.ac.il/",
			},
			BIU: {
				title: "בר אילן – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://www.biu.ac.il/",
			},
			HAIFA: {
				title: "חיפה – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
				ref: "https://www.haifa.ac.il/",
			},
			ARIEL: {
				title: "אריאל – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
			},
			TZAMERET: {
				title: "צמרת – תנאי סף",
				text: "אנגלית: "
					.concat(t.eng.min, " | עברית: ")
					.concat(t.heb.min, " | מתמטיקה: ")
					.concat(t.math.min),
			},
		}[e]) != null
		? r
		: null;
}
function Ea(e, t) {
	var i,
		s,
		o,
		a,
		l,
		u,
		c,
		d,
		f,
		h,
		g,
		y,
		x,
		m,
		p,
		v,
		S,
		T,
		E,
		A,
		C,
		N,
		P,
		F,
		I,
		$,
		D,
		K,
		U,
		Y,
		k,
		R;
	const n = oo[e],
		r = n == null ? void 0 : n[t];
	switch (t) {
		case "BAGRUT": {
			const L = {
				topLabel: "ממוצע בגרות ("
					.concat(
						(s =
							(i = r == null ? void 0 : r.avg) == null
								? void 0
								: i.min) != null
							? s
							: 0,
						" - "
					)
					.concat(
						(a =
							(o = r == null ? void 0 : r.avg) == null
								? void 0
								: o.max) != null
							? a
							: 127,
						"):"
					),
				bottomLabel: "פסיכומטרי (".concat(
					(u =
						(l = r == null ? void 0 : r.psycho) == null
							? void 0
							: l.min) != null
						? u
						: 200,
					" - 800):"
				),
				topMin: 0,
				topMax:
					(d =
						(c = r == null ? void 0 : r.avg) == null
							? void 0
							: c.max) != null
						? d
						: 127,
				bottomMin: 0,
				bottomMax: 800,
				topAllowDecimal: !0,
				bottomAllowDecimal: !1,
			};
			return (
				e === "HAIFA" &&
					((L.extLabel = "שנת תעודת הבגרות:"),
					(L.extMin = 0),
					(L.extMax = jh()),
					(L.extAllowDecimal = !1)),
				L
			);
		}
		case "PREP": {
			const L = {
				topLabel: "ממוצע מכינה ("
					.concat(
						(h =
							(f = r == null ? void 0 : r.avg) == null
								? void 0
								: f.min) != null
							? h
							: 0,
						" - "
					)
					.concat(
						(y =
							(g = r == null ? void 0 : r.avg) == null
								? void 0
								: g.max) != null
							? y
							: 100,
						"):"
					),
				bottomLabel: "פסיכומטרי (".concat(
					(m =
						(x = r == null ? void 0 : r.psycho) == null
							? void 0
							: x.min) != null
						? m
						: 200,
					" - 800):"
				),
				topMin: 0,
				topMax:
					(v =
						(p = r == null ? void 0 : r.avg) == null
							? void 0
							: p.max) != null
						? v
						: 100,
				bottomMin: 0,
				bottomMax: 800,
				topAllowDecimal: !0,
				bottomAllowDecimal: !1,
			};
			return (
				e === "TECH" &&
					((L.extLabel = "ממוצע בגרות (0 - ".concat(
						(T = (S = oo.TECH.BAGRUT) == null ? void 0 : S.avg) ==
							null
							? void 0
							: T.max,
						"):"
					)),
					(L.extMin = 0),
					(L.extMax =
						(A = (E = oo.TECH.BAGRUT) == null ? void 0 : E.avg) ==
						null
							? void 0
							: A.max),
					(L.extAllowDecimal = !0)),
				L
			);
		}
		case "PD":
			return {
				topLabel: "ממוצע אקדמי חלקי (".concat(
					(N =
						(C = r == null ? void 0 : r.avg) == null
							? void 0
							: C.min) != null
						? N
						: 0,
					" - 100):"
				),
				bottomLabel: "פסיכומטרי (".concat(
					(F =
						(P = r == null ? void 0 : r.psycho) == null
							? void 0
							: P.min) != null
						? F
						: 200,
					" - 800):"
				),
				topMin: 0,
				topMax: 100,
				bottomMin: 0,
				bottomMax: 800,
				topAllowDecimal: !0,
				bottomAllowDecimal: !1,
			};
		case "FD":
			return {
				topLabel: "ממוצע אקדמי מלא (".concat(
					($ =
						(I = r == null ? void 0 : r.avg) == null
							? void 0
							: I.min) != null
						? $
						: 0,
					" - 100):"
				),
				bottomLabel: "פסיכומטרי (".concat(
					(K =
						(D = r == null ? void 0 : r.psycho) == null
							? void 0
							: D.min) != null
						? K
						: 200,
					" - 800):"
				),
				topMin: 0,
				topMax: 100,
				bottomMin: 0,
				bottomMax: 800,
				topAllowDecimal: !0,
				bottomAllowDecimal: !1,
			};
		case "FINAL": {
			const L =
					r != null && r.cognitive
						? "סכם קוגניטיבי ("
								.concat(r.cognitive.min, " - ")
								.concat(r.cognitive.max, "):")
						: "סכם ראשוני:",
				H =
					r != null && r.ishiuti
						? "ציון אישיותי ("
								.concat(r.ishiuti.min, " - ")
								.concat(r.ishiuti.max, "):")
						: 'מו"ר / מרק"ם:';
			return {
				topLabel: L,
				bottomLabel: H,
				topMin: 0,
				topMax:
					(Y =
						(U = r == null ? void 0 : r.cognitive) == null
							? void 0
							: U.max) != null
						? Y
						: 800,
				bottomMin: 0,
				bottomMax:
					(R =
						(k = r == null ? void 0 : r.ishiuti) == null
							? void 0
							: k.max) != null
						? R
						: 250,
				topAllowDecimal: !0,
				bottomAllowDecimal: !1,
			};
		}
		case "MORKAM":
			return {
				topLabel: "ציון ביוגרפי (150 - 250):",
				bottomLabel: "ציון שאו״ל (150 - 250):",
				extLabel: "ציון תחנות (150 - 250):",
				topMin: 0,
				topMax: 250,
				bottomMin: 0,
				bottomMax: 250,
				extMin: 0,
				extMax: 250,
				topAllowDecimal: !1,
				bottomAllowDecimal: !1,
				extAllowDecimal: !1,
			};
		case "SAT":
			return {
				topLabel: "SAT אנגלית (200 - 800):",
				bottomLabel: "SAT מתמטיקה (200 - 800):",
				topMin: 200,
				topMax: 800,
				bottomMin: 200,
				bottomMax: 800,
				topAllowDecimal: !1,
				bottomAllowDecimal: !1,
			};
		default:
			return { topLabel: "", bottomLabel: "" };
	}
}
const kj = "sechemeter-iframe",
	Rj = "REFUAH_IFRAME_CONTENT_HEIGHT",
	Mj = "refuah-parent",
	Nj = "REFUAH_REQUEST_IFRAME_HEIGHT";
function Hd() {
	if (typeof window > "u" || window.parent === window) return;
	const e = () => {
		var n, r, i, s;
		const t = Math.max(
			document.documentElement.scrollHeight,
			(r = (n = document.body) == null ? void 0 : n.scrollHeight) != null
				? r
				: 0,
			document.documentElement.offsetHeight,
			(s = (i = document.body) == null ? void 0 : i.offsetHeight) != null
				? s
				: 0
		);
		if (t > 0)
			try {
				window.parent.postMessage(
					{ source: kj, type: Rj, height: t },
					"*"
				);
			} catch (o) {}
	};
	requestAnimationFrame(() => requestAnimationFrame(e));
}
function jj() {
	b.useEffect(() => {
		const e = () => {
				Hd();
			},
			t = () => {
				e(), requestAnimationFrame(() => requestAnimationFrame(e));
			},
			n = new ResizeObserver(t);
		n.observe(document.documentElement),
			document.body && n.observe(document.body),
			window.addEventListener("load", t),
			window.addEventListener("resize", t);
		const r = (i) => {
			const s = i.data;
			(s == null ? void 0 : s.source) === Mj &&
				(s == null ? void 0 : s.type) === Nj &&
				t();
		};
		return (
			window.addEventListener("message", r),
			t(),
			() => {
				n.disconnect(),
					window.removeEventListener("load", t),
					window.removeEventListener("resize", t),
					window.removeEventListener("message", r);
			}
		);
	}, []);
}
const Fs = {
		initial: { opacity: 0, height: 0 },
		animate: { opacity: 1, height: "auto" },
		exit: { opacity: 0, height: 0 },
		transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
	},
	Lj = () => {
		const [e, t] = b.useState([]),
			[n, r] = b.useState("initial"),
			[i, s] = b.useState(""),
			[o, a] = b.useState(""),
			[l, u] = b.useState(""),
			[c, d] = b.useState(""),
			[f, h] = b.useState(""),
			[g, y] = b.useState(""),
			[x, m] = b.useState(null),
			[p, v] = b.useState(null),
			[S, T] = b.useState(null),
			[E, A] = b.useState(!1),
			[C, N] = b.useState(!1),
			[P, F] = b.useState(!1),
			[I, $] = b.useState(!1),
			D = n === "initial" ? uj : cj,
			K = n === "initial" ? C1 : A1,
			U = b.useMemo(() => {
				var j, W;
				return i
					? i === "MORKAM"
						? []
						: i === "TZAMERET"
						? ["TZAMERET"]
						: n === "initial"
						? (j = fj[i]) != null
							? j
							: []
						: i === "FINAL"
						? (W = pj.FINAL) != null
							? W
							: []
						: []
					: [];
			}, [i, n]),
			Y = b.useMemo(() => {
				var j;
				return !o || !i
					? []
					: i === "ALT"
					? (j = hj[o]) != null
						? j
						: []
					: i === "PREP" && o === "HUJI"
					? gj
					: i === "PREP" && o === "BGU"
					? yj
					: i === "PD" && o === "BGU"
					? vj
					: i === "FINAL" && o === "TECH"
					? mj
					: [];
			}, [o, i]),
			k = Y.length > 0,
			R = b.useMemo(
				() =>
					i === "ALT"
						? l === "HUJI-HUL-PREP" ||
						  l === "HUJI-HUL-PSYCHO" ||
						  l === "HUJI-HUL-FRENCH"
							? "ALT"
							: l === "TECH-SAT" || l === "HAIFA-SAT"
							? "SAT"
							: l === "TECH-ACT"
							? "ACT"
							: i
						: i === "TZAMERET"
						? "BAGRUT"
						: i,
				[i, l]
			),
			L = b.useMemo(
				() =>
					i === "TZAMERET"
						? "TZAMERET"
						: l === "TECH-SAT" || l === "TECH-ACT"
						? "TECH"
						: l === "HAIFA-SAT"
						? "HAIFA"
						: o,
				[i, l, o]
			),
			H = b.useMemo(
				() =>
					i
						? i === "MORKAM"
							? !0
							: i === "TZAMERET"
							? !!l
							: !(!o || (k && !l))
						: !1,
				[i, o, l, k]
			),
			z = b.useMemo(
				() =>
					i
						? i === "FINAL" && o === "TECH" && l === "TECH-BP-FINAL"
						: !1,
				[i, o, l]
			),
			G = b.useMemo(() => {
				if (!H) return null;
				if (i === "MORKAM") return Ea("", "MORKAM");
				if (i === "ALT" && l) {
					if (l === "HUJI-HUL-PREP")
						return {
							topLabel: "ממוצע מכינה (65 - 107):",
							bottomLabel: "פסיכומטרי (700 - 800):",
							topMin: 0,
							topMax: 107,
							bottomMin: 0,
							bottomMax: 800,
							topAllowDecimal: !0,
							bottomAllowDecimal: !1,
						};
					if (l === "HUJI-HUL-PSYCHO")
						return {
							topLabel: "",
							bottomLabel: "פסיכומטרי (700 - 800):",
							topMin: 0,
							topMax: 0,
							bottomMin: 0,
							bottomMax: 800,
							topAllowDecimal: !0,
							bottomAllowDecimal: !1,
						};
					if (l === "HUJI-HUL-FRENCH")
						return {
							topLabel: "ממוצע בגרות (7 - 20):",
							bottomLabel: "פסיכומטרי (700 - 800):",
							topMin: 0,
							topMax: 20,
							bottomMin: 0,
							bottomMax: 800,
							topAllowDecimal: !0,
							bottomAllowDecimal: !1,
						};
					if (l === "TECH-SAT")
						return {
							topLabel: "SAT אנגלית (200 - 800):",
							bottomLabel: "SAT מתמטיקה (200 - 800):",
							topMin: 200,
							topMax: 800,
							bottomMin: 200,
							bottomMax: 800,
							topAllowDecimal: !1,
							bottomAllowDecimal: !1,
						};
					if (l === "TECH-ACT")
						return {
							topLabel: "ACT אנגלית (11 - 36):",
							bottomLabel: "ACT מתמטיקה (12 - 36):",
							topMin: 11,
							topMax: 36,
							bottomMin: 12,
							bottomMax: 36,
							topAllowDecimal: !1,
							bottomAllowDecimal: !1,
						};
					if (l === "HAIFA-SAT")
						return {
							topLabel: "SAT אנגלית (200 - 800):",
							bottomLabel: "SAT מתמטיקה (200 - 800):",
							topMin: 200,
							topMax: 800,
							bottomMin: 200,
							bottomMax: 800,
							topAllowDecimal: !1,
							bottomAllowDecimal: !1,
						};
				}
				if (i === "TZAMERET")
					return l === "TZAMERET-BAGRUT"
						? Ea("TZAMERET", "BAGRUT")
						: l === "TZAMERET-PREP"
						? Ea("TZAMERET", "PREP")
						: null;
				if (i === "FINAL" && o === "TECH")
					return l === "TECH-DEG-FINAL"
						? {
								topLabel: "ממוצע אקדמי חלקי/מלא (80 - 100):",
								bottomLabel: 'מו"ר (190 - 250):',
								topMin: 0,
								topMax: 100,
								bottomMin: 0,
								bottomMax: 250,
								topAllowDecimal: !0,
								bottomAllowDecimal: !1,
						  }
						: null;
				const j = Ea(o, i);
				return i === "PREP" && o === "BGU" && l === "BGU-PREP-ONLY"
					? { ...j, extLabel: void 0 }
					: i === "PREP" && o === "BGU" && l === "BGU-PREP-BAGRUT"
					? {
							...j,
							extLabel: "ממוצע בגרות (0 - 120):",
							extMin: 0,
							extMax: 120,
							extAllowDecimal: !0,
					  }
					: j;
			}, [H, i, o, l]),
			Q = i === "MORKAM",
			se = b.useMemo(() => (o ? Pj(o) : null), [o]);
		V.useEffect(() => {
			try {
				const j = localStorage.getItem("sechemeter-local-simulations"),
					W = j ? JSON.parse(j) : [];
				t(Array.isArray(W) ? W : []);
			} catch (j) {
				t([]);
			}
		}, []);
		const je = b.useCallback(async () => {
				if (i && !(!Q && !o && i !== "TZAMERET")) {
					A(!0);
					try {
						let j = R,
							W = L,
							ve = l;
						if (
							(i === "ALT" &&
								(l === "TECH-SAT" || l === "HAIFA-SAT"
									? ((j = "SAT"),
									  (W = l === "TECH-SAT" ? "TECH" : "HAIFA"))
									: l === "TECH-ACT"
									? ((j = "ACT"), (W = "TECH"))
									: ((j = "ALT"), (W = o))),
							i === "TZAMERET")
						)
							if (((W = "TZAMERET"), l === "TZAMERET-BAGRUT"))
								j = "BAGRUT";
							else if (l === "TZAMERET-PREP") j = "PREP";
							else return;
						i === "PREP" &&
							o === "HUJI" &&
							(ve =
								l === "HUJI-PREP-NEW"
									? "new"
									: l === "HUJI-PREP-OLD"
									? "old"
									: ""),
							i === "PREP" &&
								o === "BGU" &&
								(ve =
									l === "BGU-PREP-ONLY"
										? "only"
										: l === "BGU-PREP-BAGRUT"
										? "bagrut"
										: "");
						const Te = await Aj(Q ? "MORKAM" : W, j, {
							topValue: parseFloat(c) || 0,
							bottomValue: parseFloat(f) || 0,
							extValue: g ? parseFloat(g) : void 0,
							subChannel: ve || void 0,
						});
						m(Te),
							Te.isValid &&
								(n === "initial" &&
									typeof Te.sechem == "number" &&
									v(Te.sechem),
								n === "final" &&
									typeof Te.sechem == "number" &&
									T(Te.sechem),
								$(!0),
								setTimeout(() => $(!1), 1200));
					} finally {
						A(!1);
					}
				}
			}, [i, o, l, R, L, c, f, g, Q, n]),
			J = b.useMemo(
				() =>
					i === "MORKAM"
						? "MORKAM"
						: i === "TZAMERET"
						? "TZAMERET"
						: L,
				[i, L]
			),
			Dt = b.useMemo(() => {
				var j, W;
				return i === "MORKAM"
					? "מורכם"
					: (W = (j = Ta[L]) != null ? j : Ta[J]) != null
					? W
					: J;
			}, [i, L, J]),
			Le = b.useMemo(
				() =>
					i === "BAGRUT" ||
					(i === "TZAMERET" && l === "TZAMERET-BAGRUT"),
				[i, l]
			),
			nt = b.useCallback(async (j, W) => {
				if (typeof window > "u" || window.parent === window)
					return { ok: !1, error: "iframe" };
				const ve = ""
						.concat(Date.now(), "-")
						.concat(Math.random().toString(36).slice(2)),
					Te = new Promise((gt, yi) => {
						const yu = window.setTimeout(() => {
								window.removeEventListener("message", vi),
									yi(new Error("לא התקבלה תגובה מ-Refuah"));
							}, 8e3),
							vi = (Cs) => {
								const it = Cs.data;
								!it ||
									it.source !== "refuah-parent" ||
									it.type !== "REFUAH_IFRAME_ACK" ||
									it.requestId !== ve ||
									(window.clearTimeout(yu),
									window.removeEventListener("message", vi),
									gt({
										ok: !!it.ok,
										error: it.error
											? String(it.error)
											: void 0,
									}));
							};
						window.addEventListener("message", vi);
					});
				window.parent.postMessage(
					{
						source: "sechemeter-iframe",
						type: j,
						requestId: ve,
						payload: W,
					},
					"*"
				);
				try {
					const gt = await Te;
					return gt.ok
						? { ok: !0 }
						: { ok: !1, error: gt.error || "Refuah דחה את הבקשה" };
				} catch (gt) {
					return {
						ok: !1,
						error:
							gt instanceof Error
								? gt.message
								: "שגיאה בשליחת נתונים",
					};
				}
			}, []),
			It = b.useCallback(
				(j) => {
					const W =
							n === "initial" &&
							j != null &&
							j.isValid &&
							typeof j.sechem == "number"
								? j.sechem
								: p,
						ve =
							n === "final" &&
							j != null &&
							j.isValid &&
							typeof j.sechem == "number"
								? j.sechem
								: S;
					return {
						sakamInitial: W,
						sakamFinal: ve,
						universityCode: J,
						universityName: Dt,
					};
				},
				[n, p, S, J, Dt]
			),
			rt = b.useMemo(() => It(x), [It, x]),
			Ot = b.useMemo(() => {
				const j = rt;
				return (
					(j.sakamInitial != null &&
						Number.isFinite(Number(j.sakamInitial))) ||
					(j.sakamFinal != null &&
						Number.isFinite(Number(j.sakamFinal)))
				);
			}, [rt]),
			pi = b.useMemo(
				() => (Le ? Number.isFinite(Number(c)) : !0),
				[Le, c]
			),
			Ue = Ot && pi,
			Bn = b.useCallback(async () => {
				if (!Ot) {
					we.error("חישוב סכם תקין לפני שמירה לפרופיל");
					return;
				}
				if (Le) {
					const W = Number(c);
					if (!Number.isFinite(W)) {
						we.error("ממוצע בגרות לא תקין — כמו במחשבון הבגרות");
						return;
					}
					const Te = await nt("REFUAH_SAVE_BAGRUT_TO_PROFILE", {
						bagrutAverage: W,
						universityCode: J,
						universityName: Dt,
					});
					if (Te.ok === !1) {
						if (Te.error === "iframe") {
							we.error(
								"הכפתור פעיל רק כאשר המחשבון נטען בתוך Refuah (iframe)"
							);
							return;
						}
						we.error(Te.error);
						return;
					}
					const gt = await nt("REFUAH_SAVE_SAKAM_TO_PROFILE", rt);
					if (gt.ok === !1) {
						if (gt.error === "iframe") {
							we.error(
								"הכפתור פעיל רק כאשר המחשבון נטען בתוך Refuah (iframe)"
							);
							return;
						}
						we.error(gt.error);
						return;
					}
					we.success("נשמרו בפרופיל ממוצע בגרות והסכם");
					return;
				}
				const j = await nt("REFUAH_SAVE_SAKAM_TO_PROFILE", rt);
				if (j.ok === !1) {
					if (j.error === "iframe") {
						we.error(
							"הכפתור פעיל רק כאשר המחשבון נטען בתוך Refuah (iframe)"
						);
						return;
					}
					we.error(j.error);
					return;
				}
				we.success("הנתונים נשלחו ל-Refuah בהצלחה");
			}, [Ot, Le, c, J, Dt, nt, rt]),
			mi = b.useCallback(async () => {
				if (!Ot) {
					we.error("חישוב סכם תקין לפני שיתוף");
					return;
				}
				const j = { ...rt };
				if (Le) {
					const ve = Number(c),
						Te = Number(f);
					if (!Number.isFinite(ve)) {
						we.error("ממוצע בגרות לא תקין לשיתוף");
						return;
					}
					(j.bagrutAverage = ve),
						Number.isFinite(Te) && (j.psychometric = Te);
				}
				const W = await nt("REFUAH_SHARE_ANON_DATA", j);
				if (W.ok === !1) {
					if (W.error === "iframe") {
						we.error(
							"הכפתור פעיל רק כאשר המחשבון נטען בתוך Refuah (iframe)"
						);
						return;
					}
					we.error(W.error);
					return;
				}
				we.success("הנתונים נשמרו לשיתוף אנונימי");
			}, [Ot, Le, c, f, nt, rt]),
			Un = (j) => {
				r(j), s(""), a(""), u(""), m(null), d(""), h(""), y(""), F(!1);
			},
			Es = (j) => {
				s(j), a(""), u(""), m(null), d(""), h(""), y(""), F(!1);
			},
			gi = (j) => {
				a(j),
					u(""),
					m(null),
					d(
						n === "final" &&
							i === "FINAL" &&
							j === "TAU" &&
							p !== null
							? String(p)
							: ""
					),
					h(""),
					y(""),
					F(!1);
			},
			mt = (j) => {
				u(j), m(null), d(""), h(""), y("");
			},
			Yo = i && (Q || o || i === "TZAMERET"),
			Tn = Y.length > 0,
			gu = [
				{ id: "TZAMERET-BAGRUT", label: "בגרויות" },
				{ id: "TZAMERET-PREP", label: "מכינה" },
			];
		return (
			b.useEffect(() => {
				Hd();
				const j = [60, 180, 450, 900].map((W) =>
					window.setTimeout(Hd, W)
				);
				return () => j.forEach((W) => window.clearTimeout(W));
			}, [x, e.length, n, i, o, l]),
			w.jsxs("div", {
				className: "w-full min-w-0 space-y-4",
				dir: "rtl",
				children: [
					w.jsxs("div", {
						className:
							"flex gap-1 rounded-xl border border-border bg-card p-1 shadow-sm",
						children: [
							w.jsxs("button", {
								onClick: () => Un("initial"),
								className:
									"flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ".concat(
										n === "initial"
											? "bg-primary text-primary-foreground shadow-sm"
											: "text-muted-foreground hover:bg-accent hover:text-foreground"
									),
								children: [
									w.jsx("div", {
										className: "text-base",
										children: "סכם ראשוני",
									}),
									w.jsx("div", {
										className: "text-[11px] mt-0.5 ".concat(
											n === "initial"
												? "text-primary-foreground/70"
												: "text-muted-foreground/70"
										),
										children: "חישוב ציונים ראשוניים",
									}),
								],
							}),
							w.jsxs("button", {
								onClick: () => Un("final"),
								className:
									"flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ".concat(
										n === "final"
											? "bg-primary text-primary-foreground shadow-sm"
											: "text-muted-foreground hover:bg-accent hover:text-foreground"
									),
								children: [
									w.jsx("div", {
										className: "text-base",
										children: "סכם סופי",
									}),
									w.jsx("div", {
										className: "text-[11px] mt-0.5 ".concat(
											n === "final"
												? "text-primary-foreground/70"
												: "text-muted-foreground/70"
										),
										children: "חישוב ציונים סופיים",
									}),
								],
							}),
						],
					}),
					w.jsxs(
						Ce.div,
						{
							initial: { opacity: 0, y: 8 },
							animate: { opacity: 1, y: 0 },
							transition: { duration: 0.2 },
							className:
								"rounded-xl border border-border bg-card p-5 shadow-sm",
							children: [
								w.jsx("label", {
									className:
										"mb-2 block text-sm font-medium text-foreground",
									children:
										n === "initial"
											? "אפיק קבלה"
											: "סוג חישוב",
								}),
								w.jsx("div", {
									className: "flex flex-wrap gap-2",
									children: D.map((j) =>
										w.jsx(
											"button",
											{
												onClick: () => Es(j),
												className:
													"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
														i === j
															? "bg-primary text-primary-foreground shadow-sm"
															: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
													),
												children: K[j],
											},
											j
										)
									),
								}),
							],
						},
						n
					),
					w.jsx(at, {
						children:
							i &&
							!Q &&
							i !== "TZAMERET" &&
							U.length > 0 &&
							w.jsx(Ce.div, {
								...Fs,
								className: "overflow-hidden",
								children: w.jsxs("div", {
									className:
										"rounded-xl border border-border bg-card p-5 shadow-sm",
									children: [
										w.jsxs("div", {
											className:
												"mb-2 flex items-center justify-between",
											children: [
												w.jsx("label", {
													className:
														"text-sm font-medium text-foreground",
													children: "מוסד לימודים",
												}),
												se &&
													w.jsxs("button", {
														onClick: () => F(!P),
														className:
															"flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
														children: [
															w.jsx(_a, {
																className:
																	"h-3.5 w-3.5",
															}),
															"מידע נוסף",
														],
													}),
											],
										}),
										w.jsx("div", {
											className: "flex flex-wrap gap-2",
											children: U.map((j) =>
												w.jsx(
													"button",
													{
														onClick: () => gi(j),
														className:
															"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
																o === j
																	? "bg-primary text-primary-foreground shadow-sm"
																	: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
															),
														children: Ta[j],
													},
													j
												)
											),
										}),
										w.jsx(at, {
											children:
												P &&
												se &&
												w.jsxs(Ce.div, {
													initial: {
														opacity: 0,
														height: 0,
													},
													animate: {
														opacity: 1,
														height: "auto",
													},
													exit: {
														opacity: 0,
														height: 0,
													},
													className:
														"mt-3 overflow-hidden rounded-lg border border-border/50 bg-muted/30 p-4 text-sm text-muted-foreground",
													children: [
														w.jsx("p", {
															className:
																"font-medium text-foreground mb-1",
															children: se.title,
														}),
														w.jsx("p", {
															children: se.text,
														}),
														se.ref &&
															w.jsx("a", {
																href: se.ref,
																target: "_blank",
																rel: "noopener noreferrer",
																className:
																	"mt-2 inline-block text-primary hover:underline",
																children:
																	"קישור למידע נוסף ←",
															}),
													],
												}),
										}),
									],
								}),
							}),
					}),
					w.jsx(at, {
						children:
							i === "TZAMERET" &&
							w.jsx(Ce.div, {
								...Fs,
								className: "overflow-hidden",
								children: w.jsxs("div", {
									className:
										"rounded-xl border border-border bg-card p-5 shadow-sm",
									children: [
										w.jsx("label", {
											className:
												"mb-2 block text-sm font-medium text-foreground",
											children: "אפיק צמרת",
										}),
										w.jsx("div", {
											className: "flex flex-wrap gap-2",
											children: gu.map((j) =>
												w.jsx(
													"button",
													{
														onClick: () => mt(j.id),
														className:
															"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
																l === j.id
																	? "bg-primary text-primary-foreground shadow-sm"
																	: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
															),
														children: j.label,
													},
													j.id
												)
											),
										}),
									],
								}),
							}),
					}),
					w.jsx(at, {
						children:
							Tn &&
							o &&
							w.jsx(Ce.div, {
								...Fs,
								className: "overflow-hidden",
								children: w.jsxs("div", {
									className:
										"rounded-xl border border-border bg-card p-5 shadow-sm",
									children: [
										w.jsx("label", {
											className:
												"mb-2 block text-sm font-medium text-foreground",
											children:
												i === "ALT"
													? "אפיק חלופי"
													: "בחירה",
										}),
										w.jsx("div", {
											className: "flex flex-wrap gap-2",
											children: Y.map((j) =>
												w.jsx(
													"button",
													{
														onClick: () => mt(j.id),
														className:
															"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
																l === j.id
																	? "bg-primary text-primary-foreground shadow-sm"
																	: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
															),
														children: j.label,
													},
													j.id
												)
											),
										}),
									],
								}),
							}),
					}),
					w.jsx(at, {
						children:
							G &&
							H &&
							w.jsx(Ce.div, {
								...Fs,
								className: "overflow-hidden",
								children: w.jsxs("div", {
									className:
										"rounded-xl border border-border bg-card p-5 shadow-sm",
									children: [
										w.jsxs("div", {
											className:
												"grid gap-4 sm:grid-cols-2",
											children: [
												G.topLabel &&
													w.jsxs("div", {
														children: [
															w.jsx("label", {
																className:
																	"mb-1.5 block text-sm font-medium text-foreground",
																children:
																	G.topLabel,
															}),
															w.jsx("input", {
																type: "number",
																value: c,
																onChange: (
																	j
																) => {
																	d(
																		j.target
																			.value
																	),
																		m(null);
																},
																min: G.topMin,
																max: G.topMax,
																step: G.topAllowDecimal
																	? "any"
																	: "1",
																dir: "rtl",
																className:
																	"w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring text-right",
																placeholder:
																	"הזנת ערך",
															}),
														],
													}),
												G.bottomLabel &&
													w.jsxs("div", {
														children: [
															w.jsx("label", {
																className:
																	"mb-1.5 block text-sm font-medium text-foreground",
																children:
																	G.bottomLabel,
															}),
															w.jsx("input", {
																type: "number",
																value: f,
																onChange: (
																	j
																) => {
																	h(
																		j.target
																			.value
																	),
																		m(null);
																},
																min: G.bottomMin,
																max: G.bottomMax,
																step: G.bottomAllowDecimal
																	? "any"
																	: "1",
																dir: "rtl",
																className:
																	"w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring text-right",
																placeholder:
																	"הזנת ערך",
															}),
														],
													}),
												G.extLabel &&
													w.jsxs("div", {
														className:
															"sm:col-span-2",
														children: [
															w.jsx("label", {
																className:
																	"mb-1.5 block text-sm font-medium text-foreground",
																children:
																	G.extLabel,
															}),
															w.jsx("input", {
																type: "number",
																value: g,
																onChange: (
																	j
																) => {
																	y(
																		j.target
																			.value
																	),
																		m(null);
																},
																min: G.extMin,
																max: G.extMax,
																step: G.extAllowDecimal
																	? "any"
																	: "1",
																dir: "rtl",
																className:
																	"w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring text-right",
																placeholder:
																	"הזנת ערך",
															}),
														],
													}),
											],
										}),
										w.jsxs("div", {
											className: "mt-5 space-y-2",
											children: [
												w.jsx("button", {
													onClick: je,
													disabled:
														!Yo || E || (!c && !f),
													className:
														"w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",
													children: E
														? "מחשב..."
														: n === "initial"
														? "חישוב סכם ראשוני"
														: "חישוב סכם סופי",
												}),
												w.jsxs("div", {
													className:
														"flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-center",
													children: [
														w.jsx("button", {
															type: "button",
															onClick: () =>
																void Bn(),
															disabled: !Ue,
															className:
																"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full border border-border bg-background px-3 py-2.5 text-center text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
															children:
																"שמירה לפרופיל באיזור האישי",
														}),
														w.jsx("button", {
															type: "button",
															onClick: () =>
																void mi(),
															disabled: !Ue,
															className:
																"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
															children:
																"שיתוף נתונים אנונימי בטבלת המועמדים באתר",
														}),
													],
												}),
												!Ue &&
													w.jsx("p", {
														className:
															"text-center text-xs text-muted-foreground",
														children:
															"הכפתורים יופעלו אחרי חישוב תוצאה תקינה.",
													}),
												Le &&
													Ue &&
													w.jsx("p", {
														className:
															"text-center text-[11px] text-muted-foreground",
														children:
															"במסלול בגרויות נשלחים גם ממוצע הבגרות מהשדה העליון.",
													}),
											],
										}),
									],
								}),
							}),
					}),
					w.jsx(at, {
						children:
							z &&
							w.jsx(Ce.div, {
								initial: { opacity: 0, y: 10 },
								animate: { opacity: 1, y: 0 },
								exit: { opacity: 0 },
								className:
									"rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 shadow-sm",
								children: w.jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										w.jsx(_a, {
											className:
												"h-5 w-5 text-amber-500 shrink-0",
										}),
										w.jsx("p", {
											className:
												"text-sm font-medium text-foreground",
											children:
												"מסלול זה מבוסס על תנאי סף בלבד – אין חישוב סכם",
										}),
									],
								}),
							}),
					}),
					w.jsx(at, {
						children:
							x &&
							w.jsx(Ce.div, {
								initial: { opacity: 0, y: 10, scale: 0.98 },
								animate: { opacity: 1, y: 0, scale: 1 },
								exit: { opacity: 0, y: -10 },
								transition: { duration: 0.3 },
								className:
									"rounded-xl border p-5 shadow-sm transition-shadow duration-500 ".concat(
										x.thresholdOnly
											? "border-amber-500/30 bg-amber-500/5"
											: x.isValid
											? "border-primary/30 bg-primary/5 ".concat(
													I
														? "shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
														: ""
											  )
											: "border-destructive/30 bg-destructive/5"
									),
								children: w.jsxs("div", {
									className:
										"flex flex-col items-center justify-center gap-4 text-center",
									children: [
										w.jsxs("div", {
											className: "w-full",
											children: [
												w.jsx("h3", {
													className:
														"mb-1 text-sm font-medium text-muted-foreground",
													children: x.label,
												}),
												x.thresholdOnly
													? w.jsxs("div", {
															className:
																"flex items-center justify-center gap-2",
															children: [
																w.jsx(_a, {
																	className:
																		"h-5 w-5 text-amber-500 shrink-0",
																}),
																w.jsx("p", {
																	className:
																		"text-sm font-medium text-foreground",
																	children:
																		x.details,
																}),
															],
													  })
													: x.isValid
													? w.jsx(
															Ce.p,
															{
																initial: {
																	scale: 0.8,
																	opacity: 0,
																},
																animate: {
																	scale: 1,
																	opacity: 1,
																},
																className:
																	"text-3xl font-bold tracking-tight text-foreground",
																children:
																	x.sechem,
															},
															String(x.sechem)
													  )
													: w.jsx("div", {
															className:
																"space-y-1",
															children:
																x.errors.map(
																	(j, W) =>
																		w.jsx(
																			"p",
																			{
																				className:
																					"text-sm text-destructive",
																				children:
																					j,
																			},
																			W
																		)
																),
													  }),
												!x.thresholdOnly &&
													x.details &&
													w.jsx("p", {
														className:
															"mt-1 text-sm text-muted-foreground",
														children: x.details,
													}),
												x.warnings &&
													x.warnings.length > 0 &&
													w.jsx("div", {
														className:
															"mt-2 space-y-1",
														children:
															x.warnings.map(
																(j, W) =>
																	w.jsxs(
																		"p",
																		{
																			className:
																				"text-xs text-amber-600",
																			children:
																				[
																					"⚠ ",
																					j,
																				],
																		},
																		W
																	)
															),
													}),
											],
										}),
										x.isValid &&
											!x.thresholdOnly &&
											w.jsxs(w.Fragment, {
												children: [
													w.jsxs("div", {
														className:
															"w-full max-w-md border-t border-border/60 pt-4",
														children: [
															w.jsx("p", {
																className:
																	"mb-2 text-center text-[11px] text-muted-foreground",
																children:
																	n ===
																	"initial"
																		? "שמירה ושיתוף — סכם ראשוני"
																		: "שמירה ושיתוף — סכם סופי",
															}),
															w.jsxs("div", {
																className:
																	"flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-center",
																children: [
																	w.jsx(
																		"button",
																		{
																			type: "button",
																			onClick:
																				() =>
																					void Bn(),
																			disabled:
																				!Ue,
																			className:
																				"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full border border-border bg-background px-3 py-2.5 text-center text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
																			children:
																				"שמירה לפרופיל באיזור האישי",
																		}
																	),
																	w.jsx(
																		"button",
																		{
																			type: "button",
																			onClick:
																				() =>
																					void mi(),
																			disabled:
																				!Ue,
																			className:
																				"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
																			children:
																				"שיתוף נתונים אנונימי בטבלת המועמדים באתר",
																		}
																	),
																],
															}),
															!Ue &&
																w.jsxs("p", {
																	className:
																		"mt-2 text-center text-xs text-muted-foreground",
																	children: [
																		"הכפתורים יופעלו כשהחישוב תקין",
																		Le
																			? " וממוצע הבגרות בשדה המתאים מלא."
																			: ".",
																	],
																}),
															Le &&
																Ue &&
																w.jsx("p", {
																	className:
																		"mt-2 text-center text-[11px] text-muted-foreground",
																	children:
																		"במסלול בגרויות נשלחים גם ממוצע הבגרות מהשדה העליון.",
																}),
														],
													}),
													w.jsxs("div", {
														className:
															"w-full max-w-md border-t border-border/60 pt-3",
														children: [
															w.jsx("p", {
																className:
																	"mb-2 text-center text-[11px] text-muted-foreground",
																children:
																	"מקומי במחשבון בלבד",
															}),
															w.jsxs("div", {
																className:
																	"flex flex-wrap items-center justify-center gap-2",
																children: [
																	w.jsxs(
																		"button",
																		{
																			onClick:
																				async () => {
																					try {
																						await navigator.clipboard.writeText(
																							String(
																								x.sechem
																							)
																						),
																							we.success(
																								"הסכם הועתק"
																							);
																					} catch (j) {
																						we.error(
																							"שגיאה בהעתקה"
																						);
																					}
																				},
																			className:
																				"flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-all hover:bg-accent",
																			children:
																				[
																					w.jsx(
																						yC,
																						{
																							className:
																								"h-3.5 w-3.5",
																						}
																					),
																					"העתקה",
																				],
																		}
																	),
																	w.jsxs(
																		"button",
																		{
																			onClick:
																				() => {
																					const W =
																						[
																							{
																								id: "local-".concat(
																									Date.now()
																								),
																								university:
																									Q
																										? "MORKAM"
																										: L,
																								path: i,
																								score:
																									typeof x.sechem ==
																									"number"
																										? x.sechem
																										: null,
																							},
																							...e,
																						].slice(
																							0,
																							10
																						);
																					t(
																						W
																					),
																						localStorage.setItem(
																							"sechemeter-local-simulations",
																							JSON.stringify(
																								W
																							)
																						),
																						we.success(
																							"התוצאה נשמרה מקומית"
																						);
																				},
																			className:
																				"flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50",
																			children:
																				[
																					w.jsx(
																						bC,
																						{
																							className:
																								"h-3.5 w-3.5",
																						}
																					),
																					"שמירה",
																				],
																		}
																	),
																],
															}),
														],
													}),
												],
											}),
									],
								}),
							}),
					}),
					e.length > 0 &&
						w.jsxs("div", {
							className:
								"rounded-xl border border-border bg-card shadow-sm",
							children: [
								w.jsxs("button", {
									onClick: () => N(!C),
									className:
										"flex w-full items-center justify-between p-4",
									children: [
										w.jsxs("h3", {
											className:
												"text-sm font-semibold text-foreground",
											children: [
												"תוצאות שנשמרו (",
												e.length,
												")",
											],
										}),
										w.jsx(gC, {
											className:
												"h-4 w-4 text-muted-foreground transition-transform duration-200 ".concat(
													C ? "rotate-180" : ""
												),
										}),
									],
								}),
								w.jsx(at, {
									children:
										C &&
										w.jsx(Ce.div, {
											...Fs,
											className: "overflow-hidden",
											children: w.jsx("div", {
												className:
													"border-t border-border px-4 pb-4",
												children: w.jsx("div", {
													className:
														"divide-y divide-border/50",
													children: e.map((j) => {
														var W, ve, Te;
														return w.jsxs(
															"div",
															{
																className:
																	"flex items-center justify-between py-2.5 text-sm",
																children: [
																	w.jsxs(
																		"div",
																		{
																			children:
																				[
																					w.jsx(
																						"span",
																						{
																							className:
																								"font-medium text-foreground",
																							children:
																								(W =
																									Ta[
																										j
																											.university
																									]) !=
																								null
																									? W
																									: j.university,
																						}
																					),
																					w.jsx(
																						"span",
																						{
																							className:
																								"mx-2 text-muted-foreground",
																							children:
																								"·",
																						}
																					),
																					w.jsx(
																						"span",
																						{
																							className:
																								"text-muted-foreground",
																							children:
																								(ve =
																									dj[
																										j
																											.path
																									]) !=
																								null
																									? ve
																									: j.path,
																						}
																					),
																				],
																		}
																	),
																	w.jsx(
																		"span",
																		{
																			className:
																				"font-mono font-medium text-foreground",
																			children:
																				(Te =
																					j.score) !=
																				null
																					? Te
																					: "-",
																		}
																	),
																],
															},
															j.id
														);
													}),
												}),
											}),
										}),
								}),
							],
						}),
				],
			})
		);
	},
	Zn = ["עברית", "אנגלית", "היסטוריה", "אזרחות", "מתמטיקה"],
	Dj = ["ערבית", "אנגלית", "היסטוריה", "אזרחות", "מתמטיקה"],
	Ij = ["תנך", 'תנ"ך'],
	Oj = ["פיזיקה", "פיסיקה"],
	Vs = ["מדעי המחשב", "מחשבים", "מדמח", 'מדמ"ח'],
	Fj = [
		'תושב"ע',
		"תושבע",
		'תורה שבע"פ',
		"תורה שבעפ",
		"תורה שבעל פה",
		'תושבע"פ',
		"תושבעפ",
		"תלמוד",
	],
	Vj = [...Oj, "ביולוגיה", "כימיה"],
	Or = [...Vj, "אנגלית", "היסטוריה", "ספרות", "ספרות ומחשבת ישראל", ...Ij],
	Fr = 0,
	bi = 35,
	_j = 30,
	_s = 25,
	st = 20,
	Bj = 15,
	Yn = 12.5,
	Cn = 10,
	Qa = 60,
	Uj = 5,
	mu = 4,
	M1 = "עבודה",
	ao = "בחינה",
	Gd = "מתמטיקה",
	$j = "אנגלית",
	zj = "עברית",
	Vr = (e) => e < Qa,
	Si = (e, t) => e === M1,
	Qt = (e) => e >= Uj,
	Ti = (e) => e === mu,
	Jn = (e, t, n = ao, r = Qa) =>
		e === Gd && n === ao && (!Qt(t) || r < Qa)
			? !1
			: !!(e === Gd && n === ao && Qt(t) && r >= Qa),
	er = (e, t) => e === Gd && t === mu,
	Ei = (e, t) => e === $j && t === mu,
	Hj = (e, t) => e === zj && Qt(t),
	_r = (e, t, n) => Qt(t) && n.some((r) => e === r),
	Gj = (e, t, n) => t === mu && n.some((r) => e === r),
	Br = (e, t) => t.some((n) => e === n),
	N1 = {
		"TAU-BAGRUT": {
			id: "TAU-BAGRUT",
			name: "תל אביב",
			minUnitsRequired: 20,
			maxAvg: 117,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or],
			noBonusSubjects: [],
			ref: "https://go.tau.ac.il/he/ba/how-to-calculate",
			dialogTitle: "ממוצע בגרות תל אביב",
			dialogText:
				'דרישות: זכאות לבגרות, ציון עובר באנגלית 4 יח"ל+, 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: bi,
				},
				{
					name: "4 units Math or English → 12.5 bonus",
					condition: ({ subject: e, units: t }) =>
						er(e, t) || Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 25 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: _s,
				},
				{
					name: "General 5 units subject → 20 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: st,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
		"HUJI-BAGRUT": {
			id: "HUJI-BAGRUT",
			name: "העברית",
			minUnitsRequired: 20,
			maxAvg: 120,
			mandatorySubjects: [...Zn],
			bonusSubjects: [
				...Or,
				...Vs,
				"מחשבת ישראל",
				"ערבית",
				"אזרחות",
				"מתמטיקה",
			],
			noBonusSubjects: [],
			ref: "https://info.huji.ac.il/reception-components/bagrut-bonus",
			dialogTitle: "ממוצע בגרות העברית",
			dialogText:
				'דרישות: זכאות לבגרות, ציון עובר באנגלית 4 יח"ל+, 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t, examType: n }) =>
						Jn(e, t, n),
					bonus: bi,
				},
				{
					name: "4 units Math → 12.5 bonus",
					condition: ({ subject: e, units: t }) => er(e, t),
					bonus: Yn,
				},
				{
					name: "5 units Hebrew → 15 bonus",
					condition: ({ subject: e, units: t }) => Hj(e, t),
					bonus: Bj,
				},
				{
					name: "5 units bonus subject → 20 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: st,
				},
				{
					name: "4 units bonus subject → 10 bonus",
					condition: ({ subject: e, units: t }, n) =>
						Gj(e, t, n.bonusSubjects),
					bonus: Cn,
				},
				{
					name: "General 5 units subject → 10 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: Cn,
				},
			],
		},
		"TECH-BAGRUT": {
			id: "TECH-BAGRUT",
			name: "טכניון",
			minUnitsRequired: 21,
			maxAvg: 119,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or, ...Vs],
			noBonusSubjects: [],
			ref: "https://admissions.technion.ac.il/calculation-of-the-median-grade/",
			dialogTitle: "ממוצע בגרות טכניון",
			dialogText:
				'דרישות: 21 יח"ל לפחות, מתמטיקה 5 יח"ל 70+ או 4+ יח"ל ובחינת סיווג',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: bi,
				},
				{
					name: "4 units Math → 20 bonus",
					condition: ({ subject: e, units: t }) => er(e, t),
					bonus: st,
				},
				{
					name: "4 units English → 12.5 bonus",
					condition: ({ subject: e, units: t }) => Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 25 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: _s,
				},
				{
					name: "General 5 units subject → 20 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: st,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
		"BGU-BAGRUT": {
			id: "BGU-BAGRUT",
			name: "בן גוריון",
			minUnitsRequired: 20,
			maxAvg: 120,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or, ...Vs],
			noBonusSubjects: [],
			ref: "https://www.bgu.ac.il/media/0p3ppz0n/ידיעון-תואר-ראשון.pdf",
			dialogTitle: "ממוצע בגרות בן גוריון",
			dialogText: 'דרישות: 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: bi,
				},
				{
					name: "4 units Math or English → 12.5 bonus",
					condition: ({ subject: e, units: t }) =>
						er(e, t) || Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 25 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: _s,
				},
				{
					name: "General 5 units subject → 20 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: st,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
		"BIU-BAGRUT": {
			id: "BIU-BAGRUT",
			name: "בר אילן",
			minUnitsRequired: 20,
			maxAvg: 120,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or, ...Vs, ...Fj, "מחשבת ישראל", "ספרות"],
			noBonusSubjects: [],
			ref: "https://www.biu.ac.il/registration-and-admission/information/general-admission-req/matriculation-calculation",
			dialogTitle: "ממוצע בגרות בר אילן",
			dialogText: 'דרישות: 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 30 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: _j,
				},
				{
					name: "4 units Math → 12.5 bonus",
					condition: ({ subject: e, units: t }) => er(e, t),
					bonus: Yn,
				},
				{
					name: "4 units English → 12.5 bonus",
					condition: ({ subject: e, units: t }) => Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 20 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: st,
				},
				{
					name: "General 5 units subject → 10 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: Cn,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
		"HAIFA-BAGRUT": {
			id: "HAIFA-BAGRUT",
			name: "חיפה",
			minUnitsRequired: 20,
			maxAvg: 120,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or, ...Vs],
			noBonusSubjects: [],
			ref: "https://www.haifa.ac.il/חישוב-ציון-קבלה-סכם/",
			dialogTitle: "ממוצע בגרות חיפה",
			dialogText: 'דרישות: 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: bi,
				},
				{
					name: "4 units Math or English → 12.5 bonus",
					condition: ({ subject: e, units: t }) =>
						er(e, t) || Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 25 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: _s,
				},
				{
					name: "General 5 units subject → 20 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: st,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
		"ARIEL-BAGRUT": {
			id: "ARIEL-BAGRUT",
			name: "אריאל",
			minUnitsRequired: 20,
			maxAvg: 120,
			mandatorySubjects: [...Zn],
			bonusSubjects: [...Or],
			noBonusSubjects: [],
			ref: "https://pniot.ariel.ac.il/projects/tzmm/NewCalcMark/CalcMark.asp",
			dialogTitle: "ממוצע בגרות אריאל",
			dialogText: 'דרישות: 20 יח"ל לפחות',
			bonusRules: [
				{
					name: "Failing grade → no bonus",
					condition: ({ subject: e, grade: t }, n) =>
						Br(e, n.noBonusSubjects) || Vr(t),
					bonus: Fr,
				},
				{
					name: "Gemer → 20 bonus",
					condition: ({ examType: e, units: t }) => Si(e),
					bonus: st,
				},
				{
					name: "5 units Math → 35 bonus",
					condition: ({ subject: e, units: t }) => Jn(e, t),
					bonus: bi,
				},
				{
					name: "4 units Math or English → 12.5 bonus",
					condition: ({ subject: e, units: t }) =>
						er(e, t) || Ei(e, t),
					bonus: Yn,
				},
				{
					name: "5 units bonus subject → 25 bonus",
					condition: ({ subject: e, units: t }, n) =>
						_r(e, t, n.bonusSubjects),
					bonus: _s,
				},
				{
					name: "General 5 units subject → 20 bonus",
					condition: ({ units: e }) => Qt(e),
					bonus: st,
				},
				{
					name: "General 4 units subject → 10 bonus",
					condition: ({ units: e }) => Ti(e),
					bonus: Cn,
				},
			],
		},
	},
	Wj = [
		{ id: "STATE-EDUCATION", label: "ממלכתי" },
		{ id: "RELIGIOUS-STATE-EDUCATION", label: "ממלכתי-דתי" },
		{ id: "ARAB-STATE-EDUCATION", label: "ערבי" },
	];
function Kj(e) {
	return e === "ARAB-STATE-EDUCATION" ? Dj : Zn;
}
const Hg = [
	{ id: "TAU-BAGRUT", label: "תל אביב" },
	{ id: "HUJI-BAGRUT", label: "העברית" },
	{ id: "TECH-BAGRUT", label: "טכניון" },
	{ id: "BGU-BAGRUT", label: "בן גוריון" },
	{ id: "BIU-BAGRUT", label: "בר אילן" },
	{ id: "HAIFA-BAGRUT", label: "חיפה" },
	{ id: "ARIEL-BAGRUT", label: "אריאל" },
];
function Yj(e, t) {
	for (const n of t.bonusRules) if (n.condition(e, t)) return n.bonus;
	return 0;
}
function Qj(e, t, n) {
	return e + t > n;
}
function Xj(e, t, n) {
	const r = N1[n];
	if (!r)
		return {
			avg: 0,
			totalUnitsInCalc: 0,
			totalUnitsEntered: 0,
			isValid: !1,
			rows: e,
		};
	const i = e.map((g) => {
			if (!g.subject || g.grade <= 0 || g.units <= 0)
				return { ...g, bonus: 0, included: !1 };
			const y = {
					subject: g.subject,
					units: g.units,
					grade: g.grade,
					examType: g.examType,
				},
				x = Yj(y, r);
			return { ...g, bonus: x };
		}),
		s = Kj(t);
	let o = 0,
		a = 0,
		l = 0,
		u = 0;
	const c = [],
		d = [];
	for (const g of i) {
		if (!g.subject || g.grade <= 0 || g.units <= 0) {
			d.push({ ...g, included: !1 });
			continue;
		}
		(l += g.units),
			Jn(g.subject, g.units) && n === "TECH-BAGRUT"
				? ((o += 10 * (g.grade + g.bonus)),
				  (a += 10),
				  (u += g.units),
				  d.push({ ...g, included: !0 }))
				: er(g.subject, g.units) && n === "TECH-BAGRUT"
				? ((o += 8 * (g.grade + g.bonus)),
				  (a += 8),
				  (u += g.units),
				  d.push({ ...g, included: !0 }))
				: s.includes(g.subject) || n === ""
				? ((o += g.units * (g.grade + g.bonus)),
				  (a += g.units),
				  d.push({ ...g, included: !0 }))
				: (c.push({ row: { ...g }, gradeWithBonus: g.grade + g.bonus }),
				  d.push({ ...g, included: !1 }));
	}
	let f = a > 0 ? o / a : 0;
	c.sort((g, y) => {
		const x = (g.gradeWithBonus - f) * g.row.units;
		return (y.gradeWithBonus - f) * y.row.units - x;
	});
	for (const g of c) {
		const y = g.row;
		if (isNaN(f) || Qj(y.grade, y.bonus, f) || a < r.minUnitsRequired) {
			(o += y.units * (y.grade + y.bonus)), (a += y.units), (f = o / a);
			const x = d.findIndex((m) => m.id === y.id);
			x >= 0 && (d[x] = { ...d[x], included: !0 });
		}
	}
	f = a > 0 ? qt(o / a, 2) : 0;
	let h;
	return (
		r.maxAvg && f > r.maxAvg && ((h = r.maxAvg), (f = r.maxAvg)),
		{
			avg: f,
			totalUnitsInCalc: a,
			totalUnitsEntered: l,
			isValid: a > 0,
			rows: d,
			cappedAt: h,
		}
	);
}
const qj = [
		{ subject: 'תנ"ך', units: 2 },
		{ subject: "ספרות", units: 2 },
		{ subject: "עברית", units: 2 },
		{ subject: "היסטוריה", units: 2 },
		{ subject: "אזרחות", units: 2 },
		{ subject: "אנגלית", units: 5 },
		{ subject: "מתמטיקה", units: 5 },
	],
	Xa = ["ספרות ומחשבת ישראל", "ספרות", "מחשבת ישראל"],
	qa = ['תושבע"פ', "תלמוד"],
	Zj = [
		{ subject: 'תנ"ך', units: 3 },
		{ subject: Xa[0], units: 2 },
		{ subject: qa[0], units: 3 },
		{ subject: "עברית", units: 2 },
		{ subject: "היסטוריה", units: 2 },
		{ subject: "אזרחות", units: 2 },
		{ subject: "אנגלית", units: 5 },
		{ subject: "מתמטיקה", units: 5 },
	],
	Za = ["תרבות ומורשת איסלאם", "מורשת ודת נוצרית"],
	Jj = [
		{ subject: "ערבית", units: 3 },
		{ subject: "עברית", units: 3 },
		{ subject: "היסטוריה", units: 2 },
		{ subject: Za[0], units: 1 },
		{ subject: "אזרחות", units: 2 },
		{ subject: "אנגלית", units: 5 },
		{ subject: "מתמטיקה", units: 5 },
	];
let e5 = 0;
const Gs = (e = "", t = 0, n) => ({
	id: "row-".concat(++e5),
	subject: e,
	units: t,
	grade: 0,
	examType: ao,
	bonus: 0,
	included: !1,
	...(n ? { subjectSlot: n } : {}),
});
function Gg(e) {
	return (
		e === "ARAB-STATE-EDUCATION"
			? Jj
			: e === "RELIGIOUS-STATE-EDUCATION"
			? Zj
			: qj
	).map((r, i) => {
		if (e === "ARAB-STATE-EDUCATION" && i === 3)
			return Gs(r.subject, r.units, "arab-culture");
		if (e === "RELIGIOUS-STATE-EDUCATION") {
			if (i === 1) return Gs(r.subject, r.units, "religious-literature");
			if (i === 2) return Gs(r.subject, r.units, "religious-toshba");
		}
		return Gs(r.subject, r.units);
	});
}
const t5 = () => {
		var S;
		const [e, t] = b.useState("RELIGIOUS-STATE-EDUCATION"),
			[n, r] = b.useState(""),
			[i, s] = b.useState(() => Gg("RELIGIOUS-STATE-EDUCATION")),
			[o, a] = b.useState(!1),
			[l, u] = b.useState(null),
			c = b.useMemo(() => (!n || !e ? null : Xj(i, e, n)), [i, e, n]),
			d = (S = c == null ? void 0 : c.rows) != null ? S : i,
			f = b.useRef(void 0);
		b.useEffect(() => {
			const T = c != null && c.isValid ? c.avg : void 0;
			if (T !== void 0 && f.current !== T) {
				u("primary");
				const E = window.setTimeout(() => u(null), 1200);
				return (f.current = T), () => window.clearTimeout(E);
			}
			f.current = T;
		}, [c == null ? void 0 : c.avg, c == null ? void 0 : c.isValid]);
		const h = b.useMemo(() => (n ? N1[n] : null), [n]),
			g = b.useMemo(() => {
				var T, E;
				return (E =
					(T = Hg.find((A) => A.id === n)) == null
						? void 0
						: T.label) != null
					? E
					: "";
			}, [n]),
			y = b.useCallback((T) => {
				t(T), r(""), a(!1), s(Gg(T));
			}, []),
			x = b.useCallback(() => {
				s((T) => [...T, Gs()]);
			}, []),
			m = b.useCallback((T) => {
				s((E) => E.filter((A) => A.id !== T));
			}, []),
			p = b.useCallback((T, E, A) => {
				s((C) => C.map((N) => (N.id === T ? { ...N, [E]: A } : N)));
			}, []),
			v = b.useCallback(async (T, E) => {
				if (typeof window > "u" || window.parent === window) {
					we.error(
						"הכפתור פעיל רק כאשר המחשבון נטען בתוך Refuah (iframe)"
					);
					return;
				}
				const A = ""
						.concat(Date.now(), "-")
						.concat(Math.random().toString(36).slice(2)),
					C = new Promise((N, P) => {
						const F = window.setTimeout(() => {
								window.removeEventListener("message", I),
									P(new Error("לא התקבלה תגובה מ-Refuah"));
							}, 5e3),
							I = ($) => {
								const D = $.data;
								!D ||
									D.source !== "refuah-parent" ||
									D.type !== "REFUAH_IFRAME_ACK" ||
									D.requestId !== A ||
									(window.clearTimeout(F),
									window.removeEventListener("message", I),
									N({
										ok: !!D.ok,
										error: D.error
											? String(D.error)
											: void 0,
									}));
							};
						window.addEventListener("message", I);
					});
				window.parent.postMessage(
					{
						source: "sechemeter-iframe",
						type: T,
						requestId: A,
						payload: E,
					},
					"*"
				);
				try {
					const N = await C;
					if (!N.ok) {
						we.error(N.error || "Refuah דחה את הבקשה");
						return;
					}
					we.success("הנתונים נשלחו ל-Refuah בהצלחה");
				} catch (N) {
					we.error(
						N instanceof Error ? N.message : "שגיאה בשליחת נתונים"
					);
				}
			}, []);
		return w.jsxs("div", {
			className: "w-full min-w-0 space-y-6",
			dir: "rtl",
			children: [
				w.jsx("h2", {
					className:
						"text-xl font-bold tracking-tight text-foreground",
					children: "מחשבון ממוצע בגרות",
				}),
				w.jsxs("div", {
					className:
						"rounded-xl border border-border bg-card p-5 shadow-sm",
					children: [
						w.jsx("label", {
							className:
								"mb-2 block text-sm font-medium text-foreground",
							children: "סוג תעודת בגרות",
						}),
						w.jsx("div", {
							className: "flex flex-wrap gap-2",
							children: Wj.map((T) =>
								w.jsx(
									"button",
									{
										onClick: () => y(T.id),
										className:
											"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
												e === T.id
													? "bg-primary text-primary-foreground shadow-sm"
													: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
											),
										children: T.label,
									},
									T.id
								)
							),
						}),
					],
				}),
				e &&
					w.jsxs(Ce.div, {
						initial: { opacity: 0, y: 10 },
						animate: { opacity: 1, y: 0 },
						className:
							"rounded-xl border border-border bg-card p-5 shadow-sm",
						children: [
							w.jsxs("div", {
								className:
									"mb-2 flex items-center justify-between",
								children: [
									w.jsx("label", {
										className:
											"text-sm font-medium text-foreground",
										children: "מוסד לימודים",
									}),
									h &&
										w.jsxs("button", {
											onClick: () => a(!o),
											className:
												"flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
											children: [
												w.jsx(_a, {
													className: "h-3.5 w-3.5",
												}),
												"מידע נוסף",
											],
										}),
								],
							}),
							w.jsx("div", {
								className: "flex flex-wrap gap-2",
								children: Hg.map((T) =>
									w.jsx(
										"button",
										{
											onClick: () => {
												r(T.id);
											},
											className:
												"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
													n === T.id
														? "bg-primary text-primary-foreground shadow-sm"
														: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
												),
											children: T.label,
										},
										T.id
									)
								),
							}),
							w.jsx(at, {
								children:
									o &&
									h &&
									w.jsxs(Ce.div, {
										initial: { opacity: 0, height: 0 },
										animate: { opacity: 1, height: "auto" },
										exit: { opacity: 0, height: 0 },
										className:
											"mt-3 overflow-hidden rounded-lg border border-border/50 bg-muted/30 p-4 text-sm text-muted-foreground space-y-2",
										children: [
											w.jsx("p", {
												className:
													"font-medium text-foreground",
												children: h.dialogTitle,
											}),
											w.jsx("p", {
												children: h.dialogText,
											}),
											h.maxAvg &&
												w.jsxs("p", {
													className: "text-xs",
													children: [
														w.jsx("span", {
															className:
																"font-medium text-foreground",
															children:
																"תקרה מקסימלית:",
														}),
														" ",
														h.maxAvg,
													],
												}),
											h.ref &&
												w.jsx("a", {
													href: h.ref,
													target: "_blank",
													rel: "noopener noreferrer",
													className:
														"mt-2 inline-block text-primary hover:underline text-xs",
													children:
														"קישור למידע נוסף ←",
												}),
										],
									}),
							}),
						],
					}),
				n &&
					e &&
					w.jsxs(Ce.div, {
						initial: { opacity: 0, y: 10 },
						animate: { opacity: 1, y: 0 },
						className:
							"rounded-xl border border-border bg-card shadow-sm",
						children: [
							w.jsxs("div", {
								className: "w-full min-w-0 overflow-x-hidden",
								children: [
									w.jsxs("div", {
										className:
											"grid w-full grid-cols-[minmax(0,1fr)_48px_48px_64px_40px_32px] items-center gap-x-1 gap-y-1 border-b border-border bg-muted/30 px-2 py-3 text-[11px] font-medium text-muted-foreground sm:grid-cols-[minmax(0,1fr)_52px_52px_72px_44px_36px] sm:gap-x-2 sm:px-4 sm:text-xs",
										children: [
											w.jsx("span", {
												className: "min-w-0",
												children: "מקצוע",
											}),
											w.jsx("span", {
												className: "text-center",
												children: 'יח"ל',
											}),
											w.jsx("span", {
												className: "text-center",
												children: "ציון",
											}),
											w.jsx("span", {
												className: "text-center",
												children: "סוג",
											}),
											w.jsx("span", {
												className: "text-center",
												children: "בונוס",
											}),
											w.jsx("span", {}),
										],
									}),
									w.jsx("div", {
										className: "divide-y divide-border/50",
										children: d.map((T) =>
											w.jsxs(
												"div",
												{
													className:
														"grid w-full grid-cols-[minmax(0,1fr)_48px_48px_64px_40px_32px] items-center gap-x-1 gap-y-1 px-2 py-2.5 transition-colors sm:grid-cols-[minmax(0,1fr)_52px_52px_72px_44px_36px] sm:gap-x-2 sm:px-4 ".concat(
															T.included
																? "bg-primary/5"
																: ""
														),
													children: [
														e ===
															"ARAB-STATE-EDUCATION" &&
														T.subjectSlot ===
															"arab-culture"
															? w.jsx("select", {
																	dir: "rtl",
																	value: Za.includes(
																		T.subject
																	)
																		? T.subject
																		: Za[0],
																	onChange: (
																		E
																	) => {
																		p(
																			T.id,
																			"subject",
																			E
																				.target
																				.value
																		);
																	},
																	className:
																		"min-w-0 w-full rounded-md border border-input bg-background px-1.5 py-1.5 text-right text-xs text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring sm:px-2 sm:text-sm",
																	children:
																		Za.map(
																			(
																				E
																			) =>
																				w.jsx(
																					"option",
																					{
																						value: E,
																						children:
																							E,
																					},
																					E
																				)
																		),
															  })
															: e ===
																	"RELIGIOUS-STATE-EDUCATION" &&
															  T.subjectSlot ===
																	"religious-literature"
															? w.jsx("select", {
																	dir: "rtl",
																	value: Xa.includes(
																		T.subject
																	)
																		? T.subject
																		: Xa[0],
																	onChange: (
																		E
																	) => {
																		p(
																			T.id,
																			"subject",
																			E
																				.target
																				.value
																		);
																	},
																	className:
																		"min-w-0 w-full rounded-md border border-input bg-background px-1.5 py-1.5 text-right text-xs text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring sm:px-2 sm:text-sm",
																	children:
																		Xa.map(
																			(
																				E
																			) =>
																				w.jsx(
																					"option",
																					{
																						value: E,
																						children:
																							E,
																					},
																					E
																				)
																		),
															  })
															: e ===
																	"RELIGIOUS-STATE-EDUCATION" &&
															  T.subjectSlot ===
																	"religious-toshba"
															? w.jsx("select", {
																	dir: "rtl",
																	value: qa.includes(
																		T.subject
																	)
																		? T.subject
																		: qa[0],
																	onChange: (
																		E
																	) => {
																		p(
																			T.id,
																			"subject",
																			E
																				.target
																				.value
																		);
																	},
																	className:
																		"min-w-0 w-full rounded-md border border-input bg-background px-1.5 py-1.5 text-right text-xs text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring sm:px-2 sm:text-sm",
																	children:
																		qa.map(
																			(
																				E
																			) =>
																				w.jsx(
																					"option",
																					{
																						value: E,
																						children:
																							E,
																					},
																					E
																				)
																		),
															  })
															: w.jsx("input", {
																	type: "text",
																	dir: "rtl",
																	value: T.subject,
																	onChange: (
																		E
																	) =>
																		p(
																			T.id,
																			"subject",
																			E
																				.target
																				.value
																		),
																	placeholder:
																		"שם מקצוע",
																	className:
																		"min-w-0 w-full rounded-md border border-input bg-background px-1.5 py-1.5 text-right text-xs text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring sm:px-2 sm:text-sm",
															  }),
														w.jsx("input", {
															type: "number",
															value:
																T.units || "",
															onChange: (E) =>
																p(
																	T.id,
																	"units",
																	parseInt(
																		E.target
																			.value
																	) || 0
																),
															min: 1,
															max: 10,
															className:
																"w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm text-foreground text-center focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
														}),
														w.jsx("input", {
															type: "number",
															value:
																T.grade || "",
															onChange: (E) =>
																p(
																	T.id,
																	"grade",
																	parseInt(
																		E.target
																			.value
																	) || 0
																),
															min: 0,
															max: 100,
															className:
																"w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm text-foreground text-center focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
														}),
														w.jsxs("select", {
															value: T.examType,
															onChange: (E) =>
																p(
																	T.id,
																	"examType",
																	E.target
																		.value
																),
															className:
																"w-full rounded-md border border-input bg-background px-1 py-1.5 text-xs text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
															children: [
																w.jsx(
																	"option",
																	{
																		value: ao,
																		children:
																			"בחינה",
																	}
																),
																w.jsx(
																	"option",
																	{
																		value: M1,
																		children:
																			"עבודה",
																	}
																),
															],
														}),
														w.jsx("span", {
															className:
																"text-center text-sm font-mono text-foreground",
															children:
																T.bonus || 0,
														}),
														w.jsx("button", {
															onClick: () =>
																m(T.id),
															className:
																"flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
															title: "מחק מקצוע",
															children: w.jsx(
																SC,
																{
																	className:
																		"h-3.5 w-3.5",
																}
															),
														}),
													],
												},
												T.id
											)
										),
									}),
								],
							}),
							w.jsx("div", {
								className: "border-t border-border px-4 py-3",
								children: w.jsxs("button", {
									onClick: x,
									className:
										"flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors",
									children: [
										w.jsx(xC, { className: "h-4 w-4" }),
										"הוספת מקצוע",
									],
								}),
							}),
						],
					}),
				n &&
					e &&
					w.jsxs("div", {
						className: "space-y-2",
						children: [
							w.jsxs("div", {
								className:
									"flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-center",
								children: [
									w.jsx("button", {
										onClick: () =>
											v("REFUAH_SAVE_BAGRUT_TO_PROFILE", {
												bagrutAverage:
													c != null && c.isValid
														? c.avg
														: null,
												universityCode: n.replace(
													"-BAGRUT",
													""
												),
												universityName: g,
											}),
										disabled: !(c != null && c.isValid),
										className:
											"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full border border-border bg-background px-3 py-2.5 text-center text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
										children: "שמירה לפרופיל באיזור האישי",
									}),
									w.jsx("button", {
										onClick: () =>
											v("REFUAH_SHARE_ANON_DATA", {
												bagrutAverage:
													c != null && c.isValid
														? c.avg
														: null,
												universityCode: n.replace(
													"-BAGRUT",
													""
												),
												universityName: g,
											}),
										disabled: !(c != null && c.isValid),
										className:
											"inline-flex min-h-[42px] min-w-0 flex-1 items-center justify-center whitespace-normal rounded-full bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4",
										children:
											"שיתוף נתונים אנונימי בטבלת המועמדים באתר",
									}),
								],
							}),
							!(c != null && c.isValid) &&
								w.jsx("p", {
									className:
										"text-center text-xs text-muted-foreground",
									children:
										"הכפתורים יופעלו כשהחישוב יהיה תקין (הזנת ציונים וכו׳).",
								}),
						],
					}),
				w.jsx(at, {
					children:
						n &&
						e &&
						c &&
						w.jsxs(Ce.div, {
							initial: { opacity: 0, y: 10, scale: 0.98 },
							animate: { opacity: 1, y: 0, scale: 1 },
							exit: { opacity: 0, y: -10 },
							className:
								"rounded-xl border border-primary/30 bg-primary/5 p-6 shadow-sm transition-shadow duration-500 ".concat(
									l
										? "shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
										: ""
								),
							children: [
								w.jsx("div", {
									className:
										"flex items-start justify-between gap-4",
									children: w.jsxs("div", {
										className:
											"flex items-center gap-3 mb-3",
										children: [
											w.jsx(qv, {
												className:
													"h-6 w-6 text-primary",
											}),
											w.jsx("h3", {
												className:
													"text-lg font-semibold text-foreground",
												children: "תוצאות חישוב",
											}),
										],
									}),
								}),
								w.jsxs("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										w.jsxs("div", {
											className:
												"rounded-lg bg-background/50 p-4 text-center",
											children: [
												w.jsx("p", {
													className:
														"text-sm text-muted-foreground mb-1",
													children:
														"ממוצע בגרות מיטבי",
												}),
												w.jsx(
													Ce.p,
													{
														initial: {
															scale: 0.8,
															opacity: 0,
														},
														animate: {
															scale: 1,
															opacity: 1,
														},
														className:
															"text-3xl font-bold tracking-tight text-foreground",
														children: c.avg,
													},
													String(c.avg)
												),
												c.cappedAt &&
													w.jsxs("p", {
														className:
															"text-xs text-amber-600 mt-1",
														children: [
															"תקרה: ",
															c.cappedAt,
														],
													}),
											],
										}),
										w.jsxs("div", {
											className:
												"rounded-lg bg-background/50 p-4 text-center",
											children: [
												w.jsx("p", {
													className:
														"text-sm text-muted-foreground mb-1",
													children: 'יח"ל בחישוב',
												}),
												w.jsx("p", {
													className:
														"text-2xl font-bold text-foreground",
													children:
														c.totalUnitsInCalc,
												}),
											],
										}),
										w.jsxs("div", {
											className:
												"rounded-lg bg-background/50 p-4 text-center",
											children: [
												w.jsx("p", {
													className:
														"text-sm text-muted-foreground mb-1",
													children:
														'סה"כ יח"ל שהוזנו',
												}),
												w.jsx("p", {
													className:
														"text-2xl font-bold text-foreground",
													children:
														c.totalUnitsEntered,
												}),
											],
										}),
									],
								}),
							],
						}),
				}),
			],
		});
	},
	j1 = [
		{
			subject: "היסטוריה",
			units: 2,
			exams: [
				{ id: "22261", weight: 0.7 },
				{ id: "22262", weight: 0.3 },
			],
		},
		{
			subject: "ספרות",
			units: 2,
			exams: [
				{ id: "22381", weight: 0.7 },
				{ id: "22382", weight: 0.3 },
			],
		},
		{
			subject: 'תנ"ך',
			units: 2,
			exams: [
				{ id: "1261", weight: 0.5 },
				{ id: "1262", weight: 0.5 },
			],
		},
		{
			subject: "אזרחות",
			units: 2,
			exams: [
				{ id: "34261", weight: 0.5 },
				{ id: "34262", weight: 0.5 },
			],
		},
		{
			subject: "עברית",
			units: 2,
			exams: [
				{ id: "16281", weight: 0.5 },
				{ id: "16282", weight: 0.5 },
			],
		},
		{
			subject: "אנגלית (3 יח״ל)",
			units: 3,
			exams: [
				{ id: "16381", weight: 0.5 },
				{ id: "16382", weight: 0.5 },
			],
		},
		{
			subject: "אנגלית (4 יח״ל)",
			units: 4,
			exams: [
				{ id: "16481", weight: 0.4 },
				{ id: "16482", weight: 0.3 },
				{ id: "16483", weight: 0.3 },
			],
		},
		{
			subject: "אנגלית (5 יח״ל)",
			units: 5,
			exams: [
				{ id: "16581", weight: 0.35 },
				{ id: "16582", weight: 0.35 },
				{ id: "16583", weight: 0.3 },
			],
		},
		{
			subject: "מתמטיקה (3 יח״ל)",
			units: 3,
			exams: [
				{ id: "35182", weight: 0.25 },
				{ id: "35381", weight: 0.35 },
				{ id: "35382", weight: 0.4 },
			],
		},
		{
			subject: "מתמטיקה (4 יח״ל)",
			units: 4,
			exams: [
				{ id: "35481", weight: 0.65, label: "שאלון 804" },
				{ id: "35482", weight: 0.35, label: "שאלון 805" },
			],
		},
		{
			subject: "מתמטיקה (5 יח״ל)",
			units: 5,
			exams: [
				{ id: "35581", weight: 0.6, label: "שאלון 806" },
				{ id: "35582", weight: 0.4, label: "שאלון 807" },
			],
		},
		{
			subject: "פיזיקה",
			units: 5,
			exams: [
				{ id: "37581", weight: 0.25, label: "מכניקה" },
				{ id: "37582", weight: 0.25, label: "חשמל" },
				{ id: "37583", weight: 0.15, label: "מעבדה רגילה" },
				{ id: "37584", weight: 0.15, label: "מעבדת חקר" },
				{ id: "37585", weight: 0.2, label: "קרינה וחומר" },
			],
		},
		{
			subject: "כימיה",
			units: 5,
			exams: [
				{ id: "39581", weight: 0.6, label: "שאלון עיוני" },
				{ id: "39582", weight: 0.4, label: "מעבדה / עבודה" },
			],
		},
		{
			subject: "ביולוגיה",
			units: 5,
			exams: [
				{ id: "43581", weight: 0.4, label: "שאלון עיוני" },
				{ id: "43582", weight: 0.3, label: "מעבדת ניסוי" },
				{ id: "43583", weight: 0.3, label: "ביוחקר" },
			],
		},
		{
			subject: "מדעי המחשב",
			units: 5,
			exams: [
				{ id: "42581", weight: 0.5 },
				{ id: "42582", weight: 0.5 },
			],
		},
	];
function n5(e, t) {
	let n = 0,
		r = 0,
		i = !1;
	for (const s of t) {
		const o = e[s.id];
		o != null &&
			!isNaN(o) &&
			((i = !0), (r += o * s.weight), (n += s.weight));
	}
	return !i || Math.abs(n - 1) > 0.01 ? null : Math.round(r * 100) / 100;
}
const r5 = Array.from(
	new Set(
		j1.map((e) => {
			const t = e.subject.match(/^(.+?)\s*\(\d+\s*יח[״"]ל\)$/);
			return t ? t[1] : e.subject;
		})
	)
);
function i5(e) {
	return j1.filter((t) => {
		const n = t.subject.match(/^(.+?)\s*\(\d+\s*יח[״"]ל\)$/);
		return (n ? n[1] : t.subject) === e;
	});
}
const s5 = () => {
		const [e, t] = b.useState(""),
			[n, r] = b.useState(null),
			[i, s] = b.useState({}),
			[o, a] = b.useState(!1),
			l = b.useMemo(() => (e ? i5(e) : []), [e]),
			u = l.length > 1,
			c = b.useMemo(() => {
				var p, v;
				return e
					? u
						? n === null
							? null
							: (p = l.find((S) => S.units === n)) != null
							? p
							: null
						: (v = l[0]) != null
						? v
						: null
					: null;
			}, [e, n, l, u]),
			d = b.useMemo(() => (c ? n5(i, c.exams) : null), [c, i]),
			f = b.useMemo(
				() =>
					c
						? c.exams.every((p) => {
								const v = i[p.id];
								return v !== void 0 && !isNaN(v);
						  })
						: !1,
				[c, i]
			),
			h = V.useRef(null);
		V.useEffect(() => {
			if (d !== null && d !== h.current) {
				a(!0);
				const p = setTimeout(() => a(!1), 1200);
				return (h.current = d), () => clearTimeout(p);
			}
		}, [d]);
		const g = b.useCallback((p) => {
				t(p), r(null), s({});
			}, []),
			y = b.useCallback((p) => {
				r(p), s({});
			}, []),
			x = b.useCallback((p, v) => {
				const S = v === "" ? void 0 : parseFloat(v),
					T =
						S !== void 0 && !isNaN(S)
							? Math.min(100, Math.max(0, S))
							: S;
				s((E) => ({ ...E, [p]: T }));
			}, []),
			m = b.useCallback(() => {
				s({});
			}, []);
		return w.jsxs("div", {
			className: "w-full min-w-0 space-y-6",
			dir: "rtl",
			children: [
				w.jsx("h2", {
					className:
						"text-xl font-bold tracking-tight text-foreground",
					children: "מחשבון ציון סופי לבגרות",
				}),
				w.jsxs("div", {
					className:
						"rounded-xl border border-border bg-card p-5 shadow-sm",
					children: [
						w.jsx("label", {
							className:
								"mb-2 block text-sm font-medium text-foreground",
							children: "בחר מקצוע",
						}),
						w.jsxs("select", {
							value: e,
							onChange: (p) => g(p.target.value),
							className:
								"w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
							children: [
								w.jsx("option", {
									value: "",
									children: "— בחר מקצוע —",
								}),
								r5.map((p) =>
									w.jsx(
										"option",
										{ value: p, children: p },
										p
									)
								),
							],
						}),
					],
				}),
				w.jsx(at, {
					mode: "wait",
					children:
						e &&
						u &&
						w.jsxs(
							Ce.div,
							{
								initial: { opacity: 0, y: 10 },
								animate: { opacity: 1, y: 0 },
								exit: { opacity: 0, y: -10 },
								transition: { duration: 0.2 },
								className:
									"rounded-xl border border-border bg-card p-5 shadow-sm",
								children: [
									w.jsx("label", {
										className:
											"mb-2 block text-sm font-medium text-foreground",
										children: "בחר מספר יחידות",
									}),
									w.jsx("div", {
										className: "flex flex-wrap gap-2",
										children: l.map((p) =>
											w.jsxs(
												"button",
												{
													onClick: () => y(p.units),
													className:
														"rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ".concat(
															n === p.units
																? "bg-primary text-primary-foreground shadow-sm"
																: "border border-border bg-secondary text-secondary-foreground hover:bg-accent"
														),
													children: [
														p.units,
														" יח״ל",
													],
												},
												p.units
											)
										),
									}),
								],
							},
							"units-".concat(e)
						),
				}),
				w.jsx(at, {
					mode: "wait",
					children:
						c &&
						w.jsxs(
							Ce.div,
							{
								initial: { opacity: 0, y: 10 },
								animate: { opacity: 1, y: 0 },
								exit: { opacity: 0, y: -10 },
								transition: { duration: 0.2 },
								className:
									"rounded-xl border border-border bg-card p-5 shadow-sm space-y-4",
								children: [
									w.jsxs("div", {
										className:
											"flex min-w-0 items-center justify-between gap-2",
										children: [
											w.jsxs("h3", {
												className:
													"min-w-0 break-words text-base font-semibold text-foreground",
												children: [
													"חישוב ציון סופי ב",
													e,
													" (",
													c.units,
													" יח״ל)",
												],
											}),
											w.jsxs("button", {
												onClick: m,
												className:
													"flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
												children: [
													w.jsx(wC, {
														className:
															"h-3.5 w-3.5",
													}),
													"נקה",
												],
											}),
										],
									}),
									w.jsx("p", {
										className:
											"text-xs text-muted-foreground",
										children:
											"הזנת את הציון לכל שאלון (0-100) — הציון הסופי יחושב אוטומטית לפי המשקלים.",
									}),
									w.jsx("div", {
										className: "space-y-3",
										children: c.exams.map((p) => {
											var S;
											const v = Math.round(
												p.weight * 100
											);
											return w.jsxs(
												"div",
												{
													children: [
														w.jsxs("label", {
															className:
																"mb-1 block text-sm font-medium text-foreground",
															children: [
																"שאלון ",
																p.id,
																" ",
																w.jsxs("span", {
																	className:
																		"text-muted-foreground",
																	children: [
																		"(",
																		v,
																		"%)",
																	],
																}),
															],
														}),
														w.jsx("input", {
															type: "number",
															min: 0,
															max: 100,
															dir: "rtl",
															value:
																(S = i[p.id]) !=
																null
																	? S
																	: "",
															onChange: (T) =>
																x(
																	p.id,
																	T.target
																		.value
																),
															placeholder: "ציון "
																.concat(
																	p.id,
																	" ("
																)
																.concat(
																	v,
																	"%)"
																),
															className:
																"w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground text-right placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors",
														}),
													],
												},
												p.id
											);
										}),
									}),
								],
							},
							c.subject
						),
				}),
				w.jsx(at, {
					children:
						c &&
						w.jsx(Ce.div, {
							initial: { opacity: 0, y: 8 },
							animate: { opacity: 1, y: 0 },
							exit: { opacity: 0 },
							className:
								"rounded-xl border p-6 shadow-sm transition-all duration-500 ".concat(
									d !== null
										? "border-primary/30 bg-primary/5 ".concat(
												o
													? "shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
													: ""
										  )
										: "border-border bg-card"
								),
							children: f
								? d !== null
									? w.jsx("div", {
											className: "space-y-4",
											children: w.jsxs("div", {
												className: "text-center",
												children: [
													w.jsx("p", {
														className:
															"text-sm text-muted-foreground mb-1",
														children: "ציון סופי",
													}),
													w.jsx(
														Ce.p,
														{
															initial: {
																scale: 0.8,
																opacity: 0,
															},
															animate: {
																scale: 1,
																opacity: 1,
															},
															className:
																"text-4xl font-bold tracking-tight text-foreground",
															children: d,
														},
														String(d)
													),
												],
											}),
									  })
									: null
								: w.jsx("p", {
										className:
											"text-center text-sm text-muted-foreground",
										children:
											"יש להשלים את כל הציונים כדי לחשב ציון סופי",
								  }),
						}),
				}),
			],
		});
	},
	o5 = [
		{ key: "sechem", label: "מחשבון סכמים", icon: mC },
		{ key: "bagrut", label: "ממוצע בגרות", icon: qv },
		{ key: "finalGrade", label: "ציון סופי", icon: vC },
	],
	a5 = () => {
		const [e, t] = b.useState("sechem");
		return w.jsxs("div", {
			className: "flex w-full min-w-0 flex-col",
			children: [
				w.jsx("div", {
					className:
						"mb-6 flex w-full min-w-0 gap-1 rounded-xl border border-border bg-card p-1 shadow-sm",
					children: o5.map((n) =>
						w.jsxs(
							"button",
							{
								onClick: () => t(n.key),
								className:
									"flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ".concat(
										e === n.key
											? "bg-primary text-primary-foreground shadow-sm"
											: "text-muted-foreground hover:bg-accent hover:text-foreground"
									),
								children: [
									w.jsx(n.icon, { className: "h-4 w-4" }),
									w.jsx("span", { children: n.label }),
								],
							},
							n.key
						)
					),
				}),
				w.jsx(at, {
					mode: "wait",
					children: w.jsxs(
						Ce.div,
						{
							initial: {
								opacity: 0,
								x: e === "sechem" ? -12 : 12,
							},
							animate: { opacity: 1, x: 0 },
							exit: { opacity: 0, x: e === "sechem" ? 12 : -12 },
							transition: {
								duration: 0.25,
								ease: [0.4, 0, 0.2, 1],
							},
							className: "w-full min-w-0",
							children: [
								e === "sechem" && w.jsx(Lj, {}),
								e === "bagrut" && w.jsx(t5, {}),
								e === "finalGrade" && w.jsx(s5, {}),
							],
						},
						e
					),
				}),
			],
		});
	},
	l5 = new jT(),
	u5 = () => (
		jj(),
		w.jsx("div", {
			className: "min-h-screen w-full overflow-x-hidden bg-background",
			children: w.jsx("main", {
				className: "mx-auto w-full min-w-0 max-w-2xl px-4 py-4",
				children: w.jsx(a5, {}),
			}),
		})
	),
	c5 = () =>
		w.jsx(DT, {
			client: l5,
			children: w.jsxs(HP, {
				children: [w.jsx(sA, {}), w.jsx(fE, {}), w.jsx(u5, {})],
			}),
		});
pv(document.getElementById("root")).render(w.jsx(c5, {}));
export { f5 as __vite_legacy_guard };
