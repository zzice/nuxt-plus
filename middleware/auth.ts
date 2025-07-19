export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp = useNuxtApp();
    const user = useSupabaseUser();
    const i18nInstance = nuxtApp.$i18n;
    let currentRedirectPath = '/login';
    if (i18nInstance && i18nInstance.locale) {
        let localeValue = i18nInstance.locale.value
        if (localeValue && localeValue !== (i18nInstance.defaultLocale || 'en')) {
            currentRedirectPath = `/${localeValue}/login`;
        }
    }
    if (!user.value) {
        return navigateTo(currentRedirectPath);
    }
});
