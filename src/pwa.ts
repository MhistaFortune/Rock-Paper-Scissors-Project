import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {},
  onOfflineReady() {},
})

export default updateSW
