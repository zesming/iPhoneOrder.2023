import { sleep } from '@/app/shared/util'

const sendSelfNotificatioin = async ({ url }: { url?: string }) => {
    if (!url) return
    
    return Promise.race([
        sleep(5),
        new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({type: 'api', URL: url})
        }),
    ])
}

export default sendSelfNotificatioin
