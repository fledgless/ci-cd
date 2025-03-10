import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe('HelloWorld.vue', () => {
    it('Should display props message', () => {
        const msg = "Mon super message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }, 
        });
        expect(wrapper.text()).toMatch(msg);
    })
})