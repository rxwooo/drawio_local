if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const o=e=>r(e,s),f={module:{uri:s},exports:d,require:o};i[s]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(c(...e),d)))}}define(["./workbox-72a83b64"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"7683b47ec0449777af88dad513e32e07"},{url:"js/extensions.min.js",revision:"3136b7d82b8c01e65b72a389b313a058"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"fe2a82f06de200bdde8306d483f1d82f"},{url:"js/shapes-14-6-5.min.js",revision:"1b26ebf0e2a8629737c081b0f5baa16d"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"53502d6bc1b388b7fb04d2e0156f851e"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"shortcuts.svg",revision:"e7883d8c6cebb174e241fa401324d271"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"e32ed0e0dc4d3d26534fb015a324a936"},{url:"styles/atlas.css",revision:"0a6cc8a503b96f634e40309aadf6b803"},{url:"styles/dark.css",revision:"99dc5495d36d5ebaddababefde083c8c"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"aeb12ecdba02d721dbcd9c746a65b14a"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"3def6121aa291841a38320ebffc51457"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"b30113797d4498d3fbaad45ecded7a60"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"c7aa77338fc5eea1ee12bd4384ec4a60"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"f550a538e480476f01dce659830ce92a"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"5fb6ff1a73f54a9086b7a7e1f613b8ed"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"4c6460efa408356560c966610b7c416b"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"e0de3984375857fddc7cc5b33b25bf67"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"03a8dcfc69612b44b6e75e6926a956fc"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"a3b36766033aa3d59083961433f26310"},{url:"resources/dia_am.txt",revision:"121655c84605ddc1353825548b361abb"},{url:"resources/dia_ar.txt",revision:"8d1e4ffb6aa2509e2f5b8c5ffa2495b9"},{url:"resources/dia_bg.txt",revision:"3c03703f7d9c3777a04b238f6053406c"},{url:"resources/dia_bn.txt",revision:"6451402e509a10897ba21b3c34a6ccdd"},{url:"resources/dia_bs.txt",revision:"4567cbc63c05e17e6d0c3d569673c0af"},{url:"resources/dia_ca.txt",revision:"58ee8da55b9f05b668d25d582000588a"},{url:"resources/dia_cs.txt",revision:"ba9c689435fafb709972c40a7ca2a116"},{url:"resources/dia_da.txt",revision:"12feffed470497d00bf909e70a378b36"},{url:"resources/dia_de.txt",revision:"9904091cb47d5d3d1a5984cdbaf422c1"},{url:"resources/dia_el.txt",revision:"2e99d1cd99b7f78d503ab61113b6e7df"},{url:"resources/dia_eo.txt",revision:"69fefb35c79b68c887ddfa78bf938dfd"},{url:"resources/dia_es.txt",revision:"8edc05401be7be9dbd3b158277857a89"},{url:"resources/dia_et.txt",revision:"a4e5cc87d36aa3c6f9d46880972331ae"},{url:"resources/dia_eu.txt",revision:"037ba583fc9f53d2a7c9c0d37dbd5979"},{url:"resources/dia_fa.txt",revision:"153b24f4a61f27c2b0d50a1af8d3489c"},{url:"resources/dia_fi.txt",revision:"33ccbc20618b98c5da0029e58c8c96cc"},{url:"resources/dia_fil.txt",revision:"fe6b6b1857afcf2d32278b3974a5657a"},{url:"resources/dia_fr.txt",revision:"9dce1543d431fede4240990e4c3f406b"},{url:"resources/dia_gl.txt",revision:"7d85dbc97c636a2b7fb247f897172bbd"},{url:"resources/dia_gu.txt",revision:"315597014b6bb2dd205c3598fde5cc4a"},{url:"resources/dia_he.txt",revision:"6e2e487ffedbbb9259b5c5b63a785f6d"},{url:"resources/dia_hi.txt",revision:"ed2b049f64e22ab0794997426b9b2625"},{url:"resources/dia_hr.txt",revision:"8bbe988b34e261e77e5abfeec5040579"},{url:"resources/dia_hu.txt",revision:"c68466b34533187f7df2919926919ab2"},{url:"resources/dia_id.txt",revision:"bb5fb415fc2259da0985bb599dba5381"},{url:"resources/dia_it.txt",revision:"9ee0912165053bc9e372c673dc42483e"},{url:"resources/dia_ja.txt",revision:"f56765c50e6fcf593be6c43aeb9fd47c"},{url:"resources/dia_kn.txt",revision:"1db316576f0e7a9b5c06accd498c1a33"},{url:"resources/dia_ko.txt",revision:"f8250cf51018acd0702732cc07c01220"},{url:"resources/dia_lt.txt",revision:"5968b85fd964c7b2bfcef1567f83b482"},{url:"resources/dia_lv.txt",revision:"480f68866ba6d56fca7a13d20be13735"},{url:"resources/dia_ml.txt",revision:"9d12ca6c4fd1bca36a742659e0eb1930"},{url:"resources/dia_mr.txt",revision:"d6ddc4e476235599cb45513bff60d746"},{url:"resources/dia_ms.txt",revision:"9497f361046a1cf992e8ff6a78723c2d"},{url:"resources/dia_my.txt",revision:"a3b36766033aa3d59083961433f26310"},{url:"resources/dia_nl.txt",revision:"09310e8050e0084a46154920088f87b5"},{url:"resources/dia_no.txt",revision:"eca8dc8945c2691b1e14a5563002428b"},{url:"resources/dia_pl.txt",revision:"5290fdc15c67b549b01e8d4e0cf3eaea"},{url:"resources/dia_pt-br.txt",revision:"2618c73e672e17641698d8c467ebd51f"},{url:"resources/dia_pt.txt",revision:"286562429e39716dbd58524b10e8bb9c"},{url:"resources/dia_ro.txt",revision:"773fe58b7043814c16c2eef4b75d9e67"},{url:"resources/dia_ru.txt",revision:"4fcbf19262c09b021d77ba63dd83f532"},{url:"resources/dia_si.txt",revision:"a3b36766033aa3d59083961433f26310"},{url:"resources/dia_sk.txt",revision:"1c12136cca0753ae7626eff0545cca3b"},{url:"resources/dia_sl.txt",revision:"0de54717d1b082683aba33500896b098"},{url:"resources/dia_sr.txt",revision:"28415240d424e7cf29eb93b700a33855"},{url:"resources/dia_sv.txt",revision:"eef073990d1abc3ba107055fff564f3b"},{url:"resources/dia_sw.txt",revision:"7fcb6ebfdfe10e6420c9ff143478e45b"},{url:"resources/dia_ta.txt",revision:"fed2ea1c0cf14a6e4545006ab5ac3f77"},{url:"resources/dia_te.txt",revision:"1c6dd52e2ea2e92e33b3efb3f229d533"},{url:"resources/dia_th.txt",revision:"a58078f7cc3a535ca559ae4752d02191"},{url:"resources/dia_tr.txt",revision:"2a1332775c4903594e352a5e9e5bef7c"},{url:"resources/dia_uk.txt",revision:"8dfdbb822740723f7ef4918543652fab"},{url:"resources/dia_vi.txt",revision:"f32698a3b99948d5901826a0ca4ef6e9"},{url:"resources/dia_zh-tw.txt",revision:"e71ddb6442b63a12fec3bdf55a5ac290"},{url:"resources/dia_zh.txt",revision:"23de47837abc30eb0c1e677dfc0c6e8d"},{url:"favicon.ico",revision:"83014b0f32b6c7b15b66cf3c6d6d7c16"},{url:"images/manifest.json",revision:"e77092f9f5912c39cd34024443c2299b"},{url:"images/logo.png",revision:"e4e0d092abdb1e668b5ec41a7fe0713c"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"732c29e21332a926318a7005d21ec450"},{url:"images/icon-192-maskable.png",revision:"47e006d0ce4a35eb5beaa97f0c2bfed0"},{url:"images/icon-192.png",revision:"d022403d52435d76afec82c4e24a17ef"},{url:"images/icon-512-maskable.png",revision:"cf152feeb01fb21f3148a71a3540266e"},{url:"images/icon-512.png",revision:"a3a0df7e7a385244b74073f81ecc45de"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"7985b4d1692766a7db52cbdd10893ad9"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
