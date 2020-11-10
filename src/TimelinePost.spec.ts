import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', () => {

  it('renders todays post by default', async () => {
    const wrapper = mount(Timeline)

    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1)

    const $thisWeek = wrapper.findAll('[data-test="period"]')[1]
    await $thisWeek.trigger('click')

    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2)

    const $thisMonth = wrapper.findAll('[data-test="period"]')[2]
    await $thisMonth.trigger('click')

    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(3)
  })

  it('renders a post with a title', () => {
    const wrapper = mount(Timeline)
    const $post = wrapper.findAll('[data-test="post"]')[0]
    expect($post).not.toBeNull();
  })

})
