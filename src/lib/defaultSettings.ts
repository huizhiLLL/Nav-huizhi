export interface SettingItem {
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json';
  group: 'basic' | 'seo' | 'feature' | 'analytics';
  description?: string;
}

export const defaultSettings: SettingItem[] = [
  // 基础设置
  {
    key: "websiteName",
    value: "Pintree",
    type: "string",
    group: "basic",
    description: "网站名称"
  },
  {
    key: "logoUrl",
    value: "/logo.png",
    type: "string",
    group: "basic",
    description: "网站Logo (建议尺寸: 520x120px)"
  },
  {
    key: "faviconUrl",
    value: "/favicon.ico",
    type: "string",
    group: "basic",
    description: "网站图标"
  },
  {
    key: "copyrightText",
    value: "© 2024 Pintree. All rights reserved.",
    type: "string",
    group: "basic",
    description: "版权信息"
  },
  {
    key: "contactEmail",
    value: "",
    type: "string",
    group: "basic",
    description: "联系邮箱"
  },

  // 功能设置
  {
    key: "enableSearch",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用搜索功能"
  },
  {
    key: "enableBackToTop",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用返回顶部按钮"
  },
  {
    key: "enableCtaButton",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用CTA按钮"
  },
  {
    key: "ctaButtonText",
    value: "Claim your Pintree",
    type: "string",
    group: "feature",
    description: "CTA按钮文字"
  },
  {
    key: "ctaButtonLink",
    value: "https://pintree.io",
    type: "string",
    group: "feature",
    description: "CTA按钮链接"
  },
  {
    key: "ctaButtonStyle",
    value: "primary",
    type: "string",
    group: "feature",
    description: "CTA按钮样式"
  },

  // 统计分析
  {
    key: "clarityId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Microsoft Clarity ID"
  },
];

export const defaultImages = [
  {
    name: "logo.png",
    image: "/default-images/logo.png",
    type: "default",
    settingKeys: [
      {
        key: "logoUrl",
      },
    ],
  },
  {
    name: "favicon.ico",
    image: "/default-images/favicon.ico",
    type: "default",
    settingKeys: [
      {
        key: "faviconUrl",
      },
    ],
  },
];
