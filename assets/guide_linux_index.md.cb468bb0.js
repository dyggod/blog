import{_ as s,c as n,o as a,e as l}from"./app.9c1bc6ee.js";const C=JSON.parse('{"title":"Linux","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"},{"level":3,"title":"\u6587\u4EF6\u76F8\u5173","slug":"\u6587\u4EF6\u76F8\u5173"},{"level":3,"title":"\u7CFB\u7EDF\u76F8\u5173","slug":"\u7CFB\u7EDF\u76F8\u5173"},{"level":3,"title":"\u7528\u6237\u76F8\u5173","slug":"\u7528\u6237\u76F8\u5173"},{"level":3,"title":"\u5B89\u88C5\u76F8\u5173","slug":"\u5B89\u88C5\u76F8\u5173"},{"level":3,"title":"\u7F51\u7EDC\u76F8\u5173","slug":"\u7F51\u7EDC\u76F8\u5173"},{"level":3,"title":"\u6267\u884C\u6587\u4EF6","slug":"\u6267\u884C\u6587\u4EF6"}],"relativePath":"guide/linux/index.md"}'),p={name:"guide/linux/index.md"},e=l(`<h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><h3 id="\u6587\u4EF6\u76F8\u5173" tabindex="-1">\u6587\u4EF6\u76F8\u5173 <a class="header-anchor" href="#\u6587\u4EF6\u76F8\u5173" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6587\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">cat file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5217\u51FA\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6587\u4EF6\u5939\u4E0B\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -l -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">rm file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u590D\u5236\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">cp file1 file2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u79FB\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">mv file1 file2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6587\u4EF6\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">du -sh file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">touch file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">less file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u7F16\u8F91\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">vi file </span><span style="color:#676E95;font-style:italic;"># \u6309i\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\uFF0C\u6309esc\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\uFF0C\u6309:wq\u4FDD\u5B58\u5E76\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">vim file </span><span style="color:#676E95;font-style:italic;"># \u6309i\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\uFF0C\u6309esc\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\uFF0C\u6309:wq\u4FDD\u5B58\u5E76\u9000\u51FA</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7CFB\u7EDF\u76F8\u5173" tabindex="-1">\u7CFB\u7EDF\u76F8\u5173 <a class="header-anchor" href="#\u7CFB\u7EDF\u76F8\u5173" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u7CFB\u7EDF\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/issue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">free -m</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bcpu\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">top</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7528\u6237\u76F8\u5173" tabindex="-1">\u7528\u6237\u76F8\u5173 <a class="header-anchor" href="#\u7528\u6237\u76F8\u5173" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5F53\u524D\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">whoami</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5F53\u524D\u7528\u6237\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">groups</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">su user </span><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230user\u7528\u6237</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u7528\u6237\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">newgrp group </span><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230group\u7528\u6237\u7EC4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230root\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo su</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6DFB\u52A0\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd user </span><span style="color:#676E95;font-style:italic;"># \u6DFB\u52A0user\u7528\u6237</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">userdel user </span><span style="color:#676E95;font-style:italic;"># \u5220\u9664user\u7528\u6237</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539root\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo passwd root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u7528\u6237\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd user</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B89\u88C5\u76F8\u5173" tabindex="-1">\u5B89\u88C5\u76F8\u5173 <a class="header-anchor" href="#\u5B89\u88C5\u76F8\u5173" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install software</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5378\u8F7D\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get remove software</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u66F4\u65B0\u8F6F\u4EF6\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5347\u7EA7\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get upgrade software</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5deb\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dpkg -i package.deb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528\u7F51\u7EDC\u4E0B\u8F7D\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">wget url</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7F51\u7EDC\u76F8\u5173" tabindex="-1">\u7F51\u7EDC\u76F8\u5173 <a class="header-anchor" href="#\u7F51\u7EDC\u76F8\u5173" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5net-tools</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install net-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u7F51\u7EDC\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -an</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u7F51\u53E3\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6267\u884C\u6587\u4EF6" tabindex="-1">\u6267\u884C\u6587\u4EF6 <a class="header-anchor" href="#\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6267\u884C\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">./file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u7ED9\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u7ED9\u6587\u4EF6\u5939\u6DFB\u52A0\u6267\u884C\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u7ED9\u6587\u4EF6\u6DFB\u52A0\u6240\u6709\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 777 file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6267\u884Cbash\u811A\u672C</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> file </span><span style="color:#676E95;font-style:italic;"># \u5728\u5F53\u524Dshell\u4E2D\u6267\u884C\uFF0C\u7B49\u6548\u4E8E. file</span></span>
<span class="line"><span style="color:#A6ACCD;">bash file </span><span style="color:#676E95;font-style:italic;"># \u5728\u65B0\u7684shell\u4E2D\u6267\u884C</span></span>
<span class="line"></span></code></pre></div>`,14),c=[e];function t(i,o,r,y,d,f){return a(),n("div",null,c)}var h=s(p,[["render",t]]);export{C as __pageData,h as default};
