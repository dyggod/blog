import{_ as s,c as n,o as a,e as l}from"./app.9c1bc6ee.js";const y=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"gitignore","slug":"gitignore"},{"level":2,"title":"github \u63A8\u9001\u6216\u62C9\u53D6\u65F6ssh\u9519\u8BEF","slug":"github-\u63A8\u9001\u6216\u62C9\u53D6\u65F6ssh\u9519\u8BEF"},{"level":2,"title":"git-lfs","slug":"git-lfs"},{"level":2,"title":"window\u7535\u8111\u914D\u7F6E\u4E24\u4E2Agithub\u8D26\u53F7\u8BBE\u7F6E\uFF1A","slug":"window\u7535\u8111\u914D\u7F6E\u4E24\u4E2Agithub\u8D26\u53F7\u8BBE\u7F6E\uFF1A"},{"level":2,"title":"\u9519\u8BEF\u5904\u7406","slug":"\u9519\u8BEF\u5904\u7406"}],"relativePath":"guide/git-github/index.md"}'),p={name:"guide/git-github/index.md"},e=l(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><h4 id="git\u914D\u7F6E" tabindex="-1">git\u914D\u7F6E <a class="header-anchor" href="#git\u914D\u7F6E" aria-hidden="true">#</a></h4><ol><li>\u67E5</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --global --list  // \u67E5\u8BE2\u5168\u5C40\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name  // \u67E5\u8BE2\u5168\u5C40\u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email // \u67E5\u8BE2\u5168\u5C40\u7528\u6237\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local user.name   // \u67E5\u8BE2\u5C40\u90E8\u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u6539</li></ol><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name \u540D\u5B57   // \u4FEE\u6539\u5168\u5C40\u7528\u6237\u540D\u4E3A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u540D\u5B57</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email \u90AE\u7BB1  // \u4FEE\u6539\u5168\u5C40\u7528\u6237\u90AE\u7BB1\u4E3A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u90AE\u7BB1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config --local user.name \u540D\u5B57    // \u4FEE\u6539\u5C40\u90E8\u7528\u6237\u540D\u4E3A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u540D\u5B57</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u672C\u5730\u751F\u6210ssh key</li></ol><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa   // \u5728 .ssh \u4E0B\u751F\u6210\u5BC6\u94A5\u5BF9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u6307\u5B9A\u7528\u6765\u4FDD\u5B58\u5BC6\u94A5\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">-C\uFF1A\u6DFB\u52A0\u6CE8\u91CA/\u5907\u6CE8</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u5BC6\u94A5\u7C7B\u578B</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u9A8C\u8BC1\u672C\u5730\u4E0Egithub\u8D26\u53F7\u7ED1\u5B9A</li></ol><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh -T git@github.com</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4ED3\u5E93\u914D\u7F6E" tabindex="-1">\u4ED3\u5E93\u914D\u7F6E <a class="header-anchor" href="#\u4ED3\u5E93\u914D\u7F6E" aria-hidden="true">#</a></h4><ol><li>\u8FDC\u7A0B\u5730\u5740\u64CD\u4F5C</li></ol><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git remote -v   // \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git remote rm origin  // \u79FB\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://...   // \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u4E3A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin https://...  // \u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u4E3A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git remote update origin --prune       // \u83B7\u53D6\u6700\u65B0\u8FDC\u7A0B\u4ED3\u5E93\u72B6\u6001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config core.ignorecase </span><span style="color:#82AAFF;">true</span><span style="color:#A6ACCD;">  // \u8BA9git\u8BC6\u522B\u6587\u4EF6\u540D\u5927\u5C0F\u5199\u4FEE\u6539\u3002\u4F46\u8FD9\u79CD\u65B9\u5F0F\u6216\u8BB8\u5F15\u53D1\u540E\u7EED\u7684\u9EBB\u70E6\uFF0C\u8FD8\u53EF\u4EE5\uFF1Agit mv ABC.js abc.js\uFF0C\u518D\u63D0\u4EA4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config --global core.autocrlf </span><span style="color:#82AAFF;">false</span><span style="color:#A6ACCD;">  // \u7981\u6B62\u81EA\u52A8\u8F6Ccrlf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config --global core.editor </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">    // \u8BBE\u7F6Egit\u4F7F\u7528\u7F16\u8F91\u5668\u4E3Avim</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5206\u652F\u64CD\u4F5C</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git branch -r    // \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch \u5206\u652F\u540D   // \u521B\u5EFA\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout \u5206\u652F\u540D  // \u5207\u6362\u672C\u5730\u5206\u652F\uFF0C\u5982\u679C\u672C\u5730\u6CA1\u6709\u8FDC\u7A0B\u6709\u4F1A\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -b \u5206\u652F\u540D // \u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u5206\u652F\u5E76\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d \u5206\u652F\u540D  // \u5220\u9664\u4E00\u4E2A\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -m old_branch new_branch   // \u4FEE\u6539\u672C\u5730\u5206\u652F\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin \u5206\u652F\u540D  // \u63A8\u9001\u81F3\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin :\u5206\u652F\u540D  // \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>tag\u64CD\u4F5C</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git tag -l -n   // \u4EA7\u770Btag\u5217\u8868\u53CA\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch origin tag\u540D  // \u83B7\u53D6\u8FDC\u7A0Btag</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>\u63D0\u4EA4\u64CD\u4F5C</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add \u6587\u4EF6  // \u6DFB\u52A0\u6682\u5B58\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git diff      // \u67E5\u770B\u5C1A\u672A\u6682\u5B58\u7684\u6587\u4EF6\u505A\u7684\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m commit\u6D88\u606F   // \u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -a -m commit\u6D88\u606F  // \u81EA\u52A8\u628A\u5DF2\u8DDF\u8E2A\u8FC7\u7684\u6587\u4EF6\u6682\u5B58\u5E76\u63D0\u4EA4\uFF0C\u8DF3\u8FC7git add</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git log        // \u67E5\u770B\u63D0\u4EA4\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard \u63D0\u4EA4id  // \u56DE\u9000\u5230\u67D0\u4E2Acommit\uFF0C\u5E76\u4E14\u4E0D\u4FDD\u7559\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft \u63D0\u4EA4id  // \u56DE\u9000\u5230\u67D0\u4E2Acommit\uFF0C\u5E76\u4E14\u4FDD\u7559\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -- \u6587\u4EF6\u540D  // \u5374\u7B11\u6587\u4EF6\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin \u5206\u652F\u540D --force // \u5F3A\u5236\u8986\u76D6\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>submodule\u64CD\u4F5C</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone --recursive  // \u514B\u9686\u6709submodule\u7684\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule status   // \u67E5\u770B\u4E3Brepo\u4E0B\u7684\u5BF9\u5E94\u7684submodule\u7684commit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule update   // \u66F4\u65B0submodule</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git submodule update --init --recursive  // \u521D\u59CB\u5316submodule\u5E76\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="6"><li>squash\u5408\u5E76commit</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git rebase -i HEAD~3  // \u627E\u5230\u6700\u65B0\u7684\u4E09\u4E2A\u63D0\u4EA4\u5E76\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BF9\u8981\u5408\u5E76\u7684commit\u5C06 pick \u6539\u4E3A squash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F:wq\u4FDD\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="7"><li>cherry-pick \u64CD\u4F5C</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git cherry-pick commitId  // \u5C06commitId\u7684commit\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="gitignore" tabindex="-1">gitignore <a class="header-anchor" href="#gitignore" aria-hidden="true">#</a></h2><ol><li>\u5FFD\u7565\u6587\u4EF6\u5939\u4E0B\u9664\u4E86\u67D0\u4E9B\u6587\u4EF6\u7684\u6240\u6709\u6587\u4EF6</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/model/*           // \u5FFD\u7565/model\u4E0B\u6240\u6709\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">!/model/*.py       // \u9664\u4E86/model\u4E0B\u7684\u6240\u6709.py\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">!/model/1.js       // \u9664\u4E86/model\u4E0B\u76841.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="github-\u63A8\u9001\u6216\u62C9\u53D6\u65F6ssh\u9519\u8BEF" tabindex="-1">github \u63A8\u9001\u6216\u62C9\u53D6\u65F6ssh\u9519\u8BEF <a class="header-anchor" href="#github-\u63A8\u9001\u6216\u62C9\u53D6\u65F6ssh\u9519\u8BEF" aria-hidden="true">#</a></h2><p>\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Cloning into </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packbox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">kex_exchange_identification: read: Software caused connection abort</span></span>
<span class="line"><span style="color:#A6ACCD;">banner exchange: Connection to 20.205.243.166 port 22: Software caused connection abort</span></span>
<span class="line"><span style="color:#A6ACCD;">fatal: Could not </span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;"> from remote repository.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Please make sure you have the correct access rights</span></span>
<span class="line"><span style="color:#A6ACCD;">and the repository exists.</span></span>
<span class="line"></span></code></pre></div><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><ol><li>\u4F7F\u7528https\u514B\u9686\u4ED3\u5E93 \u53CA \u5C06\u4ED3\u5E93\u4E0B<code>.git</code>\u76EE\u5F55\u4E2D<code>config</code>\u6587\u4EF6\u4E2D\u7684<code>url</code>\u6539\u4E3A\u4ED3\u5E93https\u7684\u5730\u5740</li></ol><h2 id="git-lfs" tabindex="-1">git-lfs <a class="header-anchor" href="#git-lfs" aria-hidden="true">#</a></h2><p>\u8BF4\u660E\uFF1A<a href="https://www.jianshu.com/p/493b81544f80" target="_blank" rel="noopener noreferrer">\u7B80\u4E66</a></p><p><a href="https://www.jianshu.com/p/493b81544f80" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/493b81544f80</a> \u8BBE\u7F6Eclone\u65F6\u4E0B\u8F7Dlfs\u6587\u4EF6\uFF1A<code>git lfs install --skip-smudge</code></p><p>\u6216clone\u65F6\u6DFB\u52A0\uFF1A<code>GIT_LFS_SKIP_SMUDGE=1 git clone ...</code></p><p>\u4F7F\u7528\u6307\u5357\uFF1A<a href="https://sabicalija.github.io/git-lfs-intro/" target="_blank" rel="noopener noreferrer">\u6307\u5357</a></p><h2 id="window\u7535\u8111\u914D\u7F6E\u4E24\u4E2Agithub\u8D26\u53F7\u8BBE\u7F6E\uFF1A" tabindex="-1">window\u7535\u8111\u914D\u7F6E\u4E24\u4E2Agithub\u8D26\u53F7\u8BBE\u7F6E\uFF1A <a class="header-anchor" href="#window\u7535\u8111\u914D\u7F6E\u4E24\u4E2Agithub\u8D26\u53F7\u8BBE\u7F6E\uFF1A" aria-hidden="true">#</a></h2><p><a href="https://zhuanlan.zhihu.com/p/107341502" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/107341502</a></p><p><a href="https://www.cnblogs.com/xjnotxj/p/5845574.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/xjnotxj/p/5845574.html</a></p><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1">\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><ol><li>\u51FA\u73B0<code>GnuTLS recv error (-110): The TLS connection was non-properly terminated.</code></li></ol><p>\u89E3\u51B3\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># apt-get install gnutls-bin \u6839\u636E\u60C5\u51B5\uFF0C\u4E0D\u4E00\u5B9A\u9700\u8981</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global http.sslVerify </span><span style="color:#82AAFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global http.postBuffer 1048576000</span></span>
<span class="line"></span></code></pre></div>`,46),o=[e];function c(t,i,r,C,A,g){return a(),n("div",null,o)}var h=s(p,[["render",c]]);export{y as __pageData,h as default};
