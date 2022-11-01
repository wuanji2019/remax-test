import * as React from 'react';
import { View, Label, Text, Input } from 'remax/one';
export default () => { 
    const [input, setInput] = React.useState('')
    const onInput = React.useCallback(
      (v: any) => {
        setInput(v.detail)
      },
      []
    )
    const onChange =  React.useCallback(
        (v: any) => {
          console.log(v);
          
        },
        []
      )
    
  return (
    <View className="page"> 
    </View>
  );
};
