"use strict";(self.webpackChunkangular_standalone_components_app=self.webpackChunkangular_standalone_components_app||[]).push([[2],{1002:(O,h,s)=>{s.r(h),s.d(h,{PhotoListComponent:()=>E});var p=s(6814),r=s(5879),c=s(3680);const _=["*",[["mat-card-footer"]]],v=["*","mat-card-footer"];let C=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275dir=r.lG2({type:a,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]})}return a})(),w=(()=>{class a{constructor(t){this._animationMode=t}static#t=this.\u0275fac=function(e){return new(e||a)(r.Y36(r.QbO,8))};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,n){2&e&&r.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode)},exportAs:["matCard"],ngContentSelectors:v,decls:2,vars:0,template:function(e,n){1&e&&(r.F$t(_),r.Hsn(0),r.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0})}return a})(),S=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=r.oAB({type:a});static#i=this.\u0275inj=r.cJS({imports:[c.BQ,c.BQ]})}return a})();var g=s(2495),T=s(9388);const u=["*"];class b{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}update(i,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(e=>this._trackTile(e))}_trackTile(i){const t=this._findMatchingGap(i.colspan);return this._markTilePosition(t,i),this.columnIndex=t+i.colspan,new D(this.rowIndex,t)}_findMatchingGap(i){let t=-1,e=-1;do{this.columnIndex+i>this.tracker.length?(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t)):(t=this.tracker.indexOf(0,this.columnIndex),-1!=t?(e=this._findGapEndIndex(t),this.columnIndex=t+1):(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t)))}while(e-t<i||0==e);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let t=i+1;t<this.tracker.length;t++)if(0!=this.tracker[t])return t;return this.tracker.length}_markTilePosition(i,t){for(let e=0;e<t.colspan;e++)this.tracker[i+e]=t.rowspan}}class D{constructor(i,t){this.row=i,this.col=t}}const f=new r.OlP("MAT_GRID_LIST");let y=(()=>{class a{constructor(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,g.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,g.su)(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}static#t=this.\u0275fac=function(e){return new(e||a)(r.Y36(r.SBq),r.Y36(f,8))};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(e,n){2&e&&r.uIk("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:u,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(e,n){1&e&&(r.F$t(),r.TgZ(0,"div",0),r.Hsn(1),r.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return a})();const I=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class m{constructor(){this._rows=0,this._rowspan=0}init(i,t,e,n){this._gutterSize=M(i),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=e,this._direction=n}getBaseTileSize(i,t){return`(${i}% - (${this._gutterSize} * ${t}))`}getTilePosition(i,t){return 0===t?"0":d(`(${i} + ${this._gutterSize}) * ${t}`)}getTileSize(i,t){return`(${i} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(i,t,e){let n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(i,e,n,o),this.setRowStyles(i,t,n,o)}setColStyles(i,t,e,n){let o=this.getBaseTileSize(e,n);i._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(o,t)),i._setStyle("width",d(this.getTileSize(o,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}}class A extends m{constructor(i){super(),this.fixedRowHeight=i}init(i,t,e,n){super.init(i,t,e,n),this.fixedRowHeight=M(this.fixedRowHeight),I.test(this.fixedRowHeight)}setRowStyles(i,t){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),i._setStyle("height",d(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",d(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class G extends m{constructor(i){super(),this._parseRatio(i)}setRowStyles(i,t,e,n){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,n),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),i._setStyle("paddingTop",d(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",d(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(i){const t=i.split(":");this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}}class z extends m{setRowStyles(i,t){let o=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);i._setStyle("top",this.getTilePosition(o,t)),i._setStyle("height",d(this.getTileSize(o,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function d(a){return`calc(${a})`}function M(a){return a.match(/([A-Za-z%]+)$/)?a:`${a}px`}let F=(()=>{class a{constructor(t,e){this._element=t,this._dir=e,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,g.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const e=`${t??""}`;e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new z:t&&t.indexOf(":")>-1?new G(t):new A(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new b);const t=this._tileCoordinator,e=this._tiles.filter(o=>!o._gridList||o._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,n),e.forEach((o,l)=>{const x=t.positions[l];this._tileStyler.setStyle(o,x.row,x.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static#t=this.\u0275fac=function(e){return new(e||a)(r.Y36(r.SBq),r.Y36(T.Is,8))};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["mat-grid-list"]],contentQueries:function(e,n,o){if(1&e&&r.Suo(o,y,5),2&e){let l;r.iGM(l=r.CRH())&&(n._tiles=l)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(e,n){2&e&&r.uIk("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[r._Bn([{provide:f,useExisting:a}])],ngContentSelectors:u,decls:2,vars:0,template:function(e,n){1&e&&(r.F$t(),r.TgZ(0,"div"),r.Hsn(1),r.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return a})(),k=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=r.oAB({type:a});static#i=this.\u0275inj=r.cJS({imports:[c.uc,c.BQ,c.uc,c.BQ]})}return a})();var $=s(9315),R=s(2096),P=s(7398),j=s(4650);function B(a,i){if(1&a&&(r.TgZ(0,"mat-grid-tile",2)(1,"mat-card",3),r._UZ(2,"img",4),r.qZA()()),2&a){const t=i.$implicit;r.xp6(2),r.Q6J("src",t,r.LSH)}}let E=(()=>{class a{constructor(t){this.photoService=t,this.photos=[]}ngOnInit(){(0,$.D)([1,2,3,4].map(t=>(0,R.of)(t).pipe((0,P.U)(e=>this.photoService.getPhotoUrl(e))))).subscribe(t=>this.photos=t)}static#t=this.\u0275fac=function(e){return new(e||a)(r.Y36(j.V))};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["app-photo-list"]],standalone:!0,features:[r.jDz],decls:2,vars:1,consts:[["cols","2","rowHeight","2:1"],["style","margin: 16px",4,"ngFor","ngForOf"],[2,"margin","16px"],[1,"example-card"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"]],template:function(e,n){1&e&&(r.TgZ(0,"mat-grid-list",0),r.YNc(1,B,3,1,"mat-grid-tile",1),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngForOf",n.photos))},dependencies:[p.ez,p.sg,S,w,C,k,F,y],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]})}return a})()}}]);