import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render a message to screen from props', () => {
    const expected = 'Hello World!';

    //Montera vår komponent HelloWorld och skicka med som props ett meddelande
    const wrapper = shallowMount(HelloWorld, { propsData: {
      message: 'Hello World!'
    }});

    //Hämta ut elementet h1 från HTML:en. Att jämföra med document.querySelector('h1')
    const actual = wrapper.find('h1');
  
    //Jämför texten inuti h1-taggen med det förväntade värdet
    expect(actual.text()).toBe(expected);
  });
})
