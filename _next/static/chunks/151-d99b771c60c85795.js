(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{73435:function(t,e,a){"use strict";a.d(e,{A:function(){return r}});var n=a(98741);class r{addressForContract(t){return(0,n.contractAddress)({workchain:0,initialData:t.data,initialCode:t.code})}async deployContract(t,e){let a=this.addressForContract(t),r=new n.Cell;if(new n.StateInit({data:t.data,code:t.code}).writeTo(r),!t.dryRun){var c;let n={validUntil:Date.now()+3e5,messages:[{address:a.toString(),amount:t.value.toString(),stateInit:r.toBoc().toString("base64"),payload:null===(c=t.message)||void 0===c?void 0:c.toBoc().toString("base64")}]};await e.sendTransaction(n)}return a}}},3601:function(t,e,a){"use strict";a.d(e,{Bd:function(){return m}});var n,r,c=a(13550),o=a.n(c),s=a(98741),f=a(73435),i=a(35207),d=a(48980),l=a(26522),u=a(95879);let b=(0,s.toNano)(.25),g=new(o())(1e9),w=new(o())(1e6);(n=r||(r={}))[n.NOT_STARTED=0]="NOT_STARTED",n[n.BALANCE_CHECK=1]="BALANCE_CHECK",n[n.UPLOAD_IMAGE=2]="UPLOAD_IMAGE",n[n.UPLOAD_METADATA=3]="UPLOAD_METADATA",n[n.AWAITING_MINTER_DEPLOY=4]="AWAITING_MINTER_DEPLOY",n[n.AWAITING_JWALLET_DEPLOY=5]="AWAITING_JWALLET_DEPLOY",n[n.VERIFY_MINT=6]="VERIFY_MINT",n[n.ALREADY_DEPLOYED=7]="ALREADY_DEPLOYED",n[n.DONE=8]="DONE";class A{async createJetton(t,e,a,n,r,c){let o=new f.A,s=await (0,l.s)();if((await s.getBalance(t.owner)).lt(b)){n(r("Not enough balance in deployer wallet"));return}let d=(0,i.UM)(t,t.offchainUri),u=o.addressForContract(d),g=t=>Array.from(t).map(t=>t.toString(16).padStart(2,"0")).join("");if(await s.isContractDeployed(u)){c(),n(r("New contract address is already deployed, cannot proceed."));return}try{let t=await o.deployContract(d,e),n=setInterval(async()=>{if(await s.isContractDeployed(a)){clearInterval(n);let e=g(t.hash);c(u,e)}},3e3)}catch(t){n(r(t.message)),console.error(t),c()}return u}async someGetMethod(t,e){let a=await (0,l.s)();await (0,u.s)(t,"get_current_price",[],t=>{let[e]=t;return e},a),await (0,u.s)(t,"get_total_price_to_mint",[10],t=>{let[e]=t;return e},a),await (0,u.s)(t,"get_returns_for_burn",[10],t=>{let[e]=t;return e},a),await (0,u.s)(t,"get_wallet_address",[(0,s.beginCell)().storeAddress(e).endCell()],t=>{let[e]=t;return(0,u.V)(e)},a),await (0,u.s)(t,"get_jetton_data",[],async t=>{let[e,a,n,r]=t;return{...await (0,d.oh)(r),admin:(0,u.V)(n),totalSupply:e}},a)}async buy(t,e,a,n,r,c){let o=await (0,l.s)(),f=await (0,i.GO)(o.openWalletFromAddress({source:s.Address.parse(r)})),u={validUntil:Date.now()+3e5,messages:[{address:e.toString(),amount:a.add((0,s.toNano)(.15)).toString(),stateInit:void 0,payload:(0,d.RH)(s.Address.parse(r),a,n,(0,s.toNano)(.13),0,c||void 0).toBoc().toString("base64")}]};await t.sendTransaction(u),await f()}async burnJettons(t,e,a,n){let r=await (0,l.s)(),c=await (0,u.s)(s.Address.parse(a),"get_wallet_address",[(0,s.beginCell)().storeAddress(s.Address.parse(n)).endCell()],t=>{let[e]=t;return(0,u.V)(e)},r),f=await (0,i.GO)(r.openWalletFromAddress({source:s.Address.parse(n)})),b=new(o())(e*w.toNumber()),g={validUntil:Date.now()+3e5,messages:[{address:c.toString(),amount:(0,s.toNano)(.031).toString(),stateInit:void 0,payload:(0,d.By)(b,s.Address.parse(n)).toBoc().toString("base64")}]};await t.sendTransaction(g),await f()}async getReserve(t){let e=await (0,l.s)();return await (0,u.s)(t,"get_reserve_data",[],t=>{let[e,a]=t;return{jetton:e,ton:a}},e)}async getCurrentPrice(t){let e=await this.getReserve(t),a=e.ton,n=e.jetton.div(w);return a.toNumber()/n.toNumber()}async getJettonAmountOut(t,e){let a=await this.getReserve(t),n=new(o())((e*g).toString());return n.mul(a.jetton).div(a.ton.add(n)).div(new(o())(w)).toString()}getJettonAmountOutBeforeDeployment(t){let e=new(o())((t*g).toString());return e.mul(d.ZC).div(d.m9.add(e)).div(new(o())(w)).toString()}async getTonAmountOut(t,e){let a=await this.getReserve(t),n=new(o())(Number(e)*w);return n.mul(a.ton).div(a.jetton.add(n)).toNumber()/1e9}async burnAdmin(t,e,a){let n=await (0,l.s)(),r=await (0,i.GO)(n.openWalletFromAddress({source:s.Address.parse(a)})),c={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,s.toNano)(.01).toString(),stateInit:void 0,payload:(0,d.X5)((0,i.DR)()).toBoc().toString("base64")}]};await e.sendTransaction(c),await r()}async transfer(t,e,a,n,r){let c=await (0,l.s)(),o=await (0,i.GO)(c.openWalletFromAddress({source:s.Address.parse(n)})),f={validUntil:Date.now()+3e5,messages:[{address:r,amount:(0,s.toNano)(.05).toString(),stateInit:void 0,payload:(0,d.re)(s.Address.parse(a),s.Address.parse(n),e).toBoc().toString("base64")}]};await t.sendTransaction(f),await o()}async mint(t,e,a,n){let r=await (0,l.s)(),c=await (0,i.GO)(r.openWalletFromAddress({source:s.Address.parse(n)})),o={validUntil:Date.now()+3e5,messages:[{address:e.toString(),amount:(0,s.toNano)(.04).toString(),stateInit:void 0,payload:(0,d.PO)(s.Address.parse(n),a,(0,s.toNano)(.02),0).toBoc().toString("base64")}]};await t.sendTransaction(o),await c()}async getJettonDetails(t,e){let a=await (0,l.s)(),n=await (0,u.s)(t,"get_jetton_data",[],async t=>{let[e,a,n,r]=t;return{...await (0,d.oh)(r),admin:(0,u.V)(n),totalSupply:e}},a),r=await (0,u.s)(t,"get_wallet_address",[(0,s.beginCell)().storeAddress(e).endCell()],t=>{let[e]=t;return(0,u.V)(e)},a);return{minter:n,jettonWallet:await a.isContractDeployed(r)?await (0,u.s)(r,"get_wallet_data",[],t=>{let[e,a,n]=t;return{balance:e,jWalletAddress:r,jettonMasterAddress:(0,u.V)(n)}},a):null}}async fixFaultyJetton(t,e,a,n){let r=await (0,l.s)(),c=await (0,i.GO)(r.openWalletFromAddress({source:s.Address.parse(n)})),o=(0,d.Z1)((0,d.Mg)(e)),f={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,s.toNano)(.01).toString(),stateInit:void 0,payload:o.toBoc().toString("base64")}]};await a.sendTransaction(f),await c()}async updateMetadata(t,e,a,n){let r=await (0,l.s)(),c=await (0,i.GO)(r.openWalletFromAddress({source:s.Address.parse(n)})),o={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,s.toNano)(.01).toString(),stateInit:void 0,payload:(0,d.Z1)((0,d.Mg)(e)).toBoc().toString("base64")}]};await a.sendTransaction(o),await c()}}let m=new A},26522:function(t,e,a){"use strict";a.d(e,{s:function(){return f}});var n=a(98741),r=a(63395),c=a(91608);let o=(0,r.getHttpEndpoint)({network:c.L5}),s=async function(){return new n.TonClient({endpoint:await o})}();async function f(){return s}},54927:function(t,e,a){"use strict";a.d(e,{Bq:function(){return m},Ph:function(){return f},RX:function(){return b},Uk:function(){return p},d8:function(){return o},fP:function(){return g},gf:function(){return u},mr:function(){return i},oH:function(){return w},p6:function(){return d},qL:function(){return s},wb:function(){return A},zC:function(){return l}});var n=a(76104),r=a(91608);a(13550);var c=a(70794);let o=t=>{if(t)return t.slice(0,4)+"..."+t.slice(44)};function s(t,e){let a;try{a=n.Address.parse(t).toString({bounceable:!1,testOnly:"testnet"===r.L5})}catch(a){return console.log(a,"toUQAddressError"),e&&e(a.toString()),t}return a}function f(t){return new URLSearchParams(window.location.search).get(t)}function i(t){if(!t)return"";let e=new Date(t),a=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0"),c=String(e.getUTCHours()).padStart(2,"0"),o=String(e.getUTCMinutes()).padStart(2,"0"),s=String(e.getUTCSeconds()).padStart(2,"0"),f="".concat(a,"-").concat(n,"-").concat(r),i=function(){let t=new Date,e=t.getUTCFullYear(),a=String(t.getUTCMonth()+1).padStart(2,"0"),n=String(t.getUTCDate()).padStart(2,"0");return"".concat(e,"-").concat(a,"-").concat(n)}(),d="".concat(c,":").concat(o,":").concat(s);return f===i?d:f}function d(t){if(!t)return"";let e=new Date(t),a=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return String(e.getUTCHours()).padStart(2,"0"),String(e.getUTCMinutes()).padStart(2,"0"),String(e.getUTCSeconds()).padStart(2,"0"),"".concat(a,"-").concat(n,"-").concat(r)}function l(t){if(!t)return"";let e=new Date(t),a=new Date,n=a.getTime()-e.getTime();console.log(a.getTime(),e.getTime());let r=Math.floor(n/1e3),c=Math.floor(r/60),o=Math.floor(c/60),s=Math.floor(o/24);return s>0?"".concat(s,"d ago"):o>0?"".concat(o,"h ago"):c>0?"".concat(c,"m ago"):"".concat(r,"s ago")}let u=(t,e)=>{let a=Math.pow(10,e);return t.toString().split(".").length<2?t:(Math.floor(t*a)/a).toFixed(e)},b=(t,e)=>{let a=e||6;if(!t)return"";let n=Math.pow(10,a);return u(Number(t.toString())/n,a)},g=t=>{let e=t.length-6;return t.slice(0,18)+"..."+t.slice(e)},w=t=>{if(!t)return"";let e=Number(t)*localStorage.coinPrice;return e<1e3?(0,c.Z)(e).toFormat(2):e>=1e4?e>=1e7?(e/1e6).toFixed(2)+"M":(e/1e3).toFixed(2)+"K":(0,c.Z)(e).toFormat(0)},A=t=>{if(!t&&0!==t)return"";let e=Number(t);return e>=1e4?e>=1e7?(e/1e6).toFixed(0)+"M":(e/1e3).toFixed(0)+"K":(0,c.Z)(e).toFormat(0)},m=t=>{if(!t)return"";let e=Number(t);return e<1e3?(0,c.Z)(e).toFormat(2):e>=1e4?e>=1e7?(e/1e6).toFixed(2)+"M":(e/1e3).toFixed(2)+"K":(0,c.Z)(e).toFormat(0)},p=t=>{if(!t)return"";let e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),c=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return"".concat(a,"/").concat(n,"/").concat(r," ").concat(c,":").concat(o,":").concat(s)}},48980:function(t,e,a){"use strict";a.d(e,{ZC:function(){return w},m9:function(){return A},FB:function(){return g},Mg:function(){return T},By:function(){return N},RH:function(){return h},X5:function(){return M},ch:function(){return E},PO:function(){return U},oh:function(){return _},re:function(){return I},Z1:function(){return O}});var n,r,c=a(13550),o=a.n(c),s=a(98741),f=JSON.parse('{"$":"b5ee9c72c1021101000323000000000d001200220027002c00700075007a00e8016801a801e2025e02af02b402bf0114ff00f4a413f4bcf2c80b010201620302001ba0f605da89a1f401f481f481a8610202cc0e0402012006050083d40106b90f6a2687d007d207d206a1802698fc1080bc6a28ca9105d41083deecbef09dd0958f97162e99f98fd001809d02811e428027d012c678b00e78b6664f6aa40201200c07020120090800d73b51343e803e903e90350c01f4cffe803e900c145468549271c17cb8b049f0bffcb8b08160824c4b402805af3cb8b0e0841ef765f7b232c7c572cfd400fe8088b3c58073c5b25c60063232c14933c59c3e80b2dab33260103ec01004f214013e809633c58073c5b3327b552002f73b51343e803e903e90350c0234cffe80145468017e903e9014d6f1c1551cdb5c150804d50500f214013e809633c58073c5b33248b232c044bd003d0032c0327e401c1d3232c0b281f2fff274140371c1472c7cb8b0c2be80146a2860822625a019ad822860822625a028062849e5c412440e0dd7c138c34975c2c0600b0a007cc30023c200b08e218210d53276db708010c8cb055008cf165004fa0216cb6a12cb1f12cb3fc972fb0093356c21e203c85004fa0258cf1601cf16ccc9ed5400705279a018a182107362d09cc8cb1f5230cb3f58fa025007cf165007cf16c9718010c8cb0524cf165006fa0215cb6a14ccc971fb001024102301f1503d33ffa00fa4021f001ed44d0fa00fa40fa40d4305136a1522ac705f2e2c128c2fff2e2c254344270542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f40431fa0020d749c200f2e2c4778018c8cb055008cf1670fa0217cb6b13cc80d009e8210178d4519c8cb1f19cb3f5007fa0222cf165006cf1625fa025003cf16c95005cc2391729171e25008a813a08209c9c380a014bcf2e2c504c98040fb001023c85004fa0258cf1601cf16ccc9ed540201d4100f00113e910c1c2ebcb8536000c30831c02497c138007434c0c05c6c2544d7c0fc03383e903e900c7e800c5c75c87e800c7e800c1cea6d0000b4c7e08403e29fa954882ea54c4d167c0278208405e3514654882ea58c511100fc02b80d60841657c1ef2ea4d67c02f817c12103fcbc200475cc36"}'),i=JSON.parse('{"$":"b5ee9c72410217010005b0000114ff00f4a413f4bcf2c80b01020162020e0202cc030d02d1d906380492f81f000e8698180b8d8492f81f07d201876a2687d0000fc30fd2000fc316a00fc31ea00fc327d0000fc32fd0000fc336a00e87d2000fc33fd2000fc347d20187c34e980187c3500e98fe99f9140915c5d71811a41083deecbef095d71812f81c207f9784040a01de32f84ac001f2d1f701fa40fa00fa00fa00fa00fa40305342a019bef2e1f52382019904ed43d85204bef2e1f62282080f4240a90482080f4240a870208210178d4519c8cb1f5290cb3f23fa02cb0129cf165003fa0212cb00c94550f008f84123a0f861f84501a1f865f84621a0f8660501fcf84ac8f847cf16f848cf16f849cf16c9f844f843c8f841fa02f842cf16ccccf845fa02f846fa02cccb00c9ed547025d70b01c3009530217aa904def823c85007cf1601fa02c98122b8c8cb1ff828cf165005cf1601fa0201fa02f846fa02f845fa0212cc12cb1fc9718010c8cb05f849cf1670fa02cb6accc971fb00f846060118821a74a48a7800be9130e30d0701fef8468218a2fb405800a182238d7ea4c68000f841a1f847f828f84470542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c920f9007074c8cb02ca07cbffc9d08210fcf9e58fc8cb1ff848cf1671fa02c971708210178d4519c8cb1f5280cb3f5006fa02f828cf1615cb0182100bebc200fa0214cb000801fe13ccc9778018c8cb0524cf1682100ee6b280fa02cb6b12ccccc971fb008210fcf9e58fc8cb1f01cf1671fa02c971702082100f8a7ea5c8cb1f16cb3f24fa02f847cf1615cb0114cb0082100bebc200fa0213cb0012ccc9718018c8cb05f848cf160382100bebc200a013fa0212cb6accc971fb0082238d7ea4c68000f8617109005ef86af84ac8f847cf16f848cf16f849cf16c9f844f843c8f841fa02f842cf16ccccf845fa02f846fa02cccb00c9ed5402fe02fa00fa40f828f844235970542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c9f9007074c8cb02ca07cbffc9d05004c705f2e04a21820106daed43d88122c4708010c8cb0524cf1623fa02cb6acb1f5250cb3fc973fb0003fa403020d70b01c300923033e30d2082080f4240a90482080f4240a80b0c00408210d53276db708010c8cb055003cf1622fa0212cb6acb1f14cb3fc98042fb0000e8f84101a1f861f84521a0f865f84622a1f866f84ac8f847cf16f848cf16f849cf16c9f844f843c8f841fa02f842cf16ccccf845fa02f846fa02cccb00c9ed54f8238122c4c8cb1ff828cf165004cf1601fa0201fa02f846fa02f845fa02cb1fc9718010c8cb05f849cf1670fa02cb6accc971fb000095dfc147c220812382a1009aa0a01e428027d012c678b00e78b666491646580897a007a00658064907c80383a6465816503e5ffe4e83bc00c646582ac678b2801fd010965b5e66664b8fd8040201200f100087bc36d76a2687d0000fc30fd2000fc316a00fc31ea00fc327d0000fc32fd0000fc336a00e87d2000fc33fd2000fc347d20187c34e980187c357c232908547c22ac50548240201201116020166121300d3adbcf6a2687d0000fc30fd2000fc316a00fc31ea00fc327d0000fc32fd0000fc336a00e87d2000fc33fd2000fc347d20187c34e980187c357c147c22382a1009aa0a01e428027d012c678b00e78b666491646580897a007a00658064fc80383a6465816503e5ffe4e84002012014150086a904ed44d0fa0001f861fa4001f862d401f863d401f864fa0001f865fa0001f866d401d0fa4001f867fa4001f868fa4030f869d30030f86af8455210a8f84658a0a9040082aa2ded44d0fa0001f861fa4001f862d401f863d401f864fa0001f865fa0001f866d401d0fa4001f867fa4001f868fa4030f869d30030f86af8417ff842f843f8440079b95e6ed44d0fa0001f861fa4001f862d401f863d401f864fa0001f865fa0001f866d401d0fa4001f867fa4001f868fa4030f869d30030f86af845f84689fbd461b"}'),d=a(40947),l=a(87066),u=a(21876).Buffer;let b=s.Cell.fromBoc(f.$)[0],g=s.Cell.fromBoc(i.$)[0],w=new(o())("1072058823529410"),A=new(o())(700*1e9),m=s.Address.parse("kQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4Tp6n"),p=s.Address.parse("kQARULUYsmJq1RiZ-YiH-IJLcAZUVkVff-KBPwEmmaQGHx0I"),C=s.Address.parse("0QAwsogMS738XGFHAFKontCdPr730MoRyF34SkPY7cSuuqlk");(n=r||(r={}))[n.ChangeAdmin=3]="ChangeAdmin",n[n.ReplaceMetadata=4]="ReplaceMetadata",n[n.Mint=21]="Mint",n[n.BUY=8888]="BUY",n[n.SELL=8900]="SELL",n[n.InternalTransfer=395134233]="InternalTransfer",n[n.Transfer=260734629]="Transfer",n[n.Burn=1499400124]="Burn";let S={name:"utf8",description:"utf8",image:"ascii",decimals:"utf8",symbol:"utf8",image_data:void 0,uri:"ascii"},y=t=>{let e=new d.f;return e.update(t),u.from(e.digestSync())};function T(t){let e=(0,s.beginDict)(256);return Object.entries(t).forEach(t=>{let[a,n]=t;if(!S[a])throw Error("Unsupported onchain key: ".concat(a));if(void 0===n||""===n)return;let r=u.from(n,S[a]),c=Math.floor(126.875),o=new s.Cell;o.bits.writeUint8(0);let f=o;for(;r.length>0;)if(f.bits.writeBuffer(r.slice(0,c)),(r=r.slice(c)).length>0){let t=new s.Cell;f.refs.push(t),f=t}e.storeRef(y(a),o)}),(0,s.beginCell)().storeInt(0,8).storeDict(e.endDict()).endCell()}async function _(t){let e=t.beginParse();switch(e.readUint(8).toNumber()){case 0:{let t=function(t){let e=t=>new(o())(t,"hex").toString(10),a=!1,n=t.readDict(256,t=>{let e=u.from(""),n=(t,e,a)=>{if(t.toCell().beginParse(),a&&0!==t.readUint(8).toNumber())throw Error("Only snake format is supported");return e=u.concat([e,t.readRemainingBytes()]),1===t.remainingRefs&&(e=n(t.readRef(),e,!1)),e};return 0===t.remainingRefs?(a=!0,n(t,e,!0)):n(t.readRef(),e,!0)}),r={};return Object.keys(S).forEach(t=>{var a;let c=null===(a=n.get(e(y(t).toString("hex"))))||void 0===a?void 0:a.toString(S[t]);c&&(r[t]=c)}),{metadata:r,isJettonDeployerFaultyOnChainData:a}}(e),a="onchain";if(t.metadata.uri){let e=await v(t.metadata.uri);a=e.isIpfs?"offchain_ipfs":"offchain_private_domain",t.metadata={...t.metadata,...e.metadata}}return{persistenceType:a,...t}}case 1:{let{metadata:t,isIpfs:a}=await D(e);return{persistenceType:a?"offchain_ipfs":"offchain_private_domain",metadata:t}}default:throw Error("Unexpected jetton metadata content prefix")}}async function D(t){return v(t.readRemainingBytes().toString("ascii"))}async function v(t){let e=t.replace("ipfs://","https://ipfs.io/ipfs/");return{metadata:(await l.Z.get(e)).data,isIpfs:/(^|\/)ipfs[.:]/.test(e)}}function E(t,e,a){if(!e&&!a)throw Error("Must either specify onchain data or offchain uri");return(0,s.beginCell)().storeCoins(0).storeAddress(t).storeRef(a?(0,s.beginCell)().storeInt(1,8).storeBuffer(u.from(a,"ascii")).endCell():T(e)).storeRef(b).storeCoins(w).storeCoins(A).storeRef((0,s.beginCell)().storeAddress(m).storeAddress(p).storeAddress(C).endCell()).storeBit(!1).endCell()}function h(t,e,a,n,r,c){return(0,s.beginCell)().storeUint(8888,32).storeUint(r,64).storeAddress(t).storeCoins(e).storeCoins(a).storeCoins(n).storeCoins((0,s.toNano)(.001)).storeAddress(null!=c?c:null).endCell()}function N(t,e){return(0,s.beginCell)().storeUint(1499400124,32).storeUint(1,64).storeCoins(t).storeAddress(e).storeDict(null).endCell()}function U(t,e,a,n){return(0,s.beginCell)().storeUint(21,32).storeUint(n,64).storeAddress(t).storeCoins(a).storeRef((0,s.beginCell)().storeUint(395134233,32).storeUint(0,64).storeCoins(e).storeAddress(null).storeAddress(t).storeCoins((0,s.toNano)(.001)).storeBit(!1).endCell()).endCell()}function I(t,e,a){return(0,s.beginCell)().storeUint(260734629,32).storeUint(1,64).storeCoins(a).storeAddress(t).storeAddress(e).storeBit(!1).storeCoins((0,s.toNano)(.001)).storeBit(!1).endCell()}function M(t){return(0,s.beginCell)().storeUint(3,32).storeUint(0,64).storeAddress(t).endCell()}function O(t){return(0,s.beginCell)().storeUint(4,32).storeUint(0,64).storeRef(t).endCell()}},95879:function(t,e,a){"use strict";a.d(e,{V:function(){return s},s:function(){return f}});var n=a(98741),r=a(13550),c=a.n(r),o=a(21876).Buffer;function s(t){return t.beginParse().readAddress()}async function f(t,e,a,r,s){console.log(e,"makegetCall");let{stack:f}=await s.callGetMethod(t,e,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map(t=>{if(t instanceof n.Cell)return["tvm.Slice",t.toBoc({idx:!1}).toString("base64")];if(t instanceof c())return["num",t.toString(10)];throw Error("not Cell Or Bignumber,unknown type!")})}(a));return r(f.map(t=>{let[e,a]=t;switch(e){case"num":return new(c())(a.replace("0x",""),"hex");case"cell":return n.Cell.fromBoc(o.from(a.bytes,"base64"))[0];case"list":if(0===a.elements.length)return null;throw Error("list parsing not supported");default:throw Error("unknown type: ".concat(e,", val: ").concat(JSON.stringify(a)))}}))}},35207:function(t,e,a){"use strict";a.d(e,{UM:function(){return y},OZ:function(){return S},GO:function(){return C},DR:function(){return p}});var n,r,c=a(98741),o=a(13550),s=a.n(o),f=a(73435),i=a(48980),d=a(26522),l=a(95879);let u=(0,c.toNano)(.25),b=new(s())(1e9),g=new(s())(1e6);(n=r||(r={}))[n.NOT_STARTED=0]="NOT_STARTED",n[n.BALANCE_CHECK=1]="BALANCE_CHECK",n[n.UPLOAD_IMAGE=2]="UPLOAD_IMAGE",n[n.UPLOAD_METADATA=3]="UPLOAD_METADATA",n[n.AWAITING_MINTER_DEPLOY=4]="AWAITING_MINTER_DEPLOY",n[n.AWAITING_JWALLET_DEPLOY=5]="AWAITING_JWALLET_DEPLOY",n[n.VERIFY_MINT=6]="VERIFY_MINT",n[n.ALREADY_DEPLOYED=7]="ALREADY_DEPLOYED",n[n.DONE=8]="DONE";class w{async createJetton(t,e,a){let n=new f.A,r=await (0,d.s)();if((await r.getBalance(t.owner)).lt(u))throw Error("Not enough balance in deployer wallet");let o=y(t,t.offchainUri),s=n.addressForContract(o);await r.isContractDeployed(s)||(await n.deployContract(o,e),await S(s,r));let i=await (0,l.s)(s,"get_wallet_address",[(0,c.beginCell)().storeAddress(t.owner).endCell()],t=>{let[e]=t;return e.beginParse().readAddress()},r);return await S(c.Address.parse(i),r),s}async buy(t,e,a,n,r){let o=await (0,d.s)(),s=await C(o.openWalletFromAddress({source:c.Address.parse(r)})),f={validUntil:Date.now()+3e5,messages:[{address:e.toString(),amount:a.add((0,c.toNano)(.15)).toString(),stateInit:void 0,payload:(0,i.RH)(c.Address.parse(r),a,n,(0,c.toNano)(.13),0).toBoc().toString("base64")}]};await t.sendTransaction(f),await s()}async burnJettons(t,e,a,n){let r=await (0,d.s)(),o=await C(r.openWalletFromAddress({source:c.Address.parse(n)})),s={validUntil:Date.now()+3e5,messages:[{address:a,amount:(0,c.toNano)(.031).toString(),stateInit:void 0,payload:(0,i.By)(e,c.Address.parse(n)).toBoc().toString("base64")}]};await t.sendTransaction(s),await o()}async getReserve(t){let e=await (0,d.s)();return await (0,l.s)(t,"get_reserve_data",[],t=>{let[e,a]=t;return{jetton:e,ton:a}},e)}async getCurrentPrice(t){let e=await this.getReserve(t),a=e.ton.div(b),n=e.jetton.div(g);return a.toNumber()/n.toNumber()}async getJettonAmountOut(t,e){let a=await this.getReserve(t),n=new(s())(e).mul(b);return n.mul(a.jetton).div(a.ton.add(n)).div(g).toString()}getJettonAmountOutBeforeDeployment(t){let e=new(s())(t).mul(b);return e.mul(i.ZC).div(i.m9.add(e)).div(g).toString()}async getTonAmountOut(t,e){let a=await this.getReserve(t),n=new(s())(e).mul(g);return n.mul(a.ton).div(a.jetton.add(n)).toNumber()/1e9}async burnAdmin(t,e,a){let n=await (0,d.s)(),r=await C(n.openWalletFromAddress({source:c.Address.parse(a)})),o={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,c.toNano)(.01).toString(),stateInit:void 0,payload:(0,i.X5)(p()).toBoc().toString("base64")}]};await e.sendTransaction(o),await r()}async transfer(t,e,a,n,r){let o=await (0,d.s)(),s=await C(o.openWalletFromAddress({source:c.Address.parse(n)})),f={validUntil:Date.now()+3e5,messages:[{address:r,amount:(0,c.toNano)(.05).toString(),stateInit:void 0,payload:(0,i.re)(c.Address.parse(a),c.Address.parse(n),e).toBoc().toString("base64")}]};await t.sendTransaction(f),await s()}async mint(t,e,a,n){let r=await (0,d.s)(),o=await C(r.openWalletFromAddress({source:c.Address.parse(n)})),s={validUntil:Date.now()+3e5,messages:[{address:e.toString(),amount:(0,c.toNano)(.04).toString(),stateInit:void 0,payload:(0,i.PO)(c.Address.parse(n),a,(0,c.toNano)(.02),0).toBoc().toString("base64")}]};await t.sendTransaction(s),await o()}async getJettonDetails(t,e){let a=await (0,d.s)(),n=await (0,l.s)(t,"get_jetton_data",[],async t=>{let[e,a,n,r]=t;return{...await (0,i.oh)(r),admin:(0,l.V)(n),totalSupply:e}},a),r=await (0,l.s)(t,"get_wallet_address",[(0,c.beginCell)().storeAddress(e).endCell()],t=>{let[e]=t;return(0,l.V)(e)},a);return{minter:n,jettonWallet:await a.isContractDeployed(r)?await (0,l.s)(r,"get_wallet_data",[],t=>{let[e,a,n]=t;return{balance:e,jWalletAddress:r,jettonMasterAddress:(0,l.V)(n)}},a):null}}async fixFaultyJetton(t,e,a,n){let r=await (0,d.s)(),o=await C(r.openWalletFromAddress({source:c.Address.parse(n)})),s=(0,i.Z1)((0,i.Mg)(e)),f={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,c.toNano)(.01).toString(),stateInit:void 0,payload:s.toBoc().toString("base64")}]};await a.sendTransaction(f),await o()}async updateMetadata(t,e,a,n){let r=await (0,d.s)(),o=await C(r.openWalletFromAddress({source:c.Address.parse(n)})),s={validUntil:Date.now()+3e5,messages:[{address:t.toString(),amount:(0,c.toNano)(.01).toString(),stateInit:void 0,payload:(0,i.Z1)((0,i.Mg)(e)).toBoc().toString("base64")}]};await a.sendTransaction(s),await o()}}new w;var A=a(83454);async function m(t){return new Promise(e=>{setTimeout(e,t)})}function p(){return(0,c.beginCell)().storeUint(2,2).storeUint(0,1).storeUint(0,8).storeUint(0,256).endCell().beginParse().readAddress()}async function C(t){let e=await t.getSeqNo();return async()=>{for(let a=0;a<25;a++)if(await m(3e3),await t.getSeqNo()>e)return;throw Error("Timeout")}}async function S(t,e){let a=!1,n=25;for(;!a&&n>0;){if(n--,a=await e.isContractDeployed(t))return;await m(3e3)}throw Error("Timeout")}let y=(t,e)=>{var a;let n=parseInt(null!==(a=A.env.REACT_APP_DEPLOY_QUERY_ID)&&void 0!==a?a:"0");return{code:i.FB,data:(0,i.ch)(t.owner,t.onchainMetaData,e),deployer:t.owner,value:t.tonAmountIn?t.tonAmountIn.add(u):u,message:t.tonAmountIn?(0,i.RH)(t.owner,t.tonAmountIn,(0,c.toNano)(0),(0,c.toNano)(.2),n):void 0}}},99401:function(){}}]);