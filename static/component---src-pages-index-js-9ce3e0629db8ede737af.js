(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(133),s=n(153),l=n.n(s),u=n(146),d=n(137),p=n(150),m=n(134),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("footer",{style:{marginTop:Object(m.a)(2.5),paddingTop:Object(m.a)(1)}},o.a.createElement("a",{href:"https://github.com/yt1520406335",target:"_blank",rel:"noopener noreferrer"},"github")," •"," ")},e}(o.a.Component),g=n(152);n.d(e,"pageQuery",function(){return y});var h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=l()(this,"props.data.site.siteMetadata.title"),e=(l()(this,"props.data.site.siteMetadata.description"),l()(this,"props.data.allMarkdownRemark.edges"));return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(p.a,null),o.a.createElement(u.a,null),e.map(function(t){var e=t.node,n=l()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(m.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),o.a.createElement("small",null,e.frontmatter.date," • "+Object(g.a)(e.timeToRead)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.spoiler}}))}),o.a.createElement(f,null))},e}(o.a.Component),y=(e.default=h,"796900122")},133:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(135),u=n.n(l);n.d(e,"PageRenderer",function(){return u.a});var d=n(29);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},134:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l});var a=n(148),r=n.n(a),i=n(149),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"#d23669"},"a.gatsby-resp-image-link":{boxShadow:"none"},"p code":{fontSize:"1.1rem"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},135:function(t,e,n){var a;t.exports=(a=n(136))&&a.default||a},136:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),s=n(2),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},137:function(t,e,n){"use strict";n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(133),s=n(134),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#ffa7c4"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},t,r)},e}(o.a.Component);e.a=l},146:function(t,e,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=(n(157),n(158),n(147)),s=n.n(c),l=n(134),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},o.a.createElement("img",{src:s.a,alt:"tuo yang",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2)}}),o.a.createElement("p",{style:{maxWidth:310}},o.a.createElement("p",null,"杨拓的个人博客. ")," ","写一些平时的收获"))},e}(o.a.Component);e.a=u},147:function(t,e,n){t.exports=n.p+"static/profile-pic-aadf97b160bbaefa602b622b0b567943.jpg"},150:function(t,e,n){"use strict";n(28);var a=n(151),r=n(0),i=n.n(r),o=n(159),c=n.n(o),s=n(4),l=n.n(s),u=n(133),d="3236765318";function p(t){var e=t.meta,n=t.image,r=t.title,o=t.description,s=t.slug;return i.a.createElement(u.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,l=o||a.description,u=n?a.siteUrl+"/"+n:null,d=""+a.siteUrl+s;return i.a.createElement(c.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+a.title,title:r}:{title:a.title},{meta:[{name:"description",content:l},{property:"og:url",content:d},{property:"og:title",content:r||a.title},{name:"og:description",content:l},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:l}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(e)}))},data:a})}p.defaultProps={meta:[],title:"",slug:""},p.propTypes={description:l.a.string,image:l.a.string,meta:l.a.array,slug:l.a.string,title:l.a.string.isRequired},e.a=p},151:function(t){t.exports={data:{site:{siteMetadata:{title:"秋风的博客",author:"杨拓",description:"Personal blog by Dan Abramov. I explain with words and code.",siteUrl:"https://overreacted.io",social:{twitter:"@tuoyang"}}}}}},152:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(161);function a(t){var e=Math.round(t/5);return new Array(e||1).fill("☕️").join("")+" "+t+" min read"}}}]);
//# sourceMappingURL=component---src-pages-index-js-9ce3e0629db8ede737af.js.map