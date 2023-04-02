class SoundListen {
    constructor() {
        this.audioContext = null
        this.timer = null
    }
  
    // 定义类的方法
    listen(callback) {
        if (this.audioContext) {
            return
        }
        // 创建一个新的AudioContext对象
        this.audioContext = new AudioContext();

        // 创建一个AnalyserNode对象
        const analyser = this.audioContext.createAnalyser();

        // 将AnalyserNode对象连接到扬声器
        // analyser.connect(this.audioContext.destination);

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        // 创建一个Uint8Array数组来保存音频数据
        const dataArray = new Uint8Array(bufferLength);

        // 每隔一段时间获取当前音频数据
        this.timer = setInterval(() => {
            // 将当前音频数据存储到Uint8Array数组中
            analyser.getByteFrequencyData(dataArray);
            
            // 遍历音频数据，检查是否有声音播放
            let hasSound = false;
            for (let i = 0; i < bufferLength; i++) {
                if (dataArray[i] > 0) {
                hasSound = true;
                break;
                }
            }

            // 如果有声音播放，则输出消息
            if (hasSound) {
                console.log('扬声器正在播放声音');
            }
            callback && callback(hasSound)
        }, 100);
    }

    unlisten() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
        if (!this.audioContext) return;
        this.audioContext.close();
        this.audioContext = null;
    }
}

const soundListen = new SoundListen()

export default soundListen