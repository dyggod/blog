// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from "vitepress/client/theme-default";

// 导入主题样式
import "vitepress-theme-demoblock/theme/styles/index.css";

// 导入插件的主题
import { registerComponents } from "./register-components.js";

// 导入自定义Button
import Button from '../../../src/components/Button.vue'

import '../../../src/styles/index.css';
import './styles/index.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component(Button.name, Button)
    registerComponents(app);
  },
};
