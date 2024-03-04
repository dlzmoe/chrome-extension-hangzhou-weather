// Generated by wxt
export {}
declare global {
  const ContentScriptContext: typeof import('wxt/client')['ContentScriptContext']
  const InvalidMatchPattern: typeof import('wxt/sandbox')['InvalidMatchPattern']
  const MatchPattern: typeof import('wxt/sandbox')['MatchPattern']
  const browser: typeof import('wxt/browser')['browser']
  const createIframeUi: typeof import('wxt/client')['createIframeUi']
  const createIntegratedUi: typeof import('wxt/client')['createIntegratedUi']
  const createShadowRootUi: typeof import('wxt/client')['createShadowRootUi']
  const defineBackground: typeof import('wxt/sandbox')['defineBackground']
  const defineConfig: typeof import('wxt')['defineConfig']
  const defineContentScript: typeof import('wxt/sandbox')['defineContentScript']
  const defineUnlistedScript: typeof import('wxt/sandbox')['defineUnlistedScript']
  const fakeBrowser: typeof import('wxt/testing')['fakeBrowser']
  const storage: typeof import('wxt/storage')['storage']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly ContentScriptContext: UnwrapRef<typeof import('wxt/client')['ContentScriptContext']>
    readonly InvalidMatchPattern: UnwrapRef<typeof import('wxt/sandbox')['InvalidMatchPattern']>
    readonly MatchPattern: UnwrapRef<typeof import('wxt/sandbox')['MatchPattern']>
    readonly browser: UnwrapRef<typeof import('wxt/browser')['browser']>
    readonly createIframeUi: UnwrapRef<typeof import('wxt/client')['createIframeUi']>
    readonly createIntegratedUi: UnwrapRef<typeof import('wxt/client')['createIntegratedUi']>
    readonly createShadowRootUi: UnwrapRef<typeof import('wxt/client')['createShadowRootUi']>
    readonly defineBackground: UnwrapRef<typeof import('wxt/sandbox')['defineBackground']>
    readonly defineConfig: UnwrapRef<typeof import('wxt')['defineConfig']>
    readonly defineContentScript: UnwrapRef<typeof import('wxt/sandbox')['defineContentScript']>
    readonly defineUnlistedScript: UnwrapRef<typeof import('wxt/sandbox')['defineUnlistedScript']>
    readonly fakeBrowser: UnwrapRef<typeof import('wxt/testing')['fakeBrowser']>
    readonly storage: UnwrapRef<typeof import('wxt/storage')['storage']>
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly ContentScriptContext: UnwrapRef<typeof import('wxt/client')['ContentScriptContext']>
    readonly InvalidMatchPattern: UnwrapRef<typeof import('wxt/sandbox')['InvalidMatchPattern']>
    readonly MatchPattern: UnwrapRef<typeof import('wxt/sandbox')['MatchPattern']>
    readonly browser: UnwrapRef<typeof import('wxt/browser')['browser']>
    readonly createIframeUi: UnwrapRef<typeof import('wxt/client')['createIframeUi']>
    readonly createIntegratedUi: UnwrapRef<typeof import('wxt/client')['createIntegratedUi']>
    readonly createShadowRootUi: UnwrapRef<typeof import('wxt/client')['createShadowRootUi']>
    readonly defineBackground: UnwrapRef<typeof import('wxt/sandbox')['defineBackground']>
    readonly defineConfig: UnwrapRef<typeof import('wxt')['defineConfig']>
    readonly defineContentScript: UnwrapRef<typeof import('wxt/sandbox')['defineContentScript']>
    readonly defineUnlistedScript: UnwrapRef<typeof import('wxt/sandbox')['defineUnlistedScript']>
    readonly fakeBrowser: UnwrapRef<typeof import('wxt/testing')['fakeBrowser']>
    readonly storage: UnwrapRef<typeof import('wxt/storage')['storage']>
  }
}
