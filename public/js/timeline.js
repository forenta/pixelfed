!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s=6)}({6:function(t,e,s){t.exports=s("KqaD")},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var s=e.protocol+"//"+e.host,o=s+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?s+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=function(t,e){var s=t[1]||"",o=t[3];if(!o)return s;if(e&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[s].concat(a).concat([i]).join("\n")}var n;return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var n=t[i];"number"==typeof n[0]&&o[n[0]]||(s&&!n[2]?n[2]=s:s&&(n[2]="("+n[2]+") and ("+s+")"),e.push(n))}},e}},IULF:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.postPresenterContainer[data-v-a7709448] {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #fff;\n}\n.word-break[data-v-a7709448] {\n\tword-break: break-all;\n}\n.small .custom-control-label[data-v-a7709448] {\n\tpadding-top: 3px;\n}\n",""])},"KHd+":function(t,e,s){"use strict";function o(t,e,s,o,i,a,n,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}s.d(e,"a",function(){return o})},KhVi:function(t,e,s){"use strict";s.r(e);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={props:["scope"],data:function(){return{page:2,feed:[],profile:{},min_id:0,max_id:0,notifications:{},notificationCursor:2,stories:{},suggestions:{},loading:!0,replies:[],replyId:null,optionMenuState:!1,modes:{mod:!1,dark:!1,notify:!0,infinite:!0},followers:[],followerCursor:1,followerMore:!0,following:[],followingCursor:1,followingMore:!0,lightboxMedia:!1}},beforeMount:function(){this.fetchTimelineApi(),this.fetchProfile()},mounted:function(){this.$nextTick(function(){$('[data-toggle="tooltip"]').tooltip()})},updated:function(){pixelfed.readmore()},methods:{fetchProfile:function(){var t=this;axios.get("/api/v1/accounts/verify_credentials").then(function(e){t.profile=e.data,$(".profile-card .loader").addClass("d-none"),$(".profile-card .contents").removeClass("d-none"),$(".profile-card .card-footer").removeClass("d-none")}).catch(function(t){swal("Oops, something went wrong","Please reload the page.","error")})},fetchTimelineApi:function(){var t=this,e=!1;switch(this.scope){case"home":e="/api/v1/timelines/home";break;case"local":e="/api/v1/timelines/public";break;case"network":e="/api/v1/timelines/network"}axios.get(e,{params:{max_id:this.max_id,limit:4}}).then(function(e){var s,i=e.data;(s=t.feed).push.apply(s,o(i));var a=i.map(function(t){return t.id});t.min_id=Math.max.apply(Math,o(a)),t.max_id=Math.min.apply(Math,o(a)),$(".timeline .pagination").removeClass("d-none"),t.loading=!1,t.fetchNotifications()}).catch(function(t){})},infiniteTimeline:function(t){var e=this,s=!1;switch(this.scope){case"home":s="/api/v1/timelines/home";break;case"local":s="/api/v1/timelines/public";break;case"network":s="/api/v1/timelines/network"}axios.get(s,{params:{max_id:this.max_id,limit:4}}).then(function(s){if(s.data.length&&0==e.loading){var i,a=s.data;(i=e.feed).push.apply(i,o(a));var n=a.map(function(t){return t.id});e.min_id=Math.max.apply(Math,o(n)),e.max_id=Math.min.apply(Math,o(n)),e.page+=1,t.loaded(),e.loading=!1}else t.complete()})},loadMore:function(t){var e=this,s="home"==this.scope?"/api/v1/timelines/home":"/api/v1/timelines/public";t.target.innerText="Loading...",axios.get(s,{params:{page:this.page}}).then(function(s){if(s.data.length&&0==e.loading){var i,a=s.data;(i=e.feed).push.apply(i,o(a));var n=a.map(function(t){return t.id});e.min_id=Math.min.apply(Math,o(n)),1==e.page&&(e.max_id=Math.max.apply(Math,o(n))),e.page+=1,e.loading=!1,t.target.innerText="Load more posts"}})},fetchNotifications:function(){var t=this;axios.get("/api/v1/notifications").then(function(e){var s=e.data.filter(function(t){return!("share"==t.type&&!status)});t.notifications=s,$(".notification-card .loader").addClass("d-none"),$(".notification-card .contents").removeClass("d-none")})},infiniteNotifications:function(t){var e=this;this.notificationCursor>10?t.complete():axios.get("/api/v1/notifications",{params:{page:this.notificationCursor}}).then(function(s){if(s.data.length){var i,a=s.data.filter(function(t){return!("share"==t.type&&!status)});(i=e.notifications).push.apply(i,o(a)),e.notificationCursor++,t.loaded()}else t.complete()})},reportUrl:function(t){return"/i/report?type="+(t.in_reply_to?"comment":"post")+"&id="+t.id},commentFocus:function(t,e){this.replyId!=t.id&&(this.replies={},this.replyId=t.id,this.fetchStatusComments(t,""))},likeStatus:function(t,e){0!=$("body").hasClass("loggedIn")&&axios.post("/i/like",{item:t.id}).then(function(e){t.favourites_count=e.data.count,t.favourited=!t.favourited}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})},shareStatus:function(t,e){0!=$("body").hasClass("loggedIn")&&axios.post("/i/share",{item:t.id}).then(function(e){t.reblogs_count=e.data.count,t.reblogged=!t.reblogged}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})},timestampFormat:function(t){var e=new Date(t);return e.toDateString()+" "+e.toLocaleTimeString()},editUrl:function(t){return t.url+"/edit"},redirect:function(t){window.location.href=t},replyUrl:function(t){return"/p/"+this.profile.username+"/"+(t.account.id==this.profile.id?t.id:t.in_reply_to_id)},mentionUrl:function(t){return"/p/"+t.account.username+"/"+t.id},statusOwner:function(t){return t.account.id==this.profile.id},fetchStatusComments:function(t,e){var s=this;axios.get("/api/v2/status/"+t.id+"/replies").then(function(t){var e=t.data;s.replies=_.reverse(e)}).catch(function(t){})},muteProfile:function(t){var e=this;0!=$("body").hasClass("loggedIn")&&axios.post("/i/mute",{type:"user",item:t.account.id}).then(function(s){e.feed=e.feed.filter(function(e){return e.account.id!==t.account.id}),swal("Success","You have successfully muted "+t.account.acct,"success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},blockProfile:function(t){var e=this;0!=$("body").hasClass("loggedIn")&&axios.post("/i/block",{type:"user",item:t.account.id}).then(function(s){e.feed=e.feed.filter(function(e){return e.account.id!==t.account.id}),swal("Success","You have successfully blocked "+t.account.acct,"success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},deletePost:function(t,e){var s=this;0!=$("body").hasClass("loggedIn")&&t.account.id===this.profile.id&&axios.post("/i/delete",{type:"status",item:t.id}).then(function(t){s.feed.splice(e,1),swal("Success","You have successfully deleted this post","success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},commentSubmit:function(t,e){var s=this,o=t.id,i=e.target,a=$(i).find('input[name="comment"]').val();i.parentElement.parentElement.getElementsByClassName("comments")[0];axios.post("/i/comment",{item:o,comment:a}).then(function(t){i.reset(),i.blur(),s.replies.push(t.data.entity)})},moderatePost:function(t,e,s){var o=t.account.username;switch(console.log("action: "+e+" status id"+t.id),e){case"autocw":var i="Are you sure you want to enforce CW for "+o+" ?";swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully enforced CW for "+o,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"noautolink":i="Are you sure you want to disable auto linking for "+o+" ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully disabled autolinking for "+o,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"unlisted":i="Are you sure you want to unlist from timelines for "+o+" ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully unlisted for "+o,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"disable":i="Are you sure you want to disable "+o+"’s account ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully disabled "+o+"’s account","success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"suspend":i="Are you sure you want to suspend "+o+"’s account ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully suspend "+o+"’s account","success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})})}},toggleOptionsMenu:function(){this.optionMenuState=!this.optionMenuState},modeModToggle:function(){this.modes.mod=!this.modes.mod,window.ls.set("pixelfed-classicui-settings",this.modes)},modeNotifyToggle:function(){this.modes.notify=!this.modes.notify,window.ls.set("pixelfed-classicui-settings",this.modes)},modeDarkToggle:function(){if(1==this.modes.dark)this.modes.dark=!1,$("link[data-stylesheet=dark]").remove();else{this.modes.dark=!0;var t=document.head,e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href="/css/appdark.css",e.setAttribute("data-stylesheet","dark"),t.appendChild(e)}window.ls.set("pixelfed-classicui-settings",this.modes)},modeInfiniteToggle:function(){this.modes.infinite=!this.modes.infinite,window.ls.set("pixelfed-classicui-settings",this.modes)},followingModal:function(){var t=this;this.following.length>0?this.$refs.followingModal.show():(axios.get("/api/v1/accounts/"+this.profile.id+"/following",{params:{page:this.followingCursor}}).then(function(e){t.following=e.data,t.followingCursor++}),res.data.length<10&&(this.followingMore=!1),this.$refs.followingModal.show())},followersModal:function(){var t=this;this.followers.length>0?this.$refs.followerModal.show():(axios.get("/api/v1/accounts/"+this.profile.id+"/followers",{params:{page:this.followerCursor}}).then(function(e){t.followers=e.data,t.followerCursor++}),res.data.length<10&&(this.followerMore=!1),this.$refs.followerModal.show())},followingLoadMore:function(){var t=this;axios.get("/api/v1/accounts/"+this.profile.id+"/following",{params:{page:this.followingCursor}}).then(function(e){var s;e.data.length>0&&((s=t.following).push.apply(s,o(e.data)),t.followingCursor++);e.data.length<10&&(t.followingMore=!1)})},followersLoadMore:function(){var t=this;axios.get("/api/v1/accounts/"+this.profile.id+"/followers",{params:{page:this.followerCursor}}).then(function(e){var s;e.data.length>0&&((s=t.followers).push.apply(s,o(e.data)),t.followerCursor++);e.data.length<10&&(t.followerMore=!1)})},lightbox:function(t){this.lightboxMedia=t,this.$refs.lightboxModal.show()}}},a=(s("lti1"),s("KHd+")),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-lg-8 pt-2 px-0 my-3 timeline order-2 order-md-1"},[t.loading?s("div",{staticClass:"text-center"},[t._m(0)]):t._e(),t._v(" "),t._l(t.feed,function(e,o){return s("div",{key:e.id,staticClass:"card mb-4 status-card card-md-rounded-0",attrs:{"data-status-id":e.id}},[s("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[s("img",{staticStyle:{"border-radius":"32px"},attrs:{src:e.account.avatar,width:"32px",height:"32px"}}),t._v(" "),s("a",{staticClass:"username font-weight-bold pl-2 text-dark",attrs:{href:e.account.url}},[t._v("\n\t\t\t\t\t\t"+t._s(e.account.username)+"\n\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"text-right",staticStyle:{"flex-grow":"1"}},[t._m(1,!0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:e.url}},[t._v("Go to post")]),t._v(" "),0==t.statusOwner(e)?s("span",[s("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:t.reportUrl(e)}},[t._v("Report")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.muteProfile(e)}}},[t._v("Mute Profile")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.blockProfile(e)}}},[t._v("Block Profile")])]):t._e(),t._v(" "),1==t.statusOwner(e)?s("span",[s("a",{staticClass:"dropdown-item font-weight-bold text-danger",on:{click:function(s){return t.deletePost(e)}}},[t._v("Delete")])]):t._e(),t._v(" "),1==t.profile.is_admin&&1==t.modes.mod?s("span",[s("div",{staticClass:"dropdown-divider"}),t._v(" "),t.statusOwner(e)?t._e():s("a",{staticClass:"dropdown-item font-weight-bold text-danger",on:{click:function(s){return t.deletePost(e)}}},[t._v("Delete")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("h6",{staticClass:"dropdown-header"},[t._v("Mod Tools")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"autocw")}}},[s("p",{staticClass:"mb-0",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Adds a CW to every post made by this account."}},[t._v("Enforce CW")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"noautolink")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Do not transform mentions, hashtags or urls into HTML."}},[t._v("No Autolinking")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"unlisted")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Removes account from public/network timelines."}},[t._v("Unlisted Posts")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"disable")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Temporarily disable account until next time user log in."}},[t._v("Disable Account")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"suspend")}}},[s("p",{staticClass:"mb-0",attrs:{title:"This prevents any new interactions, without deleting existing data."}},[t._v("Suspend Account")])])]):t._e()])])]),t._v(" "),s("div",{staticClass:"postPresenterContainer"},["photo"===e.pf_type?s("div",{staticClass:"w-100"},[s("photo-presenter",{attrs:{status:e},on:{lightbox:t.lightbox}})],1):"video"===e.pf_type?s("div",{staticClass:"w-100"},[s("video-presenter",{attrs:{status:e}})],1):"photo:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("photo-album-presenter",{attrs:{status:e}})],1):"video:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("video-album-presenter",{attrs:{status:e}})],1):"photo:video:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("mixed-album-presenter",{attrs:{status:e}})],1):s("div",{staticClass:"w-100"},[s("p",{staticClass:"text-center p-0 font-weight-bold text-white"},[t._v("Error: Problem rendering preview.")])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"reactions my-1"},[s("h3",{class:[e.favourited?"fas fa-heart text-danger pr-3 m-0 cursor-pointer":"far fa-heart pr-3 m-0 like-btn cursor-pointer"],attrs:{title:"Like"},on:{click:function(s){return t.likeStatus(e,s)}}}),t._v(" "),s("h3",{staticClass:"far fa-comment pr-3 m-0 cursor-pointer",attrs:{title:"Comment"},on:{click:function(s){return t.commentFocus(e,s)}}}),t._v(" "),s("h3",{class:[e.reblogged?"far fa-share-square pr-3 m-0 text-primary cursor-pointer":"far fa-share-square pr-3 m-0 share-btn cursor-pointer"],attrs:{title:"Share"},on:{click:function(s){return t.shareStatus(e,s)}}})]),t._v(" "),s("div",{staticClass:"likes font-weight-bold"},[s("span",{staticClass:"like-count"},[t._v(t._s(e.favourites_count))]),t._v(" "+t._s(1==e.favourites_count?"like":"likes")+"\n\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"caption"},[s("p",{staticClass:"mb-2 read-more",staticStyle:{overflow:"hidden"}},[s("span",{staticClass:"username font-weight-bold"},[s("bdi",[s("a",{staticClass:"text-dark",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))])])]),t._v(" "),s("span",{domProps:{innerHTML:t._s(e.content)}})])]),t._v(" "),e.id==t.replyId?s("div",{staticClass:"comments"},t._l(t.replies,function(e,o){return s("p",{staticClass:"mb-0 d-flex justify-content-between align-items-top read-more",staticStyle:{"overflow-y":"hidden"}},[s("span",[s("a",{staticClass:"text-dark font-weight-bold mr-1",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" "),s("span",{domProps:{innerHTML:t._s(e.content)}})]),t._v(" "),s("span",{staticClass:"mb-0",staticStyle:{"min-width":"38px"}},[s("span",{on:{click:function(s){return t.likeStatus(e,s)}}},[s("i",{class:[e.favourited?"fas fa-heart fa-sm text-danger":"far fa-heart fa-sm text-lighter"]})]),t._v(" "),s("post-menu",{staticClass:"d-inline-flex pl-2",attrs:{status:e,profile:t.profile,size:"sm",modal:"true",feed:t.feed}})],1)])}),0):t._e(),t._v(" "),s("div",{staticClass:"timestamp mt-2"},[s("p",{staticClass:"small text-uppercase mb-0"},[s("a",{staticClass:"text-muted",attrs:{href:e.url}},[s("timeago",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],attrs:{datetime:e.created_at,"auto-update":60,"converter-options":{includeSeconds:!0},title:t.timestampFormat(e.created_at)}})],1)])])]),t._v(" "),e.id==t.replyId?s("div",{staticClass:"card-footer bg-white"},[s("form",{on:{submit:function(s){return s.preventDefault(),t.commentSubmit(e,s)}}},[s("input",{attrs:{type:"hidden",name:"item",value:""}}),t._v(" "),s("input",{staticClass:"form-control status-reply-input",attrs:{name:"comment",placeholder:"Add a comment…",autocomplete:"off"}})])]):t._e()])}),t._v(" "),1==t.modes.infinite&&!t.loading&&t.feed.length>0?s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("infinite-loading",{on:{infinite:t.infiniteTimeline}},[s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"},[t._v("No more posts to load")]),t._v(" "),s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"},[t._v("No posts found")])])],1)])]):t._e(),t._v(" "),0==t.modes.infinite&&!t.loading&&t.feed.length>0?s("div",{staticClass:"pagination"},[s("p",{staticClass:"btn btn-outline-secondary font-weight-bold btn-block",on:{click:t.loadMore}},[t._v("Load more posts")])]):t._e(),t._v(" "),t.loading||"home"!=t.scope||0!=t.feed.length?t._e():s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body text-center"},[s("p",{staticClass:"h2 font-weight-lighter p-5"},[t._v("Hello, "+t._s(t.profile.acct))]),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"h3 font-weight-lighter p-5"},[t._v("Start following people to build your timeline.")]),t._v(" "),t._m(3)])])])],2),t._v(" "),s("div",{staticClass:"col-md-4 col-lg-4 pt-2 my-3 order-1 order-md-2  d-none d-md-block"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"card profile-card"},[t._m(4),t._v(" "),s("div",{staticClass:"card-body contents d-none"},[s("div",{staticClass:"media d-flex align-items-center"},[s("a",{attrs:{href:t.profile.url}},[s("img",{staticClass:"mr-3 rounded-circle box-shadow",attrs:{src:t.profile.avatar||"/storage/avatars/default.png",alt:"avatar",width:"64px",height:"64px"}})]),t._v(" "),s("div",{staticClass:"media-body d-flex justify-content-between word-break"},[s("div",[s("p",{staticClass:"mb-0 px-0 font-weight-bold"},[s("a",{staticClass:"text-dark",attrs:{href:t.profile.url}},[t._v("@"+t._s(t.profile.username))])]),t._v(" "),s("p",{staticClass:"my-0 text-muted pb-0"},[t._v(t._s(t.profile.display_name))])]),t._v(" "),s("div",{staticClass:"ml-2"},[s("a",{class:[1==t.optionMenuState?"text-primary":"text-muted"],on:{click:function(e){return t.toggleOptionsMenu()}}},[s("i",{staticClass:"fas fa-cog"})])])])])]),t._v(" "),s("div",{staticClass:"card-footer bg-white py-1 d-none"},[s("div",{staticClass:"d-flex justify-content-between text-center"},[s("span",{staticClass:"pl-3 cursor-pointer",on:{click:function(e){return t.redirect(t.profile.url)}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.statuses_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Posts")])]),t._v(" "),s("span",{staticClass:"cursor-pointer",on:{click:function(e){return t.followersModal()}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.followers_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Followers")])]),t._v(" "),s("span",{staticClass:"pr-3 cursor-pointer",on:{click:function(e){return t.followingModal()}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.following_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Following")])])])])])]),t._v(" "),1==t.optionMenuState?s("div",{staticClass:"mb-4"},[s("div",{staticClass:"card options-card"},[s("div",{staticClass:"card-body small"},[t.profile.is_admin?s("div",{staticClass:"custom-control custom-switch mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modes.mod,expression:"modes.mod"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-mod"},domProps:{checked:Array.isArray(t.modes.mod)?t._i(t.modes.mod,null)>-1:t.modes.mod},on:{click:function(e){return t.modeModToggle()},change:function(e){var s=t.modes.mod,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);o.checked?a<0&&t.$set(t.modes,"mod",s.concat([null])):a>-1&&t.$set(t.modes,"mod",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.modes,"mod",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-mod"}},[t._v("Moderator Mode")])]):t._e(),t._v(" "),s("div",{staticClass:"custom-control custom-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modes.infinite,expression:"modes.infinite"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-infinite"},domProps:{checked:Array.isArray(t.modes.infinite)?t._i(t.modes.infinite,null)>-1:t.modes.infinite},on:{click:function(e){return t.modeInfiniteToggle()},change:function(e){var s=t.modes.infinite,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);o.checked?a<0&&t.$set(t.modes,"infinite",s.concat([null])):a>-1&&t.$set(t.modes,"infinite",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.modes,"infinite",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-infinite"}},[t._v("Enable Infinite Scroll")])]),t._v(" "),s("hr"),t._v(" "),s("p",{staticClass:"font-weight-bold"},[t._v("BETA FEATURES")]),t._v(" "),s("div",{staticClass:"custom-control custom-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modes.dark,expression:"modes.dark"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-dark"},domProps:{checked:Array.isArray(t.modes.dark)?t._i(t.modes.dark,null)>-1:t.modes.dark},on:{click:function(e){return t.modeDarkToggle()},change:function(e){var s=t.modes.dark,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a=t._i(s,null);o.checked?a<0&&t.$set(t.modes,"dark",s.concat([null])):a>-1&&t.$set(t.modes,"dark",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.modes,"dark",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-dark"}},[t._v("Dark Mode")])])])])]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.modes.notify,expression:"modes.notify == true"}],staticClass:"mb-4"},[s("div",{staticClass:"card notification-card"},[t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"card-body pt-2 contents",staticStyle:{"max-height":"270px","overflow-y":"scroll"}},[t._l(t.notifications,function(e,o){return t.notifications.length>0?s("div",{staticClass:"media mb-3 align-items-center"},[s("img",{staticClass:"mr-2 rounded-circle",staticStyle:{border:"1px solid #ccc"},attrs:{src:e.account.avatar,alt:"",width:"32px",height:"32px"}}),t._v(" "),s("div",{staticClass:"media-body font-weight-light small"},["favourite"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" liked your "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.replyUrl(e.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):"comment"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" commented on your "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.replyUrl(e.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):"mention"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.mentionUrl(e.status)}},[t._v("mentioned")]),t._v(" you.\n\t\t\t\t\t\t\t\t\t")])]):"follow"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" followed you.\n\t\t\t\t\t\t\t\t\t")])]):"share"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" shared your "),s("a",{staticClass:"font-weight-bold",attrs:{href:e.status.reblog.url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):t._e()])]):t._e()}),t._v(" "),t.notifications.length?s("div",[s("infinite-loading",{on:{infinite:t.infiniteNotifications}},[s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"}),t._v(" "),s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"})])],1):t._e(),t._v(" "),0==t.notifications.length?s("div",{staticClass:"text-lighter text-center py-3"},[t._m(7),t._v(" "),s("p",{staticClass:"mb-0 small font-weight-bold"},[t._v("0 Notifications!")])]):t._e()],2)])]),t._v(" "),t._m(8)])]),t._v(" "),s("b-modal",{ref:"followingModal",attrs:{id:"following-modal","hide-footer":"",centered:"",title:"Following","body-class":"list-group-flush p-0"}},[s("div",{staticClass:"list-group"},[t._l(t.following,function(e,o){return s("div",{key:"following_"+o,staticClass:"list-group-item border-0"},[s("div",{staticClass:"media"},[s("a",{attrs:{href:e.url}},[s("img",{staticClass:"mr-3 rounded-circle box-shadow",attrs:{src:e.avatar,alt:e.username+"’s avatar",width:"30px"}})]),t._v(" "),s("div",{staticClass:"media-body"},[s("p",{staticClass:"mb-0",staticStyle:{"font-size":"14px"}},[s("a",{staticClass:"font-weight-bold text-dark",attrs:{href:e.url}},[t._v("\n                "+t._s(e.username)+"\n              ")])]),t._v(" "),s("p",{staticClass:"text-muted mb-0",staticStyle:{"font-size":"14px"}},[t._v("\n                "+t._s(e.display_name)+"\n            ")])])])])}),t._v(" "),t.followingMore?s("div",{staticClass:"list-group-item text-center",on:{click:function(e){return t.followingLoadMore()}}},[s("p",{staticClass:"mb-0 small text-muted font-weight-light cursor-pointer"},[t._v("Load more")])]):t._e()],2)]),t._v(" "),s("b-modal",{ref:"followerModal",attrs:{id:"follower-modal","hide-footer":"",centered:"",title:"Followers","body-class":"list-group-flush p-0"}},[s("div",{staticClass:"list-group"},[t._l(t.followers,function(e,o){return s("div",{key:"follower_"+o,staticClass:"list-group-item border-0"},[s("div",{staticClass:"media"},[s("a",{attrs:{href:e.url}},[s("img",{staticClass:"mr-3 rounded-circle box-shadow",attrs:{src:e.avatar,alt:e.username+"’s avatar",width:"30px"}})]),t._v(" "),s("div",{staticClass:"media-body"},[s("p",{staticClass:"mb-0",staticStyle:{"font-size":"14px"}},[s("a",{staticClass:"font-weight-bold text-dark",attrs:{href:e.url}},[t._v("\n                "+t._s(e.username)+"\n              ")])]),t._v(" "),s("p",{staticClass:"text-muted mb-0",staticStyle:{"font-size":"14px"}},[t._v("\n                "+t._s(e.display_name)+"\n            ")])])])])}),t._v(" "),t.followerMore?s("div",{staticClass:"list-group-item text-center",on:{click:function(e){return t.followersLoadMore()}}},[s("p",{staticClass:"mb-0 small text-muted font-weight-light cursor-pointer"},[t._v("Load more")])]):t._e()],2)]),t._v(" "),s("b-modal",{ref:"lightboxModal",attrs:{id:"lightbox","hide-header":"true","hide-footer":"true",centered:"",size:"lg","body-class":"p-0"}},[t.lightboxMedia?s("div",{class:t.lightboxMedia.filter_class},[s("img",{staticClass:"img-fluid",attrs:{src:t.lightboxMedia.url}})]):t._e()])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link text-dark no-caret dropdown-toggle py-0",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"Post options"}},[e("span",{staticClass:"fas fa-ellipsis-v fa-lg text-muted"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-lighter"},[e("i",{staticClass:"fas fa-camera-retro fa-5x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"btn btn-primary font-weight-bold py-0",attrs:{href:"/discover"}},[this._v("Discover new people and posts")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body loader text-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-white"},[e("p",{staticClass:"mb-0 d-flex align-items-center justify-content-between"},[e("span",{staticClass:"text-muted font-weight-bold"},[this._v("Notifications")]),this._v(" "),e("a",{staticClass:"text-dark small",attrs:{href:"/account/activity"}},[this._v("See All")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body loader text-center",staticStyle:{height:"270px"}},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("i",{staticClass:"fas fa-inbox fa-3x"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container pb-5"},[s("p",{staticClass:"mb-0 text-uppercase font-weight-bold text-muted small"},[s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/about"}},[t._v("About Us")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/help"}},[t._v("Help")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/open-source"}},[t._v("Open Source")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/language"}},[t._v("Language")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/terms"}},[t._v("Terms")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/privacy"}},[t._v("Privacy")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/platform"}},[t._v("API")])]),t._v(" "),s("p",{staticClass:"mb-0 text-uppercase font-weight-bold text-muted small"},[s("a",{staticClass:"text-muted",attrs:{href:"http://pixelfed.org",rel:"noopener",title:"","data-toggle":"tooltip"}},[t._v("Powered by PixelFed")])])])])}],!1,null,"a7709448",null);e.default=n.exports},KqaD:function(t,e,s){Vue.component("timeline",s("KhVi").default)},"aET+":function(t,e,s){var o,i,a={},n=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),r=function(t){var e={};return function(t,s){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,s);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),l=null,c=0,d=[],u=s("9tPo");function f(t,e){for(var s=0;s<t.length;s++){var o=t[s],i=a[o.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(_(o.parts[n],e))}else{var r=[];for(n=0;n<o.parts.length;n++)r.push(_(o.parts[n],e));a[o.id]={id:o.id,refs:1,parts:r}}}}function p(t,e){for(var s=[],o={},i=0;i<t.length;i++){var a=t[i],n=e.base?a[0]+e.base:a[0],r={css:a[1],media:a[2],sourceMap:a[3]};o[n]?o[n].parts.push(r):s.push(o[n]={id:n,parts:[r]})}return s}function m(t,e){var s=r(t.insertInto);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===t.insertAt)o?o.nextSibling?s.insertBefore(e,o.nextSibling):s.appendChild(e):s.insertBefore(e,s.firstChild),d.push(e);else if("bottom"===t.insertAt)s.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(t.insertAt.before,s);s.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return s.nc}();o&&(t.attrs.nonce=o)}return g(e,t.attrs),m(t,e),e}function g(t,e){Object.keys(e).forEach(function(s){t.setAttribute(s,e[s])})}function _(t,e){var s,o,i,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var n=c++;s=l||(l=v(e)),o=y.bind(null,s,n,!1),i=y.bind(null,s,n,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),m(t,e),e}(e),o=function(t,e,s){var o=s.css,i=s.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(o=u(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var n=new Blob([o],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(n),r&&URL.revokeObjectURL(r)}.bind(null,s,e),i=function(){h(s),s.href&&URL.revokeObjectURL(s.href)}):(s=v(e),o=function(t,e){var s=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,s),i=function(){h(s)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var s=p(t,e);return f(s,e),function(t){for(var o=[],i=0;i<s.length;i++){var n=s[i];(r=a[n.id]).refs--,o.push(r)}t&&f(p(t,e),e);for(i=0;i<o.length;i++){var r;if(0===(r=o[i]).refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete a[r.id]}}}};var w,b=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function y(t,e,s,o){var i=s?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var a=document.createTextNode(i),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(a,n[e]):t.appendChild(a)}}},lHUo:function(t,e,s){var o=s("IULF");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,i);o.locals&&(t.exports=o.locals)},lti1:function(t,e,s){"use strict";var o=s("lHUo");s.n(o).a}});