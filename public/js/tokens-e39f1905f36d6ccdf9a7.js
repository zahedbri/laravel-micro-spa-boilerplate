(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"PJ/e":function(t,e,s){"use strict";s.r(e);var n={name:"TokenEdit",beforeCreate:function(){this.$bind.mapGetters("TokenResource",{entity:"entity"}),this.$bind.mapActions("TokenResource",{update:"update",create:"create",store:"store"}),this.$bind.mapState("TokenResource",{$errors:"$errors"})},created:function(){this.$errors.clear()},beforeDestroy:function(){this.$errors.clear()}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.entity?s("div",{staticClass:"layout p-4"},[s("form",{ref:"form",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                "+t._s(t.entity.name||"New Token")+"\n            ")]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item flex-grow"},[s("v-form-control",{attrs:{type:"text",label:"Name",name:"name",invalid:t.$errors.has("name"),help:t.$errors.first("name","Enter your name.")},on:{change:function(e){return t.$errors.forget("name")}},model:{value:t.entity.name,callback:function(e){t.$set(t.entity,"name",e)},expression:"entity.name"}})],1),t._v(" "),s("div",{staticClass:"grid-item flex-shrink pb-3"},[s("v-action",{staticClass:"btn-blue",attrs:{dusk:"action-save"},on:{click:function(e){return t.entity.abilities.push("*")}}},[t._v("\n                            Add Ability\n                        ")])],1)]),t._v(" "),s("v-form-message",{staticClass:"alert alert-info",attrs:{value:t.$errors.has("abilities"),dismissible:!1}},[t._v("\n                    "+t._s(t.$errors.first("abilities"))+"\n                ")]),t._v(" "),t._l(t.entity.abilities,(function(e,n){return s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item flex-grow"},[s("v-form-control",{attrs:{type:"text",label:"Ability",name:"ability",invalid:t.$errors.has("abilities."+n),help:t.$errors.first("abilities."+n,"Enter ability name.")},on:{change:function(e){return t.$errors.forget("abilities."+n)}},model:{value:t.entity.abilities[n],callback:function(e){t.$set(t.entity.abilities,n,e)},expression:"entity.abilities[index]"}})],1),t._v(" "),s("div",{staticClass:"grid-item flex-shrink pb-3"},[s("v-action",{staticClass:"btn-red self-start",attrs:{dusk:"action-save"},on:{click:function(e){return t.entity.abilities.splice(n,1)}}},[s("i",{staticClass:"fa fa-remove"})])],1)])}))],2),t._v(" "),s("div",{staticClass:"card-actions"},[t.entity.id?s("v-action",{staticClass:"btn-lg btn-blue",attrs:{dusk:"action-update"},on:{click:function(e){return t.update(t.entity)}}},[t._v("\n                    Update\n                ")]):s("v-action",{staticClass:"btn-lg btn-blue",attrs:{dusk:"action-save"},on:{click:function(e){return t.store(t.entity,!1)}}},[t._v("\n                    Save\n                ")])],1)])]),t._v(" "),s("v-modal",{attrs:{dusk:"modal-destroy"},on:{closed:function(e){return t.$router.go(-1)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Token Created\n        ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[t._v("This token will not be shown again, please copy it for your records.")]),t._v(" "),s("code",[t._v(t._s(t.entity.token))])]},proxy:!0},{key:"actions",fn:function(){return[s("v-action",{staticClass:"btn-green",attrs:{focus:!0,dusk:"destroy-confirm"},on:{click:function(e){t.entity.token=null}}},[s("i",{staticClass:"fa fa-check-circle"}),t._v(" Done\n            ")])]},proxy:!0}],null,!1,2235038160),model:{value:t.entity.token,callback:function(e){t.$set(t.entity,"token",e)},expression:"entity.token"}})],1):t._e()}),[],!1,null,null,null);e.default=a.exports},TBni:function(t,e,s){"use strict";s.r(e);var n={name:"UserResource",beforeCreate:function(){this.$bind.mapActions("TokenResource",{index:"index",destroy:"destroy"}),this.$bind.mapState("TokenResource",{$errors:"$errors"}),this.$bind.mapGetters("TokenResource",{destroying:"destroying",resource:"resource"})}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout p-4"},[s("v-resource",{attrs:{searchable:!0},scopedSlots:t._u([{key:"title",fn:function(){return[s("i",{staticClass:"fa fa-key"}),t._v(" Tokens\n        ")]},proxy:!0},{key:"actions",fn:function(){return[s("router-link",{staticClass:"btn btn-blue",attrs:{dusk:"action-create",to:{name:"tokens.create"}}},[s("i",{staticClass:"fa fa-plus-circle"}),t._v(" "),s("span",{staticClass:"hidden sm:inline"},[t._v("Add")])])]},proxy:!0},{key:"entries",fn:function(e){var n=e.entries;return t._l(n,(function(e){return s("div",{staticClass:"card my-4 text-sm",attrs:{dusk:"entry"}},[s("div",{staticClass:"card-header p-2 text-sm"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item flex-grow"},[s("router-link",{staticClass:"block text-sm",attrs:{dusk:"entry-show",to:{name:"tokens.show",params:{id:e.id}}}},[s("i",{staticClass:"fa fa-key"}),t._v(" "),s("strong",[t._v(t._s(e.name))])])],1),t._v(" "),s("div",{staticClass:"grid-item"},[s("strong",[t._v("Type:")]),t._v(" "+t._s(e.tokenable_type)+" ("+t._s(e.tokenable_id)+")\n                        ")])])]),t._v(" "),s("div",{staticClass:"card-content p-2"},[s("strong",[t._v("Abilities:")]),t._v(" "+t._s(e.abilities.join(","))+"\n                ")]),t._v(" "),s("div",{staticClass:"card-content p-2"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-item text-xs"},[s("strong",[t._v("Last Used:")]),t._v(" "+t._s(e.last_used_at)+"\n                        ")]),t._v(" "),s("div",{staticClass:"grid-item text-xs"},[t._v("\n                            Created: "+t._s(e.created_at)+"\n                        ")]),t._v(" "),s("div",{staticClass:"grid-item text-xs"},[t._v("\n                            Updated: "+t._s(e.updated_at)+"\n                        ")]),t._v(" "),s("div",{staticClass:"grid-item text-xs ml-auto"},[s("v-action",{staticClass:"btn-red ml-auto",attrs:{dusk:"action-destroy"},on:{click:function(s){t.destroying=e}}},[s("i",{staticClass:"fa fa-trash"}),t._v(" Destroy\n                            ")])],1)])])])}))}}]),model:{value:t.resource,callback:function(e){t.resource=e},expression:"resource"}}),t._v(" "),s("v-modal",{attrs:{dusk:"modal-destroy"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Destroy Token?\n        ")]},proxy:!0},{key:"content",fn:function(){return[s("p",[s("strong",[t._v("Type:")]),t._v(" "+t._s(t.destroying.tokenable_type)+" ("+t._s(t.destroying.tokenable_id)+")")]),t._v(" "),s("p",[s("strong",[t._v("Abilities:")]),t._v(" "+t._s(t.destroying.abilities.join(",")))])]},proxy:!0},{key:"actions",fn:function(){return[s("v-action",{staticClass:"btn-green",attrs:{focus:!0,dusk:"destroy-confirm"},on:{click:function(e){return t.destroy(t.destroying)}}},[s("i",{staticClass:"fa fa-check-circle"}),t._v(" Destroy\n            ")]),t._v(" "),s("v-action",{staticClass:"btn-red ml-auto",attrs:{dusk:"destroy-cancel"},on:{click:function(e){t.destroying=null}}},[s("i",{staticClass:"fa fa-close"}),t._v(" Cancel\n            ")])]},proxy:!0}]),model:{value:t.destroying,callback:function(e){t.destroying=e},expression:"destroying"}})],1)}),[],!1,null,null,null);e.default=a.exports},g6y4:function(t,e,s){"use strict";s.r(e);var n={name:"TokenShow",beforeCreate:function(){this.$bind.mapGetters("TokenResource",{entity:"entity"}),this.$bind.mapState("TokenResource",{$errors:"$errors"})},created:function(){this.$errors.clear()},beforeDestroy:function(){this.$errors.clear()}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.entity?s("div",{staticClass:"layout p-4"},[s("form",{ref:"form",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n                "+t._s(t.entity.name||"New Token")+"\n            ")]),t._v(" "),s("div",{staticClass:"card-content"},[t._v("\n                "+t._s(t.entity)+"\n            ")]),t._v(" "),s("div",{staticClass:"card-actions"},[s("router-link",{staticClass:"btn btn-yellow",attrs:{dusk:"entry-show",to:{name:"tokens.edit",params:{id:t.entity.id}}}},[s("i",{staticClass:"fa fa-edit"}),t._v(" Edit\n                ")])],1)])])]):t._e()}),[],!1,null,null,null);e.default=a.exports}}]);
//# sourceMappingURL=tokens-e39f1905f36d6ccdf9a7.js.map