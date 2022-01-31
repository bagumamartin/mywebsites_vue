(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-Cart"],{b0c0:function(t,e,c){var n=c("83ab"),r=c("5e77").EXISTS,i=c("e330"),u=c("9bf2").f,a=Function.prototype,o=i(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=i(l.exec),b="name";n&&!r&&u(a,b,{configurable:!0,get:function(){try{return s(l,o(this))[1]}catch(t){return""}}})},b789:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r={class:"page-cart"},i={class:"columns is-multiline"},u=Object(n["g"])("div",{class:"column is-12"},[Object(n["g"])("h1",{class:"title"},"Cart")],-1),a={class:"column is-12 box"},o={key:0,class:"table is-fullwidth"},l=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Product"),Object(n["g"])("th",null,"Price"),Object(n["g"])("th",null,"Quantity"),Object(n["g"])("th",null,"Total"),Object(n["g"])("th")])],-1),s={key:1},b={class:"column is-12 box"},m=Object(n["g"])("h2",{class:"subtitle"},"Summary",-1),O=Object(n["g"])("hr",null,null,-1),d=Object(n["h"])("Proceed to checkout");function j(t,e,c,j,f,h){var g=Object(n["z"])("CartItem"),p=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",r,[Object(n["g"])("div",i,[u,Object(n["g"])("div",a,[h.cartTotalLength?(Object(n["s"])(),Object(n["f"])("table",o,[l,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(f.cart.items,(function(t){return Object(n["s"])(),Object(n["d"])(g,{key:t.product.id,initialItem:t,onRemoveFromCart:h.removeFromCart},null,8,["initialItem","onRemoveFromCart"])})),128))])])):(Object(n["s"])(),Object(n["f"])("p",s,"You don't have any products in your cart..."))]),Object(n["g"])("div",b,[m,Object(n["g"])("strong",null,"UGX "+Object(n["C"])(h.cartTotalPrice),1),Object(n["h"])(", "+Object(n["C"])(h.cartTotalLength)+" item(s) ",1),O,Object(n["i"])(p,{to:"/cart/checkout",class:"button is-dark"},{default:Object(n["G"])((function(){return[d]})),_:1})])])])}c("4de4"),c("d3b7"),c("bc3a"),c("b0c0");var f=Object(n["h"])("| ");function h(t,e,c,r,i,u){var a=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("tr",null,[Object(n["g"])("td",null,[Object(n["i"])(a,{to:i.item.product.get_absolute_url},{default:Object(n["G"])((function(){return[Object(n["h"])(Object(n["C"])(i.item.product.name),1)]})),_:1},8,["to"])]),Object(n["g"])("td",null,"UGX "+Object(n["C"])(i.item.product.price),1),Object(n["g"])("td",null,[Object(n["h"])(Object(n["C"])(i.item.quantity)+" ",1),Object(n["g"])("a",{onClick:e[0]||(e[0]=function(t){return u.decrementQuantity(i.item)})},"- "),f,Object(n["g"])("a",{onClick:e[1]||(e[1]=function(t){return u.incrementQuantity(i.item)})}," +")]),Object(n["g"])("td",null,"UGX "+Object(n["C"])(u.getItemTotal(i.item)),1),Object(n["g"])("td",null,[Object(n["g"])("button",{class:"delete",onClick:e[2]||(e[2]=function(t){return u.removeFromCart(i.item)})})])])}c("e9c4");var g={name:"CartItem",props:{initialItem:Object},data:function(){return{item:this.initialItem}},methods:{getItemTotal:function(t){return t.quantity*t.product.price},decrementQuantity:function(t){t.quantity-=1,0===t.quantity&&this.$emit("removeFromCart",t),this.updateCart()},incrementQuantity:function(t){t.quantity+=1,this.updateCart()},updateCart:function(){localStorage.setItem("cart",JSON.stringify(this.$store.state.cart))},removeFromCart:function(t){this.$emit("removeFromCart",t),this.updateCart()}}},p=c("6b0d"),C=c.n(p);const y=C()(g,[["render",h]]);var v=y,k={name:"Cart",components:{CartItem:v},data:function(){return{cart:{items:[]}}},mounted:function(){document.title="Cart | GSOCO",this.cart=this.$store.state.cart},methods:{removeFromCart:function(t){this.cart.items=this.cart.items.filter((function(e){return e.product.id!==t.product.id}))}},computed:{cartTotalLength:function(){return this.cart.items.reduce((function(t,e){return t+e.quantity}),0)},cartTotalPrice:function(){return this.cart.items.reduce((function(t,e){return t+e.product.price*e.quantity}),0)}}};const I=C()(k,[["render",j]]);e["default"]=I}}]);
//# sourceMappingURL=page-Cart.6c3b4d50.js.map