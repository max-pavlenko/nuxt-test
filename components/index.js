export const DateDescription = () => import('../..\\components\\DateDescription.vue' /* webpackChunkName: "components/date-description" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const ProjectCard = () => import('../..\\components\\ProjectCard.vue' /* webpackChunkName: "components/project-card" */).then(c => wrapFunctional(c.default || c))
export const FormsLoginForm = () => import('../..\\components\\forms\\LoginForm.vue' /* webpackChunkName: "components/forms-login-form" */).then(c => wrapFunctional(c.default || c))
export const FormsSignupForm = () => import('../..\\components\\forms\\SignupForm.vue' /* webpackChunkName: "components/forms-signup-form" */).then(c => wrapFunctional(c.default || c))
export const ModalsEditCompanyModal = () => import('../..\\components\\modals\\EditCompanyModal.vue' /* webpackChunkName: "components/modals-edit-company-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalsModal = () => import('../..\\components\\modals\\Modal.vue' /* webpackChunkName: "components/modals-modal" */).then(c => wrapFunctional(c.default || c))
export const UiButton = () => import('../..\\components\\ui\\Button.vue' /* webpackChunkName: "components/ui-button" */).then(c => wrapFunctional(c.default || c))
export const UiInput = () => import('../..\\components\\ui\\Input.vue' /* webpackChunkName: "components/ui-input" */).then(c => wrapFunctional(c.default || c))

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
