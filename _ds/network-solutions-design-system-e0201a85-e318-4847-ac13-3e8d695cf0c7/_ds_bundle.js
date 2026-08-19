/* @ds-bundle: {"format":4,"namespace":"NetworkSolutionsDesignSystem_e0201a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"LinkArrow","sourcePath":"components/core/LinkArrow.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"DomainSearch","sourcePath":"components/forms/DomainSearch.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Notice","sourcePath":"components/surfaces/Notice.jsx"},{"name":"PromoBar","sourcePath":"components/surfaces/PromoBar.jsx"},{"name":"StatStrip","sourcePath":"components/surfaces/StatStrip.jsx"},{"name":"TldCard","sourcePath":"components/surfaces/TldCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"331131a917dc","components/core/Button.jsx":"a289ce7db97e","components/core/Eyebrow.jsx":"f2bec0ef87fb","components/core/LinkArrow.jsx":"ca7b5add9933","components/core/Rating.jsx":"7046c0512666","components/core/SectionHead.jsx":"a96bb85146c8","components/core/Wordmark.jsx":"35ee8aa0e3b1","components/forms/DomainSearch.jsx":"b6c7446b14b6","components/forms/Field.jsx":"5eac912e8d3c","components/navigation/Accordion.jsx":"5cf0eec502c8","components/navigation/SiteFooter.jsx":"ddde3255d3c1","components/navigation/Tabs.jsx":"3d8ba3150e4e","components/surfaces/Card.jsx":"691788419a5d","components/surfaces/Notice.jsx":"2732c75eec26","components/surfaces/PromoBar.jsx":"b2926404398e","components/surfaces/StatStrip.jsx":"881d0f263e95","components/surfaces/TldCard.jsx":"fe1d58db5f17","ui_kits/website/App.jsx":"74c34d3601f7","ui_kits/website/CartScreen.jsx":"eea741d5f4d9","ui_kits/website/HomeScreen.jsx":"ba496d109bea","ui_kits/website/PlansScreen.jsx":"7582b9791cf3","ui_kits/website/ResultsScreen.jsx":"0bb21df1de54","ui_kits/website/SiteChrome.jsx":"ca38deb87bad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NetworkSolutionsDesignSystem_e0201a = window.NetworkSolutionsDesignSystem_e0201a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  brand: 'ns-badge--brand',
  accent: 'ns-badge--accent',
  promo: 'ns-badge--promo',
  success: 'ns-badge--success',
  neutral: 'ns-badge--neutral'
};
function Badge({
  tone = 'brand',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ns-badge', TONE[tone] || TONE.brand, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  primary: '',
  accent: 'ns-btn--accent',
  secondary: 'ns-btn--secondary',
  ghost: 'ns-btn--ghost'
};
const SIZE = {
  sm: 'ns-btn--sm',
  md: '',
  lg: 'ns-btn--lg'
};
function Button({
  variant = 'primary',
  size = 'md',
  block,
  href,
  disabled,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ns-btn', VARIANT[variant] || '', SIZE[size] || '', block ? 'ns-btn--block' : '', className].filter(Boolean).join(' ');
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: disabled ? undefined : href,
    "aria-disabled": disabled || undefined
  }, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ns-eyebrow', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LinkArrow({
  href = '#',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ['ns-link-arrow', className].filter(Boolean).join(' '),
    href: href
  }, rest), children);
}
Object.assign(__ds_scope, { LinkArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkArrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rating({
  score = 4.3,
  count,
  outOf = 5,
  className = '',
  ...rest
}) {
  const full = Math.round(score);
  const stars = '★'.repeat(full) + '☆'.repeat(Math.max(0, outOf - full));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ns-rating', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "stars",
    "aria-hidden": "true"
  }, stars), /*#__PURE__*/React.createElement("span", {
    className: "score"
  }, score), count ? /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, count) : null);
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function SectionHead({
  eyebrow,
  title,
  body,
  align = 'start',
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: ['ns-section-head', className].filter(Boolean).join(' '),
    style: align === 'center' ? {
      marginInline: 'auto',
      textAlign: 'center'
    } : undefined
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", null, title) : null, body ? /*#__PURE__*/React.createElement("p", null, body) : null, children);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  href = '/',
  size = 'md',
  className = '',
  ...rest
}) {
  const fs = {
    sm: 'var(--ns-text-body)',
    md: 'var(--ns-text-h4)',
    lg: 'var(--ns-text-h3)'
  }[size];
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ['ns-wordmark', className].filter(Boolean).join(' '),
    href: href,
    style: {
      fontSize: fs
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), "Network Solutions");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/DomainSearch.jsx
try { (() => {
function DomainSearch({
  placeholder = 'Find your perfect domain name',
  buttonLabel = 'Search',
  buttonVariant = 'primary',
  label = 'Search for a domain',
  value,
  defaultValue,
  onChange,
  onSearch,
  className = ''
}) {
  const [inner, setInner] = React.useState(defaultValue || '');
  const v = value !== undefined ? value : inner;
  const submit = e => {
    e.preventDefault();
    onSearch && onSearch(v);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: ['ns-search', className].filter(Boolean).join(' '),
    onSubmit: submit,
    role: "search"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ns-visually-hidden",
    htmlFor: "ns-domain-search"
  }, label), /*#__PURE__*/React.createElement("input", {
    id: "ns-domain-search",
    type: "text",
    placeholder: placeholder,
    value: v,
    onChange: e => {
      value === undefined && setInner(e.target.value);
      onChange && onChange(e);
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: buttonVariant
  }, buttonLabel));
}
Object.assign(__ds_scope, { DomainSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DomainSearch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  id,
  help,
  error,
  hideLabel,
  className = '',
  ...input
}) {
  const fieldId = id || 'ns-field-' + (label || 'input').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const describedBy = error ? fieldId + '-err' : help ? fieldId + '-help' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ns-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: hideLabel ? 'ns-visually-hidden' : 'ns-label',
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "ns-input",
    id: fieldId,
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": describedBy
  }, input)), error ? /*#__PURE__*/React.createElement("p", {
    className: "ns-error",
    id: fieldId + '-err'
  }, error) : help ? /*#__PURE__*/React.createElement("p", {
    className: "ns-help",
    id: fieldId + '-help'
  }, help) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ns-accordion', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    open: i === defaultOpen
  }, /*#__PURE__*/React.createElement("summary", null, it.question), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, it.answer))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  legal = '© 1998–2026 Network Solutions, LLC. All rights reserved.',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ['ns-footer', 'ns-on-dark', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-footer-cols"
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h5", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#'
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, legal)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : inner;
  const select = id => {
    value === undefined && setInner(id);
    onChange && onChange(id);
  };
  const key = e => {
    const i = items.findIndex(t => t.id === active);
    if (e.key === 'ArrowRight') select(items[(i + 1) % items.length].id);
    if (e.key === 'ArrowLeft') select(items[(i - 1 + items.length) % items.length].id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-tabs",
    role: "tablist",
    onKeyDown: key
  }, items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "ns-tab",
    role: "tab",
    id: 'tab-' + t.id,
    "aria-controls": 'panel-' + t.id,
    "aria-selected": t.id === active,
    onClick: () => select(t.id)
  }, t.label))), items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "ns-tabpanel",
    role: "tabpanel",
    id: 'panel-' + t.id,
    "aria-labelledby": 'tab-' + t.id,
    hidden: t.id !== active
  }, t.content)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  default: '',
  accent: 'ns-card--accent',
  inverse: 'ns-card--inverse ns-on-dark'
};
function Card({
  tone = 'default',
  interactive,
  badge,
  title,
  children,
  footer,
  className = '',
  ...rest
}) {
  const cls = ['ns-card', TONE[tone] || '', interactive ? 'ns-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("article", _extends({
    className: cls
  }, rest), badge, title ? /*#__PURE__*/React.createElement("h4", null, title) : null, typeof children === 'string' ? /*#__PURE__*/React.createElement("p", null, children) : children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "ns-card__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  info: 'ns-notice--info',
  success: 'ns-notice--success',
  warning: 'ns-notice--warning',
  error: 'ns-notice--error'
};
function Notice({
  tone = 'info',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ns-notice', TONE[tone] || TONE.info, className].filter(Boolean).join(' '),
    role: tone === 'error' ? 'alert' : undefined
  }, rest), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Notice.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PromoBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoBar({
  children,
  linkLabel,
  href = '#',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ns-promobar', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", null, children), linkLabel ? /*#__PURE__*/React.createElement("a", {
    href: href
  }, linkLabel) : null);
}
Object.assign(__ds_scope, { PromoBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PromoBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatStrip({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: ['ns-stats', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "figure"
  }, it.figure), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, it.caption))));
}
Object.assign(__ds_scope, { StatStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatStrip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TldCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TldCard({
  tld,
  claim,
  price,
  href = '#',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ['ns-tld-card', className].filter(Boolean).join(' '),
    href: href
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tld"
  }, tld), claim ? /*#__PURE__*/React.createElement("span", {
    className: "claim"
  }, claim) : null, price ? /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, price) : null);
}
Object.assign(__ds_scope, { TldCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TldCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  SiteFooter
} = window.NetworkSolutionsDesignSystem_e0201a;
function App() {
  const [screen, setScreen] = React.useState('home');
  const [query, setQuery] = React.useState('riverbendplants.com');
  const [cart, setCart] = React.useState([]);
  const add = n => setCart(c => c.includes(n) ? c : [...c, n]);
  const remove = n => setCart(c => c.filter(x => x !== n));
  const search = q => {
    setQuery(q || 'riverbendplants.com');
    setScreen('results');
    window.scrollTo(0, 0);
  };
  const nav = s => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SitePromo, null), /*#__PURE__*/React.createElement(SiteHeader, {
    onNav: nav,
    cart: cart.length
  }), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onSearch: search,
    onNav: nav
  }), screen === 'results' && /*#__PURE__*/React.createElement(ResultsScreen, {
    query: query,
    onSearch: search,
    onAdd: add,
    inCart: cart
  }), screen === 'plans' && /*#__PURE__*/React.createElement(PlansScreen, {
    onAdd: add,
    inCart: cart
  }), screen === 'cart' && /*#__PURE__*/React.createElement(CartScreen, {
    items: cart,
    onRemove: remove,
    onNav: nav
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: FOOTER_COLS
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartScreen.jsx
try { (() => {
const {
  Button,
  Field,
  Notice,
  LinkArrow,
  Badge
} = window.NetworkSolutionsDesignSystem_e0201a;
const PRICE = {
  'riverbendplants.net': 14.99,
  'riverbendplants.store': 3.99,
  'riverbendplants.ai': 79.99,
  'getriverbendplants.com': 11.99,
  'riverbend.plants': 24.99,
  'Starter hosting': 59.88,
  'Business hosting': 107.88,
  'VPS hosting': 359.88
};
function CartScreen({
  items,
  onRemove,
  onNav
}) {
  const total = items.reduce((s, i) => s + (PRICE[i] || 11.99), 0);
  return /*#__PURE__*/React.createElement("main", {
    className: "ns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(300px,1fr)',
      gap: 'var(--ns-space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--ns-text-h1)'
    }
  }, "Your cart"), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-6)'
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "info"
  }, "Nothing here yet. Search for a domain to get started."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('home')
  }, "Find your domain"))) : /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--ns-space-6) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--ns-space-3)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ns-space-4)',
      padding: 'var(--ns-space-5) var(--ns-space-6)',
      border: '1px solid var(--ns-border-subtle)',
      borderRadius: 'var(--ns-radius-lg)',
      background: 'var(--ns-white)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ns-font-display)',
      fontWeight: 600,
      fontSize: 'var(--ns-text-h4)'
    }
  }, i), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ns-text-sm)',
      color: 'var(--ns-text-muted)'
    }
  }, "1-year term \xB7 auto-renew on")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontWeight: 700
    }
  }, "$", (PRICE[i] || 11.99).toFixed(2)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => onRemove(i)
  }, "Remove")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-8)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Have a promo code?",
    placeholder: "Enter code",
    help: "Codes apply to the first term only."
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "ns-card",
    style: {
      padding: 'var(--ns-space-8)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--ns-text-h4)'
    }
  }, "Order summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--ns-text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--ns-text-sm)',
      color: 'var(--ns-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "WHOIS privacy"), /*#__PURE__*/React.createElement("span", null, "Included")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      paddingTop: 'var(--ns-space-3)',
      borderTop: '1px solid var(--ns-border-subtle)',
      marginTop: 'var(--ns-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Due today"), /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ns-card__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    disabled: items.length === 0
  }, "Continue to checkout")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ns-space-2)',
      alignItems: 'center',
      marginTop: 'var(--ns-space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "30-day guarantee"), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, "Keep shopping")))));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Eyebrow,
  SectionHead,
  Button,
  LinkArrow,
  Badge,
  Rating,
  Card,
  TldCard,
  StatStrip,
  DomainSearch,
  Tabs,
  Accordion
} = window.NetworkSolutionsDesignSystem_e0201a;
function HomeScreen({
  onSearch,
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "ns-on-dark",
    style: {
      background: 'var(--ns-neutral-900)',
      padding: 'var(--ns-space-20) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container",
    style: {
      maxWidth: 860,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The complete online solution"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--ns-text-display-1)',
      color: 'var(--ns-white)',
      marginTop: 'var(--ns-space-4)',
      lineHeight: 'var(--ns-leading-tight)'
    }
  }, "One place to build online"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--ns-space-5)',
      color: 'var(--ns-neutral-300)',
      fontSize: 'var(--ns-text-body-lg)',
      maxWidth: '56ch',
      marginInline: 'auto'
    }
  }, "Start with the right name, then add the hosting, email, and security that keep it running."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-10)'
    }
  }, /*#__PURE__*/React.createElement(DomainSearch, {
    buttonVariant: "accent",
    placeholder: "Find your perfect domain name",
    onSearch: onSearch
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-6)',
      display: 'flex',
      gap: 'var(--ns-space-6)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    score: 4.3,
    count: "15,677 reviews"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ns-text-sm)',
      color: 'var(--ns-neutral-400)'
    }
  }, ".com $11.99 first year \xB7 free WHOIS privacy")))), /*#__PURE__*/React.createElement("section", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement(StatStrip, {
    items: [{
      figure: '1st',
      caption: 'Domain registrar in the world'
    }, {
      figure: '40+',
      caption: 'Years in business'
    }, {
      figure: '5.4M+',
      caption: 'Domains managed'
    }, {
      figure: '2M+',
      caption: 'Customers'
    }, {
      figure: '24/7',
      caption: 'Expert support'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    className: "ns-section",
    style: {
      background: 'var(--ns-surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Domains",
    title: "Start with a name that fits",
    body: "Search hundreds of extensions and register in under a minute."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ns-grid ns-grid--4",
    style: {
      marginTop: 'var(--ns-space-8)'
    }
  }, /*#__PURE__*/React.createElement(TldCard, {
    tld: ".com",
    claim: "Get your .com domain",
    price: "Just $11.99 the first year"
  }), /*#__PURE__*/React.createElement(TldCard, {
    tld: ".ai",
    claim: "Claim your .ai domain",
    price: "Priced at cost \u2014 no extra fees"
  }), /*#__PURE__*/React.createElement(TldCard, {
    tld: ".site",
    claim: "Get a personal domain",
    price: "$1.99 the first year"
  }), /*#__PURE__*/React.createElement(TldCard, {
    tld: ".store",
    claim: "Open your online store",
    price: "$3.99 the first year"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "ns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Solutions",
    title: "Everything after the name",
    body: "Four product areas, one account, one bill."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'domains',
      label: 'Domains + Identity',
      content: /*#__PURE__*/React.createElement(ProductGrid, {
        onNav: onNav,
        rows: [['AI Domain Generator', 'Describe your business and get names that fit your brand.'], ['WHOIS privacy', 'Keep your contact details off the public record.'], ['Domain transfer', 'Move a domain in and add a full year of registration.']]
      })
    }, {
      id: 'sites',
      label: 'Websites + eCommerce',
      content: /*#__PURE__*/React.createElement(ProductGrid, {
        onNav: onNav,
        rows: [['Website builder', 'Pick a layout, drop in your copy, publish the same day.'], ['Online store', 'Product pages, payments, and orders in one place.'], ['Pro services', 'Hand the build to a team that ships sites for a living.']]
      })
    }, {
      id: 'hosting',
      label: 'Hosting + Email',
      content: /*#__PURE__*/React.createElement(ProductGrid, {
        onNav: onNav,
        rows: [['Web hosting', 'Shared plans that scale to VPS when traffic grows.'], ['Business email', 'Mail on your own domain, with calendar and contacts.'], ['Managed WordPress', 'Updates, backups, and caching handled for you.']]
      })
    }, {
      id: 'security',
      label: 'Security',
      content: /*#__PURE__*/React.createElement(ProductGrid, {
        onNav: onNav,
        rows: [['SSL certificates', 'Encrypt traffic and show the padlock on every page.'], ['Malware monitoring', 'Daily scans with automatic clean-up.'], ['Website backup', 'Restore any day from the last 30.']]
      })
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    className: "ns-section",
    style: {
      background: 'var(--ns-surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container ns-grid ns-grid--3"
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    badge: /*#__PURE__*/React.createElement(Badge, null, "Domains"),
    title: "AI Domain Generator",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onSearch('riverbendplants.com');
      }
    }, "Find a domain")
  }, "Describe your business and get name suggestions that fit your brand."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    tone: "accent",
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Save $70"),
    title: "AI All-Access Pack",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      style: {
        color: 'var(--ns-neutral-900)'
      }
    }, "Get AI pack")
  }, "Compare answers from every leading model side by side, on one bill."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    tone: "inverse",
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Pro services"),
    title: "Let our experts build it",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#"
    }, "Get expert help")
  }, "Hand the work to a team that ships sites for a living."))), /*#__PURE__*/React.createElement("section", {
    className: "ns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container",
    style: {
      maxWidth: 'var(--ns-container-narrow)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--ns-text-h1)'
    }
  }, "Questions, answered"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-6)'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Why choose Network Solutions?',
      answer: 'Domains, hosting, email, and marketing sit in one account, so there’s one login and one bill instead of four.'
    }, {
      question: 'How do I get started?',
      answer: 'Search for a domain, pick a plan, and check out. You can add hosting or email at any point afterward.'
    }, {
      question: 'Do I need technical skills?',
      answer: 'No. The builder and hosting plans are designed for people without a technical background, and support is available around the clock.'
    }, {
      question: 'What happens when my domain renews?',
      answer: 'Renewal prices are shown at checkout and in your account. You can turn on auto-renew so nothing lapses.'
    }]
  })))));
}
function ProductGrid({
  rows,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ns-grid ns-grid--3"
  }, rows.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    title: t,
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('plans');
      }
    }, "Learn more")
  }, d)));
}
Object.assign(window, {
  HomeScreen,
  ProductGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlansScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionHead,
  Notice,
  Tabs
} = window.NetworkSolutionsDesignSystem_e0201a;
const PLANS = [{
  name: 'Starter',
  price: '$4.99',
  per: '/mo',
  blurb: 'One site, room to learn.',
  feats: ['1 website', '30 GB SSD storage', 'Free SSL', 'Email forwarding']
}, {
  name: 'Business',
  price: '$8.99',
  per: '/mo',
  blurb: 'The plan most customers pick.',
  feats: ['Unlimited websites', '100 GB SSD storage', 'Free SSL + daily backup', 'Business email included', 'Malware monitoring'],
  best: true
}, {
  name: 'VPS',
  price: '$29.99',
  per: '/mo',
  blurb: 'Dedicated resources for heavier traffic.',
  feats: ['4 vCPU · 8 GB RAM', '200 GB NVMe storage', 'Root access', 'Priority support']
}];
function PlanCard({
  p,
  onAdd,
  inCart
}) {
  const best = p.best;
  return /*#__PURE__*/React.createElement("div", {
    className: best ? 'ns-card ns-card--inverse ns-on-dark' : 'ns-card',
    style: {
      padding: 'var(--ns-space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ns-space-3)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--ns-text-h3)'
    }
  }, p.name), best ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Best value") : null), /*#__PURE__*/React.createElement("p", null, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 'var(--ns-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ns-font-display)',
      fontSize: 'var(--ns-text-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ns-tracking-tight)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ns-text-muted)'
    }
  }, p.per)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--ns-space-4) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--ns-space-2)'
    }
  }, p.feats.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 'var(--ns-space-3)',
      fontSize: 'var(--ns-text-sm)',
      color: 'var(--ns-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: best ? 'var(--ns-lime-300)' : 'var(--ns-success-600)',
      fontWeight: 700
    }
  }, "\u2713"), x))), /*#__PURE__*/React.createElement("div", {
    className: "ns-card__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: best ? 'accent' : 'primary',
    block: true,
    onClick: () => onAdd(p.name + ' hosting')
  }, inCart.includes(p.name + ' hosting') ? 'In cart' : 'Choose ' + p.name)));
}
function PlansScreen({
  onAdd,
  inCart
}) {
  const grid = /*#__PURE__*/React.createElement("div", {
    className: "ns-grid ns-grid--3",
    style: {
      marginTop: 'var(--ns-space-8)',
      alignItems: 'stretch'
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.name,
    p: p,
    onAdd: onAdd,
    inCart: inCart
  })));
  return /*#__PURE__*/React.createElement("main", {
    className: "ns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Hosting",
    title: "Plans that grow with the site",
    body: "Every plan includes free SSL, a 30-day money-back guarantee, and 24/7 support."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'm',
      label: 'Monthly',
      content: grid
    }, {
      id: 'y',
      label: 'Yearly — save 20%',
      content: grid
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-8)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "warning"
  }, "Introductory prices apply to the first term. Renewal pricing is shown at checkout."))));
}
Object.assign(window, {
  PlansScreen,
  PlanCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlansScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResultsScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Notice,
  DomainSearch,
  Card,
  LinkArrow
} = window.NetworkSolutionsDesignSystem_e0201a;
const SUGGESTIONS = [{
  name: 'riverbendplants.net',
  price: '$14.99',
  note: 'first year'
}, {
  name: 'riverbendplants.store',
  price: '$3.99',
  note: 'first year'
}, {
  name: 'riverbendplants.ai',
  price: '$79.99',
  note: 'first year'
}, {
  name: 'getriverbendplants.com',
  price: '$11.99',
  note: 'first year'
}, {
  name: 'riverbend.plants',
  price: '$24.99',
  note: 'first year'
}];
function ResultsScreen({
  query,
  onSearch,
  onAdd,
  inCart
}) {
  const taken = query.trim().toLowerCase() === 'riverbendplants.com';
  return /*#__PURE__*/React.createElement("main", {
    className: "ns-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(DomainSearch, {
    defaultValue: query,
    onSearch: onSearch
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--ns-space-8)',
      display: 'grid',
      gap: 'var(--ns-space-4)',
      maxWidth: 920
    }
  }, taken ? /*#__PURE__*/React.createElement(Notice, {
    tone: "error"
  }, query, " is taken. Try one of the suggestions below.") : /*#__PURE__*/React.createElement(Notice, {
    tone: "success"
  }, query || 'yourdomain.com', " is available. It\u2019s yours for $11.99 the first year."), /*#__PURE__*/React.createElement(Notice, {
    tone: "info"
  }, "Transfers add a full year to your registration on most domain types.")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--ns-text-h2)',
      marginTop: 'var(--ns-space-10)'
    }
  }, "Available now"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--ns-space-5) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--ns-space-3)',
      maxWidth: 920
    }
  }, SUGGESTIONS.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ns-space-4)',
      padding: 'var(--ns-space-4) var(--ns-space-6)',
      border: '1px solid var(--ns-border-subtle)',
      borderRadius: 'var(--ns-radius-lg)',
      background: 'var(--ns-white)',
      boxShadow: 'var(--ns-shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ns-font-display)',
      fontWeight: 600,
      fontSize: 'var(--ns-text-h4)'
    }
  }, s.name), s.name.endsWith('.ai') ? /*#__PURE__*/React.createElement(Badge, {
    tone: "promo"
  }, "In demand") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, s.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ns-text-muted)',
      fontSize: 'var(--ns-text-sm)'
    }
  }, " ", s.note)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: inCart.includes(s.name) ? 'secondary' : 'primary',
    onClick: () => onAdd(s.name)
  }, inCart.includes(s.name) ? 'In cart' : 'Add to cart')))), /*#__PURE__*/React.createElement("div", {
    className: "ns-grid ns-grid--3",
    style: {
      marginTop: 'var(--ns-space-12)',
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Add business email",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#"
    }, "See email plans")
  }, "Mail on your own domain from $1.99/mo."), /*#__PURE__*/React.createElement(Card, {
    title: "Add an SSL certificate",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#"
    }, "Compare SSL")
  }, "Encrypt traffic and show the padlock."), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    title: "Bundle and save",
    footer: /*#__PURE__*/React.createElement(LinkArrow, {
      href: "#",
      style: {
        color: 'var(--ns-neutral-900)'
      }
    }, "See bundles")
  }, "Domain, hosting, and email together for less."))));
}
Object.assign(window, {
  ResultsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Wordmark,
  Button,
  PromoBar,
  SiteFooter
} = window.NetworkSolutionsDesignSystem_e0201a;
const NAV = ['Domains', 'Websites', 'Hosting', 'Email', 'Security', 'Marketing'];
function SiteHeader({
  onNav,
  cart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 300,
      background: 'var(--ns-white)',
      borderBottom: '1px solid var(--ns-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ns-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ns-space-8)',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "ns-wordmark",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Network Solutions"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--ns-space-5)',
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n === 'Hosting' ? 'plans' : 'home');
    },
    style: {
      fontSize: 'var(--ns-text-sm)',
      fontWeight: 600,
      color: 'var(--ns-text-primary)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('cart');
    },
    style: {
      fontSize: 'var(--ns-text-sm)',
      fontWeight: 600,
      color: 'var(--ns-text-primary)',
      textDecoration: 'none'
    }
  }, "Cart (", cart, ")"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => onNav('plans')
  }, "Sign in")));
}
const FOOTER_COLS = [{
  title: 'Products',
  links: [{
    label: 'Domain names'
  }, {
    label: 'Website builder'
  }, {
    label: 'Web hosting'
  }, {
    label: 'Business email'
  }, {
    label: 'SSL certificates'
  }]
}, {
  title: 'Support',
  links: [{
    label: 'Customer service'
  }, {
    label: 'Accessibility'
  }, {
    label: 'Report abuse'
  }, {
    label: 'Renewal pricing'
  }]
}, {
  title: 'Resources',
  links: [{
    label: 'Blog'
  }, {
    label: 'WHOIS search'
  }, {
    label: 'Site map'
  }, {
    label: 'Domain transfer'
  }]
}, {
  title: 'Company',
  links: [{
    label: 'About us'
  }, {
    label: 'Careers'
  }, {
    label: 'Legal'
  }, {
    label: 'Privacy'
  }]
}];
function SitePromo({
  onNav
}) {
  return /*#__PURE__*/React.createElement(PromoBar, {
    linkLabel: "See the pack",
    href: "#"
  }, "Every leading AI model, one subscription \u2014 $20/mo");
}
Object.assign(window, {
  SiteHeader,
  SitePromo,
  FOOTER_COLS,
  SiteFooterCols: FOOTER_COLS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LinkArrow = __ds_scope.LinkArrow;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.DomainSearch = __ds_scope.DomainSearch;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.PromoBar = __ds_scope.PromoBar;

__ds_ns.StatStrip = __ds_scope.StatStrip;

__ds_ns.TldCard = __ds_scope.TldCard;

})();
