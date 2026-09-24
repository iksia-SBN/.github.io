
const COLORS = ['#0088d0', '#2cc1e2', '#1655a5', '#f4963e'];
const BG = '#f5f5ff';

// --- 棒のマス ---
const BAR_BASE = 0.2;    // 棒のマスになる確率の下限(小さいマス)
const BAR_SLOPE = 0.5;   // 大きいマスほど棒のマスになりやすい度合い
const BAR_T = 20;        // 基準の太さ(折れる棒・20×20の円などに使う一定値)
const BAR_TMIN = 12;     // 棒の太さの下限(12〜20の連続ランダム。折れる棒・アーチは20固定)
const BAR_TMAX = 20;     // 棒の太さの上限
const BAR_G = 6;         // 棒どうしの間隔(一定)
const BAR_LMIN = 20;     // 棒の長さの下限(一定)
const BAR_LMAX = 120;    // 棒の長さの上限(一定)
const BAR_BIAS = 2;      // 1=均等 / 大きいほど長い棒が出やすい
const BAR_SKIP = 0.06;   // 棒のマス内で、空きにするマスの確率
const CIRCLE_P = 0.5;    // 20×20の円が1つ入るマスの割合(1マスに1つか0個)
const ELLIPSE_P = 0.2;   // 楕円パターンが入るマスの割合(入る大きさのマスのみ)
const ELL_SHORT = 66;    // 楕円(角丸長方形)の短径
const ELL_LONG = 74;     // 楕円(角丸長方形)の長径
const ELL_RADIUS = 50;   // 楕円のborder-radius(72×80では半径36に収まる)
const ELL_T = 15;        // 楕円の周と長軸の棒の太さ
const ELL_COLOR = '#1655a5'; // 楕円の色(固定)

// --- 折れる棒 ---
const BEND_P = 0.05;     // 棒が45°折れる確率(各棒。3連結の真ん中は折れない)
const BEND_D = 13;       // 折れている段階の長さは BEND_D×√2 (=13√2)
const BEND_AREA = 2000;  // 棒1本あたりのおおよその面積(px²)。マス内の棒の数の見積もりに使う
const ARCH_SIZE = 72;    // アーチ(72×72)
const ARCH_T = 15;       // アーチの棒の太さ(固定)
const ARCH_R = 24;       // アーチの上の角の丸み(大きいほど半円に近く、小さいほど緩やか)
const ARCH_P = 0.2;      // アーチが入るマスの割合(入る大きさのマスのみ)
const ARCH_DOT_P = 0.5;  // アーチの口の側に20×20の円が入る確率(円はアーチと同じ色)
const DISC_PMAX = 0.8;   // 3連結の上に円が乗る確率の最大値(連結の長さ120pxのとき)。短いほど低く、長いほど高い(円の直径以上の長さのときのみ)
const DISC_HALO = 5;     // 円の外周のf5f5ffの縁の幅
const DISC_ANGULAR_P = 0.35; // 3連結の上の円が、丸ではなく角張った形(正方形)になる確率
const STACK_MAX = 3;     // 平行な棒(連結かどうかを問わない)が長い辺の方向に並ぶ最大本数
const REPEAT_P = 0.3;    // 連結が発生したとき、その端に同じ本数・同じ色の連結が繰り返される確率
const REPEAT_MAXLEN = 60; // 繰り返した連結の長さの上限
const SPLIT_END_P = 0.35; // 長さ100px以上の連結の、どちらかの端30pxが分断される確率
const SPLIT_END_LEN = 30;
const SPLIT_END_COLOR = '#1655a5'; // 分断された末端の色(固定)
const RECT2_T = 50;      // 太さ50×長さ120の長方形パターン
const RECT2_L = 120;
const RECT2_P = 0.15;    // このパターンが入るマスの割合(入る大きさのマスのみ)
const RECT2_ROUND_R = 25; // border-radiusを適用する側の半径(太さの半分、丸い端になる)
const RECT2_SECTOR_R = 48; // 扇形の半径
const TRI_P = 0.2;       // 直角二等辺三角形が入るマスの割合(入る大きさのマスのみ)
const TRI_MIN = 64;      // 三角形の等辺の長さ(64〜96)
const TRI_MAX = 96;
const TRI_D_MIN = 15;    // 直角から円の接点までの距離(15〜30)
const TRI_D_MAX = 30;
const TRI_CIRCLE = 30;   // 三角形の内側のf5f5ffの円の直径
const TRI_SHIFT = 2;     // 円の中心を、接点があった辺の方向へこの分だけ動かす
const TRI_R_ACUTE = 6;   // 鋭角のborder-radius(適用されることがある)
const TRI_R_CUT = 3.5;   // 切り取りの周りの角のborder-radius(適用されることがある)
const FOLD_P = 0.5;      // 二色分割の境界線が直線のとき、直角に折れる確率
const MID_SPLIT_P = 0.3; // 3連結の真ん中の棒が、斜めの境界線で2色に分かれる確率
const THICK_T = 40;      // 太い棒のパターンの太さ(固定)
const THICK_P = 0.05;    // 棒が太い棒のパターンになる確率(3連結の真ん中・折れる棒にはならない)
const COLOR_MAIN = '#0088d0';
const COLOR_MAIN_WEIGHT = 1;   // 0088d0の出やすさは、他の色の1/4
const BEND_MODE = 'elbow'; // 'elbow'=同じ向きに2回折れて90° / 'jog'=行って戻る(平行にずれる)
const CORNER_P = 0.5;    // 棒の角を丸める確率(4つの角それぞれ独立)
const DIFF_P = 0.95;     // 隣り合う棒の色を変える確率

// --- 棒以外のマス ---
const PLATE_P = 0.3;     // マス全体を単色の板にする確率

const cv = document.getElementById('c');
const ctx = cv.getContext('2d');

let W = 0, H = 0, dpr = 1, seed = 1;
let S = 180, GUT = 8;    // マスの基準サイズ / マス間の余白
let xCuts = [], yCuts = []; // マス分割で実際に使った境界線の絶対座標(辺を揃えるために使う)
const EDGE_SNAP_P = 0.4;  // 新しい境界線を、既存の境界線に揃える確率
let cells = [];

// ---------- 乱数(seed固定で再現できる) ----------
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let R = Math.random;
const rand = (a, b) => a + (b - a) * R();
const ri = (a, b) => Math.floor(rand(a, b + 1));
const pick = a => a[Math.floor(R() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function wpick(items) {
  let t = 0;
  for (const it of items) t += it[1];
  let r = R() * t;
  for (const it of items) { r -= it[1]; if (r < 0) return it[0]; }
  return items[0][0];
}
// 色を選ぶときは常にこちらを使う: 0088d0だけ出やすさが他の1/4
function pickColor(arr) {
  return wpick(arr.map(c => [c, c === COLOR_MAIN ? COLOR_MAIN_WEIGHT : COLOR_MAIN_WEIGHT * 4]));
}

// ---------- 描画ヘルパー ----------
function rrSub(x, y, w, h, r) {
  r = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function rr(x, y, w, h, r) {
  ctx.beginPath();
  rrSub(x, y, w, h, r);
}
// 4つの角の半径を個別に指定できる角丸四角
function rrc(x, y, w, h, tl, tr, br, bl) {
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y);
  ctx.arcTo(x + w, y, x + w, y + tr, tr);
  ctx.lineTo(x + w, y + h - br);
  ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
  ctx.lineTo(x + bl, y + h);
  ctx.arcTo(x, y + h, x, y + h - bl, bl);
  ctx.lineTo(x, y + tl);
  ctx.arcTo(x, y, x + tl, y, tl);
  ctx.closePath();
}
function disc(cx, cy, r) {
  if (r <= 0) return;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
}

// ---------- 折れる棒の幾何 ----------
// 中心線(折れ線)を、太さTの多角形にする(折れ目はマイター、端は平ら)
// 頂点: 左側 0..n-1、続いて右側(終点→始点の順)
function strokePolygon(pts, T) {
  const n = pts.length, hw = T / 2;
  const nor = [];
  for (let k = 0; k < n - 1; k++) {
    const dx = pts[k + 1][0] - pts[k][0], dy = pts[k + 1][1] - pts[k][1];
    const len = Math.hypot(dx, dy);
    nor.push([-dy / len, dx / len]);
  }
  const at = (k, sign) => {
    let nx, ny;
    if (k === 0) { nx = nor[0][0]; ny = nor[0][1]; }
    else if (k === n - 1) { nx = nor[n - 2][0]; ny = nor[n - 2][1]; }
    else {
      const a = nor[k - 1], b = nor[k];
      const d = 1 + a[0] * b[0] + a[1] * b[1];
      nx = (a[0] + b[0]) / d; ny = (a[1] + b[1]) / d;
    }
    return [pts[k][0] + sign * hw * nx, pts[k][1] + sign * hw * ny];
  };
  const left = [], right = [];
  for (let k = 0; k < n; k++) { left.push(at(k, 1)); right.push(at(k, -1)); }
  return left.concat(right.reverse());
}

// 多角形の内側にあるピクセル(中心が内側)を、行ごとの[y, x0, x1)で返す
function polySpans(V) {
  let minY = Infinity, maxY = -Infinity;
  for (const p of V) { minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); }
  const spans = [];
  for (let y = Math.floor(minY); y < Math.ceil(maxY); y++) {
    const yc = y + 0.5;
    const xs = [];
    for (let i = 0; i < V.length; i++) {
      const a = V[i], b = V[(i + 1) % V.length];
      if ((a[1] <= yc) !== (b[1] <= yc)) xs.push(a[0] + (yc - a[1]) * (b[0] - a[0]) / (b[1] - a[1]));
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const xa = Math.ceil(xs[k] - 0.5), xb = Math.ceil(xs[k + 1] - 0.5);
      if (xb > xa) spans.push([y, xa, xb]);
    }
  }
  return spans;
}

function distSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(ax + t * dx - px, ay + t * dy - py);
}

// 頂点ごとの角丸半径を指定できる多角形パス
function polyPath(V, rad) {
  const n = V.length;
  ctx.beginPath();
  ctx.moveTo((V[n - 1][0] + V[0][0]) / 2, (V[n - 1][1] + V[0][1]) / 2);
  for (let i = 0; i < n; i++) {
    const nx = V[(i + 1) % n];
    ctx.arcTo(V[i][0], V[i][1], (V[i][0] + nx[0]) / 2, (V[i][1] + nx[1]) / 2, rad[i]);
  }
  ctx.closePath();
}

// 棒(横: 左上(bx,by)・長さL1 / 縦も同様)の端から、45°で2回折れる形にする
//   e=1: 右(下)の端で折れる / e=0: 左(上)の端で折れる、s=±1: 折れる側
//   一度折れている段階(斜め)の長さは BEND_D×√2、折れる前(L1)と折れたあと(L2)の長さは別々
function bentShape(horizontal, bx, by, L1, e, s, L2) {
  const T = BAR_T, D = BEND_D;
  let p0, a, l;
  if (horizontal) {
    const yc = by + T / 2;
    p0 = e === 1 ? [bx, yc] : [bx + L1, yc];
    a = e === 1 ? [1, 0] : [-1, 0];
    l = [0, s];
  } else {
    const xc = bx + T / 2;
    p0 = e === 1 ? [xc, by] : [xc, by + L1];
    a = e === 1 ? [0, 1] : [0, -1];
    l = [s, 0];
  }
  const P = (u, v) => [p0[0] + u * a[0] + v * l[0], p0[1] + u * a[1] + v * l[1]];
  const pts = [P(0, 0), P(L1, 0), P(L1 + D, D),
    BEND_MODE === 'jog' ? P(L1 + D + L2, D) : P(L1 + D, D + L2)];
  const V = strokePolygon(pts, T);
  const parts = [];
  for (let k = 0; k < 3; k++) {
    const q = [V[k], V[k + 1], V[6 - k], V[7 - k]];
    const xs = q.map(p => p[0]), ys = q.map(p => p[1]);
    const x0 = Math.min(...xs), y0 = Math.min(...ys);
    parts.push({ x: x0, y: y0, w: Math.max(...xs) - x0, h: Math.max(...ys) - y0 });
  }
  return { kind: 'bent', V, parts, horizontal };
}

// ---------- 直角二等辺三角形(棒のマスのパターン) ----------
// 局所座標(u,v): 直角の頂点が原点、2つの等辺がu軸・v軸、斜辺は u+v=S。
// 盤面の座標へは、直角がどの角にくるか(corner: 0=左上 1=右上 2=左下 3=右下)で写す
function triMap(x, y, S, corner, u, v) {
  return corner === 0 ? [x + u, y + v]
       : corner === 1 ? [x + S - u, y + v]
       : corner === 2 ? [x + u, y + S - v]
       :                [x + S - u, y + S - v];
}
// 三角形の外側6pxの領域(棒はここに入れない)。脚の側は6px、斜辺は斜辺と平行に6px外、鋭角の先は6px手前で切る
function triExclusion(x, y, S, corner) {
  const g = BAR_G, k = g * (Math.SQRT2 - 1);
  return [[-g, -g], [S + g, -g], [S + g, k], [k, S + g], [-g, S + g]]
    .map(([u, v]) => triMap(x, y, S, corner, u, v));
}
function triHull(b) {
  return [[0, 0], [b.S, 0], [0, b.S]].map(([u, v]) => triMap(b.x, b.y, b.S, b.corner, u, v));
}

// 凸多角形の切断: n·p <= c の側(keepInside)か n·p >= c の側を残す
function clipHalf(poly, nx, ny, c, keepInside) {
  const res = [];
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const a = poly[i], b = poly[(i + 1) % n];
    const da = nx * a[0] + ny * a[1] - c, db = nx * b[0] + ny * b[1] - c;
    const ina = keepInside ? da <= 0 : da >= 0, inb = keepInside ? db <= 0 : db >= 0;
    if (ina) res.push(a);
    if (ina !== inb) {
      const t = da / (da - db);
      res.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]);
    }
  }
  return res;
}
function polyArea(P) {
  let a = 0;
  for (let i = 0; i < P.length; i++) { const p = P[i], q = P[(i + 1) % P.length]; a += p[0] * q[1] - q[0] * p[1]; }
  return a / 2;
}
// 凸多角形Pのうち、凸多角形Eの外側にある部分を、重ならない断片に分けて返す
function clipOutside(P, E) {
  const cx = E.reduce((s, p) => s + p[0], 0) / E.length, cy = E.reduce((s, p) => s + p[1], 0) / E.length;
  const pieces = [];
  let rem = P;
  for (let i = 0; i < E.length && rem.length >= 3; i++) {
    const a = E[i], b = E[(i + 1) % E.length];
    let nx = b[1] - a[1], ny = a[0] - b[0];
    const len = Math.hypot(nx, ny); nx /= len; ny /= len;
    if (nx * (cx - a[0]) + ny * (cy - a[1]) > 0) { nx = -nx; ny = -ny; }   // 外向きの法線
    const c = nx * a[0] + ny * a[1];
    const outside = clipHalf(rem, nx, ny, c, false);
    if (outside.length >= 3 && Math.abs(polyArea(outside)) > 1e-6) pieces.push(outside);
    rem = clipHalf(rem, nx, ny, c, true);
  }
  return pieces;
}
// 2つの凸多角形が重なるか(分離軸)
function convexOverlap(P, Q) {
  for (const poly of [P, Q]) {
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i], b = poly[(i + 1) % poly.length];
      const nx = b[1] - a[1], ny = a[0] - b[0];
      let minP = Infinity, maxP = -Infinity, minQ = Infinity, maxQ = -Infinity;
      for (const p of P) { const d = nx * p[0] + ny * p[1]; minP = Math.min(minP, d); maxP = Math.max(maxP, d); }
      for (const q of Q) { const d = nx * q[0] + ny * q[1]; minQ = Math.min(minQ, d); maxQ = Math.max(maxQ, d); }
      if (maxP <= minQ || maxQ <= minP) return false;
    }
  }
  return true;
}
// 2つの凸多角形の距離(重なるなら0)
function convexDist(P, Q) {
  if (convexOverlap(P, Q)) return 0;
  let m = Infinity;
  for (const p of P) for (let i = 0; i < Q.length; i++) { const a = Q[i], b = Q[(i + 1) % Q.length]; m = Math.min(m, distSeg(p[0], p[1], a[0], a[1], b[0], b[1])); }
  for (const q of Q) for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; m = Math.min(m, distSeg(q[0], q[1], a[0], a[1], b[0], b[1])); }
  return m;
}
const rectPoly = r => [[r.x, r.y], [r.x + r.w, r.y], [r.x + r.w, r.y + r.h], [r.x, r.y + r.h]];

// 三角形の外側6pxの領域Eに重なる棒を切る。斜辺に当たる棒は、斜辺と平行に途切れる
function clipBarsByTri(list, E) {
  const res = [];
  const touched = new Set();
  const eps = 1e-6;
  for (const s of list) {
    if (s.kind !== 'bar') { res.push(s); continue; }
    const rect = rectPoly(s);
    if (!convexOverlap(rect, E)) { res.push(s); continue; }
    touched.add(s.chain);
    const t = Math.min(s.w, s.h);
    const kept = [];
    for (const P of clipOutside(rect, E)) {
      const xs = P.map(p => p[0]), ys = P.map(p => p[1]);
      const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const area = Math.abs(polyArea(P));
      const across = s.horizontal ? y1 - y0 : x1 - x0;                 // 太さの向きの幅
      // 平均の長さ(面積÷太さ)が20px未満の断片や、太さが12px未満に細った断片は消える
      if (area / t < BAR_LMIN || across < BAR_TMIN) continue;
      kept.push({ P, x0, y0, x1, y1, area });
    }
    // 接している断片(L字になってしまう)は、大きいほうだけ残す
    kept.sort((p, q) => q.area - p.area);
    const fin = [];
    for (const k of kept) if (fin.every(f => convexDist(f.P, k.P) > 1e-3)) fin.push(k);
    for (const { P, x0, y0, x1, y1, area } of fin) {
      const isRect = P.length === 4 && Math.abs(area - (x1 - x0) * (y1 - y0)) < 1e-4;
      if (isRect) {
        res.push({ ...s, x: x0, y: y0, w: x1 - x0, h: y1 - y0 });
      } else {
        const orig = P.map(p => rect.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < eps));
        res.push({ kind: 'clip', V: P, orig, t, x: x0, y: y0, w: x1 - x0, h: y1 - y0,
          horizontal: s.horizontal, chain: s.chain, gi: s.gi, gn: s.gn });
      }
    }
  }
  return res.filter(s => !(s.kind === 'disc3' && touched.has(s.chain)));
}

// ---------- 棒のマス: 棒の配置(v5の方式をマス内に縮小) ----------
function genBars(cw, ch, noEllipse) {
  const G = BAR_G, LMIN = BAR_LMIN, LMAX = BAR_LMAX;
  const T = BAR_T;                       // 基準の太さ20px(折れる棒・円・格子で使う)
  const TMIN = BAR_TMIN;
  const P = T + G;
  const CAP = LMAX + G + LMIN + 1;
  const occ = new Uint8Array(cw * ch);    // 1=使用不可(棒+間隔)
  const cid = new Uint16Array(cw * ch);   // 連結グループの番号(0=連結ではない棒)
  let nextCid = 0;
  const out = [];

  const rndLen = () => Math.round(LMIN + (LMAX - LMIN) * Math.pow(R(), 1 / BAR_BIAS));
  // 棒の太さ: 15〜20pxの連続ランダム
  // 太い棒のパターン(THICK_T)は5%で出る。ただし3連結の真ん中(rndTMidで生成)には出ない
  const rndT = () => (R() < THICK_P ? THICK_T : Math.round((BAR_TMIN + (BAR_TMAX - BAR_TMIN) * R()) * 100) / 100);
  const rndTMid = () => Math.round((BAR_TMIN + (BAR_TMAX - BAR_TMIN) * R()) * 100) / 100;
  const sumT = (ts, n) => { let t = (n - 1) * G; for (let i = 0; i < n; i++) t += ts[i]; return t; };

  function mark(x, y, w, h) {
    const x0 = Math.max(0, Math.floor(x - G)), x1 = Math.min(cw, Math.ceil(x + w + G));
    const y0 = Math.max(0, Math.floor(y - G)), y1 = Math.min(ch, Math.ceil(y + h + G));
    for (let yy = y0; yy < y1; yy++) occ.fill(1, yy * cw + x0, yy * cw + x1);
  }
  function fillCid(x, y, w, h, id) {
    const x0 = Math.max(0, Math.floor(x)), x1 = Math.min(cw, Math.ceil(x + w));
    const y0 = Math.max(0, Math.floor(y)), y1 = Math.min(ch, Math.ceil(y + h));
    for (let yy = y0; yy < y1; yy++) cid.fill(id, yy * cw + x0, yy * cw + x1);
  }
  // 斜めを含む多角形: 内側と、周囲G(6px)以内を使用不可にする
  function markPoly(V, spans) {
    for (const [yy, xa, xb] of spans) occ.fill(1, yy * cw + xa, yy * cw + xb);
    for (let i = 0; i < V.length; i++) {
      const a = V[i], b = V[(i + 1) % V.length];
      const x0 = Math.max(0, Math.floor(Math.min(a[0], b[0]) - G)), x1 = Math.min(cw, Math.ceil(Math.max(a[0], b[0]) + G));
      const y0 = Math.max(0, Math.floor(Math.min(a[1], b[1]) - G)), y1 = Math.min(ch, Math.ceil(Math.max(a[1], b[1]) + G));
      for (let yy = y0; yy < y1; yy++) {
        for (let xx = x0; xx < x1; xx++) {
          if (distSeg(xx + 0.5, yy + 0.5, a[0], a[1], b[0], b[1]) <= G) occ[yy * cw + xx] = 1;
        }
      }
    }
  }
  function rectFree(x, y, w, h) {
    const xa = Math.floor(x), xb = Math.ceil(x + w), ya = Math.floor(y), yb = Math.ceil(y + h);
    if (xa < 0 || ya < 0 || xb > cw || yb > ch) return false;
    for (let yy = ya; yy < yb; yy++) {
      const base = yy * cw;
      for (let xx = xa; xx < xb; xx++) if (occ[base + xx]) return false;
    }
    return true;
  }
  function runH(x, y, th) {
    if (y + th > ch) return 0;
    const lim = Math.min(CAP, cw - x);
    let k = 0;
    for (; k < lim; k++) {
      let ok = true;
      for (let j = 0; j < th; j++) if (occ[(y + j) * cw + x + k]) { ok = false; break; }
      if (!ok) break;
    }
    return k;
  }
  function runV(x, y, tw) {
    if (x + tw > cw) return 0;
    const lim = Math.min(CAP, ch - y);
    let k = 0;
    for (; k < lim; k++) {
      const base = (y + k) * cw + x;
      let ok = true;
      for (let i = 0; i < tw; i++) if (occ[base + i]) { ok = false; break; }
      if (!ok) break;
    }
    return k;
  }
  // 矩形の4辺に面した間隔の中に、連結グループの棒があるか
  function chainNear(x, y, w, h) {
    const t = Math.max(G, GUT) + 2;   // 隣接判定(間隔がGUT+1px以内)を漏れなく含める
    const x0 = Math.max(0, Math.floor(x - t)), x1 = Math.min(cw, Math.ceil(x + w + t));
    const y0 = Math.max(0, Math.floor(y - t)), y1 = Math.min(ch, Math.ceil(y + h + t));
    for (let yy = y0; yy < y1; yy++) {
      const inY = yy >= y && yy < y + h;
      for (let xx = x0; xx < x1; xx++) {
        const inX = xx >= x && xx < x + w;
        if (inX && inY) continue;         // 内側は見ない
        if (!cid[yy * cw + xx]) continue;
        if (inX !== inY) return true;     // 辺に面した帯
        // 四隅: 斜めの辺が角に近づいている場合だけ隣り合いとみなす
        const px = xx + 0.5, py = yy + 0.5;
        const ddx = px < x ? x - px : px - (x + w), ddy = py < y ? y - py : py - (y + h);
        if (Math.hypot(ddx, ddy) <= G + 1.6) return true;   // cidは図形の内側のピクセルなので、少し余裕をみる
      }
    }
    return false;
  }
  // 折れる棒を含むグループが、既存の連結グループと隣り合うか(斜めの辺は距離で判定)
  function chainNearComp(comp) {
    const t = Math.max(G, GUT) + 1.5;
    for (const sh of comp.shapes) {
      if (!sh.V) { if (chainNear(sh.x, sh.y, sh.w, sh.h)) return true; continue; }
      const x0 = Math.max(0, Math.floor(sh.x - t)), x1 = Math.min(cw, Math.ceil(sh.x + sh.w + t));
      const y0 = Math.max(0, Math.floor(sh.y - t)), y1 = Math.min(ch, Math.ceil(sh.y + sh.h + t));
      for (let yy = y0; yy < y1; yy++) {
        for (let xx = x0; xx < x1; xx++) {
          if (!cid[yy * cw + xx]) continue;
          for (let i = 0; i < 8; i++) {
            const a = sh.V[i], b = sh.V[(i + 1) % 8];
            if (distSeg(xx + 0.5, yy + 0.5, a[0], a[1], b[0], b[1]) <= t) return true;
          }
        }
      }
    }
    return false;
  }
  // 平行な棒どうしが、太さの方向(=間隔6pxを挟んで隣り合う方向)につながっているか。
  // 同じ向きの棒が長さの方向に並ぶ(端と端が並ぶ)ケースは含めない
  function stackAdjacent(a, b, horizontal, tol) {
    if (horizontal) {
      const dy = Math.max(b.y - (a.y + a.h), a.y - (b.y + b.h));
      const dx = Math.max(b.x - (a.x + a.w), a.x - (b.x + b.w));
      return dy >= 0 && dy <= tol && dx < 0;
    }
    const dx = Math.max(b.x - (a.x + a.w), a.x - (b.x + b.w));
    const dy = Math.max(b.y - (a.y + a.h), a.y - (b.y + b.h));
    return dx >= 0 && dx <= tol && dy < 0;
  }
  // 平行な棒(連結かどうかを問わない)が、太さの方向に何本つながっているか
  function stackSize(rect, horizontal) {
    const tol = G + 1;
    // 分断された末端(forceColor)や反復した連結(twin)は、元の連結の一部として扱い、別の本数として数えない
    const cands = out.filter(o => o.kind === 'bar' && o.horizontal === horizontal && !o.forceColor && !o.twin);
    const visited = new Set(); const queue = [rect]; let count = 0;
    while (queue.length) {
      const cur = queue.pop();
      for (const o of cands) {
        if (visited.has(o)) continue;
        if (stackAdjacent(cur, o, horizontal, tol)) { visited.add(o); count++; queue.push(o); }
      }
    }
    return count;
  }

  // 連結の端に、同じ本数・同じ色の連結を繰り返す(60px以下)
  function tryRepeatChain(x, y, horizontal, n, L, ts, origId) {
    const dirs = R() < 0.5 ? [1, -1] : [-1, 1];
    for (const dir of dirs) {
      for (const repL of steps(REPEAT_MAXLEN)) {
        let ok = true, off = 0;
        const rects = [];
        for (let i = 0; i < n; i++) {
          const t = ts[i];
          let rx, ry, w2, h2;
          if (horizontal) {
            ry = y + off; h2 = t; w2 = repL;
            rx = dir === 1 ? (x + L + G) : (x - G - repL);
          } else {
            rx = x + off; w2 = t; h2 = repL;
            ry = dir === 1 ? (y + L + G) : (y - G - repL);
          }
          if (!rectFree(rx, ry, w2, h2)) { ok = false; break; }
          rects.push({ x: rx, y: ry, w: w2, h: h2, gi: i });
          off += t + G;
        }
        if (ok) {
          const id2 = ++nextCid;
          for (const r of rects) {
            out.push({ x: r.x, y: r.y, w: r.w, h: r.h, horizontal, kind: 'bar', chain: id2, gi: r.gi, gn: n, twin: origId });
            mark(r.x, r.y, r.w, r.h);
            fillCid(r.x, r.y, r.w, r.h, id2);
          }
          return;
        }
      }
    }
  }

  // 連結した棒は同じ長さで横(縦)に並べ、太さの辺(端)が一直線に揃う。太さは棒ごとに違ってよい
  function put(x, y, horizontal, n, L, ts) {
    const id = n > 1 ? ++nextCid : 0;

    // 長さ100px以上の連結は、どちらかの端の30pxが分断されることがある(必ずSPLIT_END_COLOR)
    let splitEnd = null, keepLen = L, segLen = 0;
    if (n > 1 && L >= 100 && R() < SPLIT_END_P) {
      const kl = L - SPLIT_END_LEN - G;
      if (kl >= LMIN) { keepLen = kl; segLen = SPLIT_END_LEN; splitEnd = R() < 0.5 ? 0 : 1; }
    }

    let off = 0;
    for (let i = 0; i < n; i++) {
      const t = ts[i];
      const rx0 = horizontal ? x : x + off, ry0 = horizontal ? y + off : y;
      if (splitEnd === null) {
        const bw = horizontal ? L : t, bh = horizontal ? t : L;
        out.push({ x: rx0, y: ry0, w: bw, h: bh, horizontal, kind: 'bar', chain: id, gi: i, gn: n });
        mark(rx0, ry0, bw, bh);
        if (id) fillCid(rx0, ry0, bw, bh, id);
      } else {
        let mainX = rx0, mainY = ry0, mw, mh, segX, segY, segW, segH;
        if (horizontal) {
          mh = t; segH = t; mainY = ry0; segY = ry0;
          if (splitEnd === 1) { mw = keepLen; mainX = rx0; segW = segLen; segX = rx0 + keepLen + G; }
          else { segW = segLen; segX = rx0; mw = keepLen; mainX = rx0 + segLen + G; }
        } else {
          mw = t; segW = t; mainX = rx0; segX = rx0;
          if (splitEnd === 1) { mh = keepLen; mainY = ry0; segH = segLen; segY = ry0 + keepLen + G; }
          else { segH = segLen; segY = ry0; mh = keepLen; mainY = ry0 + segLen + G; }
        }
        out.push({ x: mainX, y: mainY, w: mw, h: mh, horizontal, kind: 'bar', chain: id, gi: i, gn: n });
        out.push({ x: segX, y: segY, w: segW, h: segH, horizontal, kind: 'bar', chain: id, gi: i, gn: n, forceColor: SPLIT_END_COLOR });
        mark(mainX, mainY, mw, mh); mark(segX, segY, segW, segH);
        if (id) { fillCid(mainX, mainY, mw, mh, id); fillCid(segX, segY, segW, segH, id); }
      }
      off += t + G;
    }
    // 3連結の上に、棒3本と間の分の直径をもつ円が乗ることがある(短い方の辺=端に接する)。分断時は乗せない
    if (n === 3 && splitEnd === null) {
      const W = sumT(ts, 3);
      // 連結が短いほど円は乗りにくく、長いほど乗りやすい
      if (L >= W && R() < DISC_PMAX * (L - LMIN) / (LMAX - LMIN)) {
        const r = W / 2, e = R() < 0.5 ? 0 : 1;
        let cx, cy;
        if (horizontal) { cx = e === 0 ? x + r : x + L - r; cy = y + r; }
        else { cy = e === 0 ? y + r : y + L - r; cx = x + r; }
        out.push({ kind: 'disc3', x: cx - r, y: cy - r, w: W, h: W, cx, cy, r, horizontal, e, chain: id });
      }
    }
    // 連結が発生したとき、その端のどちらかに同じ本数・同じ色の連結が並ぶことがある(60px以下)
    if (n > 1 && splitEnd === null && R() < REPEAT_P) tryRepeatChain(x, y, horizontal, n, L, ts, id);
  }
  const stretch = (L, run) => (run - L < G + LMIN ? Math.min(LMAX, L + (run - L)) : L);

  // 連結を試す。他の連結グループと隣り合う配置は避ける
  function tryChain(x, y, n0, L0, ts) {
    const th = n => Math.ceil(sumT(ts, n));
    const near = (hz, n, L) => (hz ? chainNear(x, y, L, sumT(ts, n)) : chainNear(x, y, sumT(ts, n), L));
    for (let n = n0; n >= 2; n--) {
      const fits = [];
      const runs = [[true, runH(x, y, th(n))], [false, runV(x, y, th(n))]];
      for (const [hz, run] of runs) {
        if (run < L0) continue;
        const L = stretch(L0, run);
        if (!near(hz, n, L)) fits.push({ horizontal: hz, n, L });
      }
      if (fits.length) return fits[Math.floor(R() * fits.length)];
    }
    const minL = Math.max(2 * LMIN, Math.round(L0 * 0.4));
    for (let n = n0; n >= 2; n--) {
      const cand = [[true, runH(x, y, th(n))], [false, runV(x, y, th(n))]]
        .map(([hz, run]) => ({ horizontal: hz, n, run, L: Math.min(run, L0) }))
        .filter(o => o.run >= minL && !near(o.horizontal, n, o.L))
        .sort((p, q) => q.L - p.L);
      if (cand.length) return cand[0];
    }
    return null;
  }

  // ---- 折れる棒(太さは20px固定) ----
  // n本の棒(折れない棒と折れる棒)を作り、外接矩形の左上を(x,y)に合わせて、空きに入るか調べる
  function evalComposite(x, y, horizontal, n, L1, spec, ts) {
    const shapes = [];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let off = 0;
    for (let i = 0; i < n; i++) {
      const bx = horizontal ? 0 : off, by = horizontal ? off : 0;
      const sp = spec.get(i);
      let sh;
      if (sp) {
        sh = bentShape(horizontal, bx, by, L1, sp.e, sp.s, sp.L2);
        for (const p of sh.V) {
          minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
          minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
        }
      } else {
        const w = horizontal ? L1 : ts[i], h = horizontal ? ts[i] : L1;
        sh = { kind: 'bar', x: bx, y: by, w, h, horizontal };
        minX = Math.min(minX, bx); maxX = Math.max(maxX, bx + w);
        minY = Math.min(minY, by); maxY = Math.max(maxY, by + h);
      }
      sh.gi = i; sh.gn = n;
      shapes.push(sh);
      off += ts[i] + G;
    }
    const tx = x - Math.floor(minX), ty = y - Math.floor(minY);
    for (const sh of shapes) {
      if (sh.V) {
        sh.V = sh.V.map(p => [p[0] + tx, p[1] + ty]);
        sh.parts = sh.parts.map(r => ({ x: r.x + tx, y: r.y + ty, w: r.w, h: r.h }));
        const xs = sh.V.map(p => p[0]), ys = sh.V.map(p => p[1]);
        const x0 = Math.min(...xs), y0 = Math.min(...ys);
        sh.x = x0; sh.y = y0; sh.w = Math.max(...xs) - x0; sh.h = Math.max(...ys) - y0;
        sh.spans = polySpans(sh.V);
        for (const [yy, xa, xb] of sh.spans) {
          if (yy < 0 || yy >= ch || xa < 0 || xb > cw) return null;
          const base = yy * cw;
          for (let xx = xa; xx < xb; xx++) if (occ[base + xx]) return null;
        }
      } else {
        sh.x += tx; sh.y += ty;
        if (!rectFree(sh.x, sh.y, sh.w, sh.h)) return null;
      }
    }
    return {
      shapes,
      bbox: { x, y, w: Math.ceil(maxX - Math.floor(minX)), h: Math.ceil(maxY - Math.floor(minY)) }
    };
  }
  function commit(comp, n) {
    const id = n > 1 ? ++nextCid : 0;
    for (const sh of comp.shapes) {
      const o = { kind: sh.kind, x: sh.x, y: sh.y, w: sh.w, h: sh.h, horizontal: sh.horizontal, chain: id, gi: sh.gi, gn: sh.gn };
      if (sh.V) {
        o.V = sh.V; o.parts = sh.parts;
        markPoly(sh.V, sh.spans);
        if (id) for (const [yy, xa, xb] of sh.spans) cid.fill(id, yy * cw + xa, yy * cw + xb);
      } else {
        mark(sh.x, sh.y, sh.w, sh.h);
        if (id) fillCid(sh.x, sh.y, sh.w, sh.h, id);
      }
      out.push(o);
    }
  }
  const steps = from => {
    const a = [];
    for (let L = from; L > LMIN; L -= 4) a.push(L);
    a.push(LMIN);
    return a;
  };
  // 折れる前の長さL1と、二度折れたあとの長さL2は、別々に上限を求める
  function tryBendGroup(x, y, n, L0, idxs) {
    const ts = Array.from({ length: n }, (_, i) => (idxs.includes(i) ? T : (n === 3 && i === 1 ? rndTMid() : rndT()))); // 折れる棒は太さ20px固定、3連結の真ん中は太い棒にならない
    // 向き・折れる端(・単独なら折れる側)の全組み合わせを、ランダムな順で試す
    let es = [[]];
    for (let k = 0; k < idxs.length; k++) es = es.flatMap(a => [[...a, 0], [...a, 1]]);
    const combos = [];
    for (const horizontal of [true, false]) {
      for (const e of es) {
        if (n === 1) for (const s of [-1, 1]) combos.push({ horizontal, e, s: [s] });
        else combos.push({ horizontal, e, s: idxs.map(i => (i === 0 ? -1 : 1)) }); // 連結は外側へ折れる
      }
    }
    for (let i = combos.length - 1; i > 0; i--) {
      const j = Math.floor(R() * (i + 1));
      [combos[i], combos[j]] = [combos[j], combos[i]];
    }
    const ok = c => c && (n === 1 || !chainNearComp(c));
    for (const { horizontal, e, s } of combos) {
      const mk = L2 => {
        const m = new Map();
        idxs.forEach((i, k) => m.set(i, { e: e[k], s: s[k], L2: L2(k) }));
        return m;
      };
      const minSpec = mk(() => LMIN);
      // 最短の長さでも入らない組み合わせは飛ばす
      if (!ok(evalComposite(x, y, horizontal, n, LMIN, minSpec, ts))) continue;
      const rnd = idxs.map(() => rndLen());
      const spec = mk(k => rnd[k]);
      let comp = evalComposite(x, y, horizontal, n, L0, spec, ts);
      if (ok(comp)) return comp;
      // 折れる前の長さの上限: 折れたあとを最短にして入る最大のL1
      let L1 = LMIN;
      for (const L of steps(L0)) {
        if (ok(evalComposite(x, y, horizontal, n, L, minSpec, ts))) { L1 = L; break; }
      }
      // 二度折れたあとの長さの上限: 棒ごとに求める
      const cur = new Map(minSpec);
      idxs.forEach((i, k) => {
        for (const L of steps(rnd[k])) {
          const t = new Map(cur);
          t.set(i, { e: e[k], s: s[k], L2: L });
          if (ok(evalComposite(x, y, horizontal, n, L1, t, ts))) { cur.set(i, { e: e[k], s: s[k], L2: L }); break; }
        }
      });
      comp = evalComposite(x, y, horizontal, n, L1, cur, ts);
      if (ok(comp)) return comp;
    }
    return null;
  }

  // 楕円パターン(短径72×長径80の角丸長方形)を先に置く。隣のマスに既にあれば出さない
  if (!noEllipse && R() < ELLIPSE_P) {
    const opts = [];
    if (cw >= ELL_LONG && ch >= ELL_SHORT) opts.push(true);    // 長軸が横
    if (cw >= ELL_SHORT && ch >= ELL_LONG) opts.push(false);   // 長軸が縦
    if (opts.length) {
      const horizontal = pick(opts);
      const w = horizontal ? ELL_LONG : ELL_SHORT, h = horizontal ? ELL_SHORT : ELL_LONG;
      const at = (span) => (R() < 0.6 ? (R() < 0.5 ? 0 : span) : ri(0, span)); // 端に寄せやすく
      const x = at(cw - w), y = at(ch - h);
      out.push({ x, y, w, h, horizontal, kind: 'ellipse', chain: 0 });
      mark(x, y, w, h);
    }
  }

  // アーチ(72×72、太さ20px)。口の側に20×20の円が入ることがある
  let archDot = false;
  if (R() < ARCH_P && cw >= ARCH_SIZE && ch >= ARCH_SIZE) {
    const at = (span) => (R() < 0.6 ? (R() < 0.5 ? 0 : span) : ri(0, span));
    for (let k = 0; k < 8; k++) {
      const x = at(cw - ARCH_SIZE), y = at(ch - ARCH_SIZE);
      if (!rectFree(x, y, ARCH_SIZE, ARCH_SIZE)) continue;
      const dot = R() < ARCH_DOT_P;
      out.push({ x, y, w: ARCH_SIZE, h: ARCH_SIZE, horizontal: true, kind: 'arch', chain: 0,
        rot: ri(0, 3),                       // 口の向き(0=下 1=左 2=上 3=右)
        dot, dotY: 50 + R() * 12 });          // 円の位置: 口の側(口の端から10〜22px)
      mark(x, y, ARCH_SIZE, ARCH_SIZE);
      archDot = dot;
      break;
    }
  }

  // 太さ50×長さ120の長方形パターン。片方の短辺は角丸、もう片方は扇形で切り抜く
  if (R() < RECT2_P) {
    const optsR2 = [];
    if (cw >= RECT2_T && ch >= RECT2_L) optsR2.push(false); // 縦向き(長さが縦)
    if (cw >= RECT2_L && ch >= RECT2_T) optsR2.push(true);  // 横向き(長さが横)
    if (optsR2.length) {
      const rHorizontal = pick(optsR2);
      const bw = rHorizontal ? RECT2_L : RECT2_T, bh = rHorizontal ? RECT2_T : RECT2_L;
      const at = (span) => (R() < 0.6 ? (R() < 0.5 ? 0 : span) : ri(0, span));
      for (let k = 0; k < 8; k++) {
        const x = at(cw - bw), y = at(ch - bh);
        if (!rectFree(x, y, bw, bh)) continue;
        out.push({ x, y, w: bw, h: bh, horizontal: rHorizontal, kind: 'rect2', chain: 0,
          roundedEnd: R() < 0.5 ? 0 : 1, sectorCorner: R() < 0.5 ? 0 : 1 });
        mark(x, y, bw, bh);
        break;
      }
    }
  }

  // 20×20の円(1マスに1つか0個。アーチの円がある場合はそれが1つ目)
  if (!archDot && R() < CIRCLE_P) {
    const at = (span) => (R() < 0.6 ? (R() < 0.5 ? 0 : span) : ri(0, span));
    for (let k = 0; k < 8; k++) {
      const x = at(cw - T), y = at(ch - T);
      if (runH(x, y, T) >= T) {
        out.push({ x, y, w: T, h: T, horizontal: true, kind: 'circle', chain: 0 });
        mark(x, y, T, T);
        break;
      }
    }
  }

  // 折れる棒: 各棒が5%で45°折れる(3連結の真ん中は折れない)。
  // 詰まってからだと入る空きがないので、空きの多い最初に置いておく
  {
    const U = Math.floor(cw * ch / BEND_AREA * BEND_P + R());   // 折れる棒の数(棒の数の見積もり×発生率)
    for (let u = 0; u < U; u++) {
      const L0 = rndLen();
      let n = 1;
      if (R() < 0.5) n = R() < 0.5 ? 2 : 3;   // 辺の検出で連結になる割合と同じ
      let idxs;
      if (n === 1) idxs = [0];
      else if (n === 2) idxs = R() < BEND_P ? [0, 1] : [R() < 0.5 ? 0 : 1];
      else idxs = R() < BEND_P ? [0, 2] : [R() < 0.5 ? 0 : 2];   // 3連結の真ん中(1)は折れない
      for (let k = 0; k < 12; k++) {
        const x = ri(0, Math.max(0, cw - 40)), y = ri(0, Math.max(0, ch - 40));
        if (occ[y * cw + x]) continue;
        const bg = tryBendGroup(x, y, n, L0, idxs);
        if (bg) { commit(bg, n); break; }
      }
    }
  }

  // 直角二等辺三角形。外側6px以内に他の図形が無い所に置く。
  // 棒は三角形を無視して並べ、あとで三角形の外側6pxで切る(斜辺に当たった棒は、斜辺と平行に途切れる)
  let tri = null;
  if (R() < TRI_P) {
    const S = Math.round(rand(TRI_MIN, TRI_MAX));
    if (cw >= S && ch >= S) {
      const at = (span) => (R() < 0.6 ? (R() < 0.5 ? 0 : span) : ri(0, span));
      for (let k = 0; k < 10 && !tri; k++) {
        const x = at(cw - S), y = at(ch - S);
        const corner = ri(0, 3);
        const E = triExclusion(x, y, S, corner);
        let free = true;
        for (const [yy, xa, xb] of polySpans(E)) {
          if (!free) break;
          if (yy < 0 || yy >= ch) continue;
          for (let xx = Math.max(0, xa); xx < Math.min(cw, xb); xx++) if (occ[yy * cw + xx]) { free = false; break; }
        }
        if (!free) continue;
        tri = { kind: 'tri', x, y, w: S, h: S, horizontal: true, chain: 0, corner, S, E,
          swap: R() < 0.5, d: rand(TRI_D_MIN, TRI_D_MAX) };
        out.push(tri);
      }
    }
  }

  // 空きにするマス
  const cols = Math.floor((cw + G) / P), rows = Math.floor((ch + G) / P);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (R() < BAR_SKIP) mark(c * P, r * P, T, T);
    }
  }

  // 左上から走査して、空いている所に置いていく
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      if (occ[y * cw + x]) continue;
      const rh = runH(x, y, TMIN), rv = runV(x, y, TMIN);
      if (rh < LMIN && rv < LMIN) continue;
      const L0 = rndLen();

      // 辺をランダムに1つ検出。太さの辺(短い辺)なら、長い辺がある方向に2〜3個連結
      let n0 = 1;
      if (Math.floor(R() * 4) % 2 === 1) n0 = R() < 0.5 ? 2 : 3;
      const ts = n0 === 3 ? [rndT(), rndTMid(), rndT()] : Array.from({ length: n0 }, rndT);

      if (n0 > 1) {
        const cn = tryChain(x, y, n0, L0, ts);
        if (cn) {
          // 平行な棒が、この連結を挟んで4本以上並んでしまわないか確認
          const off1 = ts.slice(0, cn.n - 1).reduce((s, t) => s + t + G, 0);
          const first = cn.horizontal ? { x, y, w: cn.L, h: ts[0] } : { x, y, w: ts[0], h: cn.L };
          const last = cn.horizontal ? { x, y: y + off1, w: cn.L, h: ts[cn.n - 1] } : { x: x + off1, y, w: ts[cn.n - 1], h: cn.L };
          const topN = stackSize(first, cn.horizontal), botN = cn.n > 1 ? stackSize(last, cn.horizontal) : topN;
          if (topN + cn.n + botN <= STACK_MAX) { put(x, y, cn.horizontal, cn.n, cn.L, ts); continue; }
        }
      }

      // 単独: 決めた長さが入る向きを選ぶ(どちらも入らなければ空きの大きい向きで縮める)
      let t = ts[0], th = Math.ceil(t);
      let a = runH(x, y, th), b = runV(x, y, th);
      if (a < LMIN && b < LMIN) { t = TMIN; a = rh; b = rv; }   // この太さは入らないので最小の太さにする
      const fitH = a >= L0, fitV = b >= L0;
      let horizontal;
      if (fitH && fitV) horizontal = R() < 0.5;
      else if (fitH) horizontal = true;
      else if (fitV) horizontal = false;
      else horizontal = a >= b;
      const run = horizontal ? a : b;
      const finalL = stretch(Math.min(L0, run), run);
      // 平行な棒が4本以上並ぶ位置には置かない。逆向きが空いていればそちらを試す
      const rectH = { x, y, w: horizontal ? finalL : t, h: horizontal ? t : finalL };
      if (stackSize(rectH, horizontal) + 1 > STACK_MAX) {
        const altH = !horizontal;
        const canAlt = altH ? (a >= LMIN) : (b >= LMIN);
        if (canAlt) {
          const altRunV = altH ? a : b;
          const altL = stretch(Math.min(L0, altRunV), altRunV);
          const rectAlt = { x, y, w: altH ? altL : t, h: altH ? t : altL };
          if (stackSize(rectAlt, altH) + 1 <= STACK_MAX) put(x, y, altH, 1, altL, [t]);
        }
        continue;
      }
      put(x, y, horizontal, 1, finalL, [t]);
    }
  }
  return tri ? clipBarsByTri(out, tri.E) : out;
}

// 2つの矩形が向かい合って隣り合っているか
function adjRect(a, b, tol) {
  const dx = Math.max(b.x - (a.x + a.w), a.x - (b.x + b.w));
  const dy = Math.max(b.y - (a.y + a.h), a.y - (b.y + b.h));
  return (dx >= 0 && dx <= tol && dy < 0) || (dy >= 0 && dy <= tol && dx < 0);
}
// 折れる棒は、3つの部分(折れる前・斜め・折れたあと)の矩形それぞれで判定する
function adjacent(a, b, tol) {
  const pa = a.parts || [a], pb = b.parts || [b];
  for (const p of pa) for (const q of pb) if (adjRect(p, q, tol)) return true;
  return false;
}

// 楕円: border-radius50px(72×80では半径36の丸い端になる)の角丸長方形の輪と、長軸に沿った棒(輪と重なる)。太さ15px、色は固定
function drawEllipse(b, horizontal) {
  const t = ELL_T;
  const r = Math.min(ELL_RADIUS, b.w / 2, b.h / 2);  // CSSと同じく、辺の半分を超えないように縮める
  ctx.fillStyle = ELL_COLOR;
  ctx.beginPath();
  rrSub(b.x, b.y, b.w, b.h, r);
  rrSub(b.x + t, b.y + t, b.w - 2 * t, b.h - 2 * t, Math.max(0, r - t));
  ctx.fill('evenodd');
  if (horizontal) ctx.fillRect(b.x + t / 2, b.y + b.h / 2 - t / 2, b.w - t, t);
  else ctx.fillRect(b.x + b.w / 2 - t / 2, b.y + t / 2, t, b.h - t);
}

// アーチ: 72×72、太さ15pxの棒を「∩」の形にしたもの(口は下向きを基準に、90°ずつ回転)
// 上の角は緩やかな丸み(ARCH_R)。脚の先の4つの角にも必ずborder-radius(棒の太さの半分)を適用する。
// 口の側の円(20×20)はアーチと同じ色
function drawArch(b) {
  const S2 = ARCH_SIZE, t = ARCH_T, Ro = ARCH_R, Ri = Math.max(0, ARCH_R - t), rl = t / 2;
  const V = [[0, S2], [0, 0], [S2, 0], [S2, S2], [S2 - t, S2], [S2 - t, t], [t, t], [t, S2]];
  const rad = [rl, Ro, Ro, rl, rl, Ri, Ri, rl];
  ctx.save();
  ctx.translate(b.x + S2 / 2, b.y + S2 / 2);
  ctx.rotate(b.rot * Math.PI / 2);
  ctx.translate(-S2 / 2, -S2 / 2);
  polyPath(V, rad);
  ctx.fill();
  if (b.dot) disc(S2 / 2, b.dotY, BAR_T / 2);
  ctx.restore();
}

// 太さ50×長さ120の長方形。片方の短辺(50pxの辺)の両角は丸め、もう片方の短辺は
// いずれかの角を、半径48の扇形で切り抜く。局所座標は常に縦向き(幅T×高さL)で組み、
// 実際が横向きならまとめて90°回す
function drawRect2(b) {
  const T = RECT2_T, L = RECT2_L, Rr = RECT2_ROUND_R, Sr = RECT2_SECTOR_R;
  const flatEnd = 1 - b.roundedEnd; // 0=上が平ら 1=下が平ら
  const tl = b.roundedEnd === 0 ? Rr : 0, tr = b.roundedEnd === 0 ? Rr : 0;
  const br = b.roundedEnd === 1 ? Rr : 0, bl = b.roundedEnd === 1 ? Rr : 0;
  // 扇形の中心: 50pxの辺(平らな端)から1pxだけ内側。120pxの辺(側辺)には接したまま
  const cx = b.sectorCorner === 0 ? 0 : T;
  const cy = flatEnd === 0 ? 1 : L - 1;
  // 開始角は50pxの辺と平行、90°回って120pxの辺に重なって終わる
  const table = {
    '0,0': [0, Math.PI / 2, false],
    '0,1': [Math.PI, Math.PI / 2, true],
    '1,0': [0, -Math.PI / 2, true],
    '1,1': [Math.PI, -Math.PI / 2, false],
  };
  const [a0, a1, ccw] = table[flatEnd + ',' + b.sectorCorner];
  ctx.save();
  ctx.translate(b.x + b.w / 2, b.y + b.h / 2);
  if (b.horizontal) ctx.rotate(Math.PI / 2);
  ctx.translate(-T / 2, -L / 2);
  rrc(0, 0, T, L, tl, tr, br, bl);
  ctx.clip();
  ctx.fillStyle = b.color;
  ctx.fillRect(0, 0, T, L);
  ctx.fillStyle = BG;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, Sr, a0, a1, ccw);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// 三角形(切り取りと円の穴つき)。局所座標(u,v)の接点のある辺がu軸(swapでu/vを入れ替え)
function drawTri(b) {
  const S2 = b.S, d = b.d, Rr = TRI_CIRCLE / 2, cv2 = Rr - TRI_SHIFT;
  const map = (u, v) => (b.swap ? triMap(b.x, b.y, S2, b.corner, v, u) : triMap(b.x, b.y, S2, b.corner, u, v));
  // 直角の角を含む、辺u軸に沿った d×cv2 の長方形を切り取った外形。円は接点の辺の方向へTRI_SHIFTぶん寄せる
  const P = [map(0, S2), map(0, cv2), map(d, cv2), map(d, 0), map(S2, 0)];
  polyPath(P, b.triRad);
  ctx.fill();
  const c = map(d, cv2);      // 円の中心(接点の辺の方向へ2pxだけ寄せた位置)
  ctx.fillStyle = BG;
  disc(c[0], c[1], Rr);
}

// 斜辺で切られた棒の断片: 切り口(斜め)の角は丸めず、もとの棒の角だけ、それぞれ独立にランダムで丸める
function drawClip(b) {
  const V = b.V, n = V.length;
  const rad = V.map((p, i) => {
    if (!b.orig[i] || R() >= CORNER_P) return 0;
    const a = V[(i + n - 1) % n], c = V[(i + 1) % n];
    const lim = Math.min(Math.hypot(p[0] - a[0], p[1] - a[1]), Math.hypot(p[0] - c[0], p[1] - c[1])) / 2;
    return Math.min(b.t / 2, lim);
  });
  b.rad = rad;
  polyPath(V, rad);
  ctx.fill();
}

// 3連結の上の円: 接点のある側の外周を直角にした「D」の形(接点の側が-x向き)
// angularがtrueなら丸い側も角張らせて正方形にする
function dShape(cx, cy, r, ang, angular) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(ang);
  ctx.beginPath();
  if (angular) {
    ctx.moveTo(0, -r); ctx.lineTo(r, -r); ctx.lineTo(r, r); ctx.lineTo(0, r);
  } else {
    ctx.moveTo(0, -r); ctx.lineTo(-r, -r); ctx.lineTo(-r, r); ctx.lineTo(0, r);
    ctx.arc(0, 0, r, Math.PI / 2, -Math.PI / 2, true);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function absShape(l, ox, oy) {
  const b = { x: l.x + ox, y: l.y + oy, w: l.w, h: l.h, kind: l.kind, chain: l.chain, gi: l.gi, gn: l.gn, horizontal: l.horizontal, color: null, rad: null };
  if (l.V) {
    b.V = l.V.map(p => [p[0] + ox, p[1] + oy]);
    if (l.parts) b.parts = l.parts.map(r => ({ x: r.x + ox, y: r.y + oy, w: r.w, h: r.h }));
  }
  if (l.kind === 'clip') { b.orig = l.orig; b.t = l.t; }
  if (l.kind === 'tri') { b.corner = l.corner; b.swap = l.swap; b.d = l.d; b.S = l.S; b.E = l.E.map(p => [p[0] + ox, p[1] + oy]); }
  if (l.kind === 'disc3') { b.cx = l.cx + ox; b.cy = l.cy + oy; b.r = l.r; b.e = l.e; }
  if (l.kind === 'arch') { b.rot = l.rot; b.dot = l.dot; b.dotY = l.dotY; }
  if (l.kind === 'rect2') { b.roundedEnd = l.roundedEnd; b.sectorCorner = l.sectorCorner; }
  if (l.twin) b.twin = l.twin;
  if (l.forceColor) b.forceColor = l.forceColor;
  return b;
}

function drawBarCell(c) {
  const { x, y, w, h } = c;
  const u = BAR_T, gap = BAR_G;

  // 隣のマスの、すでに描いた棒
  const pool = [];
  for (const j of c.nb) for (const o of cells[j].bars) pool.push(o);
  const poolChains = pool.filter(o => o.chain);
  const tol = Math.max(GUT, gap) + 1;
  const noEllipse = pool.some(o => o.kind === 'ellipse'); // 隣のマスに元楕円があれば、このマスには出さない

  // 隣のマスの連結グループと隣り合わない配置になるまで、数回作り直す
  let best = null;
  for (let attempt = 0; attempt < 8; attempt++) {
    const list = genBars(w, h, noEllipse);
    if (!list.length) continue;
    // 棒のかたまりをマスの中央に寄せる
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    for (const b of list) {
      minX = Math.min(minX, b.x); minY = Math.min(minY, b.y);
      maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h);
    }
    const dx = Math.round((w - (maxX - minX)) / 2 - minX);
    const dy = Math.round((h - (maxY - minY)) / 2 - minY);
    let bad = 0;
    if (poolChains.length) {
      for (const l of list) {
        if (!l.chain || l.kind === 'disc3') continue;
        if (poolChains.some(o => adjacent(absShape(l, x + dx, y + dy), o, tol))) bad++;
      }
    }
    if (!best || bad < best.bad) best = { list, dx, dy, bad };
    if (bad === 0) break;
  }
  if (!best) return;
  const { list, dx, dy } = best;

  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  const overlays = [], deferred = [];
  const chainColor = {}; // 反復連結(twin)が、元の連結と同じ色を再利用するための記録
  for (const l of list) {
    const b = absShape(l, x + dx, y + dy);
    if (l.kind === 'ellipse') {
      b.color = ELL_COLOR;
      c.bars.push(b);
      drawEllipse(b, l.horizontal);
      continue;
    }
    if (l.kind === 'disc3') { overlays.push(b); continue; }
    if (l.kind === 'tri') { deferred.push(b); continue; }
    if (b.forceColor) {
      // 分断された末端は必ずこの色
      b.color = b.forceColor;
    } else if (b.twin) {
      // 反復した連結は、元の連結の対応する棒と同じ色にする
      b.color = chainColor[b.twin + ':' + b.gi] || pickColor(COLORS);
    } else {
      // 隣り合う棒は基本的に別の色
      const bad = new Set();
      for (const o of pool) if (adjacent(b, o, tol)) bad.add(o.color);
      for (const o of c.bars) if (adjacent(b, o, tol)) bad.add(o.color);
      let cand = COLORS.filter(k => !bad.has(k));
      if (!cand.length || R() > DIFF_P) cand = COLORS;
      b.color = pickColor(cand);
      if (b.chain) chainColor[b.chain + ':' + b.gi] = b.color;
    }
    c.bars.push(b);

    ctx.fillStyle = b.color;
    const r = u / 2;
    if (b.kind === 'circle') {
      disc(b.x + r, b.y + r, r);
    } else if (b.kind === 'arch') {
      drawArch(b);
    } else if (b.kind === 'rect2') {
      drawRect2(b);
    } else if (b.kind === 'clip') {
      drawClip(b);
    } else if (b.kind === 'bent') {
      // 折れている段階(斜め)の角は丸めない。折れる前か後の片側は、折れる部分と逆側(棒の先)の
      // 2つの角を必ず丸め、もう片側は必ず丸めない
      const rad = [0, 0, 0, 0, 0, 0, 0, 0];
      if (R() < 0.5) { rad[0] = r; rad[7] = r; }   // 折れる前の側の先
      else { rad[3] = r; rad[4] = r; }             // 折れたあとの側の先
      b.rad = rad;
      polyPath(b.V, rad);
      ctx.fill();
    } else {
      // 4つの角それぞれ独立にランダムで丸める
      const rr0 = Math.min(b.w, b.h) / 2;
      const k = [0, 0, 0, 0].map(() => (R() < CORNER_P ? rr0 : 0));
      // ほぼ正方形で4隅とも丸いと円に見えるので、1つだけ角を残す
      if (Math.abs(b.w - b.h) < 1 && k.every(v => v > 0)) k[ri(0, 3)] = 0;
      b.rad = k;
      const isThick = !b.forceColor && (Math.abs(b.w - THICK_T) < 0.01 || Math.abs(b.h - THICK_T) < 0.01);
      const isMidSplit = !isThick && !b.forceColor && b.gn === 3 && b.gi === 1 && R() < MID_SPLIT_P;
      if (isThick || isMidSplit) {
        // 太い棒は常に二色分割(split2と同じ振る舞い)。真ん中の棒は、斜めの境界線で2色に分かれることがある
        ctx.save();
        rrc(b.x, b.y, b.w, b.h, k[0], k[1], k[2], k[3]);
        ctx.clip();
        ctx.fillRect(b.x, b.y, b.w, b.h);
        const col2 = pickColor(COLORS.filter(cc => cc !== b.color));
        if (isThick) {
          diagSplitFill(b.x, b.y, b.w, b.h, col2, BG, 4);
        } else {
          // 棒の中央を通る、コーナーからコーナーへの斜めの境界線
          ctx.fillStyle = col2;
          const corners = [[b.x, b.y], [b.x + b.w, b.y], [b.x + b.w, b.y + b.h], [b.x, b.y + b.h]];
          const i0 = ri(0, 3), tri = [corners[i0], corners[(i0 + 1) % 4], corners[(i0 + 2) % 4]];
          ctx.beginPath();
          ctx.moveTo(tri[0][0], tri[0][1]);
          ctx.lineTo(tri[1][0], tri[1][1]);
          ctx.lineTo(tri[2][0], tri[2][1]);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      } else {
        rrc(b.x, b.y, b.w, b.h, k[0], k[1], k[2], k[3]);
        ctx.fill();
      }
    }
  }
  // 三角形: 隣り合う棒と別の色。切り取り周りの角と鋭角には、それぞれ独立にランダムでborder-radiusを適用
  for (const b of deferred) {
    const hull = triHull(b);
    const bad = new Set();
    for (const o of c.bars.concat(pool)) {
      if (o.kind === 'tri') continue;
      const P = o.V && o.kind !== 'bent' ? o.V : (o.parts ? null : rectPoly(o));
      const polys = P ? [P] : o.parts.map(rectPoly);
      if (polys.some(q => convexDist(hull, q) <= tol)) bad.add(o.color);
    }
    let cand = COLORS.filter(k => !bad.has(k));
    if (!cand.length) cand = COLORS;
    b.color = pickColor(cand);
    ctx.fillStyle = b.color;
    b.triRad = [TRI_R_ACUTE, TRI_R_CUT, TRI_R_CUT, TRI_R_CUT, TRI_R_ACUTE].map(v => (R() < CORNER_P ? v : 0));
    c.bars.push(b);
    drawTri(b);
  }
  // 3連結の上の円: 外周に5pxのf5f5ffの縁をつけて、下の棒とは別の色にする
  for (const d of overlays) {
    const under = new Set(c.bars.filter(o => o.chain === d.chain && o.kind === 'bar').map(o => o.color));
    let cand = COLORS.filter(k => !under.has(k));
    if (!cand.length) cand = COLORS;
    d.color = pickColor(cand);
    // 接点のある側(連結の端)の外周は直角にする
    const ang = d.horizontal ? (d.e === 0 ? 0 : Math.PI) : (d.e === 0 ? Math.PI / 2 : -Math.PI / 2);
    const angular = R() < DISC_ANGULAR_P;
    ctx.fillStyle = BG;
    dShape(d.cx, d.cy, d.r + DISC_HALO, ang, angular);
    ctx.fillStyle = d.color;
    dShape(d.cx, d.cy, d.r, ang, angular);
    c.discs.push(d);
  }
  ctx.restore();
}

// ---------- 棒以外のマス: 入れ子の角丸の輪郭線 ----------
// ---------- 棒以外のマス: 円・半円・四分円・アーチ ----------
function circles(g) {
  const { x, y, w, h, gap, col1, col2, pad, under } = g;
  const ix = x + pad, iy = y + pad, iw = w - 2 * pad, ih = h - 2 * pad;
  const m = Math.min(iw, ih);
  const kind = wpick([['circle', 3], ['half', 3], ['quarter', 2.5]]);
  let cx, cy, r;
  ctx.fillStyle = col1;
  if (kind === 'circle') {
    r = m * rand(0.35, 0.5);
    cx = ix + iw / 2; cy = iy + ih / 2;
    if (R() < 0.4) { // 隅に寄せる
      cx = R() < 0.5 ? ix + r : ix + iw - r;
      cy = R() < 0.5 ? iy + r : iy + ih - r;
    }
    disc(cx, cy, r);
  } else if (kind === 'half') {
    const side = ri(0, 3);
    if (side < 2) { r = Math.min(iw / 2, ih * rand(0.7, 1)); cx = ix + iw / 2; cy = side === 0 ? iy : iy + ih; }
    else { r = Math.min(ih / 2, iw * rand(0.7, 1)); cy = iy + ih / 2; cx = side === 2 ? ix : ix + iw; }
    disc(cx, cy, r);
  } else {
    r = m * rand(0.75, 1);
    cx = R() < 0.5 ? ix : ix + iw;
    cy = R() < 0.5 ? iy : iy + ih;
    disc(cx, cy, r);
  }
  // 同心円の飾り
  if (R() < 0.4 && r * 0.64 - gap > 3) {
    ctx.fillStyle = under; disc(cx, cy, r * 0.64);
    ctx.fillStyle = col2;  disc(cx, cy, r * 0.64 - gap);
  }
}

// ---------- 棒以外のマス: 斜めに2色分割した角丸四角 ----------
// 二色分割: 直線の境界か、ランダムな箇所で直角に折れる境界か(FOLD_Pの確率)。col1は既にix,iy,iw,ih全体に塗られている前提
function diagSplitFill(ix, iy, iw, ih, col2, under, gap) {
  const flip = R() < 0.5;
  const bulge = R() < 0.4 ? 0 : 1;
  const mx = ix + iw / 2 + bulge * rand(-0.3, 0.3) * iw;
  const my = iy + ih / 2 + bulge * rand(-0.3, 0.3) * ih;
  const A = flip ? [ix, iy] : [ix + iw, iy];               // 上の端
  const B = flip ? [ix + iw, iy + ih] : [ix, iy + ih];     // 下の端
  const offs = flip ? [[ix + iw, iy], [ix, iy + ih]] : [[ix, iy], [ix + iw, iy + ih]];
  const O = pick(offs);
  ctx.fillStyle = col2;
  if (bulge === 0 && R() < FOLD_P) {
    // 境界線が直線のとき、ランダムな箇所で直角に折れる: A→M(折れ目)→E(矩形の縁)
    const t = rand(0.25, 0.75);
    const M = [A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])];
    const dx = B[0] - A[0], dy = B[1] - A[1], len = Math.hypot(dx, dy);
    const sg = R() < 0.5 ? 1 : -1;
    const px = -dy / len * sg, py = dx / len * sg;          // 直角の向き
    let tt = Infinity;
    if (px > 1e-9) tt = Math.min(tt, (ix + iw - M[0]) / px);
    if (px < -1e-9) tt = Math.min(tt, (ix - M[0]) / px);
    if (py > 1e-9) tt = Math.min(tt, (iy + ih - M[1]) / py);
    if (py < -1e-9) tt = Math.min(tt, (iy - M[1]) / py);
    const E = [M[0] + tt * px, M[1] + tt * py];
    // 矩形の縁を、Eからまわって(時計回り/反時計回りをランダムに)Aまで戻る
    const per = 2 * (iw + ih), eps = 1e-6;
    const pos = p => {
      if (Math.abs(p[1] - iy) < eps) return p[0] - ix;
      if (Math.abs(p[0] - (ix + iw)) < eps) return iw + (p[1] - iy);
      if (Math.abs(p[1] - (iy + ih)) < eps) return iw + ih + (ix + iw - p[0]);
      return 2 * iw + ih + (iy + ih - p[1]);
    };
    const corners = [[ix, iy, 0], [ix + iw, iy, iw], [ix + iw, iy + ih, iw + ih], [ix, iy + ih, 2 * iw + ih]];
    const clockwise = R() < 0.5;
    const sE = pos(E), sA = pos(A);
    const dist = s => (clockwise ? (s - sE + per) % per : (sE - s + per) % per);
    const total = dist(sA);
    const walk = corners.map(c => ({ p: [c[0], c[1]], dd: dist(c[2]) }))
      .filter(o => o.dd > eps && o.dd < total - eps).sort((p, q) => p.dd - q.dd).map(o => o.p);
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(M[0], M[1]);
    ctx.lineTo(E[0], E[1]);
    for (const p of walk) ctx.lineTo(p[0], p[1]);
    ctx.closePath();
    ctx.fill();
    if (R() < 0.5) { // 分割線に細い抜き
      ctx.strokeStyle = under;
      ctx.lineWidth = Math.max(2, gap * 0.7);
      ctx.beginPath();
      ctx.moveTo(A[0], A[1]);
      ctx.lineTo(M[0], M[1]);
      ctx.lineTo(E[0], E[1]);
      ctx.stroke();
    }
    return;
  }
  ctx.beginPath();
  ctx.moveTo(A[0], A[1]);
  ctx.quadraticCurveTo(mx, my, B[0], B[1]);
  ctx.lineTo(O[0], O[1]);
  ctx.closePath();
  ctx.fill();
  if (R() < 0.5) { // 分割線に細い抜き
    ctx.strokeStyle = under;
    ctx.lineWidth = Math.max(2, gap * 0.7);
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.quadraticCurveTo(mx, my, B[0], B[1]);
    ctx.stroke();
  }
}

function split2(g) {
  const { x, y, w, h, u, gap, col1, col2, pad, under } = g;
  const ix = x + pad, iy = y + pad, iw = w - 2 * pad, ih = h - 2 * pad;
  const rad = pick([u, u * 2, Math.min(iw, ih) * 0.25]);
  ctx.save();
  rr(ix, iy, iw, ih, rad);
  ctx.clip();
  ctx.fillStyle = col1;
  ctx.fillRect(ix, iy, iw, ih);
  diagSplitFill(ix, iy, iw, ih, col2, under, gap);
  ctx.restore();
}

// 分割位置を決める。EDGE_SNAP_Pの確率で、範囲内にある既存の境界線(絶対座標)に揃える。
// なければ(または揃えなかった場合)ランダムな位置にして、新しい境界線として記録する
function snapCut(cutsList, origin, span, min) {
  const target = origin + clamp(span * rand(0.35, 0.65), min, span - min - GUT);
  const lo = origin + min, hi = origin + span - min - GUT;
  let pos = Math.round(target);
  if (R() < EDGE_SNAP_P) {
    const cands = cutsList.filter(v => v >= lo && v <= hi);
    if (cands.length) {
      cands.sort((p, q) => Math.abs(p - target) - Math.abs(q - target));
      pos = cands[0];
    }
  }
  if (!cutsList.includes(pos)) cutsList.push(pos);
  return pos - origin;
}

function split(x, y, w, h) {
  const MIN = S * 0.55, MAXC = S * 1.35;
  const canV = w >= 2 * MIN + GUT, canH = h >= 2 * MIN + GUT;
  const tooBig = w > MAXC || h > MAXC;
  if ((!canV && !canH) || (!tooBig && R() < 0.5)) { cells.push({ x, y, w, h }); return; }
  let vertical;
  if (canV && canH) vertical = w > h * 1.2 ? true : (h > w * 1.2 ? false : R() < 0.5);
  else vertical = canV;
  if (vertical) {
    const a = snapCut(xCuts, x, w, MIN);
    split(x, y, a, h);
    split(x + a + GUT, y, w - a - GUT, h);
  } else {
    const a = snapCut(yCuts, y, h, MIN);
    split(x, y, w, a);
    split(x, y + a + GUT, w, h - a - GUT);
  }
}

// 棒以外のマスは、さらに細かく分けて小さくする
function splitSmall(x, y, w, h, out) {
  const MINO = S * 0.4, MAXO = S * 0.95;
  const canV = w >= 2 * MINO + GUT, canH = h >= 2 * MINO + GUT;
  const big = w > MAXO || h > MAXO;
  if ((!canV && !canH) || (!big && R() < 0.6)) { out.push({ x, y, w, h, type: 'other' }); return; }
  let vertical;
  if (canV && canH) vertical = w > h * 1.2 ? true : (h > w * 1.2 ? false : R() < 0.5);
  else vertical = canV;
  if (vertical) {
    const a = snapCut(xCuts, x, w, MINO);
    splitSmall(x, y, a, h, out);
    splitSmall(x + a + GUT, y, w - a - GUT, h, out);
  } else {
    const a = snapCut(yCuts, y, h, MINO);
    splitSmall(x, y, w, a, out);
    splitSmall(x, y + a + GUT, w, h - a - GUT, out);
  }
}

// 大きいマスほど棒のマスになりやすい。棒にならなかったマスは小さく分ける
function assignTypes() {
  const out = [];
  for (const c of cells) {
    const area = c.w * c.h / (S * S);
    const pBar = clamp(BAR_BASE + BAR_SLOPE * area, 0.25, 0.92);
    if (R() < pBar) out.push({ x: c.x, y: c.y, w: c.w, h: c.h, type: 'bar' });
    else splitSmall(c.x, c.y, c.w, c.h, out);
  }
  cells = out;
  for (const c of cells) { c.main = null; c.bars = []; c.discs = []; c.nb = []; }
}

function touching(a, b) {
  return adjacent(a, b, GUT + 1);
}

function computeNeighbors() {
  for (let i = 0; i < cells.length; i++) {
    for (let j = i + 1; j < cells.length; j++) {
      if (touching(cells[i], cells[j])) { cells[i].nb.push(j); cells[j].nb.push(i); }
    }
  }
}

// 棒以外のマスは、隣り合うマスの主色が被らないようにする
function assignColors() {
  for (let i = 0; i < cells.length; i++) {
    const c = cells[i];
    if (c.type !== 'other') continue;
    const used = new Set();
    for (const j of c.nb) if (j < i && cells[j].main) used.add(cells[j].main);
    const free = COLORS.filter(k => !used.has(k));
    c.main = pickColor(free.length ? free : COLORS);
  }
}

// ---------- 棒以外のマスを描く ----------
function drawOtherCell(c) {
  const { x, y, w, h, main } = c;
  const u = clamp(Math.round(Math.min(w, h) / 14), 5, 14); // 線幅の単位
  const gap = Math.max(3, Math.round(u * 0.6));
  const others = COLORS.filter(k => k !== main);
  const plate = R() < PLATE_P;
  let col1, col2, pad = 0, under = BG;
  ctx.save();
  if (plate) {
    rr(x, y, w, h, pick([0, u, u * 2]));
    ctx.clip();
    ctx.fillStyle = main;
    ctx.fill();
    pad = gap * 2;
    under = main;
    col1 = R() < 0.5 ? BG : pickColor(others);
    col2 = pickColor(others.filter(k => k !== col1));
  } else {
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    col1 = main;
    col2 = pickColor(others);
  }
  const g = { x, y, w, h, u, gap, col1, col2, pad, under, round: R() < 0.65 };
  const motif = wpick([[circles, 2.2], [split2, 1.8]]);
  motif(g);
  ctx.restore();
}

function draw() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, W, H);
  for (const c of cells) {
    if (c.type === 'bar') drawBarCell(c);
    else drawOtherCell(c);
  }
}

function build(s) {
  seed = s;
  R = mulberry32(s);
  S = clamp(Math.round(Math.min(W, H) / 4.6), 100, 220);
  GUT = Math.max(5, Math.round(S / 22));
  cells = [];
  xCuts = []; yCuts = [];
  const ex = () => Math.round(R() * S * 0.4); // 端は少しはみ出して切れさせる
  const x0 = -ex(), y0 = -ex(), x1 = W + ex(), y1 = H + ex();
  split(x0, y0, x1 - x0, y1 - y0);
  assignTypes();
  computeNeighbors();
  assignColors();
  draw();
}

function layout() {
  dpr = window.devicePixelRatio || 1;
  W = window.innerWidth;
  H = window.innerHeight;
  cv.width = Math.round(W * dpr);
  cv.height = Math.round(H * dpr);
  build(seed);
}

let t;
window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layout, 100); });
window.addEventListener('orientationchange', () => { clearTimeout(t); t = setTimeout(layout, 200); });
cv.addEventListener('pointerdown', () => build((Math.random() * 4294967296) >>> 0)); // タップで作り直し
seed = (Math.random() * 4294967296) >>> 0;
layout();
seed = (Math.random() * 4294967296) >>> 0;
layout();
















































