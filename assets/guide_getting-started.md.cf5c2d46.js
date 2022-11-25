import{_ as s,c as a,o as n,e as l}from"./app.8d175b91.js";const i=JSON.parse('{"title":"getting-started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md"}'),p={name:"guide/getting-started.md"},o=l(`<h1 id="getting-started" tabindex="-1">getting-started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">setopt HIST_IGNORE_ALL_DUPS</span></span>
<span class="line"><span style="color:#A6ACCD;">sort -t </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -k 2 -u </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zsh_history </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sort -o </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zsh_history</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">wangwang</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> animal1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dog1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">animal1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dog1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrAnimal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Animal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrDog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Dog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u517C\u5BB9\uFF0C\u53EF\u4EE5\u8D4B\u503C\uFF0C\u8FD9\u4E2A\u5C31\u662F\u534F\u53D8\uFF0C\u4E5F\u5C31\u662FArray\u884D\u751F\u540E\u7684\u7C7B\u578B\u662F\u534F\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">arrAnimal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arrDog</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(r,c,D,y,C,A){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};