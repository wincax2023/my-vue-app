const UaParser = require('ua-parser-js');
const parser = new UaParser();

const isSafari = () => {
    return parser.getBrowser().name === 'Safari';
};

const isQQ = () => {
    return parser.getBrowser().name.includes('QQ');
};

const isMacOS = () => {
    return parser.getOS().name === 'Mac OS';
};

const isMobile = parser.getDevice().type === 'mobile';

const isWechat = parser.getBrowser().name === 'WeChat';
export { isSafari, isQQ, isMobile, isWechat, isMacOS };
