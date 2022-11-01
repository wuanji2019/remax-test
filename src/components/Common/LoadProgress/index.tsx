import * as React from 'react'
import { View } from 'remax/one';
import clsx from 'clsx';

export type cuCustomType = {
    statusLoadProgress: boolean;
    customBar: Number;
};

export default (props: any) => { 
    const { statusLoadProgress, customBar } = props
    const [loadProgress, setLoadProgress] = React.useState(0)
    React.useEffect(() => {
    if (statusLoadProgress) {
        setLoadProgress((v: number) => v + 3)
    } else {
        setLoadProgress(0)
    }
    }, [statusLoadProgress])

    React.useEffect(() => {
        let t: any
        if (loadProgress < 100 && loadProgress > 0) {
            console.log('bbb')
            t = setTimeout(() => setLoadProgress((v: number) => v + 3))
        }
        return () => {
            clearTimeout(t)
        }
    }, [loadProgress])
    return (
        <View className={clsx("load-progress", loadProgress != 0 ? 'show': 'hide' )}  style={{top: customBar+'PX'}}>
          <View className="load-progress-bar bg-green" style={{ transform: 'translate3d(-' + (100-loadProgress) + '%, 0px, 0px)' }}></View>
        </View>
    )
}