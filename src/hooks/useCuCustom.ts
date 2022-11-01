import { useDispatch } from 'react-redux';
import { setStatusBar, setCustom, setCustomBar } from '@/store/model/setting'
import { getSystemInfo, getMenuButtonBoundingClientRect } from '@/apis/CrossPlat';
export default () => {
    const dispatch = useDispatch()
    const setGlobalData = () => {
        getSystemInfo({
            success: (e: { statusBarHeight: number; }) => {
                e.statusBarHeight && dispatch(setStatusBar(e.statusBarHeight))
                let capsule = getMenuButtonBoundingClientRect();
                if (capsule) {
                dispatch(setCustom(capsule))
                const customBar = capsule.bottom + capsule.top - e.statusBarHeight;
                dispatch(setCustomBar(customBar))
                } else {
                const customBar = e.statusBarHeight + 50;
                dispatch(setCustomBar(customBar))
                }
            }
        })
    }
    
    return {setGlobalData}
}