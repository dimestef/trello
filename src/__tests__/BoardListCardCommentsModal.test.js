import Vuetify from 'vuetify'
import {mount} from '@vue/test-utils';
import BoardListCardCommentsModal from '../features/boards/components/BoardListCardCommentsModal'
const vuetify = new Vuetify()
const wrapper = mount(BoardListCardCommentsModal, {
    vuetify,
    propsData: {
        show: true,
        card: {}
    }
})

describe('BoardListCardCommentsModal.vue:', () => {
    it('Test vuetify instance', () => {
        expect(wrapper.isVueInstance()).toBe(true)
    })
    it('Test prop show', () => {
        expect(wrapper.props().show).toBe(true)
    })
    it("Test emitting an event", () => {
        wrapper.vm.onClose()

        expect(wrapper.emitted().onClose[0]).toEqual([false])
    })
})
