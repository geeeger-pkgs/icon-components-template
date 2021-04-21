# ColorfulIcon 彩色图标

### 介绍

特殊彩色图标

### 引入

```js
import Vue from 'vue';
import { ColorfulIcon } from 'colorful-icon-components';

Vue.use(ColorfulIcon);
```

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础用法" card>
      <colorful-icon name="clear" />
      <colorful-icon name="wechat" />
    </demo-block>
  </demo-section>
</template>

```

## API

### Props

| 参数 | 说明   | 类型               | 默认值   |
| ---- | ------ | ------------------ | -------- |
| width | 大小   | _string \| number_ | `32px` |
| height | 大小   | _string \| number_ | `32px` |
| name | 标识符，仅ColorfulIcon组件可用 | _string_           | -        |
