import * as React from 'react';
import { View, Label, Text } from 'remax/one';
import clsx from 'clsx';
import Checkbox from '@/components/CrossPlat/Checkbox';
import CheckboxGroup from '@/components/CrossPlat/CheckboxGroup';

export default () => { 
 const todo = [
    { id: '1', text: 'Learning Javascript', completed: true },
    { id: '2', text: 'Learning ES2016', completed: true },
    { id: '3', text: 'Learning Remax', completed: false },
  ]

  return (
    <View className="page"> 
      <View className="todo-items">
        <CheckboxGroup className="todo-items-group" >
          {todo.map((item) => (
            <Label
              key={item.id}
              className={clsx('todo-item', {
                checked: item.completed,
              })}
            >
              <Checkbox
                className="todo-item-checkbox"
                value={item.id}
                checked={item.completed}
              />
              <Text className="todo-item-text">{item.text}</Text>
            </Label>
          ))}
        </CheckboxGroup>
      </View>
    </View>
  );
};
