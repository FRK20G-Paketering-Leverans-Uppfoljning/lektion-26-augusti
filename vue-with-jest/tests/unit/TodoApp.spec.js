import TodoApp from '@/components/TodoApp';
import { shallowMount } from '@vue/test-utils';

it('should render the todo from the input field', async () => {
  const expected = 1;
  const wrapper = shallowMount(TodoApp, {});

  const inputElem = wrapper.find('#todo-text');
  await inputElem.setValue('Köp kaffe');

  const buttonElem = wrapper.find('button');
  await buttonElem.trigger('click');

  const todosCount = wrapper.findAll('ul > li').length;
  expect(todosCount).toBe(expected);
});