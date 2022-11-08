export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const CommonsAboutUs = () => import('../../components/commons/AboutUs.vue' /* webpackChunkName: "components/commons-about-us" */).then(c => wrapFunctional(c.default || c))
export const CommonsCarousel = () => import('../../components/commons/Carousel.vue' /* webpackChunkName: "components/commons-carousel" */).then(c => wrapFunctional(c.default || c))
export const CommonsDropdown = () => import('../../components/commons/Dropdown.vue' /* webpackChunkName: "components/commons-dropdown" */).then(c => wrapFunctional(c.default || c))
export const CommonsGotoTop = () => import('../../components/commons/GotoTop.vue' /* webpackChunkName: "components/commons-goto-top" */).then(c => wrapFunctional(c.default || c))
export const CommonsInput = () => import('../../components/commons/Input.vue' /* webpackChunkName: "components/commons-input" */).then(c => wrapFunctional(c.default || c))
export const CommonsOurGames = () => import('../../components/commons/OurGames.vue' /* webpackChunkName: "components/commons-our-games" */).then(c => wrapFunctional(c.default || c))
export const LayoutsFooter = () => import('../../components/layouts/footer.vue' /* webpackChunkName: "components/layouts-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutsHeader = () => import('../../components/layouts/header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
