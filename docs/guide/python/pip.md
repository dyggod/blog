# python

## pip

### 切换源

```bash
# 查看源
pip config list

# 单个包临时切换源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package  # 清华源

# 切换全局源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 清华源
```

## 安装虚拟环境

```bash
pip install virtualenv
```

## 创建虚拟环境

```bash
virtualenv venv

venv/bin/activate  # Linux/macOS 激活虚拟环境

venv/scripts/activate  # Windows 激活虚拟环境

deactivate  # 退出虚拟环境
```

### 如果激活时提示 'Permission denied'

```bash
source venv/bin/activate
```

## requirements.txt 使用

```bash
# 生成 requirements.txt
pip freeze > requirements.txt

# 安装 requirements.txt
pip install -r requirements.txt
```

