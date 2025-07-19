<template>
  <Select :model-value="currentLocale" @update:model-value="handleLocaleChange" :key="currentLocale">
    <SelectTrigger class="w-[110px]">
      <div class="flex items-center gap-2">
        <Icon name="lucide:languages" size="16" />
        <SelectValue :placeholder="currentLocaleDisplayName" />
      </div>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
          <div class="flex items-center gap-2">
            <Icon :name="getLocaleIcon(locale.code)" size="10" />
            {{ locale.name }}
          </div>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script lang="ts" setup>
// 引入i18n相关的composables
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

type LocaleCode = 'en' | 'zh';

/**
 * 可用的语言选项列表
 */
const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code as LocaleCode,
    name: l.name
  }));
});

/**
 * 当前选中的语言代码
 */
const currentLocale = computed({
  get: () => locale.value as LocaleCode,
  set: () => { }
});

/**
 * 当前选中语言的显示名称
 */
const currentLocaleDisplayName = computed(() => {
  const foundLocale = availableLocales.value.find(l => l.code === locale.value);
  return foundLocale ? foundLocale.name : '';
});

/**
 * 获取语言对应的图标
 * @param code 语言代码
 * @returns 图标名称
 */
const getLocaleIcon = (code: LocaleCode) => {
  const icons = {
    en: 'lucide:flag',
    zh: 'lucide:flag'
  };
  return icons[code];
};

/**
 * 处理语言切换
 * @param value 新的语言值
 */
const handleLocaleChange = (value: LocaleCode | null) => {
  if (value) {
    switchLocale(value);
  }
};

/**
 * 切换语言
 * @param newLocale 新的语言代码
 */
const switchLocale = (newLocale: LocaleCode) => {
  // 使用switchLocalePath获取目标语言的路径
  const targetPath = switchLocalePath(newLocale);
  // 导航到新语言的路径
  router.push(targetPath);
};
</script>